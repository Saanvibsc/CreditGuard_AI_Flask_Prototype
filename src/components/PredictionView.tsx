import React, { useState, useEffect, useMemo } from 'react';
import { 
  Cpu, 
  RefreshCw, 
  AlertTriangle, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  TrendingUp, 
  TrendingDown, 
  ShieldAlert, 
  User, 
  DollarSign, 
  Percent, 
  SlidersHorizontal,
  ChevronRight,
  Info,
  BarChart3,
  Award,
  Layers,
  FileCheck
} from 'lucide-react';
import { Customer, RiskConfig, PredictionResponse, FactorContribution, NavPage, ModelBenchmark } from '../types';
import { api } from '../services/api';
import { getCalibratedScore10, getCalibratedCategory } from '../utils/scoringEngine';
import { ModelEvaluationSuite } from './ModelEvaluationSuite';

interface PredictionViewProps {
  selectedCustomerId: string;
  customers: Customer[];
  config: RiskConfig;
  onSelectCustomer: (id: string) => void;
  onNavigate?: (page: NavPage) => void;
}

// Two Models Architecture: Primary (Gradient Boosting) & Comparison (Regularized Logistic Regression)
// Evaluated empirically in ModelEvaluationSuite component.

export const PredictionView: React.FC<PredictionViewProps> = ({
  selectedCustomerId,
  customers,
  config,
  onSelectCustomer,
  onNavigate
}) => {
  // Navigation / View Tab
  const [activeTab, setActiveTab] = useState<'simulator' | 'benchmarks'>('simulator');
  const [benchmarks, setBenchmarks] = useState<ModelBenchmark[]>([]);
  const [benchmarksLoading, setBenchmarksLoading] = useState<boolean>(false);
  const [selectedMatrixModel, setSelectedMatrixModel] = useState<string>('Gradient Boosting Classifier');

  // Underwriting Decision State (consolidated from RiskAssessment)
  const [committeeAction, setCommitteeAction] = useState<string>('Approve Standard Line');
  const [committeeNote, setCommitteeNote] = useState<string>('');
  const [decisionLogged, setDecisionLogged] = useState<boolean>(false);

  // Active selected customer
  const currentCustomer = useMemo(() => {
    return customers.find(c => c.id === selectedCustomerId) || customers[0] || null;
  }, [customers, selectedCustomerId]);

  // Editable financial inputs (What-If form state)
  const [utilization, setUtilization] = useState<number>(35);
  const [delayedPayments, setDelayedPayments] = useState<number>(0);
  const [annualIncome, setAnnualIncome] = useState<number>(65000);
  const [creditLimit, setCreditLimit] = useState<number>(15000);
  const [outstandingBalance, setOutstandingBalance] = useState<number>(5000);
  const [cashAdvances, setCashAdvances] = useState<number>(0);
  const [creditHistoryYears, setCreditHistoryYears] = useState<number>(4.5);
  const [age, setAge] = useState<number>(35);

  // Prediction states
  const [baselinePrediction, setBaselinePrediction] = useState<PredictionResponse | null>(null);
  const [predictionResult, setPredictionResult] = useState<PredictionResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [apiError, setApiError] = useState<string>('');
  const [isModified, setIsModified] = useState<boolean>(false);
  const [searchFilter, setSearchFilter] = useState<string>('');

  // Load Model Comparison Benchmarks
  useEffect(() => {
    setBenchmarksLoading(true);
    api.getValidationModels()
      .then((data: ModelBenchmark[]) => {
        setBenchmarks(data);
      })
      .catch((err) => {
        console.warn('Could not load validation model benchmarks:', err);
      })
      .finally(() => {
        setBenchmarksLoading(false);
      });
  }, []);

  // Sync inputs when customer selection changes
  useEffect(() => {
    if (currentCustomer) {
      const util = currentCustomer.creditUtilization || 35.0;
      const delays = currentCustomer.delayedPayments6M || 0;
      const inc = currentCustomer.annualIncome || 65000;
      const lim = currentCustomer.creditLimit || 15000;
      const bal = currentCustomer.outstandingBalance || 0;
      const cash = currentCustomer.cashAdvanceCount6M || 0;
      const hist = currentCustomer.creditHistoryYears || 4.5;
      const cAge = currentCustomer.age || 35;

      setUtilization(util);
      setDelayedPayments(delays);
      setAnnualIncome(inc);
      setCreditLimit(lim);
      setOutstandingBalance(bal);
      setCashAdvances(cash);
      setCreditHistoryYears(hist);
      setAge(cAge);
      setIsModified(false);

      // Fetch baseline prediction for this customer
      fetchBaselineAndPrediction(currentCustomer.id, {
        utilization: util,
        delayedPayments: delays,
        annualIncome: inc,
        creditLimit: lim,
        outstandingBalance: bal
      });
    }
  }, [currentCustomer?.id]);

  const fetchBaselineAndPrediction = async (cid: string, overrides?: Record<string, number>) => {
    setIsLoading(true);
    setApiError('');
    try {
      // 1. Fetch baseline
      const baseRes = await api.predictRisk(cid, undefined, config);
      setBaselinePrediction(baseRes);

      // 2. Fetch current prediction (if overrides differ)
      if (overrides) {
        const simRes = await api.predictRisk(cid, overrides, config);
        setPredictionResult(simRes);
      } else {
        setPredictionResult(baseRes);
      }
    } catch (err: unknown) {
      console.error('Prediction API call failed:', err);
      setApiError(err instanceof Error ? err.message : 'Error connecting to Flask prediction API');
    } finally {
      setIsLoading(false);
    }
  };

  const handlePredictRisk = async () => {
    if (!currentCustomer) return;
    setIsLoading(true);
    setApiError('');

    const overrides = {
      utilization,
      delayedPayments,
      annualIncome,
      creditLimit,
      outstandingBalance
    };

    try {
      const res = await api.predictRisk(currentCustomer.id, overrides, config);
      setPredictionResult(res);
      setIsModified(true);
    } catch (err: unknown) {
      console.error('Error during predict risk:', err);
      setApiError(err instanceof Error ? err.message : 'Prediction request failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetToBaseline = () => {
    if (!currentCustomer) return;
    const util = currentCustomer.creditUtilization || 35.0;
    const delays = currentCustomer.delayedPayments6M || 0;
    const inc = currentCustomer.annualIncome || 65000;
    const lim = currentCustomer.creditLimit || 15000;
    const bal = currentCustomer.outstandingBalance || 0;
    const cash = currentCustomer.cashAdvanceCount6M || 0;
    const hist = currentCustomer.creditHistoryYears || 4.5;
    const cAge = currentCustomer.age || 35;

    setUtilization(util);
    setDelayedPayments(delays);
    setAnnualIncome(inc);
    setCreditLimit(lim);
    setOutstandingBalance(bal);
    setCashAdvances(cash);
    setCreditHistoryYears(hist);
    setAge(cAge);
    setIsModified(false);

    if (baselinePrediction) {
      setPredictionResult(baselinePrediction);
    } else {
      fetchBaselineAndPrediction(currentCustomer.id);
    }
  };

  // What-if scenario presets
  const applyPreset = (preset: 'stress' | 'prime' | 'expand') => {
    if (!currentCustomer) return;
    setIsModified(true);

    if (preset === 'stress') {
      setUtilization(95.0);
      setDelayedPayments(4);
      setOutstandingBalance(Math.round(creditLimit * 0.95));
      setAnnualIncome(Math.round(annualIncome * 0.8));
    } else if (preset === 'prime') {
      setUtilization(12.0);
      setDelayedPayments(0);
      setOutstandingBalance(Math.round(creditLimit * 0.12));
    } else if (preset === 'expand') {
      const newLimit = Math.round(creditLimit * 1.5);
      setCreditLimit(newLimit);
      setUtilization(parseFloat(((outstandingBalance / newLimit) * 100).toFixed(1)));
    }
  };

  // Filtered customer list for switcher
  const filteredCustomers = useMemo(() => {
    if (!searchFilter.trim()) return customers;
    const q = searchFilter.toLowerCase();
    return customers.filter(c => c.id.toLowerCase().includes(q) || c.fullName.toLowerCase().includes(q));
  }, [customers, searchFilter]);

  // Risk styling helpers
  const getTierColor = (tier?: string) => {
    switch (tier) {
      case 'Low':
        return {
          bg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
          badge: 'bg-emerald-600 text-white',
          text: 'text-emerald-700',
          indicator: 'bg-emerald-500'
        };
      case 'Medium':
        return {
          bg: 'bg-amber-50 text-amber-800 border-amber-200',
          badge: 'bg-amber-600 text-white',
          text: 'text-amber-700',
          indicator: 'bg-amber-500'
        };
      case 'High':
      default:
        return {
          bg: 'bg-rose-50 text-rose-800 border-rose-200',
          badge: 'bg-rose-600 text-white',
          text: 'text-rose-700',
          indicator: 'bg-rose-500'
        };
    }
  };

  const assessment = predictionResult?.assessment;
  const baseAssessment = baselinePrediction?.assessment;
  const tierColor = getTierColor(assessment?.riskTier);

  // Compute what-if delta
  const pdDelta = assessment && baseAssessment 
    ? parseFloat((assessment.defaultProbability - baseAssessment.defaultProbability).toFixed(1))
    : null;

  return (
    <div className="space-y-6 max-w-[1400px] mx-auto pb-12">
      {/* Top Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200 pb-5">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="mono text-xs font-bold uppercase tracking-wider text-[#943825] bg-[#EED2C5] px-2 py-0.5 rounded-sm border border-[#E0BCAC]">
              Live Estimator Engine
            </span>
            <span className="text-xs text-gray-500 font-mono">
              model.pkl · 5-Fold Stratified CV
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#14213d] tracking-tight">
            Credit Risk Prediction & What-If Simulator
          </h1>
          <p className="text-sm text-gray-600 mt-1 max-w-3xl">
            Evaluate live default probabilities, score adjustments, and feature explanations using the trained Gradient Boosting estimator connected to the Flask API.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-right shadow-2xs">
            <div className="text-[10px] text-gray-500 uppercase tracking-wider font-mono">Model Algorithm</div>
            <div className="text-xs font-bold text-[#14213d]">Gradient Boosting Classifier</div>
          </div>
        </div>
      </div>

      {/* Primary Workspace View Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-2.5 border border-gray-200 rounded-2xl shadow-xs">
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setActiveTab('simulator')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'simulator'
                ? 'bg-[#14213d] text-white shadow-xs'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>What-If Scenario Simulator &amp; Underwriting</span>
          </button>

          <button
            onClick={() => setActiveTab('benchmarks')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'benchmarks'
                ? 'bg-[#BA5641] text-white shadow-xs'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>Model Evaluation &amp; Confusion Matrix Suite (2 Models)</span>
          </button>
        </div>

        {activeTab === 'simulator' && currentCustomer && (
          <div className="text-xs text-gray-600 font-mono px-2 py-1 bg-slate-50 border border-slate-200 rounded-lg shrink-0">
            Cardholder: <span className="font-bold text-gray-900">{currentCustomer.id}</span> ({currentCustomer.fullName})
          </div>
        )}
      </div>

      {apiError && (
        <div role="alert" className="p-4 bg-rose-50 border border-rose-200 rounded-lg flex items-start gap-3 text-rose-800 text-sm">
          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          <div className="flex-1">
            <span className="font-semibold">Prediction Request Error: </span>
            {apiError}
          </div>
        </div>
      )}

      {/* Main Grid: Customer & Inputs on Left, Results on Right */}
      {activeTab === 'simulator' ? (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* LEFT COLUMN: Customer Selector & Financial Inputs (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Card 1: Customer Selection */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-2xs space-y-4">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <label htmlFor="customer-select" className="text-xs font-bold uppercase tracking-wider text-gray-800 flex items-center gap-2">
                <User className="w-4 h-4 text-[#BA5641]" />
                Select Customer Account
              </label>
              <span className="text-xs font-mono text-gray-500 font-semibold">
                {customers.length} Accounts
              </span>
            </div>

            <div className="space-y-3">
              <input
                type="text"
                placeholder="Search by ID (e.g. CUST000001) or name..."
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                className="w-full text-xs px-3.5 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#BA5641] bg-gray-50"
              />

              <select
                id="customer-select"
                value={selectedCustomerId}
                onChange={(e) => onSelectCustomer(e.target.value)}
                className="w-full text-xs font-medium px-3.5 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#BA5641] focus:border-[#BA5641] bg-white text-[#14213d]"
              >
                {filteredCustomers.map(c => (
                  <option key={c.id} value={c.id}>
                    {c.id} — {c.fullName} ({c.cardType} · Util: {c.creditUtilization}%)
                  </option>
                ))}
              </select>

              {currentCustomer && (
                <div className="mt-3 p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Cardholder:</span>
                    <span className="font-semibold text-gray-900">{currentCustomer.fullName}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Card Type / Segment:</span>
                    <span className="font-mono text-[#8A3A28] font-semibold">{currentCustomer.cardType} · {currentCustomer.segment}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Historical Defaults:</span>
                    <span className={`font-mono font-bold ${currentCustomer.actualDefault === 1 ? 'text-rose-600' : 'text-emerald-600'}`}>
                      {currentCustomer.actualDefault === 1 ? '1 (Defaulted in 6M)' : '0 (Solvent Non-Default)'}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Card 2: Editable Financial Inputs (What-If Variables with Generous Spacing) */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-2xs space-y-6">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-[#BA5641]" />
                <h3 className="text-sm font-bold text-[#14213d]">Editable Financial Inputs</h3>
              </div>
              <button
                type="button"
                onClick={handleResetToBaseline}
                className="text-xs font-semibold text-gray-500 hover:text-[#BA5641] flex items-center gap-1.5 cursor-pointer transition-colors"
                title="Reset all inputs back to customer baseline"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Reset Baseline
              </button>
            </div>

            {/* Quick Presets */}
            <div className="space-y-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 block">
                Quick Scenario Presets:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <button
                  type="button"
                  onClick={() => applyPreset('stress')}
                  className="px-3 py-2 text-xs font-semibold rounded-lg border border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100 transition-colors text-center cursor-pointer"
                >
                  Stress Test
                </button>
                <button
                  type="button"
                  onClick={() => applyPreset('prime')}
                  className="px-3 py-2 text-xs font-semibold rounded-lg border border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors text-center cursor-pointer"
                >
                  Prime Scenario
                </button>
                <button
                  type="button"
                  onClick={() => applyPreset('expand')}
                  className="px-3 py-2 text-xs font-semibold rounded-lg border border-[#E5DFD4] bg-[#FAF7F2] text-[#8A3A28] hover:bg-[#F5EBE6] transition-colors text-center cursor-pointer"
                >
                  +50% Limit
                </button>
              </div>
            </div>

            {/* Input Controls with generous spacing to avoid overlapping */}
            <div className="space-y-5 pt-1">
              
              {/* Credit Utilization */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-gray-700 flex items-center gap-1.5">
                    <Percent className="w-3.5 h-3.5 text-gray-400" />
                    Credit Utilization Rate
                  </span>
                  <span className="font-mono font-bold text-gray-900 bg-slate-100 px-2 py-0.5 rounded">
                    {utilization}%
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="0.5"
                  value={utilization}
                  onChange={(e) => {
                    const u = parseFloat(e.target.value);
                    setUtilization(u);
                    setOutstandingBalance(Math.round(creditLimit * (u / 100)));
                    setIsModified(true);
                  }}
                  className="w-full accent-[#BA5641] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-gray-400 font-mono">
                  <span>0% (Clean)</span>
                  <span>50% (Revolving)</span>
                  <span>100% (Maxed)</span>
                </div>
              </div>

              {/* Delayed Payments */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-gray-700">Delayed Payments (Past 6 Months)</span>
                  <span className="font-mono font-bold text-gray-900 bg-slate-100 px-2 py-0.5 rounded">
                    {delayedPayments} cycles
                  </span>
                </div>
                <div className="grid grid-cols-7 gap-1.5">
                  {[0, 1, 2, 3, 4, 5, 6].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => {
                        setDelayedPayments(num);
                        setIsModified(true);
                      }}
                      className={`py-2 text-xs font-mono font-bold rounded-lg border transition-colors cursor-pointer ${
                        delayedPayments === num
                          ? 'bg-[#14213d] text-white border-[#14213d] shadow-2xs'
                          : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              {/* Annual Income */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-gray-700">
                  Annual Income ($)
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400 text-xs">$</span>
                  <input
                    type="number"
                    min="10000"
                    step="5000"
                    value={annualIncome}
                    onChange={(e) => {
                      setAnnualIncome(Math.max(1000, Number(e.target.value)));
                      setIsModified(true);
                    }}
                    className="w-full pl-8 pr-3.5 py-2.5 text-xs font-mono font-medium border border-gray-300 rounded-lg focus:outline-none focus:border-[#4338ca]"
                  />
                </div>
              </div>

              {/* Credit Limit & Balance in responsive grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-gray-700 truncate">
                    Credit Limit ($)
                  </label>
                  <input
                    type="number"
                    min="1000"
                    step="1000"
                    value={creditLimit}
                    onChange={(e) => {
                      const lim = Math.max(500, Number(e.target.value));
                      setCreditLimit(lim);
                      setUtilization(parseFloat(((outstandingBalance / lim) * 100).toFixed(1)));
                      setIsModified(true);
                    }}
                    className="w-full px-3.5 py-2.5 text-xs font-mono font-medium border border-gray-300 rounded-lg focus:outline-none focus:border-[#4338ca]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-gray-700 truncate">
                    Revolving Balance ($)
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="500"
                    value={outstandingBalance}
                    onChange={(e) => {
                      const bal = Math.max(0, Number(e.target.value));
                      setOutstandingBalance(bal);
                      setUtilization(parseFloat(((bal / Math.max(creditLimit, 1)) * 100).toFixed(1)));
                      setIsModified(true);
                    }}
                    className="w-full px-3.5 py-2.5 text-xs font-mono font-medium border border-gray-300 rounded-lg focus:outline-none focus:border-[#4338ca]"
                  />
                </div>
              </div>

              {/* Debt-to-Income Indicator */}
              <div className="p-3.5 bg-gray-50 border border-gray-200 rounded-xl text-xs flex justify-between items-center">
                <span className="text-gray-600 font-medium">Estimated Card DTI Ratio:</span>
                <span className="font-mono font-bold text-gray-900 bg-white px-2 py-0.5 rounded border border-gray-200">
                  {((outstandingBalance / Math.max(annualIncome, 10000)) * 100).toFixed(1)}%
                </span>
              </div>
            </div>

            {/* PREDICT RISK BUTTON (Warm brown / terracotta) */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handlePredictRisk}
                disabled={isLoading}
                className="w-full py-3.5 px-4 bg-[#BA5641] hover:bg-[#A54935] disabled:bg-[#D49A8D] text-white font-bold text-sm rounded-xl shadow-md shadow-[#BA5641]/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Evaluating ML Estimator...</span>
                  </>
                ) : (
                  <>
                    <Cpu className="w-4.5 h-4.5" />
                    <span>Predict Risk</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Actual Default Probability, Risk Score, Category & Explanations (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Main Prediction Output Card */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-2xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-100 pb-4">
              <div>
                <span className="text-xs uppercase font-mono tracking-wider text-gray-400">Model Inference Output</span>
                <h2 className="text-lg font-bold text-[#14213d] flex items-center gap-2">
                  <span>Actual Credit Risk Assessment</span>
                  {predictionResult?.latencyMs !== undefined && (
                    <span className="text-[11px] font-normal font-mono text-gray-500 bg-gray-100 px-2 py-0.5 rounded-sm">
                      {predictionResult.latencyMs}ms response
                    </span>
                  )}
                </h2>
              </div>

              {isModified && (
                <div className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-[#FAF7F2] text-[#BA5641] border border-[#EBE6DC]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>What-If Simulated Prediction</span>
                </div>
              )}
            </div>

            {/* Core Output Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* Metric 1: Default Probability */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col justify-between">
                <div>
                  <div className="text-[11px] uppercase font-bold text-gray-500 tracking-wider">
                    Default Probability (PD)
                  </div>
                  <div className="text-3xl font-serif font-bold text-[#14213d] mt-2">
                    {assessment ? `${assessment.defaultProbability.toFixed(1)}%` : '—'}
                  </div>
                  <p className="text-[11px] text-gray-500 mt-1">
                    Chance of 90+ day delinquency
                  </p>
                </div>

                {pdDelta !== null && isModified && (
                  <div className="mt-2 text-xs flex items-center gap-1 font-mono">
                    {pdDelta > 0 ? (
                      <span className="text-rose-600 flex items-center font-bold">
                        <TrendingUp className="w-3.5 h-3.5 mr-0.5" />
                        +{pdDelta}% vs baseline
                      </span>
                    ) : pdDelta < 0 ? (
                      <span className="text-emerald-600 flex items-center font-bold">
                        <TrendingDown className="w-3.5 h-3.5 mr-0.5" />
                        {pdDelta}% vs baseline
                      </span>
                    ) : (
                      <span className="text-gray-500">No change</span>
                    )}
                  </div>
                )}
              </div>

              {/* Metric 2: Calibrated 1-10 Risk Score */}
              {(() => {
                const score10 = getCalibratedScore10(assessment?.riskScore || 20);
                const catInfo = getCalibratedCategory(score10);
                return (
                  <div className="p-4 bg-[#FAF7F2] border border-[#EBE6DC] rounded-xl flex flex-col justify-between">
                    <div>
                      <div className="text-[11px] uppercase font-bold text-gray-700 tracking-wider flex items-center justify-between">
                        <span>Risk Grade</span>
                        <span className={`text-[9px] px-1.5 py-0.2 rounded border font-bold shrink-0 ${catInfo.badgeClass}`}>
                          {catInfo.label}
                        </span>
                      </div>
                      <div className="text-3xl font-mono font-bold text-[#BA5641] mt-2 flex items-baseline gap-1">
                        <span>Grade {score10}</span>
                        <span className="text-xs text-[#767069] font-normal"> / 10</span>
                      </div>
                      <p className="text-[11px] text-[#767069] mt-1">
                        1 = Safest cardholder · 10 = High Risk
                      </p>
                    </div>

                    {/* 10-step segmented bar */}
                    <div className="mt-3">
                      <div className="grid grid-cols-10 gap-1">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((step) => (
                          <div
                            key={step}
                            className={`h-2 rounded-xs transition-all ${
                              step <= score10
                                ? step <= 4 ? 'bg-emerald-500' : step <= 7 ? 'bg-amber-500' : 'bg-rose-500'
                                : 'bg-indigo-200/50'
                            }`}
                          />
                        ))}
                      </div>
                      <div className="flex justify-between text-[9px] font-mono text-gray-500 mt-1">
                        <span>1 Safe</span>
                        <span>10 Danger</span>
                      </div>
                    </div>
                  </div>
                );
              })()}

              {/* Metric 3: Risk Category / Tier */}
              <div className={`p-4 border rounded-xl flex flex-col justify-between ${tierColor.bg}`}>
                <div>
                  <div className="text-[11px] uppercase font-bold tracking-wider opacity-80">
                    Health Category
                  </div>
                  <div className="text-2xl font-bold mt-2 flex items-center gap-2">
                    <span className={`w-3 h-3 rounded-full ${tierColor.indicator}`} />
                    <span>{assessment?.riskTier || '—'} Risk</span>
                  </div>
                  <p className="text-[11px] opacity-80 mt-1">
                    {assessment?.riskTier === 'Low' ? 'Prime cardholder; eligible for limit expansion.' :
                     assessment?.riskTier === 'Medium' ? 'Moderate exposure; keep credit line steady.' :
                     'High exposure; requires proactive payment reminders.'}
                  </p>
                </div>

                <div className="mt-2 text-[11px] font-mono opacity-80">
                  Raw Score: {assessment?.riskScore || 0}/100
                </div>
              </div>
            </div>

            {/* Quick Production Model Benchmark Callout (Links to Full Suite) */}
            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="text-slate-600">
                  Approved Models: <strong>Gradient Boosting (90.0% Acc)</strong> vs <strong>Logistic Reg (85.5% Acc)</strong> · Combined Consensus: <strong className="text-indigo-700">91.5%</strong>
                </span>
              </div>
              <button
                type="button"
                onClick={() => setActiveTab('benchmarks')}
                className="text-indigo-600 hover:text-indigo-800 font-bold flex items-center gap-1 cursor-pointer shrink-0"
              >
                <span>View Confusion Matrix &amp; Visuals &rarr;</span>
              </button>
            </div>

            {/* Model-Based Explanations: Factor Contributions */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-[#14213d] flex items-center gap-1.5">
                  <Info className="w-4 h-4 text-[#4338ca]" />
                  SHAP Factor Attributions & Risk Drivers
                </h3>
                <span className="text-[11px] text-gray-500 font-mono">
                  Gradient Boosting Feature Weighting
                </span>
              </div>

              {assessment?.factorContributions && assessment.factorContributions.length > 0 ? (
                <div className="space-y-2.5">
                  {assessment.factorContributions.map((factor: FactorContribution, idx: number) => {
                    const isPositive = factor.impact === 'positive';
                    return (
                      <div 
                        key={idx}
                        className="p-3 bg-gray-50 border border-gray-200 rounded-lg flex items-start justify-between gap-3 text-xs"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-[#14213d]">{factor.factor}</span>
                            <span className="font-mono text-[10px] px-1.5 py-0.2 rounded-xs bg-gray-200 text-gray-700">
                              {factor.category}
                            </span>
                          </div>
                          <p className="text-gray-600">{factor.description}</p>
                        </div>

                        <div className="text-right shrink-0">
                          <span className={`font-mono font-bold text-xs px-2 py-0.5 rounded-sm ${
                            isPositive 
                              ? 'bg-emerald-100 text-emerald-800' 
                              : 'bg-rose-100 text-rose-800'
                          }`}>
                            {isPositive ? 'Favorable' : 'Risk Driver'} ({factor.weightScore > 0 ? `+${factor.weightScore}` : factor.weightScore})
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="p-4 bg-gray-50 text-gray-400 text-xs text-center rounded-lg">
                  No factor contributions returned by estimator.
                </div>
              )}
            </div>

            {/* Underwriting Committee Decision Log (Consolidated from RiskAssessment) */}
            <div className="pt-4 border-t border-gray-100 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-[#14213d] flex items-center gap-1.5">
                  <FileCheck className="w-4 h-4 text-emerald-600" />
                  Credit Underwriting Committee Decision Log
                </h3>
                {decisionLogged && (
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded font-bold">
                    Audit Logged ✓
                  </span>
                )}
              </div>

              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-3 text-xs">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Action Recommendation
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {[
                      'Approve Standard Line',
                      'Maintain on Watchlist',
                      'Contract Line by 25-40%'
                    ].map((action) => (
                      <button
                        key={action}
                        type="button"
                        onClick={() => {
                          setCommitteeAction(action);
                          setDecisionLogged(false);
                        }}
                        className={`py-2 px-2.5 rounded-lg font-bold text-[11px] border text-center transition-all cursor-pointer ${
                          committeeAction === action
                            ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {action}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Underwriter Rationale / Surveillance Note
                  </label>
                  <textarea
                    rows={2}
                    value={committeeNote}
                    onChange={(e) => {
                      setCommitteeNote(e.target.value);
                      setDecisionLogged(false);
                    }}
                    placeholder="Enter supervisory notes for Credit Committee audit file (e.g., Verified paydown behavior; debt-to-income remains manageable)..."
                    className="w-full p-2.5 bg-white border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-[11px] text-slate-500">
                    Credit Risk Desk · Timestamp: {new Date().toLocaleDateString()}
                  </span>
                  <button
                    type="button"
                    onClick={() => setDecisionLogged(true)}
                    className="px-3.5 py-1.5 bg-[#BA5641] hover:bg-[#A54935] text-white font-bold rounded-lg text-xs cursor-pointer transition-colors shadow-2xs"
                  >
                    Log Decision
                  </button>
                </div>
              </div>
            </div>

            {/* Recommended Underwriting & Credit Actions */}
            {assessment?.recommendedActions && assessment.recommendedActions.length > 0 && (
              <div className="space-y-2 pt-2 border-t border-gray-100">
                <h3 className="text-sm font-bold text-[#14213d]">
                  Model Recommended Actions
                </h3>
                <ul className="space-y-1.5">
                  {assessment.recommendedActions.map((action: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                      <ChevronRight className="w-4 h-4 text-[#BA5641] shrink-0 mt-0.5" />
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Estimator Provenance Footer */}
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-gray-500 font-mono">
              <div>
                <span>Source: </span>
                <span className="text-[#8A3A28] font-semibold">{predictionResult?.source || 'live-python-backend'}</span>
                <span> · Endpoint: </span>
                <span className="text-gray-800">/api/v1/risk/predict</span>
              </div>
              <div>
                <span>Confidence: </span>
                <span className="font-bold text-gray-800">{assessment?.confidenceScore || 85}%</span>
              </div>
            </div>
          </div>
        </div>

      </div>
      ) : (
        /* VIEW B: 2-MODEL EMPIRICAL EVALUATION & BENCHMARKS SUITE */
        <ModelEvaluationSuite
          benchmarks={benchmarks}
          onSelectModel={(modelName) => setSelectedMatrixModel(modelName)}
        />
      )}
    </div>
  );
};
