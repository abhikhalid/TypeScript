//data:
// initial amount
// annual contribution
// expected annual return
// duration

type InvestmentData = {
  initialAmount: number;
  annualContribution: number;
  expectedReturn: number;
  duration: number;
};

type InvestmentResult = {
  year: number;
  totalAmount: number;
  totalContributions: number;
  totalInterestEarned: number;
};

type CalculationResult = InvestmentResult[] | string;

function calculateInvestment(data: InvestmentData): CalculationResult {
  // Implementation for investment calculation
  return [];
}

function printResults(results: InvestmentResult[]) {} // => print (output) the result data

const results =calculateInvestment(...)


printResults(results)