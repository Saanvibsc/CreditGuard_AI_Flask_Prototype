import React, { useState, useEffect, useMemo } from 'react';
import {
  PieChart,
  BarChart3,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  ShieldCheck,
  ShieldAlert,
  Users,
  CreditCard,
  DollarSign,
  Sparkles,
  Sliders,
  Send,
  Copy,
  ExternalLink,
  ChevronRight,
  Filter,
  RefreshCw,
  Eye,
  Info
} from 'lucide-react';
import { Customer, RiskConfig, CustomerSegment, RiskTier } from '../types';
import { api } from '../services/api';
import { calculateRiskAssessment } from '../utils/scoringEngine';
import { NavPage } from './Sidebar';

interface SegmentWiseDashboardProps {
  config: RiskConfig;
  onSelectCustomer: (customerId: string) => void;
  onNavigate: (page: NavPage) => void;
}

const SEGMENT_COLORS: Record<string, { bg: string; text: string; dot: string; border: string }> = {
  'Prime Transactors': { bg: 'bg-emerald-50', text: 'text-emerald-800', dot: '#10b981', border: 'border-emerald-200' },
  'Revolving Balances': { bg: 'bg-blue-50', text: 'text-blue-800', dot: '#3b82f6', border: 'border-blue-200' },
  'Elevated Leverage': { bg: 'bg-amber-50', text: 'text-amber-800', dot: '#f59e0b', border: 'border-amber-200' },
  'Delinquency Watchlist': { bg: 'bg-rose-50', text: 'text-rose-800', dot: '#ef4444', border: 'border-rose-200' },
  'Emerging Young Borrowers': { bg: 'bg-purple-50', text: 'text-purple-800', dot: '#8b5cf6', border: 'border-purple-200' },
};

const DEFAULT_SEGMENT_COLOR = { bg: 'bg-slate-50', text: 'text-slate-800', dot: '#64748b', border: 'border-slate-200' };

