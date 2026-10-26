/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Realistic Credit Card Portfolio Dataset
 * Trained and calibrated purely on data/combined_credit_risk_realistic_with_ids.csv
 */

export const INITIAL_CUSTOMERS = [
  {
    "id": "CUST000001",
    "shortId": "C001",
    "fullName": "Isabella Sterling",
    "email": "cust000001@domain.org",
    "age": 28,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "6.4 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 113469.0,
    "cardType": "Silver Rewards",
    "creditLimit": 12000.0,
    "outstandingBalance": 6180.0,
    "creditUtilization": 0.515,
    "utilization_rate": 0.515,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 3.8,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 5.2,
    "monthlyAverageSpend": 5871.0,
    "creditLines": 3,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 867.75,
        "minPaymentDue": 139.05,
        "balance": 5562.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2054.99,
        "minPaymentDue": 142.14,
        "balance": 5685.6
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1833.06,
        "minPaymentDue": 145.23,
        "balance": 5809.2
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 629.68,
        "minPaymentDue": 148.32,
        "balance": 5932.8
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1157.82,
        "minPaymentDue": 151.41,
        "balance": 6056.4
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 867.1,
        "minPaymentDue": 154.5,
        "balance": 6180.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2021-01-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 1,
    "calibratedProbability": 0.0863,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": true,
    "debt_to_income_est": 0.279,
    "riskIndicators": {
      "creditUtilization": 0.52,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.28,
      "creditHistoryLength": 0.26,
      "recentInquiries": 0.15
    },
    "notes": [
      {
        "id": "note-auto-1",
        "author": "Risk Underwriter (Trained Policy)",
        "date": "Oct 26, 2026",
        "text": "Account targeted by trained model (PD = 0.09). Decision: Standard Facility."
      }
    ]
  },
  {
    "id": "CUST000002",
    "shortId": "C002",
    "fullName": "Lucas Chen",
    "email": "cust000002@domain.org",
    "age": 60,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "2.6 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 96390.0,
    "cardType": "Platinum Signature",
    "creditLimit": 40000.0,
    "outstandingBalance": 6760.0,
    "creditUtilization": 0.169,
    "utilization_rate": 0.169,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 44.2,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 17.4,
    "monthlyAverageSpend": 6422.0,
    "creditLines": 4,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 973.79,
        "minPaymentDue": 152.1,
        "balance": 6084.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 513.3,
        "minPaymentDue": 155.48,
        "balance": 6219.2
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 849.44,
        "minPaymentDue": 158.86,
        "balance": 6354.4
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 559.9,
        "minPaymentDue": 162.24,
        "balance": 6489.6
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 948.71,
        "minPaymentDue": 165.62,
        "balance": 6624.8
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1734.6,
        "minPaymentDue": 169.0,
        "balance": 6760.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2022-02-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.01,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.144,
    "riskIndicators": {
      "creditUtilization": 0.17,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.14,
      "creditHistoryLength": 0.87,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000003",
    "shortId": "C003",
    "fullName": "Luke Novak",
    "email": "cust000003@domain.org",
    "age": 63,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "6.2 yrs (OWN)",
    "employerCategory": "Professional Services",
    "annualIncome": 129862.0,
    "cardType": "Platinum Signature",
    "creditLimit": 50000.0,
    "outstandingBalance": 10750.0,
    "creditUtilization": 0.215,
    "utilization_rate": 0.215,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 19.9,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 18.7,
    "monthlyAverageSpend": 10212.5,
    "creditLines": 5,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 649.65,
        "minPaymentDue": 241.88,
        "balance": 9675.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1639.61,
        "minPaymentDue": 247.25,
        "balance": 9890.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1472.92,
        "minPaymentDue": 252.62,
        "balance": 10105.0
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1274.62,
        "minPaymentDue": 258.0,
        "balance": 10320.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3831.79,
        "minPaymentDue": 263.38,
        "balance": 10535.0
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3599.31,
        "minPaymentDue": 268.75,
        "balance": 10750.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2023-03-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0265,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.145,
    "riskIndicators": {
      "creditUtilization": 0.21,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.14,
      "creditHistoryLength": 0.93,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000004",
    "shortId": "C004",
    "fullName": "Zoe Radcliffe",
    "email": "cust000004@domain.org",
    "age": 57,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "3.6 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 103956.0,
    "cardType": "Gold Preferred",
    "creditLimit": 25000.0,
    "outstandingBalance": 15400.0,
    "creditUtilization": 0.616,
    "utilization_rate": 0.616,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 6.6,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 25.0,
    "monthlyAverageSpend": 14630.0,
    "creditLines": 6,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3755.03,
        "minPaymentDue": 346.5,
        "balance": 13860.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2695.76,
        "minPaymentDue": 354.2,
        "balance": 14168.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3752.42,
        "minPaymentDue": 361.9,
        "balance": 14476.0
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3112.59,
        "minPaymentDue": 369.6,
        "balance": 14784.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2028.33,
        "minPaymentDue": 377.3,
        "balance": 15092.0
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3538.9,
        "minPaymentDue": 385.0,
        "balance": 15400.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2024-04-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0248,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.42,
    "riskIndicators": {
      "creditUtilization": 0.62,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.42,
      "creditHistoryLength": 1.0,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000005",
    "shortId": "C005",
    "fullName": "Penelope Yardley",
    "email": "cust000005@domain.org",
    "age": 40,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "17.0 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 84735.0,
    "cardType": "Silver Rewards",
    "creditLimit": 12000.0,
    "outstandingBalance": 7620.0,
    "creditUtilization": 0.635,
    "utilization_rate": 0.635,
    "delayedPayments6M": 1,
    "paymentToMinRatio": 5.7,
    "cashAdvanceCount6M": 2,
    "creditHistoryYears": 15.0,
    "monthlyAverageSpend": 7239.0,
    "creditLines": 3,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1716.77,
        "minPaymentDue": 171.45,
        "balance": 6858.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2309.27,
        "minPaymentDue": 175.26,
        "balance": 7010.4
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1694.42,
        "minPaymentDue": 179.07,
        "balance": 7162.8
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 382.42,
        "minPaymentDue": 182.88,
        "balance": 7315.2
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1183.77,
        "minPaymentDue": 186.69,
        "balance": 7467.6
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 152.4,
        "minPaymentDue": 190.5,
        "balance": 7620.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2025-05-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0531,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.33,
    "riskIndicators": {
      "creditUtilization": 0.64,
      "paymentHistoryRisk": 0.22,
      "outstandingDebt": 0.33,
      "creditHistoryLength": 0.75,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000006",
    "shortId": "C006",
    "fullName": "Avery Mercer",
    "email": "cust000006@domain.org",
    "age": 27,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "19.4 yrs (OWN)",
    "employerCategory": "Professional Services",
    "annualIncome": 32535.0,
    "cardType": "Classic Access",
    "creditLimit": 5000.0,
    "outstandingBalance": 4030.0,
    "creditUtilization": 0.806,
    "utilization_rate": 0.806,
    "delayedPayments6M": 5,
    "paymentToMinRatio": 1.73,
    "cashAdvanceCount6M": 2,
    "creditHistoryYears": 4.5,
    "monthlyAverageSpend": 3828.5,
    "creditLines": 4,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1081.24,
        "minPaymentDue": 90.68,
        "balance": 3627.0
      },
      {
        "month": "Jun 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 80.6,
        "minPaymentDue": 92.69,
        "balance": 3707.6
      },
      {
        "month": "Jul 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 80.6,
        "minPaymentDue": 94.7,
        "balance": 3788.2
      },
      {
        "month": "Aug 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 80.6,
        "minPaymentDue": 96.72,
        "balance": 3868.8
      },
      {
        "month": "Sep 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 80.6,
        "minPaymentDue": 98.74,
        "balance": 3949.4
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 80.6,
        "minPaymentDue": 100.75,
        "balance": 4030.0
      }
    ],
    "segment": "High-Risk Revolvers",
    "joinedDate": "2021-06-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 1,
    "calibratedProbability": 0.9187,
    "riskTier": "High",
    "decisionPolicy": "Curtail Line (-30%)",
    "targetedForSurveillance": true,
    "debt_to_income_est": 0.53,
    "riskIndicators": {
      "creditUtilization": 0.81,
      "paymentHistoryRisk": 0.85,
      "outstandingDebt": 0.53,
      "creditHistoryLength": 0.23,
      "recentInquiries": 0.55
    },
    "notes": [
      {
        "id": "note-auto-6",
        "author": "Risk Underwriter (Trained Policy)",
        "date": "Oct 26, 2026",
        "text": "Account targeted by trained model (PD = 0.92). Decision: Curtail Line (-30%)."
      }
    ]
  },
  {
    "id": "CUST000007",
    "shortId": "C007",
    "fullName": "Jack Sterling",
    "email": "cust000007@domain.org",
    "age": 22,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "12.4 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 100433.0,
    "cardType": "Gold Preferred",
    "creditLimit": 30000.0,
    "outstandingBalance": 1680.0,
    "creditUtilization": 0.056,
    "utilization_rate": 0.056,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 15.9,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 2.3,
    "monthlyAverageSpend": 1596.0,
    "creditLines": 5,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 342.08,
        "minPaymentDue": 37.8,
        "balance": 1512.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 512.4,
        "minPaymentDue": 38.64,
        "balance": 1545.6
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 524.89,
        "minPaymentDue": 39.48,
        "balance": 1579.2
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 187.96,
        "minPaymentDue": 40.32,
        "balance": 1612.8
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 136.92,
        "minPaymentDue": 41.16,
        "balance": 1646.4
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 319.35,
        "minPaymentDue": 42.0,
        "balance": 1680.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2022-07-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0995,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.136,
    "riskIndicators": {
      "creditUtilization": 0.06,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.14,
      "creditHistoryLength": 0.11,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000008",
    "shortId": "C008",
    "fullName": "Sophia Trevino",
    "email": "cust000008@domain.org",
    "age": 47,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "21.7 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 35161.0,
    "cardType": "Classic Access",
    "creditLimit": 5000.0,
    "outstandingBalance": 4090.0,
    "creditUtilization": 0.818,
    "utilization_rate": 0.818,
    "delayedPayments6M": 6,
    "paymentToMinRatio": 1.03,
    "cashAdvanceCount6M": 5,
    "creditHistoryYears": 18.2,
    "monthlyAverageSpend": 3885.5,
    "creditLines": 6,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 81.8,
        "minPaymentDue": 92.03,
        "balance": 3681.0
      },
      {
        "month": "Jun 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 81.8,
        "minPaymentDue": 94.07,
        "balance": 3762.8
      },
      {
        "month": "Jul 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 81.8,
        "minPaymentDue": 96.12,
        "balance": 3844.6
      },
      {
        "month": "Aug 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 81.8,
        "minPaymentDue": 98.16,
        "balance": 3926.4
      },
      {
        "month": "Sep 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 81.8,
        "minPaymentDue": 100.2,
        "balance": 4008.2
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 81.8,
        "minPaymentDue": 102.25,
        "balance": 4090.0
      }
    ],
    "segment": "High-Risk Revolvers",
    "joinedDate": "2023-08-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 1,
    "calibratedProbability": 0.9013,
    "riskTier": "High",
    "decisionPolicy": "Curtail Line (-30%)",
    "targetedForSurveillance": true,
    "debt_to_income_est": 0.607,
    "riskIndicators": {
      "creditUtilization": 0.82,
      "paymentHistoryRisk": 0.85,
      "outstandingDebt": 0.61,
      "creditHistoryLength": 0.91,
      "recentInquiries": 0.55
    },
    "notes": [
      {
        "id": "note-auto-8",
        "author": "Risk Underwriter (Trained Policy)",
        "date": "Oct 26, 2026",
        "text": "Account targeted by trained model (PD = 0.90). Decision: Curtail Line (-30%)."
      }
    ]
  },
  {
    "id": "CUST000009",
    "shortId": "C009",
    "fullName": "Jack Beaumont",
    "email": "cust000009@domain.org",
    "age": 46,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "1.8 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 204277.0,
    "cardType": "Platinum Signature",
    "creditLimit": 35000.0,
    "outstandingBalance": 4970.0,
    "creditUtilization": 0.142,
    "utilization_rate": 0.142,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 43.7,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 18.7,
    "monthlyAverageSpend": 4721.5,
    "creditLines": 3,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 346.96,
        "minPaymentDue": 111.83,
        "balance": 4473.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 755.05,
        "minPaymentDue": 114.31,
        "balance": 4572.4
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 329.49,
        "minPaymentDue": 116.8,
        "balance": 4671.8
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1018.63,
        "minPaymentDue": 119.28,
        "balance": 4771.2
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1733.54,
        "minPaymentDue": 121.77,
        "balance": 4870.6
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1106.4,
        "minPaymentDue": 124.25,
        "balance": 4970.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2024-09-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0111,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.249,
    "riskIndicators": {
      "creditUtilization": 0.14,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.25,
      "creditHistoryLength": 0.93,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000010",
    "shortId": "C010",
    "fullName": "Daniel Okafor",
    "email": "cust000010@domain.org",
    "age": 47,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "2.0 yrs (OWN)",
    "employerCategory": "Professional Services",
    "annualIncome": 234336.0,
    "cardType": "Gold Preferred",
    "creditLimit": 30000.0,
    "outstandingBalance": 5370.0,
    "creditUtilization": 0.179,
    "utilization_rate": 0.179,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 16.2,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 12.2,
    "monthlyAverageSpend": 5101.5,
    "creditLines": 4,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 959.25,
        "minPaymentDue": 120.83,
        "balance": 4833.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1440.77,
        "minPaymentDue": 123.51,
        "balance": 4940.4
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 792.07,
        "minPaymentDue": 126.2,
        "balance": 5047.8
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 820.31,
        "minPaymentDue": 128.88,
        "balance": 5155.2
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1580.69,
        "minPaymentDue": 131.57,
        "balance": 5262.6
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 395.11,
        "minPaymentDue": 134.25,
        "balance": 5370.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2025-01-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.026,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.094,
    "riskIndicators": {
      "creditUtilization": 0.18,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.09,
      "creditHistoryLength": 0.61,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000011",
    "shortId": "C011",
    "fullName": "Noah Kensington",
    "email": "cust000011@domain.org",
    "age": 44,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "11.4 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 102018.0,
    "cardType": "Gold Preferred",
    "creditLimit": 20000.0,
    "outstandingBalance": 16080.0,
    "creditUtilization": 0.804,
    "utilization_rate": 0.804,
    "delayedPayments6M": 1,
    "paymentToMinRatio": 4.0,
    "cashAdvanceCount6M": 5,
    "creditHistoryYears": 16.4,
    "monthlyAverageSpend": 15276.0,
    "creditLines": 5,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 5710.85,
        "minPaymentDue": 361.8,
        "balance": 14472.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1505.81,
        "minPaymentDue": 369.84,
        "balance": 14793.6
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1407.23,
        "minPaymentDue": 377.88,
        "balance": 15115.2
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1363.37,
        "minPaymentDue": 385.92,
        "balance": 15436.8
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3695.15,
        "minPaymentDue": 393.96,
        "balance": 15758.4
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 321.6,
        "minPaymentDue": 402.0,
        "balance": 16080.0
      }
    ],
    "segment": "High-Risk Revolvers",
    "joinedDate": "2021-02-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0248,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.5,
    "riskIndicators": {
      "creditUtilization": 0.8,
      "paymentHistoryRisk": 0.22,
      "outstandingDebt": 0.5,
      "creditHistoryLength": 0.82,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000012",
    "shortId": "C012",
    "fullName": "Jack Novak",
    "email": "cust000012@domain.org",
    "age": 53,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "14.1 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 98316.0,
    "cardType": "Gold Preferred",
    "creditLimit": 25000.0,
    "outstandingBalance": 4800.0,
    "creditUtilization": 0.192,
    "utilization_rate": 0.192,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 39.9,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 20.3,
    "monthlyAverageSpend": 4560.0,
    "creditLines": 6,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 414.52,
        "minPaymentDue": 108.0,
        "balance": 4320.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1714.28,
        "minPaymentDue": 110.4,
        "balance": 4416.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1317.99,
        "minPaymentDue": 112.8,
        "balance": 4512.0
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 472.52,
        "minPaymentDue": 115.2,
        "balance": 4608.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 296.2,
        "minPaymentDue": 117.6,
        "balance": 4704.0
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 815.98,
        "minPaymentDue": 120.0,
        "balance": 4800.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2022-03-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0162,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.087,
    "riskIndicators": {
      "creditUtilization": 0.19,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.09,
      "creditHistoryLength": 1.0,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000013",
    "shortId": "C013",
    "fullName": "Mia Hawthorne",
    "email": "cust000013@domain.org",
    "age": 24,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "8.3 yrs (OWN)",
    "employerCategory": "Professional Services",
    "annualIncome": 97535.0,
    "cardType": "Gold Preferred",
    "creditLimit": 28000.0,
    "outstandingBalance": 22316.0,
    "creditUtilization": 0.797,
    "utilization_rate": 0.797,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 2.4,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 2.3,
    "monthlyAverageSpend": 21200.2,
    "creditLines": 3,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 6917.14,
        "minPaymentDue": 502.11,
        "balance": 20084.4
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2399.91,
        "minPaymentDue": 513.27,
        "balance": 20530.72
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 4106.05,
        "minPaymentDue": 524.43,
        "balance": 20977.04
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2416.65,
        "minPaymentDue": 535.58,
        "balance": 21423.36
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 7820.83,
        "minPaymentDue": 546.74,
        "balance": 21869.68
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 6790.21,
        "minPaymentDue": 557.9,
        "balance": 22316.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2023-04-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.1635,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.475,
    "riskIndicators": {
      "creditUtilization": 0.8,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.47,
      "creditHistoryLength": 0.11,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000014",
    "shortId": "C014",
    "fullName": "Scarlett Morales",
    "email": "cust000014@domain.org",
    "age": 24,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "15.6 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 99154.0,
    "cardType": "Silver Rewards",
    "creditLimit": 15000.0,
    "outstandingBalance": 13575.0,
    "creditUtilization": 0.905,
    "utilization_rate": 0.905,
    "delayedPayments6M": 1,
    "paymentToMinRatio": 2.4,
    "cashAdvanceCount6M": 3,
    "creditHistoryYears": 4.7,
    "monthlyAverageSpend": 12896.25,
    "creditLines": 4,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1910.24,
        "minPaymentDue": 305.44,
        "balance": 12217.5
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3508.94,
        "minPaymentDue": 312.23,
        "balance": 12489.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2442.12,
        "minPaymentDue": 319.01,
        "balance": 12760.5
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 5007.53,
        "minPaymentDue": 325.8,
        "balance": 13032.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3044.51,
        "minPaymentDue": 332.59,
        "balance": 13303.5
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 271.5,
        "minPaymentDue": 339.38,
        "balance": 13575.0
      }
    ],
    "segment": "High-Risk Revolvers",
    "joinedDate": "2024-05-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 1,
    "calibratedProbability": 0.4324,
    "riskTier": "Medium",
    "decisionPolicy": "Surveillance Watch",
    "targetedForSurveillance": true,
    "debt_to_income_est": 0.519,
    "riskIndicators": {
      "creditUtilization": 0.91,
      "paymentHistoryRisk": 0.57,
      "outstandingDebt": 0.52,
      "creditHistoryLength": 0.24,
      "recentInquiries": 0.15
    },
    "notes": [
      {
        "id": "note-auto-14",
        "author": "Risk Underwriter (Trained Policy)",
        "date": "Oct 26, 2026",
        "text": "Account targeted by trained model (PD = 0.43). Decision: Surveillance Watch."
      }
    ]
  },
  {
    "id": "CUST000015",
    "shortId": "C015",
    "fullName": "Savannah Castillo",
    "email": "cust000015@domain.org",
    "age": 68,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "2.8 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 56599.0,
    "cardType": "Classic Access",
    "creditLimit": 3000.0,
    "outstandingBalance": 2571.0,
    "creditUtilization": 0.857,
    "utilization_rate": 0.857,
    "delayedPayments6M": 6,
    "paymentToMinRatio": 0.67,
    "cashAdvanceCount6M": 2,
    "creditHistoryYears": 16.7,
    "monthlyAverageSpend": 2442.45,
    "creditLines": 5,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 51.42,
        "minPaymentDue": 57.85,
        "balance": 2313.9
      },
      {
        "month": "Jun 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 51.42,
        "minPaymentDue": 59.13,
        "balance": 2365.32
      },
      {
        "month": "Jul 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 51.42,
        "minPaymentDue": 60.42,
        "balance": 2416.74
      },
      {
        "month": "Aug 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 51.42,
        "minPaymentDue": 61.7,
        "balance": 2468.16
      },
      {
        "month": "Sep 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 51.42,
        "minPaymentDue": 62.99,
        "balance": 2519.58
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 51.42,
        "minPaymentDue": 64.28,
        "balance": 2571.0
      }
    ],
    "segment": "High-Risk Revolvers",
    "joinedDate": "2025-06-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 1,
    "calibratedProbability": 0.78,
    "riskTier": "High",
    "decisionPolicy": "Curtail Line (-30%)",
    "targetedForSurveillance": true,
    "debt_to_income_est": 0.493,
    "riskIndicators": {
      "creditUtilization": 0.86,
      "paymentHistoryRisk": 0.85,
      "outstandingDebt": 0.49,
      "creditHistoryLength": 0.83,
      "recentInquiries": 0.55
    },
    "notes": [
      {
        "id": "note-auto-15",
        "author": "Risk Underwriter (Trained Policy)",
        "date": "Oct 26, 2026",
        "text": "Account targeted by trained model (PD = 0.78). Decision: Curtail Line (-30%)."
      }
    ]
  },
  {
    "id": "CUST000016",
    "shortId": "C016",
    "fullName": "Hannah Montague",
    "email": "cust000016@domain.org",
    "age": 34,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "15.5 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 79847.0,
    "cardType": "Silver Rewards",
    "creditLimit": 18000.0,
    "outstandingBalance": 9414.0,
    "creditUtilization": 0.523,
    "utilization_rate": 0.523,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 7.0,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 8.6,
    "monthlyAverageSpend": 8943.3,
    "creditLines": 6,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3227.91,
        "minPaymentDue": 211.82,
        "balance": 8472.6
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2906.18,
        "minPaymentDue": 216.52,
        "balance": 8660.88
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 989.88,
        "minPaymentDue": 221.23,
        "balance": 8849.16
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 730.14,
        "minPaymentDue": 225.94,
        "balance": 9037.44
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2047.75,
        "minPaymentDue": 230.64,
        "balance": 9225.72
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2407.21,
        "minPaymentDue": 235.35,
        "balance": 9414.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2021-07-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0408,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.39,
    "riskIndicators": {
      "creditUtilization": 0.52,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.39,
      "creditHistoryLength": 0.43,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000017",
    "shortId": "C017",
    "fullName": "Wyatt Brennan",
    "email": "cust000017@domain.org",
    "age": 37,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "4.8 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 52030.0,
    "cardType": "Classic Access",
    "creditLimit": 2000.0,
    "outstandingBalance": 864.0,
    "creditUtilization": 0.432,
    "utilization_rate": 0.432,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 6.3,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 14.1,
    "monthlyAverageSpend": 820.8,
    "creditLines": 3,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 424.18,
        "minPaymentDue": 19.44,
        "balance": 777.6
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 169.57,
        "minPaymentDue": 19.87,
        "balance": 794.88
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 435.87,
        "minPaymentDue": 20.3,
        "balance": 812.16
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 386.64,
        "minPaymentDue": 20.74,
        "balance": 829.44
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 281.37,
        "minPaymentDue": 21.17,
        "balance": 846.72
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 323.62,
        "minPaymentDue": 21.6,
        "balance": 864.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2022-08-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.1693,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.245,
    "riskIndicators": {
      "creditUtilization": 0.43,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.24,
      "creditHistoryLength": 0.7,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000018",
    "shortId": "C018",
    "fullName": "Julian Stratton",
    "email": "cust000018@domain.org",
    "age": 50,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "21.7 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 102138.0,
    "cardType": "Gold Preferred",
    "creditLimit": 25000.0,
    "outstandingBalance": 14850.0,
    "creditUtilization": 0.594,
    "utilization_rate": 0.594,
    "delayedPayments6M": 1,
    "paymentToMinRatio": 7.3,
    "cashAdvanceCount6M": 5,
    "creditHistoryYears": 13.4,
    "monthlyAverageSpend": 14107.5,
    "creditLines": 4,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2865.44,
        "minPaymentDue": 334.12,
        "balance": 13365.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 4186.25,
        "minPaymentDue": 341.55,
        "balance": 13662.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1874.22,
        "minPaymentDue": 348.98,
        "balance": 13959.0
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2363.38,
        "minPaymentDue": 356.4,
        "balance": 14256.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 5052.47,
        "minPaymentDue": 363.83,
        "balance": 14553.0
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 297.0,
        "minPaymentDue": 371.25,
        "balance": 14850.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2023-09-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0304,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.269,
    "riskIndicators": {
      "creditUtilization": 0.59,
      "paymentHistoryRisk": 0.22,
      "outstandingDebt": 0.27,
      "creditHistoryLength": 0.67,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000019",
    "shortId": "C019",
    "fullName": "Anthony Underwood",
    "email": "cust000019@domain.org",
    "age": 48,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "15.7 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 207139.0,
    "cardType": "Platinum Signature",
    "creditLimit": 40000.0,
    "outstandingBalance": 2200.0,
    "creditUtilization": 0.055,
    "utilization_rate": 0.055,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 40.0,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 9.1,
    "monthlyAverageSpend": 2090.0,
    "creditLines": 5,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 361.51,
        "minPaymentDue": 49.5,
        "balance": 1980.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 648.73,
        "minPaymentDue": 50.6,
        "balance": 2024.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 720.22,
        "minPaymentDue": 51.7,
        "balance": 2068.0
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 791.7,
        "minPaymentDue": 52.8,
        "balance": 2112.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 409.6,
        "minPaymentDue": 53.9,
        "balance": 2156.0
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 644.47,
        "minPaymentDue": 55.0,
        "balance": 2200.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2024-01-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0259,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.146,
    "riskIndicators": {
      "creditUtilization": 0.06,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.15,
      "creditHistoryLength": 0.45,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000020",
    "shortId": "C020",
    "fullName": "Camila Brennan",
    "email": "cust000020@domain.org",
    "age": 43,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "9.9 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 107307.0,
    "cardType": "Gold Preferred",
    "creditLimit": 25000.0,
    "outstandingBalance": 13975.0,
    "creditUtilization": 0.559,
    "utilization_rate": 0.559,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 11.3,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 9.8,
    "monthlyAverageSpend": 13276.25,
    "creditLines": 6,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1880.37,
        "minPaymentDue": 314.44,
        "balance": 12577.5
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2185.58,
        "minPaymentDue": 321.43,
        "balance": 12857.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2763.98,
        "minPaymentDue": 328.41,
        "balance": 13136.5
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2231.67,
        "minPaymentDue": 335.4,
        "balance": 13416.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 4694.03,
        "minPaymentDue": 342.39,
        "balance": 13695.5
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1962.58,
        "minPaymentDue": 349.38,
        "balance": 13975.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2025-02-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.041,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.417,
    "riskIndicators": {
      "creditUtilization": 0.56,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.42,
      "creditHistoryLength": 0.49,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000021",
    "shortId": "C021",
    "fullName": "Natalie Sterling",
    "email": "cust000021@domain.org",
    "age": 44,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "12.1 yrs (OTHER)",
    "employerCategory": "Professional Services",
    "annualIncome": 102987.0,
    "cardType": "Gold Preferred",
    "creditLimit": 25000.0,
    "outstandingBalance": 5525.0,
    "creditUtilization": 0.221,
    "utilization_rate": 0.221,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 43.5,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 13.8,
    "monthlyAverageSpend": 5248.75,
    "creditLines": 3,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 736.34,
        "minPaymentDue": 124.31,
        "balance": 4972.5
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 938.61,
        "minPaymentDue": 127.08,
        "balance": 5083.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1364.16,
        "minPaymentDue": 129.84,
        "balance": 5193.5
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2006.68,
        "minPaymentDue": 132.6,
        "balance": 5304.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1566.09,
        "minPaymentDue": 135.36,
        "balance": 5414.5
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1672.81,
        "minPaymentDue": 138.12,
        "balance": 5525.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2021-03-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0257,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.114,
    "riskIndicators": {
      "creditUtilization": 0.22,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.11,
      "creditHistoryLength": 0.69,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000022",
    "shortId": "C022",
    "fullName": "Savannah Sterling",
    "email": "cust000022@domain.org",
    "age": 46,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "7.2 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 136990.0,
    "cardType": "Gold Preferred",
    "creditLimit": 25000.0,
    "outstandingBalance": 4550.0,
    "creditUtilization": 0.182,
    "utilization_rate": 0.182,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 39.9,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 15.9,
    "monthlyAverageSpend": 4322.5,
    "creditLines": 4,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1205.72,
        "minPaymentDue": 102.38,
        "balance": 4095.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 329.47,
        "minPaymentDue": 104.65,
        "balance": 4186.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1185.05,
        "minPaymentDue": 106.93,
        "balance": 4277.0
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 246.21,
        "minPaymentDue": 109.2,
        "balance": 4368.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 848.66,
        "minPaymentDue": 111.48,
        "balance": 4459.0
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 952.39,
        "minPaymentDue": 113.75,
        "balance": 4550.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2022-04-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0151,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.121,
    "riskIndicators": {
      "creditUtilization": 0.18,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.12,
      "creditHistoryLength": 0.8,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000023",
    "shortId": "C023",
    "fullName": "Henry Delaney",
    "email": "cust000023@domain.org",
    "age": 39,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "16.3 yrs (OWN)",
    "employerCategory": "Professional Services",
    "annualIncome": 90269.0,
    "cardType": "Gold Preferred",
    "creditLimit": 25000.0,
    "outstandingBalance": 11825.0,
    "creditUtilization": 0.473,
    "utilization_rate": 0.473,
    "delayedPayments6M": 1,
    "paymentToMinRatio": 8.5,
    "cashAdvanceCount6M": 4,
    "creditHistoryYears": 13.3,
    "monthlyAverageSpend": 11233.75,
    "creditLines": 5,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1884.03,
        "minPaymentDue": 266.06,
        "balance": 10642.5
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2490.89,
        "minPaymentDue": 271.98,
        "balance": 10879.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1840.29,
        "minPaymentDue": 277.89,
        "balance": 11115.5
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2464.92,
        "minPaymentDue": 283.8,
        "balance": 11352.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1954.85,
        "minPaymentDue": 289.71,
        "balance": 11588.5
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 236.5,
        "minPaymentDue": 295.62,
        "balance": 11825.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2023-05-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0232,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.298,
    "riskIndicators": {
      "creditUtilization": 0.47,
      "paymentHistoryRisk": 0.22,
      "outstandingDebt": 0.3,
      "creditHistoryLength": 0.67,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000024",
    "shortId": "C024",
    "fullName": "Eli Vance",
    "email": "cust000024@domain.org",
    "age": 68,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "20.9 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 230536.0,
    "cardType": "Gold Preferred",
    "creditLimit": 30000.0,
    "outstandingBalance": 6180.0,
    "creditUtilization": 0.206,
    "utilization_rate": 0.206,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 34.4,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 24.2,
    "monthlyAverageSpend": 5871.0,
    "creditLines": 6,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1420.65,
        "minPaymentDue": 139.05,
        "balance": 5562.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 999.44,
        "minPaymentDue": 142.14,
        "balance": 5685.6
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2310.73,
        "minPaymentDue": 145.23,
        "balance": 5809.2
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1414.46,
        "minPaymentDue": 148.32,
        "balance": 5932.8
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1015.61,
        "minPaymentDue": 151.41,
        "balance": 6056.4
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1220.35,
        "minPaymentDue": 154.5,
        "balance": 6180.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2024-06-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0913,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.163,
    "riskIndicators": {
      "creditUtilization": 0.21,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.16,
      "creditHistoryLength": 1.0,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000025",
    "shortId": "C025",
    "fullName": "Benjamin Winslow",
    "email": "cust000025@domain.org",
    "age": 66,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "7.3 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 141723.0,
    "cardType": "Platinum Signature",
    "creditLimit": 40000.0,
    "outstandingBalance": 4240.0,
    "creditUtilization": 0.106,
    "utilization_rate": 0.106,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 32.7,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 31.4,
    "monthlyAverageSpend": 4028.0,
    "creditLines": 3,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 386.43,
        "minPaymentDue": 95.4,
        "balance": 3816.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 274.72,
        "minPaymentDue": 97.52,
        "balance": 3900.8
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 287.14,
        "minPaymentDue": 99.64,
        "balance": 3985.6
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 614.56,
        "minPaymentDue": 101.76,
        "balance": 4070.4
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1512.96,
        "minPaymentDue": 103.88,
        "balance": 4155.2
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1090.98,
        "minPaymentDue": 106.0,
        "balance": 4240.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2025-07-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0282,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.209,
    "riskIndicators": {
      "creditUtilization": 0.11,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.21,
      "creditHistoryLength": 1.0,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000026",
    "shortId": "C026",
    "fullName": "Isaiah Sinclair",
    "email": "cust000026@domain.org",
    "age": 25,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "10.8 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 210233.0,
    "cardType": "Gold Preferred",
    "creditLimit": 25000.0,
    "outstandingBalance": 5925.0,
    "creditUtilization": 0.237,
    "utilization_rate": 0.237,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 27.0,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 3.0,
    "monthlyAverageSpend": 5628.75,
    "creditLines": 4,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1370.84,
        "minPaymentDue": 133.31,
        "balance": 5332.5
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1097.61,
        "minPaymentDue": 136.28,
        "balance": 5451.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1444.12,
        "minPaymentDue": 139.24,
        "balance": 5569.5
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1487.04,
        "minPaymentDue": 142.2,
        "balance": 5688.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1789.88,
        "minPaymentDue": 145.16,
        "balance": 5806.5
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1028.68,
        "minPaymentDue": 148.12,
        "balance": 5925.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2021-08-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0325,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.093,
    "riskIndicators": {
      "creditUtilization": 0.24,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.09,
      "creditHistoryLength": 0.15,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000027",
    "shortId": "C027",
    "fullName": "Wyatt MacKenzie",
    "email": "cust000027@domain.org",
    "age": 28,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "1.8 yrs (OWN)",
    "employerCategory": "Professional Services",
    "annualIncome": 38808.0,
    "cardType": "Classic Access",
    "creditLimit": 5000.0,
    "outstandingBalance": 1670.0,
    "creditUtilization": 0.334,
    "utilization_rate": 0.334,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 2.9,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 4.2,
    "monthlyAverageSpend": 1586.5,
    "creditLines": 5,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 467.2,
        "minPaymentDue": 37.58,
        "balance": 1503.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 465.05,
        "minPaymentDue": 38.41,
        "balance": 1536.4
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 329.93,
        "minPaymentDue": 39.25,
        "balance": 1569.8
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 456.58,
        "minPaymentDue": 40.08,
        "balance": 1603.2
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 584.95,
        "minPaymentDue": 40.91,
        "balance": 1636.6
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 511.09,
        "minPaymentDue": 41.75,
        "balance": 1670.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2022-09-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 1,
    "calibratedProbability": 0.2855,
    "riskTier": "Medium",
    "decisionPolicy": "Surveillance Watch",
    "targetedForSurveillance": true,
    "debt_to_income_est": 0.21,
    "riskIndicators": {
      "creditUtilization": 0.33,
      "paymentHistoryRisk": 0.45,
      "outstandingDebt": 0.21,
      "creditHistoryLength": 0.21,
      "recentInquiries": 0.15
    },
    "notes": [
      {
        "id": "note-auto-27",
        "author": "Risk Underwriter (Trained Policy)",
        "date": "Oct 26, 2026",
        "text": "Account targeted by trained model (PD = 0.29). Decision: Surveillance Watch."
      }
    ]
  },
  {
    "id": "CUST000028",
    "shortId": "C028",
    "fullName": "Lillian Patel",
    "email": "cust000028@domain.org",
    "age": 39,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "5.3 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 79359.0,
    "cardType": "Silver Rewards",
    "creditLimit": 15000.0,
    "outstandingBalance": 11730.0,
    "creditUtilization": 0.782,
    "utilization_rate": 0.782,
    "delayedPayments6M": 1,
    "paymentToMinRatio": 3.2,
    "cashAdvanceCount6M": 4,
    "creditHistoryYears": 11.6,
    "monthlyAverageSpend": 11143.5,
    "creditLines": 6,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2468.97,
        "minPaymentDue": 263.93,
        "balance": 10557.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 893.16,
        "minPaymentDue": 269.79,
        "balance": 10791.6
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 738.46,
        "minPaymentDue": 275.66,
        "balance": 11026.2
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2233.5,
        "minPaymentDue": 281.52,
        "balance": 11260.8
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1815.27,
        "minPaymentDue": 287.38,
        "balance": 11495.4
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 234.6,
        "minPaymentDue": 293.25,
        "balance": 11730.0
      }
    ],
    "segment": "High-Risk Revolvers",
    "joinedDate": "2023-01-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0721,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.52,
    "riskIndicators": {
      "creditUtilization": 0.78,
      "paymentHistoryRisk": 0.22,
      "outstandingDebt": 0.52,
      "creditHistoryLength": 0.58,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000029",
    "shortId": "C029",
    "fullName": "Isaiah Norris",
    "email": "cust000029@domain.org",
    "age": 39,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "22.0 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 105011.0,
    "cardType": "Silver Rewards",
    "creditLimit": 18000.0,
    "outstandingBalance": 8550.0,
    "creditUtilization": 0.475,
    "utilization_rate": 0.475,
    "delayedPayments6M": 1,
    "paymentToMinRatio": 7.3,
    "cashAdvanceCount6M": 4,
    "creditHistoryYears": 13.3,
    "monthlyAverageSpend": 8122.5,
    "creditLines": 3,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2810.93,
        "minPaymentDue": 192.38,
        "balance": 7695.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1343.94,
        "minPaymentDue": 196.65,
        "balance": 7866.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2355.05,
        "minPaymentDue": 200.93,
        "balance": 8037.0
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1228.39,
        "minPaymentDue": 205.2,
        "balance": 8208.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3053.96,
        "minPaymentDue": 209.48,
        "balance": 8379.0
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 171.0,
        "minPaymentDue": 213.75,
        "balance": 8550.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2024-02-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.017,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.29,
    "riskIndicators": {
      "creditUtilization": 0.47,
      "paymentHistoryRisk": 0.22,
      "outstandingDebt": 0.29,
      "creditHistoryLength": 0.67,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000030",
    "shortId": "C030",
    "fullName": "James Montague",
    "email": "cust000030@domain.org",
    "age": 47,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "7.5 yrs (OTHER)",
    "employerCategory": "Professional Services",
    "annualIncome": 70150.0,
    "cardType": "Gold Preferred",
    "creditLimit": 28000.0,
    "outstandingBalance": 25620.0,
    "creditUtilization": 0.915,
    "utilization_rate": 0.915,
    "delayedPayments6M": 1,
    "paymentToMinRatio": 2.6,
    "cashAdvanceCount6M": 2,
    "creditHistoryYears": 10.6,
    "monthlyAverageSpend": 24339.0,
    "creditLines": 4,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3679.27,
        "minPaymentDue": 576.45,
        "balance": 23058.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 8615.37,
        "minPaymentDue": 589.26,
        "balance": 23570.4
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 5316.95,
        "minPaymentDue": 602.07,
        "balance": 24082.8
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1521.38,
        "minPaymentDue": 614.88,
        "balance": 24595.2
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 6526.88,
        "minPaymentDue": 627.69,
        "balance": 25107.6
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 512.4,
        "minPaymentDue": 640.5,
        "balance": 25620.0
      }
    ],
    "segment": "High-Risk Revolvers",
    "joinedDate": "2025-03-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.3407,
    "riskTier": "Medium",
    "decisionPolicy": "Surveillance Watch",
    "targetedForSurveillance": true,
    "debt_to_income_est": 0.412,
    "riskIndicators": {
      "creditUtilization": 0.92,
      "paymentHistoryRisk": 0.57,
      "outstandingDebt": 0.41,
      "creditHistoryLength": 0.53,
      "recentInquiries": 0.15
    },
    "notes": [
      {
        "id": "note-auto-30",
        "author": "Risk Underwriter (Trained Policy)",
        "date": "Oct 26, 2026",
        "text": "Account targeted by trained model (PD = 0.34). Decision: Surveillance Watch."
      }
    ]
  },
  {
    "id": "CUST000031",
    "shortId": "C031",
    "fullName": "Wyatt Lancaster",
    "email": "cust000031@domain.org",
    "age": 29,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "12.4 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 62698.0,
    "cardType": "Silver Rewards",
    "creditLimit": 18000.0,
    "outstandingBalance": 8712.0,
    "creditUtilization": 0.484,
    "utilization_rate": 0.484,
    "delayedPayments6M": 1,
    "paymentToMinRatio": 6.0,
    "cashAdvanceCount6M": 4,
    "creditHistoryYears": 6.6,
    "monthlyAverageSpend": 8276.4,
    "creditLines": 5,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2548.65,
        "minPaymentDue": 196.02,
        "balance": 7840.8
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 822.11,
        "minPaymentDue": 200.38,
        "balance": 8015.04
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 633.26,
        "minPaymentDue": 204.73,
        "balance": 8189.28
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2623.35,
        "minPaymentDue": 209.09,
        "balance": 8363.52
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2854.78,
        "minPaymentDue": 213.44,
        "balance": 8537.76
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 174.24,
        "minPaymentDue": 217.8,
        "balance": 8712.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2021-04-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0175,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.367,
    "riskIndicators": {
      "creditUtilization": 0.48,
      "paymentHistoryRisk": 0.22,
      "outstandingDebt": 0.37,
      "creditHistoryLength": 0.33,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000032",
    "shortId": "C032",
    "fullName": "Grace Winslow",
    "email": "cust000032@domain.org",
    "age": 64,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "18.5 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 64738.0,
    "cardType": "Gold Preferred",
    "creditLimit": 25000.0,
    "outstandingBalance": 12450.0,
    "creditUtilization": 0.498,
    "utilization_rate": 0.498,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 6.3,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 33.5,
    "monthlyAverageSpend": 11827.5,
    "creditLines": 6,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2284.6,
        "minPaymentDue": 280.12,
        "balance": 11205.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1909.92,
        "minPaymentDue": 286.35,
        "balance": 11454.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2536.28,
        "minPaymentDue": 292.57,
        "balance": 11703.0
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 4318.47,
        "minPaymentDue": 298.8,
        "balance": 11952.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2165.06,
        "minPaymentDue": 305.03,
        "balance": 12201.0
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 4621.87,
        "minPaymentDue": 311.25,
        "balance": 12450.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2022-05-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.01,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.377,
    "riskIndicators": {
      "creditUtilization": 0.5,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.38,
      "creditHistoryLength": 1.0,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000033",
    "shortId": "C033",
    "fullName": "Amara Dubois",
    "email": "cust000033@domain.org",
    "age": 28,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "21.3 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 127711.0,
    "cardType": "Silver Rewards",
    "creditLimit": 15000.0,
    "outstandingBalance": 12750.0,
    "creditUtilization": 0.85,
    "utilization_rate": 0.85,
    "delayedPayments6M": 1,
    "paymentToMinRatio": 1.3,
    "cashAdvanceCount6M": 3,
    "creditHistoryYears": 6.5,
    "monthlyAverageSpend": 12112.5,
    "creditLines": 3,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3330.26,
        "minPaymentDue": 286.88,
        "balance": 11475.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 4167.0,
        "minPaymentDue": 293.25,
        "balance": 11730.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 4169.39,
        "minPaymentDue": 299.62,
        "balance": 11985.0
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 4198.4,
        "minPaymentDue": 306.0,
        "balance": 12240.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2212.16,
        "minPaymentDue": 312.38,
        "balance": 12495.0
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 255.0,
        "minPaymentDue": 318.75,
        "balance": 12750.0
      }
    ],
    "segment": "High-Risk Revolvers",
    "joinedDate": "2023-06-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.1558,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.405,
    "riskIndicators": {
      "creditUtilization": 0.85,
      "paymentHistoryRisk": 0.22,
      "outstandingDebt": 0.41,
      "creditHistoryLength": 0.33,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000034",
    "shortId": "C034",
    "fullName": "Hunter Hawthorne",
    "email": "cust000034@domain.org",
    "age": 40,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "2.0 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 56470.0,
    "cardType": "Classic Access",
    "creditLimit": 2000.0,
    "outstandingBalance": 848.0,
    "creditUtilization": 0.424,
    "utilization_rate": 0.424,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 6.6,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 7.2,
    "monthlyAverageSpend": 805.6,
    "creditLines": 4,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 233.1,
        "minPaymentDue": 19.08,
        "balance": 763.2
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 265.96,
        "minPaymentDue": 19.5,
        "balance": 780.16
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 181.11,
        "minPaymentDue": 19.93,
        "balance": 797.12
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 257.48,
        "minPaymentDue": 20.35,
        "balance": 814.08
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 380.22,
        "minPaymentDue": 20.78,
        "balance": 831.04
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 151.93,
        "minPaymentDue": 21.2,
        "balance": 848.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2024-07-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0579,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.3,
    "riskIndicators": {
      "creditUtilization": 0.42,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.3,
      "creditHistoryLength": 0.36,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000035",
    "shortId": "C035",
    "fullName": "Lincoln Trevino",
    "email": "cust000035@domain.org",
    "age": 36,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "11.2 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 71644.0,
    "cardType": "Gold Preferred",
    "creditLimit": 25000.0,
    "outstandingBalance": 10100.0,
    "creditUtilization": 0.404,
    "utilization_rate": 0.404,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 11.1,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 11.2,
    "monthlyAverageSpend": 9595.0,
    "creditLines": 5,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1897.79,
        "minPaymentDue": 227.25,
        "balance": 9090.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1325.95,
        "minPaymentDue": 232.3,
        "balance": 9292.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3279.71,
        "minPaymentDue": 237.35,
        "balance": 9494.0
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1158.93,
        "minPaymentDue": 242.4,
        "balance": 9696.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1767.76,
        "minPaymentDue": 247.45,
        "balance": 9898.0
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2091.13,
        "minPaymentDue": 252.5,
        "balance": 10100.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2025-08-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0195,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.324,
    "riskIndicators": {
      "creditUtilization": 0.4,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.32,
      "creditHistoryLength": 0.56,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000036",
    "shortId": "C036",
    "fullName": "Isaiah Sinclair",
    "email": "cust000036@domain.org",
    "age": 64,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "6.8 yrs (OTHER)",
    "employerCategory": "Professional Services",
    "annualIncome": 87122.0,
    "cardType": "Platinum Signature",
    "creditLimit": 50000.0,
    "outstandingBalance": 12400.0,
    "creditUtilization": 0.248,
    "utilization_rate": 0.248,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 38.3,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 18.8,
    "monthlyAverageSpend": 11780.0,
    "creditLines": 6,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1386.23,
        "minPaymentDue": 279.0,
        "balance": 11160.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1630.03,
        "minPaymentDue": 285.2,
        "balance": 11408.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3664.98,
        "minPaymentDue": 291.4,
        "balance": 11656.0
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3712.91,
        "minPaymentDue": 297.6,
        "balance": 11904.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3363.85,
        "minPaymentDue": 303.8,
        "balance": 12152.0
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1171.22,
        "minPaymentDue": 310.0,
        "balance": 12400.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2021-09-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0172,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.246,
    "riskIndicators": {
      "creditUtilization": 0.25,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.25,
      "creditHistoryLength": 0.94,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000037",
    "shortId": "C037",
    "fullName": "Wyatt Ellington",
    "email": "cust000037@domain.org",
    "age": 27,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "13.0 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 112823.0,
    "cardType": "Gold Preferred",
    "creditLimit": 28000.0,
    "outstandingBalance": 23212.0,
    "creditUtilization": 0.829,
    "utilization_rate": 0.829,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 1.6,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 6.4,
    "monthlyAverageSpend": 22051.4,
    "creditLines": 3,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 4795.61,
        "minPaymentDue": 522.27,
        "balance": 20890.8
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 7244.67,
        "minPaymentDue": 533.88,
        "balance": 21355.04
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 6792.57,
        "minPaymentDue": 545.48,
        "balance": 21819.28
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3715.83,
        "minPaymentDue": 557.09,
        "balance": 22283.52
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2029.43,
        "minPaymentDue": 568.69,
        "balance": 22747.76
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 8424.57,
        "minPaymentDue": 580.3,
        "balance": 23212.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2022-01-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.1635,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.472,
    "riskIndicators": {
      "creditUtilization": 0.83,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.47,
      "creditHistoryLength": 0.32,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000038",
    "shortId": "C038",
    "fullName": "Zoe Lancaster",
    "email": "cust000038@domain.org",
    "age": 38,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "2.4 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 84804.0,
    "cardType": "Gold Preferred",
    "creditLimit": 22000.0,
    "outstandingBalance": 11924.0,
    "creditUtilization": 0.542,
    "utilization_rate": 0.542,
    "delayedPayments6M": 1,
    "paymentToMinRatio": 5.7,
    "cashAdvanceCount6M": 5,
    "creditHistoryYears": 12.1,
    "monthlyAverageSpend": 11327.8,
    "creditLines": 4,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3106.05,
        "minPaymentDue": 268.29,
        "balance": 10731.6
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3058.58,
        "minPaymentDue": 274.25,
        "balance": 10970.08
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2395.38,
        "minPaymentDue": 280.21,
        "balance": 11208.56
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3313.08,
        "minPaymentDue": 286.18,
        "balance": 11447.04
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3112.2,
        "minPaymentDue": 292.14,
        "balance": 11685.52
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 238.48,
        "minPaymentDue": 298.1,
        "balance": 11924.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2023-02-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0336,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.309,
    "riskIndicators": {
      "creditUtilization": 0.54,
      "paymentHistoryRisk": 0.22,
      "outstandingDebt": 0.31,
      "creditHistoryLength": 0.6,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000039",
    "shortId": "C039",
    "fullName": "Chloe Holloway",
    "email": "cust000039@domain.org",
    "age": 30,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "2.6 yrs (OWN)",
    "employerCategory": "Professional Services",
    "annualIncome": 182258.0,
    "cardType": "Platinum Signature",
    "creditLimit": 50000.0,
    "outstandingBalance": 7050.0,
    "creditUtilization": 0.141,
    "utilization_rate": 0.141,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 37.3,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 7.7,
    "monthlyAverageSpend": 6697.5,
    "creditLines": 5,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 850.32,
        "minPaymentDue": 158.62,
        "balance": 6345.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1371.41,
        "minPaymentDue": 162.15,
        "balance": 6486.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 893.49,
        "minPaymentDue": 165.68,
        "balance": 6627.0
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1183.5,
        "minPaymentDue": 169.2,
        "balance": 6768.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2600.05,
        "minPaymentDue": 172.73,
        "balance": 6909.0
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1194.16,
        "minPaymentDue": 176.25,
        "balance": 7050.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2024-03-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0313,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.106,
    "riskIndicators": {
      "creditUtilization": 0.14,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.11,
      "creditHistoryLength": 0.39,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000040",
    "shortId": "C040",
    "fullName": "Zoe Rousseau",
    "email": "cust000040@domain.org",
    "age": 51,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "21.3 yrs (OWN)",
    "employerCategory": "Professional Services",
    "annualIncome": 140602.0,
    "cardType": "Platinum Signature",
    "creditLimit": 50000.0,
    "outstandingBalance": 13650.0,
    "creditUtilization": 0.273,
    "utilization_rate": 0.273,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 16.5,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 13.5,
    "monthlyAverageSpend": 12967.5,
    "creditLines": 6,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 4540.69,
        "minPaymentDue": 307.12,
        "balance": 12285.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2140.07,
        "minPaymentDue": 313.95,
        "balance": 12558.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1337.09,
        "minPaymentDue": 320.78,
        "balance": 12831.0
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 4677.48,
        "minPaymentDue": 327.6,
        "balance": 13104.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 695.08,
        "minPaymentDue": 334.43,
        "balance": 13377.0
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 4490.6,
        "minPaymentDue": 341.25,
        "balance": 13650.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2025-04-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.01,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.137,
    "riskIndicators": {
      "creditUtilization": 0.27,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.14,
      "creditHistoryLength": 0.68,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000041",
    "shortId": "C041",
    "fullName": "Evelyn Patel",
    "email": "cust000041@domain.org",
    "age": 44,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "19.1 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 43593.0,
    "cardType": "Classic Access",
    "creditLimit": 8000.0,
    "outstandingBalance": 6264.0,
    "creditUtilization": 0.783,
    "utilization_rate": 0.783,
    "delayedPayments6M": 4,
    "paymentToMinRatio": 0.47,
    "cashAdvanceCount6M": 5,
    "creditHistoryYears": 13.7,
    "monthlyAverageSpend": 5950.8,
    "creditLines": 3,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 764.23,
        "minPaymentDue": 140.94,
        "balance": 5637.6
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1565.43,
        "minPaymentDue": 144.07,
        "balance": 5762.88
      },
      {
        "month": "Jul 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 125.28,
        "minPaymentDue": 147.2,
        "balance": 5888.16
      },
      {
        "month": "Aug 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 125.28,
        "minPaymentDue": 150.34,
        "balance": 6013.44
      },
      {
        "month": "Sep 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 125.28,
        "minPaymentDue": 153.47,
        "balance": 6138.72
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 125.28,
        "minPaymentDue": 156.6,
        "balance": 6264.0
      }
    ],
    "segment": "High-Risk Revolvers",
    "joinedDate": "2021-05-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.8611,
    "riskTier": "High",
    "decisionPolicy": "Curtail Line (-30%)",
    "targetedForSurveillance": true,
    "debt_to_income_est": 0.703,
    "riskIndicators": {
      "creditUtilization": 0.78,
      "paymentHistoryRisk": 0.85,
      "outstandingDebt": 0.7,
      "creditHistoryLength": 0.68,
      "recentInquiries": 0.55
    },
    "notes": [
      {
        "id": "note-auto-41",
        "author": "Risk Underwriter (Trained Policy)",
        "date": "Oct 26, 2026",
        "text": "Account targeted by trained model (PD = 0.86). Decision: Curtail Line (-30%)."
      }
    ]
  },
  {
    "id": "CUST000042",
    "shortId": "C042",
    "fullName": "Liam Garrison",
    "email": "cust000042@domain.org",
    "age": 53,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "9.1 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 57069.0,
    "cardType": "Classic Access",
    "creditLimit": 3000.0,
    "outstandingBalance": 2880.0,
    "creditUtilization": 0.96,
    "utilization_rate": 0.96,
    "delayedPayments6M": 4,
    "paymentToMinRatio": 1.25,
    "cashAdvanceCount6M": 5,
    "creditHistoryYears": 18.4,
    "monthlyAverageSpend": 2736.0,
    "creditLines": 4,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 710.68,
        "minPaymentDue": 64.8,
        "balance": 2592.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 236.83,
        "minPaymentDue": 66.24,
        "balance": 2649.6
      },
      {
        "month": "Jul 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 57.6,
        "minPaymentDue": 67.68,
        "balance": 2707.2
      },
      {
        "month": "Aug 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 57.6,
        "minPaymentDue": 69.12,
        "balance": 2764.8
      },
      {
        "month": "Sep 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 57.6,
        "minPaymentDue": 70.56,
        "balance": 2822.4
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 57.6,
        "minPaymentDue": 72.0,
        "balance": 2880.0
      }
    ],
    "segment": "High-Risk Revolvers",
    "joinedDate": "2022-06-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 1,
    "calibratedProbability": 0.5538,
    "riskTier": "High",
    "decisionPolicy": "Curtail Line (-30%)",
    "targetedForSurveillance": true,
    "debt_to_income_est": 0.5,
    "riskIndicators": {
      "creditUtilization": 0.96,
      "paymentHistoryRisk": 0.85,
      "outstandingDebt": 0.5,
      "creditHistoryLength": 0.92,
      "recentInquiries": 0.55
    },
    "notes": [
      {
        "id": "note-auto-42",
        "author": "Risk Underwriter (Trained Policy)",
        "date": "Oct 26, 2026",
        "text": "Account targeted by trained model (PD = 0.55). Decision: Curtail Line (-30%)."
      }
    ]
  },
  {
    "id": "CUST000043",
    "shortId": "C043",
    "fullName": "Leo Ellington",
    "email": "cust000043@domain.org",
    "age": 51,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "5.4 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 109926.0,
    "cardType": "Platinum Signature",
    "creditLimit": 35000.0,
    "outstandingBalance": 4970.0,
    "creditUtilization": 0.142,
    "utilization_rate": 0.142,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 35.0,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 22.2,
    "monthlyAverageSpend": 4721.5,
    "creditLines": 5,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 850.42,
        "minPaymentDue": 111.83,
        "balance": 4473.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 458.67,
        "minPaymentDue": 114.31,
        "balance": 4572.4
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 345.38,
        "minPaymentDue": 116.8,
        "balance": 4671.8
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1793.69,
        "minPaymentDue": 119.28,
        "balance": 4771.2
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1155.76,
        "minPaymentDue": 121.77,
        "balance": 4870.6
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1330.74,
        "minPaymentDue": 124.25,
        "balance": 4970.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2023-07-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0105,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.144,
    "riskIndicators": {
      "creditUtilization": 0.14,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.14,
      "creditHistoryLength": 1.0,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000044",
    "shortId": "C044",
    "fullName": "Sophia Sinclair",
    "email": "cust000044@domain.org",
    "age": 54,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "7.2 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 211403.0,
    "cardType": "Gold Preferred",
    "creditLimit": 30000.0,
    "outstandingBalance": 7290.0,
    "creditUtilization": 0.243,
    "utilization_rate": 0.243,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 25.5,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 25.5,
    "monthlyAverageSpend": 6925.5,
    "creditLines": 6,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1818.21,
        "minPaymentDue": 164.03,
        "balance": 6561.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1887.21,
        "minPaymentDue": 167.67,
        "balance": 6706.8
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 426.7,
        "minPaymentDue": 171.32,
        "balance": 6852.6
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2565.73,
        "minPaymentDue": 174.96,
        "balance": 6998.4
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2329.7,
        "minPaymentDue": 178.61,
        "balance": 7144.2
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 998.15,
        "minPaymentDue": 182.25,
        "balance": 7290.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2024-08-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0209,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.175,
    "riskIndicators": {
      "creditUtilization": 0.24,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.17,
      "creditHistoryLength": 1.0,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000045",
    "shortId": "C045",
    "fullName": "Jack Solomon",
    "email": "cust000045@domain.org",
    "age": 64,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "4.4 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 122191.0,
    "cardType": "Gold Preferred",
    "creditLimit": 25000.0,
    "outstandingBalance": 1550.0,
    "creditUtilization": 0.062,
    "utilization_rate": 0.062,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 30.9,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 15.8,
    "monthlyAverageSpend": 1472.5,
    "creditLines": 3,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 104.0,
        "minPaymentDue": 34.88,
        "balance": 1395.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 156.8,
        "minPaymentDue": 35.65,
        "balance": 1426.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 388.74,
        "minPaymentDue": 36.43,
        "balance": 1457.0
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 417.01,
        "minPaymentDue": 37.2,
        "balance": 1488.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 214.57,
        "minPaymentDue": 37.98,
        "balance": 1519.0
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 410.95,
        "minPaymentDue": 38.75,
        "balance": 1550.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2025-09-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0223,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.144,
    "riskIndicators": {
      "creditUtilization": 0.06,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.14,
      "creditHistoryLength": 0.79,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000046",
    "shortId": "C046",
    "fullName": "Dylan Rousseau",
    "email": "cust000046@domain.org",
    "age": 49,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "16.7 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 212567.0,
    "cardType": "Platinum Signature",
    "creditLimit": 50000.0,
    "outstandingBalance": 10000.0,
    "creditUtilization": 0.2,
    "utilization_rate": 0.2,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 16.4,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 13.8,
    "monthlyAverageSpend": 9500.0,
    "creditLines": 4,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 889.95,
        "minPaymentDue": 225.0,
        "balance": 9000.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2116.5,
        "minPaymentDue": 230.0,
        "balance": 9200.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1899.63,
        "minPaymentDue": 235.0,
        "balance": 9400.0
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 919.85,
        "minPaymentDue": 240.0,
        "balance": 9600.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2230.89,
        "minPaymentDue": 245.0,
        "balance": 9800.0
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1247.86,
        "minPaymentDue": 250.0,
        "balance": 10000.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2021-01-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 1,
    "calibratedProbability": 0.01,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": true,
    "debt_to_income_est": 0.147,
    "riskIndicators": {
      "creditUtilization": 0.2,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.15,
      "creditHistoryLength": 0.69,
      "recentInquiries": 0.15
    },
    "notes": [
      {
        "id": "note-auto-46",
        "author": "Risk Underwriter (Trained Policy)",
        "date": "Oct 26, 2026",
        "text": "Account targeted by trained model (PD = 0.01). Decision: Standard Facility."
      }
    ]
  },
  {
    "id": "CUST000047",
    "shortId": "C047",
    "fullName": "Noah Beaumont",
    "email": "cust000047@domain.org",
    "age": 51,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "16.5 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 42258.0,
    "cardType": "Classic Access",
    "creditLimit": 5000.0,
    "outstandingBalance": 2110.0,
    "creditUtilization": 0.422,
    "utilization_rate": 0.422,
    "delayedPayments6M": 1,
    "paymentToMinRatio": 6.3,
    "cashAdvanceCount6M": 5,
    "creditHistoryYears": 21.3,
    "monthlyAverageSpend": 2004.5,
    "creditLines": 5,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 353.64,
        "minPaymentDue": 47.48,
        "balance": 1899.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 404.98,
        "minPaymentDue": 48.53,
        "balance": 1941.2
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 178.1,
        "minPaymentDue": 49.59,
        "balance": 1983.4
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 404.27,
        "minPaymentDue": 50.64,
        "balance": 2025.6
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 380.11,
        "minPaymentDue": 51.7,
        "balance": 2067.8
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 42.2,
        "minPaymentDue": 52.75,
        "balance": 2110.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2022-02-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 1,
    "calibratedProbability": 0.3938,
    "riskTier": "Medium",
    "decisionPolicy": "Surveillance Watch",
    "targetedForSurveillance": true,
    "debt_to_income_est": 0.251,
    "riskIndicators": {
      "creditUtilization": 0.42,
      "paymentHistoryRisk": 0.57,
      "outstandingDebt": 0.25,
      "creditHistoryLength": 1.0,
      "recentInquiries": 0.15
    },
    "notes": [
      {
        "id": "note-auto-47",
        "author": "Risk Underwriter (Trained Policy)",
        "date": "Oct 26, 2026",
        "text": "Account targeted by trained model (PD = 0.39). Decision: Surveillance Watch."
      }
    ]
  },
  {
    "id": "CUST000048",
    "shortId": "C048",
    "fullName": "Jack Brennan",
    "email": "cust000048@domain.org",
    "age": 62,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "17.3 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 218680.0,
    "cardType": "Gold Preferred",
    "creditLimit": 30000.0,
    "outstandingBalance": 7710.0,
    "creditUtilization": 0.257,
    "utilization_rate": 0.257,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 25.5,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 16.6,
    "monthlyAverageSpend": 7324.5,
    "creditLines": 6,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2287.75,
        "minPaymentDue": 173.48,
        "balance": 6939.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 574.32,
        "minPaymentDue": 177.33,
        "balance": 7093.2
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2769.2,
        "minPaymentDue": 181.19,
        "balance": 7247.4
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1958.98,
        "minPaymentDue": 185.04,
        "balance": 7401.6
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1548.05,
        "minPaymentDue": 188.9,
        "balance": 7555.8
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1798.08,
        "minPaymentDue": 192.75,
        "balance": 7710.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2023-03-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0159,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.204,
    "riskIndicators": {
      "creditUtilization": 0.26,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.2,
      "creditHistoryLength": 0.83,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000049",
    "shortId": "C049",
    "fullName": "Victoria Al-Mansoor",
    "email": "cust000049@domain.org",
    "age": 41,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "2.0 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 66759.0,
    "cardType": "Classic Access",
    "creditLimit": 3000.0,
    "outstandingBalance": 2550.0,
    "creditUtilization": 0.85,
    "utilization_rate": 0.85,
    "delayedPayments6M": 2,
    "paymentToMinRatio": 0.83,
    "cashAdvanceCount6M": 1,
    "creditHistoryYears": 12.7,
    "monthlyAverageSpend": 2422.5,
    "creditLines": 3,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 510.97,
        "minPaymentDue": 57.38,
        "balance": 2295.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 586.89,
        "minPaymentDue": 58.65,
        "balance": 2346.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 783.72,
        "minPaymentDue": 59.93,
        "balance": 2397.0
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 869.96,
        "minPaymentDue": 61.2,
        "balance": 2448.0
      },
      {
        "month": "Sep 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 51.0,
        "minPaymentDue": 62.48,
        "balance": 2499.0
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 51.0,
        "minPaymentDue": 63.75,
        "balance": 2550.0
      }
    ],
    "segment": "High-Risk Revolvers",
    "joinedDate": "2024-04-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.2796,
    "riskTier": "Medium",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": true,
    "debt_to_income_est": 0.616,
    "riskIndicators": {
      "creditUtilization": 0.85,
      "paymentHistoryRisk": 0.69,
      "outstandingDebt": 0.62,
      "creditHistoryLength": 0.64,
      "recentInquiries": 0.15
    },
    "notes": [
      {
        "id": "note-auto-49",
        "author": "Risk Underwriter (Trained Policy)",
        "date": "Oct 26, 2026",
        "text": "Account targeted by trained model (PD = 0.28). Decision: Standard Facility."
      }
    ]
  },
  {
    "id": "CUST000050",
    "shortId": "C050",
    "fullName": "John O'Sullivan",
    "email": "cust000050@domain.org",
    "age": 50,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "11.3 yrs (OWN)",
    "employerCategory": "Professional Services",
    "annualIncome": 175030.0,
    "cardType": "Gold Preferred",
    "creditLimit": 25000.0,
    "outstandingBalance": 4025.0,
    "creditUtilization": 0.161,
    "utilization_rate": 0.161,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 20.2,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 22.0,
    "monthlyAverageSpend": 3823.75,
    "creditLines": 4,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1089.28,
        "minPaymentDue": 90.56,
        "balance": 3622.5
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 269.74,
        "minPaymentDue": 92.58,
        "balance": 3703.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1026.48,
        "minPaymentDue": 94.59,
        "balance": 3783.5
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 638.98,
        "minPaymentDue": 96.6,
        "balance": 3864.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 632.5,
        "minPaymentDue": 98.61,
        "balance": 3944.5
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 931.09,
        "minPaymentDue": 100.62,
        "balance": 4025.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2025-05-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.01,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.122,
    "riskIndicators": {
      "creditUtilization": 0.16,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.12,
      "creditHistoryLength": 1.0,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000051",
    "shortId": "C051",
    "fullName": "Aaron Al-Mansoor",
    "email": "cust000051@domain.org",
    "age": 44,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "2.3 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 187749.0,
    "cardType": "Gold Preferred",
    "creditLimit": 30000.0,
    "outstandingBalance": 5490.0,
    "creditUtilization": 0.183,
    "utilization_rate": 0.183,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 43.1,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 16.7,
    "monthlyAverageSpend": 5215.5,
    "creditLines": 5,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1213.72,
        "minPaymentDue": 123.53,
        "balance": 4941.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1427.17,
        "minPaymentDue": 126.27,
        "balance": 5050.8
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1029.96,
        "minPaymentDue": 129.02,
        "balance": 5160.6
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 920.09,
        "minPaymentDue": 131.76,
        "balance": 5270.4
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 921.46,
        "minPaymentDue": 134.5,
        "balance": 5380.2
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 596.13,
        "minPaymentDue": 137.25,
        "balance": 5490.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2021-06-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.01,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.133,
    "riskIndicators": {
      "creditUtilization": 0.18,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.13,
      "creditHistoryLength": 0.83,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000052",
    "shortId": "C052",
    "fullName": "Abigail Brennan",
    "email": "cust000052@domain.org",
    "age": 28,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "3.8 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 90374.0,
    "cardType": "Silver Rewards",
    "creditLimit": 12000.0,
    "outstandingBalance": 6456.0,
    "creditUtilization": 0.538,
    "utilization_rate": 0.538,
    "delayedPayments6M": 1,
    "paymentToMinRatio": 4.6,
    "cashAdvanceCount6M": 3,
    "creditHistoryYears": 4.2,
    "monthlyAverageSpend": 6133.2,
    "creditLines": 6,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1254.82,
        "minPaymentDue": 145.26,
        "balance": 5810.4
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 920.64,
        "minPaymentDue": 148.49,
        "balance": 5939.52
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1893.38,
        "minPaymentDue": 151.72,
        "balance": 6068.64
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1264.74,
        "minPaymentDue": 154.94,
        "balance": 6197.76
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1443.26,
        "minPaymentDue": 158.17,
        "balance": 6326.88
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 129.12,
        "minPaymentDue": 161.4,
        "balance": 6456.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2022-07-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.1993,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.308,
    "riskIndicators": {
      "creditUtilization": 0.54,
      "paymentHistoryRisk": 0.22,
      "outstandingDebt": 0.31,
      "creditHistoryLength": 0.21,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000053",
    "shortId": "C053",
    "fullName": "Gabriel Trevino",
    "email": "cust000053@domain.org",
    "age": 40,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "21.7 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 60958.0,
    "cardType": "Silver Rewards",
    "creditLimit": 10000.0,
    "outstandingBalance": 9730.0,
    "creditUtilization": 0.973,
    "utilization_rate": 0.973,
    "delayedPayments6M": 3,
    "paymentToMinRatio": 1.52,
    "cashAdvanceCount6M": 1,
    "creditHistoryYears": 12.3,
    "monthlyAverageSpend": 9243.5,
    "creditLines": 3,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 880.76,
        "minPaymentDue": 218.93,
        "balance": 8757.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 751.73,
        "minPaymentDue": 223.79,
        "balance": 8951.6
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 993.45,
        "minPaymentDue": 228.66,
        "balance": 9146.2
      },
      {
        "month": "Aug 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 194.6,
        "minPaymentDue": 233.52,
        "balance": 9340.8
      },
      {
        "month": "Sep 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 194.6,
        "minPaymentDue": 238.38,
        "balance": 9535.4
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 194.6,
        "minPaymentDue": 243.25,
        "balance": 9730.0
      }
    ],
    "segment": "High-Risk Revolvers",
    "joinedDate": "2023-08-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 1,
    "calibratedProbability": 0.5,
    "riskTier": "High",
    "decisionPolicy": "Curtail Line (-30%)",
    "targetedForSurveillance": true,
    "debt_to_income_est": 0.522,
    "riskIndicators": {
      "creditUtilization": 0.97,
      "paymentHistoryRisk": 0.85,
      "outstandingDebt": 0.52,
      "creditHistoryLength": 0.61,
      "recentInquiries": 0.55
    },
    "notes": [
      {
        "id": "note-auto-53",
        "author": "Risk Underwriter (Trained Policy)",
        "date": "Oct 26, 2026",
        "text": "Account targeted by trained model (PD = 0.50). Decision: Curtail Line (-30%)."
      }
    ]
  },
  {
    "id": "CUST000054",
    "shortId": "C054",
    "fullName": "Max Solomon",
    "email": "cust000054@domain.org",
    "age": 54,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "1.1 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 186231.0,
    "cardType": "Gold Preferred",
    "creditLimit": 25000.0,
    "outstandingBalance": 3250.0,
    "creditUtilization": 0.13,
    "utilization_rate": 0.13,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 15.8,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 23.3,
    "monthlyAverageSpend": 3087.5,
    "creditLines": 4,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 309.1,
        "minPaymentDue": 73.12,
        "balance": 2925.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 907.72,
        "minPaymentDue": 74.75,
        "balance": 2990.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 636.34,
        "minPaymentDue": 76.38,
        "balance": 3055.0
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 168.05,
        "minPaymentDue": 78.0,
        "balance": 3120.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 246.18,
        "minPaymentDue": 79.62,
        "balance": 3185.0
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 432.82,
        "minPaymentDue": 81.25,
        "balance": 3250.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2024-09-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0111,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.238,
    "riskIndicators": {
      "creditUtilization": 0.13,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.24,
      "creditHistoryLength": 1.0,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000055",
    "shortId": "C055",
    "fullName": "Isabella Zimmerman",
    "email": "cust000055@domain.org",
    "age": 37,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "5.6 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 204829.0,
    "cardType": "Gold Preferred",
    "creditLimit": 25000.0,
    "outstandingBalance": 1675.0,
    "creditUtilization": 0.067,
    "utilization_rate": 0.067,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 42.2,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 9.1,
    "monthlyAverageSpend": 1591.25,
    "creditLines": 5,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 394.45,
        "minPaymentDue": 37.69,
        "balance": 1507.5
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 185.74,
        "minPaymentDue": 38.53,
        "balance": 1541.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 447.56,
        "minPaymentDue": 39.36,
        "balance": 1574.5
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 368.77,
        "minPaymentDue": 40.2,
        "balance": 1608.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 280.09,
        "minPaymentDue": 41.04,
        "balance": 1641.5
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 602.83,
        "minPaymentDue": 41.88,
        "balance": 1675.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2025-01-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0362,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.181,
    "riskIndicators": {
      "creditUtilization": 0.07,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.18,
      "creditHistoryLength": 0.45,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000056",
    "shortId": "C056",
    "fullName": "Anthony Garrison",
    "email": "cust000056@domain.org",
    "age": 38,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "14.2 yrs (OTHER)",
    "employerCategory": "Professional Services",
    "annualIncome": 51402.0,
    "cardType": "Classic Access",
    "creditLimit": 3000.0,
    "outstandingBalance": 2547.0,
    "creditUtilization": 0.849,
    "utilization_rate": 0.849,
    "delayedPayments6M": 2,
    "paymentToMinRatio": 1.48,
    "cashAdvanceCount6M": 2,
    "creditHistoryYears": 12.8,
    "monthlyAverageSpend": 2419.65,
    "creditLines": 6,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 939.32,
        "minPaymentDue": 57.31,
        "balance": 2292.3
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 523.51,
        "minPaymentDue": 58.58,
        "balance": 2343.24
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 278.26,
        "minPaymentDue": 59.85,
        "balance": 2394.18
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 239.0,
        "minPaymentDue": 61.13,
        "balance": 2445.12
      },
      {
        "month": "Sep 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 50.94,
        "minPaymentDue": 62.4,
        "balance": 2496.06
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 50.94,
        "minPaymentDue": 63.68,
        "balance": 2547.0
      }
    ],
    "segment": "High-Risk Revolvers",
    "joinedDate": "2021-02-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 1,
    "calibratedProbability": 0.4679,
    "riskTier": "Medium",
    "decisionPolicy": "Surveillance Watch",
    "targetedForSurveillance": true,
    "debt_to_income_est": 0.701,
    "riskIndicators": {
      "creditUtilization": 0.85,
      "paymentHistoryRisk": 0.69,
      "outstandingDebt": 0.7,
      "creditHistoryLength": 0.64,
      "recentInquiries": 0.15
    },
    "notes": [
      {
        "id": "note-auto-56",
        "author": "Risk Underwriter (Trained Policy)",
        "date": "Oct 26, 2026",
        "text": "Account targeted by trained model (PD = 0.47). Decision: Surveillance Watch."
      }
    ]
  },
  {
    "id": "CUST000057",
    "shortId": "C057",
    "fullName": "Sebastian Hawthorne",
    "email": "cust000057@domain.org",
    "age": 41,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "4.8 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 108438.0,
    "cardType": "Gold Preferred",
    "creditLimit": 25000.0,
    "outstandingBalance": 10100.0,
    "creditUtilization": 0.404,
    "utilization_rate": 0.404,
    "delayedPayments6M": 1,
    "paymentToMinRatio": 5.1,
    "cashAdvanceCount6M": 4,
    "creditHistoryYears": 15.4,
    "monthlyAverageSpend": 9595.0,
    "creditLines": 3,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3441.65,
        "minPaymentDue": 227.25,
        "balance": 9090.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1774.16,
        "minPaymentDue": 232.3,
        "balance": 9292.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3701.25,
        "minPaymentDue": 237.35,
        "balance": 9494.0
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2133.79,
        "minPaymentDue": 242.4,
        "balance": 9696.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2138.12,
        "minPaymentDue": 247.45,
        "balance": 9898.0
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 202.0,
        "minPaymentDue": 252.5,
        "balance": 10100.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2022-03-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0113,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.304,
    "riskIndicators": {
      "creditUtilization": 0.4,
      "paymentHistoryRisk": 0.22,
      "outstandingDebt": 0.3,
      "creditHistoryLength": 0.77,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000058",
    "shortId": "C058",
    "fullName": "Lillian Chen",
    "email": "cust000058@domain.org",
    "age": 56,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "13.5 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 111895.0,
    "cardType": "Gold Preferred",
    "creditLimit": 25000.0,
    "outstandingBalance": 2975.0,
    "creditUtilization": 0.119,
    "utilization_rate": 0.119,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 23.9,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 18.1,
    "monthlyAverageSpend": 2826.25,
    "creditLines": 4,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1113.91,
        "minPaymentDue": 66.94,
        "balance": 2677.5
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 414.24,
        "minPaymentDue": 68.42,
        "balance": 2737.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1096.39,
        "minPaymentDue": 69.91,
        "balance": 2796.5
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1065.33,
        "minPaymentDue": 71.4,
        "balance": 2856.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 221.32,
        "minPaymentDue": 72.89,
        "balance": 2915.5
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 765.2,
        "minPaymentDue": 74.38,
        "balance": 2975.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2023-04-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0144,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.156,
    "riskIndicators": {
      "creditUtilization": 0.12,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.16,
      "creditHistoryLength": 0.91,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000059",
    "shortId": "C059",
    "fullName": "Julian Al-Mansoor",
    "email": "cust000059@domain.org",
    "age": 24,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "13.6 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 146864.0,
    "cardType": "Platinum Signature",
    "creditLimit": 35000.0,
    "outstandingBalance": 4445.0,
    "creditUtilization": 0.127,
    "utilization_rate": 0.127,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 43.5,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 3.4,
    "monthlyAverageSpend": 4222.75,
    "creditLines": 5,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 797.22,
        "minPaymentDue": 100.01,
        "balance": 4000.5
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1160.57,
        "minPaymentDue": 102.24,
        "balance": 4089.4
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 582.82,
        "minPaymentDue": 104.46,
        "balance": 4178.3
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 386.12,
        "minPaymentDue": 106.68,
        "balance": 4267.2
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1284.97,
        "minPaymentDue": 108.9,
        "balance": 4356.1
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 943.14,
        "minPaymentDue": 111.12,
        "balance": 4445.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2024-05-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0423,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.086,
    "riskIndicators": {
      "creditUtilization": 0.13,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.09,
      "creditHistoryLength": 0.17,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000060",
    "shortId": "C060",
    "fullName": "Joseph Zimmerman",
    "email": "cust000060@domain.org",
    "age": 61,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "15.6 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 213765.0,
    "cardType": "Gold Preferred",
    "creditLimit": 30000.0,
    "outstandingBalance": 2070.0,
    "creditUtilization": 0.069,
    "utilization_rate": 0.069,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 40.6,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 27.3,
    "monthlyAverageSpend": 1966.5,
    "creditLines": 6,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 580.84,
        "minPaymentDue": 46.58,
        "balance": 1863.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 473.51,
        "minPaymentDue": 47.61,
        "balance": 1904.4
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 298.84,
        "minPaymentDue": 48.65,
        "balance": 1945.8
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 305.3,
        "minPaymentDue": 49.68,
        "balance": 1987.2
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 209.46,
        "minPaymentDue": 50.72,
        "balance": 2028.6
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 580.86,
        "minPaymentDue": 51.75,
        "balance": 2070.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2025-06-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0208,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.157,
    "riskIndicators": {
      "creditUtilization": 0.07,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.16,
      "creditHistoryLength": 1.0,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000061",
    "shortId": "C061",
    "fullName": "Lily Ingram",
    "email": "cust000061@domain.org",
    "age": 30,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "3.1 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 214504.0,
    "cardType": "Gold Preferred",
    "creditLimit": 25000.0,
    "outstandingBalance": 3175.0,
    "creditUtilization": 0.127,
    "utilization_rate": 0.127,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 32.2,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 6.5,
    "monthlyAverageSpend": 3016.25,
    "creditLines": 3,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 582.68,
        "minPaymentDue": 71.44,
        "balance": 2857.5
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 581.27,
        "minPaymentDue": 73.03,
        "balance": 2921.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 752.02,
        "minPaymentDue": 74.61,
        "balance": 2984.5
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 288.09,
        "minPaymentDue": 76.2,
        "balance": 3048.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 485.91,
        "minPaymentDue": 77.79,
        "balance": 3111.5
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 235.29,
        "minPaymentDue": 79.38,
        "balance": 3175.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2021-07-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0322,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.159,
    "riskIndicators": {
      "creditUtilization": 0.13,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.16,
      "creditHistoryLength": 0.33,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000062",
    "shortId": "C062",
    "fullName": "Mia Zimmerman",
    "email": "cust000062@domain.org",
    "age": 30,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "14.3 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 114684.0,
    "cardType": "Silver Rewards",
    "creditLimit": 12000.0,
    "outstandingBalance": 7128.0,
    "creditUtilization": 0.594,
    "utilization_rate": 0.594,
    "delayedPayments6M": 1,
    "paymentToMinRatio": 4.8,
    "cashAdvanceCount6M": 3,
    "creditHistoryYears": 5.1,
    "monthlyAverageSpend": 6771.6,
    "creditLines": 4,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1827.57,
        "minPaymentDue": 160.38,
        "balance": 6415.2
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1632.48,
        "minPaymentDue": 163.94,
        "balance": 6557.76
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 646.37,
        "minPaymentDue": 167.51,
        "balance": 6700.32
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1057.92,
        "minPaymentDue": 171.07,
        "balance": 6842.88
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1592.26,
        "minPaymentDue": 174.64,
        "balance": 6985.44
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 142.56,
        "minPaymentDue": 178.2,
        "balance": 7128.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2022-08-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.2184,
    "riskTier": "Medium",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.27,
    "riskIndicators": {
      "creditUtilization": 0.59,
      "paymentHistoryRisk": 0.57,
      "outstandingDebt": 0.27,
      "creditHistoryLength": 0.26,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000063",
    "shortId": "C063",
    "fullName": "Elijah Stratton",
    "email": "cust000063@domain.org",
    "age": 58,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "16.0 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 92437.0,
    "cardType": "Gold Preferred",
    "creditLimit": 25000.0,
    "outstandingBalance": 1275.0,
    "creditUtilization": 0.051,
    "utilization_rate": 0.051,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 34.2,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 22.9,
    "monthlyAverageSpend": 1211.25,
    "creditLines": 5,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 362.07,
        "minPaymentDue": 28.69,
        "balance": 1147.5
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 207.45,
        "minPaymentDue": 29.33,
        "balance": 1173.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 181.42,
        "minPaymentDue": 29.96,
        "balance": 1198.5
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 437.34,
        "minPaymentDue": 30.6,
        "balance": 1224.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 254.77,
        "minPaymentDue": 31.24,
        "balance": 1249.5
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 276.36,
        "minPaymentDue": 31.88,
        "balance": 1275.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2023-09-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0276,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.178,
    "riskIndicators": {
      "creditUtilization": 0.05,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.18,
      "creditHistoryLength": 1.0,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000064",
    "shortId": "C064",
    "fullName": "Addison Caldwell",
    "email": "cust000064@domain.org",
    "age": 31,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "10.5 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 168706.0,
    "cardType": "Platinum Signature",
    "creditLimit": 35000.0,
    "outstandingBalance": 9590.0,
    "creditUtilization": 0.274,
    "utilization_rate": 0.274,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 18.9,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 4.2,
    "monthlyAverageSpend": 9110.5,
    "creditLines": 6,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3426.03,
        "minPaymentDue": 215.78,
        "balance": 8631.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3172.88,
        "minPaymentDue": 220.57,
        "balance": 8822.8
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1782.72,
        "minPaymentDue": 225.37,
        "balance": 9014.6
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3479.95,
        "minPaymentDue": 230.16,
        "balance": 9206.4
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3291.78,
        "minPaymentDue": 234.96,
        "balance": 9398.2
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3014.91,
        "minPaymentDue": 239.75,
        "balance": 9590.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2024-01-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0518,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.143,
    "riskIndicators": {
      "creditUtilization": 0.27,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.14,
      "creditHistoryLength": 0.21,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000065",
    "shortId": "C065",
    "fullName": "Abigail Yardley",
    "email": "cust000065@domain.org",
    "age": 53,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "11.2 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 135191.0,
    "cardType": "Silver Rewards",
    "creditLimit": 15000.0,
    "outstandingBalance": 11505.0,
    "creditUtilization": 0.767,
    "utilization_rate": 0.767,
    "delayedPayments6M": 1,
    "paymentToMinRatio": 2.9,
    "cashAdvanceCount6M": 4,
    "creditHistoryYears": 10.6,
    "monthlyAverageSpend": 10929.75,
    "creditLines": 3,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 977.18,
        "minPaymentDue": 258.86,
        "balance": 10354.5
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1076.03,
        "minPaymentDue": 264.62,
        "balance": 10584.6
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1564.12,
        "minPaymentDue": 270.37,
        "balance": 10814.7
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1942.9,
        "minPaymentDue": 276.12,
        "balance": 11044.8
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2083.03,
        "minPaymentDue": 281.87,
        "balance": 11274.9
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 230.1,
        "minPaymentDue": 287.62,
        "balance": 11505.0
      }
    ],
    "segment": "High-Risk Revolvers",
    "joinedDate": "2025-02-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0721,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.544,
    "riskIndicators": {
      "creditUtilization": 0.77,
      "paymentHistoryRisk": 0.22,
      "outstandingDebt": 0.54,
      "creditHistoryLength": 0.53,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000066",
    "shortId": "C066",
    "fullName": "Lily Lancaster",
    "email": "cust000066@domain.org",
    "age": 57,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "2.1 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 116145.0,
    "cardType": "Gold Preferred",
    "creditLimit": 30000.0,
    "outstandingBalance": 8220.0,
    "creditUtilization": 0.274,
    "utilization_rate": 0.274,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 26.8,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 12.6,
    "monthlyAverageSpend": 7809.0,
    "creditLines": 4,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 777.09,
        "minPaymentDue": 184.95,
        "balance": 7398.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1300.72,
        "minPaymentDue": 189.06,
        "balance": 7562.4
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1676.61,
        "minPaymentDue": 193.17,
        "balance": 7726.8
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1631.84,
        "minPaymentDue": 197.28,
        "balance": 7891.2
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2030.62,
        "minPaymentDue": 201.39,
        "balance": 8055.6
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1788.17,
        "minPaymentDue": 205.5,
        "balance": 8220.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2021-03-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0333,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.215,
    "riskIndicators": {
      "creditUtilization": 0.27,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.21,
      "creditHistoryLength": 0.63,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000067",
    "shortId": "C067",
    "fullName": "Harper Beaumont",
    "email": "cust000067@domain.org",
    "age": 43,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "16.4 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 88404.0,
    "cardType": "Gold Preferred",
    "creditLimit": 25000.0,
    "outstandingBalance": 13850.0,
    "creditUtilization": 0.554,
    "utilization_rate": 0.554,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 7.5,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 16.1,
    "monthlyAverageSpend": 13157.5,
    "creditLines": 5,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 812.45,
        "minPaymentDue": 311.62,
        "balance": 12465.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2828.75,
        "minPaymentDue": 318.55,
        "balance": 12742.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 5045.53,
        "minPaymentDue": 325.48,
        "balance": 13019.0
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 4216.55,
        "minPaymentDue": 332.4,
        "balance": 13296.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 4186.2,
        "minPaymentDue": 339.33,
        "balance": 13573.0
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3292.58,
        "minPaymentDue": 346.25,
        "balance": 13850.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2022-04-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0105,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.243,
    "riskIndicators": {
      "creditUtilization": 0.55,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.24,
      "creditHistoryLength": 0.81,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000068",
    "shortId": "C068",
    "fullName": "Elijah Jennings",
    "email": "cust000068@domain.org",
    "age": 46,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "16.0 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 148490.0,
    "cardType": "Gold Preferred",
    "creditLimit": 25000.0,
    "outstandingBalance": 4425.0,
    "creditUtilization": 0.177,
    "utilization_rate": 0.177,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 36.0,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 21.3,
    "monthlyAverageSpend": 4203.75,
    "creditLines": 6,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1476.4,
        "minPaymentDue": 99.56,
        "balance": 3982.5
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1279.42,
        "minPaymentDue": 101.78,
        "balance": 4071.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 310.8,
        "minPaymentDue": 103.99,
        "balance": 4159.5
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 419.81,
        "minPaymentDue": 106.2,
        "balance": 4248.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 519.41,
        "minPaymentDue": 108.41,
        "balance": 4336.5
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 688.68,
        "minPaymentDue": 110.62,
        "balance": 4425.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2023-05-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0111,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.112,
    "riskIndicators": {
      "creditUtilization": 0.18,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.11,
      "creditHistoryLength": 1.0,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000069",
    "shortId": "C069",
    "fullName": "Victoria Nakamura",
    "email": "cust000069@domain.org",
    "age": 44,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "20.1 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 111862.0,
    "cardType": "Gold Preferred",
    "creditLimit": 22000.0,
    "outstandingBalance": 11462.0,
    "creditUtilization": 0.521,
    "utilization_rate": 0.521,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 11.6,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 14.2,
    "monthlyAverageSpend": 10888.9,
    "creditLines": 3,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2360.44,
        "minPaymentDue": 257.89,
        "balance": 10315.8
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2661.0,
        "minPaymentDue": 263.63,
        "balance": 10545.04
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 4054.2,
        "minPaymentDue": 269.36,
        "balance": 10774.28
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3261.41,
        "minPaymentDue": 275.09,
        "balance": 11003.52
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1645.16,
        "minPaymentDue": 280.82,
        "balance": 11232.76
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2709.39,
        "minPaymentDue": 286.55,
        "balance": 11462.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2024-06-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0194,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.29,
    "riskIndicators": {
      "creditUtilization": 0.52,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.29,
      "creditHistoryLength": 0.71,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000070",
    "shortId": "C070",
    "fullName": "Aria Zimmerman",
    "email": "cust000070@domain.org",
    "age": 67,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "3.6 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 200966.0,
    "cardType": "Platinum Signature",
    "creditLimit": 35000.0,
    "outstandingBalance": 7665.0,
    "creditUtilization": 0.219,
    "utilization_rate": 0.219,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 21.4,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 20.6,
    "monthlyAverageSpend": 7281.75,
    "creditLines": 4,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2051.84,
        "minPaymentDue": 172.46,
        "balance": 6898.5
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1706.1,
        "minPaymentDue": 176.3,
        "balance": 7051.8
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1972.4,
        "minPaymentDue": 180.13,
        "balance": 7205.1
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 514.0,
        "minPaymentDue": 183.96,
        "balance": 7358.4
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1412.8,
        "minPaymentDue": 187.79,
        "balance": 7511.7
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2170.22,
        "minPaymentDue": 191.62,
        "balance": 7665.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2025-07-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0781,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.221,
    "riskIndicators": {
      "creditUtilization": 0.22,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.22,
      "creditHistoryLength": 1.0,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000071",
    "shortId": "C071",
    "fullName": "Eleanor Lancaster",
    "email": "cust000071@domain.org",
    "age": 52,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "3.9 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 68071.0,
    "cardType": "Gold Preferred",
    "creditLimit": 22000.0,
    "outstandingBalance": 9372.0,
    "creditUtilization": 0.426,
    "utilization_rate": 0.426,
    "delayedPayments6M": 1,
    "paymentToMinRatio": 4.0,
    "cashAdvanceCount6M": 2,
    "creditHistoryYears": 10.8,
    "monthlyAverageSpend": 8903.4,
    "creditLines": 5,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3015.59,
        "minPaymentDue": 210.87,
        "balance": 8434.8
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2868.65,
        "minPaymentDue": 215.56,
        "balance": 8622.24
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1036.09,
        "minPaymentDue": 220.24,
        "balance": 8809.68
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2749.99,
        "minPaymentDue": 224.93,
        "balance": 8997.12
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3125.51,
        "minPaymentDue": 229.61,
        "balance": 9184.56
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 187.44,
        "minPaymentDue": 234.3,
        "balance": 9372.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2021-08-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0104,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.378,
    "riskIndicators": {
      "creditUtilization": 0.43,
      "paymentHistoryRisk": 0.22,
      "outstandingDebt": 0.38,
      "creditHistoryLength": 0.54,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000072",
    "shortId": "C072",
    "fullName": "Audrey O'Sullivan",
    "email": "cust000072@domain.org",
    "age": 51,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "20.5 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 49802.0,
    "cardType": "Classic Access",
    "creditLimit": 5000.0,
    "outstandingBalance": 2240.0,
    "creditUtilization": 0.448,
    "utilization_rate": 0.448,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 7.1,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 13.0,
    "monthlyAverageSpend": 2128.0,
    "creditLines": 6,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 648.26,
        "minPaymentDue": 50.4,
        "balance": 2016.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 687.68,
        "minPaymentDue": 51.52,
        "balance": 2060.8
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 525.34,
        "minPaymentDue": 52.64,
        "balance": 2105.6
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 663.3,
        "minPaymentDue": 53.76,
        "balance": 2150.4
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 239.76,
        "minPaymentDue": 54.88,
        "balance": 2195.2
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 735.27,
        "minPaymentDue": 56.0,
        "balance": 2240.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2022-09-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 1,
    "calibratedProbability": 0.0569,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": true,
    "debt_to_income_est": 0.26,
    "riskIndicators": {
      "creditUtilization": 0.45,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.26,
      "creditHistoryLength": 0.65,
      "recentInquiries": 0.15
    },
    "notes": [
      {
        "id": "note-auto-72",
        "author": "Risk Underwriter (Trained Policy)",
        "date": "Oct 26, 2026",
        "text": "Account targeted by trained model (PD = 0.06). Decision: Standard Facility."
      }
    ]
  },
  {
    "id": "CUST000073",
    "shortId": "C073",
    "fullName": "Ryan Montague",
    "email": "cust000073@domain.org",
    "age": 30,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "9.1 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 71256.0,
    "cardType": "Silver Rewards",
    "creditLimit": 12000.0,
    "outstandingBalance": 4872.0,
    "creditUtilization": 0.406,
    "utilization_rate": 0.406,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 7.3,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 7.6,
    "monthlyAverageSpend": 4628.4,
    "creditLines": 3,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 980.51,
        "minPaymentDue": 109.62,
        "balance": 4384.8
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 496.5,
        "minPaymentDue": 112.06,
        "balance": 4482.24
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1329.93,
        "minPaymentDue": 114.49,
        "balance": 4579.68
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1705.25,
        "minPaymentDue": 116.93,
        "balance": 4677.12
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1649.34,
        "minPaymentDue": 119.36,
        "balance": 4774.56
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1462.57,
        "minPaymentDue": 121.8,
        "balance": 4872.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2023-01-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.1973,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.288,
    "riskIndicators": {
      "creditUtilization": 0.41,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.29,
      "creditHistoryLength": 0.38,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000074",
    "shortId": "C074",
    "fullName": "Gabriel Prescott",
    "email": "cust000074@domain.org",
    "age": 31,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "5.2 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 94697.0,
    "cardType": "Gold Preferred",
    "creditLimit": 22000.0,
    "outstandingBalance": 10054.0,
    "creditUtilization": 0.457,
    "utilization_rate": 0.457,
    "delayedPayments6M": 1,
    "paymentToMinRatio": 11.3,
    "cashAdvanceCount6M": 1,
    "creditHistoryYears": 7.3,
    "monthlyAverageSpend": 9551.3,
    "creditLines": 4,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1684.85,
        "minPaymentDue": 226.22,
        "balance": 9048.6
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3499.84,
        "minPaymentDue": 231.24,
        "balance": 9249.68
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 869.35,
        "minPaymentDue": 236.27,
        "balance": 9450.76
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3210.76,
        "minPaymentDue": 241.3,
        "balance": 9651.84
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3452.93,
        "minPaymentDue": 246.32,
        "balance": 9852.92
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 201.08,
        "minPaymentDue": 251.35,
        "balance": 10054.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2024-02-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0276,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.376,
    "riskIndicators": {
      "creditUtilization": 0.46,
      "paymentHistoryRisk": 0.22,
      "outstandingDebt": 0.38,
      "creditHistoryLength": 0.36,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000075",
    "shortId": "C075",
    "fullName": "Elijah Montague",
    "email": "cust000075@domain.org",
    "age": 35,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "11.7 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 60035.0,
    "cardType": "Classic Access",
    "creditLimit": 3000.0,
    "outstandingBalance": 2880.0,
    "creditUtilization": 0.96,
    "utilization_rate": 0.96,
    "delayedPayments6M": 5,
    "paymentToMinRatio": 1.53,
    "cashAdvanceCount6M": 3,
    "creditHistoryYears": 8.5,
    "monthlyAverageSpend": 2736.0,
    "creditLines": 5,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 908.2,
        "minPaymentDue": 64.8,
        "balance": 2592.0
      },
      {
        "month": "Jun 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 57.6,
        "minPaymentDue": 66.24,
        "balance": 2649.6
      },
      {
        "month": "Jul 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 57.6,
        "minPaymentDue": 67.68,
        "balance": 2707.2
      },
      {
        "month": "Aug 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 57.6,
        "minPaymentDue": 69.12,
        "balance": 2764.8
      },
      {
        "month": "Sep 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 57.6,
        "minPaymentDue": 70.56,
        "balance": 2822.4
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 57.6,
        "minPaymentDue": 72.0,
        "balance": 2880.0
      }
    ],
    "segment": "High-Risk Revolvers",
    "joinedDate": "2025-03-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 1,
    "calibratedProbability": 0.9393,
    "riskTier": "High",
    "decisionPolicy": "Curtail Line (-30%)",
    "targetedForSurveillance": true,
    "debt_to_income_est": 0.616,
    "riskIndicators": {
      "creditUtilization": 0.96,
      "paymentHistoryRisk": 0.85,
      "outstandingDebt": 0.62,
      "creditHistoryLength": 0.42,
      "recentInquiries": 0.55
    },
    "notes": [
      {
        "id": "note-auto-75",
        "author": "Risk Underwriter (Trained Policy)",
        "date": "Oct 26, 2026",
        "text": "Account targeted by trained model (PD = 0.94). Decision: Curtail Line (-30%)."
      }
    ]
  },
  {
    "id": "CUST000076",
    "shortId": "C076",
    "fullName": "Hunter Mercer",
    "email": "cust000076@domain.org",
    "age": 52,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "19.7 yrs (OTHER)",
    "employerCategory": "Professional Services",
    "annualIncome": 192182.0,
    "cardType": "Gold Preferred",
    "creditLimit": 30000.0,
    "outstandingBalance": 6750.0,
    "creditUtilization": 0.225,
    "utilization_rate": 0.225,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 38.0,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 11.6,
    "monthlyAverageSpend": 6412.5,
    "creditLines": 6,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2452.59,
        "minPaymentDue": 151.88,
        "balance": 6075.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2256.05,
        "minPaymentDue": 155.25,
        "balance": 6210.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 629.25,
        "minPaymentDue": 158.62,
        "balance": 6345.0
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2224.75,
        "minPaymentDue": 162.0,
        "balance": 6480.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 597.75,
        "minPaymentDue": 165.38,
        "balance": 6615.0
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2515.56,
        "minPaymentDue": 168.75,
        "balance": 6750.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2021-04-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0231,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.246,
    "riskIndicators": {
      "creditUtilization": 0.23,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.25,
      "creditHistoryLength": 0.58,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000077",
    "shortId": "C077",
    "fullName": "Elizabeth Vance",
    "email": "cust000077@domain.org",
    "age": 65,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "1.0 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 55795.0,
    "cardType": "Silver Rewards",
    "creditLimit": 10000.0,
    "outstandingBalance": 9450.0,
    "creditUtilization": 0.945,
    "utilization_rate": 0.945,
    "delayedPayments6M": 3,
    "paymentToMinRatio": 1.04,
    "cashAdvanceCount6M": 4,
    "creditHistoryYears": 36.1,
    "monthlyAverageSpend": 8977.5,
    "creditLines": 3,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3202.97,
        "minPaymentDue": 212.62,
        "balance": 8505.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1211.65,
        "minPaymentDue": 217.35,
        "balance": 8694.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 679.17,
        "minPaymentDue": 222.08,
        "balance": 8883.0
      },
      {
        "month": "Aug 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 189.0,
        "minPaymentDue": 226.8,
        "balance": 9072.0
      },
      {
        "month": "Sep 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 189.0,
        "minPaymentDue": 231.53,
        "balance": 9261.0
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 189.0,
        "minPaymentDue": 236.25,
        "balance": 9450.0
      }
    ],
    "segment": "High-Risk Revolvers",
    "joinedDate": "2022-05-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.9436,
    "riskTier": "High",
    "decisionPolicy": "Curtail Line (-30%)",
    "targetedForSurveillance": true,
    "debt_to_income_est": 0.527,
    "riskIndicators": {
      "creditUtilization": 0.94,
      "paymentHistoryRisk": 0.85,
      "outstandingDebt": 0.53,
      "creditHistoryLength": 1.0,
      "recentInquiries": 0.55
    },
    "notes": [
      {
        "id": "note-auto-77",
        "author": "Risk Underwriter (Trained Policy)",
        "date": "Oct 26, 2026",
        "text": "Account targeted by trained model (PD = 0.94). Decision: Curtail Line (-30%)."
      }
    ]
  },
  {
    "id": "CUST000078",
    "shortId": "C078",
    "fullName": "David Xavier",
    "email": "cust000078@domain.org",
    "age": 35,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "9.1 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 31699.0,
    "cardType": "Classic Access",
    "creditLimit": 5000.0,
    "outstandingBalance": 4405.0,
    "creditUtilization": 0.881,
    "utilization_rate": 0.881,
    "delayedPayments6M": 4,
    "paymentToMinRatio": 0.73,
    "cashAdvanceCount6M": 2,
    "creditHistoryYears": 6.3,
    "monthlyAverageSpend": 4184.75,
    "creditLines": 4,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1165.37,
        "minPaymentDue": 99.11,
        "balance": 3964.5
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 536.68,
        "minPaymentDue": 101.31,
        "balance": 4052.6
      },
      {
        "month": "Jul 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 88.1,
        "minPaymentDue": 103.52,
        "balance": 4140.7
      },
      {
        "month": "Aug 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 88.1,
        "minPaymentDue": 105.72,
        "balance": 4228.8
      },
      {
        "month": "Sep 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 88.1,
        "minPaymentDue": 107.92,
        "balance": 4316.9
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 88.1,
        "minPaymentDue": 110.12,
        "balance": 4405.0
      }
    ],
    "segment": "High-Risk Revolvers",
    "joinedDate": "2023-06-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 1,
    "calibratedProbability": 0.6777,
    "riskTier": "High",
    "decisionPolicy": "Curtail Line (-30%)",
    "targetedForSurveillance": true,
    "debt_to_income_est": 0.755,
    "riskIndicators": {
      "creditUtilization": 0.88,
      "paymentHistoryRisk": 0.85,
      "outstandingDebt": 0.76,
      "creditHistoryLength": 0.32,
      "recentInquiries": 0.55
    },
    "notes": [
      {
        "id": "note-auto-78",
        "author": "Risk Underwriter (Trained Policy)",
        "date": "Oct 26, 2026",
        "text": "Account targeted by trained model (PD = 0.68). Decision: Curtail Line (-30%)."
      }
    ]
  },
  {
    "id": "CUST000079",
    "shortId": "C079",
    "fullName": "Lillian Lancaster",
    "email": "cust000079@domain.org",
    "age": 63,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "1.5 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 106498.0,
    "cardType": "Gold Preferred",
    "creditLimit": 22000.0,
    "outstandingBalance": 12100.0,
    "creditUtilization": 0.55,
    "utilization_rate": 0.55,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 4.8,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 34.1,
    "monthlyAverageSpend": 11495.0,
    "creditLines": 5,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2816.58,
        "minPaymentDue": 272.25,
        "balance": 10890.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 4410.82,
        "minPaymentDue": 278.3,
        "balance": 11132.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2796.53,
        "minPaymentDue": 284.35,
        "balance": 11374.0
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1132.32,
        "minPaymentDue": 290.4,
        "balance": 11616.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1560.04,
        "minPaymentDue": 296.45,
        "balance": 11858.0
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1404.62,
        "minPaymentDue": 302.5,
        "balance": 12100.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2024-07-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.01,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.308,
    "riskIndicators": {
      "creditUtilization": 0.55,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.31,
      "creditHistoryLength": 1.0,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000080",
    "shortId": "C080",
    "fullName": "Gabriel Chen",
    "email": "cust000080@domain.org",
    "age": 39,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "16.1 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 95367.0,
    "cardType": "Gold Preferred",
    "creditLimit": 25000.0,
    "outstandingBalance": 2125.0,
    "creditUtilization": 0.085,
    "utilization_rate": 0.085,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 37.9,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 8.3,
    "monthlyAverageSpend": 2018.75,
    "creditLines": 6,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 618.27,
        "minPaymentDue": 47.81,
        "balance": 1912.5
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 622.0,
        "minPaymentDue": 48.88,
        "balance": 1955.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 627.15,
        "minPaymentDue": 49.94,
        "balance": 1997.5
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 737.72,
        "minPaymentDue": 51.0,
        "balance": 2040.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 586.61,
        "minPaymentDue": 52.06,
        "balance": 2082.5
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 592.23,
        "minPaymentDue": 53.12,
        "balance": 2125.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2025-08-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0306,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.203,
    "riskIndicators": {
      "creditUtilization": 0.09,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.2,
      "creditHistoryLength": 0.42,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000081",
    "shortId": "C081",
    "fullName": "Grace Ashford",
    "email": "cust000081@domain.org",
    "age": 38,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "12.0 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 215358.0,
    "cardType": "Platinum Signature",
    "creditLimit": 40000.0,
    "outstandingBalance": 2560.0,
    "creditUtilization": 0.064,
    "utilization_rate": 0.064,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 44.4,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 13.4,
    "monthlyAverageSpend": 2432.0,
    "creditLines": 3,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 141.49,
        "minPaymentDue": 57.6,
        "balance": 2304.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 588.36,
        "minPaymentDue": 58.88,
        "balance": 2355.2
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 613.91,
        "minPaymentDue": 60.16,
        "balance": 2406.4
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 727.05,
        "minPaymentDue": 61.44,
        "balance": 2457.6
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 373.6,
        "minPaymentDue": 62.72,
        "balance": 2508.8
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 291.23,
        "minPaymentDue": 64.0,
        "balance": 2560.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2021-09-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0632,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.16,
    "riskIndicators": {
      "creditUtilization": 0.06,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.16,
      "creditHistoryLength": 0.67,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000082",
    "shortId": "C082",
    "fullName": "Nathan Lancaster",
    "email": "cust000082@domain.org",
    "age": 53,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "20.8 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 53027.0,
    "cardType": "Classic Access",
    "creditLimit": 5000.0,
    "outstandingBalance": 2230.0,
    "creditUtilization": 0.446,
    "utilization_rate": 0.446,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 6.4,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 27.3,
    "monthlyAverageSpend": 2118.5,
    "creditLines": 4,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 491.23,
        "minPaymentDue": 50.18,
        "balance": 2007.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 719.61,
        "minPaymentDue": 51.29,
        "balance": 2051.6
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 165.37,
        "minPaymentDue": 52.41,
        "balance": 2096.2
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 704.34,
        "minPaymentDue": 53.52,
        "balance": 2140.8
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 146.66,
        "minPaymentDue": 54.64,
        "balance": 2185.4
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 116.13,
        "minPaymentDue": 55.75,
        "balance": 2230.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2022-01-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.1665,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.24,
    "riskIndicators": {
      "creditUtilization": 0.45,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.24,
      "creditHistoryLength": 1.0,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000083",
    "shortId": "C083",
    "fullName": "Olivia Villarreal",
    "email": "cust000083@domain.org",
    "age": 45,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "0.7 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 211669.0,
    "cardType": "Platinum Signature",
    "creditLimit": 40000.0,
    "outstandingBalance": 1760.0,
    "creditUtilization": 0.044,
    "utilization_rate": 0.044,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 31.0,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 19.0,
    "monthlyAverageSpend": 1672.0,
    "creditLines": 5,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 608.39,
        "minPaymentDue": 39.6,
        "balance": 1584.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 149.21,
        "minPaymentDue": 40.48,
        "balance": 1619.2
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 143.09,
        "minPaymentDue": 41.36,
        "balance": 1654.4
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 173.17,
        "minPaymentDue": 42.24,
        "balance": 1689.6
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 197.79,
        "minPaymentDue": 43.12,
        "balance": 1724.8
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 389.13,
        "minPaymentDue": 44.0,
        "balance": 1760.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2023-02-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.01,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.15,
    "riskIndicators": {
      "creditUtilization": 0.04,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.15,
      "creditHistoryLength": 0.95,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000084",
    "shortId": "C084",
    "fullName": "Emma Thorne",
    "email": "cust000084@domain.org",
    "age": 66,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "10.4 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 106133.0,
    "cardType": "Gold Preferred",
    "creditLimit": 25000.0,
    "outstandingBalance": 1550.0,
    "creditUtilization": 0.062,
    "utilization_rate": 0.062,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 26.4,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 22.4,
    "monthlyAverageSpend": 1472.5,
    "creditLines": 6,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 569.83,
        "minPaymentDue": 34.88,
        "balance": 1395.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 568.07,
        "minPaymentDue": 35.65,
        "balance": 1426.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 528.25,
        "minPaymentDue": 36.43,
        "balance": 1457.0
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 540.52,
        "minPaymentDue": 37.2,
        "balance": 1488.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 193.24,
        "minPaymentDue": 37.98,
        "balance": 1519.0
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 531.52,
        "minPaymentDue": 38.75,
        "balance": 1550.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2024-03-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 1,
    "calibratedProbability": 0.01,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": true,
    "debt_to_income_est": 0.174,
    "riskIndicators": {
      "creditUtilization": 0.06,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.17,
      "creditHistoryLength": 1.0,
      "recentInquiries": 0.15
    },
    "notes": [
      {
        "id": "note-auto-84",
        "author": "Risk Underwriter (Trained Policy)",
        "date": "Oct 26, 2026",
        "text": "Account targeted by trained model (PD = 0.01). Decision: Standard Facility."
      }
    ]
  },
  {
    "id": "CUST000085",
    "shortId": "C085",
    "fullName": "Scarlett Hawthorne",
    "email": "cust000085@domain.org",
    "age": 56,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "2.1 yrs (OWN)",
    "employerCategory": "Professional Services",
    "annualIncome": 57156.0,
    "cardType": "Silver Rewards",
    "creditLimit": 18000.0,
    "outstandingBalance": 11268.0,
    "creditUtilization": 0.626,
    "utilization_rate": 0.626,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 3.6,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 22.2,
    "monthlyAverageSpend": 10704.6,
    "creditLines": 3,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3674.14,
        "minPaymentDue": 253.53,
        "balance": 10141.2
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3042.77,
        "minPaymentDue": 259.16,
        "balance": 10366.56
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2542.99,
        "minPaymentDue": 264.8,
        "balance": 10591.92
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1969.08,
        "minPaymentDue": 270.43,
        "balance": 10817.28
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3272.42,
        "minPaymentDue": 276.07,
        "balance": 11042.64
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3458.28,
        "minPaymentDue": 281.7,
        "balance": 11268.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2025-04-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0211,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.277,
    "riskIndicators": {
      "creditUtilization": 0.63,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.28,
      "creditHistoryLength": 1.0,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000086",
    "shortId": "C086",
    "fullName": "Brooklyn Xavier",
    "email": "cust000086@domain.org",
    "age": 26,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "1.7 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 188993.0,
    "cardType": "Platinum Signature",
    "creditLimit": 35000.0,
    "outstandingBalance": 1645.0,
    "creditUtilization": 0.047,
    "utilization_rate": 0.047,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 23.2,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 2.7,
    "monthlyAverageSpend": 1562.75,
    "creditLines": 4,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 412.93,
        "minPaymentDue": 37.01,
        "balance": 1480.5
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 508.85,
        "minPaymentDue": 37.84,
        "balance": 1513.4
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 463.44,
        "minPaymentDue": 38.66,
        "balance": 1546.3
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 126.09,
        "minPaymentDue": 39.48,
        "balance": 1579.2
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 164.68,
        "minPaymentDue": 40.3,
        "balance": 1612.1
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 462.67,
        "minPaymentDue": 41.12,
        "balance": 1645.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2021-05-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0354,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.249,
    "riskIndicators": {
      "creditUtilization": 0.05,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.25,
      "creditHistoryLength": 0.14,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000087",
    "shortId": "C087",
    "fullName": "Victoria Thorne",
    "email": "cust000087@domain.org",
    "age": 50,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "2.5 yrs (OWN)",
    "employerCategory": "Professional Services",
    "annualIncome": 155717.0,
    "cardType": "Gold Preferred",
    "creditLimit": 25000.0,
    "outstandingBalance": 1800.0,
    "creditUtilization": 0.072,
    "utilization_rate": 0.072,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 20.6,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 22.2,
    "monthlyAverageSpend": 1710.0,
    "creditLines": 5,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 595.28,
        "minPaymentDue": 40.5,
        "balance": 1620.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 97.22,
        "minPaymentDue": 41.4,
        "balance": 1656.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 332.08,
        "minPaymentDue": 42.3,
        "balance": 1692.0
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 545.81,
        "minPaymentDue": 43.2,
        "balance": 1728.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 514.03,
        "minPaymentDue": 44.1,
        "balance": 1764.0
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 417.33,
        "minPaymentDue": 45.0,
        "balance": 1800.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2022-06-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0178,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.156,
    "riskIndicators": {
      "creditUtilization": 0.07,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.16,
      "creditHistoryLength": 1.0,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000088",
    "shortId": "C088",
    "fullName": "Aubrey Morales",
    "email": "cust000088@domain.org",
    "age": 31,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "6.3 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 198947.0,
    "cardType": "Platinum Signature",
    "creditLimit": 35000.0,
    "outstandingBalance": 4935.0,
    "creditUtilization": 0.141,
    "utilization_rate": 0.141,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 29.5,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 5.9,
    "monthlyAverageSpend": 4688.25,
    "creditLines": 6,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1768.62,
        "minPaymentDue": 111.04,
        "balance": 4441.5
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 779.62,
        "minPaymentDue": 113.5,
        "balance": 4540.2
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1241.51,
        "minPaymentDue": 115.97,
        "balance": 4638.9
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1536.45,
        "minPaymentDue": 118.44,
        "balance": 4737.6
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 775.33,
        "minPaymentDue": 120.91,
        "balance": 4836.3
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 783.66,
        "minPaymentDue": 123.38,
        "balance": 4935.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2023-07-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0161,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.093,
    "riskIndicators": {
      "creditUtilization": 0.14,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.09,
      "creditHistoryLength": 0.3,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000089",
    "shortId": "C089",
    "fullName": "Chloe Montague",
    "email": "cust000089@domain.org",
    "age": 42,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "20.9 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 189396.0,
    "cardType": "Platinum Signature",
    "creditLimit": 35000.0,
    "outstandingBalance": 3850.0,
    "creditUtilization": 0.11,
    "utilization_rate": 0.11,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 35.8,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 18.4,
    "monthlyAverageSpend": 3657.5,
    "creditLines": 3,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 442.5,
        "minPaymentDue": 86.62,
        "balance": 3465.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1440.33,
        "minPaymentDue": 88.55,
        "balance": 3542.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 417.63,
        "minPaymentDue": 90.48,
        "balance": 3619.0
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1152.98,
        "minPaymentDue": 92.4,
        "balance": 3696.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 226.18,
        "minPaymentDue": 94.33,
        "balance": 3773.0
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1102.43,
        "minPaymentDue": 96.25,
        "balance": 3850.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2024-08-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0122,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.163,
    "riskIndicators": {
      "creditUtilization": 0.11,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.16,
      "creditHistoryLength": 0.92,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000090",
    "shortId": "C090",
    "fullName": "Owen Underwood",
    "email": "cust000090@domain.org",
    "age": 48,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "18.1 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 64121.0,
    "cardType": "Gold Preferred",
    "creditLimit": 22000.0,
    "outstandingBalance": 8800.0,
    "creditUtilization": 0.4,
    "utilization_rate": 0.4,
    "delayedPayments6M": 1,
    "paymentToMinRatio": 4.8,
    "cashAdvanceCount6M": 4,
    "creditHistoryYears": 20.9,
    "monthlyAverageSpend": 8360.0,
    "creditLines": 4,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1468.25,
        "minPaymentDue": 198.0,
        "balance": 7920.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3001.13,
        "minPaymentDue": 202.4,
        "balance": 8096.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1975.55,
        "minPaymentDue": 206.8,
        "balance": 8272.0
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2265.2,
        "minPaymentDue": 211.2,
        "balance": 8448.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 683.05,
        "minPaymentDue": 215.6,
        "balance": 8624.0
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 176.0,
        "minPaymentDue": 220.0,
        "balance": 8800.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2025-09-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0296,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.316,
    "riskIndicators": {
      "creditUtilization": 0.4,
      "paymentHistoryRisk": 0.22,
      "outstandingDebt": 0.32,
      "creditHistoryLength": 1.0,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000091",
    "shortId": "C091",
    "fullName": "Elijah Radcliffe",
    "email": "cust000091@domain.org",
    "age": 65,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "1.5 yrs (OTHER)",
    "employerCategory": "Professional Services",
    "annualIncome": 104327.0,
    "cardType": "Gold Preferred",
    "creditLimit": 22000.0,
    "outstandingBalance": 14058.0,
    "creditUtilization": 0.639,
    "utilization_rate": 0.639,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 4.4,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 27.9,
    "monthlyAverageSpend": 13355.1,
    "creditLines": 5,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2989.45,
        "minPaymentDue": 316.31,
        "balance": 12652.2
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2279.0,
        "minPaymentDue": 323.33,
        "balance": 12933.36
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 815.12,
        "minPaymentDue": 330.36,
        "balance": 13214.52
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1180.57,
        "minPaymentDue": 337.39,
        "balance": 13495.68
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2603.43,
        "minPaymentDue": 344.42,
        "balance": 13776.84
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 5096.89,
        "minPaymentDue": 351.45,
        "balance": 14058.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2021-01-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.014,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.258,
    "riskIndicators": {
      "creditUtilization": 0.64,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.26,
      "creditHistoryLength": 1.0,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000092",
    "shortId": "C092",
    "fullName": "Aria Abdi",
    "email": "cust000092@domain.org",
    "age": 52,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "10.3 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 110591.0,
    "cardType": "Platinum Signature",
    "creditLimit": 40000.0,
    "outstandingBalance": 8520.0,
    "creditUtilization": 0.213,
    "utilization_rate": 0.213,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 28.6,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 13.0,
    "monthlyAverageSpend": 8094.0,
    "creditLines": 6,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3150.42,
        "minPaymentDue": 191.7,
        "balance": 7668.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1101.39,
        "minPaymentDue": 195.96,
        "balance": 7838.4
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 909.06,
        "minPaymentDue": 200.22,
        "balance": 8008.8
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 869.42,
        "minPaymentDue": 204.48,
        "balance": 8179.2
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1976.22,
        "minPaymentDue": 208.74,
        "balance": 8349.6
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3079.98,
        "minPaymentDue": 213.0,
        "balance": 8520.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2022-02-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0272,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.091,
    "riskIndicators": {
      "creditUtilization": 0.21,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.09,
      "creditHistoryLength": 0.65,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000093",
    "shortId": "C093",
    "fullName": "Daniel Nakamura",
    "email": "cust000093@domain.org",
    "age": 61,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "14.6 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 128926.0,
    "cardType": "Gold Preferred",
    "creditLimit": 28000.0,
    "outstandingBalance": 23296.0,
    "creditUtilization": 0.832,
    "utilization_rate": 0.832,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 3.5,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 16.9,
    "monthlyAverageSpend": 22131.2,
    "creditLines": 3,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3632.9,
        "minPaymentDue": 524.16,
        "balance": 20966.4
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 4629.01,
        "minPaymentDue": 535.81,
        "balance": 21432.32
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3151.13,
        "minPaymentDue": 547.46,
        "balance": 21898.24
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 7695.99,
        "minPaymentDue": 559.1,
        "balance": 22364.16
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 5160.24,
        "minPaymentDue": 570.75,
        "balance": 22830.08
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 6003.62,
        "minPaymentDue": 582.4,
        "balance": 23296.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2023-03-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0693,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.415,
    "riskIndicators": {
      "creditUtilization": 0.83,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.41,
      "creditHistoryLength": 0.84,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000094",
    "shortId": "C094",
    "fullName": "Thomas Patel",
    "email": "cust000094@domain.org",
    "age": 33,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "8.1 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 47493.0,
    "cardType": "Classic Access",
    "creditLimit": 3000.0,
    "outstandingBalance": 2742.0,
    "creditUtilization": 0.914,
    "utilization_rate": 0.914,
    "delayedPayments6M": 4,
    "paymentToMinRatio": 0.57,
    "cashAdvanceCount6M": 2,
    "creditHistoryYears": 7.7,
    "monthlyAverageSpend": 2604.9,
    "creditLines": 4,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 570.8,
        "minPaymentDue": 61.7,
        "balance": 2467.8
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 615.99,
        "minPaymentDue": 63.07,
        "balance": 2522.64
      },
      {
        "month": "Jul 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 54.84,
        "minPaymentDue": 64.44,
        "balance": 2577.48
      },
      {
        "month": "Aug 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 54.84,
        "minPaymentDue": 65.81,
        "balance": 2632.32
      },
      {
        "month": "Sep 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 54.84,
        "minPaymentDue": 67.18,
        "balance": 2687.16
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 54.84,
        "minPaymentDue": 68.55,
        "balance": 2742.0
      }
    ],
    "segment": "High-Risk Revolvers",
    "joinedDate": "2024-04-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 1,
    "calibratedProbability": 0.9825,
    "riskTier": "High",
    "decisionPolicy": "Curtail Line (-30%)",
    "targetedForSurveillance": true,
    "debt_to_income_est": 0.572,
    "riskIndicators": {
      "creditUtilization": 0.91,
      "paymentHistoryRisk": 0.85,
      "outstandingDebt": 0.57,
      "creditHistoryLength": 0.39,
      "recentInquiries": 0.55
    },
    "notes": [
      {
        "id": "note-auto-94",
        "author": "Risk Underwriter (Trained Policy)",
        "date": "Oct 26, 2026",
        "text": "Account targeted by trained model (PD = 0.98). Decision: Curtail Line (-30%)."
      }
    ]
  },
  {
    "id": "CUST000095",
    "shortId": "C095",
    "fullName": "Daniel Montague",
    "email": "cust000095@domain.org",
    "age": 44,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "10.2 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 47879.0,
    "cardType": "Classic Access",
    "creditLimit": 2000.0,
    "outstandingBalance": 656.0,
    "creditUtilization": 0.328,
    "utilization_rate": 0.328,
    "delayedPayments6M": 1,
    "paymentToMinRatio": 7.8,
    "cashAdvanceCount6M": 4,
    "creditHistoryYears": 15.2,
    "monthlyAverageSpend": 623.2,
    "creditLines": 5,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 432.13,
        "minPaymentDue": 14.76,
        "balance": 590.4
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 170.34,
        "minPaymentDue": 15.09,
        "balance": 603.52
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 84.88,
        "minPaymentDue": 15.42,
        "balance": 616.64
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 172.3,
        "minPaymentDue": 15.74,
        "balance": 629.76
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 201.34,
        "minPaymentDue": 16.07,
        "balance": 642.88
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 28.0,
        "minPaymentDue": 16.4,
        "balance": 656.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2025-05-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.2933,
    "riskTier": "Medium",
    "decisionPolicy": "Surveillance Watch",
    "targetedForSurveillance": true,
    "debt_to_income_est": 0.266,
    "riskIndicators": {
      "creditUtilization": 0.33,
      "paymentHistoryRisk": 0.57,
      "outstandingDebt": 0.27,
      "creditHistoryLength": 0.76,
      "recentInquiries": 0.15
    },
    "notes": [
      {
        "id": "note-auto-95",
        "author": "Risk Underwriter (Trained Policy)",
        "date": "Oct 26, 2026",
        "text": "Account targeted by trained model (PD = 0.29). Decision: Surveillance Watch."
      }
    ]
  },
  {
    "id": "CUST000096",
    "shortId": "C096",
    "fullName": "Leah Ingram",
    "email": "cust000096@domain.org",
    "age": 56,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "12.8 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 118085.0,
    "cardType": "Gold Preferred",
    "creditLimit": 28000.0,
    "outstandingBalance": 25368.0,
    "creditUtilization": 0.906,
    "utilization_rate": 0.906,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 3.7,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 28.0,
    "monthlyAverageSpend": 24099.6,
    "creditLines": 6,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1534.13,
        "minPaymentDue": 570.78,
        "balance": 22831.2
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3435.21,
        "minPaymentDue": 583.46,
        "balance": 23338.56
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 8376.89,
        "minPaymentDue": 596.15,
        "balance": 23845.92
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1985.54,
        "minPaymentDue": 608.83,
        "balance": 24353.28
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 8402.37,
        "minPaymentDue": 621.52,
        "balance": 24860.64
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2236.2,
        "minPaymentDue": 634.2,
        "balance": 25368.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2021-06-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0433,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.455,
    "riskIndicators": {
      "creditUtilization": 0.91,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.46,
      "creditHistoryLength": 1.0,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000097",
    "shortId": "C097",
    "fullName": "Samantha Quinn",
    "email": "cust000097@domain.org",
    "age": 35,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "4.1 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 31890.0,
    "cardType": "Classic Access",
    "creditLimit": 8000.0,
    "outstandingBalance": 7088.0,
    "creditUtilization": 0.886,
    "utilization_rate": 0.886,
    "delayedPayments6M": 6,
    "paymentToMinRatio": 1.15,
    "cashAdvanceCount6M": 1,
    "creditHistoryYears": 11.5,
    "monthlyAverageSpend": 6733.6,
    "creditLines": 3,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 141.76,
        "minPaymentDue": 159.48,
        "balance": 6379.2
      },
      {
        "month": "Jun 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 141.76,
        "minPaymentDue": 163.02,
        "balance": 6520.96
      },
      {
        "month": "Jul 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 141.76,
        "minPaymentDue": 166.57,
        "balance": 6662.72
      },
      {
        "month": "Aug 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 141.76,
        "minPaymentDue": 170.11,
        "balance": 6804.48
      },
      {
        "month": "Sep 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 141.76,
        "minPaymentDue": 173.66,
        "balance": 6946.24
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 141.76,
        "minPaymentDue": 177.2,
        "balance": 7088.0
      }
    ],
    "segment": "High-Risk Revolvers",
    "joinedDate": "2022-07-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 1,
    "calibratedProbability": 0.9126,
    "riskTier": "High",
    "decisionPolicy": "Curtail Line (-30%)",
    "targetedForSurveillance": true,
    "debt_to_income_est": 0.577,
    "riskIndicators": {
      "creditUtilization": 0.89,
      "paymentHistoryRisk": 0.85,
      "outstandingDebt": 0.58,
      "creditHistoryLength": 0.57,
      "recentInquiries": 0.55
    },
    "notes": [
      {
        "id": "note-auto-97",
        "author": "Risk Underwriter (Trained Policy)",
        "date": "Oct 26, 2026",
        "text": "Account targeted by trained model (PD = 0.91). Decision: Curtail Line (-30%)."
      }
    ]
  },
  {
    "id": "CUST000098",
    "shortId": "C098",
    "fullName": "John Gallagher",
    "email": "cust000098@domain.org",
    "age": 31,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "18.6 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 72610.0,
    "cardType": "Gold Preferred",
    "creditLimit": 25000.0,
    "outstandingBalance": 11100.0,
    "creditUtilization": 0.444,
    "utilization_rate": 0.444,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 8.9,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 7.1,
    "monthlyAverageSpend": 10545.0,
    "creditLines": 4,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2654.4,
        "minPaymentDue": 249.75,
        "balance": 9990.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3689.58,
        "minPaymentDue": 255.3,
        "balance": 10212.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3611.16,
        "minPaymentDue": 260.85,
        "balance": 10434.0
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 891.01,
        "minPaymentDue": 266.4,
        "balance": 10656.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 4062.03,
        "minPaymentDue": 271.95,
        "balance": 10878.0
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2845.19,
        "minPaymentDue": 277.5,
        "balance": 11100.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2023-08-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0158,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.398,
    "riskIndicators": {
      "creditUtilization": 0.44,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.4,
      "creditHistoryLength": 0.35,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000099",
    "shortId": "C099",
    "fullName": "Penelope Beaumont",
    "email": "cust000099@domain.org",
    "age": 53,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "21.3 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 159342.0,
    "cardType": "Platinum Signature",
    "creditLimit": 35000.0,
    "outstandingBalance": 5985.0,
    "creditUtilization": 0.171,
    "utilization_rate": 0.171,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 18.9,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 10.8,
    "monthlyAverageSpend": 5685.75,
    "creditLines": 5,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2107.04,
        "minPaymentDue": 134.66,
        "balance": 5386.5
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 606.53,
        "minPaymentDue": 137.66,
        "balance": 5506.2
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1187.2,
        "minPaymentDue": 140.65,
        "balance": 5625.9
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2228.42,
        "minPaymentDue": 143.64,
        "balance": 5745.6
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1131.34,
        "minPaymentDue": 146.63,
        "balance": 5865.3
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2235.92,
        "minPaymentDue": 149.62,
        "balance": 5985.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2024-09-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0411,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.225,
    "riskIndicators": {
      "creditUtilization": 0.17,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.23,
      "creditHistoryLength": 0.54,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000100",
    "shortId": "C100",
    "fullName": "Harper Rousseau",
    "email": "cust000100@domain.org",
    "age": 45,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "14.6 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 97527.0,
    "cardType": "Silver Rewards",
    "creditLimit": 18000.0,
    "outstandingBalance": 6066.0,
    "creditUtilization": 0.337,
    "utilization_rate": 0.337,
    "delayedPayments6M": 1,
    "paymentToMinRatio": 6.1,
    "cashAdvanceCount6M": 2,
    "creditHistoryYears": 15.1,
    "monthlyAverageSpend": 5762.7,
    "creditLines": 6,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1180.73,
        "minPaymentDue": 136.48,
        "balance": 5459.4
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 319.19,
        "minPaymentDue": 139.52,
        "balance": 5580.72
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 980.64,
        "minPaymentDue": 142.55,
        "balance": 5702.04
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 541.04,
        "minPaymentDue": 145.58,
        "balance": 5823.36
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1999.42,
        "minPaymentDue": 148.62,
        "balance": 5944.68
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 121.32,
        "minPaymentDue": 151.65,
        "balance": 6066.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2025-01-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0159,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.366,
    "riskIndicators": {
      "creditUtilization": 0.34,
      "paymentHistoryRisk": 0.22,
      "outstandingDebt": 0.37,
      "creditHistoryLength": 0.76,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000101",
    "shortId": "C101",
    "fullName": "Samuel Ashford",
    "email": "cust000101@domain.org",
    "age": 42,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "16.2 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 163447.0,
    "cardType": "Gold Preferred",
    "creditLimit": 30000.0,
    "outstandingBalance": 3960.0,
    "creditUtilization": 0.132,
    "utilization_rate": 0.132,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 39.4,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 12.5,
    "monthlyAverageSpend": 3762.0,
    "creditLines": 3,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1127.77,
        "minPaymentDue": 89.1,
        "balance": 3564.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1006.34,
        "minPaymentDue": 91.08,
        "balance": 3643.2
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 392.82,
        "minPaymentDue": 93.06,
        "balance": 3722.4
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 727.87,
        "minPaymentDue": 95.04,
        "balance": 3801.6
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1081.61,
        "minPaymentDue": 97.02,
        "balance": 3880.8
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1304.77,
        "minPaymentDue": 99.0,
        "balance": 3960.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2021-02-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0259,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.229,
    "riskIndicators": {
      "creditUtilization": 0.13,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.23,
      "creditHistoryLength": 0.62,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000102",
    "shortId": "C102",
    "fullName": "Benjamin Norris",
    "email": "cust000102@domain.org",
    "age": 42,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "8.8 yrs (OWN)",
    "employerCategory": "Professional Services",
    "annualIncome": 44238.0,
    "cardType": "Classic Access",
    "creditLimit": 8000.0,
    "outstandingBalance": 7272.0,
    "creditUtilization": 0.909,
    "utilization_rate": 0.909,
    "delayedPayments6M": 3,
    "paymentToMinRatio": 1.17,
    "cashAdvanceCount6M": 3,
    "creditHistoryYears": 14.5,
    "monthlyAverageSpend": 6908.4,
    "creditLines": 4,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 809.45,
        "minPaymentDue": 163.62,
        "balance": 6544.8
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1289.46,
        "minPaymentDue": 167.26,
        "balance": 6690.24
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1890.76,
        "minPaymentDue": 170.89,
        "balance": 6835.68
      },
      {
        "month": "Aug 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 145.44,
        "minPaymentDue": 174.53,
        "balance": 6981.12
      },
      {
        "month": "Sep 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 145.44,
        "minPaymentDue": 178.16,
        "balance": 7126.56
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 145.44,
        "minPaymentDue": 181.8,
        "balance": 7272.0
      }
    ],
    "segment": "High-Risk Revolvers",
    "joinedDate": "2022-03-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.6461,
    "riskTier": "High",
    "decisionPolicy": "Curtail Line (-30%)",
    "targetedForSurveillance": true,
    "debt_to_income_est": 0.66,
    "riskIndicators": {
      "creditUtilization": 0.91,
      "paymentHistoryRisk": 0.85,
      "outstandingDebt": 0.66,
      "creditHistoryLength": 0.72,
      "recentInquiries": 0.55
    },
    "notes": [
      {
        "id": "note-auto-102",
        "author": "Risk Underwriter (Trained Policy)",
        "date": "Oct 26, 2026",
        "text": "Account targeted by trained model (PD = 0.65). Decision: Curtail Line (-30%)."
      }
    ]
  },
  {
    "id": "CUST000103",
    "shortId": "C103",
    "fullName": "Avery Holloway",
    "email": "cust000103@domain.org",
    "age": 22,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "13.3 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 42370.0,
    "cardType": "Classic Access",
    "creditLimit": 2000.0,
    "outstandingBalance": 810.0,
    "creditUtilization": 0.405,
    "utilization_rate": 0.405,
    "delayedPayments6M": 1,
    "paymentToMinRatio": 4.2,
    "cashAdvanceCount6M": 1,
    "creditHistoryYears": 1.6,
    "monthlyAverageSpend": 769.5,
    "creditLines": 5,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 489.77,
        "minPaymentDue": 18.23,
        "balance": 729.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 501.65,
        "minPaymentDue": 18.63,
        "balance": 745.2
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 251.08,
        "minPaymentDue": 19.04,
        "balance": 761.4
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 200.35,
        "minPaymentDue": 19.44,
        "balance": 777.6
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 394.25,
        "minPaymentDue": 19.84,
        "balance": 793.8
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 28.0,
        "minPaymentDue": 20.25,
        "balance": 810.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2023-04-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.268,
    "riskTier": "Medium",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.296,
    "riskIndicators": {
      "creditUtilization": 0.41,
      "paymentHistoryRisk": 0.57,
      "outstandingDebt": 0.3,
      "creditHistoryLength": 0.1,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000104",
    "shortId": "C104",
    "fullName": "Emma Quinn",
    "email": "cust000104@domain.org",
    "age": 27,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "12.1 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 219035.0,
    "cardType": "Gold Preferred",
    "creditLimit": 30000.0,
    "outstandingBalance": 8220.0,
    "creditUtilization": 0.274,
    "utilization_rate": 0.274,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 19.7,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 3.8,
    "monthlyAverageSpend": 7809.0,
    "creditLines": 6,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1064.13,
        "minPaymentDue": 184.95,
        "balance": 7398.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2881.14,
        "minPaymentDue": 189.06,
        "balance": 7562.4
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 720.86,
        "minPaymentDue": 193.17,
        "balance": 7726.8
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2046.75,
        "minPaymentDue": 197.28,
        "balance": 7891.2
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 558.01,
        "minPaymentDue": 201.39,
        "balance": 8055.6
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2190.43,
        "minPaymentDue": 205.5,
        "balance": 8220.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2024-05-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0198,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.136,
    "riskIndicators": {
      "creditUtilization": 0.27,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.14,
      "creditHistoryLength": 0.19,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000105",
    "shortId": "C105",
    "fullName": "Benjamin Vance",
    "email": "cust000105@domain.org",
    "age": 53,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "3.5 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 49137.0,
    "cardType": "Classic Access",
    "creditLimit": 5000.0,
    "outstandingBalance": 2815.0,
    "creditUtilization": 0.563,
    "utilization_rate": 0.563,
    "delayedPayments6M": 1,
    "paymentToMinRatio": 3.0,
    "cashAdvanceCount6M": 1,
    "creditHistoryYears": 18.0,
    "monthlyAverageSpend": 2674.25,
    "creditLines": 3,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 620.06,
        "minPaymentDue": 63.34,
        "balance": 2533.5
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 381.34,
        "minPaymentDue": 64.75,
        "balance": 2589.8
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1032.87,
        "minPaymentDue": 66.15,
        "balance": 2646.1
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 714.91,
        "minPaymentDue": 67.56,
        "balance": 2702.4
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 594.71,
        "minPaymentDue": 68.97,
        "balance": 2758.7
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 56.3,
        "minPaymentDue": 70.38,
        "balance": 2815.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2025-06-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.1689,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.202,
    "riskIndicators": {
      "creditUtilization": 0.56,
      "paymentHistoryRisk": 0.22,
      "outstandingDebt": 0.2,
      "creditHistoryLength": 0.9,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000106",
    "shortId": "C106",
    "fullName": "Audrey Morales",
    "email": "cust000106@domain.org",
    "age": 58,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "3.9 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 62558.0,
    "cardType": "Silver Rewards",
    "creditLimit": 18000.0,
    "outstandingBalance": 10152.0,
    "creditUtilization": 0.564,
    "utilization_rate": 0.564,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 3.9,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 12.7,
    "monthlyAverageSpend": 9644.4,
    "creditLines": 4,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3157.4,
        "minPaymentDue": 228.42,
        "balance": 9136.8
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2863.44,
        "minPaymentDue": 233.5,
        "balance": 9339.84
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2671.03,
        "minPaymentDue": 238.57,
        "balance": 9542.88
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1248.37,
        "minPaymentDue": 243.65,
        "balance": 9745.92
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1326.72,
        "minPaymentDue": 248.72,
        "balance": 9948.96
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3529.37,
        "minPaymentDue": 253.8,
        "balance": 10152.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2021-07-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0557,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.395,
    "riskIndicators": {
      "creditUtilization": 0.56,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.4,
      "creditHistoryLength": 0.64,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000107",
    "shortId": "C107",
    "fullName": "Isaiah Thorne",
    "email": "cust000107@domain.org",
    "age": 33,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "11.3 yrs (OWN)",
    "employerCategory": "Professional Services",
    "annualIncome": 220207.0,
    "cardType": "Gold Preferred",
    "creditLimit": 25000.0,
    "outstandingBalance": 6725.0,
    "creditUtilization": 0.269,
    "utilization_rate": 0.269,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 17.1,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 6.7,
    "monthlyAverageSpend": 6388.75,
    "creditLines": 5,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2050.83,
        "minPaymentDue": 151.31,
        "balance": 6052.5
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1952.63,
        "minPaymentDue": 154.68,
        "balance": 6187.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 866.42,
        "minPaymentDue": 158.04,
        "balance": 6321.5
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1141.12,
        "minPaymentDue": 161.4,
        "balance": 6456.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2460.29,
        "minPaymentDue": 164.76,
        "balance": 6590.5
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2516.96,
        "minPaymentDue": 168.12,
        "balance": 6725.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2022-08-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0135,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.159,
    "riskIndicators": {
      "creditUtilization": 0.27,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.16,
      "creditHistoryLength": 0.34,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000108",
    "shortId": "C108",
    "fullName": "Henry Vance",
    "email": "cust000108@domain.org",
    "age": 44,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "9.3 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 100446.0,
    "cardType": "Silver Rewards",
    "creditLimit": 12000.0,
    "outstandingBalance": 7608.0,
    "creditUtilization": 0.634,
    "utilization_rate": 0.634,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 10.0,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 8.6,
    "monthlyAverageSpend": 7227.6,
    "creditLines": 6,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2845.48,
        "minPaymentDue": 171.18,
        "balance": 6847.2
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2140.03,
        "minPaymentDue": 174.98,
        "balance": 6999.36
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 610.42,
        "minPaymentDue": 178.79,
        "balance": 7151.52
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2658.34,
        "minPaymentDue": 182.59,
        "balance": 7303.68
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2599.03,
        "minPaymentDue": 186.4,
        "balance": 7455.84
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1665.56,
        "minPaymentDue": 190.2,
        "balance": 7608.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2023-09-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.1048,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.308,
    "riskIndicators": {
      "creditUtilization": 0.63,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.31,
      "creditHistoryLength": 0.43,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000109",
    "shortId": "C109",
    "fullName": "Emma Norris",
    "email": "cust000109@domain.org",
    "age": 47,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "11.4 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 233850.0,
    "cardType": "Gold Preferred",
    "creditLimit": 25000.0,
    "outstandingBalance": 3600.0,
    "creditUtilization": 0.144,
    "utilization_rate": 0.144,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 43.9,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 12.6,
    "monthlyAverageSpend": 3420.0,
    "creditLines": 3,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 267.38,
        "minPaymentDue": 81.0,
        "balance": 3240.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 417.17,
        "minPaymentDue": 82.8,
        "balance": 3312.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1092.53,
        "minPaymentDue": 84.6,
        "balance": 3384.0
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 864.11,
        "minPaymentDue": 86.4,
        "balance": 3456.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 361.83,
        "minPaymentDue": 88.2,
        "balance": 3528.0
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 372.32,
        "minPaymentDue": 90.0,
        "balance": 3600.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2024-01-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0111,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.12,
    "riskIndicators": {
      "creditUtilization": 0.14,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.12,
      "creditHistoryLength": 0.63,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000110",
    "shortId": "C110",
    "fullName": "Benjamin Kensington",
    "email": "cust000110@domain.org",
    "age": 41,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "21.2 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 110868.0,
    "cardType": "Silver Rewards",
    "creditLimit": 12000.0,
    "outstandingBalance": 4200.0,
    "creditUtilization": 0.35,
    "utilization_rate": 0.35,
    "delayedPayments6M": 1,
    "paymentToMinRatio": 6.1,
    "cashAdvanceCount6M": 3,
    "creditHistoryYears": 7.5,
    "monthlyAverageSpend": 3990.0,
    "creditLines": 4,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 617.92,
        "minPaymentDue": 94.5,
        "balance": 3780.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1329.42,
        "minPaymentDue": 96.6,
        "balance": 3864.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 447.33,
        "minPaymentDue": 98.7,
        "balance": 3948.0
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1509.61,
        "minPaymentDue": 100.8,
        "balance": 4032.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1376.53,
        "minPaymentDue": 102.9,
        "balance": 4116.0
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 84.0,
        "minPaymentDue": 105.0,
        "balance": 4200.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2025-02-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.2384,
    "riskTier": "Medium",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.367,
    "riskIndicators": {
      "creditUtilization": 0.35,
      "paymentHistoryRisk": 0.57,
      "outstandingDebt": 0.37,
      "creditHistoryLength": 0.38,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000111",
    "shortId": "C111",
    "fullName": "Ava Fairchild",
    "email": "cust000111@domain.org",
    "age": 22,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "17.8 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 143271.0,
    "cardType": "Gold Preferred",
    "creditLimit": 30000.0,
    "outstandingBalance": 2640.0,
    "creditUtilization": 0.088,
    "utilization_rate": 0.088,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 27.0,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 1.6,
    "monthlyAverageSpend": 2508.0,
    "creditLines": 5,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 686.26,
        "minPaymentDue": 59.4,
        "balance": 2376.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 826.38,
        "minPaymentDue": 60.72,
        "balance": 2428.8
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 210.92,
        "minPaymentDue": 62.04,
        "balance": 2481.6
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 858.96,
        "minPaymentDue": 63.36,
        "balance": 2534.4
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 826.03,
        "minPaymentDue": 64.68,
        "balance": 2587.2
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 237.13,
        "minPaymentDue": 66.0,
        "balance": 2640.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2021-03-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0599,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.197,
    "riskIndicators": {
      "creditUtilization": 0.09,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.2,
      "creditHistoryLength": 0.1,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000112",
    "shortId": "C112",
    "fullName": "Isaiah Delaney",
    "email": "cust000112@domain.org",
    "age": 46,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "16.1 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 66325.0,
    "cardType": "Gold Preferred",
    "creditLimit": 22000.0,
    "outstandingBalance": 8602.0,
    "creditUtilization": 0.391,
    "utilization_rate": 0.391,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 5.8,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 15.1,
    "monthlyAverageSpend": 8171.9,
    "creditLines": 6,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 675.34,
        "minPaymentDue": 193.55,
        "balance": 7741.8
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1500.88,
        "minPaymentDue": 197.85,
        "balance": 7913.84
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1602.13,
        "minPaymentDue": 202.15,
        "balance": 8085.88
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2226.73,
        "minPaymentDue": 206.45,
        "balance": 8257.92
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2658.79,
        "minPaymentDue": 210.75,
        "balance": 8429.96
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1126.63,
        "minPaymentDue": 215.05,
        "balance": 8602.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2022-04-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0171,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.32,
    "riskIndicators": {
      "creditUtilization": 0.39,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.32,
      "creditHistoryLength": 0.76,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000113",
    "shortId": "C113",
    "fullName": "Aubrey Villarreal",
    "email": "cust000113@domain.org",
    "age": 44,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "10.8 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 135849.0,
    "cardType": "Gold Preferred",
    "creditLimit": 20000.0,
    "outstandingBalance": 16480.0,
    "creditUtilization": 0.824,
    "utilization_rate": 0.824,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 1.3,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 12.4,
    "monthlyAverageSpend": 15656.0,
    "creditLines": 3,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3951.84,
        "minPaymentDue": 370.8,
        "balance": 14832.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2070.67,
        "minPaymentDue": 379.04,
        "balance": 15161.6
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1678.95,
        "minPaymentDue": 387.28,
        "balance": 15491.2
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2151.52,
        "minPaymentDue": 395.52,
        "balance": 15820.8
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2115.61,
        "minPaymentDue": 403.76,
        "balance": 16150.4
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3682.44,
        "minPaymentDue": 412.0,
        "balance": 16480.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2023-05-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0462,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.482,
    "riskIndicators": {
      "creditUtilization": 0.82,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.48,
      "creditHistoryLength": 0.62,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000114",
    "shortId": "C114",
    "fullName": "Isaiah Ashford",
    "email": "cust000114@domain.org",
    "age": 33,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "20.6 yrs (OTHER)",
    "employerCategory": "Professional Services",
    "annualIncome": 168362.0,
    "cardType": "Platinum Signature",
    "creditLimit": 35000.0,
    "outstandingBalance": 9065.0,
    "creditUtilization": 0.259,
    "utilization_rate": 0.259,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 15.8,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 8.6,
    "monthlyAverageSpend": 8611.75,
    "creditLines": 4,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 970.44,
        "minPaymentDue": 203.96,
        "balance": 8158.5
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 565.08,
        "minPaymentDue": 208.5,
        "balance": 8339.8
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 618.71,
        "minPaymentDue": 213.03,
        "balance": 8521.1
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2225.77,
        "minPaymentDue": 217.56,
        "balance": 8702.4
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 511.95,
        "minPaymentDue": 222.09,
        "balance": 8883.7
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1861.42,
        "minPaymentDue": 226.62,
        "balance": 9065.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2024-06-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0328,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.199,
    "riskIndicators": {
      "creditUtilization": 0.26,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.2,
      "creditHistoryLength": 0.43,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000115",
    "shortId": "C115",
    "fullName": "Mia Kaufman",
    "email": "cust000115@domain.org",
    "age": 42,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "4.3 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 123721.0,
    "cardType": "Platinum Signature",
    "creditLimit": 50000.0,
    "outstandingBalance": 10450.0,
    "creditUtilization": 0.209,
    "utilization_rate": 0.209,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 19.2,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 8.4,
    "monthlyAverageSpend": 9927.5,
    "creditLines": 5,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1547.37,
        "minPaymentDue": 235.12,
        "balance": 9405.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 985.92,
        "minPaymentDue": 240.35,
        "balance": 9614.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1057.42,
        "minPaymentDue": 245.58,
        "balance": 9823.0
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3744.5,
        "minPaymentDue": 250.8,
        "balance": 10032.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3211.8,
        "minPaymentDue": 256.03,
        "balance": 10241.0
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3785.15,
        "minPaymentDue": 261.25,
        "balance": 10450.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2025-07-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0328,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.099,
    "riskIndicators": {
      "creditUtilization": 0.21,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.1,
      "creditHistoryLength": 0.42,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000116",
    "shortId": "C116",
    "fullName": "Eli Underwood",
    "email": "cust000116@domain.org",
    "age": 36,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "20.5 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 108376.0,
    "cardType": "Silver Rewards",
    "creditLimit": 18000.0,
    "outstandingBalance": 8010.0,
    "creditUtilization": 0.445,
    "utilization_rate": 0.445,
    "delayedPayments6M": 1,
    "paymentToMinRatio": 9.4,
    "cashAdvanceCount6M": 5,
    "creditHistoryYears": 10.8,
    "monthlyAverageSpend": 7609.5,
    "creditLines": 6,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2798.19,
        "minPaymentDue": 180.23,
        "balance": 7209.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2919.23,
        "minPaymentDue": 184.23,
        "balance": 7369.2
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 975.55,
        "minPaymentDue": 188.24,
        "balance": 7529.4
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1872.77,
        "minPaymentDue": 192.24,
        "balance": 7689.6
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2838.93,
        "minPaymentDue": 196.25,
        "balance": 7849.8
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 160.2,
        "minPaymentDue": 200.25,
        "balance": 8010.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2021-08-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0301,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.263,
    "riskIndicators": {
      "creditUtilization": 0.45,
      "paymentHistoryRisk": 0.22,
      "outstandingDebt": 0.26,
      "creditHistoryLength": 0.54,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000117",
    "shortId": "C117",
    "fullName": "Avery Solomon",
    "email": "cust000117@domain.org",
    "age": 27,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "4.1 yrs (OWN)",
    "employerCategory": "Professional Services",
    "annualIncome": 114007.0,
    "cardType": "Gold Preferred",
    "creditLimit": 20000.0,
    "outstandingBalance": 15040.0,
    "creditUtilization": 0.752,
    "utilization_rate": 0.752,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 2.0,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 7.1,
    "monthlyAverageSpend": 14288.0,
    "creditLines": 3,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 5075.69,
        "minPaymentDue": 338.4,
        "balance": 13536.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3162.18,
        "minPaymentDue": 345.92,
        "balance": 13836.8
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2603.15,
        "minPaymentDue": 353.44,
        "balance": 14137.6
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3420.97,
        "minPaymentDue": 360.96,
        "balance": 14438.4
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1247.78,
        "minPaymentDue": 368.48,
        "balance": 14739.2
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3095.74,
        "minPaymentDue": 376.0,
        "balance": 15040.0
      }
    ],
    "segment": "High-Risk Revolvers",
    "joinedDate": "2022-09-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 1,
    "calibratedProbability": 0.3802,
    "riskTier": "Medium",
    "decisionPolicy": "Surveillance Watch",
    "targetedForSurveillance": true,
    "debt_to_income_est": 0.392,
    "riskIndicators": {
      "creditUtilization": 0.75,
      "paymentHistoryRisk": 0.45,
      "outstandingDebt": 0.39,
      "creditHistoryLength": 0.35,
      "recentInquiries": 0.15
    },
    "notes": [
      {
        "id": "note-auto-117",
        "author": "Risk Underwriter (Trained Policy)",
        "date": "Oct 26, 2026",
        "text": "Account targeted by trained model (PD = 0.38). Decision: Surveillance Watch."
      }
    ]
  },
  {
    "id": "CUST000118",
    "shortId": "C118",
    "fullName": "Harper Ellington",
    "email": "cust000118@domain.org",
    "age": 23,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "17.7 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 112453.0,
    "cardType": "Gold Preferred",
    "creditLimit": 25000.0,
    "outstandingBalance": 3050.0,
    "creditUtilization": 0.122,
    "utilization_rate": 0.122,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 41.6,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 3.3,
    "monthlyAverageSpend": 2897.5,
    "creditLines": 4,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 580.05,
        "minPaymentDue": 68.62,
        "balance": 2745.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 800.42,
        "minPaymentDue": 70.15,
        "balance": 2806.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 754.5,
        "minPaymentDue": 71.67,
        "balance": 2867.0
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 582.9,
        "minPaymentDue": 73.2,
        "balance": 2928.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 205.59,
        "minPaymentDue": 74.73,
        "balance": 2989.0
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 480.7,
        "minPaymentDue": 76.25,
        "balance": 3050.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2023-01-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0599,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.107,
    "riskIndicators": {
      "creditUtilization": 0.12,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.11,
      "creditHistoryLength": 0.16,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000119",
    "shortId": "C119",
    "fullName": "Grace Abdi",
    "email": "cust000119@domain.org",
    "age": 57,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "2.6 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 90131.0,
    "cardType": "Silver Rewards",
    "creditLimit": 15000.0,
    "outstandingBalance": 12285.0,
    "creditUtilization": 0.819,
    "utilization_rate": 0.819,
    "delayedPayments6M": 1,
    "paymentToMinRatio": 1.5,
    "cashAdvanceCount6M": 3,
    "creditHistoryYears": 20.9,
    "monthlyAverageSpend": 11670.75,
    "creditLines": 5,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1075.42,
        "minPaymentDue": 276.41,
        "balance": 11056.5
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3747.91,
        "minPaymentDue": 282.56,
        "balance": 11302.2
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2494.51,
        "minPaymentDue": 288.7,
        "balance": 11547.9
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 4187.09,
        "minPaymentDue": 294.84,
        "balance": 11793.6
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1672.29,
        "minPaymentDue": 300.98,
        "balance": 12039.3
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 245.7,
        "minPaymentDue": 307.12,
        "balance": 12285.0
      }
    ],
    "segment": "High-Risk Revolvers",
    "joinedDate": "2024-02-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0139,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.52,
    "riskIndicators": {
      "creditUtilization": 0.82,
      "paymentHistoryRisk": 0.22,
      "outstandingDebt": 0.52,
      "creditHistoryLength": 1.0,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000120",
    "shortId": "C120",
    "fullName": "Gabriel Ashford",
    "email": "cust000120@domain.org",
    "age": 50,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "4.5 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 69827.0,
    "cardType": "Gold Preferred",
    "creditLimit": 22000.0,
    "outstandingBalance": 11132.0,
    "creditUtilization": 0.506,
    "utilization_rate": 0.506,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 9.9,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 23.1,
    "monthlyAverageSpend": 10575.4,
    "creditLines": 6,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3517.51,
        "minPaymentDue": 250.47,
        "balance": 10018.8
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2071.17,
        "minPaymentDue": 256.04,
        "balance": 10241.44
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2494.04,
        "minPaymentDue": 261.6,
        "balance": 10464.08
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3692.94,
        "minPaymentDue": 267.17,
        "balance": 10686.72
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2274.47,
        "minPaymentDue": 272.73,
        "balance": 10909.36
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3746.34,
        "minPaymentDue": 278.3,
        "balance": 11132.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2025-03-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.01,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.36,
    "riskIndicators": {
      "creditUtilization": 0.51,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.36,
      "creditHistoryLength": 1.0,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000121",
    "shortId": "C121",
    "fullName": "Zoe Villarreal",
    "email": "cust000121@domain.org",
    "age": 58,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "11.3 yrs (OWN)",
    "employerCategory": "Professional Services",
    "annualIncome": 95650.0,
    "cardType": "Silver Rewards",
    "creditLimit": 18000.0,
    "outstandingBalance": 6480.0,
    "creditUtilization": 0.36,
    "utilization_rate": 0.36,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 5.0,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 16.0,
    "monthlyAverageSpend": 6156.0,
    "creditLines": 3,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2056.32,
        "minPaymentDue": 145.8,
        "balance": 5832.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 635.43,
        "minPaymentDue": 149.04,
        "balance": 5961.6
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1577.17,
        "minPaymentDue": 152.28,
        "balance": 6091.2
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 997.39,
        "minPaymentDue": 155.52,
        "balance": 6220.8
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1855.28,
        "minPaymentDue": 158.76,
        "balance": 6350.4
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2024.27,
        "minPaymentDue": 162.0,
        "balance": 6480.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2021-04-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0159,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.417,
    "riskIndicators": {
      "creditUtilization": 0.36,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.42,
      "creditHistoryLength": 0.8,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000122",
    "shortId": "C122",
    "fullName": "Leah Montague",
    "email": "cust000122@domain.org",
    "age": 22,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "6.4 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 66507.0,
    "cardType": "Silver Rewards",
    "creditLimit": 10000.0,
    "outstandingBalance": 8030.0,
    "creditUtilization": 0.803,
    "utilization_rate": 0.803,
    "delayedPayments6M": 3,
    "paymentToMinRatio": 0.61,
    "cashAdvanceCount6M": 1,
    "creditHistoryYears": 2.9,
    "monthlyAverageSpend": 7628.5,
    "creditLines": 4,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2698.43,
        "minPaymentDue": 180.68,
        "balance": 7227.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2692.58,
        "minPaymentDue": 184.69,
        "balance": 7387.6
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1090.83,
        "minPaymentDue": 188.71,
        "balance": 7548.2
      },
      {
        "month": "Aug 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 160.6,
        "minPaymentDue": 192.72,
        "balance": 7708.8
      },
      {
        "month": "Sep 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 160.6,
        "minPaymentDue": 196.74,
        "balance": 7869.4
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 160.6,
        "minPaymentDue": 200.75,
        "balance": 8030.0
      }
    ],
    "segment": "High-Risk Revolvers",
    "joinedDate": "2022-05-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.7965,
    "riskTier": "High",
    "decisionPolicy": "Curtail Line (-30%)",
    "targetedForSurveillance": true,
    "debt_to_income_est": 0.656,
    "riskIndicators": {
      "creditUtilization": 0.8,
      "paymentHistoryRisk": 0.85,
      "outstandingDebt": 0.66,
      "creditHistoryLength": 0.14,
      "recentInquiries": 0.55
    },
    "notes": [
      {
        "id": "note-auto-122",
        "author": "Risk Underwriter (Trained Policy)",
        "date": "Oct 26, 2026",
        "text": "Account targeted by trained model (PD = 0.80). Decision: Curtail Line (-30%)."
      }
    ]
  },
  {
    "id": "CUST000123",
    "shortId": "C123",
    "fullName": "Evelyn Rousseau",
    "email": "cust000123@domain.org",
    "age": 66,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "3.6 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 188754.0,
    "cardType": "Platinum Signature",
    "creditLimit": 35000.0,
    "outstandingBalance": 7210.0,
    "creditUtilization": 0.206,
    "utilization_rate": 0.206,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 16.5,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 26.2,
    "monthlyAverageSpend": 6849.5,
    "creditLines": 5,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1991.83,
        "minPaymentDue": 162.23,
        "balance": 6489.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 590.65,
        "minPaymentDue": 165.83,
        "balance": 6633.2
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2396.55,
        "minPaymentDue": 169.44,
        "balance": 6777.4
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 675.4,
        "minPaymentDue": 173.04,
        "balance": 6921.6
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2643.34,
        "minPaymentDue": 176.65,
        "balance": 7065.8
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1398.82,
        "minPaymentDue": 180.25,
        "balance": 7210.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2023-06-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.035,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.161,
    "riskIndicators": {
      "creditUtilization": 0.21,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.16,
      "creditHistoryLength": 1.0,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000124",
    "shortId": "C124",
    "fullName": "Aaron Radcliffe",
    "email": "cust000124@domain.org",
    "age": 48,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "4.5 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 61849.0,
    "cardType": "Classic Access",
    "creditLimit": 8000.0,
    "outstandingBalance": 7552.0,
    "creditUtilization": 0.944,
    "utilization_rate": 0.944,
    "delayedPayments6M": 6,
    "paymentToMinRatio": 1.51,
    "cashAdvanceCount6M": 5,
    "creditHistoryYears": 11.9,
    "monthlyAverageSpend": 7174.4,
    "creditLines": 6,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 151.04,
        "minPaymentDue": 169.92,
        "balance": 6796.8
      },
      {
        "month": "Jun 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 151.04,
        "minPaymentDue": 173.7,
        "balance": 6947.84
      },
      {
        "month": "Jul 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 151.04,
        "minPaymentDue": 177.47,
        "balance": 7098.88
      },
      {
        "month": "Aug 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 151.04,
        "minPaymentDue": 181.25,
        "balance": 7249.92
      },
      {
        "month": "Sep 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 151.04,
        "minPaymentDue": 185.02,
        "balance": 7400.96
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 151.04,
        "minPaymentDue": 188.8,
        "balance": 7552.0
      }
    ],
    "segment": "High-Risk Revolvers",
    "joinedDate": "2024-07-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 1,
    "calibratedProbability": 0.859,
    "riskTier": "High",
    "decisionPolicy": "Curtail Line (-30%)",
    "targetedForSurveillance": true,
    "debt_to_income_est": 0.5,
    "riskIndicators": {
      "creditUtilization": 0.94,
      "paymentHistoryRisk": 0.85,
      "outstandingDebt": 0.5,
      "creditHistoryLength": 0.59,
      "recentInquiries": 0.55
    },
    "notes": [
      {
        "id": "note-auto-124",
        "author": "Risk Underwriter (Trained Policy)",
        "date": "Oct 26, 2026",
        "text": "Account targeted by trained model (PD = 0.86). Decision: Curtail Line (-30%)."
      }
    ]
  },
  {
    "id": "CUST000125",
    "shortId": "C125",
    "fullName": "Carter Thorne",
    "email": "cust000125@domain.org",
    "age": 29,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "10.5 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 70855.0,
    "cardType": "Gold Preferred",
    "creditLimit": 22000.0,
    "outstandingBalance": 10582.0,
    "creditUtilization": 0.481,
    "utilization_rate": 0.481,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 5.0,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 3.8,
    "monthlyAverageSpend": 10052.9,
    "creditLines": 3,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 623.51,
        "minPaymentDue": 238.09,
        "balance": 9523.8
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 699.86,
        "minPaymentDue": 243.39,
        "balance": 9735.44
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3465.52,
        "minPaymentDue": 248.68,
        "balance": 9947.08
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3211.05,
        "minPaymentDue": 253.97,
        "balance": 10158.72
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1266.17,
        "minPaymentDue": 259.26,
        "balance": 10370.36
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1290.36,
        "minPaymentDue": 264.55,
        "balance": 10582.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2025-08-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0472,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.397,
    "riskIndicators": {
      "creditUtilization": 0.48,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.4,
      "creditHistoryLength": 0.19,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000126",
    "shortId": "C126",
    "fullName": "Scarlett Radcliffe",
    "email": "cust000126@domain.org",
    "age": 65,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "11.5 yrs (OWN)",
    "employerCategory": "Professional Services",
    "annualIncome": 119685.0,
    "cardType": "Gold Preferred",
    "creditLimit": 30000.0,
    "outstandingBalance": 5520.0,
    "creditUtilization": 0.184,
    "utilization_rate": 0.184,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 15.3,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 20.0,
    "monthlyAverageSpend": 5244.0,
    "creditLines": 4,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1113.26,
        "minPaymentDue": 124.2,
        "balance": 4968.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1490.89,
        "minPaymentDue": 126.96,
        "balance": 5078.4
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1754.81,
        "minPaymentDue": 129.72,
        "balance": 5188.8
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 988.49,
        "minPaymentDue": 132.48,
        "balance": 5299.2
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 459.55,
        "minPaymentDue": 135.24,
        "balance": 5409.6
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1193.66,
        "minPaymentDue": 138.0,
        "balance": 5520.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2021-09-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.01,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.123,
    "riskIndicators": {
      "creditUtilization": 0.18,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.12,
      "creditHistoryLength": 1.0,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000127",
    "shortId": "C127",
    "fullName": "Eli Radcliffe",
    "email": "cust000127@domain.org",
    "age": 28,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "13.6 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 77038.0,
    "cardType": "Gold Preferred",
    "creditLimit": 22000.0,
    "outstandingBalance": 11682.0,
    "creditUtilization": 0.531,
    "utilization_rate": 0.531,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 5.7,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 7.3,
    "monthlyAverageSpend": 11097.9,
    "creditLines": 5,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3659.5,
        "minPaymentDue": 262.84,
        "balance": 10513.8
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2118.32,
        "minPaymentDue": 268.69,
        "balance": 10747.44
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1797.46,
        "minPaymentDue": 274.53,
        "balance": 10981.08
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1115.36,
        "minPaymentDue": 280.37,
        "balance": 11214.72
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 680.74,
        "minPaymentDue": 286.21,
        "balance": 11448.36
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2472.45,
        "minPaymentDue": 292.05,
        "balance": 11682.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2022-01-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0472,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.368,
    "riskIndicators": {
      "creditUtilization": 0.53,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.37,
      "creditHistoryLength": 0.36,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000128",
    "shortId": "C128",
    "fullName": "Isaac Ashford",
    "email": "cust000128@domain.org",
    "age": 58,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "1.3 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 50489.0,
    "cardType": "Classic Access",
    "creditLimit": 5000.0,
    "outstandingBalance": 4585.0,
    "creditUtilization": 0.917,
    "utilization_rate": 0.917,
    "delayedPayments6M": 5,
    "paymentToMinRatio": 1.67,
    "cashAdvanceCount6M": 2,
    "creditHistoryYears": 21.4,
    "monthlyAverageSpend": 4355.75,
    "creditLines": 6,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1333.25,
        "minPaymentDue": 103.16,
        "balance": 4126.5
      },
      {
        "month": "Jun 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 91.7,
        "minPaymentDue": 105.45,
        "balance": 4218.2
      },
      {
        "month": "Jul 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 91.7,
        "minPaymentDue": 107.75,
        "balance": 4309.9
      },
      {
        "month": "Aug 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 91.7,
        "minPaymentDue": 110.04,
        "balance": 4401.6
      },
      {
        "month": "Sep 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 91.7,
        "minPaymentDue": 112.33,
        "balance": 4493.3
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 91.7,
        "minPaymentDue": 114.62,
        "balance": 4585.0
      }
    ],
    "segment": "High-Risk Revolvers",
    "joinedDate": "2023-02-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.8555,
    "riskTier": "High",
    "decisionPolicy": "Curtail Line (-30%)",
    "targetedForSurveillance": true,
    "debt_to_income_est": 0.682,
    "riskIndicators": {
      "creditUtilization": 0.92,
      "paymentHistoryRisk": 0.85,
      "outstandingDebt": 0.68,
      "creditHistoryLength": 1.0,
      "recentInquiries": 0.55
    },
    "notes": [
      {
        "id": "note-auto-128",
        "author": "Risk Underwriter (Trained Policy)",
        "date": "Oct 26, 2026",
        "text": "Account targeted by trained model (PD = 0.86). Decision: Curtail Line (-30%)."
      }
    ]
  },
  {
    "id": "CUST000129",
    "shortId": "C129",
    "fullName": "Elizabeth Solomon",
    "email": "cust000129@domain.org",
    "age": 43,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "16.5 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 238503.0,
    "cardType": "Platinum Signature",
    "creditLimit": 35000.0,
    "outstandingBalance": 5285.0,
    "creditUtilization": 0.151,
    "utilization_rate": 0.151,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 18.5,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 16.0,
    "monthlyAverageSpend": 5020.75,
    "creditLines": 3,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1174.27,
        "minPaymentDue": 118.91,
        "balance": 4756.5
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 973.78,
        "minPaymentDue": 121.56,
        "balance": 4862.2
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1759.98,
        "minPaymentDue": 124.2,
        "balance": 4967.9
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 523.21,
        "minPaymentDue": 126.84,
        "balance": 5073.6
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1968.66,
        "minPaymentDue": 129.48,
        "balance": 5179.3
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 852.8,
        "minPaymentDue": 132.12,
        "balance": 5285.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2024-03-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0198,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.089,
    "riskIndicators": {
      "creditUtilization": 0.15,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.09,
      "creditHistoryLength": 0.8,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000130",
    "shortId": "C130",
    "fullName": "Victoria Villarreal",
    "email": "cust000130@domain.org",
    "age": 62,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "17.2 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 42269.0,
    "cardType": "Classic Access",
    "creditLimit": 5000.0,
    "outstandingBalance": 1365.0,
    "creditUtilization": 0.273,
    "utilization_rate": 0.273,
    "delayedPayments6M": 1,
    "paymentToMinRatio": 3.6,
    "cashAdvanceCount6M": 1,
    "creditHistoryYears": 22.7,
    "monthlyAverageSpend": 1296.75,
    "creditLines": 4,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 265.38,
        "minPaymentDue": 30.71,
        "balance": 1228.5
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 265.21,
        "minPaymentDue": 31.39,
        "balance": 1255.8
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 287.22,
        "minPaymentDue": 32.08,
        "balance": 1283.1
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 72.12,
        "minPaymentDue": 32.76,
        "balance": 1310.4
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 312.87,
        "minPaymentDue": 33.44,
        "balance": 1337.7
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 28.0,
        "minPaymentDue": 34.12,
        "balance": 1365.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2025-04-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.4035,
    "riskTier": "Medium",
    "decisionPolicy": "Surveillance Watch",
    "targetedForSurveillance": true,
    "debt_to_income_est": 0.309,
    "riskIndicators": {
      "creditUtilization": 0.27,
      "paymentHistoryRisk": 0.57,
      "outstandingDebt": 0.31,
      "creditHistoryLength": 1.0,
      "recentInquiries": 0.15
    },
    "notes": [
      {
        "id": "note-auto-130",
        "author": "Risk Underwriter (Trained Policy)",
        "date": "Oct 26, 2026",
        "text": "Account targeted by trained model (PD = 0.40). Decision: Surveillance Watch."
      }
    ]
  },
  {
    "id": "CUST000131",
    "shortId": "C131",
    "fullName": "Christian Lindqvist",
    "email": "cust000131@domain.org",
    "age": 37,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "15.1 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 175269.0,
    "cardType": "Platinum Signature",
    "creditLimit": 35000.0,
    "outstandingBalance": 2485.0,
    "creditUtilization": 0.071,
    "utilization_rate": 0.071,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 26.5,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 10.7,
    "monthlyAverageSpend": 2360.75,
    "creditLines": 5,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 474.45,
        "minPaymentDue": 55.91,
        "balance": 2236.5
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 678.86,
        "minPaymentDue": 57.16,
        "balance": 2286.2
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 232.28,
        "minPaymentDue": 58.4,
        "balance": 2335.9
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 928.68,
        "minPaymentDue": 59.64,
        "balance": 2385.6
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 520.09,
        "minPaymentDue": 60.88,
        "balance": 2435.3
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 730.0,
        "minPaymentDue": 62.12,
        "balance": 2485.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2021-05-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0328,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.18,
    "riskIndicators": {
      "creditUtilization": 0.07,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.18,
      "creditHistoryLength": 0.53,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000132",
    "shortId": "C132",
    "fullName": "Diana Brennan",
    "email": "cust000132@domain.org",
    "age": 68,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "16.1 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 217286.0,
    "cardType": "Gold Preferred",
    "creditLimit": 30000.0,
    "outstandingBalance": 2100.0,
    "creditUtilization": 0.07,
    "utilization_rate": 0.07,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 36.3,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 35.9,
    "monthlyAverageSpend": 1995.0,
    "creditLines": 6,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 137.92,
        "minPaymentDue": 47.25,
        "balance": 1890.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 184.03,
        "minPaymentDue": 48.3,
        "balance": 1932.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 408.24,
        "minPaymentDue": 49.35,
        "balance": 1974.0
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 189.35,
        "minPaymentDue": 50.4,
        "balance": 2016.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 277.49,
        "minPaymentDue": 51.45,
        "balance": 2058.0
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 584.03,
        "minPaymentDue": 52.5,
        "balance": 2100.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2022-06-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.2328,
    "riskTier": "Medium",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.215,
    "riskIndicators": {
      "creditUtilization": 0.07,
      "paymentHistoryRisk": 0.45,
      "outstandingDebt": 0.21,
      "creditHistoryLength": 1.0,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000133",
    "shortId": "C133",
    "fullName": "Chloe Caldwell",
    "email": "cust000133@domain.org",
    "age": 61,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "2.7 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 63989.0,
    "cardType": "Gold Preferred",
    "creditLimit": 25000.0,
    "outstandingBalance": 14850.0,
    "creditUtilization": 0.594,
    "utilization_rate": 0.594,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 7.8,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 24.1,
    "monthlyAverageSpend": 14107.5,
    "creditLines": 3,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1715.83,
        "minPaymentDue": 334.12,
        "balance": 13365.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 4137.46,
        "minPaymentDue": 341.55,
        "balance": 13662.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2167.94,
        "minPaymentDue": 348.98,
        "balance": 13959.0
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 932.68,
        "minPaymentDue": 356.4,
        "balance": 14256.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3138.03,
        "minPaymentDue": 363.83,
        "balance": 14553.0
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1744.88,
        "minPaymentDue": 371.25,
        "balance": 14850.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2023-07-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0134,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.351,
    "riskIndicators": {
      "creditUtilization": 0.59,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.35,
      "creditHistoryLength": 1.0,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000134",
    "shortId": "C134",
    "fullName": "Eleanor Vance",
    "email": "cust000134@domain.org",
    "age": 58,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "2.4 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 64774.0,
    "cardType": "Silver Rewards",
    "creditLimit": 12000.0,
    "outstandingBalance": 6924.0,
    "creditUtilization": 0.577,
    "utilization_rate": 0.577,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 9.7,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 29.5,
    "monthlyAverageSpend": 6577.8,
    "creditLines": 4,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2264.02,
        "minPaymentDue": 155.79,
        "balance": 6231.6
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1156.79,
        "minPaymentDue": 159.25,
        "balance": 6370.08
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1869.13,
        "minPaymentDue": 162.71,
        "balance": 6508.56
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1304.82,
        "minPaymentDue": 166.18,
        "balance": 6647.04
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 607.01,
        "minPaymentDue": 169.64,
        "balance": 6785.52
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2261.76,
        "minPaymentDue": 173.1,
        "balance": 6924.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2024-08-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0864,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.258,
    "riskIndicators": {
      "creditUtilization": 0.58,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.26,
      "creditHistoryLength": 1.0,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000135",
    "shortId": "C135",
    "fullName": "Elijah Kaufman",
    "email": "cust000135@domain.org",
    "age": 39,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "19.7 yrs (OWN)",
    "employerCategory": "Professional Services",
    "annualIncome": 82183.0,
    "cardType": "Gold Preferred",
    "creditLimit": 20000.0,
    "outstandingBalance": 18100.0,
    "creditUtilization": 0.905,
    "utilization_rate": 0.905,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 1.6,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 15.6,
    "monthlyAverageSpend": 17195.0,
    "creditLines": 5,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1886.08,
        "minPaymentDue": 407.25,
        "balance": 16290.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1684.5,
        "minPaymentDue": 416.3,
        "balance": 16652.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 5178.11,
        "minPaymentDue": 425.35,
        "balance": 17014.0
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 6679.08,
        "minPaymentDue": 434.4,
        "balance": 17376.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 5871.89,
        "minPaymentDue": 443.45,
        "balance": 17738.0
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1515.09,
        "minPaymentDue": 452.5,
        "balance": 18100.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2025-09-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0379,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.448,
    "riskIndicators": {
      "creditUtilization": 0.91,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.45,
      "creditHistoryLength": 0.78,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000136",
    "shortId": "C136",
    "fullName": "Daniel Prescott",
    "email": "cust000136@domain.org",
    "age": 65,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "17.3 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 87125.0,
    "cardType": "Gold Preferred",
    "creditLimit": 20000.0,
    "outstandingBalance": 18500.0,
    "creditUtilization": 0.925,
    "utilization_rate": 0.925,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 4.1,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 31.6,
    "monthlyAverageSpend": 17575.0,
    "creditLines": 6,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 5276.69,
        "minPaymentDue": 416.25,
        "balance": 16650.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2271.71,
        "minPaymentDue": 425.5,
        "balance": 17020.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 6671.52,
        "minPaymentDue": 434.75,
        "balance": 17390.0
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 6174.78,
        "minPaymentDue": 444.0,
        "balance": 17760.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 4046.09,
        "minPaymentDue": 453.25,
        "balance": 18130.0
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 5063.05,
        "minPaymentDue": 462.5,
        "balance": 18500.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2021-01-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0169,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.455,
    "riskIndicators": {
      "creditUtilization": 0.93,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.46,
      "creditHistoryLength": 1.0,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000137",
    "shortId": "C137",
    "fullName": "David Garrison",
    "email": "cust000137@domain.org",
    "age": 31,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "14.8 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 143183.0,
    "cardType": "Gold Preferred",
    "creditLimit": 28000.0,
    "outstandingBalance": 21280.0,
    "creditUtilization": 0.76,
    "utilization_rate": 0.76,
    "delayedPayments6M": 1,
    "paymentToMinRatio": 4.3,
    "cashAdvanceCount6M": 3,
    "creditHistoryYears": 10.2,
    "monthlyAverageSpend": 20216.0,
    "creditLines": 3,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1412.23,
        "minPaymentDue": 478.8,
        "balance": 19152.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2604.24,
        "minPaymentDue": 489.44,
        "balance": 19577.6
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 5513.18,
        "minPaymentDue": 500.08,
        "balance": 20003.2
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3853.06,
        "minPaymentDue": 510.72,
        "balance": 20428.8
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2689.26,
        "minPaymentDue": 521.36,
        "balance": 20854.4
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 425.6,
        "minPaymentDue": 532.0,
        "balance": 21280.0
      }
    ],
    "segment": "High-Risk Revolvers",
    "joinedDate": "2022-02-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0188,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.466,
    "riskIndicators": {
      "creditUtilization": 0.76,
      "paymentHistoryRisk": 0.22,
      "outstandingDebt": 0.47,
      "creditHistoryLength": 0.51,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000138",
    "shortId": "C138",
    "fullName": "James Holloway",
    "email": "cust000138@domain.org",
    "age": 63,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "7.3 yrs (OTHER)",
    "employerCategory": "Professional Services",
    "annualIncome": 190759.0,
    "cardType": "Platinum Signature",
    "creditLimit": 40000.0,
    "outstandingBalance": 1960.0,
    "creditUtilization": 0.049,
    "utilization_rate": 0.049,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 31.5,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 23.8,
    "monthlyAverageSpend": 1862.0,
    "creditLines": 4,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 315.12,
        "minPaymentDue": 44.1,
        "balance": 1764.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 623.72,
        "minPaymentDue": 45.08,
        "balance": 1803.2
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 618.17,
        "minPaymentDue": 46.06,
        "balance": 1842.4
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 635.83,
        "minPaymentDue": 47.04,
        "balance": 1881.6
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 309.47,
        "minPaymentDue": 48.02,
        "balance": 1920.8
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 586.84,
        "minPaymentDue": 49.0,
        "balance": 1960.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2023-03-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0246,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.22,
    "riskIndicators": {
      "creditUtilization": 0.05,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.22,
      "creditHistoryLength": 1.0,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000139",
    "shortId": "C139",
    "fullName": "Max Patel",
    "email": "cust000139@domain.org",
    "age": 43,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "16.8 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 161541.0,
    "cardType": "Platinum Signature",
    "creditLimit": 50000.0,
    "outstandingBalance": 8250.0,
    "creditUtilization": 0.165,
    "utilization_rate": 0.165,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 36.1,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 19.1,
    "monthlyAverageSpend": 7837.5,
    "creditLines": 5,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1465.95,
        "minPaymentDue": 185.62,
        "balance": 7425.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1637.95,
        "minPaymentDue": 189.75,
        "balance": 7590.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2507.68,
        "minPaymentDue": 193.88,
        "balance": 7755.0
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2334.39,
        "minPaymentDue": 198.0,
        "balance": 7920.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 701.45,
        "minPaymentDue": 202.12,
        "balance": 8085.0
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1523.8,
        "minPaymentDue": 206.25,
        "balance": 8250.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2024-04-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0355,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.088,
    "riskIndicators": {
      "creditUtilization": 0.17,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.09,
      "creditHistoryLength": 0.96,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000140",
    "shortId": "C140",
    "fullName": "Max Fairchild",
    "email": "cust000140@domain.org",
    "age": 53,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "13.2 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 97732.0,
    "cardType": "Platinum Signature",
    "creditLimit": 50000.0,
    "outstandingBalance": 13200.0,
    "creditUtilization": 0.264,
    "utilization_rate": 0.264,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 40.2,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 12.3,
    "monthlyAverageSpend": 12540.0,
    "creditLines": 6,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3480.77,
        "minPaymentDue": 297.0,
        "balance": 11880.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3260.43,
        "minPaymentDue": 303.6,
        "balance": 12144.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2040.71,
        "minPaymentDue": 310.2,
        "balance": 12408.0
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 4441.17,
        "minPaymentDue": 316.8,
        "balance": 12672.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2456.07,
        "minPaymentDue": 323.4,
        "balance": 12936.0
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3272.58,
        "minPaymentDue": 330.0,
        "balance": 13200.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2025-05-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0389,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.162,
    "riskIndicators": {
      "creditUtilization": 0.26,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.16,
      "creditHistoryLength": 0.61,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000141",
    "shortId": "C141",
    "fullName": "Carter Beaumont",
    "email": "cust000141@domain.org",
    "age": 30,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "21.4 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 219294.0,
    "cardType": "Platinum Signature",
    "creditLimit": 35000.0,
    "outstandingBalance": 8470.0,
    "creditUtilization": 0.242,
    "utilization_rate": 0.242,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 31.4,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 5.7,
    "monthlyAverageSpend": 8046.5,
    "creditLines": 3,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2274.38,
        "minPaymentDue": 190.58,
        "balance": 7623.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3124.87,
        "minPaymentDue": 194.81,
        "balance": 7792.4
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2213.03,
        "minPaymentDue": 199.05,
        "balance": 7961.8
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3061.53,
        "minPaymentDue": 203.28,
        "balance": 8131.2
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1810.59,
        "minPaymentDue": 207.52,
        "balance": 8300.6
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2334.77,
        "minPaymentDue": 211.75,
        "balance": 8470.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2021-06-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0267,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.133,
    "riskIndicators": {
      "creditUtilization": 0.24,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.13,
      "creditHistoryLength": 0.29,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000142",
    "shortId": "C142",
    "fullName": "Luke Lancaster",
    "email": "cust000142@domain.org",
    "age": 67,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "13.0 yrs (OWN)",
    "employerCategory": "Professional Services",
    "annualIncome": 224959.0,
    "cardType": "Platinum Signature",
    "creditLimit": 35000.0,
    "outstandingBalance": 8785.0,
    "creditUtilization": 0.251,
    "utilization_rate": 0.251,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 27.7,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 18.6,
    "monthlyAverageSpend": 8345.75,
    "creditLines": 4,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1257.54,
        "minPaymentDue": 197.66,
        "balance": 7906.5
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1154.61,
        "minPaymentDue": 202.06,
        "balance": 8082.2
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2835.73,
        "minPaymentDue": 206.45,
        "balance": 8257.9
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2410.93,
        "minPaymentDue": 210.84,
        "balance": 8433.6
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1281.88,
        "minPaymentDue": 215.23,
        "balance": 8609.3
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2590.8,
        "minPaymentDue": 219.62,
        "balance": 8785.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2022-07-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0832,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.082,
    "riskIndicators": {
      "creditUtilization": 0.25,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.08,
      "creditHistoryLength": 0.93,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000143",
    "shortId": "C143",
    "fullName": "Lucas Prescott",
    "email": "cust000143@domain.org",
    "age": 36,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "15.0 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 64783.0,
    "cardType": "Silver Rewards",
    "creditLimit": 10000.0,
    "outstandingBalance": 8280.0,
    "creditUtilization": 0.828,
    "utilization_rate": 0.828,
    "delayedPayments6M": 4,
    "paymentToMinRatio": 1.37,
    "cashAdvanceCount6M": 5,
    "creditHistoryYears": 12.1,
    "monthlyAverageSpend": 7866.0,
    "creditLines": 5,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 960.51,
        "minPaymentDue": 186.3,
        "balance": 7452.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2752.08,
        "minPaymentDue": 190.44,
        "balance": 7617.6
      },
      {
        "month": "Jul 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 165.6,
        "minPaymentDue": 194.58,
        "balance": 7783.2
      },
      {
        "month": "Aug 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 165.6,
        "minPaymentDue": 198.72,
        "balance": 7948.8
      },
      {
        "month": "Sep 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 165.6,
        "minPaymentDue": 202.86,
        "balance": 8114.4
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 165.6,
        "minPaymentDue": 207.0,
        "balance": 8280.0
      }
    ],
    "segment": "High-Risk Revolvers",
    "joinedDate": "2023-08-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 1,
    "calibratedProbability": 0.9808,
    "riskTier": "High",
    "decisionPolicy": "Curtail Line (-30%)",
    "targetedForSurveillance": true,
    "debt_to_income_est": 0.494,
    "riskIndicators": {
      "creditUtilization": 0.83,
      "paymentHistoryRisk": 0.85,
      "outstandingDebt": 0.49,
      "creditHistoryLength": 0.6,
      "recentInquiries": 0.55
    },
    "notes": [
      {
        "id": "note-auto-143",
        "author": "Risk Underwriter (Trained Policy)",
        "date": "Oct 26, 2026",
        "text": "Account targeted by trained model (PD = 0.98). Decision: Curtail Line (-30%)."
      }
    ]
  },
  {
    "id": "CUST000144",
    "shortId": "C144",
    "fullName": "Thomas Kensington",
    "email": "cust000144@domain.org",
    "age": 34,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "13.5 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 131511.0,
    "cardType": "Gold Preferred",
    "creditLimit": 25000.0,
    "outstandingBalance": 2125.0,
    "creditUtilization": 0.085,
    "utilization_rate": 0.085,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 20.2,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 7.4,
    "monthlyAverageSpend": 2018.75,
    "creditLines": 6,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 596.32,
        "minPaymentDue": 47.81,
        "balance": 1912.5
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 213.14,
        "minPaymentDue": 48.88,
        "balance": 1955.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 212.38,
        "minPaymentDue": 49.94,
        "balance": 1997.5
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 329.04,
        "minPaymentDue": 51.0,
        "balance": 2040.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 141.36,
        "minPaymentDue": 52.06,
        "balance": 2082.5
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 750.11,
        "minPaymentDue": 53.12,
        "balance": 2125.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2024-09-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0195,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.167,
    "riskIndicators": {
      "creditUtilization": 0.09,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.17,
      "creditHistoryLength": 0.37,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000145",
    "shortId": "C145",
    "fullName": "Camila MacKenzie",
    "email": "cust000145@domain.org",
    "age": 42,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "8.2 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 67050.0,
    "cardType": "Silver Rewards",
    "creditLimit": 12000.0,
    "outstandingBalance": 6948.0,
    "creditUtilization": 0.579,
    "utilization_rate": 0.579,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 7.0,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 18.6,
    "monthlyAverageSpend": 6600.6,
    "creditLines": 3,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1743.54,
        "minPaymentDue": 156.33,
        "balance": 6253.2
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1419.68,
        "minPaymentDue": 159.8,
        "balance": 6392.16
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1614.95,
        "minPaymentDue": 163.28,
        "balance": 6531.12
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2045.79,
        "minPaymentDue": 166.75,
        "balance": 6670.08
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1813.58,
        "minPaymentDue": 170.23,
        "balance": 6809.04
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 606.45,
        "minPaymentDue": 173.7,
        "balance": 6948.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2025-01-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0174,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.337,
    "riskIndicators": {
      "creditUtilization": 0.58,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.34,
      "creditHistoryLength": 0.93,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000146",
    "shortId": "C146",
    "fullName": "Samantha Prescott",
    "email": "cust000146@domain.org",
    "age": 42,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "21.1 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 114720.0,
    "cardType": "Platinum Signature",
    "creditLimit": 40000.0,
    "outstandingBalance": 4080.0,
    "creditUtilization": 0.102,
    "utilization_rate": 0.102,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 36.7,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 11.0,
    "monthlyAverageSpend": 3876.0,
    "creditLines": 4,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 313.19,
        "minPaymentDue": 91.8,
        "balance": 3672.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 331.24,
        "minPaymentDue": 93.84,
        "balance": 3753.6
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1492.38,
        "minPaymentDue": 95.88,
        "balance": 3835.2
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1229.42,
        "minPaymentDue": 97.92,
        "balance": 3916.8
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 911.03,
        "minPaymentDue": 99.96,
        "balance": 3998.4
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1035.31,
        "minPaymentDue": 102.0,
        "balance": 4080.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2021-02-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0267,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.084,
    "riskIndicators": {
      "creditUtilization": 0.1,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.08,
      "creditHistoryLength": 0.55,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000147",
    "shortId": "C147",
    "fullName": "Lillian Kowalski",
    "email": "cust000147@domain.org",
    "age": 49,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "12.1 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 59726.0,
    "cardType": "Silver Rewards",
    "creditLimit": 18000.0,
    "outstandingBalance": 5904.0,
    "creditUtilization": 0.328,
    "utilization_rate": 0.328,
    "delayedPayments6M": 1,
    "paymentToMinRatio": 6.3,
    "cashAdvanceCount6M": 3,
    "creditHistoryYears": 16.3,
    "monthlyAverageSpend": 5608.8,
    "creditLines": 5,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1071.25,
        "minPaymentDue": 132.84,
        "balance": 5313.6
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 902.32,
        "minPaymentDue": 135.79,
        "balance": 5431.68
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1042.58,
        "minPaymentDue": 138.74,
        "balance": 5549.76
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 522.21,
        "minPaymentDue": 141.7,
        "balance": 5667.84
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 306.52,
        "minPaymentDue": 144.65,
        "balance": 5785.92
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 118.08,
        "minPaymentDue": 147.6,
        "balance": 5904.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2022-03-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0209,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.256,
    "riskIndicators": {
      "creditUtilization": 0.33,
      "paymentHistoryRisk": 0.22,
      "outstandingDebt": 0.26,
      "creditHistoryLength": 0.82,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000148",
    "shortId": "C148",
    "fullName": "Noah Solomon",
    "email": "cust000148@domain.org",
    "age": 65,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "11.3 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 107676.0,
    "cardType": "Platinum Signature",
    "creditLimit": 35000.0,
    "outstandingBalance": 7840.0,
    "creditUtilization": 0.224,
    "utilization_rate": 0.224,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 28.1,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 26.9,
    "monthlyAverageSpend": 7448.0,
    "creditLines": 6,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2838.42,
        "minPaymentDue": 176.4,
        "balance": 7056.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 759.1,
        "minPaymentDue": 180.32,
        "balance": 7212.8
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2117.73,
        "minPaymentDue": 184.24,
        "balance": 7369.6
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2721.3,
        "minPaymentDue": 188.16,
        "balance": 7526.4
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2417.7,
        "minPaymentDue": 192.08,
        "balance": 7683.2
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2250.32,
        "minPaymentDue": 196.0,
        "balance": 7840.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2023-04-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.01,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.147,
    "riskIndicators": {
      "creditUtilization": 0.22,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.15,
      "creditHistoryLength": 1.0,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000149",
    "shortId": "C149",
    "fullName": "Benjamin Hawthorne",
    "email": "cust000149@domain.org",
    "age": 57,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "12.8 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 41984.0,
    "cardType": "Classic Access",
    "creditLimit": 2000.0,
    "outstandingBalance": 1098.0,
    "creditUtilization": 0.549,
    "utilization_rate": 0.549,
    "delayedPayments6M": 1,
    "paymentToMinRatio": 3.3,
    "cashAdvanceCount6M": 3,
    "creditHistoryYears": 15.2,
    "monthlyAverageSpend": 1043.1,
    "creditLines": 3,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 433.85,
        "minPaymentDue": 24.71,
        "balance": 988.2
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 457.77,
        "minPaymentDue": 25.25,
        "balance": 1010.16
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 457.38,
        "minPaymentDue": 25.8,
        "balance": 1032.12
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 494.23,
        "minPaymentDue": 26.35,
        "balance": 1054.08
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 522.41,
        "minPaymentDue": 26.9,
        "balance": 1076.04
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 28.0,
        "minPaymentDue": 27.45,
        "balance": 1098.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2024-05-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0269,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.334,
    "riskIndicators": {
      "creditUtilization": 0.55,
      "paymentHistoryRisk": 0.22,
      "outstandingDebt": 0.33,
      "creditHistoryLength": 0.76,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000150",
    "shortId": "C150",
    "fullName": "Owen Stratton",
    "email": "cust000150@domain.org",
    "age": 59,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "5.9 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 76682.0,
    "cardType": "Gold Preferred",
    "creditLimit": 22000.0,
    "outstandingBalance": 7964.0,
    "creditUtilization": 0.362,
    "utilization_rate": 0.362,
    "delayedPayments6M": 1,
    "paymentToMinRatio": 5.5,
    "cashAdvanceCount6M": 3,
    "creditHistoryYears": 15.4,
    "monthlyAverageSpend": 7565.8,
    "creditLines": 4,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1865.41,
        "minPaymentDue": 179.19,
        "balance": 7167.6
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2488.77,
        "minPaymentDue": 183.17,
        "balance": 7326.88
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2879.5,
        "minPaymentDue": 187.15,
        "balance": 7486.16
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 834.69,
        "minPaymentDue": 191.14,
        "balance": 7645.44
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1208.89,
        "minPaymentDue": 195.12,
        "balance": 7804.72
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 159.28,
        "minPaymentDue": 199.1,
        "balance": 7964.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2025-06-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0139,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.291,
    "riskIndicators": {
      "creditUtilization": 0.36,
      "paymentHistoryRisk": 0.22,
      "outstandingDebt": 0.29,
      "creditHistoryLength": 0.77,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000151",
    "shortId": "C151",
    "fullName": "Carter Thorne",
    "email": "cust000151@domain.org",
    "age": 52,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "15.1 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 78510.0,
    "cardType": "Gold Preferred",
    "creditLimit": 22000.0,
    "outstandingBalance": 10582.0,
    "creditUtilization": 0.481,
    "utilization_rate": 0.481,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 5.0,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 20.9,
    "monthlyAverageSpend": 10052.9,
    "creditLines": 5,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3030.82,
        "minPaymentDue": 238.09,
        "balance": 9523.8
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3597.18,
        "minPaymentDue": 243.39,
        "balance": 9735.44
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3450.96,
        "minPaymentDue": 248.68,
        "balance": 9947.08
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2701.36,
        "minPaymentDue": 253.97,
        "balance": 10158.72
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3323.9,
        "minPaymentDue": 259.26,
        "balance": 10370.36
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2520.03,
        "minPaymentDue": 264.55,
        "balance": 10582.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2021-07-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0114,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.349,
    "riskIndicators": {
      "creditUtilization": 0.48,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.35,
      "creditHistoryLength": 1.0,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000152",
    "shortId": "C152",
    "fullName": "Leah Castillo",
    "email": "cust000152@domain.org",
    "age": 63,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "19.7 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 51974.0,
    "cardType": "Silver Rewards",
    "creditLimit": 10000.0,
    "outstandingBalance": 8250.0,
    "creditUtilization": 0.825,
    "utilization_rate": 0.825,
    "delayedPayments6M": 6,
    "paymentToMinRatio": 1.43,
    "cashAdvanceCount6M": 2,
    "creditHistoryYears": 31.6,
    "monthlyAverageSpend": 7837.5,
    "creditLines": 6,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 165.0,
        "minPaymentDue": 185.62,
        "balance": 7425.0
      },
      {
        "month": "Jun 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 165.0,
        "minPaymentDue": 189.75,
        "balance": 7590.0
      },
      {
        "month": "Jul 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 165.0,
        "minPaymentDue": 193.88,
        "balance": 7755.0
      },
      {
        "month": "Aug 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 165.0,
        "minPaymentDue": 198.0,
        "balance": 7920.0
      },
      {
        "month": "Sep 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 165.0,
        "minPaymentDue": 202.12,
        "balance": 8085.0
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 165.0,
        "minPaymentDue": 206.25,
        "balance": 8250.0
      }
    ],
    "segment": "High-Risk Revolvers",
    "joinedDate": "2022-08-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 1,
    "calibratedProbability": 0.5777,
    "riskTier": "High",
    "decisionPolicy": "Curtail Line (-30%)",
    "targetedForSurveillance": true,
    "debt_to_income_est": 0.567,
    "riskIndicators": {
      "creditUtilization": 0.82,
      "paymentHistoryRisk": 0.85,
      "outstandingDebt": 0.57,
      "creditHistoryLength": 1.0,
      "recentInquiries": 0.55
    },
    "notes": [
      {
        "id": "note-auto-152",
        "author": "Risk Underwriter (Trained Policy)",
        "date": "Oct 26, 2026",
        "text": "Account targeted by trained model (PD = 0.58). Decision: Curtail Line (-30%)."
      }
    ]
  },
  {
    "id": "CUST000153",
    "shortId": "C153",
    "fullName": "Audrey MacKenzie",
    "email": "cust000153@domain.org",
    "age": 68,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "19.3 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 78514.0,
    "cardType": "Silver Rewards",
    "creditLimit": 12000.0,
    "outstandingBalance": 4704.0,
    "creditUtilization": 0.392,
    "utilization_rate": 0.392,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 5.5,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 16.0,
    "monthlyAverageSpend": 4468.8,
    "creditLines": 3,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1226.66,
        "minPaymentDue": 105.84,
        "balance": 4233.6
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 393.01,
        "minPaymentDue": 108.19,
        "balance": 4327.68
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1715.75,
        "minPaymentDue": 110.54,
        "balance": 4421.76
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1203.8,
        "minPaymentDue": 112.9,
        "balance": 4515.84
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 653.32,
        "minPaymentDue": 115.25,
        "balance": 4609.92
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1369.43,
        "minPaymentDue": 117.6,
        "balance": 4704.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2023-09-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.5327,
    "riskTier": "High",
    "decisionPolicy": "Curtail Line (-30%)",
    "targetedForSurveillance": true,
    "debt_to_income_est": 0.288,
    "riskIndicators": {
      "creditUtilization": 0.39,
      "paymentHistoryRisk": 0.85,
      "outstandingDebt": 0.29,
      "creditHistoryLength": 0.8,
      "recentInquiries": 0.55
    },
    "notes": [
      {
        "id": "note-auto-153",
        "author": "Risk Underwriter (Trained Policy)",
        "date": "Oct 26, 2026",
        "text": "Account targeted by trained model (PD = 0.53). Decision: Curtail Line (-30%)."
      }
    ]
  },
  {
    "id": "CUST000154",
    "shortId": "C154",
    "fullName": "Aubrey Radcliffe",
    "email": "cust000154@domain.org",
    "age": 26,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "8.4 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 79663.0,
    "cardType": "Silver Rewards",
    "creditLimit": 18000.0,
    "outstandingBalance": 8820.0,
    "creditUtilization": 0.49,
    "utilization_rate": 0.49,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 10.4,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 2.7,
    "monthlyAverageSpend": 8379.0,
    "creditLines": 4,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2285.53,
        "minPaymentDue": 198.45,
        "balance": 7938.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1047.31,
        "minPaymentDue": 202.86,
        "balance": 8114.4
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 976.77,
        "minPaymentDue": 207.27,
        "balance": 8290.8
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1479.31,
        "minPaymentDue": 211.68,
        "balance": 8467.2
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2497.15,
        "minPaymentDue": 216.09,
        "balance": 8643.6
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 780.19,
        "minPaymentDue": 220.5,
        "balance": 8820.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2024-01-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0449,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.302,
    "riskIndicators": {
      "creditUtilization": 0.49,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.3,
      "creditHistoryLength": 0.14,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000155",
    "shortId": "C155",
    "fullName": "Isabella Garrison",
    "email": "cust000155@domain.org",
    "age": 32,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "10.8 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 81928.0,
    "cardType": "Silver Rewards",
    "creditLimit": 12000.0,
    "outstandingBalance": 4800.0,
    "creditUtilization": 0.4,
    "utilization_rate": 0.4,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 8.4,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 10.9,
    "monthlyAverageSpend": 4560.0,
    "creditLines": 5,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1175.0,
        "minPaymentDue": 108.0,
        "balance": 4320.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1119.22,
        "minPaymentDue": 110.4,
        "balance": 4416.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 269.05,
        "minPaymentDue": 112.8,
        "balance": 4512.0
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1362.49,
        "minPaymentDue": 115.2,
        "balance": 4608.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1272.32,
        "minPaymentDue": 117.6,
        "balance": 4704.0
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 682.19,
        "minPaymentDue": 120.0,
        "balance": 4800.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2025-02-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 1,
    "calibratedProbability": 0.1407,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": true,
    "debt_to_income_est": 0.269,
    "riskIndicators": {
      "creditUtilization": 0.4,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.27,
      "creditHistoryLength": 0.55,
      "recentInquiries": 0.15
    },
    "notes": [
      {
        "id": "note-auto-155",
        "author": "Risk Underwriter (Trained Policy)",
        "date": "Oct 26, 2026",
        "text": "Account targeted by trained model (PD = 0.14). Decision: Standard Facility."
      }
    ]
  },
  {
    "id": "CUST000156",
    "shortId": "C156",
    "fullName": "Aaron Garrison",
    "email": "cust000156@domain.org",
    "age": 48,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "10.9 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 107075.0,
    "cardType": "Silver Rewards",
    "creditLimit": 18000.0,
    "outstandingBalance": 9468.0,
    "creditUtilization": 0.526,
    "utilization_rate": 0.526,
    "delayedPayments6M": 1,
    "paymentToMinRatio": 5.7,
    "cashAdvanceCount6M": 1,
    "creditHistoryYears": 16.8,
    "monthlyAverageSpend": 8994.6,
    "creditLines": 6,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3271.53,
        "minPaymentDue": 213.03,
        "balance": 8521.2
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2579.27,
        "minPaymentDue": 217.76,
        "balance": 8710.56
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3016.67,
        "minPaymentDue": 222.5,
        "balance": 8899.92
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2336.62,
        "minPaymentDue": 227.23,
        "balance": 9089.28
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1019.35,
        "minPaymentDue": 231.97,
        "balance": 9278.64
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 189.36,
        "minPaymentDue": 236.7,
        "balance": 9468.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2021-03-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0137,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.37,
    "riskIndicators": {
      "creditUtilization": 0.53,
      "paymentHistoryRisk": 0.22,
      "outstandingDebt": 0.37,
      "creditHistoryLength": 0.84,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000157",
    "shortId": "C157",
    "fullName": "James Garrison",
    "email": "cust000157@domain.org",
    "age": 22,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "3.3 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 126557.0,
    "cardType": "Gold Preferred",
    "creditLimit": 28000.0,
    "outstandingBalance": 23240.0,
    "creditUtilization": 0.83,
    "utilization_rate": 0.83,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 3.5,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 3.0,
    "monthlyAverageSpend": 22078.0,
    "creditLines": 3,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 7485.3,
        "minPaymentDue": 522.9,
        "balance": 20916.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 5513.44,
        "minPaymentDue": 534.52,
        "balance": 21380.8
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 4375.72,
        "minPaymentDue": 546.14,
        "balance": 21845.6
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3084.37,
        "minPaymentDue": 557.76,
        "balance": 22310.4
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 6946.53,
        "minPaymentDue": 569.38,
        "balance": 22775.2
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 8035.87,
        "minPaymentDue": 581.0,
        "balance": 23240.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2022-04-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.1363,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.453,
    "riskIndicators": {
      "creditUtilization": 0.83,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.45,
      "creditHistoryLength": 0.15,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000158",
    "shortId": "C158",
    "fullName": "Ella Lindqvist",
    "email": "cust000158@domain.org",
    "age": 58,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "15.7 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 89063.0,
    "cardType": "Silver Rewards",
    "creditLimit": 12000.0,
    "outstandingBalance": 5328.0,
    "creditUtilization": 0.444,
    "utilization_rate": 0.444,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 9.3,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 24.2,
    "monthlyAverageSpend": 5061.6,
    "creditLines": 4,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1983.8,
        "minPaymentDue": 119.88,
        "balance": 4795.2
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 954.63,
        "minPaymentDue": 122.54,
        "balance": 4901.76
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 619.12,
        "minPaymentDue": 125.21,
        "balance": 5008.32
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1222.42,
        "minPaymentDue": 127.87,
        "balance": 5114.88
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1231.88,
        "minPaymentDue": 130.54,
        "balance": 5221.44
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 575.87,
        "minPaymentDue": 133.2,
        "balance": 5328.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2023-05-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0359,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.297,
    "riskIndicators": {
      "creditUtilization": 0.44,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.3,
      "creditHistoryLength": 1.0,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000159",
    "shortId": "C159",
    "fullName": "Ella Abdi",
    "email": "cust000159@domain.org",
    "age": 30,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "7.9 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 85608.0,
    "cardType": "Gold Preferred",
    "creditLimit": 28000.0,
    "outstandingBalance": 22232.0,
    "creditUtilization": 0.794,
    "utilization_rate": 0.794,
    "delayedPayments6M": 1,
    "paymentToMinRatio": 4.3,
    "cashAdvanceCount6M": 1,
    "creditHistoryYears": 9.4,
    "monthlyAverageSpend": 21120.4,
    "creditLines": 5,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1149.83,
        "minPaymentDue": 500.22,
        "balance": 20008.8
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1769.75,
        "minPaymentDue": 511.34,
        "balance": 20453.44
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2161.66,
        "minPaymentDue": 522.45,
        "balance": 20898.08
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 7801.32,
        "minPaymentDue": 533.57,
        "balance": 21342.72
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 4257.38,
        "minPaymentDue": 544.68,
        "balance": 21787.36
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 444.64,
        "minPaymentDue": 555.8,
        "balance": 22232.0
      }
    ],
    "segment": "High-Risk Revolvers",
    "joinedDate": "2024-06-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0322,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.397,
    "riskIndicators": {
      "creditUtilization": 0.79,
      "paymentHistoryRisk": 0.22,
      "outstandingDebt": 0.4,
      "creditHistoryLength": 0.47,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000160",
    "shortId": "C160",
    "fullName": "Emma O'Sullivan",
    "email": "cust000160@domain.org",
    "age": 47,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "16.1 yrs (OWN)",
    "employerCategory": "Professional Services",
    "annualIncome": 89144.0,
    "cardType": "Gold Preferred",
    "creditLimit": 22000.0,
    "outstandingBalance": 12210.0,
    "creditUtilization": 0.555,
    "utilization_rate": 0.555,
    "delayedPayments6M": 1,
    "paymentToMinRatio": 4.0,
    "cashAdvanceCount6M": 5,
    "creditHistoryYears": 9.2,
    "monthlyAverageSpend": 11599.5,
    "creditLines": 6,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2989.53,
        "minPaymentDue": 274.73,
        "balance": 10989.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2657.38,
        "minPaymentDue": 280.83,
        "balance": 11233.2
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1529.83,
        "minPaymentDue": 286.94,
        "balance": 11477.4
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1283.05,
        "minPaymentDue": 293.04,
        "balance": 11721.6
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 753.6,
        "minPaymentDue": 299.14,
        "balance": 11965.8
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 244.2,
        "minPaymentDue": 305.25,
        "balance": 12210.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2025-07-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0366,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.379,
    "riskIndicators": {
      "creditUtilization": 0.56,
      "paymentHistoryRisk": 0.22,
      "outstandingDebt": 0.38,
      "creditHistoryLength": 0.46,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000161",
    "shortId": "C161",
    "fullName": "James Rousseau",
    "email": "cust000161@domain.org",
    "age": 47,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "9.1 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 88930.0,
    "cardType": "Silver Rewards",
    "creditLimit": 12000.0,
    "outstandingBalance": 6756.0,
    "creditUtilization": 0.563,
    "utilization_rate": 0.563,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 11.3,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 22.7,
    "monthlyAverageSpend": 6418.2,
    "creditLines": 3,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1336.31,
        "minPaymentDue": 152.01,
        "balance": 6080.4
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1224.77,
        "minPaymentDue": 155.39,
        "balance": 6215.52
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 348.01,
        "minPaymentDue": 158.77,
        "balance": 6350.64
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 722.12,
        "minPaymentDue": 162.14,
        "balance": 6485.76
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1449.35,
        "minPaymentDue": 165.52,
        "balance": 6620.88
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1564.39,
        "minPaymentDue": 168.9,
        "balance": 6756.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2021-08-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0359,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.339,
    "riskIndicators": {
      "creditUtilization": 0.56,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.34,
      "creditHistoryLength": 1.0,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000162",
    "shortId": "C162",
    "fullName": "Isabella Ingram",
    "email": "cust000162@domain.org",
    "age": 58,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "19.3 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 201069.0,
    "cardType": "Platinum Signature",
    "creditLimit": 40000.0,
    "outstandingBalance": 7000.0,
    "creditUtilization": 0.175,
    "utilization_rate": 0.175,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 38.1,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 17.2,
    "monthlyAverageSpend": 6650.0,
    "creditLines": 4,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1220.58,
        "minPaymentDue": 157.5,
        "balance": 6300.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2144.19,
        "minPaymentDue": 161.0,
        "balance": 6440.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 851.37,
        "minPaymentDue": 164.5,
        "balance": 6580.0
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1945.18,
        "minPaymentDue": 168.0,
        "balance": 6720.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2170.37,
        "minPaymentDue": 171.5,
        "balance": 6860.0
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1288.27,
        "minPaymentDue": 175.0,
        "balance": 7000.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2022-09-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.01,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.209,
    "riskIndicators": {
      "creditUtilization": 0.17,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.21,
      "creditHistoryLength": 0.86,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000163",
    "shortId": "C163",
    "fullName": "Joseph Gallagher",
    "email": "cust000163@domain.org",
    "age": 43,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "2.5 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 131788.0,
    "cardType": "Platinum Signature",
    "creditLimit": 40000.0,
    "outstandingBalance": 4600.0,
    "creditUtilization": 0.115,
    "utilization_rate": 0.115,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 21.6,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 18.4,
    "monthlyAverageSpend": 4370.0,
    "creditLines": 5,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 539.13,
        "minPaymentDue": 103.5,
        "balance": 4140.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 533.14,
        "minPaymentDue": 105.8,
        "balance": 4232.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 603.29,
        "minPaymentDue": 108.1,
        "balance": 4324.0
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1154.8,
        "minPaymentDue": 110.4,
        "balance": 4416.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 463.21,
        "minPaymentDue": 112.7,
        "balance": 4508.0
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 389.5,
        "minPaymentDue": 115.0,
        "balance": 4600.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2023-01-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.01,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.178,
    "riskIndicators": {
      "creditUtilization": 0.12,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.18,
      "creditHistoryLength": 0.92,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000164",
    "shortId": "C164",
    "fullName": "Samantha Vance",
    "email": "cust000164@domain.org",
    "age": 52,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "18.9 yrs (OWN)",
    "employerCategory": "Professional Services",
    "annualIncome": 167684.0,
    "cardType": "Platinum Signature",
    "creditLimit": 40000.0,
    "outstandingBalance": 10240.0,
    "creditUtilization": 0.256,
    "utilization_rate": 0.256,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 41.4,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 19.1,
    "monthlyAverageSpend": 9728.0,
    "creditLines": 6,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1920.33,
        "minPaymentDue": 230.4,
        "balance": 9216.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3639.17,
        "minPaymentDue": 235.52,
        "balance": 9420.8
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 620.37,
        "minPaymentDue": 240.64,
        "balance": 9625.6
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1667.78,
        "minPaymentDue": 245.76,
        "balance": 9830.4
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3375.41,
        "minPaymentDue": 250.88,
        "balance": 10035.2
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3094.21,
        "minPaymentDue": 256.0,
        "balance": 10240.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2024-02-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.01,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.178,
    "riskIndicators": {
      "creditUtilization": 0.26,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.18,
      "creditHistoryLength": 0.96,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000165",
    "shortId": "C165",
    "fullName": "Victoria Underwood",
    "email": "cust000165@domain.org",
    "age": 59,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "0.8 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 179791.0,
    "cardType": "Platinum Signature",
    "creditLimit": 50000.0,
    "outstandingBalance": 12350.0,
    "creditUtilization": 0.247,
    "utilization_rate": 0.247,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 20.6,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 26.7,
    "monthlyAverageSpend": 11732.5,
    "creditLines": 3,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2111.86,
        "minPaymentDue": 277.88,
        "balance": 11115.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 4046.55,
        "minPaymentDue": 284.05,
        "balance": 11362.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1739.86,
        "minPaymentDue": 290.23,
        "balance": 11609.0
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1339.53,
        "minPaymentDue": 296.4,
        "balance": 11856.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1143.86,
        "minPaymentDue": 302.57,
        "balance": 12103.0
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2928.99,
        "minPaymentDue": 308.75,
        "balance": 12350.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2025-03-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.01,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.125,
    "riskIndicators": {
      "creditUtilization": 0.25,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.12,
      "creditHistoryLength": 1.0,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000166",
    "shortId": "C166",
    "fullName": "Scarlett Gallagher",
    "email": "cust000166@domain.org",
    "age": 31,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "9.8 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 37800.0,
    "cardType": "Silver Rewards",
    "creditLimit": 10000.0,
    "outstandingBalance": 9410.0,
    "creditUtilization": 0.941,
    "utilization_rate": 0.941,
    "delayedPayments6M": 3,
    "paymentToMinRatio": 0.99,
    "cashAdvanceCount6M": 4,
    "creditHistoryYears": 7.6,
    "monthlyAverageSpend": 8939.5,
    "creditLines": 4,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2207.08,
        "minPaymentDue": 211.73,
        "balance": 8469.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1688.91,
        "minPaymentDue": 216.43,
        "balance": 8657.2
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2582.35,
        "minPaymentDue": 221.13,
        "balance": 8845.4
      },
      {
        "month": "Aug 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 188.2,
        "minPaymentDue": 225.84,
        "balance": 9033.6
      },
      {
        "month": "Sep 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 188.2,
        "minPaymentDue": 230.54,
        "balance": 9221.8
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 188.2,
        "minPaymentDue": 235.25,
        "balance": 9410.0
      }
    ],
    "segment": "High-Risk Revolvers",
    "joinedDate": "2021-04-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 1,
    "calibratedProbability": 0.8962,
    "riskTier": "High",
    "decisionPolicy": "Curtail Line (-30%)",
    "targetedForSurveillance": true,
    "debt_to_income_est": 0.52,
    "riskIndicators": {
      "creditUtilization": 0.94,
      "paymentHistoryRisk": 0.85,
      "outstandingDebt": 0.52,
      "creditHistoryLength": 0.38,
      "recentInquiries": 0.55
    },
    "notes": [
      {
        "id": "note-auto-166",
        "author": "Risk Underwriter (Trained Policy)",
        "date": "Oct 26, 2026",
        "text": "Account targeted by trained model (PD = 0.90). Decision: Curtail Line (-30%)."
      }
    ]
  },
  {
    "id": "CUST000167",
    "shortId": "C167",
    "fullName": "Max Xavier",
    "email": "cust000167@domain.org",
    "age": 57,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "6.1 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 40444.0,
    "cardType": "Classic Access",
    "creditLimit": 3500.0,
    "outstandingBalance": 903.0,
    "creditUtilization": 0.258,
    "utilization_rate": 0.258,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 4.1,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 17.2,
    "monthlyAverageSpend": 857.85,
    "creditLines": 5,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 217.92,
        "minPaymentDue": 20.32,
        "balance": 812.7
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 302.25,
        "minPaymentDue": 20.77,
        "balance": 830.76
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 422.51,
        "minPaymentDue": 21.22,
        "balance": 848.82
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 273.35,
        "minPaymentDue": 21.67,
        "balance": 866.88
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 105.68,
        "minPaymentDue": 22.12,
        "balance": 884.94
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 349.22,
        "minPaymentDue": 22.58,
        "balance": 903.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2022-05-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.1158,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.296,
    "riskIndicators": {
      "creditUtilization": 0.26,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.3,
      "creditHistoryLength": 0.86,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000168",
    "shortId": "C168",
    "fullName": "Elijah Quinn",
    "email": "cust000168@domain.org",
    "age": 61,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "20.5 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 110633.0,
    "cardType": "Silver Rewards",
    "creditLimit": 12000.0,
    "outstandingBalance": 4152.0,
    "creditUtilization": 0.346,
    "utilization_rate": 0.346,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 5.4,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 20.7,
    "monthlyAverageSpend": 3944.4,
    "creditLines": 6,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 999.59,
        "minPaymentDue": 93.42,
        "balance": 3736.8
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1510.48,
        "minPaymentDue": 95.5,
        "balance": 3819.84
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 766.24,
        "minPaymentDue": 97.57,
        "balance": 3902.88
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 455.74,
        "minPaymentDue": 99.65,
        "balance": 3985.92
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 238.77,
        "minPaymentDue": 101.72,
        "balance": 4068.96
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1189.66,
        "minPaymentDue": 103.8,
        "balance": 4152.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2023-06-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.1271,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.297,
    "riskIndicators": {
      "creditUtilization": 0.35,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.3,
      "creditHistoryLength": 1.0,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000169",
    "shortId": "C169",
    "fullName": "Emily Morales",
    "email": "cust000169@domain.org",
    "age": 52,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "2.7 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 56727.0,
    "cardType": "Gold Preferred",
    "creditLimit": 25000.0,
    "outstandingBalance": 12325.0,
    "creditUtilization": 0.493,
    "utilization_rate": 0.493,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 4.4,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 20.9,
    "monthlyAverageSpend": 11708.75,
    "creditLines": 3,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1142.08,
        "minPaymentDue": 277.31,
        "balance": 11092.5
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3974.97,
        "minPaymentDue": 283.48,
        "balance": 11339.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 730.68,
        "minPaymentDue": 289.64,
        "balance": 11585.5
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3274.13,
        "minPaymentDue": 295.8,
        "balance": 11832.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 4062.5,
        "minPaymentDue": 301.96,
        "balance": 12078.5
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1918.85,
        "minPaymentDue": 308.12,
        "balance": 12325.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2024-07-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.01,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.351,
    "riskIndicators": {
      "creditUtilization": 0.49,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.35,
      "creditHistoryLength": 1.0,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000170",
    "shortId": "C170",
    "fullName": "Leah Ellington",
    "email": "cust000170@domain.org",
    "age": 33,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "21.3 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 84920.0,
    "cardType": "Gold Preferred",
    "creditLimit": 25000.0,
    "outstandingBalance": 12325.0,
    "creditUtilization": 0.493,
    "utilization_rate": 0.493,
    "delayedPayments6M": 1,
    "paymentToMinRatio": 8.0,
    "cashAdvanceCount6M": 3,
    "creditHistoryYears": 4.6,
    "monthlyAverageSpend": 11708.75,
    "creditLines": 4,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2712.41,
        "minPaymentDue": 277.31,
        "balance": 11092.5
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3653.63,
        "minPaymentDue": 283.48,
        "balance": 11339.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1162.2,
        "minPaymentDue": 289.64,
        "balance": 11585.5
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1764.88,
        "minPaymentDue": 295.8,
        "balance": 11832.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2759.61,
        "minPaymentDue": 301.96,
        "balance": 12078.5
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 246.5,
        "minPaymentDue": 308.12,
        "balance": 12325.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2025-08-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0403,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.404,
    "riskIndicators": {
      "creditUtilization": 0.49,
      "paymentHistoryRisk": 0.22,
      "outstandingDebt": 0.4,
      "creditHistoryLength": 0.23,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000171",
    "shortId": "C171",
    "fullName": "Chloe Vance",
    "email": "cust000171@domain.org",
    "age": 36,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "9.8 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 63927.0,
    "cardType": "Classic Access",
    "creditLimit": 8000.0,
    "outstandingBalance": 6544.0,
    "creditUtilization": 0.818,
    "utilization_rate": 0.818,
    "delayedPayments6M": 6,
    "paymentToMinRatio": 1.01,
    "cashAdvanceCount6M": 1,
    "creditHistoryYears": 7.6,
    "monthlyAverageSpend": 6216.8,
    "creditLines": 5,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 130.88,
        "minPaymentDue": 147.24,
        "balance": 5889.6
      },
      {
        "month": "Jun 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 130.88,
        "minPaymentDue": 150.51,
        "balance": 6020.48
      },
      {
        "month": "Jul 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 130.88,
        "minPaymentDue": 153.78,
        "balance": 6151.36
      },
      {
        "month": "Aug 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 130.88,
        "minPaymentDue": 157.06,
        "balance": 6282.24
      },
      {
        "month": "Sep 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 130.88,
        "minPaymentDue": 160.33,
        "balance": 6413.12
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 130.88,
        "minPaymentDue": 163.6,
        "balance": 6544.0
      }
    ],
    "segment": "High-Risk Revolvers",
    "joinedDate": "2021-09-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 1,
    "calibratedProbability": 0.962,
    "riskTier": "High",
    "decisionPolicy": "Curtail Line (-30%)",
    "targetedForSurveillance": true,
    "debt_to_income_est": 0.555,
    "riskIndicators": {
      "creditUtilization": 0.82,
      "paymentHistoryRisk": 0.85,
      "outstandingDebt": 0.56,
      "creditHistoryLength": 0.38,
      "recentInquiries": 0.55
    },
    "notes": [
      {
        "id": "note-auto-171",
        "author": "Risk Underwriter (Trained Policy)",
        "date": "Oct 26, 2026",
        "text": "Account targeted by trained model (PD = 0.96). Decision: Curtail Line (-30%)."
      }
    ]
  },
  {
    "id": "CUST000172",
    "shortId": "C172",
    "fullName": "Hannah Lindqvist",
    "email": "cust000172@domain.org",
    "age": 29,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "2.0 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 95483.0,
    "cardType": "Gold Preferred",
    "creditLimit": 25000.0,
    "outstandingBalance": 10250.0,
    "creditUtilization": 0.41,
    "utilization_rate": 0.41,
    "delayedPayments6M": 1,
    "paymentToMinRatio": 7.7,
    "cashAdvanceCount6M": 3,
    "creditHistoryYears": 5.7,
    "monthlyAverageSpend": 9737.5,
    "creditLines": 6,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 539.83,
        "minPaymentDue": 230.62,
        "balance": 9225.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 812.97,
        "minPaymentDue": 235.75,
        "balance": 9430.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 561.55,
        "minPaymentDue": 240.88,
        "balance": 9635.0
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1236.01,
        "minPaymentDue": 246.0,
        "balance": 9840.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1912.43,
        "minPaymentDue": 251.12,
        "balance": 10045.0
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 205.0,
        "minPaymentDue": 256.25,
        "balance": 10250.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2022-01-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0295,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.298,
    "riskIndicators": {
      "creditUtilization": 0.41,
      "paymentHistoryRisk": 0.22,
      "outstandingDebt": 0.3,
      "creditHistoryLength": 0.29,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000173",
    "shortId": "C173",
    "fullName": "Amara Kaufman",
    "email": "cust000173@domain.org",
    "age": 25,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "18.6 yrs (OWN)",
    "employerCategory": "Professional Services",
    "annualIncome": 187871.0,
    "cardType": "Gold Preferred",
    "creditLimit": 25000.0,
    "outstandingBalance": 4250.0,
    "creditUtilization": 0.17,
    "utilization_rate": 0.17,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 20.4,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 4.8,
    "monthlyAverageSpend": 4037.5,
    "creditLines": 3,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 824.34,
        "minPaymentDue": 95.62,
        "balance": 3825.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1231.34,
        "minPaymentDue": 97.75,
        "balance": 3910.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 258.79,
        "minPaymentDue": 99.88,
        "balance": 3995.0
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 849.03,
        "minPaymentDue": 102.0,
        "balance": 4080.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1277.44,
        "minPaymentDue": 104.12,
        "balance": 4165.0
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 932.32,
        "minPaymentDue": 106.25,
        "balance": 4250.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2023-02-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0675,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.232,
    "riskIndicators": {
      "creditUtilization": 0.17,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.23,
      "creditHistoryLength": 0.24,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000174",
    "shortId": "C174",
    "fullName": "Wyatt Montague",
    "email": "cust000174@domain.org",
    "age": 57,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "14.0 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 71601.0,
    "cardType": "Gold Preferred",
    "creditLimit": 25000.0,
    "outstandingBalance": 13275.0,
    "creditUtilization": 0.531,
    "utilization_rate": 0.531,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 6.6,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 17.1,
    "monthlyAverageSpend": 12611.25,
    "creditLines": 4,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1179.98,
        "minPaymentDue": 298.69,
        "balance": 11947.5
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 4068.47,
        "minPaymentDue": 305.32,
        "balance": 12213.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 702.29,
        "minPaymentDue": 311.96,
        "balance": 12478.5
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 844.94,
        "minPaymentDue": 318.6,
        "balance": 12744.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 4044.02,
        "minPaymentDue": 325.24,
        "balance": 13009.5
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2714.29,
        "minPaymentDue": 331.88,
        "balance": 13275.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2024-03-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.01,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.249,
    "riskIndicators": {
      "creditUtilization": 0.53,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.25,
      "creditHistoryLength": 0.86,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000175",
    "shortId": "C175",
    "fullName": "James Gallagher",
    "email": "cust000175@domain.org",
    "age": 43,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "11.2 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 56889.0,
    "cardType": "Classic Access",
    "creditLimit": 5000.0,
    "outstandingBalance": 1370.0,
    "creditUtilization": 0.274,
    "utilization_rate": 0.274,
    "delayedPayments6M": 1,
    "paymentToMinRatio": 5.9,
    "cashAdvanceCount6M": 3,
    "creditHistoryYears": 13.0,
    "monthlyAverageSpend": 1301.5,
    "creditLines": 5,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 157.8,
        "minPaymentDue": 30.83,
        "balance": 1233.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 383.61,
        "minPaymentDue": 31.51,
        "balance": 1260.4
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 232.97,
        "minPaymentDue": 32.2,
        "balance": 1287.8
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 131.3,
        "minPaymentDue": 32.88,
        "balance": 1315.2
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 478.89,
        "minPaymentDue": 33.56,
        "balance": 1342.6
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 28.0,
        "minPaymentDue": 34.25,
        "balance": 1370.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2025-04-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.2398,
    "riskTier": "Medium",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.299,
    "riskIndicators": {
      "creditUtilization": 0.27,
      "paymentHistoryRisk": 0.57,
      "outstandingDebt": 0.3,
      "creditHistoryLength": 0.65,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000176",
    "shortId": "C176",
    "fullName": "Hunter Underwood",
    "email": "cust000176@domain.org",
    "age": 44,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "4.6 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 207786.0,
    "cardType": "Platinum Signature",
    "creditLimit": 35000.0,
    "outstandingBalance": 8680.0,
    "creditUtilization": 0.248,
    "utilization_rate": 0.248,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 33.0,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 7.8,
    "monthlyAverageSpend": 8246.0,
    "creditLines": 6,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2233.87,
        "minPaymentDue": 195.3,
        "balance": 7812.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1503.28,
        "minPaymentDue": 199.64,
        "balance": 7985.6
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 957.39,
        "minPaymentDue": 203.98,
        "balance": 8159.2
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 486.81,
        "minPaymentDue": 208.32,
        "balance": 8332.8
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2851.12,
        "minPaymentDue": 212.66,
        "balance": 8506.4
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2623.14,
        "minPaymentDue": 217.0,
        "balance": 8680.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2021-05-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0203,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.226,
    "riskIndicators": {
      "creditUtilization": 0.25,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.23,
      "creditHistoryLength": 0.39,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000177",
    "shortId": "C177",
    "fullName": "Penelope Ashford",
    "email": "cust000177@domain.org",
    "age": 57,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "11.8 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 159220.0,
    "cardType": "Platinum Signature",
    "creditLimit": 35000.0,
    "outstandingBalance": 4830.0,
    "creditUtilization": 0.138,
    "utilization_rate": 0.138,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 24.7,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 15.4,
    "monthlyAverageSpend": 4588.5,
    "creditLines": 3,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 291.44,
        "minPaymentDue": 108.68,
        "balance": 4347.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1248.89,
        "minPaymentDue": 111.09,
        "balance": 4443.6
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 851.5,
        "minPaymentDue": 113.5,
        "balance": 4540.2
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1010.54,
        "minPaymentDue": 115.92,
        "balance": 4636.8
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1220.98,
        "minPaymentDue": 118.33,
        "balance": 4733.4
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1168.12,
        "minPaymentDue": 120.75,
        "balance": 4830.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2022-06-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.022,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.096,
    "riskIndicators": {
      "creditUtilization": 0.14,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.1,
      "creditHistoryLength": 0.77,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000178",
    "shortId": "C178",
    "fullName": "Aaron Villarreal",
    "email": "cust000178@domain.org",
    "age": 63,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "0.8 yrs (OWN)",
    "employerCategory": "Professional Services",
    "annualIncome": 113311.0,
    "cardType": "Silver Rewards",
    "creditLimit": 12000.0,
    "outstandingBalance": 5688.0,
    "creditUtilization": 0.474,
    "utilization_rate": 0.474,
    "delayedPayments6M": 1,
    "paymentToMinRatio": 4.0,
    "cashAdvanceCount6M": 5,
    "creditHistoryYears": 14.4,
    "monthlyAverageSpend": 5403.6,
    "creditLines": 4,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 414.52,
        "minPaymentDue": 127.98,
        "balance": 5119.2
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 846.2,
        "minPaymentDue": 130.82,
        "balance": 5232.96
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2030.59,
        "minPaymentDue": 133.67,
        "balance": 5346.72
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2060.14,
        "minPaymentDue": 136.51,
        "balance": 5460.48
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 463.93,
        "minPaymentDue": 139.36,
        "balance": 5574.24
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 113.76,
        "minPaymentDue": 142.2,
        "balance": 5688.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2023-07-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.2172,
    "riskTier": "Medium",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.34,
    "riskIndicators": {
      "creditUtilization": 0.47,
      "paymentHistoryRisk": 0.57,
      "outstandingDebt": 0.34,
      "creditHistoryLength": 0.72,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000179",
    "shortId": "C179",
    "fullName": "Abigail Lindqvist",
    "email": "cust000179@domain.org",
    "age": 33,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "14.6 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 91578.0,
    "cardType": "Gold Preferred",
    "creditLimit": 25000.0,
    "outstandingBalance": 14150.0,
    "creditUtilization": 0.566,
    "utilization_rate": 0.566,
    "delayedPayments6M": 1,
    "paymentToMinRatio": 8.4,
    "cashAdvanceCount6M": 4,
    "creditHistoryYears": 9.4,
    "monthlyAverageSpend": 13442.5,
    "creditLines": 5,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3162.77,
        "minPaymentDue": 318.38,
        "balance": 12735.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3466.36,
        "minPaymentDue": 325.45,
        "balance": 13018.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 5000.52,
        "minPaymentDue": 332.53,
        "balance": 13301.0
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 4857.8,
        "minPaymentDue": 339.6,
        "balance": 13584.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3237.19,
        "minPaymentDue": 346.68,
        "balance": 13867.0
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 283.0,
        "minPaymentDue": 353.75,
        "balance": 14150.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2024-08-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0414,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.361,
    "riskIndicators": {
      "creditUtilization": 0.57,
      "paymentHistoryRisk": 0.22,
      "outstandingDebt": 0.36,
      "creditHistoryLength": 0.47,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000180",
    "shortId": "C180",
    "fullName": "John O'Sullivan",
    "email": "cust000180@domain.org",
    "age": 57,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "12.6 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 40325.0,
    "cardType": "Classic Access",
    "creditLimit": 3500.0,
    "outstandingBalance": 2222.5,
    "creditUtilization": 0.635,
    "utilization_rate": 0.635,
    "delayedPayments6M": 1,
    "paymentToMinRatio": 7.8,
    "cashAdvanceCount6M": 3,
    "creditHistoryYears": 30.9,
    "monthlyAverageSpend": 2111.38,
    "creditLines": 6,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 266.28,
        "minPaymentDue": 50.01,
        "balance": 2000.25
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 338.57,
        "minPaymentDue": 51.12,
        "balance": 2044.7
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 668.38,
        "minPaymentDue": 52.23,
        "balance": 2089.15
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 792.48,
        "minPaymentDue": 53.34,
        "balance": 2133.6
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 705.08,
        "minPaymentDue": 54.45,
        "balance": 2178.05
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 44.45,
        "minPaymentDue": 55.56,
        "balance": 2222.5
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2025-09-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.1582,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.18,
    "riskIndicators": {
      "creditUtilization": 0.64,
      "paymentHistoryRisk": 0.22,
      "outstandingDebt": 0.18,
      "creditHistoryLength": 1.0,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000181",
    "shortId": "C181",
    "fullName": "Ava Hawthorne",
    "email": "cust000181@domain.org",
    "age": 45,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "8.1 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 102749.0,
    "cardType": "Silver Rewards",
    "creditLimit": 15000.0,
    "outstandingBalance": 11985.0,
    "creditUtilization": 0.799,
    "utilization_rate": 0.799,
    "delayedPayments6M": 1,
    "paymentToMinRatio": 1.5,
    "cashAdvanceCount6M": 2,
    "creditHistoryYears": 20.2,
    "monthlyAverageSpend": 11385.75,
    "creditLines": 3,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3336.87,
        "minPaymentDue": 269.66,
        "balance": 10786.5
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3791.3,
        "minPaymentDue": 275.66,
        "balance": 11026.2
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 970.69,
        "minPaymentDue": 281.65,
        "balance": 11265.9
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3100.86,
        "minPaymentDue": 287.64,
        "balance": 11505.6
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 744.8,
        "minPaymentDue": 293.63,
        "balance": 11745.3
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 239.7,
        "minPaymentDue": 299.62,
        "balance": 11985.0
      }
    ],
    "segment": "High-Risk Revolvers",
    "joinedDate": "2021-01-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0477,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.448,
    "riskIndicators": {
      "creditUtilization": 0.8,
      "paymentHistoryRisk": 0.22,
      "outstandingDebt": 0.45,
      "creditHistoryLength": 1.0,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000182",
    "shortId": "C182",
    "fullName": "Liam Zimmerman",
    "email": "cust000182@domain.org",
    "age": 48,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "8.0 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 35949.0,
    "cardType": "Classic Access",
    "creditLimit": 2000.0,
    "outstandingBalance": 1098.0,
    "creditUtilization": 0.549,
    "utilization_rate": 0.549,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 5.8,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 19.5,
    "monthlyAverageSpend": 1043.1,
    "creditLines": 4,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 139.7,
        "minPaymentDue": 24.71,
        "balance": 988.2
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 376.5,
        "minPaymentDue": 25.25,
        "balance": 1010.16
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 523.8,
        "minPaymentDue": 25.8,
        "balance": 1032.12
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 511.82,
        "minPaymentDue": 26.35,
        "balance": 1054.08
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 412.54,
        "minPaymentDue": 26.9,
        "balance": 1076.04
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 331.74,
        "minPaymentDue": 27.45,
        "balance": 1098.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2022-02-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0581,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.287,
    "riskIndicators": {
      "creditUtilization": 0.55,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.29,
      "creditHistoryLength": 0.97,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000183",
    "shortId": "C183",
    "fullName": "Owen Beaumont",
    "email": "cust000183@domain.org",
    "age": 58,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "3.3 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 63923.0,
    "cardType": "Silver Rewards",
    "creditLimit": 10000.0,
    "outstandingBalance": 8330.0,
    "creditUtilization": 0.833,
    "utilization_rate": 0.833,
    "delayedPayments6M": 5,
    "paymentToMinRatio": 1.1,
    "cashAdvanceCount6M": 5,
    "creditHistoryYears": 24.3,
    "monthlyAverageSpend": 7913.5,
    "creditLines": 5,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2408.14,
        "minPaymentDue": 187.43,
        "balance": 7497.0
      },
      {
        "month": "Jun 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 166.6,
        "minPaymentDue": 191.59,
        "balance": 7663.6
      },
      {
        "month": "Jul 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 166.6,
        "minPaymentDue": 195.75,
        "balance": 7830.2
      },
      {
        "month": "Aug 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 166.6,
        "minPaymentDue": 199.92,
        "balance": 7996.8
      },
      {
        "month": "Sep 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 166.6,
        "minPaymentDue": 204.09,
        "balance": 8163.4
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 166.6,
        "minPaymentDue": 208.25,
        "balance": 8330.0
      }
    ],
    "segment": "High-Risk Revolvers",
    "joinedDate": "2023-03-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 1,
    "calibratedProbability": 0.5,
    "riskTier": "High",
    "decisionPolicy": "Curtail Line (-30%)",
    "targetedForSurveillance": true,
    "debt_to_income_est": 0.712,
    "riskIndicators": {
      "creditUtilization": 0.83,
      "paymentHistoryRisk": 0.85,
      "outstandingDebt": 0.71,
      "creditHistoryLength": 1.0,
      "recentInquiries": 0.55
    },
    "notes": [
      {
        "id": "note-auto-183",
        "author": "Risk Underwriter (Trained Policy)",
        "date": "Oct 26, 2026",
        "text": "Account targeted by trained model (PD = 0.50). Decision: Curtail Line (-30%)."
      }
    ]
  },
  {
    "id": "CUST000184",
    "shortId": "C184",
    "fullName": "Isabella Stratton",
    "email": "cust000184@domain.org",
    "age": 42,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "9.6 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 91345.0,
    "cardType": "Platinum Signature",
    "creditLimit": 35000.0,
    "outstandingBalance": 2835.0,
    "creditUtilization": 0.081,
    "utilization_rate": 0.081,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 25.5,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 11.7,
    "monthlyAverageSpend": 2693.25,
    "creditLines": 6,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 839.97,
        "minPaymentDue": 63.79,
        "balance": 2551.5
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 927.53,
        "minPaymentDue": 65.2,
        "balance": 2608.2
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 245.3,
        "minPaymentDue": 66.62,
        "balance": 2664.9
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 192.01,
        "minPaymentDue": 68.04,
        "balance": 2721.6
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1016.15,
        "minPaymentDue": 69.46,
        "balance": 2778.3
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 995.69,
        "minPaymentDue": 70.88,
        "balance": 2835.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2024-04-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0328,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.22,
    "riskIndicators": {
      "creditUtilization": 0.08,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.22,
      "creditHistoryLength": 0.58,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000185",
    "shortId": "C185",
    "fullName": "Isabella Abdi",
    "email": "cust000185@domain.org",
    "age": 56,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "10.6 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 228241.0,
    "cardType": "Platinum Signature",
    "creditLimit": 50000.0,
    "outstandingBalance": 11000.0,
    "creditUtilization": 0.22,
    "utilization_rate": 0.22,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 31.5,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 16.3,
    "monthlyAverageSpend": 10450.0,
    "creditLines": 3,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 764.89,
        "minPaymentDue": 247.5,
        "balance": 9900.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1267.49,
        "minPaymentDue": 253.0,
        "balance": 10120.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3040.08,
        "minPaymentDue": 258.5,
        "balance": 10340.0
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1519.83,
        "minPaymentDue": 264.0,
        "balance": 10560.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2212.23,
        "minPaymentDue": 269.5,
        "balance": 10780.0
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3929.01,
        "minPaymentDue": 275.0,
        "balance": 11000.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2025-05-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0172,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.186,
    "riskIndicators": {
      "creditUtilization": 0.22,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.19,
      "creditHistoryLength": 0.82,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000186",
    "shortId": "C186",
    "fullName": "Lily Kowalski",
    "email": "cust000186@domain.org",
    "age": 46,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "6.8 yrs (OWN)",
    "employerCategory": "Professional Services",
    "annualIncome": 184798.0,
    "cardType": "Platinum Signature",
    "creditLimit": 50000.0,
    "outstandingBalance": 13700.0,
    "creditUtilization": 0.274,
    "utilization_rate": 0.274,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 18.0,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 18.4,
    "monthlyAverageSpend": 13015.0,
    "creditLines": 4,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 862.0,
        "minPaymentDue": 308.25,
        "balance": 12330.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 4791.41,
        "minPaymentDue": 315.1,
        "balance": 12604.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2042.69,
        "minPaymentDue": 321.95,
        "balance": 12878.0
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2866.43,
        "minPaymentDue": 328.8,
        "balance": 13152.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3999.4,
        "minPaymentDue": 335.65,
        "balance": 13426.0
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 766.8,
        "minPaymentDue": 342.5,
        "balance": 13700.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2021-06-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0102,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.134,
    "riskIndicators": {
      "creditUtilization": 0.27,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.13,
      "creditHistoryLength": 0.92,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000187",
    "shortId": "C187",
    "fullName": "Chloe Gallagher",
    "email": "cust000187@domain.org",
    "age": 38,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "6.4 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 73862.0,
    "cardType": "Gold Preferred",
    "creditLimit": 28000.0,
    "outstandingBalance": 26040.0,
    "creditUtilization": 0.93,
    "utilization_rate": 0.93,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 1.7,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 12.3,
    "monthlyAverageSpend": 24738.0,
    "creditLines": 5,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3226.72,
        "minPaymentDue": 585.9,
        "balance": 23436.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3336.17,
        "minPaymentDue": 598.92,
        "balance": 23956.8
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2594.72,
        "minPaymentDue": 611.94,
        "balance": 24477.6
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 9515.66,
        "minPaymentDue": 624.96,
        "balance": 24998.4
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 9001.09,
        "minPaymentDue": 637.98,
        "balance": 25519.2
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 4088.74,
        "minPaymentDue": 651.0,
        "balance": 26040.0
      }
    ],
    "segment": "High-Risk Revolvers",
    "joinedDate": "2022-07-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 1,
    "calibratedProbability": 0.3944,
    "riskTier": "Medium",
    "decisionPolicy": "Surveillance Watch",
    "targetedForSurveillance": true,
    "debt_to_income_est": 0.533,
    "riskIndicators": {
      "creditUtilization": 0.93,
      "paymentHistoryRisk": 0.45,
      "outstandingDebt": 0.53,
      "creditHistoryLength": 0.61,
      "recentInquiries": 0.15
    },
    "notes": [
      {
        "id": "note-auto-187",
        "author": "Risk Underwriter (Trained Policy)",
        "date": "Oct 26, 2026",
        "text": "Account targeted by trained model (PD = 0.39). Decision: Surveillance Watch."
      }
    ]
  },
  {
    "id": "CUST000188",
    "shortId": "C188",
    "fullName": "Alexander Norris",
    "email": "cust000188@domain.org",
    "age": 30,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "15.2 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 222312.0,
    "cardType": "Gold Preferred",
    "creditLimit": 30000.0,
    "outstandingBalance": 4290.0,
    "creditUtilization": 0.143,
    "utilization_rate": 0.143,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 42.3,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 4.3,
    "monthlyAverageSpend": 4075.5,
    "creditLines": 6,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 657.31,
        "minPaymentDue": 96.53,
        "balance": 3861.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1440.94,
        "minPaymentDue": 98.67,
        "balance": 3946.8
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1228.23,
        "minPaymentDue": 100.81,
        "balance": 4032.6
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1281.71,
        "minPaymentDue": 102.96,
        "balance": 4118.4
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1441.62,
        "minPaymentDue": 105.11,
        "balance": 4204.2
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 791.78,
        "minPaymentDue": 107.25,
        "balance": 4290.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2023-08-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0203,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.211,
    "riskIndicators": {
      "creditUtilization": 0.14,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.21,
      "creditHistoryLength": 0.21,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000189",
    "shortId": "C189",
    "fullName": "Carter Al-Mansoor",
    "email": "cust000189@domain.org",
    "age": 23,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "4.5 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 45489.0,
    "cardType": "Classic Access",
    "creditLimit": 5000.0,
    "outstandingBalance": 4495.0,
    "creditUtilization": 0.899,
    "utilization_rate": 0.899,
    "delayedPayments6M": 3,
    "paymentToMinRatio": 1.36,
    "cashAdvanceCount6M": 3,
    "creditHistoryYears": 2.5,
    "monthlyAverageSpend": 4270.25,
    "creditLines": 3,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 917.02,
        "minPaymentDue": 101.14,
        "balance": 4045.5
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 464.04,
        "minPaymentDue": 103.38,
        "balance": 4135.4
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 555.33,
        "minPaymentDue": 105.63,
        "balance": 4225.3
      },
      {
        "month": "Aug 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 89.9,
        "minPaymentDue": 107.88,
        "balance": 4315.2
      },
      {
        "month": "Sep 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 89.9,
        "minPaymentDue": 110.13,
        "balance": 4405.1
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 89.9,
        "minPaymentDue": 112.38,
        "balance": 4495.0
      }
    ],
    "segment": "High-Risk Revolvers",
    "joinedDate": "2024-09-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 1,
    "calibratedProbability": 0.8397,
    "riskTier": "High",
    "decisionPolicy": "Curtail Line (-30%)",
    "targetedForSurveillance": true,
    "debt_to_income_est": 0.588,
    "riskIndicators": {
      "creditUtilization": 0.9,
      "paymentHistoryRisk": 0.85,
      "outstandingDebt": 0.59,
      "creditHistoryLength": 0.12,
      "recentInquiries": 0.55
    },
    "notes": [
      {
        "id": "note-auto-189",
        "author": "Risk Underwriter (Trained Policy)",
        "date": "Oct 26, 2026",
        "text": "Account targeted by trained model (PD = 0.84). Decision: Curtail Line (-30%)."
      }
    ]
  },
  {
    "id": "CUST000190",
    "shortId": "C190",
    "fullName": "Sebastian Yardley",
    "email": "cust000190@domain.org",
    "age": 50,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "1.9 yrs (OWN)",
    "employerCategory": "Professional Services",
    "annualIncome": 134217.0,
    "cardType": "Gold Preferred",
    "creditLimit": 28000.0,
    "outstandingBalance": 22736.0,
    "creditUtilization": 0.812,
    "utilization_rate": 0.812,
    "delayedPayments6M": 1,
    "paymentToMinRatio": 4.1,
    "cashAdvanceCount6M": 4,
    "creditHistoryYears": 21.5,
    "monthlyAverageSpend": 21599.2,
    "creditLines": 4,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 5524.55,
        "minPaymentDue": 511.56,
        "balance": 20462.4
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 5017.83,
        "minPaymentDue": 522.93,
        "balance": 20917.12
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 7608.14,
        "minPaymentDue": 534.3,
        "balance": 21371.84
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 6951.51,
        "minPaymentDue": 545.66,
        "balance": 21826.56
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 4983.98,
        "minPaymentDue": 557.03,
        "balance": 22281.28
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 454.72,
        "minPaymentDue": 568.4,
        "balance": 22736.0
      }
    ],
    "segment": "High-Risk Revolvers",
    "joinedDate": "2025-01-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0171,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.453,
    "riskIndicators": {
      "creditUtilization": 0.81,
      "paymentHistoryRisk": 0.22,
      "outstandingDebt": 0.45,
      "creditHistoryLength": 1.0,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000191",
    "shortId": "C191",
    "fullName": "David Jennings",
    "email": "cust000191@domain.org",
    "age": 57,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "9.0 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 97922.0,
    "cardType": "Gold Preferred",
    "creditLimit": 30000.0,
    "outstandingBalance": 3300.0,
    "creditUtilization": 0.11,
    "utilization_rate": 0.11,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 26.9,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 29.3,
    "monthlyAverageSpend": 3135.0,
    "creditLines": 5,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 662.19,
        "minPaymentDue": 74.25,
        "balance": 2970.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 857.94,
        "minPaymentDue": 75.9,
        "balance": 3036.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 262.0,
        "minPaymentDue": 77.55,
        "balance": 3102.0
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 701.96,
        "minPaymentDue": 79.2,
        "balance": 3168.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 357.8,
        "minPaymentDue": 80.85,
        "balance": 3234.0
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 792.89,
        "minPaymentDue": 82.5,
        "balance": 3300.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2021-02-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0265,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.132,
    "riskIndicators": {
      "creditUtilization": 0.11,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.13,
      "creditHistoryLength": 1.0,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000192",
    "shortId": "C192",
    "fullName": "Zoe Caldwell",
    "email": "cust000192@domain.org",
    "age": 59,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "10.2 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 96467.0,
    "cardType": "Gold Preferred",
    "creditLimit": 20000.0,
    "outstandingBalance": 15340.0,
    "creditUtilization": 0.767,
    "utilization_rate": 0.767,
    "delayedPayments6M": 1,
    "paymentToMinRatio": 3.5,
    "cashAdvanceCount6M": 4,
    "creditHistoryYears": 14.0,
    "monthlyAverageSpend": 14573.0,
    "creditLines": 6,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 4293.14,
        "minPaymentDue": 345.15,
        "balance": 13806.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 4390.83,
        "minPaymentDue": 352.82,
        "balance": 14112.8
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 5628.82,
        "minPaymentDue": 360.49,
        "balance": 14419.6
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3818.49,
        "minPaymentDue": 368.16,
        "balance": 14726.4
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1564.18,
        "minPaymentDue": 375.83,
        "balance": 15033.2
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 306.8,
        "minPaymentDue": 383.5,
        "balance": 15340.0
      }
    ],
    "segment": "High-Risk Revolvers",
    "joinedDate": "2022-03-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0488,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.534,
    "riskIndicators": {
      "creditUtilization": 0.77,
      "paymentHistoryRisk": 0.22,
      "outstandingDebt": 0.53,
      "creditHistoryLength": 0.7,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000193",
    "shortId": "C193",
    "fullName": "Riley MacKenzie",
    "email": "cust000193@domain.org",
    "age": 31,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "14.7 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 98450.0,
    "cardType": "Platinum Signature",
    "creditLimit": 40000.0,
    "outstandingBalance": 4560.0,
    "creditUtilization": 0.114,
    "utilization_rate": 0.114,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 36.9,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 4.0,
    "monthlyAverageSpend": 4332.0,
    "creditLines": 3,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 965.48,
        "minPaymentDue": 102.6,
        "balance": 4104.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 966.99,
        "minPaymentDue": 104.88,
        "balance": 4195.2
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1424.65,
        "minPaymentDue": 107.16,
        "balance": 4286.4
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1129.03,
        "minPaymentDue": 109.44,
        "balance": 4377.6
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 959.32,
        "minPaymentDue": 111.72,
        "balance": 4468.8
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 549.41,
        "minPaymentDue": 114.0,
        "balance": 4560.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2023-04-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0416,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.243,
    "riskIndicators": {
      "creditUtilization": 0.11,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.24,
      "creditHistoryLength": 0.2,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000194",
    "shortId": "C194",
    "fullName": "Hannah Ellington",
    "email": "cust000194@domain.org",
    "age": 57,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "13.4 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 231158.0,
    "cardType": "Gold Preferred",
    "creditLimit": 30000.0,
    "outstandingBalance": 1560.0,
    "creditUtilization": 0.052,
    "utilization_rate": 0.052,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 19.4,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 31.1,
    "monthlyAverageSpend": 1482.0,
    "creditLines": 4,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 159.8,
        "minPaymentDue": 35.1,
        "balance": 1404.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 222.18,
        "minPaymentDue": 35.88,
        "balance": 1435.2
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 413.09,
        "minPaymentDue": 36.66,
        "balance": 1466.4
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 432.82,
        "minPaymentDue": 37.44,
        "balance": 1497.6
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 368.15,
        "minPaymentDue": 38.22,
        "balance": 1528.8
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 363.02,
        "minPaymentDue": 39.0,
        "balance": 1560.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2024-05-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0111,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.191,
    "riskIndicators": {
      "creditUtilization": 0.05,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.19,
      "creditHistoryLength": 1.0,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000195",
    "shortId": "C195",
    "fullName": "Amara Chen",
    "email": "cust000195@domain.org",
    "age": 46,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "6.9 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 126010.0,
    "cardType": "Gold Preferred",
    "creditLimit": 28000.0,
    "outstandingBalance": 21336.0,
    "creditUtilization": 0.762,
    "utilization_rate": 0.762,
    "delayedPayments6M": 1,
    "paymentToMinRatio": 1.6,
    "cashAdvanceCount6M": 5,
    "creditHistoryYears": 16.4,
    "monthlyAverageSpend": 20269.2,
    "creditLines": 5,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 7857.81,
        "minPaymentDue": 480.06,
        "balance": 19202.4
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 4734.62,
        "minPaymentDue": 490.73,
        "balance": 19629.12
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1674.72,
        "minPaymentDue": 501.4,
        "balance": 20055.84
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 6087.67,
        "minPaymentDue": 512.06,
        "balance": 20482.56
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 5260.45,
        "minPaymentDue": 522.73,
        "balance": 20909.28
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 426.72,
        "minPaymentDue": 533.4,
        "balance": 21336.0
      }
    ],
    "segment": "High-Risk Revolvers",
    "joinedDate": "2025-06-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0806,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.498,
    "riskIndicators": {
      "creditUtilization": 0.76,
      "paymentHistoryRisk": 0.22,
      "outstandingDebt": 0.5,
      "creditHistoryLength": 0.82,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000196",
    "shortId": "C196",
    "fullName": "Aaron Montague",
    "email": "cust000196@domain.org",
    "age": 44,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "11.8 yrs (OTHER)",
    "employerCategory": "Professional Services",
    "annualIncome": 52129.0,
    "cardType": "Classic Access",
    "creditLimit": 5000.0,
    "outstandingBalance": 2245.0,
    "creditUtilization": 0.449,
    "utilization_rate": 0.449,
    "delayedPayments6M": 1,
    "paymentToMinRatio": 5.0,
    "cashAdvanceCount6M": 1,
    "creditHistoryYears": 18.2,
    "monthlyAverageSpend": 2132.75,
    "creditLines": 6,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 650.27,
        "minPaymentDue": 50.51,
        "balance": 2020.5
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 263.5,
        "minPaymentDue": 51.64,
        "balance": 2065.4
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 561.14,
        "minPaymentDue": 52.76,
        "balance": 2110.3
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 414.74,
        "minPaymentDue": 53.88,
        "balance": 2155.2
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 145.43,
        "minPaymentDue": 55.0,
        "balance": 2200.1
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 44.9,
        "minPaymentDue": 56.12,
        "balance": 2245.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2021-07-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0664,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.211,
    "riskIndicators": {
      "creditUtilization": 0.45,
      "paymentHistoryRisk": 0.22,
      "outstandingDebt": 0.21,
      "creditHistoryLength": 0.91,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000197",
    "shortId": "C197",
    "fullName": "Marcus Quinn",
    "email": "cust000197@domain.org",
    "age": 26,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "15.3 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 217825.0,
    "cardType": "Platinum Signature",
    "creditLimit": 50000.0,
    "outstandingBalance": 5900.0,
    "creditUtilization": 0.118,
    "utilization_rate": 0.118,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 15.2,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 6.1,
    "monthlyAverageSpend": 5605.0,
    "creditLines": 3,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1213.69,
        "minPaymentDue": 132.75,
        "balance": 5310.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1204.85,
        "minPaymentDue": 135.7,
        "balance": 5428.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 363.18,
        "minPaymentDue": 138.65,
        "balance": 5546.0
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 555.31,
        "minPaymentDue": 141.6,
        "balance": 5664.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 592.95,
        "minPaymentDue": 144.55,
        "balance": 5782.0
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1178.23,
        "minPaymentDue": 147.5,
        "balance": 5900.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2022-08-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.1388,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.197,
    "riskIndicators": {
      "creditUtilization": 0.12,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.2,
      "creditHistoryLength": 0.3,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000198",
    "shortId": "C198",
    "fullName": "Hannah Xavier",
    "email": "cust000198@domain.org",
    "age": 68,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "18.5 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 91384.0,
    "cardType": "Silver Rewards",
    "creditLimit": 12000.0,
    "outstandingBalance": 4668.0,
    "creditUtilization": 0.389,
    "utilization_rate": 0.389,
    "delayedPayments6M": 1,
    "paymentToMinRatio": 6.3,
    "cashAdvanceCount6M": 4,
    "creditHistoryYears": 36.1,
    "monthlyAverageSpend": 4434.6,
    "creditLines": 4,
    "inquiriesLast6M": 2,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1099.64,
        "minPaymentDue": 105.03,
        "balance": 4201.2
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 824.41,
        "minPaymentDue": 107.36,
        "balance": 4294.56
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1136.37,
        "minPaymentDue": 109.7,
        "balance": 4387.92
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1545.08,
        "minPaymentDue": 112.03,
        "balance": 4481.28
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1373.56,
        "minPaymentDue": 114.37,
        "balance": 4574.64
      },
      {
        "month": "Oct 2026",
        "status": "late",
        "daysDelayed": 30,
        "paymentAmount": 93.36,
        "minPaymentDue": 116.7,
        "balance": 4668.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2023-09-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 1,
    "calibratedProbability": 0.3911,
    "riskTier": "Medium",
    "decisionPolicy": "Surveillance Watch",
    "targetedForSurveillance": true,
    "debt_to_income_est": 0.405,
    "riskIndicators": {
      "creditUtilization": 0.39,
      "paymentHistoryRisk": 0.57,
      "outstandingDebt": 0.41,
      "creditHistoryLength": 1.0,
      "recentInquiries": 0.15
    },
    "notes": [
      {
        "id": "note-auto-198",
        "author": "Risk Underwriter (Trained Policy)",
        "date": "Oct 26, 2026",
        "text": "Account targeted by trained model (PD = 0.39). Decision: Surveillance Watch."
      }
    ]
  },
  {
    "id": "CUST000199",
    "shortId": "C199",
    "fullName": "Scarlett Caldwell",
    "email": "cust000199@domain.org",
    "age": 50,
    "gender": "Male",
    "accountType": "Individual",
    "employmentStatus": "11.2 yrs (MORTGAGE)",
    "employerCategory": "Corporate & Enterprise",
    "annualIncome": 109666.0,
    "cardType": "Silver Rewards",
    "creditLimit": 15000.0,
    "outstandingBalance": 12750.0,
    "creditUtilization": 0.85,
    "utilization_rate": 0.85,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 1.6,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 17.6,
    "monthlyAverageSpend": 12112.5,
    "creditLines": 5,
    "inquiriesLast6M": 0,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1425.69,
        "minPaymentDue": 286.88,
        "balance": 11475.0
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 4464.82,
        "minPaymentDue": 293.25,
        "balance": 11730.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3672.55,
        "minPaymentDue": 299.62,
        "balance": 11985.0
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 2807.28,
        "minPaymentDue": 306.0,
        "balance": 12240.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 3851.12,
        "minPaymentDue": 312.38,
        "balance": 12495.0
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1231.28,
        "minPaymentDue": 318.75,
        "balance": 12750.0
      }
    ],
    "segment": "Revolving Balances",
    "joinedDate": "2024-01-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.1176,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.513,
    "riskIndicators": {
      "creditUtilization": 0.85,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.51,
      "creditHistoryLength": 0.88,
      "recentInquiries": 0.15
    },
    "notes": []
  },
  {
    "id": "CUST000200",
    "shortId": "C200",
    "fullName": "Emily Winslow",
    "email": "cust000200@domain.org",
    "age": 55,
    "gender": "Female",
    "accountType": "Individual",
    "employmentStatus": "10.4 yrs (RENT)",
    "employerCategory": "Professional Services",
    "annualIncome": 166521.0,
    "cardType": "Gold Preferred",
    "creditLimit": 25000.0,
    "outstandingBalance": 5125.0,
    "creditUtilization": 0.205,
    "utilization_rate": 0.205,
    "delayedPayments6M": 0,
    "paymentToMinRatio": 32.8,
    "cashAdvanceCount6M": 0,
    "creditHistoryYears": 15.0,
    "monthlyAverageSpend": 4868.75,
    "creditLines": 6,
    "inquiriesLast6M": 1,
    "repaymentHistory": [
      {
        "month": "May 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 590.28,
        "minPaymentDue": 115.31,
        "balance": 4612.5
      },
      {
        "month": "Jun 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 733.54,
        "minPaymentDue": 117.88,
        "balance": 4715.0
      },
      {
        "month": "Jul 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1142.78,
        "minPaymentDue": 120.44,
        "balance": 4817.5
      },
      {
        "month": "Aug 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1543.36,
        "minPaymentDue": 123.0,
        "balance": 4920.0
      },
      {
        "month": "Sep 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 1374.04,
        "minPaymentDue": 125.56,
        "balance": 5022.5
      },
      {
        "month": "Oct 2026",
        "status": "on-time",
        "daysDelayed": 0,
        "paymentAmount": 710.36,
        "minPaymentDue": 128.12,
        "balance": 5125.0
      }
    ],
    "segment": "Prime Transactors",
    "joinedDate": "2025-02-15",
    "lastAssessmentDate": "2026-10-26",
    "actualDefault": 0,
    "calibratedProbability": 0.0172,
    "riskTier": "Low",
    "decisionPolicy": "Standard Facility",
    "targetedForSurveillance": false,
    "debt_to_income_est": 0.095,
    "riskIndicators": {
      "creditUtilization": 0.2,
      "paymentHistoryRisk": 0.1,
      "outstandingDebt": 0.1,
      "creditHistoryLength": 0.75,
      "recentInquiries": 0.15
    },
    "notes": []
  }
];
