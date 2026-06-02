// class User{
//     name: string;
//     age: number;

//     constructor(name: string, age: number){
//         this.name = name;
//         this.age = age;
//     }
// }

class User{
    constructor(public name: string, public age: number) {
    }
}


const khalid = new User("Khalid", 30);

console.log(khalid.name);
console.log(khalid.age);


// run 'tsc' and 'node basics.js' in terminal to see the output