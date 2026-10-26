/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import {
  TrendingUp,
  Filter,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Check,
  Sliders,
  RotateCcw,
  ShieldCheck,
  AlertTriangle,
  ShieldAlert,
  Info,
  Download,
  Share2,
  CheckSquare,
  Square,
  X,
} from 'lucide-react';
import { Customer, RiskTier, NavPage } from '../types';
import { CustomerDetailDrawer } from './CustomerDetailDrawer';

export interface PortfolioDashboardProps {
  customers: Customer[];
  selectedCustomerId?: string;
  onSelectCustomer: (id: string) => void;
  onNavigate: (page: NavPage) => void;
  currency?: 'INR' | 'USD';
  onAddNote?: (customerId: string, noteText: string) => void;
}

export const PortfolioDashboard: React.FC<PortfolioDashboardProps> = ({
  customers,
  selectedCustomerId = 'C003',
  onSelectCustomer,
  onNavigate,
  currency = 'INR',
  onAddNote,
}) => {
  // Drawer open state (open by default, matching screenshot)
  const [drawerOpen, setDrawerOpen] = useState(true);

  // Table filters & sorting
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [segmentFilter, setSegmentFilter] = useState<string>('All Segments');
  const [riskFilter, setRiskFilter] = useState<string>('All Risk Levels');
  const [ageGroupFilter, setAgeGroupFilter] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string>('Default Probability');
  const [sortOrder, setSortOrder] = useState<'desc' | 'asc'>('desc');
  const [currentPageNum, setCurrentPageNum] = useState<number>(1);
  const pageSize = 8; // Exactly 8 items per page, matching screenshot!

  // Multi-selection state for table rows
  const [selectedRowIds, setSelectedRowIds] = useState<string[]>(['C003']);
  const [batchActionNotice, setBatchActionNotice] = useState<string | null>(null);

  // Interactive Risk Thresholds (Expressed in decimal 0.00 – 1.00)
  // Low Risk: <= lowThreshold (e.g. 0.20)
  // Medium Risk: > lowThreshold && <= highThreshold (e.g. 0.20 - 0.50)
  // High Risk: > highThreshold (e.g. > 0.50)
  const [lowThreshold, setLowThreshold] = useState<number>(0.20);
  const [highThreshold, setHighThreshold] = useState<number>(0.50);
  const [showThresholdConfig, setShowThresholdConfig] = useState<boolean>(false);

  const currencySymbol = currency === 'INR' ? '₹' : '$';

  const formatCurrency = (val: number) => {
    if (currency === 'INR') {
      return `${currencySymbol}${val.toLocaleString('en-IN')}`;
    }
    return `${currencySymbol}${val.toLocaleString('en-US')}`;
  };

  // Helper to re-evaluate customer risk tier dynamically based on active thresholds
  const getCustomerTier = (c: Customer): RiskTier => {
    const prob = c.calibratedProbability ?? 0.18;
    if (prob > highThreshold) return 'High';
    if (prob > lowThreshold) return 'Medium';
    return 'Low';
  };

  // Dynamically calculated portfolio totals based on active thresholds
  const dynamicPortfolio = useMemo(() => {
    const total = customers.length || 200;
    let low = 0;
    let med = 0;
    let high = 0;
    let sumProb = 0;

    customers.forEach((c) => {
      const p = c.calibratedProbability ?? 0.18;
      sumProb += p;
      if (p > highThreshold) high++;
      else if (p > lowThreshold) med++;
      else low++;
    });

    const avgProb = total > 0 ? sumProb / total : 0.18;

    return {
      total,
      lowCount: low,
      medCount: med,
      highCount: high,
      avgProb,
      highPct: ((high / total) * 100).toFixed(1),
      medPct: ((med / total) * 100).toFixed(1),
      lowPct: ((low / total) * 100).toFixed(1),
    };
  }, [customers, lowThreshold, highThreshold]);

  // Selected active customer
  const activeCustomer = useMemo(() => {
    if (!customers || customers.length === 0) return null;
    const match = customers.find((c) => c.id === selectedCustomerId);
    return match || customers[0];
  }, [customers, selectedCustomerId]);

  // Unique segments for dropdown
  const uniqueSegments = useMemo(() => {
    const set = new Set<string>();
    customers.forEach((c) => {
      if (c.segment) set.add(c.segment);
    });
    return Array.from(set);
  }, [customers]);

  // Filtered & Sorted Customer List
  const filteredCustomers = useMemo(() => {
    let list = [...customers];

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      list = list.filter(
        (c) =>
          c.fullName.toLowerCase().includes(q) ||
          c.id.toLowerCase().includes(q) ||
          c.email.toLowerCase().includes(q)
      );
    }

    // Segment filter
    if (segmentFilter !== 'All Segments') {
      list = list.filter((c) => c.segment === segmentFilter);
    }

    // Risk Level filter (dynamic to thresholds)
    if (riskFilter !== 'All Risk Levels') {
      const targetTier = riskFilter.replace(' Risk', '') as RiskTier;
      list = list.filter((c) => getCustomerTier(c) === targetTier);
    }

    // Age Group filter (triggered from Age bar chart)
    if (ageGroupFilter) {
      list = list.filter((c) => {
        const age = c.age;
        if (ageGroupFilter === '< 25') return age < 25;
        if (ageGroupFilter === '25 – 35') return age >= 25 && age <= 35;
        if (ageGroupFilter === '35 – 45') return age > 35 && age <= 45;
        if (ageGroupFilter === '45 – 55') return age > 45 && age <= 55;
        if (ageGroupFilter === '> 55') return age > 55;
        return true;
      });
    }

    // Sorting
    list.sort((a, b) => {
      let valA = 0;
      let valB = 0;

      if (sortBy === 'Default Probability') {
        valA = a.calibratedProbability ?? 0;
        valB = b.calibratedProbability ?? 0;
      } else if (sortBy === 'Credit Utilization') {
        valA = a.creditUtilization ?? 0;
        valB = b.creditUtilization ?? 0;
      } else if (sortBy === 'Annual Income') {
        valA = a.annualIncome ?? 0;
        valB = b.annualIncome ?? 0;
      } else if (sortBy === 'Age') {
        valA = a.age ?? 0;
        valB = b.age ?? 0;
      } else {
        return a.id.localeCompare(b.id);
      }

      return sortOrder === 'desc' ? valB - valA : valA - valB;
    });

    return list;
  }, [customers, searchQuery, segmentFilter, riskFilter, ageGroupFilter, sortBy, sortOrder, lowThreshold, highThreshold]);

  const totalPages = Math.ceil(filteredCustomers.length / pageSize) || 1;
  const startIndex = (currentPageNum - 1) * pageSize;
  const paginatedCustomers = filteredCustomers.slice(startIndex, startIndex + pageSize);

  const handleRowClick = (customer: Customer) => {
    onSelectCustomer(customer.id);
    setSelectedRowIds([customer.id]);
    setDrawerOpen(true);
  };

  const handleToggleRowSelect = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (selectedRowIds.includes(id)) {
      setSelectedRowIds(selectedRowIds.filter((item) => item !== id));
    } else {
      setSelectedRowIds([...selectedRowIds, id]);
    }
  };

  const handleToggleSelectAll = () => {
    const pageIds = paginatedCustomers.map((c) => c.id);
    const allSelected = pageIds.every((id) => selectedRowIds.includes(id));
    if (allSelected) {
      setSelectedRowIds(selectedRowIds.filter((id) => !pageIds.includes(id)));
    } else {
      const merged = Array.from(new Set([...selectedRowIds, ...pageIds]));
      setSelectedRowIds(merged);
    }
  };

  const handleBatchAction = (actionName: string) => {
    setBatchActionNotice(`Applied "${actionName}" to ${selectedRowIds.length} selected cardholder accounts.`);
    setTimeout(() => setBatchActionNotice(null), 4000);
  };

  return (
    <div className="flex-1 flex overflow-hidden relative">
      {/* Center Main Dashboard Content Area */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 space-y-6">
        {/* Welcome Greeting & Active Filters Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h1 className="text-3xl sm:text-4xl font-semibold font-serif-heading text-[#1A1816] tracking-tight">
              Good morning, Saanvi.
            </h1>
            <p className="text-sm text-[#767069] mt-0.5 font-sans">
              Here's a snapshot of your credit risk portfolio.
            </p>
          </div>

          {/* Quick Drawer Opener if Closed */}
          {!drawerOpen && activeCustomer && (
            <button
              onClick={() => setDrawerOpen(true)}
              className="px-3.5 py-2 bg-white border border-[#E5DFD4] hover:bg-[#FAF7F2] text-xs font-semibold text-[#BA5641] rounded-lg shadow-2xs transition-colors cursor-pointer self-start sm:self-auto"
            >
              Inspect {activeCustomer.fullName} ({activeCustomer.id}) →
            </button>
          )}
        </div>

        {/* 4 Clickable Metric KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {/* 1. Total Customers (Click to reset filters) */}
          <button
            onClick={() => {
              setRiskFilter('All Risk Levels');
              setSegmentFilter('All Segments');
              setAgeGroupFilter(null);
              setSearchQuery('');
              setCurrentPageNum(1);
            }}
            className="bg-white border border-[#EBE6DC] hover:border-[#BA5641]/50 rounded-xl p-5 shadow-xs flex flex-col justify-between text-left transition-all cursor-pointer group"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#767069] font-normal block">
                  Total Customers
                </span>
                <span className="text-[10px] font-mono text-[#9C958D] group-hover:text-[#BA5641] transition-colors">
                  RESET
                </span>
              </div>
              <div className="text-3xl font-bold font-sans text-[#1A1816] mt-2 tracking-tight group-hover:text-[#BA5641] transition-colors">
                {dynamicPortfolio.total}
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[#2E7D4C] font-medium mt-3">
              <span className="text-xs">▲</span>
              <span>+12% from last month</span>
            </div>
          </button>

          {/* 2. Predicted High Risk (Click to filter High Risk) */}
          <button
            onClick={() => {
              setRiskFilter(riskFilter === 'High Risk' ? 'All Risk Levels' : 'High Risk');
              setCurrentPageNum(1);
            }}
            className={`bg-white border rounded-xl p-5 shadow-xs flex flex-col justify-between text-left relative overflow-hidden transition-all cursor-pointer group ${
              riskFilter === 'High Risk'
                ? 'border-[#BA5641] ring-2 ring-[#BA5641]/20 bg-[#FDF9F7]'
                : 'border-[#EBE6DC] hover:border-[#BA5641]/50'
            }`}
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#767069] font-normal block">
                  Predicted High Risk
                </span>
                <span className="text-[10px] font-mono text-[#BA5641]">
                  {riskFilter === 'High Risk' ? 'ACTIVE' : 'FILTER'}
                </span>
              </div>
              <div className="text-3xl font-bold font-sans text-[#BA5641] mt-2 tracking-tight">
                {dynamicPortfolio.highCount}
              </div>
            </div>
            <div className="text-xs text-[#767069] mt-3">
              <span>{dynamicPortfolio.highPct}% of total (PD &gt; {(highThreshold * 100).toFixed(0)}%)</span>
            </div>
            {/* Subtle red indicator line at bottom */}
            <div className="absolute bottom-0 left-5 w-10 h-0.5 bg-[#BA5641] rounded-full" />
          </button>

          {/* 3. Avg. Default Probability (Click to sort by probability) */}
          <button
            onClick={() => {
              setSortBy('Default Probability');
              setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc');
            }}
            className="bg-white border border-[#EBE6DC] hover:border-[#A86438]/50 rounded-xl p-5 shadow-xs flex flex-col justify-between text-left transition-all cursor-pointer group"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#767069] font-normal block">
                  Avg. Default Probability
                </span>
                <span className="text-[10px] font-mono text-[#A86438]">
                  SORT ⇅
                </span>
              </div>
              <div className="text-3xl font-bold font-sans text-[#A86438] mt-2 tracking-tight">
                {dynamicPortfolio.avgProb.toFixed(2)}
              </div>
            </div>
            <div className="text-xs text-[#767069] mt-3">
              <span>Across all {dynamicPortfolio.total} customers</span>
            </div>
          </button>

          {/* 4. Model Accuracy (Click to view model insights) */}
          <button
            onClick={() => onNavigate('model-insights')}
            className="bg-white border border-[#EBE6DC] hover:border-[#1A1816]/40 rounded-xl p-5 shadow-xs flex flex-col justify-between text-left relative overflow-hidden transition-all cursor-pointer group"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#767069] font-normal block">
                  Model Accuracy
                </span>
                <span className="text-[10px] font-mono text-[#767069] group-hover:text-[#BA5641] transition-colors">
                  VIEW METRICS →
                </span>
              </div>
              <div className="flex items-baseline gap-2 mt-2">
                <div className="text-3xl font-bold font-sans text-[#1A1816] tracking-tight">
                  90.0%
                </div>
                <span className="text-xs font-mono font-medium text-[#2E7D4C] bg-[#EAF3ED] px-1.5 py-0.5 rounded">
                  91.5% combined
                </span>
              </div>
            </div>
            <div className="text-xs text-[#767069] mt-3 flex items-center justify-between">
              <span className="truncate">Gradient Boosting (AUC: 0.862)</span>
              <span className="text-[10px] font-mono text-[#9C958D]">v2.2.0</span>
            </div>
            {/* Underline accent */}
            <div className="absolute bottom-0 left-5 w-12 h-0.5 bg-[#BA5641] rounded-full" />
          </button>
        </div>

        {/* -------------------------------------------------------------------------------- */}
        {/* Risk Classification Thresholds Banner (Explicitly Addressing User Request) */}
        {/* -------------------------------------------------------------------------------- */}
        <div className="bg-white border border-[#EBE6DC] rounded-xl p-5 shadow-xs space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#F0EBE1] pb-3">
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4 text-[#BA5641]" />
              <h3 className="text-xs font-bold font-sans uppercase tracking-wider text-[#1A1816]">
                Portfolio Risk Thresholds &amp; Classification Boundaries
              </h3>
            </div>
            <button
              onClick={() => setShowThresholdConfig(!showThresholdConfig)}
              className="text-xs font-semibold text-[#BA5641] hover:text-[#A54935] flex items-center gap-1.5 cursor-pointer self-start sm:self-auto"
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>{showThresholdConfig ? 'Hide Threshold Tuner' : 'Adjust Cutoff Thresholds'}</span>
            </button>
          </div>

          {/* Threshold Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs">
            {/* Low Risk */}
            <div
              onClick={() => {
                setRiskFilter(riskFilter === 'Low Risk' ? 'All Risk Levels' : 'Low Risk');
                setCurrentPageNum(1);
              }}
              className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                riskFilter === 'Low Risk'
                  ? 'border-[#6DA884] bg-[#EAF3ED] ring-1 ring-[#6DA884]'
                  : 'border-[#E5DFD4] bg-[#FBF9F5] hover:bg-[#EAF3ED]/50'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-bold text-[#2E7D4C] flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#6DA884]" />
                  Low Risk Tier
                </span>
                <span className="font-mono text-xs font-bold text-[#2E7D4C] bg-white px-2 py-0.5 rounded border border-[#CEEAD6]">
                  PD &le; {(lowThreshold * 100).toFixed(0)}%
                </span>
              </div>
              <p className="text-[#57534E] text-[11px] leading-relaxed">
                Default probability between <strong className="text-[#1A1816]">0.00 &ndash; {lowThreshold.toFixed(2)}</strong>. Prime cardholders with stable repayment discipline; eligible for credit line expansions.
              </p>
              <div className="mt-2 text-[11px] text-[#767069] font-medium">
                Volume: <strong className="text-[#1A1816] font-mono">{dynamicPortfolio.lowCount}</strong> cards ({dynamicPortfolio.lowPct}%)
              </div>
            </div>

            {/* Medium Risk */}
            <div
              onClick={() => {
                setRiskFilter(riskFilter === 'Medium Risk' ? 'All Risk Levels' : 'Medium Risk');
                setCurrentPageNum(1);
              }}
              className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                riskFilter === 'Medium Risk'
                  ? 'border-[#DF9E47] bg-[#FCF4E6] ring-1 ring-[#DF9E47]'
                  : 'border-[#E5DFD4] bg-[#FBF9F5] hover:bg-[#FCF4E6]/50'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-bold text-[#B4690E] flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#DF9E47]" />
                  Medium Risk Tier
                </span>
                <span className="font-mono text-xs font-bold text-[#B4690E] bg-white px-2 py-0.5 rounded border border-[#FADBA8]">
                  {(lowThreshold * 100).toFixed(0)}% &ndash; {(highThreshold * 100).toFixed(0)}%
                </span>
              </div>
              <p className="text-[#57534E] text-[11px] leading-relaxed">
                Default probability between <strong className="text-[#1A1816]">{lowThreshold.toFixed(2)} &ndash; {highThreshold.toFixed(2)}</strong>. Moderate revolver balance exposure and occasional late payments; watchlist monitoring.
              </p>
              <div className="mt-2 text-[11px] text-[#767069] font-medium">
                Volume: <strong className="text-[#1A1816] font-mono">{dynamicPortfolio.medCount}</strong> cards ({dynamicPortfolio.medPct}%)
              </div>
            </div>

            {/* High Risk */}
            <div
              onClick={() => {
                setRiskFilter(riskFilter === 'High Risk' ? 'All Risk Levels' : 'High Risk');
                setCurrentPageNum(1);
              }}
              className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                riskFilter === 'High Risk'
                  ? 'border-[#BA5641] bg-[#FCECE7] ring-1 ring-[#BA5641]'
                  : 'border-[#E5DFD4] bg-[#FBF9F5] hover:bg-[#FCECE7]/50'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-bold text-[#BA472A] flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#BA5641]" />
                  High Risk Tier
                </span>
                <span className="font-mono text-xs font-bold text-[#BA472A] bg-white px-2 py-0.5 rounded border border-[#F5C7BC]">
                  PD &gt; {(highThreshold * 100).toFixed(0)}%
                </span>
              </div>
              <p className="text-[#57534E] text-[11px] leading-relaxed">
                Default probability exceeds <strong className="text-[#BA5641]">{highThreshold.toFixed(2)}</strong>. Significant credit line exhaustion, repeated 30+ day delinquent cycles; requires credit line curtailment or workout.
              </p>
              <div className="mt-2 text-[11px] text-[#767069] font-medium">
                Volume: <strong className="text-[#BA5641] font-mono">{dynamicPortfolio.highCount}</strong> cards ({dynamicPortfolio.highPct}%)
              </div>
            </div>
          </div>

          {/* Interactive Threshold Tuner Accordion */}
          {showThresholdConfig && (
            <div className="mt-4 pt-4 border-t border-[#F0EBE1] bg-[#FAF7F2] p-4 rounded-xl space-y-4 animate-fade-in text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="font-bold text-[#1A1816]">
                  Live Sensitivity Calibration (Adjust Cutoffs Live)
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-[#767069] text-[11px]">Presets:</span>
                  <button
                    onClick={() => {
                      setLowThreshold(0.20);
                      setHighThreshold(0.50);
                    }}
                    className="px-2 py-1 bg-white hover:bg-stone-50 border border-[#E5DFD4] rounded text-[11px] font-mono cursor-pointer"
                  >
                    Standard (20/50)
                  </button>
                  <button
                    onClick={() => {
                      setLowThreshold(0.15);
                      setHighThreshold(0.40);
                    }}
                    className="px-2 py-1 bg-white hover:bg-stone-50 border border-[#E5DFD4] rounded text-[11px] font-mono cursor-pointer"
                  >
                    Conservative (15/40)
                  </button>
                  <button
                    onClick={() => {
                      setLowThreshold(0.25);
                      setHighThreshold(0.60);
                    }}
                    className="px-2 py-1 bg-white hover:bg-stone-50 border border-[#E5DFD4] rounded text-[11px] font-mono cursor-pointer"
                  >
                    Aggressive (25/60)
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Low Risk Slider */}
                <div className="space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-[#767069]">Low Risk Upper Cutoff:</span>
                    <span className="font-mono font-bold text-[#2E7D4C]">
                      {(lowThreshold * 100).toFixed(0)}% (score &le; {lowThreshold.toFixed(2)})
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0.05"
                    max="0.35"
                    step="0.01"
                    value={lowThreshold}
                    onChange={(e) => {
                      const val = parseFloat(e.target.value);
                      if (val < highThreshold) setLowThreshold(val);
                    }}
                    className="w-full accent-[#6BA280] h-1.5 bg-[#EAE4D8] rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-[#9C958D]">
                    <span>Strict (5%)</span>
                    <span>Standard (20%)</span>
                    <span>Relaxed (35%)</span>
                  </div>
                </div>

                {/* High Risk Slider */}
                <div className="space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-[#767069]">High Risk Lower Cutoff:</span>
                    <span className="font-mono font-bold text-[#BA5641]">
                      {(highThreshold * 100).toFixed(0)}% (score &gt; {highThreshold.toFixed(2)})
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0.36"
                    max="0.75"
                    step="0.01"
                    value={highThreshold}
                    onChange={(e) => {
                      const val = parseFloat(e.target.value);
                      if (val > lowThreshold) setHighThreshold(val);
                    }}
                    className="w-full accent-[#BA5641] h-1.5 bg-[#EAE4D8] rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-[#9C958D]">
                    <span>Aggressive (36%)</span>
                    <span>Standard (50%)</span>
                    <span>Permissive (75%)</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>


        {/* Customer List Card & Table Section */}
        <div className="bg-white border border-[#EBE6DC] rounded-xl p-6 shadow-xs space-y-4 relative">
          {/* Header & Filter Controls Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2">
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-lg font-bold font-sans text-[#1A1816] tracking-tight">
                  Customer List
                </h2>
                {ageGroupFilter && (
                  <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-[#FCECE7] text-[#BA5641] flex items-center gap-1">
                    Age: {ageGroupFilter}
                    <button onClick={() => setAgeGroupFilter(null)} className="hover:text-black">✕</button>
                  </span>
                )}
                {riskFilter !== 'All Risk Levels' && (
                  <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-[#F5EBE6] text-[#A85038] flex items-center gap-1">
                    {riskFilter}
                    <button onClick={() => setRiskFilter('All Risk Levels')} className="hover:text-black">✕</button>
                  </span>
                )}
              </div>
              <p className="text-xs text-[#767069] mt-0.5 font-sans">
                View and analyse individual customer risk predictions ({filteredCustomers.length} matching).
              </p>
            </div>

            {/* Filter Dropdowns & Live Search */}
            <div className="flex items-center gap-2.5 flex-wrap">
              {/* Table search filter */}
              <input
                type="text"
                placeholder="Filter table..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPageNum(1);
                }}
                className="px-3 py-1.5 bg-[#FBF9F5] border border-[#E5DFD4] rounded-lg text-xs placeholder-[#9C958D] outline-none w-36 focus:w-44 focus:bg-white focus:border-[#BA5641] transition-all"
              />

              {/* Segments Dropdown */}
              <select
                value={segmentFilter}
                onChange={(e) => {
                  setSegmentFilter(e.target.value);
                  setCurrentPageNum(1);
                }}
                className="px-3 py-1.5 bg-[#FBF9F5] hover:bg-white border border-[#E5DFD4] rounded-lg text-xs font-medium text-[#1A1816] outline-none cursor-pointer transition-colors"
              >
                <option value="All Segments">All Segments</option>
                {uniqueSegments.map((seg) => (
                  <option key={seg} value={seg}>
                    {seg}
                  </option>
                ))}
              </select>

              {/* Risk Levels Dropdown */}
              <select
                value={riskFilter}
                onChange={(e) => {
                  setRiskFilter(e.target.value);
                  setCurrentPageNum(1);
                }}
                className="px-3 py-1.5 bg-[#FBF9F5] hover:bg-white border border-[#E5DFD4] rounded-lg text-xs font-medium text-[#1A1816] outline-none cursor-pointer transition-colors"
              >
                <option value="All Risk Levels">All Risk Levels</option>
                <option value="Low Risk">Low Risk (PD &le; {(lowThreshold * 100).toFixed(0)}%)</option>
                <option value="Medium Risk">Medium Risk ({(lowThreshold * 100).toFixed(0)}% - {(highThreshold * 100).toFixed(0)}%)</option>
                <option value="High Risk">High Risk (PD &gt; {(highThreshold * 100).toFixed(0)}%)</option>
              </select>

              {/* Age Cohort Dropdown */}
              <select
                value={ageGroupFilter || 'All Ages'}
                onChange={(e) => {
                  setAgeGroupFilter(e.target.value === 'All Ages' ? null : e.target.value);
                  setCurrentPageNum(1);
                }}
                className="px-3 py-1.5 bg-[#FBF9F5] hover:bg-white border border-[#E5DFD4] rounded-lg text-xs font-medium text-[#1A1816] outline-none cursor-pointer transition-colors"
              >
                <option value="All Ages">All Ages</option>
                <option value="< 25">&lt; 25 yrs</option>
                <option value="25 – 35">25 – 35 yrs</option>
                <option value="35 – 45">35 – 45 yrs</option>
                <option value="45 – 55">45 – 55 yrs</option>
                <option value="> 55">&gt; 55 yrs</option>
              </select>

              {/* Sort By Dropdown */}
              <div className="flex items-center border border-[#E5DFD4] rounded-lg bg-[#FBF9F5] overflow-hidden">
                <button
                  onClick={() => setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')}
                  className="px-2 py-1.5 text-[#767069] hover:text-[#1A1816] transition-colors cursor-pointer"
                  title={`Sort ${sortOrder === 'desc' ? 'Descending' : 'Ascending'}`}
                >
                  <ArrowUpDown className="w-3 h-3" />
                </button>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="pr-3 py-1.5 bg-transparent text-xs font-medium text-[#1A1816] outline-none cursor-pointer"
                >
                  <option value="Default Probability">Default Probability</option>
                  <option value="Credit Utilization">Credit Utilization</option>
                  <option value="Annual Income">Annual Income</option>
                  <option value="Age">Age</option>
                  <option value="Customer ID">Customer ID</option>
                </select>
              </div>
            </div>
          </div>

          {/* Floating Batch Actions Bar when rows are selected */}
          {selectedRowIds.length > 1 && (
            <div className="p-3 bg-[#1A1816] text-white rounded-xl flex items-center justify-between text-xs animate-fade-in shadow-md">
              <div className="flex items-center gap-3">
                <span className="font-semibold text-white">
                  {selectedRowIds.length} cardholders selected
                </span>
                <span className="text-stone-400">|</span>
                <button
                  onClick={() => handleBatchAction('Export Selected Customer Records')}
                  className="hover:text-[#BA5641] transition-colors cursor-pointer flex items-center gap-1 font-medium"
                >
                  <Download className="w-3.5 h-3.5" /> Export Selected
                </button>
                <button
                  onClick={() => handleBatchAction('Automated 0% APR Workout Advisory Dispatched')}
                  className="hover:text-[#BA5641] transition-colors cursor-pointer flex items-center gap-1 font-medium"
                >
                  <Share2 className="w-3.5 h-3.5" /> Send Relief Advisory
                </button>
              </div>
              <button
                onClick={() => setSelectedRowIds([])}
                className="text-stone-400 hover:text-white cursor-pointer text-xs"
              >
                Clear Selection
              </button>
            </div>
          )}

          {/* Batch Action Toast */}
          {batchActionNotice && (
            <div className="p-3 bg-[#EAF5EE] border border-[#CEEAD6] text-[#2E7D4C] text-xs font-medium rounded-lg flex items-center justify-between">
              <span>{batchActionNotice}</span>
              <button onClick={() => setBatchActionNotice(null)}>✕</button>
            </div>
          )}

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-[#F0EBE1] text-[#767069] font-normal">
                  <th className="py-3 px-3 w-8">
                    <input
                      type="checkbox"
                      checked={
                        paginatedCustomers.length > 0 &&
                        paginatedCustomers.every((c) => selectedRowIds.includes(c.id))
                      }
                      onChange={handleToggleSelectAll}
                      aria-label="Select all on this page"
                      className="rounded border-[#D0C9BE] text-[#BA5641] focus:ring-0 cursor-pointer"
                    />
                  </th>
                  <th className="py-3 px-3 font-normal">Customer ID</th>
                  <th className="py-3 px-3 font-normal">Name</th>
                  <th className="py-3 px-3 font-normal text-right">Age</th>
                  <th className="py-3 px-3 font-normal text-right">Income</th>
                  <th className="py-3 px-3 font-normal text-right">Credit Utilization</th>
                  <th className="py-3 px-3 font-normal text-right">Default Probability</th>
                  <th className="py-3 px-3 font-normal text-center">Risk Level</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F5F2EA]">
                {paginatedCustomers.map((cust) => {
                  const isChecked = selectedRowIds.includes(cust.id);
                  const isInspecting = activeCustomer?.id === cust.id;
                  const prob = cust.calibratedProbability ?? 0.14;
                  const util = cust.creditUtilization ?? 0.35;
                  const tier = getCustomerTier(cust);

                  return (
                    <tr
                      key={cust.id}
                      onClick={() => handleRowClick(cust)}
                      className={`transition-colors cursor-pointer ${
                        isInspecting
                          ? 'bg-[#F6ECE6] hover:bg-[#F2E5DE]'
                          : isChecked
                          ? 'bg-[#FBF8F4]'
                          : 'hover:bg-[#FAF7F2]'
                      }`}
                    >
                      <td className="py-3 px-3" onClick={(e) => handleToggleRowSelect(e, cust.id)}>
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => {}}
                          className="rounded border-[#D0C9BE] text-[#BA5641] focus:ring-0 cursor-pointer"
                        />
                      </td>
                      <td className="py-3 px-3 font-mono font-medium text-[#1A1816]">
                        {cust.id}
                      </td>
                      <td className="py-3 px-3 font-medium text-[#1A1816] whitespace-nowrap">
                        {cust.fullName}
                      </td>
                      <td className="py-3 px-3 text-right tabular-nums text-[#1A1816]">
                        {cust.age}
                      </td>
                      <td className="py-3 px-3 text-right tabular-nums font-medium text-[#1A1816]">
                        {formatCurrency(cust.annualIncome)}
                      </td>
                      <td className="py-3 px-3 text-right tabular-nums text-[#1A1816]">
                        {util.toFixed(2)}
                      </td>
                      <td className="py-3 px-3 text-right tabular-nums font-mono font-medium text-[#1A1816]">
                        {prob.toFixed(2)}
                      </td>
                      <td className="py-3 px-3 text-center">
                        <span
                          className={`inline-block px-3 py-0.5 rounded-full text-xs font-medium transition-colors ${
                            tier === 'High'
                              ? 'bg-[#FCECE7] text-[#BA472A]'
                              : tier === 'Medium'
                              ? 'bg-[#FCF4E6] text-[#B4690E]'
                              : 'bg-[#EAF3ED] text-[#2E7D4C]'
                          }`}
                        >
                          {tier}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls matching screenshot */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-[#F0EBE1] text-xs text-[#767069]">
            <div>
              Showing {startIndex + 1}–{Math.min(startIndex + pageSize, filteredCustomers.length)} of {filteredCustomers.length} customers
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setCurrentPageNum((p) => Math.max(1, p - 1))}
                disabled={currentPageNum === 1}
                className="p-1.5 rounded border border-[#E5DFD4] hover:bg-[#FAF7F2] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>

              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                const page = i + 1;
                const isActive = currentPageNum === page;
                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPageNum(page)}
                    className={`w-7 h-7 rounded text-xs font-medium transition-colors cursor-pointer ${
                      isActive
                        ? 'border border-[#BA5641] bg-[#FCECE7] text-[#BA5641] font-semibold'
                        : 'border border-[#E5DFD4] hover:bg-[#FAF7F2] text-[#1A1816]'
                    }`}
                  >
                    {page}
                  </button>
                );
              })}

              <button
                onClick={() => setCurrentPageNum((p) => Math.min(totalPages, p + 1))}
                disabled={currentPageNum === totalPages}
                className="p-1.5 rounded border border-[#E5DFD4] hover:bg-[#FAF7F2] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors"
                aria-label="Next page"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side Customer Detail Drawer (Exact match to screenshot, interactive) */}
      {drawerOpen && activeCustomer && (
        <aside className="w-[380px] xl:w-[420px] shrink-0 border-l border-[#EBE6DC] bg-white h-full hidden lg:block overflow-hidden">
          <CustomerDetailDrawer
            customer={activeCustomer}
            onClose={() => setDrawerOpen(false)}
            currency={currency}
            onAddNote={onAddNote}
            onApplyAction={(actionTitle) => {
              console.log('Action applied for customer:', activeCustomer.id, actionTitle);
            }}
          />
        </aside>
      )}
    </div>
  );
};
