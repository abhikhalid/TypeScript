const userName = 'Khalid'

let age = 30;

age = 29;

function add(a: number, b: number): number {
 let result = a + b; // result is a local variable that holds the sum of a and b (only available within the function)
 return result;
}

console.log(add(5, 10));



if(age > 18) {
 console.log('You are an adult.');
}