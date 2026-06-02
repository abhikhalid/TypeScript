"use strict";
// class User{
//     name: string;
//     age: number;
Object.defineProperty(exports, "__esModule", { value: true });
//     constructor(name: string, age: number){
//         this.name = name;
//         this.age = age;
//     }
// }
class User {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const khalid = new User("Khalid", 30);
console.log(khalid.name);
console.log(khalid.age);
// run 'node basics.js' in terminal to see the output
//# sourceMappingURL=basics.js.map