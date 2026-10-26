/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  X,
  Plus,
  Trash2,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
  Sliders,
  RotateCcw,
  Copy,
  Check,
  Send,
  CreditCard,
  Percent,
  Target,
  Zap,
  ShieldAlert,
  ArrowRight,
  TrendingDown,
} from 'lucide-react';
import { Customer, CustomerNote, RiskTier } from '../types';

export interface CustomerDetailDrawerProps {
  customer: Customer | null;
  onClose: () => void;
  currency?: 'INR' | 'USD';
  onAddNote?: (customerId: string, noteText: string) => void;
  onApplyAction?: (actionTitle: string) => void;
}

export const CustomerDetailDrawer: React.FC<CustomerDetailDrawerProps> = ({
  customer,
  onClose,
  currency = 'INR',
  onAddNote,
  onApplyAction,
}) => {
  const [activeTab, setActiveTab] = useState<'Overview' | 'Key Factors' | 'Transactions' | 'Notes'>('Overview');
  const [newNote, setNewNote] = useState('');
  const [localNotes, setLocalNotes] = useState<CustomerNote[]>(customer?.notes || []);
  const [actionSuccess, setActionSuccess] = useState<string | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // What-If Simulation State
  const [isSimulating, setIsSimulating] = useState(false);
  const [simUtil, setSimUtil] = useState<number>(customer?.creditUtilization ?? 0.71);
  const [simDelays, setSimDelays] = useState<number>(customer?.delayedPayments6M ?? 3);
  const [simIncome, setSimIncome] = useState<number>(customer?.annualIncome ?? 360000);

  // Reset simulation when customer changes
  useEffect(() => {
    if (customer) {
      setSimUtil(customer.creditUtilization ?? 0.71);
      setSimDelays(customer.delayedPayments6M ?? 0);
      setSimIncome(customer.annualIncome ?? 360000);
      setLocalNotes(customer.notes || []);
      setIsSimulating(false);
    }
  }, [customer?.id]);

  if (!customer) return null;

  const currencySymbol = currency === 'INR' ? '₹' : '$';

  const formatCurrency = (val: number) => {
    if (currency === 'INR') {
      return `${currencySymbol}${val.toLocaleString('en-IN')}`;
    }
    return `${currencySymbol}${val.toLocaleString('en-US')}`;
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2000);
  };

  // Base values
  const baseProb = customer.calibratedProbability ?? 0.18;

  // Simulated probability calculation
  const calculateSimulatedProb = () => {
    if (!isSimulating) return baseProb;
    // Logistic curve reaction to simulated parameters
    let logit = -1.8;
    logit += (simUtil - 0.35) * 4.2;
    logit += simDelays * 0.85;
    logit -= (simIncome - 400000) / 1000000 * 0.4;
    const p = 1 / (1 + Math.exp(-logit));
    return Math.max(0.01, Math.min(0.99, parseFloat(p.toFixed(2))));
  };

  const displayProb = isSimulating ? calculateSimulatedProb() : baseProb;
  const isHighRisk = displayProb >= 0.65 || customer.riskTier === 'High';
  const isMedRisk = !isHighRisk && (displayProb >= 0.35 || customer.riskTier === 'Medium');
  const currentRiskTier: RiskTier = isHighRisk ? 'High' : isMedRisk ? 'Medium' : 'Low';
  
  const isTargeted = isHighRisk;

  const decisionPolicy = isHighRisk
    ? {
        tier: 'High Risk Intervention',
        title: 'High Risk Review & Limit Protection',
        badge: 'High Risk (PD ≥ 65%)',
        badgeClass: 'bg-[#FCECE7] text-[#BA472A] border-[#F5D5CB]',
        bgCard: 'bg-[#FDF7F5] border-[#F5D5CB]',
        rationale: 'Default probability meets or exceeds high risk threshold (≥ 65%). Proactive credit review and balance containment recommended.',
        expectedSavings: 'Risk Containment',
        recallLift: 'High Risk Flagged',
        actions: [
          { label: 'Execute Credit Line Review', action: 'Initiated credit line review to contain balance exposure' },
          { label: 'Send Payment Reminder (SMS)', action: 'Dispatched automated payment reminder and payment options via SMS' },
          { label: 'Suspend Cash Advance Draws', action: 'Restricted cash drawing privileges pending review' },
        ],
      }
    : isMedRisk
    ? {
        tier: 'Medium Risk Watchlist',
        title: 'Watchlist Monitoring & Repayment Tracking',
        badge: 'Medium Risk (35%–64%)',
        badgeClass: 'bg-[#FCF4E6] text-[#B4690E] border-[#F4E3C5]',
        bgCard: 'bg-[#FDFBF7] border-[#F0DFBE]',
        rationale: 'Account is in the moderate risk range (35% to 64%). Track monthly statement compliance and revolving balance trends.',
        expectedSavings: 'Watchlist Monitoring',
        recallLift: 'Watchlist Monitored',
        actions: [
          { label: 'Tag for Account Surveillance', action: 'Tagged cardholder for 30-day payment surveillance' },
          { label: 'Send Statement Due Reminder', action: 'Sent statement due reminder to prevent delinquency' },
          { label: 'Review Recent Utilization', action: 'Reviewed revolving credit utilization trend' },
        ],
      }
    : {
        tier: 'Low Risk Standard',
        title: 'Standard Facility & Regular Monitoring',
        badge: 'Low Risk (< 35%)',
        badgeClass: 'bg-[#EAF3ED] text-[#2E7D4C] border-[#CEEAD6]',
        bgCard: 'bg-[#F7FAF8] border-[#D4E8DC]',
        rationale: 'Clean repayment profile and conservative utilization (< 35% probability). Standard terms apply.',
        expectedSavings: 'Standard Terms',
        recallLift: 'Low Risk Performing',
        actions: [
          { label: 'Confirm Standard Facility Status', action: 'Confirmed standard credit facility status' },
          { label: 'Log Routine Review Check', action: 'Logged periodic review with no negative remarks' },
        ],
      };

  const handleCreateNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNote.trim()) return;

    const noteObj: CustomerNote = {
      id: `note-${Date.now()}`,
      author: 'Saanvi Gothe',
      date: 'Just now',
      text: newNote.trim(),
    };

    const updated = [noteObj, ...localNotes];
    setLocalNotes(updated);
    if (onAddNote) onAddNote(customer.id, newNote.trim());
    setNewNote('');
    handleTriggerAction('Added supervisory note to cardholder audit log');
  };

  const handleDeleteNote = (id: string) => {
    setLocalNotes(localNotes.filter((n) => n.id !== id));
    handleTriggerAction('Removed note from audit log');
  };

  const handleTriggerAction = (actionTitle: string) => {
    setActionSuccess(actionTitle);
    if (onApplyAction) onApplyAction(actionTitle);
    setTimeout(() => setActionSuccess(null), 3500);
  };

  // Indicators values (dynamic to simulation)
  const currentUtil = isSimulating ? simUtil : (customer.creditUtilization || 0.71);
  const indicators = {
    creditUtilization: currentUtil,
    paymentHistoryRisk: isSimulating ? Math.min(1.0, simDelays * 0.28) : (customer.riskIndicators?.paymentHistoryRisk ?? (isHighRisk ? 0.80 : 0.20)),
    outstandingDebt: parseFloat((((customer.creditLimit || 500000) * currentUtil) / (customer.creditLimit || 500000)).toFixed(2)),
    creditHistoryLength: customer.riskIndicators?.creditHistoryLength ?? 0.40,
    recentInquiries: customer.riskIndicators?.recentInquiries ?? (isHighRisk ? 0.55 : 0.15),
  };

  return (
    <div className="w-full h-full flex flex-col bg-white border-l border-[#EBE6DC] shadow-sm overflow-hidden animate-slide-in">
      {/* Header Bar */}
      <div className="p-6 pb-4 border-b border-[#F0EBE1] shrink-0">
        <div className="flex items-center justify-between mb-1.5">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold uppercase text-[#767069] tracking-wider">
              {customer.id}
            </span>
            <button
              onClick={() => handleCopy(customer.id, 'id')}
              className="p-1 text-[#9C958D] hover:text-[#1A1816] transition-colors"
              title="Copy Customer ID"
            >
              {copiedField === 'id' ? <Check className="w-3 h-3 text-[#2E7D4C]" /> : <Copy className="w-3 h-3" />}
            </button>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#9C958D] hover:text-[#1A1816] hover:bg-[#FAF7F2] rounded-lg transition-colors cursor-pointer"
            aria-label="Close details"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center justify-between gap-2 mt-1">
          <h2 className="text-xl font-bold font-sans text-[#1A1816] tracking-tight truncate">
            {customer.fullName}
          </h2>
          <div className="flex items-center gap-1.5 shrink-0">
            {isTargeted && (
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#BA5641] text-white flex items-center gap-1 shadow-2xs">
                <Target className="w-3 h-3" />
                Targeted High-Risk
              </span>
            )}
            <span
              className={`px-3 py-0.5 rounded-full text-xs font-medium shrink-0 transition-colors ${
                isHighRisk
                  ? 'bg-[#FCECE7] text-[#BA472A]'
                  : isMedRisk
                  ? 'bg-[#FCF4E6] text-[#B4690E]'
                  : 'bg-[#EAF3ED] text-[#2E7D4C]'
              }`}
            >
              {currentRiskTier} Risk
            </span>
          </div>
        </div>

        {/* Subtitle metadata */}
        <div className="text-xs text-[#767069] mt-1 flex items-center gap-1.5 flex-wrap">
          <span>{customer.gender || 'Individual'}</span>
          <span className="text-[#D0C9BE]">|</span>
          <span>Age {customer.age}</span>
          <span className="text-[#D0C9BE]">|</span>
          <span>{customer.accountType || 'Individual'}</span>
          <span className="text-[#D0C9BE]">|</span>
          <span className="truncate">{customer.email}</span>
        </div>

        {/* Tabs Bar */}
        <div className="flex items-center gap-6 mt-5 border-b border-[#F0EBE1] -mb-4">
          {(['Overview', 'Key Factors', 'Transactions', 'Notes'] as const).map((tab) => {
            const active = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 text-xs font-medium transition-colors cursor-pointer relative ${
                  active ? 'text-[#1A1816] font-semibold' : 'text-[#767069] hover:text-[#1A1816]'
                }`}
              >
                <span>{tab}</span>
                {active && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1A1816]" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Action Notification Toast */}
      {actionSuccess && (
        <div className="mx-6 mt-4 p-3 rounded-lg bg-[#EAF5EE] border border-[#CEEAD6] text-[#2E7D4C] text-xs font-medium flex items-center justify-between animate-fade-in shadow-2xs">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0 text-[#2E7D4C]" />
            <span>{actionSuccess}</span>
          </div>
          <button
            onClick={() => setActionSuccess(null)}
            className="text-[#2E7D4C] hover:text-black text-xs font-bold"
          >
            ✕
          </button>
        </div>
      )}

      {/* Tab Contents (Scrollable) */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Tab 1: Overview */}
        {activeTab === 'Overview' && (
          <div className="space-y-6">
            {/* Targeted High-Risk Account Banner */}
            {isTargeted && (
              <div className="p-3.5 rounded-xl bg-[#FCECE7] border border-[#F5D5CB] text-[#BA472A] flex items-start gap-3 shadow-2xs">
                <Target className="w-5 h-5 shrink-0 mt-0.5 text-[#BA472A]" />
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                      Targeted Account Under Active Surveillance
                    </span>
                    <span className="font-mono text-[10px] bg-white/90 px-2 py-0.5 rounded border border-[#F5D5CB] font-bold">
                      τ = 0.28 Cost-Optimal Trigger
                    </span>
                  </div>
                  <p className="text-[11px] text-[#78716C] leading-relaxed">
                    This account is tagged for priority mitigation. The cost-calibrated decision engine flagged probability {displayProb.toFixed(2)} (≥ 0.28 threshold). Preemptive intervention mitigates up to $7,500 in charge-off exposure and improves model recall to 78.6%.
                  </p>
                </div>
              </div>
            )}

            {/* Predicted Default Probability Card */}
            <div className="p-5 rounded-xl bg-[#FAF7F2] border border-[#EBE6DC] space-y-2 relative">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#767069] font-normal">
                  Predicted Default Probability
                </span>
                <button
                  onClick={() => setIsSimulating(!isSimulating)}
                  className={`text-[11px] font-medium px-2 py-0.5 rounded-md border flex items-center gap-1 transition-colors cursor-pointer ${
                    isSimulating
                      ? 'bg-[#BA5641] text-white border-[#BA5641]'
                      : 'bg-white text-[#767069] border-[#E5DFD4] hover:text-[#1A1816]'
                  }`}
                  title="Test risk impact by adjusting parameters"
                >
                  <Sliders className="w-3 h-3" />
                  <span>{isSimulating ? 'Simulating' : 'Simulate Risk'}</span>
                </button>
              </div>

              <div className="flex items-baseline gap-2">
                <div className="text-4xl font-bold font-sans text-[#BA5641] tabular-nums tracking-tight">
                  {displayProb.toFixed(2)}
                </div>
                {isSimulating && displayProb !== baseProb && (
                  <span
                    className={`text-xs font-mono font-medium ${
                      displayProb < baseProb ? 'text-[#2E7D4C]' : 'text-[#BA5641]'
                    }`}
                  >
                    ({displayProb < baseProb ? '▼' : '▲'}{' '}
                    {Math.abs(displayProb - baseProb).toFixed(2)})
                  </span>
                )}
              </div>

              {/* Terracotta Progress Bar */}
              <div className="w-full h-3 bg-[#EFECE6] rounded-full overflow-hidden mt-2">
                <div
                  className={`h-full rounded-full transition-all duration-300 ${
                    isHighRisk ? 'bg-[#BA5641]' : isMedRisk ? 'bg-[#DF9E47]' : 'bg-[#6DA884]'
                  }`}
                  style={{ width: `${Math.min(100, Math.max(5, displayProb * 100))}%` }}
                />
              </div>

              <div className="flex items-center justify-between pt-1">
                <span
                  className={`text-xs font-medium ${
                    isHighRisk
                      ? 'text-[#BA5641]'
                      : isMedRisk
                      ? 'text-[#B4690E]'
                      : 'text-[#2E7D4C]'
                  }`}
                >
                  {isHighRisk
                    ? 'High risk of default (> 0.50)'
                    : isMedRisk
                    ? 'Medium risk of default (0.20 - 0.50)'
                    : 'Low risk of default (< 0.20)'}
                </span>
                <span className="text-[10px] text-[#9C958D] font-mono">
                  Scale: 0.00 – 1.00
                </span>
              </div>

              {/* Interactive What-If Simulation Panel */}
              {isSimulating && (
                <div className="mt-4 pt-4 border-t border-[#E5DFD4] space-y-3.5 bg-white p-3.5 rounded-lg border">
                  <div className="flex items-center justify-between text-xs font-semibold text-[#1A1816]">
                    <span>What-If Scenario Tuning</span>
                    <button
                      onClick={() => {
                        setSimUtil(customer.creditUtilization ?? 0.71);
                        setSimDelays(customer.delayedPayments6M ?? 3);
                        setSimIncome(customer.annualIncome ?? 360000);
                      }}
                      className="text-[10px] text-[#767069] hover:text-[#BA5641] flex items-center gap-1 cursor-pointer"
                    >
                      <RotateCcw className="w-2.5 h-2.5" /> Reset
                    </button>
                  </div>

                  {/* Utilization Slider */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px] text-[#767069]">
                      <span>Credit Utilization</span>
                      <span className="font-mono font-bold text-[#1A1816]">
                        {simUtil.toFixed(2)} ({(simUtil * 100).toFixed(0)}%)
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0.05"
                      max="1.0"
                      step="0.01"
                      value={simUtil}
                      onChange={(e) => setSimUtil(parseFloat(e.target.value))}
                      className="w-full accent-[#BA5641] h-1.5 bg-[#EAE4D8] rounded-lg cursor-pointer"
                    />
                  </div>

                  {/* Late Payments Counter */}
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-[#767069]">Past 6M Late Payments</span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSimDelays(Math.max(0, simDelays - 1))}
                        className="w-5 h-5 rounded border border-[#E5DFD4] hover:bg-[#FAF7F2] font-mono flex items-center justify-center font-bold text-xs"
                      >
                        -
                      </button>
                      <span className="font-mono font-bold text-xs w-4 text-center">
                        {simDelays}
                      </span>
                      <button
                        onClick={() => setSimDelays(Math.min(6, simDelays + 1))}
                        className="w-5 h-5 rounded border border-[#E5DFD4] hover:bg-[#FAF7F2] font-mono flex items-center justify-center font-bold text-xs"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Apply Simulation Button */}
                  <button
                    onClick={() => {
                      handleTriggerAction(
                        `Simulated profile updated: Default probability adjusted to ${displayProb.toFixed(2)} (${currentRiskTier} Risk)`
                      );
                    }}
                    className="w-full py-1.5 bg-[#BA5641] hover:bg-[#A54935] text-white text-xs font-medium rounded-md transition-colors cursor-pointer"
                  >
                    Apply Scenario to Assessment
                  </button>
                </div>
              )}
            </div>

            {/* Strategic Decision & Loss Mitigation Engine */}
            <div className={`p-4 rounded-xl border ${decisionPolicy.bgCard} space-y-3.5 shadow-2xs`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-[#BA5641]" />
                  <h3 className="text-xs font-bold text-[#1A1816] uppercase tracking-wider font-sans">
                    Prescribed Underwriting Decision
                  </h3>
                </div>
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border ${decisionPolicy.badgeClass}`}>
                  {decisionPolicy.tier}
                </span>
              </div>

              <div className="p-3 bg-white/95 rounded-lg border border-[#EBE6DC] space-y-2">
                <div className="font-bold text-xs text-[#1A1816] flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#BA5641] shrink-0" />
                  <span>{decisionPolicy.title}</span>
                </div>
                <p className="text-[11px] text-[#57534E] leading-relaxed">
                  {decisionPolicy.rationale}
                </p>
                <div className="pt-2 flex items-center justify-between border-t border-[#F0EBE1] text-[11px] font-mono">
                  <span className="text-[#767069]">Protected Loss Impact:</span>
                  <span className="font-bold text-[#2E7D4C]">{decisionPolicy.expectedSavings}</span>
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[#767069]">Recall Contribution:</span>
                  <span className="font-bold text-[#BA5641]">{decisionPolicy.recallLift}</span>
                </div>
              </div>

              {/* 1-Click Action Interventions */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#767069] block">
                  Execute Policy Interventions (1-Click Audit Log):
                </span>
                <div className="grid grid-cols-1 gap-1.5">
                  {decisionPolicy.actions.map((act, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        handleTriggerAction(act.action);
                        const autoNote: CustomerNote = {
                          id: `note-${Date.now()}`,
                          author: 'Risk Officer (Decision Policy)',
                          date: 'Just now',
                          text: `[POLICY INTERVENTION] ${act.action}`,
                        };
                        setLocalNotes((prev) => [autoNote, ...prev]);
                        if (onAddNote) onAddNote(customer.id, `[POLICY INTERVENTION] ${act.action}`);
                      }}
                      className="w-full text-left px-3 py-2 bg-white hover:bg-[#FAF7F2] border border-[#E5DFD4] hover:border-[#BA5641] rounded-lg text-xs font-medium text-[#1A1816] flex items-center justify-between transition-colors group cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#9C958D] group-hover:text-[#BA5641]" />
                        <span>{act.label}</span>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-[#BA5641] opacity-75 group-hover:opacity-100">
                        EXECUTE →
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Customer Details */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-[#1A1816] uppercase tracking-wider font-sans">
                Customer Details
              </h3>
              <div className="divide-y divide-[#F5F2EA] text-xs">
                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-[#767069]">Customer ID</span>
                  <span className="font-mono font-medium text-[#1A1816]">{customer.id}</span>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-[#767069]">Age</span>
                  <span className="font-sans font-medium text-[#1A1816] tabular-nums">
                    {customer.age}
                  </span>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-[#767069]">Annual Income</span>
                  <span className="font-sans font-medium text-[#1A1816] tabular-nums">
                    {formatCurrency(customer.annualIncome)}
                  </span>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-[#767069]">Employment Type</span>
                  <span className="font-sans font-medium text-[#1A1816]">
                    {customer.employmentStatus || 'Salaried'}
                  </span>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-[#767069]">Credit Utilization Ratio</span>
                  <span className="font-sans font-medium text-[#1A1816] tabular-nums">
                    {currentUtil.toFixed(2)}
                  </span>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-[#767069]">Total Outstanding Debt</span>
                  <span className="font-sans font-medium text-[#1A1816] tabular-nums">
                    {formatCurrency(customer.outstandingBalance)}
                  </span>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-[#767069]">Number of Credit Lines</span>
                  <span className="font-sans font-medium text-[#1A1816] tabular-nums">
                    {customer.creditLines || 5}
                  </span>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-[#767069]">Payment History</span>
                  <span className="font-sans font-medium text-[#1A1816]">
                    {(isSimulating ? simDelays : customer.delayedPayments6M) > 0
                      ? `${isSimulating ? simDelays : customer.delayedPayments6M} late payments`
                      : '3 late payments'}
                  </span>
                </div>
              </div>
            </div>

            {/* Risk Indicators with Exact Progress Bars matching screenshot */}
            <div className="space-y-3.5 pt-2">
              <h3 className="text-xs font-bold text-[#1A1816] uppercase tracking-wider font-sans">
                Risk Indicators
              </h3>
              <div className="space-y-3 text-xs">
                {/* 1. Credit Utilization */}
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[#767069] w-40 shrink-0 truncate">Credit Utilization</span>
                  <div className="flex-1 h-2 bg-[#EFECE6] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#BA5641] rounded-full transition-all duration-300"
                      style={{ width: `${Math.min(100, indicators.creditUtilization * 100)}%` }}
                    />
                  </div>
                  <span className="font-mono text-xs tabular-nums text-[#1A1816] w-9 text-right font-medium">
                    {indicators.creditUtilization.toFixed(2)}
                  </span>
                </div>

                {/* 2. Payment History Risk */}
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[#767069] w-40 shrink-0 truncate">Payment History Risk</span>
                  <div className="flex-1 h-2 bg-[#EFECE6] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#BA5641] rounded-full transition-all duration-300"
                      style={{ width: `${Math.min(100, indicators.paymentHistoryRisk * 100)}%` }}
                    />
                  </div>
                  <span className="font-mono text-xs tabular-nums text-[#1A1816] w-9 text-right font-medium">
                    {indicators.paymentHistoryRisk.toFixed(2)}
                  </span>
                </div>

                {/* 3. Outstanding Debt */}
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[#767069] w-40 shrink-0 truncate">Outstanding Debt</span>
                  <div className="flex-1 h-2 bg-[#EFECE6] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#C46E5D] rounded-full transition-all duration-300"
                      style={{ width: `${Math.min(100, indicators.outstandingDebt * 100)}%` }}
                    />
                  </div>
                  <span className="font-mono text-xs tabular-nums text-[#1A1816] w-9 text-right font-medium">
                    {indicators.outstandingDebt.toFixed(2)}
                  </span>
                </div>

                {/* 4. Length of Credit History */}
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[#767069] w-40 shrink-0 truncate">Length of Credit History</span>
                  <div className="flex-1 h-2 bg-[#EFECE6] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#C97966] rounded-full"
                      style={{ width: `${Math.min(100, indicators.creditHistoryLength * 100)}%` }}
                    />
                  </div>
                  <span className="font-mono text-xs tabular-nums text-[#1A1816] w-9 text-right font-medium">
                    {indicators.creditHistoryLength.toFixed(2)}
                  </span>
                </div>

                {/* 5. Recent Inquiries */}
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[#767069] w-40 shrink-0 truncate">Recent Inquiries</span>
                  <div className="flex-1 h-2 bg-[#EFECE6] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#DF9E47] rounded-full"
                      style={{ width: `${Math.min(100, indicators.recentInquiries * 100)}%` }}
                    />
                  </div>
                  <span className="font-mono text-xs tabular-nums text-[#1A1816] w-9 text-right font-medium">
                    {indicators.recentInquiries.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Key Factors */}
        {activeTab === 'Key Factors' && (
          <div className="space-y-5 text-xs">
            <div>
              <h3 className="text-xs font-bold text-[#BA5641] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5" />
                Negative Risk Drivers
              </h3>
              <div className="space-y-2">
                <div className="p-3 bg-[#FCECE7]/60 border border-[#F5D5CB] rounded-lg space-y-1">
                  <div className="flex justify-between font-semibold text-[#BA472A]">
                    <span>High Credit Line Exhaustion</span>
                    <span className="font-mono">+28 pts weight</span>
                  </div>
                  <p className="text-[#78716C] text-[11px]">
                    Current revolving balance represents {(currentUtil * 100).toFixed(0)}% of approved credit line limit.
                  </p>
                </div>
                {(customer.delayedPayments6M > 0 || simDelays > 0) && (
                  <div className="p-3 bg-[#FCECE7]/60 border border-[#F5D5CB] rounded-lg space-y-1">
                    <div className="flex justify-between font-semibold text-[#BA472A]">
                      <span>Delinquent Repayment Cycles</span>
                      <span className="font-mono">+24 pts weight</span>
                    </div>
                    <p className="text-[#78716C] text-[11px]">
                      {isSimulating ? simDelays : customer.delayedPayments6M} late billing cycles recorded in past 6 months.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold text-[#2E7D4C] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                Positive Risk Mitigants
              </h3>
              <div className="space-y-2">
                <div className="p-3 bg-[#EAF5EE]/60 border border-[#CEEAD6] rounded-lg space-y-1">
                  <div className="flex justify-between font-semibold text-[#2E7D4C]">
                    <span>Established Credit Tenure</span>
                    <span className="font-mono">-12 pts weight</span>
                  </div>
                  <p className="text-[#78716C] text-[11px]">
                    {customer.creditHistoryYears} years of verified credit file records with continuous banking relationship.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Underwriter Actions */}
            <div className="pt-3 border-t border-[#F0EBE1] space-y-2">
              <span className="text-[11px] font-bold text-[#767069] uppercase tracking-wider block">
                Direct Underwriting Interventions
              </span>
              <div className="grid grid-cols-1 gap-2">
                <button
                  onClick={() => handleTriggerAction('Curtail line: Decreased credit ceiling by 20%')}
                  className="px-3 py-2 text-left bg-[#FAF7F2] hover:bg-[#FCECE7] text-[#BA5641] font-medium rounded-lg border border-[#EBE6DC] transition-colors cursor-pointer flex items-center justify-between"
                >
                  <span>Curtail Credit Limit (-20%)</span>
                  <span className="text-[10px] font-mono">EXECUTE</span>
                </button>
                <button
                  onClick={() => handleTriggerAction('Dispatched automated 0% APR forbearance offer')}
                  className="px-3 py-2 text-left bg-[#FAF7F2] hover:bg-[#FAF7F2] text-[#1A1816] font-medium rounded-lg border border-[#EBE6DC] transition-colors cursor-pointer flex items-center justify-between"
                >
                  <span>Offer 0% APR Hardship Workout</span>
                  <span className="text-[10px] font-mono">DISPATCH</span>
                </button>
                <button
                  onClick={() => handleTriggerAction('Requested certified salary slip & employer confirmation')}
                  className="px-3 py-2 text-left bg-[#FAF7F2] hover:bg-[#FAF7F2] text-[#1A1816] font-medium rounded-lg border border-[#EBE6DC] transition-colors cursor-pointer flex items-center justify-between"
                >
                  <span>Request Income Proof</span>
                  <span className="text-[10px] font-mono">VERIFY</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Transactions / Statement Cycles */}
        {activeTab === 'Transactions' && (
          <div className="space-y-3 text-xs">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-[#1A1816] uppercase tracking-wider">
                6-Month Billing Trajectory
              </h3>
              <span className="font-mono text-[10px] text-[#767069]">
                {customer.repaymentHistory?.length || 0} cycles
              </span>
            </div>
            <div className="border border-[#EBE6DC] rounded-xl overflow-hidden divide-y divide-[#F0EBE1]">
              {customer.repaymentHistory?.map((cycle, i) => (
                <div key={i} className="p-3 bg-white hover:bg-[#FAF7F2] transition-colors flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-[#1A1816]">{cycle.month}</div>
                    <div className="text-[11px] text-[#767069] mt-0.5">
                      Billed Balance: {formatCurrency(cycle.balance)} · Min Due: {formatCurrency(cycle.minPaymentDue)}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono font-bold text-[#1A1816]">
                      {formatCurrency(cycle.paymentAmount)}
                    </div>
                    <span
                      className={`inline-block px-1.5 py-0.5 rounded text-[10px] font-medium mt-0.5 ${
                        cycle.status === 'late'
                          ? 'bg-[#FCECE7] text-[#BA472A]'
                          : 'bg-[#EAF5EE] text-[#2E7D4C]'
                      }`}
                    >
                      {cycle.status === 'late' ? 'Delayed' : 'On-Time'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Notes */}
        {activeTab === 'Notes' && (
          <div className="space-y-4 text-xs">
            <form onSubmit={handleCreateNote} className="space-y-2">
              <textarea
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                placeholder="Log underwriter note or supervisory assessment..."
                rows={3}
                className="w-full p-3 bg-[#FAF7F2] border border-[#E5DFD4] rounded-xl text-xs text-[#1A1816] placeholder-[#9C958D] focus:bg-white focus:border-[#BA5641] focus:ring-1 focus:ring-[#BA5641]/20 outline-none"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={!newNote.trim()}
                  className="px-3.5 py-1.5 bg-[#BA5641] hover:bg-[#A54935] disabled:opacity-40 text-white font-medium rounded-lg text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Save Note</span>
                </button>
              </div>
            </form>

            <div className="space-y-2 pt-2">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-[#1A1816] uppercase tracking-wider">
                  Audit History ({localNotes.length})
                </h4>
                <span className="text-[10px] text-[#9C958D]">Logged by underwriters</span>
              </div>

              {localNotes.length > 0 ? (
                localNotes.map((note) => (
                  <div key={note.id} className="p-3 bg-[#FAF7F2] border border-[#EBE6DC] rounded-xl space-y-1 group">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-semibold text-[#1A1816]">{note.author}</span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[#767069]">{note.date}</span>
                        <button
                          onClick={() => handleDeleteNote(note.id)}
                          className="opacity-0 group-hover:opacity-100 text-[#BA5641] hover:text-[#A54935] transition-opacity cursor-pointer"
                          title="Delete note"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                    <p className="text-xs text-[#57534E] leading-relaxed">{note.text}</p>
                  </div>
                ))
              ) : (
                <div className="text-center py-6 text-[#9C958D] italic">
                  No analyst notes recorded yet for this customer account.
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
