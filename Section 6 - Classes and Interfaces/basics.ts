// class User{
//     name: string;
//     age: number;

//     constructor(name: string, age: number){
//         this.name = name;
//         this.age = age;
//     }
// }

class User{
    // public readonly hobbies: string[] = [];
    readonly hobbies: string[] = [];

    constructor(public name: string, private readonly age: number) {
    }

    greet(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}


const khalid = new User("Khalid", 30);
khalid.greet();

console.log(khalid.name);
// console.log(khalid.age); error: Property 'age' is private and only accessible within class 'User'.


// run 'tsc' and 'node basics.js' in terminal to see the output

// readonly properties can be assigned only once, either at the point of declaration or within the constructor.
// khalid.hobbies.push("Programming"); // This is allowed because we are not reassigning the hobbies array, but modifying its contents.
// khalid.hobbies = ["Programming"]; // This will cause an error because we are trying to reassign the hobbies array, which is readonly.