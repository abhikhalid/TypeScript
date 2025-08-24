// enum Role{
//     Admin,
//     Editor,
//     Guest,
// }

// let userRole: Role = Role.Admin;

// //......

// userRole = Role.Guest;

// run command: tsc choices.ts


type Role = 'admin' | 'editor' | 'guest' | 'reader';

type User = {
    name: string;
    age: number;
    role: Role;
    permissions: string[];
}

// let userRole: 'admin' | 'editor' | 'guest' | 'reader' = 'admin';
let userRole: Role = 'admin';

//...

userRole = 'guest';

let possibleResults: [1|-1, 1|-1]; //[1,-1]
possibleResults = [1, -1];


// function access(role: 'admin' | 'editor' | 'guest' | 'reader') {
//     //......
// }

function access(role: Role) {
    //......
}