/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Customer, EarlyWarningAlert, CustomerNote } from '../types';

export interface AgeGroupStat {
  group: string;
  rate: number;
}

export const PORTFOLIO_STATS = {
  totalCustomers: 200,
  growthText: '+12% from last month',
  predictedHighRisk: 28,
  highRiskPercentText: '14.0% of total',
  avgDefaultProbability: 0.18,
  avgProbabilitySubtitle: 'Across all customers',
  modelAccuracy: '90.0%',
  modelClassifier: 'Gradient Boosting Classifier',
  distribution: {
    low: { count: 132, percent: 66.0, label: 'Low Risk', color: '#6ba280' },
    medium: { count: 40, percent: 20.0, label: 'Medium Risk', color: '#e5a958' },
    high: { count: 28, percent: 14.0, label: 'High Risk', color: '#ba5641' },
  },
  ageGroupRates: [
    { group: '< 25', rate: 12 },
    { group: '25 – 35', rate: 16 },
    { group: '35 – 45', rate: 21 },
    { group: '45 – 55', rate: 26 },
    { group: '> 55', rate: 36 },
  ] as AgeGroupStat[],
};

// Featured customers exactly matching the screenshot
const FEATURED_CUSTOMERS: Partial<Customer>[] = [
  {
    id: 'C001',
    fullName: 'Aarav Mehta',
    age: 28,
    gender: 'Male',
    accountType: 'Individual',
    email: 'aarav.mehta@mail.com',
    annualIncome: 620000,
    creditUtilization: 0.12,
    calibratedProbability: 0.04,
    riskTier: 'Low',
    employmentStatus: 'Salaried - Tech',
    employerCategory: 'Technology & Software',
    cardType: 'Platinum Rewards',
    creditLimit: 500000,
    outstandingBalance: 60000,
    creditLines: 3,
    delayedPayments6M: 0,
    segment: 'Prime Transactors',
    creditHistoryYears: 4.8,
    inquiriesLast6M: 0,
    paymentToMinRatio: 5.2,
    cashAdvanceCount6M: 0,
    monthlyAverageSpend: 42000,
    joinedDate: '2022-03-15',
    lastAssessmentDate: '2026-10-25',
    riskIndicators: {
      creditUtilization: 0.12,
      paymentHistoryRisk: 0.05,
      outstandingDebt: 0.15,
      creditHistoryLength: 0.25,
      recentInquiries: 0.10,
    },
    notes: [
      {
        id: 'n-1',
        author: 'Saanvi Gothe',
        date: 'Oct 20, 2026',
        text: 'Prime tier cardholder with pristine repayment record and low revolving ratio.',
      },
    ],
  },
  {
    id: 'C002',
    fullName: 'Ishita Rao',
    age: 32,
    gender: 'Female',
    accountType: 'Individual',
    email: 'ishita.rao@mail.com',
    annualIncome: 480000,
    creditUtilization: 0.34,
    calibratedProbability: 0.12,
    riskTier: 'Medium',
    employmentStatus: 'Senior Marketing Lead',
    employerCategory: 'Media & Digital Services',
    cardType: 'Gold Preferred',
    creditLimit: 350000,
    outstandingBalance: 119000,
    creditLines: 4,
    delayedPayments6M: 1,
    segment: 'Revolving Balances',
    creditHistoryYears: 6.1,
    inquiriesLast6M: 1,
    paymentToMinRatio: 2.8,
    cashAdvanceCount6M: 0,
    monthlyAverageSpend: 31000,
    joinedDate: '2020-08-11',
    lastAssessmentDate: '2026-10-24',
    riskIndicators: {
      creditUtilization: 0.34,
      paymentHistoryRisk: 0.28,
      outstandingDebt: 0.32,
      creditHistoryLength: 0.30,
      recentInquiries: 0.20,
    },
    notes: [
      {
        id: 'n-2',
        author: 'Saanvi Gothe',
        date: 'Oct 14, 2026',
        text: 'Occasional revolver with steady salary inflow. Limit monitoring active.',
      },
    ],
  },
  {
    id: 'C003',
    fullName: 'Rohan Kulkarni',
    age: 45,
    gender: 'Male',
    accountType: 'Individual',
    email: 'r.kulkarni@mail.com',
    annualIncome: 360000,
    creditUtilization: 0.71,
    calibratedProbability: 0.82,
    riskTier: 'High',
    employmentStatus: 'Self-Employed',
    employerCategory: 'Sole Proprietorship / Retail',
    cardType: 'Classic Revolver',
    creditLimit: 590000,
    outstandingBalance: 420000,
    creditLines: 5,
    delayedPayments6M: 3,
    segment: 'High-Risk Revolvers',
    creditHistoryYears: 8.5,
    inquiriesLast6M: 3,
    paymentToMinRatio: 1.1,
    cashAdvanceCount6M: 2,
    monthlyAverageSpend: 54000,
    joinedDate: '2018-02-19',
    lastAssessmentDate: '2026-10-26',
    riskIndicators: {
      creditUtilization: 0.71,
      paymentHistoryRisk: 0.80,
      outstandingDebt: 0.68,
      creditHistoryLength: 0.40,
      recentInquiries: 0.55,
    },
    notes: [
      {
        id: 'n-3',
        author: 'Saanvi Gothe',
        date: 'Oct 25, 2026',
        text: 'Flagged by surveillance model: 71% credit line exhaustion and 3 delinquent cycles. Initiated line curtailment review.',
      },
      {
        id: 'n-3b',
        author: 'Underwriting Desk',
        date: 'Oct 12, 2026',
        text: 'Emergency cash draw spike observed in cycle 4. Automated advisory notice sent.',
      },
    ],
  },
  {
    id: 'C004',
    fullName: 'Neha Sharma',
    age: 26,
    gender: 'Female',
    accountType: 'Individual',
    email: 'neha.sharma@mail.com',
    annualIncome: 710000,
    creditUtilization: 0.18,
    calibratedProbability: 0.06,
    riskTier: 'Low',
    employmentStatus: 'Product Designer',
    employerCategory: 'Design & FinTech',
    cardType: 'Signature Rewards',
    creditLimit: 600000,
    outstandingBalance: 108000,
    creditLines: 3,
    delayedPayments6M: 0,
    segment: 'Prime Transactors',
    creditHistoryYears: 3.5,
    inquiriesLast6M: 0,
    paymentToMinRatio: 4.5,
    cashAdvanceCount6M: 0,
    monthlyAverageSpend: 48000,
    joinedDate: '2023-01-10',
    lastAssessmentDate: '2026-10-24',
    riskIndicators: {
      creditUtilization: 0.18,
      paymentHistoryRisk: 0.08,
      outstandingDebt: 0.18,
      creditHistoryLength: 0.35,
      recentInquiries: 0.12,
    },
    notes: [
      {
        id: 'n-4',
        author: 'Saanvi Gothe',
        date: 'Sep 29, 2026',
        text: 'High liquidity cardholder, eligible for line expansion program.',
      },
    ],
  },
  {
    id: 'C005',
    fullName: 'Vikram Desai',
    age: 51,
    gender: 'Male',
    accountType: 'Individual',
    email: 'vikram.desai@mail.com',
    annualIncome: 520000,
    creditUtilization: 0.63,
    calibratedProbability: 0.68,
    riskTier: 'High',
    employmentStatus: 'Logistics Supervisor',
    employerCategory: 'Supply Chain & Freight',
    cardType: 'Titanium Advantage',
    creditLimit: 450000,
    outstandingBalance: 283500,
    creditLines: 6,
    delayedPayments6M: 2,
    segment: 'High-Risk Revolvers',
    creditHistoryYears: 12.0,
    inquiriesLast6M: 2,
    paymentToMinRatio: 1.3,
    cashAdvanceCount6M: 1,
    monthlyAverageSpend: 41000,
    joinedDate: '2016-09-04',
    lastAssessmentDate: '2026-10-23',
    riskIndicators: {
      creditUtilization: 0.63,
      paymentHistoryRisk: 0.72,
      outstandingDebt: 0.60,
      creditHistoryLength: 0.25,
      recentInquiries: 0.45,
    },
    notes: [
      {
        id: 'n-5',
        author: 'Saanvi Gothe',
        date: 'Oct 18, 2026',
        text: 'Consecutive revolving balance escalation over past 90 days.',
      },
    ],
  },
  {
    id: 'C006',
    fullName: 'Priya Nair',
    age: 38,
    gender: 'Female',
    accountType: 'Individual',
    email: 'priya.nair@mail.com',
    annualIncome: 410000,
    creditUtilization: 0.47,
    calibratedProbability: 0.36,
    riskTier: 'Medium',
    employmentStatus: 'Accounts Executive',
    employerCategory: 'Financial Services',
    cardType: 'Silver Access',
    creditLimit: 300000,
    outstandingBalance: 141000,
    creditLines: 4,
    delayedPayments6M: 1,
    segment: 'Revolving Balances',
    creditHistoryYears: 7.2,
    inquiriesLast6M: 1,
    paymentToMinRatio: 2.1,
    cashAdvanceCount6M: 0,
    monthlyAverageSpend: 28000,
    joinedDate: '2019-11-20',
    lastAssessmentDate: '2026-10-22',
    riskIndicators: {
      creditUtilization: 0.47,
      paymentHistoryRisk: 0.42,
      outstandingDebt: 0.45,
      creditHistoryLength: 0.30,
      recentInquiries: 0.25,
    },
    notes: [],
  },
  {
    id: 'C007',
    fullName: 'Karan Singh',
    age: 29,
    gender: 'Male',
    accountType: 'Individual',
    email: 'karan.singh@mail.com',
    annualIncome: 890000,
    creditUtilization: 0.22,
    calibratedProbability: 0.09,
    riskTier: 'Low',
    employmentStatus: 'Consultant',
    employerCategory: 'Management Consulting',
    cardType: 'Emerald Preferred',
    creditLimit: 750000,
    outstandingBalance: 165000,
    creditLines: 4,
    delayedPayments6M: 0,
    segment: 'Prime Transactors',
    creditHistoryYears: 5.0,
    inquiriesLast6M: 0,
    paymentToMinRatio: 3.9,
    cashAdvanceCount6M: 0,
    monthlyAverageSpend: 55000,
    joinedDate: '2021-07-14',
    lastAssessmentDate: '2026-10-21',
    riskIndicators: {
      creditUtilization: 0.22,
      paymentHistoryRisk: 0.10,
      outstandingDebt: 0.20,
      creditHistoryLength: 0.28,
      recentInquiries: 0.15,
    },
    notes: [],
  },
  {
    id: 'C008',
    fullName: 'Ananya Patel',
    age: 41,
    gender: 'Female',
    accountType: 'Individual',
    email: 'ananya.patel@mail.com',
    annualIncome: 380000,
    creditUtilization: 0.58,
    calibratedProbability: 0.62,
    riskTier: 'High',
    employmentStatus: 'Boutique Owner',
    employerCategory: 'Retail & Apparel',
    cardType: 'Classic Gold',
    creditLimit: 400000,
    outstandingBalance: 232000,
    creditLines: 5,
    delayedPayments6M: 2,
    segment: 'High-Risk Revolvers',
    creditHistoryYears: 9.3,
    inquiriesLast6M: 2,
    paymentToMinRatio: 1.4,
    cashAdvanceCount6M: 1,
    monthlyAverageSpend: 36000,
    joinedDate: '2017-05-18',
    lastAssessmentDate: '2026-10-25',
    riskIndicators: {
      creditUtilization: 0.58,
      paymentHistoryRisk: 0.65,
      outstandingDebt: 0.58,
      creditHistoryLength: 0.35,
      recentInquiries: 0.48,
    },
    notes: [
      {
        id: 'n-8',
        author: 'Saanvi Gothe',
        date: 'Oct 22, 2026',
        text: 'Seasonal revenue swings noted; recommend flexible payment restructuring.',
      },
    ],
  },
];

