// const userName = 'Khalid'

// let age = 30;

// age = 29;

// function add(a: number, b: number): number {
//  let result = a + b; // result is a local variable that holds the sum of a and b (only available within the function)
//  return result;
// }

// console.log(add(5, 10));



// if(age > 18) {
//  console.log('You are an adult.');
// }

// const add = (a: number, b: number = 1): number => {
//     return a + b;
// }


// const add2 = (a: number, b: number): number => a + b;


// const printOutput: (output: string | number) => void = output => console.log(output);

// const button = document.querySelector('button')!;

// if(button){
//     button.addEventListener('click', event => console.log(event));
// }

// printOutput(add(5));
// printOutput(add2(5, 10));


const hobbies = ['Sports', 'Cooking'];

const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

const person = {
    name: 'Khalid',
    age: 30
};


// const copiedPerson = person; // This will not create a new object, but rather a reference to the original person object

const copiedPerson = { ...person };


const add = (...numbers: number[]) =>{
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
}

const addedNumbers = add(5, 10, 2, 3.7);

console.log(addedNumbers);
