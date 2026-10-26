/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Customer, RiskConfig, NavPage } from './types';
import { DEFAULT_RISK_CONFIG } from './utils/scoringEngine';
import { api } from './services/api';
import { Sidebar } from './components/Sidebar';
import { TopNav } from './components/TopNav';
import { PortfolioDashboard } from './components/PortfolioDashboard';
import { CustomerWiseDashboard } from './components/CustomerWiseDashboard';
import { SegmentWiseDashboard } from './components/SegmentWiseDashboard';
import { CustomerSearch } from './components/CustomerSearch';
import { EarlyWarningAlerts } from './components/EarlyWarningAlerts';
import { RiskReports } from './components/RiskReports';
import { PredictionView } from './components/PredictionView';
import { ExplanationGuide } from './components/ExplanationGuide';
import { Check, Sliders, DollarSign, RefreshCw } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavPage>('dashboard');
  const [selectedCustomerId, setSelectedCustomerId] = useState<string>('C003');
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [config, setConfig] = useState<RiskConfig>(DEFAULT_RISK_CONFIG);
  const [activeAlertCount, setActiveAlertCount] = useState<number>(12);
  const [sidebarMobileOpen, setSidebarMobileOpen] = useState<boolean>(false);
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');

  // Load customer index for customer switcher and report menus
  useEffect(() => {
    api.searchCustomers(undefined, undefined, undefined, config)
      .then((data: Customer[]) => {
        setCustomers(data);
        // Default to C003 if available, or first customer
        if (data.length > 0 && !data.some((c) => c.id === selectedCustomerId)) {
          const matchC003 = data.find((c) => c.id === 'C003');
          setSelectedCustomerId(matchC003 ? matchC003.id : data[0].id);
        }
      })
      .catch((err: unknown) => {
        console.error('Error fetching customers in App root:', err);
      });

    api.getAlerts()
      .then((alerts: any[]) => {
        setActiveAlertCount(alerts.filter((a: any) => a.status !== 'Resolved').length || 12);
      })
      .catch((err: unknown) => {
        console.error('Error fetching alerts in App root:', err);
      });
  }, [config]);

  const handleExportReport = () => {
    setCurrentPage('reports');
  };

  const handleAddCustomerNote = (customerId: string, noteText: string) => {
    setCustomers((prev) =>
      prev.map((c) => {
        if (c.id === customerId) {
          const notes = c.notes || [];
          return {
            ...c,
            notes: [
              {
                id: `note-${Date.now()}`,
                author: 'Risk Officer',
                date: 'Just now',
                text: noteText,
              },
              ...notes,
            ],
          };
        }
        return c;
      })
    );
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#1A1816] flex font-sans antialiased overflow-x-hidden">
      {/* 1. Left Sidebar Navigation matching screenshot */}
      <Sidebar
        currentPage={currentPage}
        onNavigate={(page: NavPage) => {
          setCurrentPage(page);
          setSidebarMobileOpen(false);
        }}
        activeAlertCount={activeAlertCount}
        isOpenMobile={sidebarMobileOpen}
        onToggleMobile={() => setSidebarMobileOpen(!sidebarMobileOpen)}
        onOpenSettings={() => setCurrentPage('settings')}
      />

      {/* 2. Main Viewport Container (offset for fixed sidebar on lg screen) */}
      <div className="flex-1 flex flex-col min-w-0 lg:pl-60 min-h-screen">
        {/* Top Header Bar */}
        <TopNav
          customers={customers}
          onSearchSelect={(id: string) => {
            setSelectedCustomerId(id);
            setCurrentPage('dashboard');
          }}
          onExportReport={handleExportReport}
          onToggleSidebar={() => setSidebarMobileOpen(true)}
        />

        {/* Workspace Body */}
        <main className="flex-1 flex flex-col min-h-0 bg-[#FBF9F5]">
          {/* Main Portfolio Dashboard (Exact screenshot inspiration) */}
          {(currentPage === 'dashboard' || currentPage === 'customer-dashboard') && (
            <PortfolioDashboard
              customers={customers}
              selectedCustomerId={selectedCustomerId}
              onSelectCustomer={(id: string) => setSelectedCustomerId(id)}
              onNavigate={(page: NavPage) => setCurrentPage(page)}
              currency={currency}
              onAddNote={handleAddCustomerNote}
            />
          )}

          {/* Customers Directory Page */}
          {(currentPage === 'customers' || currentPage === 'search') && (
            <div className="px-4 sm:px-8 py-6 max-w-7xl w-full mx-auto">
              <CustomerSearch
                config={config}
                onSelectCustomer={(id) => {
                  setSelectedCustomerId(id);
                  setCurrentPage('dashboard');
                }}
                onNavigate={(page) => setCurrentPage(page)}
              />
            </div>
          )}

          {/* Risk Analysis / ML Prediction View */}
          {(currentPage === 'risk-analysis' || currentPage === 'prediction' || currentPage === 'assessment') && (
            <div className="px-4 sm:px-8 py-6 max-w-7xl w-full mx-auto">
              <PredictionView
                selectedCustomerId={selectedCustomerId}
                customers={customers}
                config={config}
                onSelectCustomer={(id: string) => setSelectedCustomerId(id)}
                onNavigate={(page: NavPage) => setCurrentPage(page)}
              />
            </div>
          )}

          {/* Segments Page */}
          {(currentPage === 'segments' || currentPage === 'segment-dashboard' || currentPage === 'segmentation') && (
            <div className="px-4 sm:px-8 py-6 max-w-7xl w-full mx-auto">
              <SegmentWiseDashboard
                config={config}
                onNavigate={(page) => setCurrentPage(page)}
                onSelectCustomer={(id) => {
                  setSelectedCustomerId(id);
                  setCurrentPage('dashboard');
                }}
              />
            </div>
          )}

          {/* Alerts Page */}
          {currentPage === 'alerts' && (
            <div className="px-4 sm:px-8 py-6 max-w-7xl w-full mx-auto">
              <EarlyWarningAlerts
                onSelectCustomer={(id) => {
                  setSelectedCustomerId(id);
                  setCurrentPage('dashboard');
                }}
                onNavigate={(page) => setCurrentPage(page)}
                onAlertsCountChange={(count) => setActiveAlertCount(count)}
              />
            </div>
          )}

          {/* Model Insights / Explanation Guide */}
          {(currentPage === 'model-insights' || currentPage === 'explanation') && (
            <div className="px-4 sm:px-8 py-6 max-w-7xl w-full mx-auto">
              <ExplanationGuide
                customers={customers}
                config={config}
                onSelectCustomer={(id: string) => setSelectedCustomerId(id)}
                onNavigate={(page: NavPage) => setCurrentPage(page)}
              />
            </div>
          )}

          {/* Reports Page */}
          {(currentPage === 'reports' || currentPage === 'upload-report') && (
            <div className="px-4 sm:px-8 py-6 max-w-7xl w-full mx-auto">
              <RiskReports
                selectedCustomerId={selectedCustomerId}
                customers={customers}
                config={config}
                onSelectCustomer={(id) => setSelectedCustomerId(id)}
                onNavigate={(page) => setCurrentPage(page)}
                initialMode={currentPage === 'upload-report' ? 'verify' : 'generate'}
              />
            </div>
          )}

          {/* Settings Page */}
          {currentPage === 'settings' && (
            <div className="px-4 sm:px-8 py-8 max-w-4xl w-full mx-auto space-y-6">
              <div>
                <h1 className="text-2xl font-bold font-serif-heading text-[#1A1816]">
                  System Settings &amp; Preferences
                </h1>
                <p className="text-xs text-[#767069] mt-1 font-sans">
                  Configure portfolio currency formatting, risk thresholds, and model scoring calibration.
                </p>
              </div>

              {/* Currency Selector */}
              <div className="bg-white border border-[#EBE6DC] rounded-xl p-6 shadow-xs space-y-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#1A1816]">
                  <DollarSign className="w-4 h-4 text-[#BA5641]" />
                  <span>Currency Representation</span>
                </div>
                <p className="text-xs text-[#767069]">
                  Select the currency symbol and number localization format displayed across metrics, tables, and reports.
                </p>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setCurrency('INR')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                      currency === 'INR'
                        ? 'border-[#BA5641] bg-[#FCECE7] text-[#BA5641] font-semibold'
                        : 'border-[#E5DFD4] bg-[#FAF7F2] text-[#1A1816] hover:bg-white'
                    }`}
                  >
                    <span>₹ Indian Rupee (INR)</span>
                    {currency === 'INR' && <Check className="w-3.5 h-3.5" />}
                  </button>
                  <button
                    onClick={() => setCurrency('USD')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                      currency === 'USD'
                        ? 'border-[#BA5641] bg-[#FCECE7] text-[#BA5641] font-semibold'
                        : 'border-[#E5DFD4] bg-[#FAF7F2] text-[#1A1816] hover:bg-white'
                    }`}
                  >
                    <span>$ US Dollar (USD)</span>
                    {currency === 'USD' && <Check className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Risk Tier Calibration */}
              <div className="bg-white border border-[#EBE6DC] rounded-xl p-6 shadow-xs space-y-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#1A1816]">
                  <Sliders className="w-4 h-4 text-[#BA5641]" />
                  <span>Underwriting Risk Calibration Bounds</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="space-y-1.5">
                    <label className="text-[#767069] font-medium">Low Risk Upper Threshold (%)</label>
                    <input
                      type="number"
                      value={config.lowRiskUpperBound}
                      onChange={(e) =>
                        setConfig({ ...config, lowRiskUpperBound: Number(e.target.value) || 34 })
                      }
                      className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E5DFD4] rounded-lg text-xs font-mono outline-none"
                    />
                    <span className="text-[11px] text-[#9C958D]">Accounts below this bound are classified Low Risk.</span>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[#767069] font-medium">High Risk Lower Threshold (%)</label>
                    <input
                      type="number"
                      value={config.highRiskLowerBound}
                      onChange={(e) =>
                        setConfig({ ...config, highRiskLowerBound: Number(e.target.value) || 65 })
                      }
                      className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E5DFD4] rounded-lg text-xs font-mono outline-none"
                    />
                    <span className="text-[11px] text-[#9C958D]">Accounts at or above this bound trigger High Risk warnings.</span>
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => setCurrentPage('dashboard')}
                    className="px-4 py-2 bg-[#BA5641] hover:bg-[#A54935] text-white text-xs font-medium rounded-lg transition-colors cursor-pointer"
                  >
                    Apply &amp; Return to Dashboard
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