// Generate synthetic full 200 customer list calibrated to exact portfolio stats
// 132 Low Risk, 40 Medium Risk, 28 High Risk
const FIRST_NAMES = [
  'Aditya', 'Sneha', 'Rahul', 'Pooja', 'Arjun', 'Meera', 'Dev', 'Tara',
  'Kabir', 'Riya', 'Sameer', 'Tanvi', 'Abhishek', 'Diya', 'Manish', 'Kavita',
  'Varun', 'Shreya', 'Gaurav', 'Nandini', 'Rajesh', 'Sunita', 'Naveen', 'Anjali',
  'Siddharth', 'Pallavi', 'Deepak', 'Aakanksha', 'Sanjay', 'Geeta', 'Harsh', 'Swati'
];

const LAST_NAMES = [
  'Kapoor', 'Iyer', 'Bhatt', 'Verma', 'Mukherjee', 'Reddy', 'Chauhan', 'Nambiar',
  'Sen', 'Bose', 'Chatterjee', 'Gupta', 'Malhotra', 'Menon', 'Joshi', 'Aggarwal',
  'Pillai', 'Saxena', 'Choudhury', 'Dubey', 'Trivedi', 'Bhardwaj', 'Mishra', 'Pandey'
];

function generateRepaymentHistory(balance: number, lateCount: number) {
  const months = ['May 2026', 'Jun 2026', 'Jul 2026', 'Aug 2026', 'Sep 2026', 'Oct 2026'];
  const minDue = Math.round(balance * 0.05);
  
  return months.map((month, idx) => {
    const isLate = idx >= 6 - lateCount;
    const payment = isLate ? minDue : Math.round(minDue * (1.5 + Math.random() * 2));
    return {
      month,
      status: isLate ? 'late' : 'on-time',
      daysDelayed: isLate ? 30 * (idx - (5 - lateCount)) : 0,
      paymentAmount: payment,
      minPaymentDue: minDue,
      balance: Math.round(balance * (0.9 + idx * 0.02)),
    };
  });
}

