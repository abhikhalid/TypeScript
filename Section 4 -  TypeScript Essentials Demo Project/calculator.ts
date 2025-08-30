//data:
//initial amount
//annual contribution
//expected return
//duration

type InvestmentData = {
    initialAmount: number;
    annualContribution: number;
    expectedReturn: number; //percentage
    duration: number; //years
};


//approach 1
// function calculateInvestment(data: {
//     initialAmount: number;
//     annualContribution: number;
//     expectedReturn: number; //percentage
//     duration: number; //years
// }) { 

// } //result[]

//approach 2 - using type alias
function calculateInvestment(data: InvestmentData) { 
    
} // result[]


function printResults(result) {
    //print (output) the result data
}

const results = calculateInvestment(...)

printResults(results);