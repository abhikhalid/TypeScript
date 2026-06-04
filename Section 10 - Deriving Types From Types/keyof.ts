// TypeScript also has 'keyof' operator 

//Image you have a type 'User'

type User = {
    name: string;
    age:  number;
};

//


type UserKeys = keyof User;

let validKey: UserKeys;

validKey = 'name';
validKey = 'age';