export function buildCompletePortfolio(): Customer[] {
  const list: Customer[] = [];

  // 1. Add 8 featured customers
  for (const feat of FEATURED_CUSTOMERS) {
    const balance = feat.outstandingBalance || 100000;
    const late = feat.delayedPayments6M || 0;
    list.push({
      id: feat.id!,
      fullName: feat.fullName!,
      email: feat.email!,
      age: feat.age!,
      gender: feat.gender || (Math.random() > 0.5 ? 'Male' : 'Female'),
      accountType: feat.accountType || 'Individual',
      annualIncome: feat.annualIncome!,
      creditUtilization: feat.creditUtilization!,
      cardType: feat.cardType || 'Gold Preferred',
      creditLimit: feat.creditLimit || 300000,
      outstandingBalance: balance,
      delayedPayments6M: late,
      paymentToMinRatio: feat.paymentToMinRatio || 2.5,
      cashAdvanceCount6M: feat.cashAdvanceCount6M || 0,
      monthlyAverageSpend: feat.monthlyAverageSpend || 30000,
      creditHistoryYears: feat.creditHistoryYears || 5,
      inquiriesLast6M: feat.inquiriesLast6M || 0,
      segment: feat.segment || 'Revolving Balances',
      joinedDate: feat.joinedDate || '2021-01-01',
      lastAssessmentDate: feat.lastAssessmentDate || '2026-10-25',
      employmentStatus: feat.employmentStatus || 'Salaried',
      employerCategory: feat.employerCategory || 'Corporate Services',
      creditLines: feat.creditLines || 4,
      repaymentHistory: generateRepaymentHistory(balance, late),
      riskTier: feat.riskTier as any,
      calibratedProbability: feat.calibratedProbability,
      riskIndicators: feat.riskIndicators,
      notes: feat.notes || [],
    });
  }

  // Count current: 3 Low, 2 Med, 3 High
  let currentLow = list.filter(c => c.riskTier === 'Low').length;
  let currentMed = list.filter(c => c.riskTier === 'Medium').length;
  let currentHigh = list.filter(c => c.riskTier === 'High').length;

  const targetLow = 132;
  const targetMed = 40;
  const targetHigh = 28;

  let nextId = 9;

  // Generate remaining Low Risk (132 - 3 = 129)
  while (currentLow < targetLow) {
    const id = `C${String(nextId).padStart(3, '0')}`;
    const name = `${FIRST_NAMES[nextId % FIRST_NAMES.length]} ${LAST_NAMES[(nextId * 3) % LAST_NAMES.length]}`;
    const age = 22 + (nextId * 7) % 45;
    const income = 450000 + (nextId * 23000) % 850000;
    const util = parseFloat((0.05 + (nextId % 20) * 0.012).toFixed(2));
    const prob = parseFloat((0.02 + (nextId % 15) * 0.005).toFixed(2));
    const limit = 300000 + (nextId * 15000) % 500000;
    const balance = Math.round(limit * util);

    list.push({
      id,
      fullName: name,
      email: `${name.toLowerCase().replace(/\s+/g, '.')}@mail.com`,
      age,
      gender: nextId % 2 === 0 ? 'Female' : 'Male',
      accountType: 'Individual',
      annualIncome: income,
      creditUtilization: util,
      cardType: util < 0.15 ? 'Platinum Rewards' : 'Gold Preferred',
      creditLimit: limit,
      outstandingBalance: balance,
      delayedPayments6M: 0,
      paymentToMinRatio: parseFloat((3.0 + (nextId % 5) * 0.5).toFixed(1)),
      cashAdvanceCount6M: 0,
      monthlyAverageSpend: Math.round(income * 0.06),
      creditHistoryYears: parseFloat((3.0 + (nextId % 10) * 0.8).toFixed(1)),
      inquiriesLast6M: nextId % 4 === 0 ? 1 : 0,
      segment: 'Prime Transactors',
      joinedDate: `202${(nextId % 5) + 1}-0${(nextId % 9) + 1}-15`,
      lastAssessmentDate: '2026-10-25',
      employmentStatus: 'Salaried Professional',
      employerCategory: 'Corporate & IT Services',
      creditLines: 2 + (nextId % 4),
      repaymentHistory: generateRepaymentHistory(balance, 0),
      riskTier: 'Low',
      calibratedProbability: prob,
      riskIndicators: {
        creditUtilization: util,
        paymentHistoryRisk: 0.08,
        outstandingDebt: parseFloat((util * 0.8).toFixed(2)),
        creditHistoryLength: 0.25,
        recentInquiries: 0.10,
      },
      notes: [],
    });

    currentLow++;
    nextId++;
  }

  // Generate remaining Medium Risk (40 - 2 = 38)
  while (currentMed < targetMed) {
    const id = `C${String(nextId).padStart(3, '0')}`;
    const name = `${FIRST_NAMES[nextId % FIRST_NAMES.length]} ${LAST_NAMES[(nextId * 3) % LAST_NAMES.length]}`;
    const age = 26 + (nextId * 5) % 40;
    const income = 350000 + (nextId * 17000) % 450000;
    const util = parseFloat((0.30 + (nextId % 20) * 0.015).toFixed(2));
    const prob = parseFloat((0.15 + (nextId % 25) * 0.012).toFixed(2));
    const limit = 250000 + (nextId * 10000) % 300000;
    const balance = Math.round(limit * util);

    list.push({
      id,
      fullName: name,
      email: `${name.toLowerCase().replace(/\s+/g, '.')}@mail.com`,
      age,
      gender: nextId % 2 === 0 ? 'Female' : 'Male',
      accountType: 'Individual',
      annualIncome: income,
      creditUtilization: util,
      cardType: 'Silver Access',
      creditLimit: limit,
      outstandingBalance: balance,
      delayedPayments6M: (nextId % 2) + 1,
      paymentToMinRatio: parseFloat((1.8 + (nextId % 3) * 0.4).toFixed(1)),
      cashAdvanceCount6M: nextId % 3 === 0 ? 1 : 0,
      monthlyAverageSpend: Math.round(income * 0.08),
      creditHistoryYears: parseFloat((4.0 + (nextId % 8) * 0.7).toFixed(1)),
      inquiriesLast6M: 1 + (nextId % 2),
      segment: 'Revolving Balances',
      joinedDate: `201${(nextId % 6) + 5}-0${(nextId % 9) + 1}-20`,
      lastAssessmentDate: '2026-10-24',
      employmentStatus: 'Enterprise Employee',
      employerCategory: 'Logistics & Trade',
      creditLines: 3 + (nextId % 3),
      repaymentHistory: generateRepaymentHistory(balance, 1),
      riskTier: 'Medium',
      calibratedProbability: prob,
      riskIndicators: {
        creditUtilization: util,
        paymentHistoryRisk: 0.35,
        outstandingDebt: parseFloat((util * 0.9).toFixed(2)),
        creditHistoryLength: 0.32,
        recentInquiries: 0.28,
      },
      notes: [],
    });

    currentMed++;
    nextId++;
  }

  // Generate remaining High Risk (28 - 3 = 25)
  while (currentHigh < targetHigh) {
    const id = `C${String(nextId).padStart(3, '0')}`;
    const name = `${FIRST_NAMES[nextId % FIRST_NAMES.length]} ${LAST_NAMES[(nextId * 3) % LAST_NAMES.length]}`;
    const age = 34 + (nextId * 4) % 35;
    const income = 280000 + (nextId * 15000) % 320000;
    const util = parseFloat((0.65 + (nextId % 15) * 0.02).toFixed(2));
    const prob = parseFloat((0.55 + (nextId % 35) * 0.01).toFixed(2));
    const limit = 200000 + (nextId * 8000) % 250000;
    const balance = Math.round(limit * util);

    list.push({
      id,
      fullName: name,
      email: `${name.toLowerCase().replace(/\s+/g, '.')}@mail.com`,
      age,
      gender: nextId % 2 === 0 ? 'Female' : 'Male',
      accountType: 'Individual',
      annualIncome: income,
      creditUtilization: util,
      cardType: 'Classic Revolver',
      creditLimit: limit,
      outstandingBalance: balance,
      delayedPayments6M: 2 + (nextId % 3),
      paymentToMinRatio: parseFloat((1.0 + (nextId % 3) * 0.2).toFixed(1)),
      cashAdvanceCount6M: 1 + (nextId % 3),
      monthlyAverageSpend: Math.round(income * 0.11),
      creditHistoryYears: parseFloat((5.0 + (nextId % 8) * 0.9).toFixed(1)),
      inquiriesLast6M: 2 + (nextId % 3),
      segment: 'High-Risk Revolvers',
      joinedDate: `201${(nextId % 5) + 6}-0${(nextId % 9) + 1}-10`,
      lastAssessmentDate: '2026-10-25',
      employmentStatus: 'Self-Employed / Freelance',
      employerCategory: 'Retail & Independent Trade',
      creditLines: 4 + (nextId % 3),
      repaymentHistory: generateRepaymentHistory(balance, 2 + (nextId % 2)),
      riskTier: 'High',
      calibratedProbability: prob,
      riskIndicators: {
        creditUtilization: util,
        paymentHistoryRisk: 0.75,
        outstandingDebt: parseFloat((util * 0.95).toFixed(2)),
        creditHistoryLength: 0.40,
        recentInquiries: 0.50,
      },
      notes: [],
    });

    currentHigh++;
    nextId++;
  }

  return list;
}