export const SegmentWiseDashboard: React.FC<SegmentWiseDashboardProps> = ({
  config,
  onSelectCustomer,
  onNavigate,
}) => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [segmentsData, setSegmentsData] = useState<any[]>([]);
  const [selectedSegment, setSelectedSegment] = useState<'All' | string>('All');
  const [loading, setLoading] = useState<boolean>(true);
  const [hoveredCustomer, setHoveredCustomer] = useState<Customer | null>(null);
  const [selectedDotCustomer, setSelectedDotCustomer] = useState<Customer | null>(null);
  const [showValueLabels, setShowValueLabels] = useState<boolean>(false);
  const [distViewMetric, setDistViewMetric] = useState<'count' | 'exposure'>('count');

  // Policy Simulator States
  const [limitAdjustmentPct, setLimitAdjustmentPct] = useState<number>(0);
  const [minPaymentPct, setMinPaymentPct] = useState<number>(2.5);
  const [restrictCashAdvance, setRestrictCashAdvance] = useState<boolean>(false);
  const [matrixRiskFilter, setMatrixRiskFilter] = useState<'All' | 'Low' | 'Medium' | 'High'>('All');

  // AI Segment Strategist States
  const [aiLoading, setAiLoading] = useState<boolean>(false);
  const [aiQuery, setAiQuery] = useState<string>('');
  const [aiResponse, setAiResponse] = useState<any | null>(null);
  const [copiedType, setCopiedType] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);

    Promise.all([
      api.searchCustomers(undefined, undefined, undefined, config),
      api.getSegmentationData()
    ]).then(([custList, segData]) => {
      if (!mounted) return;
      setCustomers(custList);
      setSegmentsData(segData.segments || []);
      setLoading(false);
    }).catch(err => {
      console.error('Failed to load segment dashboard data:', err);
      if (mounted) setLoading(false);
    });

    return () => {
      mounted = false;
    };
  }, [config]);

  // Available unique segments in standard risk-ascending portfolio order
  const uniqueSegments = useMemo(() => {
    const canonicalOrder = [
      'Prime Transactors',
      'Revolving Balances',
      'Emerging Young Borrowers',
      'Elevated Leverage',
      'Delinquency Watchlist'
    ];
    const presentSegments = Array.from(new Set(customers.map((c) => c.segment).filter(Boolean)));
    const sorted = canonicalOrder.filter((seg) => presentSegments.includes(seg));
    presentSegments.forEach((seg) => {
      if (!sorted.includes(seg)) sorted.push(seg);
    });
    return sorted.length > 0 ? sorted : canonicalOrder;
  }, [customers]);

  // Filtered customers for active segment and risk filter
  const activeCustomers = useMemo(() => {
    let list = selectedSegment === 'All' ? customers : customers.filter((c) => c.segment === selectedSegment);
    if (matrixRiskFilter !== 'All') {
      list = list.filter((c) => {
        const assessment = calculateRiskAssessment(c, config);
        return assessment.riskTier === matrixRiskFilter;
      });
    }
    return list;
  }, [customers, selectedSegment, matrixRiskFilter, config]);

  // Combined Segment x Risk Cross-Analysis Matrix
  const segmentRiskCrossMatrix = useMemo(() => {
    return uniqueSegments.map((seg) => {
      const segCusts = customers.filter((c) => c.segment === seg);
      const total = segCusts.length;

      const scored = segCusts.map((c) => ({
        customer: c,
        assessment: calculateRiskAssessment(c, config),
      }));

      const low = scored.filter((s) => s.assessment.riskTier === 'Low');
      const med = scored.filter((s) => s.assessment.riskTier === 'Medium');
      const high = scored.filter((s) => s.assessment.riskTier === 'High');

      const lowExposure = low.reduce((sum, s) => sum + (s.customer.outstandingBalance || 0), 0);
      const medExposure = med.reduce((sum, s) => sum + (s.customer.outstandingBalance || 0), 0);
      const highExposure = high.reduce((sum, s) => sum + (s.customer.outstandingBalance || 0), 0);
      const totalExposure = lowExposure + medExposure + highExposure;

      const avgPd = total > 0
        ? scored.reduce((sum, s) => sum + s.assessment.defaultProbability, 0) / total
        : 0;

      return {
        segment: seg,
        total,
        totalExposure,
        avgPd,
        low: {
          count: low.length,
          pct: total > 0 ? (low.length / total) * 100 : 0,
          exposure: lowExposure,
        },
        med: {
          count: med.length,
          pct: total > 0 ? (med.length / total) * 100 : 0,
          exposure: medExposure,
        },
        high: {
          count: high.length,
          pct: total > 0 ? (high.length / total) * 100 : 0,
          exposure: highExposure,
        },
      };
    });
  }, [customers, uniqueSegments, config]);

  // Credit Risk Distribution: Low, Medium, High categories based on actual dataset & active segment filter
  const riskDistribution = useMemo(() => {
    const cohort = selectedSegment === 'All' ? customers : customers.filter((c) => c.segment === selectedSegment);
    const scored = cohort.map((c) => ({
      customer: c,
      assessment: calculateRiskAssessment(c, config),
    }));

    const low = scored.filter((s) => s.assessment.riskTier === 'Low');
    const med = scored.filter((s) => s.assessment.riskTier === 'Medium');
    const high = scored.filter((s) => s.assessment.riskTier === 'High');

    const total = scored.length;
    const lowExposure = low.reduce((sum, s) => sum + (s.customer.outstandingBalance || 0), 0);
    const medExposure = med.reduce((sum, s) => sum + (s.customer.outstandingBalance || 0), 0);
    const highExposure = high.reduce((sum, s) => sum + (s.customer.outstandingBalance || 0), 0);
    const totalExposure = lowExposure + medExposure + highExposure;

    const lowAvgPd = low.length > 0 ? low.reduce((sum, s) => sum + s.assessment.defaultProbability, 0) / low.length : 0;
    const medAvgPd = med.length > 0 ? med.reduce((sum, s) => sum + s.assessment.defaultProbability, 0) / med.length : 0;
    const highAvgPd = high.length > 0 ? high.reduce((sum, s) => sum + s.assessment.defaultProbability, 0) / high.length : 0;

    const lowAvgUtil = low.length > 0 ? low.reduce((sum, s) => sum + (s.customer.creditUtilization || 0), 0) / low.length : 0;
    const medAvgUtil = med.length > 0 ? med.reduce((sum, s) => sum + (s.customer.creditUtilization || 0), 0) / med.length : 0;
    const highAvgUtil = high.length > 0 ? high.reduce((sum, s) => sum + (s.customer.creditUtilization || 0), 0) / high.length : 0;

    const maxCount = Math.max(1, low.length, med.length, high.length);
    const maxExposure = Math.max(1, lowExposure, medExposure, highExposure);

    return {
      total,
      totalExposure,
      maxCount,
      maxExposure,
      tiers: [
        {
          key: 'Low' as const,
          label: 'Low Risk',
          scoreRange: 'Score ≤ 34',
          count: low.length,
          pct: total > 0 ? (low.length / total) * 100 : 0,
          exposure: lowExposure,
          exposurePct: totalExposure > 0 ? (lowExposure / totalExposure) * 100 : 0,
          avgPd: lowAvgPd,
          avgUtil: lowAvgUtil,
          barColor: '#10b981',
          bgClass: 'bg-emerald-500',
          lightBgClass: 'bg-emerald-50/70',
          borderClass: 'border-emerald-200',
          textClass: 'text-emerald-700',
          badgeClass: 'bg-emerald-100 text-emerald-800 border border-emerald-200',
          policy: 'Eligible for credit line expansion & prime rewards'
        },
        {
          key: 'Medium' as const,
          label: 'Medium Risk',
          scoreRange: 'Score 35–64',
          count: med.length,
          pct: total > 0 ? (med.length / total) * 100 : 0,
          exposure: medExposure,
          exposurePct: totalExposure > 0 ? (medExposure / totalExposure) * 100 : 0,
          avgPd: medAvgPd,
          avgUtil: medAvgUtil,
          barColor: '#f59e0b',
          bgClass: 'bg-amber-500',
          lightBgClass: 'bg-amber-50/70',
          borderClass: 'border-amber-200',
          textClass: 'text-amber-700',
          badgeClass: 'bg-amber-100 text-amber-800 border border-amber-200',
          policy: 'Standard account monitoring & mid-cycle balance alerts'
        },
        {
          key: 'High' as const,
          label: 'High Risk',
          scoreRange: 'Score ≥ 65',
          count: high.length,
          pct: total > 0 ? (high.length / total) * 100 : 0,
          exposure: highExposure,
          exposurePct: totalExposure > 0 ? (highExposure / totalExposure) * 100 : 0,
          avgPd: highAvgPd,
          avgUtil: highAvgUtil,
          barColor: '#ef4444',
          bgClass: 'bg-rose-500',
          lightBgClass: 'bg-rose-50/70',
          borderClass: 'border-rose-200',
          textClass: 'text-rose-700',
          badgeClass: 'bg-rose-100 text-rose-800 border border-rose-200',
          policy: 'Workout desk assignment & cash-advance facility cap'
        }
      ]
    };
  }, [customers, selectedSegment, config]);

  // Comparative Segment Benchmark Matrix calculated directly from existing dataset
  const comparativeSegmentMatrix = useMemo(() => {
    const totalPortfolioCount = customers.length || 1;
    const totalPortfolioExposure = customers.reduce((sum, c) => sum + (c.outstandingBalance || 0), 0);

    const segmentStrategies: Record<string, { tagline: string; strategy: string }> = {
      'Prime Transactors': {
        tagline: 'High liquidity, pristine payment history, low revolving utilization (<25%)',
        strategy: 'Extend prime credit lines by 15–20% and market tier-1 rewards programs.'
      },
      'Revolving Balances': {
        tagline: 'Core revolving cohort, steady payment behaviour, primary interest generator',
        strategy: 'Maintain regular quarterly line reviews; offer automated balance sweep features.'
      },
      'Elevated Leverage': {
        tagline: 'High utilization (60%+), elevated debt-to-income sensitivity',
        strategy: 'Cap ATM cash advance facilities to 10% and mandate 3.5% minimum monthly payment.'
      },
      'Delinquency Watchlist': {
        tagline: 'Chronic payment delays (6M), acute default hazard (90+ DPD)',
        strategy: 'Immediate credit line freeze/curtailment of 20% and proactive workout desk contact.'
      },
      'Emerging Young Borrowers': {
        tagline: 'Shorter credit tenure, lower line ceiling, active credit reputation building',
        strategy: 'Graduated credit line growth tied to consecutive on-time payment milestones.'
      }
    };

    const rows = uniqueSegments.map((segName) => {
      // Base cohort for this segment
      const segAllCusts = customers.filter((c) => c.segment === segName);
      const totalCount = segAllCusts.length;
      const sharePct = totalPortfolioCount > 0 ? (totalCount / totalPortfolioCount) * 100 : 0;

      // Filtered cohort (respects matrixRiskFilter)
      const segFilteredCusts = matrixRiskFilter === 'All' 
        ? segAllCusts 
        : segAllCusts.filter((c) => {
            const assessment = calculateRiskAssessment(c, config);
            return assessment.riskTier === matrixRiskFilter;
          });
      
      const filteredCount = segFilteredCusts.length;

      // Calculated values from actual customer records
      const totalExposure = segAllCusts.reduce((sum, c) => sum + (c.outstandingBalance || 0), 0);
      const filteredExposure = segFilteredCusts.reduce((sum, c) => sum + (c.outstandingBalance || 0), 0);
      
      const avgUtil = totalCount > 0
        ? segAllCusts.reduce((sum, c) => sum + (c.creditUtilization || 0), 0) / totalCount
        : 0;
      
      const avgBal = totalCount > 0
        ? totalExposure / totalCount
        : 0;

      const avgInc = totalCount > 0
        ? segAllCusts.reduce((sum, c) => sum + (c.annualIncome || 0), 0) / totalCount
        : 0;

      const avgLimit = totalCount > 0
        ? segAllCusts.reduce((sum, c) => sum + (c.creditLimit || 0), 0) / totalCount
        : 0;

      // Real observed default rate from dataset (accounts with actualDefault === 1 or 3+ late payments)
      const defCount = segAllCusts.filter((c) => c.actualDefault === 1 || c.delayedPayments6M >= 3).length;
      const defaultRate = totalCount > 0 ? (defCount / totalCount) * 100 : 0;

      // Model predicted PD (average across all cardholders in this segment)
      const avgPd = totalCount > 0
        ? segAllCusts.reduce((sum, c) => sum + calculateRiskAssessment(c, config).defaultProbability, 0) / totalCount
        : 0;

      // Filtered cohort averages (when a risk filter is active)
      const filteredAvgUtil = filteredCount > 0
        ? segFilteredCusts.reduce((sum, c) => sum + (c.creditUtilization || 0), 0) / filteredCount
        : 0;
      const filteredAvgBal = filteredCount > 0
        ? filteredExposure / filteredCount
        : 0;
      const filteredAvgPd = filteredCount > 0
        ? segFilteredCusts.reduce((sum, c) => sum + calculateRiskAssessment(c, config).defaultProbability, 0) / filteredCount
        : 0;

      const meta = segmentStrategies[segName] || {
        tagline: 'K-Means behavioral cohort benchmark',
        strategy: 'Standard underwriting monitoring with scheduled portfolio reviews.'
      };

      return {
        name: segName,
        tagline: meta.tagline,
        strategy: meta.strategy,
        totalCount,
        sharePct,
        filteredCount,
        totalExposure,
        filteredExposure,
        avgUtil,
        avgBal,
        avgInc,
        avgLimit,
        avgPd,
        defaultRate,
        defCount,
        filteredAvgUtil,
        filteredAvgBal,
        filteredAvgPd
      };
    });

    // Portfolio Totals
    const portfolioDefCount = customers.filter((c) => c.actualDefault === 1 || c.delayedPayments6M >= 3).length;
    const portfolioDefaultRate = totalPortfolioCount > 0 ? (portfolioDefCount / totalPortfolioCount) * 100 : 0;
    const portfolioAvgUtil = totalPortfolioCount > 0 
      ? customers.reduce((sum, c) => sum + (c.creditUtilization || 0), 0) / totalPortfolioCount 
      : 0;
    const portfolioAvgBal = totalPortfolioCount > 0 
      ? totalPortfolioExposure / totalPortfolioCount 
      : 0;
    const portfolioAvgInc = totalPortfolioCount > 0 
      ? customers.reduce((sum, c) => sum + (c.annualIncome || 0), 0) / totalPortfolioCount 
      : 0;
    const portfolioAvgPd = totalPortfolioCount > 0 
      ? customers.reduce((sum, c) => sum + calculateRiskAssessment(c, config).defaultProbability, 0) / totalPortfolioCount 
      : 0;

    const filteredTotalCount = matrixRiskFilter === 'All'
      ? totalPortfolioCount
      : customers.filter((c) => calculateRiskAssessment(c, config).riskTier === matrixRiskFilter).length;
    const filteredTotalExposure = matrixRiskFilter === 'All'
      ? totalPortfolioExposure
      : customers.filter((c) => calculateRiskAssessment(c, config).riskTier === matrixRiskFilter).reduce((sum, c) => sum + (c.outstandingBalance || 0), 0);

    return {
      rows,
      totals: {
        totalCount: totalPortfolioCount,
        totalExposure: totalPortfolioExposure,
        filteredCount: filteredTotalCount,
        filteredExposure: filteredTotalExposure,
        avgUtil: portfolioAvgUtil,
        avgBal: portfolioAvgBal,
        avgInc: portfolioAvgInc,
        avgPd: portfolioAvgPd,
        defaultRate: portfolioDefaultRate,
        defCount: portfolioDefCount,
        strategy: 'Basel II / IFRS 9 Multi-Tier Risk Governance Policy'
      }
    };
  }, [customers, uniqueSegments, matrixRiskFilter, config]);

  // Aggregate metrics for active segment
  const segmentStats = useMemo(() => {
    const totalCount = activeCustomers.length;
    if (totalCount === 0) {
      return {
        totalCount: 0,
        totalExposure: 0,
        totalLimit: 0,
        avgUtilization: 0,
        avgBalance: 0,
        avgDefaultRate: 0,
        avgIncome: 0,
        highRiskCount: 0,
        totalMonthlySpend: 0,
      };
    }

    let totalExposure = 0;
    let totalLimit = 0;
    let totalIncome = 0;
    let totalSpend = 0;
    let sumDefaultRate = 0;
    let highRiskCount = 0;

    activeCustomers.forEach((c) => {
      totalExposure += c.outstandingBalance ?? 0;
      totalLimit += c.creditLimit ?? 0;
      totalIncome += c.annualIncome ?? 0;
      totalSpend += c.monthlyAverageSpend ?? (c.outstandingBalance * 0.35);

      const assessment = calculateRiskAssessment(c, config);
      sumDefaultRate += assessment.defaultProbability;
      if (assessment.riskTier === 'High') highRiskCount++;
    });

    return {
      totalCount,
      totalExposure,
      totalLimit,
      avgUtilization: totalLimit > 0 ? (totalExposure / totalLimit) * 100 : 0,
      avgBalance: totalExposure / totalCount,
      avgDefaultRate: sumDefaultRate / totalCount,
      avgIncome: totalIncome / totalCount,
      highRiskCount,
      totalMonthlySpend: totalSpend,
    };
  }, [activeCustomers, config]);

  // Simulated Policy Impact
  const simulatedImpact = useMemo(() => {
    const impactedCount = activeCustomers.length;
    if (impactedCount === 0) return { capitalSaved: 0, defaultRateDrop: 0 };

    const limitChange = (segmentStats.totalLimit * limitAdjustmentPct) / 100;
    const paymentBuffer = minPaymentPct > 2.5 ? (minPaymentPct - 2.5) * 1.8 : 0;
    const cashAdvancePenalty = restrictCashAdvance ? 2.4 : 0;

    // Projected default rate improvement
    const defaultReduction = Math.max(0, -limitAdjustmentPct * 0.15 + paymentBuffer + cashAdvancePenalty);
    const capitalSaved = Math.max(0, -limitChange * 0.45 + (segmentStats.totalExposure * (defaultReduction / 100)));

    return {
      capitalSaved,
      defaultRateDrop: Math.min(segmentStats.avgDefaultRate, defaultReduction),
    };
  }, [activeCustomers, segmentStats, limitAdjustmentPct, minPaymentPct, restrictCashAdvance]);

  // AI Segment Strategist query
  const handleAskSegmentAi = async (promptText?: string) => {
    const query = promptText || aiQuery;
    if (!query.trim()) return;

    setAiLoading(true);
    setAiQuery(query);

    try {
      const context = {
        segment: selectedSegment,
        customerCount: segmentStats.totalCount,
        totalExposure: segmentStats.totalExposure,
        avgUtilization: segmentStats.avgUtilization.toFixed(1) + '%',
        avgDefaultRate: segmentStats.avgDefaultRate.toFixed(1) + '%',
        highRiskCount: segmentStats.highRiskCount,
        totalMonthlySpend: segmentStats.totalMonthlySpend,
      };

      const res = await api.askAiRiskAssistant(query, context);
      setAiResponse(res);
    } catch (err) {
      console.error('AI segment query error:', err);
      setAiResponse({
        answer: `Segment Diagnostic for [${selectedSegment}]: Comprising ${segmentStats.totalCount} cardholders with $${segmentStats.totalExposure.toLocaleString()} in aggregate revolving exposure. Average credit utilization is ${segmentStats.avgUtilization.toFixed(1)}% with an average default probability of ${segmentStats.avgDefaultRate.toFixed(1)}%. Accounts under surveillance exhibit sensitivity to interest rate spikes and cash advance restrictions.`,
        keyFactors: [
          `Portfolio Exposure: $${segmentStats.totalExposure.toLocaleString()} across ${segmentStats.totalCount} active accounts`,
          `Average Utilization: ${segmentStats.avgUtilization.toFixed(1)}%`,
          `High-Risk Concentration: ${segmentStats.highRiskCount} cardholders flagged for priority review`,
          `Average Annual Cardholder Income: $${Math.round(segmentStats.avgIncome).toLocaleString()}`,
        ],
        recommendedActions: [
          'Enforce segment-wide limit curtailment of 15% on accounts with utilization >80%.',
          'Deploy automated mid-cycle billing reminders 4 days prior to due dates.',
          'Cap cash advance facilities to 15% of total line on elevated leverage cohorts.',
        ],
      });
    } finally {
      setAiLoading(false);
    }
  };

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2200);
  };

  if (loading) {
    return (
      <div className="max-w-[1400px] mx-auto py-24 flex flex-col items-center justify-center space-y-4">
        <RefreshCw className="w-8 h-8 text-[#4338ca] animate-spin" />
        <p className="text-sm font-mono text-slate-500">Loading Segment-Wise Dashboard & Clusters...</p>
      </div>
    );
  }

  // Scatter plot constants
  const maxBalance = 25000;
  const maxUtil = 100;

  return (
    <div className="max-w-[1400px] mx-auto space-y-8 pb-20">
      {/* Top Header & Segment Selector */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wide uppercase bg-emerald-50 text-emerald-700 border border-emerald-200">
                Segment-Wise Portfolio Dashboard
              </span>
              <span className="text-xs font-mono text-slate-400">
                Credit Card Cohort Intelligence & Scatter Analysis
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {selectedSegment === 'All' ? 'Complete Portfolio Segmentation' : selectedSegment}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Analyzing <span className="font-bold text-slate-800">{segmentStats.totalCount}</span> credit card accounts · ${segmentStats.totalExposure.toLocaleString()} outstanding revolving exposure
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate('customer-dashboard')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#FAF7F2] text-[#8A3A28] hover:bg-[#F5EBE6] rounded-xl text-xs font-bold border border-[#EBE6DC] transition-colors cursor-pointer"
            >
              Switch to Customer-Wise View
              <ChevronRight className="w-4 h-4 text-[#BA5641]" />
            </button>
          </div>
        </div>

        {/* Segment Pill Selector */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => {
              setSelectedSegment('All');
              setSelectedDotCustomer(null);
            }}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              selectedSegment === 'All'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All Segments ({customers.length})
          </button>

          {uniqueSegments.map((seg) => {
            const isSelected = selectedSegment === seg;
            const count = customers.filter((c) => c.segment === seg).length;
            const color = SEGMENT_COLORS[seg] || DEFAULT_SEGMENT_COLOR;

            return (
              <button
                key={seg}
                onClick={() => {
                  setSelectedSegment(seg);
                  setSelectedDotCustomer(null);
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  isSelected
                    ? 'bg-[#BA5641] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: color.dot }}
                />
                <span>{seg}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-[#A54935] text-white' : 'bg-slate-200 text-slate-600'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 4 Primary Segment KPI Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric 1: Total Segment Exposure */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Segment Exposure</span>
            <DollarSign className="w-4 h-4 text-slate-400" />
          </div>
          <div>
            <div className="text-3xl font-black text-slate-900">
              ${segmentStats.totalExposure.toLocaleString()}
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Avg Balance: <span className="font-semibold text-slate-800">${Math.round(segmentStats.avgBalance).toLocaleString()}</span>
            </p>
          </div>
          <div className="mt-3 pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex justify-between">
            <span>Total Credit Limit:</span>
            <span className="font-semibold text-slate-800">${segmentStats.totalLimit.toLocaleString()}</span>
          </div>
        </div>

        {/* Metric 2: Average Line Utilization */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Average Utilization</span>
            <BarChart3 className="w-4 h-4 text-slate-400" />
          </div>
          <div>
            <div className="text-3xl font-black text-slate-900">
              {segmentStats.avgUtilization.toFixed(1)}%
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mt-2">
              <div
                className={`h-full rounded-full ${
                  segmentStats.avgUtilization > 75 ? 'bg-rose-500' :
                  segmentStats.avgUtilization > 40 ? 'bg-amber-500' :
                  'bg-emerald-500'
                }`}
                style={{ width: `${Math.min(100, segmentStats.avgUtilization)}%` }}
              />
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex justify-between">
            <span>Spend Velocity:</span>
            <span className="font-semibold text-slate-800">${(segmentStats.totalMonthlySpend ?? 0).toLocaleString()}/mo</span>
          </div>
        </div>

        {/* Metric 3: Default Probability */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Projected Default Rate</span>
            <TrendingUp className="w-4 h-4 text-rose-500" />
          </div>
          <div>
            <div className="text-3xl font-black text-slate-900">
              {segmentStats.avgDefaultRate.toFixed(1)}%
            </div>
            <p className="text-xs text-slate-500 mt-1">
              High Risk Accounts: <span className="font-bold text-rose-600">{segmentStats.highRiskCount}</span>
            </p>
          </div>
          <div className="mt-3 pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex justify-between">
            <span>Risk Composition:</span>
            <span className="font-semibold text-slate-800">
              {((segmentStats.highRiskCount / Math.max(1, segmentStats.totalCount)) * 100).toFixed(0)}% High Tier
            </span>
          </div>
        </div>

        {/* Metric 4: Cardholder Count & Income */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Segment Accounts</span>
            <Users className="w-4 h-4 text-slate-400" />
          </div>
          <div>
            <div className="text-3xl font-black text-slate-900">
              {segmentStats.totalCount}
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Avg Income: <span className="font-semibold text-slate-800">${Math.round(segmentStats.avgIncome).toLocaleString()}</span>
            </p>
          </div>
          <div className="mt-3 pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex justify-between">
            <span>Share of Portfolio:</span>
            <span className="font-semibold text-slate-800">
              {((segmentStats.totalCount / Math.max(1, customers.length)) * 100).toFixed(1)}%
            </span>
          </div>
        </div>
      </div>

      {/* CENTERPIECE: Interactive Segment Scatter Plot & Quadrant Visualizer */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
              <h2 className="text-lg font-black text-slate-900">
                Customer Scatter Map: Card Usage vs. Total Balance
              </h2>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Every dot represents an individual credit card account ({activeCustomers.length} plotted). Left-to-right is utilization rate (0% to 100%). Bottom-to-top is current unpaid balance ($0 to $25k).
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Show Value Labels Toggle */}
            <button
              onClick={() => setShowValueLabels(!showValueLabels)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors cursor-pointer flex items-center gap-1.5 ${
                showValueLabels
                  ? 'bg-indigo-50 border-indigo-300 text-indigo-700'
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              <span>{showValueLabels ? '✓ Showing Value Tags' : '+ Show Value Tags'}</span>
            </button>

            <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-200">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500" /> Prime
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-blue-500" /> Revolver
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-amber-500" /> High Debt
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-rose-500" /> Danger
              </span>
            </div>
          </div>
        </div>

        {/* Selected Dot Quick Popover Drawer */}
        {selectedDotCustomer && (
          <div className="p-4 bg-indigo-50/70 border border-indigo-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-in fade-in duration-200">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900 text-sm">{selectedDotCustomer.fullName}</span>
                <span className="font-mono text-xs text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded font-bold">
                  {selectedDotCustomer.id}
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-white border border-indigo-200 text-slate-700 font-semibold">
                  {selectedDotCustomer.cardType}
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-1">
                Balance: <span className="font-bold text-slate-900">${Number(selectedDotCustomer?.outstandingBalance || 0).toLocaleString()}</span> ·
                Utilization: <span className="font-bold text-slate-900">{(Number(selectedDotCustomer?.creditUtilization) || 0).toFixed(1)}%</span> ·
                Credit Limit: <span className="font-semibold text-slate-800">${Number(selectedDotCustomer?.creditLimit || 0).toLocaleString()}</span> ·
                Segment: <span className="font-semibold text-indigo-900">{selectedDotCustomer?.segment || 'Standard'}</span> ·
                Delinquency 6M: <span className="font-semibold text-slate-800">{selectedDotCustomer?.delayedPayments6M ?? 0} late cycles</span>
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  onSelectCustomer(selectedDotCustomer.id);
                  onNavigate('customer-dashboard');
                }}
                className="px-3.5 py-1.5 bg-[#BA5641] hover:bg-[#A54935] text-white rounded-lg text-xs font-bold shadow-xs flex items-center gap-1 cursor-pointer"
              >
                Open in Customer Dashboard <ChevronRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setSelectedDotCustomer(null)}
                className="px-2.5 py-1.5 text-xs text-slate-500 hover:text-slate-800 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* The SVG Scatter Plot Container with Expanded Margins & Zero Clipping */}
        <div className="relative w-full h-[520px] sm:h-[560px] bg-white border border-slate-200 rounded-xl overflow-hidden p-3 select-none">
          {/* Quadrant Background Watermarks (Aligned to inner axes: Left 12% to 94%, Top 10% to 84%) */}
          <div className="absolute left-[12%] right-[6%] top-[10%] bottom-[16%] grid grid-cols-2 grid-rows-2 pointer-events-none">
            {/* Top-Left Quadrant */}
            <div className="border-r border-b border-dashed border-slate-200/80 p-3 bg-indigo-50/20">
              <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-700/80 bg-indigo-100/70 px-2 py-0.5 rounded">
                Quadrant II: High-Income Borrowers (High Debt, Low % Used)
              </span>
            </div>
            {/* Top-Right Quadrant */}
            <div className="border-b border-dashed border-slate-200/80 p-3 text-right bg-rose-50/20">
              <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700/80 bg-rose-100/70 px-2 py-0.5 rounded">
                Quadrant I: Critical Danger Zone (Maxed Out &amp; High Debt)
              </span>
            </div>
            {/* Bottom-Left Quadrant */}
            <div className="border-r border-dashed border-slate-200/80 p-3 flex items-end bg-emerald-50/20">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700/80 bg-emerald-100/70 px-2 py-0.5 rounded">
                Quadrant III: Safe Prime Spenders (Low Debt, Low Card Usage)
              </span>
            </div>
            {/* Bottom-Right Quadrant */}
            <div className="p-3 flex items-end justify-end bg-amber-50/20">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700/80 bg-amber-100/70 px-2 py-0.5 rounded">
                Quadrant IV: Overextended Low-Limit (High % Used, Low Limit)
              </span>
            </div>
          </div>

          {/* Glitch-Free Responsive SVG Canvas */}
          <svg className="w-full h-full relative z-10 overflow-visible">
            {/* HORIZONTAL GRID LINES & Y-AXIS LABELS */}
            {[
              { val: 25000, label: '$25,000', yPct: 10 },
              { val: 20000, label: '$20,000', yPct: 24.8 },
              { val: 15000, label: '$15,000', yPct: 39.6 },
              { val: 10000, label: '$10,000', yPct: 54.4 },
              { val: 5000,  label: '$5,000',  yPct: 69.2 },
              { val: 0,     label: '$0',      yPct: 84 }
            ].map((tick) => (
              <g key={`y-${tick.val}`}>
                <line
                  x1="12%"
                  y1={`${tick.yPct}%`}
                  x2="94%"
                  y2={`${tick.yPct}%`}
                  stroke="#f1f5f9"
                  strokeWidth="1"
                />
                <text
                  x="10.8%"
                  y={`${tick.yPct}%`}
                  textAnchor="end"
                  dominantBaseline="middle"
                  className="text-[10px] font-mono font-semibold fill-slate-500"
                >
                  {tick.label}
                </text>
              </g>
            ))}

            {/* VERTICAL GRID LINES & X-AXIS LABELS */}
            {[
              { val: 0,   label: '0%',   xPct: 12 },
              { val: 20,  label: '20%',  xPct: 28.4 },
              { val: 40,  label: '40%',  xPct: 44.8 },
              { val: 60,  label: '60%',  xPct: 61.2 },
              { val: 80,  label: '80%',  xPct: 77.6 },
              { val: 100, label: '100%', xPct: 94 }
            ].map((tick) => (
              <g key={`x-${tick.val}`}>
                <line
                  x1={`${tick.xPct}%`}
                  y1="10%"
                  x2={`${tick.xPct}%`}
                  y2="84%"
                  stroke="#f1f5f9"
                  strokeWidth="1"
                />
                <text
                  x={`${tick.xPct}%`}
                  y="88.5%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="text-[10px] font-mono font-semibold fill-slate-500"
                >
                  {tick.label}
                </text>
              </g>
            ))}

            {/* 30% Utilization Prime Ceiling Guide Line */}
            <line
              x1={`${12 + (30 / 100) * 82}%`}
              y1="10%"
              x2={`${12 + (30 / 100) * 82}%`}
              y2="84%"
              stroke="#10b981"
              strokeWidth="1.2"
              strokeDasharray="4 4"
              opacity="0.75"
            />
            <text
              x={`${12 + (30 / 100) * 82}%`}
              y="7.5%"
              textAnchor="middle"
              className="text-[9px] font-bold fill-emerald-600 uppercase tracking-wider"
            >
              30% Prime Limit
            </text>

            {/* 75% Critical Danger Threshold Line */}
            <line
              x1={`${12 + (75 / 100) * 82}%`}
              y1="10%"
              x2={`${12 + (75 / 100) * 82}%`}
              y2="84%"
              stroke="#ef4444"
              strokeWidth="1.2"
              strokeDasharray="4 4"
              opacity="0.75"
            />
            <text
              x={`${12 + (75 / 100) * 82}%`}
              y="7.5%"
              textAnchor="middle"
              className="text-[9px] font-bold fill-rose-600 uppercase tracking-wider"
            >
              75% Danger Line
            </text>

            {/* Chart Outer Axes */}
            <line x1="12%" y1="84%" x2="94%" y2="84%" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="12%" y1="10%" x2="12%" y2="84%" stroke="#94a3b8" strokeWidth="1.5" />

            {/* Axis Titles (Padded cleanly to prevent clipping) */}
            <text x="53%" y="95%" textAnchor="middle" className="text-[11px] font-bold fill-slate-700 tracking-wide uppercase">
              Credit Card Utilization Rate (% of Card Limit) →
            </text>
            <text x="12%" y="5%" className="text-[11px] font-bold fill-slate-700 tracking-wide uppercase">
              ↑ Current Unpaid Balance ($)
            </text>

            {/* DYNAMIC CROSSHAIR LINES FOR HOVERED OR SELECTED CUSTOMER */}
            {hoveredCustomer && (() => {
              const hx = 12 + (Math.min(100, Math.max(0, hoveredCustomer.creditUtilization)) / 100) * 82;
              const hy = 84 - (Math.min(25000, Math.max(0, hoveredCustomer.outstandingBalance)) / 25000) * 74;
              return (
                <g pointerEvents="none">
                  {/* Vertical line to X-axis */}
                  <line
                    x1={`${hx}%`}
                    y1={`${hy}%`}
                    x2={`${hx}%`}
                    y2="84%"
                    stroke="#4338ca"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                  />
                  {/* Horizontal line to Y-axis */}
                  <line
                    x1="12%"
                    y1={`${hy}%`}
                    x2={`${hx}%`}
                    y2={`${hy}%`}
                    stroke="#4338ca"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                  />
                  {/* Highlight Pill on X Axis */}
                  <rect
                    x={`${hx - 3.5}%`}
                    y="85%"
                    width="7%"
                    height="18"
                    rx="4"
                    fill="#4338ca"
                  />
                  <text
                    x={`${hx}%`}
                    y="89%"
                    textAnchor="middle"
                    className="text-[10px] font-bold fill-white font-mono"
                  >
                    {hoveredCustomer.creditUtilization.toFixed(1)}%
                  </text>
                  {/* Highlight Pill on Y Axis */}
                  <rect
                    x="2.5%"
                    y={`${hy - 2.2}%`}
                    width="9%"
                    height="18"
                    rx="4"
                    fill="#4338ca"
                  />
                  <text
                    x="7%"
                    y={`${hy}%`}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="text-[9px] font-bold fill-white font-mono"
                  >
                    ${Number(hoveredCustomer.outstandingBalance).toLocaleString()}
                  </text>
                </g>
              );
            })()}

            {/* RENDER SCATTER DOTS: Optimized marker size (r=4.0) with subtle deterministic jitter to prevent total overlap */}
            {activeCustomers.map((c) => {
              // Deterministic micro-jitter to prevent points with identical coordinates from stacking completely invisibly
              const idSum = c.id.split('').reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
              const jitterX = (((idSum * 7) % 13) - 6) * 0.08;
              const jitterY = (((idSum * 11) % 13) - 6) * 0.08;

              const rawX = 12 + (Math.min(100, Math.max(0, c.creditUtilization)) / 100) * 82;
              const rawY = 84 - (Math.min(25000, Math.max(0, c.outstandingBalance)) / 25000) * 74;

              const cxPct = Math.max(12.5, Math.min(93.5, rawX + jitterX));
              const cyPct = Math.max(10.5, Math.min(83.5, rawY + jitterY));

              const colorInfo = SEGMENT_COLORS[c.segment] || DEFAULT_SEGMENT_COLOR;
              const isSelected = selectedDotCustomer?.id === c.id;
              const isHovered = hoveredCustomer?.id === c.id;

              return (
                <g key={c.id}>
                  {/* Focus outer ring on hover/selected */}
                  {(isSelected || isHovered) && (
                    <circle
                      cx={`${cxPct}%`}
                      cy={`${cyPct}%`}
                      r={11}
                      fill="none"
                      stroke={colorInfo.dot}
                      strokeWidth={2}
                      strokeDasharray="2 2"
                      pointerEvents="none"
                    />
                  )}

                  {/* Visual Circle (crisp r=4.0 default prevents crowding while maintaining distinct visibility) */}
                  <circle
                    cx={`${cxPct}%`}
                    cy={`${cyPct}%`}
                    r={isSelected ? 7.5 : isHovered ? 6.5 : 4.0}
                    fill={colorInfo.dot}
                    fillOpacity={isSelected || isHovered ? 1 : 0.76}
                    stroke={isSelected ? '#0f172a' : isHovered ? '#1e1b4b' : '#ffffff'}
                    strokeWidth={isSelected ? 2.5 : isHovered ? 2 : 1.2}
                    pointerEvents="none"
                  />

                  {/* Optional Permanent Value Tag if enabled */}
                  {showValueLabels && (
                    <text
                      x={`${cxPct + 1.2}%`}
                      y={`${cyPct - 1.2}%`}
                      className="text-[9px] font-bold fill-slate-700 pointer-events-none select-none"
                    >
                      ${(c.outstandingBalance / 1000).toFixed(1)}k · {c.creditUtilization.toFixed(0)}%
                    </text>
                  )}

                  {/* Enlarged hit-target: handles all clicks and hover events seamlessly */}
                  <circle
                    cx={`${cxPct}%`}
                    cy={`${cyPct}%`}
                    r={13}
                    fill="transparent"
                    className="cursor-pointer"
                    onClick={() => setSelectedDotCustomer(c)}
                    onMouseEnter={() => setHoveredCustomer(c)}
                    onMouseLeave={() => {
                      if (hoveredCustomer?.id === c.id) {
                        setHoveredCustomer(null);
                      }
                    }}
                  />
                </g>
              );
            })}
          </svg>

          {/* GLITCH-FREE POPUP TOOLTIP: Responsive clamped positioning ensures it is never clipped */}
          {hoveredCustomer && (() => {
            const rawX = 12 + (Math.min(100, Math.max(0, hoveredCustomer.creditUtilization)) / 100) * 82;
            const rawY = 84 - (Math.min(25000, Math.max(0, hoveredCustomer.outstandingBalance)) / 25000) * 74;
            const tipX = rawX;
            const tipY = rawY;

            const isTop = tipY < 42;
            const isFarRight = tipX > 68;
            const isFarLeft = tipX < 32;

            return (
              <div
                className={`absolute z-30 pointer-events-none bg-slate-900/95 text-white p-3.5 rounded-xl shadow-2xl border border-slate-700 backdrop-blur-md min-w-[240px] max-w-[280px] transition-all duration-150 ${
                  isTop ? 'translate-y-3' : '-translate-y-[calc(100%+14px)]'
                } ${
                  isFarRight ? '-translate-x-[92%]' : isFarLeft ? 'translate-x-[4%]' : '-translate-x-1/2'
                }`}
                style={{ left: `${tipX}%`, top: `${tipY}%` }}
              >
                <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
                  <span className="font-bold text-white text-xs">{hoveredCustomer.fullName}</span>
                  <span className="font-mono text-[10px] text-indigo-300 bg-indigo-950/80 px-1.5 py-0.5 rounded border border-indigo-800/50 font-bold">
                    {hoveredCustomer.id}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-[11px]">
                  <div>
                    <span className="text-slate-400 block text-[10px]">Unpaid Balance</span>
                    <span className="font-bold text-white font-mono text-xs">
                      ${Number(hoveredCustomer.outstandingBalance || 0).toLocaleString()}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Card Limit Used</span>
                    <span className="font-bold text-white font-mono text-xs">
                      {Number(hoveredCustomer.creditUtilization || 0).toFixed(1)}%
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Credit Limit</span>
                    <span className="font-semibold text-slate-300 font-mono">
                      ${Number(hoveredCustomer.creditLimit || 0).toLocaleString()}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Late in 6 Mos</span>
                    <span className={`font-semibold font-mono ${Number(hoveredCustomer.delayedPayments6M || 0) > 0 ? 'text-rose-400 font-bold' : 'text-emerald-400'}`}>
                      {hoveredCustomer.delayedPayments6M || 0} cycles
                    </span>
                  </div>
                </div>
                <div className="mt-2.5 pt-2 border-t border-slate-800 flex items-center justify-between text-[10px]">
                  <span className="text-indigo-300 font-semibold">{hoveredCustomer.segment}</span>
                  <span className="text-slate-400">Click dot to pin</span>
                </div>
              </div>
            );
          })()}
        </div>
      </div>

      {/* VISUALIZATION: Customer Credit Risk Distribution Bar Chart */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
              <h2 className="text-lg font-black text-slate-900">
                Customer Distribution Across Credit-Risk Categories
              </h2>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Breakdown of <span className="font-bold text-slate-800">{riskDistribution.total}</span> cardholders in {selectedSegment === 'All' ? 'the entire portfolio' : `[${selectedSegment}]`} across Low, Medium, and High risk categories based on actual model scores.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* View Mode Toggle: Count vs Exposure */}
            <div className="flex items-center bg-slate-100 p-1 rounded-xl">
              <button
                onClick={() => setDistViewMetric('count')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  distViewMetric === 'count'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Cardholder Count (#)
              </button>
              <button
                onClick={() => setDistViewMetric('exposure')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  distViewMetric === 'exposure'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Revolving Balance ($)
              </button>
            </div>

            {/* Quick Reset Filter if Active */}
            {matrixRiskFilter !== 'All' && (
              <button
                onClick={() => setMatrixRiskFilter('All')}
                className="px-2.5 py-1.5 bg-indigo-50 border border-indigo-200 text-indigo-700 rounded-xl text-xs font-bold cursor-pointer hover:bg-indigo-100 flex items-center gap-1"
              >
                <span>Filtered: {matrixRiskFilter} Risk</span>
                <span className="text-indigo-400">×</span>
              </button>
            )}
          </div>
        </div>

        {/* Dynamic Responsive SVG Bar Chart */}
        <div className="relative w-full h-72 sm:h-80 bg-slate-50/50 border border-slate-200 rounded-xl p-4 select-none">
          {/* SVG Canvas for Bar Chart */}
          <svg className="w-full h-full overflow-visible">
            {/* Horizontal Gridlines & Y-Axis Labels */}
            {[0, 0.25, 0.5, 0.75, 1.0].map((step, idx) => {
              const yPct = 82 - step * 68; // 82% is bottom baseline, 14% is top
              const maxVal = distViewMetric === 'count' ? riskDistribution.maxCount : riskDistribution.maxExposure;
              const tickVal = Math.round(maxVal * step);
              const label = distViewMetric === 'count' 
                ? tickVal.toString()
                : `$${(tickVal / 1000).toFixed(0)}k`;

              return (
                <g key={`bar-grid-${idx}`}>
                  <line
                    x1="12%"
                    y1={`${yPct}%`}
                    x2="95%"
                    y2={`${yPct}%`}
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeDasharray={step === 0 ? 'none' : '3 3'}
                  />
                  <text
                    x="10.5%"
                    y={`${yPct}%`}
                    textAnchor="end"
                    dominantBaseline="middle"
                    className="text-[10px] font-mono font-medium fill-slate-400"
                  >
                    {label}
                  </text>
                </g>
              );
            })}

            {/* Baseline X-Axis */}
            <line x1="12%" y1="82%" x2="95%" y2="82%" stroke="#cbd5e1" strokeWidth="1.5" />

            {/* Render 3 Distinct Risk Tier Bars: Low, Medium, High */}
            {riskDistribution.tiers.map((tier, idx) => {
              // 3 evenly distributed bar slots: centered at 28%, 54%, 80%
              const slotCenters = [28, 54, 80];
              const slotX = slotCenters[idx];
              const barWidth = 14; // in %

              const currentVal = distViewMetric === 'count' ? tier.count : tier.exposure;
              const maxVal = distViewMetric === 'count' ? riskDistribution.maxCount : riskDistribution.maxExposure;
              const heightPct = maxVal > 0 ? (currentVal / maxVal) * 68 : 0;
              const barTopY = 82 - heightPct;

              const isFilterActive = matrixRiskFilter === tier.key;

              return (
                <g 
                  key={tier.key} 
                  className="cursor-pointer group"
                  onClick={() => setMatrixRiskFilter(matrixRiskFilter === tier.key ? 'All' : tier.key)}
                >
                  {/* Active Selection Ring / Background Column */}
                  {isFilterActive && (
                    <rect
                      x={`${slotX - barWidth / 2 - 2}%`}
                      y="12%"
                      width={`${barWidth + 4}%`}
                      height="72%"
                      rx="8"
                      fill={tier.barColor}
                      fillOpacity="0.08"
                      stroke={tier.barColor}
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                    />
                  )}

                  {/* Main Vertical Bar */}
                  <rect
                    x={`${slotX - barWidth / 2}%`}
                    y={`${barTopY}%`}
                    width={`${barWidth}%`}
                    height={`${Math.max(2, heightPct)}%`}
                    rx="6"
                    fill={tier.barColor}
                    fillOpacity={isFilterActive ? 1 : 0.88}
                    className="transition-all duration-300 hover:opacity-100"
                  />

                  {/* Value Tag on Top of Bar */}
                  <text
                    x={`${slotX}%`}
                    y={`${Math.max(8, barTopY - 2.5)}%`}
                    textAnchor="middle"
                    className="text-[11px] font-bold font-mono fill-slate-900"
                  >
                    {distViewMetric === 'count' 
                      ? `${tier.count} (${tier.pct.toFixed(0)}%)` 
                      : `$${(tier.exposure / 1000).toFixed(1)}k (${tier.exposurePct.toFixed(0)}%)`}
                  </text>

                  {/* Category Label below Bar */}
                  <text
                    x={`${slotX}%`}
                    y="88%"
                    textAnchor="middle"
                    className="text-xs font-bold fill-slate-800"
                  >
                    {tier.label}
                  </text>

                  {/* Score Range Subtitle below Label */}
                  <text
                    x={`${slotX}%`}
                    y="93.5%"
                    textAnchor="middle"
                    className="text-[10px] font-mono font-medium fill-slate-500"
                  >
                    {tier.scoreRange}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* 3 Detailed Category Metric Breakdown Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
          {riskDistribution.tiers.map((tier) => {
            const isFilterActive = matrixRiskFilter === tier.key;

            return (
              <div
                key={`card-${tier.key}`}
                onClick={() => setMatrixRiskFilter(matrixRiskFilter === tier.key ? 'All' : tier.key)}
                className={`p-4 rounded-xl border transition-all cursor-pointer ${tier.lightBgClass} ${
                  isFilterActive ? `ring-2 ring-indigo-600 ${tier.borderClass} shadow-xs` : `${tier.borderClass} hover:border-slate-400`
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: tier.barColor }} />
                    <span className="font-bold text-slate-900 text-sm">{tier.label}</span>
                  </div>
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${tier.badgeClass}`}>
                    {tier.scoreRange}
                  </span>
                </div>

                <div className="space-y-2 mt-3">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-slate-500">Cardholders:</span>
                    <span className="text-base font-black text-slate-900 font-mono">
                      {tier.count} <span className="text-xs text-slate-500 font-normal">({tier.pct.toFixed(1)}%)</span>
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-slate-500">Total Revolving Balance:</span>
                    <span className="text-sm font-bold text-slate-900 font-mono">
                      ${tier.exposure.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between pt-1 border-t border-slate-200/60 text-xs">
                    <span className="text-slate-500">Average Default Prob (PD):</span>
                    <span className="font-bold font-mono text-slate-800">{tier.avgPd.toFixed(1)}%</span>
                  </div>

                  <div className="flex items-baseline justify-between text-xs">
                    <span className="text-slate-500">Average Utilization:</span>
                    <span className="font-bold font-mono text-slate-800">{tier.avgUtil.toFixed(1)}%</span>
                  </div>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-200/60 text-[11px] text-slate-600 flex items-center justify-between">
                  <span className="truncate mr-1">{tier.policy}</span>
                  <span className="text-indigo-600 font-bold shrink-0 text-[10px]">
                    {isFilterActive ? '✓ Active Filter' : 'Click to filter'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Combined Segment x Risk Cross-Analysis Matrix */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-indigo-100 text-indigo-800">
                Segment × Risk Analysis
              </span>
              <h3 className="text-base font-bold text-slate-900">
                Segment × Default Risk Cross-Tabulation Matrix
              </h3>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Cross-tabulates K-Means customer segments against calibrated default risk tiers with revolving balance exposure ($).
              Click any cell to filter the cardholder portfolio below.
            </p>
          </div>

          <div className="flex items-center gap-2">
            {(selectedSegment !== 'All' || matrixRiskFilter !== 'All') && (
              <button
                onClick={() => {
                  setSelectedSegment('All');
                  setMatrixRiskFilter('All');
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold cursor-pointer transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Reset Filter ({selectedSegment !== 'All' ? selectedSegment : ''} {matrixRiskFilter !== 'All' ? `· ${matrixRiskFilter} Risk` : ''})
              </button>
            )}
          </div>
        </div>

        {/* Matrix Risk Concentration Callout */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs">
          <div>
            <span className="text-slate-500 text-[11px] uppercase font-bold tracking-wider">Top Risk Concentration</span>
            <div className="font-bold text-slate-900 mt-0.5">
              {segmentRiskCrossMatrix.reduce((prev, curr) => (curr.high.exposure > prev.high.exposure ? curr : prev), segmentRiskCrossMatrix[0])?.segment}
            </div>
            <p className="text-[11px] text-slate-500">
              Concentrates ${segmentRiskCrossMatrix.reduce((max, s) => Math.max(max, s.high.exposure), 0).toLocaleString()} in high-risk revolving balance
            </p>
          </div>
          <div>
            <span className="text-slate-500 text-[11px] uppercase font-bold tracking-wider">Safest Cohort</span>
            <div className="font-bold text-emerald-700 mt-0.5">
              {segmentRiskCrossMatrix.reduce((prev, curr) => (curr.low.pct > prev.low.pct ? curr : prev), segmentRiskCrossMatrix[0])?.segment}
            </div>
            <p className="text-[11px] text-slate-500">
              Highest proportion of low-risk cardholders ({segmentRiskCrossMatrix.reduce((max, s) => Math.max(max, s.low.pct), 0).toFixed(1)}%)
            </p>
          </div>
          <div>
            <span className="text-slate-500 text-[11px] uppercase font-bold tracking-wider">Total Portfolio High Risk</span>
            <div className="font-bold text-rose-600 mt-0.5">
              ${segmentRiskCrossMatrix.reduce((sum, s) => sum + s.high.exposure, 0).toLocaleString()} Exposure
            </div>
            <p className="text-[11px] text-slate-500">
              Across {segmentRiskCrossMatrix.reduce((sum, s) => sum + s.high.count, 0)} delinquent/overextended accounts
            </p>
          </div>
        </div>

        {/* Interactive Cross-Tabulation Grid */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border border-slate-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-slate-100 text-slate-700 font-bold uppercase tracking-wider border-b border-slate-200">
                <th className="py-3 px-4">Segment Cohort (K-Means)</th>
                <th className="py-3 px-4 text-center bg-emerald-50/60 text-emerald-900 border-x border-slate-200">
                  Low Risk Tier (Score ≤ 34)
                </th>
                <th className="py-3 px-4 text-center bg-amber-50/60 text-amber-900 border-r border-slate-200">
                  Medium Risk Tier (Score 35–64)
                </th>
                <th className="py-3 px-4 text-center bg-rose-50/60 text-rose-900 border-r border-slate-200">
                  High Risk Tier (Score ≥ 65)
                </th>
                <th className="py-3 px-4 text-right">Segment Exposure ($)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {segmentRiskCrossMatrix.map((row, idx) => {
                const isSegmentSelected = selectedSegment === row.segment;
                const color = SEGMENT_COLORS[row.segment] || DEFAULT_SEGMENT_COLOR;

                return (
                  <tr key={idx} className={isSegmentSelected ? 'bg-indigo-50/40' : 'hover:bg-slate-50/60'}>
                    <td className="py-3 px-4 font-semibold text-slate-900 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: color.dot }} />
                      <div>
                        <div className="font-bold">{row.segment}</div>
                        <div className="text-[10px] text-slate-400 font-mono">{row.total} Cardholders · Avg PD {row.avgPd.toFixed(1)}%</div>
                      </div>
                    </td>

                    {/* Low Risk Cell */}
                    <td
                      onClick={() => {
                        setSelectedSegment(row.segment);
                        setMatrixRiskFilter('Low');
                      }}
                      className={`py-3 px-4 text-center border-x border-slate-200 cursor-pointer transition-all ${
                        isSegmentSelected && matrixRiskFilter === 'Low'
                          ? 'bg-emerald-200/80 font-bold ring-2 ring-emerald-500'
                          : 'hover:bg-emerald-100/60'
                      }`}
                    >
                      <div className="font-bold text-emerald-900">{row.low.count} ({row.low.pct.toFixed(0)}%)</div>
                      <div className="text-[10px] text-emerald-700 font-mono">${row.low.exposure.toLocaleString()}</div>
                    </td>

                    {/* Medium Risk Cell */}
                    <td
                      onClick={() => {
                        setSelectedSegment(row.segment);
                        setMatrixRiskFilter('Medium');
                      }}
                      className={`py-3 px-4 text-center border-r border-slate-200 cursor-pointer transition-all ${
                        isSegmentSelected && matrixRiskFilter === 'Medium'
                          ? 'bg-amber-200/80 font-bold ring-2 ring-amber-500'
                          : 'hover:bg-amber-100/60'
                      }`}
                    >
                      <div className="font-bold text-amber-900">{row.med.count} ({row.med.pct.toFixed(0)}%)</div>
                      <div className="text-[10px] text-amber-700 font-mono">${row.med.exposure.toLocaleString()}</div>
                    </td>

                    {/* High Risk Cell */}
                    <td
                      onClick={() => {
                        setSelectedSegment(row.segment);
                        setMatrixRiskFilter('High');
                      }}
                      className={`py-3 px-4 text-center border-r border-slate-200 cursor-pointer transition-all ${
                        isSegmentSelected && matrixRiskFilter === 'High'
                          ? 'bg-rose-200/80 font-bold ring-2 ring-rose-500'
                          : 'hover:bg-rose-100/60'
                      }`}
                    >
                      <div className="font-bold text-rose-900">{row.high.count} ({row.high.pct.toFixed(0)}%)</div>
                      <div className="text-[10px] text-rose-700 font-mono">${row.high.exposure.toLocaleString()}</div>
                    </td>

                    {/* Segment Exposure Total */}
                    <td className="py-3 px-4 text-right font-mono font-bold text-slate-800">
                      ${row.totalExposure.toLocaleString()}
                    </td>
                  </tr>
                );
              })}

              {/* Portfolio Totals Row */}
              <tr className="bg-slate-50 font-bold text-slate-900 border-t-2 border-slate-300">
                <td className="py-3 px-4">Portfolio Aggregate Total</td>
                <td className="py-3 px-4 text-center border-x border-slate-200 text-emerald-800">
                  {segmentRiskCrossMatrix.reduce((s, r) => s + r.low.count, 0)} accounts
                  <div className="text-[10px] font-mono text-emerald-700">
                    ${segmentRiskCrossMatrix.reduce((s, r) => s + r.low.exposure, 0).toLocaleString()}
                  </div>
                </td>
                <td className="py-3 px-4 text-center border-r border-slate-200 text-amber-800">
                  {segmentRiskCrossMatrix.reduce((s, r) => s + r.med.count, 0)} accounts
                  <div className="text-[10px] font-mono text-amber-700">
                    ${segmentRiskCrossMatrix.reduce((s, r) => s + r.med.exposure, 0).toLocaleString()}
                  </div>
                </td>
                <td className="py-3 px-4 text-center border-r border-slate-200 text-rose-800">
                  {segmentRiskCrossMatrix.reduce((s, r) => s + r.high.count, 0)} accounts
                  <div className="text-[10px] font-mono text-rose-700">
                    ${segmentRiskCrossMatrix.reduce((s, r) => s + r.high.exposure, 0).toLocaleString()}
                  </div>
                </td>
                <td className="py-3 px-4 text-right font-mono font-black">
                  ${segmentRiskCrossMatrix.reduce((s, r) => s + r.totalExposure, 0).toLocaleString()}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Comparative Segment Matrix Table */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
              <h3 className="text-base font-bold text-slate-900">Comparative Segment Benchmark Matrix</h3>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Side-by-side empirical performance metrics across all credit card cohorts calculated directly from active cardholder accounts. Click any row to focus on that segment.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-slate-500 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-lg">
              {comparativeSegmentMatrix.totals.totalCount} Accounts · 5 Cohorts
            </span>

            {/* Active Filters Indicators */}
            {matrixRiskFilter !== 'All' && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
                <span>Filter: {matrixRiskFilter} Risk</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setMatrixRiskFilter('All');
                  }}
                  className="hover:text-amber-950 cursor-pointer font-bold"
                  title="Clear risk filter"
                >
                  ×
                </button>
              </span>
            )}

            {selectedSegment !== 'All' && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                <span>Focus: {selectedSegment}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedSegment('All');
                  }}
                  className="hover:text-indigo-950 cursor-pointer font-bold"
                  title="Clear segment filter"
                >
                  ×
                </button>
              </span>
            )}

            {(selectedSegment !== 'All' || matrixRiskFilter !== 'All') && (
              <button
                onClick={() => {
                  setSelectedSegment('All');
                  setMatrixRiskFilter('All');
                }}
                className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                Reset All Filters
              </button>
            )}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 font-semibold uppercase tracking-wider bg-slate-50/70">
                <th className="py-3 px-3">Segment Cohort</th>
                <th className="py-3 px-3 text-right">Cardholders</th>
                <th className="py-3 px-3 text-right">Portfolio Share</th>
                <th className="py-3 px-3 text-right">Avg Utilization</th>
                <th className="py-3 px-3 text-right">Avg Balance</th>
                <th className="py-3 px-3 text-right">Segment Exposure</th>
                <th className="py-3 px-3 text-right">Avg Income</th>
                <th className="py-3 px-3 text-right">Estimated PD</th>
                <th className="py-3 px-3 text-right">Default Rate</th>
                <th className="py-3 px-3 min-w-[220px]">Primary Underwriting Strategy</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {comparativeSegmentMatrix.rows.map((seg, idx) => {
                const color = SEGMENT_COLORS[seg.name] || DEFAULT_SEGMENT_COLOR;
                const isSelected = selectedSegment === seg.name;

                return (
                  <tr
                    key={idx}
                    onClick={() => setSelectedSegment(isSelected ? 'All' : seg.name)}
                    className={`cursor-pointer transition-colors ${
                      isSelected
                        ? 'bg-indigo-50/90 font-medium border-l-4 border-indigo-600'
                        : 'hover:bg-slate-50/80'
                    }`}
                  >
                    <td className="py-3.5 px-3">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: color.dot }} />
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="font-bold text-slate-900">{seg.name}</span>
                            {isSelected && (
                              <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-indigo-600 text-white font-bold">
                                ACTIVE
                              </span>
                            )}
                          </div>
                          <div className="text-[10px] text-slate-500 leading-tight mt-0.5">{seg.tagline}</div>
                        </div>
                      </div>
                    </td>

                    {/* Cardholders Count (Reflects Filter) */}
                    <td className="py-3.5 px-3 text-right font-mono text-slate-800">
                      {matrixRiskFilter === 'All' ? (
                        <span>{seg.totalCount}</span>
                      ) : (
                        <div>
                          <span className="font-bold text-indigo-700">{seg.filteredCount}</span>
                          <span className="text-[10px] text-slate-400 block font-sans">of {seg.totalCount}</span>
                        </div>
                      )}
                    </td>

                    {/* Portfolio Share */}
                    <td className="py-3.5 px-3 text-right font-mono text-slate-600">
                      {seg.sharePct.toFixed(1)}%
                    </td>

                    {/* Avg Utilization */}
                    <td className="py-3.5 px-3 text-right font-mono font-bold">
                      <span className={seg.avgUtil >= 60 ? 'text-rose-600' : seg.avgUtil >= 35 ? 'text-amber-600' : 'text-emerald-700'}>
                        {seg.avgUtil.toFixed(1)}%
                      </span>
                    </td>

                    {/* Avg Balance */}
                    <td className="py-3.5 px-3 text-right font-mono text-slate-800">
                      ${Math.round(seg.avgBal).toLocaleString()}
                    </td>

                    {/* Segment Exposure Total */}
                    <td className="py-3.5 px-3 text-right font-mono font-semibold text-slate-900">
                      ${Math.round(seg.totalExposure).toLocaleString()}
                    </td>

                    {/* Avg Income */}
                    <td className="py-3.5 px-3 text-right font-mono text-slate-600">
                      ${Math.round(seg.avgInc).toLocaleString()}
                    </td>

                    {/* Model Estimated Default Probability (PD) */}
                    <td className="py-3.5 px-3 text-right font-mono font-bold text-slate-900">
                      {seg.avgPd.toFixed(1)}%
                    </td>

                    {/* Historical Default Rate */}
                    <td className="py-3.5 px-3 text-right font-mono">
                      <span className={seg.defaultRate > 20 ? 'text-rose-600 font-bold' : seg.defaultRate > 5 ? 'text-amber-600 font-semibold' : 'text-emerald-700'}>
                        {seg.defaultRate.toFixed(1)}%
                      </span>
                      <span className="text-[10px] text-slate-400 block font-sans">({seg.defCount} def)</span>
                    </td>

                    {/* Primary Underwriting Strategy */}
                    <td className="py-3.5 px-3 text-[11px] text-slate-700 leading-relaxed">
                      {seg.strategy}
                    </td>
                  </tr>
                );
              })}

              {/* Portfolio Totals Row */}
              <tr className="bg-slate-100/90 font-bold text-slate-900 border-t-2 border-slate-300">
                <td className="py-3 px-3">
                  <div className="font-bold">Portfolio Aggregate Total</div>
                  <div className="text-[10px] text-slate-500 font-normal">Complete 200 Card Accounts Universe</div>
                </td>
                <td className="py-3 px-3 text-right font-mono text-slate-900">
                  {matrixRiskFilter === 'All' ? (
                    comparativeSegmentMatrix.totals.totalCount
                  ) : (
                    <div>
                      <span className="text-indigo-700">{comparativeSegmentMatrix.totals.filteredCount}</span>
                      <span className="text-[10px] text-slate-400 block font-normal">of 200</span>
                    </div>
                  )}
                </td>
                <td className="py-3 px-3 text-right font-mono text-slate-700">100.0%</td>
                <td className="py-3 px-3 text-right font-mono text-slate-900">
                  {comparativeSegmentMatrix.totals.avgUtil.toFixed(1)}%
                </td>
                <td className="py-3 px-3 text-right font-mono text-slate-900">
                  ${Math.round(comparativeSegmentMatrix.totals.avgBal).toLocaleString()}
                </td>
                <td className="py-3 px-3 text-right font-mono text-slate-900">
                  ${Math.round(comparativeSegmentMatrix.totals.totalExposure).toLocaleString()}
                </td>
                <td className="py-3 px-3 text-right font-mono text-slate-700">
                  ${Math.round(comparativeSegmentMatrix.totals.avgInc).toLocaleString()}
                </td>
                <td className="py-3 px-3 text-right font-mono text-slate-900">
                  {comparativeSegmentMatrix.totals.avgPd.toFixed(1)}%
                </td>
                <td className="py-3 px-3 text-right font-mono text-slate-900">
                  {comparativeSegmentMatrix.totals.defaultRate.toFixed(1)}%
                  <span className="text-[10px] text-slate-400 block font-normal">({comparativeSegmentMatrix.totals.defCount} def)</span>
                </td>
                <td className="py-3 px-3 text-[11px] text-slate-600 font-normal">
                  {comparativeSegmentMatrix.totals.strategy}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Grid: Interactive Segment Policy Simulator + Executive Strategy Memo */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column (6 cols): What-If Policy Rebalancing Simulator */}
        <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-5">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Sliders className="w-4 h-4 text-indigo-600" />
                Capital & Loss Mitigation Policy Simulator
              </h3>
              <p className="text-xs text-slate-500">
                Simulate capital preservation and default reduction on <span className="font-semibold text-slate-800">[{selectedSegment}]</span>
              </p>
            </div>
            <button
              onClick={() => {
                setLimitAdjustmentPct(0);
                setMinPaymentPct(2.5);
                setRestrictCashAdvance(false);
              }}
              className="text-[11px] text-slate-500 hover:text-slate-800 cursor-pointer font-medium"
            >
              Reset Controls
            </button>
          </div>

          <div className="space-y-4">
            {/* Slider 1: Credit Limit Adjustment */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-700">Credit Line Curtailment / Expansion:</span>
                <span className={`font-mono font-bold ${limitAdjustmentPct < 0 ? 'text-rose-600' : limitAdjustmentPct > 0 ? 'text-emerald-600' : 'text-slate-800'}`}>
                  {limitAdjustmentPct > 0 ? `+${limitAdjustmentPct}%` : `${limitAdjustmentPct}%`}
                </span>
              </div>
              <input
                type="range"
                min="-30"
                max="30"
                step="5"
                value={limitAdjustmentPct}
                onChange={(e) => setLimitAdjustmentPct(Number(e.target.value))}
                className="w-full accent-indigo-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>-30% (Curtail)</span>
                <span>0% (Baseline)</span>
                <span>+30% (Expand)</span>
              </div>
            </div>

            {/* Slider 2: Minimum Payment Requirement */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-700">Minimum Monthly Due Requirement:</span>
                <span className="font-mono font-bold text-slate-900">{minPaymentPct.toFixed(1)}% of balance</span>
              </div>
              <input
                type="range"
                min="2.0"
                max="5.0"
                step="0.5"
                value={minPaymentPct}
                onChange={(e) => setMinPaymentPct(Number(e.target.value))}
                className="w-full accent-indigo-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>2.0% (Standard)</span>
                <span>3.5%</span>
                <span>5.0% (Strict)</span>
              </div>
            </div>

            {/* Toggle 3: Restrict Cash Advance */}
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-200">
              <div>
                <div className="text-xs font-semibold text-slate-800">Restrict Cash Advance Access</div>
                <div className="text-[11px] text-slate-500">Cap ATM liquidity draws on elevated utilization accounts</div>
              </div>
              <input
                type="checkbox"
                checked={restrictCashAdvance}
                onChange={(e) => setRestrictCashAdvance(e.target.checked)}
                className="w-4 h-4 accent-indigo-600 rounded cursor-pointer"
              />
            </div>
          </div>

          {/* Simulated Outcome Display */}
          <div className="p-4 rounded-xl bg-indigo-50/70 border border-indigo-200 grid grid-cols-2 gap-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-900 block">
                Estimated Capital Protected
              </span>
              <span className="text-2xl font-black text-indigo-900 font-mono">
                ${Math.round(simulatedImpact.capitalSaved).toLocaleString()}
              </span>
              <span className="text-[10px] text-indigo-700 block mt-0.5 font-sans">Across {segmentStats.totalCount} active accounts</span>
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-900 block">
                Default Rate Improvement
              </span>
              <span className="text-2xl font-black text-emerald-800 font-mono">
                -{simulatedImpact.defaultRateDrop.toFixed(1)}%
              </span>
              <span className="text-[10px] text-emerald-700 block mt-0.5 font-sans">Projected delinquency drop</span>
            </div>
          </div>
        </div>

        {/* Right Column (6 cols): Executive Risk Committee Strategist */}
        <div className="lg:col-span-6 bg-[#14213d] text-white rounded-2xl p-6 shadow-sm border border-slate-700/80 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-700 pb-3">
            <div>
              <h3 className="text-sm font-bold text-white tracking-wide">Executive Underwriting &amp; Strategy Memo</h3>
              <p className="text-[11px] text-slate-300">Live portfolio diagnostic and supervisory policy recommendations</p>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-700/60 font-semibold">
              Cohort: {selectedSegment}
            </span>
          </div>

          {/* Executive Inquiries */}
          <div className="space-y-1.5">
            <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block">
              Generate Formal Advisory:
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleAskSegmentAi(`Perform an executive portfolio risk audit for the [${selectedSegment}] cohort. Highlight default threats and recommended credit line actions.`)}
                disabled={aiLoading}
                className="text-[11px] px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors cursor-pointer text-left"
              >
                Executive Risk Audit
              </button>
              <button
                onClick={() => handleAskSegmentAi(`Simulate a 200 bps macroeconomic rate hike on the [${selectedSegment}] cohort. What will happen to delinquency and revolving debt burden?`)}
                disabled={aiLoading}
                className="text-[11px] px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors cursor-pointer text-left"
              >
                Rate Hike Stress Test
              </button>
              <button
                onClick={() => handleAskSegmentAi(`Draft an Executive Credit Committee memo regarding policy rebalancing for the [${selectedSegment}] segment.`)}
                disabled={aiLoading}
                className="text-[11px] px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors cursor-pointer text-left"
              >
                Draft Committee Memo
              </button>
            </div>
          </div>

          {/* Interactive Inquiry Box */}
          <div className="relative">
            <input
              type="text"
              placeholder={`Ask policy advisory regarding ${selectedSegment}...`}
              value={aiQuery}
              onChange={(e) => setAiQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleAskSegmentAi();
              }}
              className="w-full pl-3 pr-10 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-sans"
            />
            <button
              onClick={() => handleAskSegmentAi()}
              disabled={aiLoading || !aiQuery.trim()}
              className="absolute right-2 top-2 p-1 text-slate-400 hover:text-white disabled:opacity-40 cursor-pointer"
            >
              {aiLoading ? <RefreshCw className="w-4 h-4 animate-spin text-indigo-400" /> : <Send className="w-4 h-4" />}
            </button>
          </div>

          {/* Output Card */}
          {aiResponse && (
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-700 space-y-3 text-xs animate-in fade-in duration-200">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-bold text-indigo-300 uppercase tracking-wider text-[10px]">
                    Supervisory Strategic Memorandum
                  </span>
                  <button
                    onClick={() => handleCopy(aiResponse.answer, 'memo')}
                    className="text-[10px] text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
                  >
                    <Copy className="w-3 h-3" />
                    {copiedType === 'memo' ? 'Copied' : 'Copy'}
                  </button>
                </div>
                <p className="text-slate-200 leading-relaxed text-xs">
                  {aiResponse.answer}
                </p>
              </div>

              {aiResponse.keyFactors && aiResponse.keyFactors.length > 0 && (
                <div className="border-t border-slate-800 pt-2.5">
                  <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                    Observed Portfolio Drivers
                  </span>
                  <ul className="space-y-1">
                    {aiResponse.keyFactors.map((kf: string, i: number) => (
                      <li key={i} className="text-slate-300 text-[11px] flex items-start gap-1.5">
                        <span className="text-indigo-400">•</span>
                        <span>{kf}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {aiResponse.recommendedActions && aiResponse.recommendedActions.length > 0 && (
                <div className="border-t border-slate-800 pt-2.5">
                  <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                    Recommended Credit Governance Actions
                  </span>
                  <ul className="space-y-1">
                    {aiResponse.recommendedActions.map((rec: string, i: number) => (
                      <li key={i} className="text-slate-300 text-[11px] flex items-start gap-1.5">
                        <span className="text-emerald-400 font-bold">✓</span>
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
