"use strict";
//data:
// initial amount
// annual contribution
// expected annual return
// duration
Object.defineProperty(exports, "__esModule", { value: true });
function calculateInvestment(data) {
    const { initialAmount, annualContribution, expectedReturn, duration } = data;
    if (initialAmount < 0) {
        return "Initial amount cannot be negative.";
    }
    if (duration <= 0) {
        return "Duration must be greater than zero.";
    }
    if (expectedReturn < 0) {
        return "Expected return cannot be negative.";
    }
    let total = initialAmount;
    let totalContributions = 0;
    let totalInterestEarned = 0;
    const annualResults = [];
    for (let i = 0; i <= duration; i++) {
        total = total * (1 + expectedReturn);
        totalInterestEarned = total - totalContributions - initialAmount;
        totalContributions += annualContribution;
        total += annualContribution;
        annualResults.push({
            year: `Year ${i + 1}`,
            totalAmount: total,
            totalContributions: totalContributions,
            totalInterestEarned: totalInterestEarned
        });
    }
    return annualResults;
}
function printResults(results) {
    if (typeof results === "string") {
        console.log(results);
        return;
    }
    else {
        results.forEach((result) => {
            console.log(`${result.year}: Total Amount - ${result.totalAmount.toFixed(0)}, 
            Total Contributions - ${result.totalContributions.toFixed(0)},
             Total Interest Earned - ${result.totalInterestEarned.toFixed(0)}`);
        });
    }
}
const investmentData = {
    initialAmount: 10000,
    annualContribution: 5000,
    expectedReturn: 0.07,
    duration: 20
};
const results = calculateInvestment(investmentData);
printResults(results);
//# sourceMappingURL=calculator.js.map