// 12 Active Early-Warning Surveillance Alerts (matching badge "12")
export const SURVEILLANCE_ALERTS: EarlyWarningAlert[] = [
  {
    id: 'EW-9001',
    customerId: 'C003',
    customerName: 'Rohan Kulkarni',
    triggerReason: 'Chronic Delinquency: 3 delinquent billing cycles in 6M',
    severity: 'Critical',
    status: 'New',
    metricValue: '3 Late Cycles',
    detectedDate: '2026-10-25',
    suggestedAction: 'Curtail revolving credit ceiling by 20% and transfer to Workout Desk.',
  },
  {
    id: 'EW-9002',
    customerId: 'C005',
    customerName: 'Vikram Desai',
    triggerReason: 'Limit Exhaustion: 63% balance utilization with cash advance surge',
    severity: 'High',
    status: 'New',
    metricValue: '63% Util + 1 Advance',
    detectedDate: '2026-10-24',
    suggestedAction: 'Block automatic line increases and place on bi-weekly surveillance.',
  },
  {
    id: 'EW-9003',
    customerId: 'C008',
    customerName: 'Ananya Patel',
    triggerReason: 'Payment Coverage Collapse: Repayment-to-minimum dropped to 1.4x',
    severity: 'High',
    status: 'New',
    metricValue: '1.4x Min Coverage',
    detectedDate: '2026-10-24',
    suggestedAction: 'Offer structured 0% balance repayment advisory plan.',
  },
  {
    id: 'EW-9004',
    customerId: 'C015',
    customerName: 'Rahul Kapoor',
    triggerReason: 'Emergency Cash Draw Surge: 3 ATM cash advances within 30 days',
    severity: 'High',
    status: 'New',
    metricValue: '3 Cash Draws',
    detectedDate: '2026-10-23',
    suggestedAction: 'Temporarily suspend ATM cash advance capability on card.',
  },
  {
    id: 'EW-9005',
    customerId: 'C022',
    customerName: 'Sneha Verma',
    triggerReason: 'Rapid Leverage Expansion: Total debt climbed 45% in 60 days',
    severity: 'Critical',
    status: 'New',
    metricValue: '+45% Debt Velocity',
    detectedDate: '2026-10-23',
    suggestedAction: 'Request verified income statement and freeze line increase requests.',
  },
  {
    id: 'EW-9006',
    customerId: 'C031',
    customerName: 'Arjun Reddy',
    triggerReason: 'Consecutive Minimum Payment Only: 4 straight minimum-only cycles',
    severity: 'Medium',
    status: 'New',
    metricValue: '4 Min Payments',
    detectedDate: '2026-10-22',
    suggestedAction: 'Send digital prompt on interest accumulation and payoff calculator.',
  },
  {
    id: 'EW-9007',
    customerId: 'C048',
    customerName: 'Tara Sen',
    triggerReason: 'Multiple Hard Credit Bureau Inquiries: 4 inquiries within 90 days',
    severity: 'Medium',
    status: 'New',
    metricValue: '4 Inquiries',
    detectedDate: '2026-10-22',
    suggestedAction: 'Review external debt aggregation and multi-card exposure.',
  },
  {
    id: 'EW-9008',
    customerId: 'C059',
    customerName: 'Sameer Bhatt',
    triggerReason: 'Disproportionate Spend Velocity: Spend exceeded 85% of monthly income',
    severity: 'High',
    status: 'New',
    metricValue: '88% Income Spend',
    detectedDate: '2026-10-21',
    suggestedAction: 'Initiate underwriting verification of current employer status.',
  },
  {
    id: 'EW-9009',
    customerId: 'C074',
    customerName: 'Tanvi Mukherjee',
    triggerReason: 'Payment Reversal / NSF Notification on cycle auto-debit',
    severity: 'Critical',
    status: 'New',
    metricValue: '1 NSF Reversal',
    detectedDate: '2026-10-21',
    suggestedAction: 'Contact cardholder regarding primary settlement account status.',
  },
  {
    id: 'EW-9010',
    customerId: 'C089',
    customerName: 'Kavita Gupta',
    triggerReason: 'Utilization Boundary Breach: Card line utilization crossed 85%',
    severity: 'High',
    status: 'New',
    metricValue: '86.4% Util',
    detectedDate: '2026-10-20',
    suggestedAction: 'Issue automated high-utilization SMS warning.',
  },
  {
    id: 'EW-9011',
    customerId: 'C104',
    customerName: 'Varun Joshi',
    triggerReason: 'Late Payment in Grace Window: 25 days past due before manual clearance',
    severity: 'Medium',
    status: 'New',
    metricValue: '25d Overdue',
    detectedDate: '2026-10-20',
    suggestedAction: 'Offer automated payment reminder scheduler.',
  },
  {
    id: 'EW-9012',
    customerId: 'C121',
    customerName: 'Shreya Nambiar',
    triggerReason: 'Sudden Dormancy Drop: High revolver stopped monthly payments',
    severity: 'Medium',
    status: 'New',
    metricValue: '30d Payment Lapse',
    detectedDate: '2026-10-19',
    suggestedAction: 'Route to Customer Care liaison for outreach check-in.',
  },
];
