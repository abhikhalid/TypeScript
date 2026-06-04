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
// validKey = 'sdfde'; //error

function getProp<T extends object,U extends keyof T>(obj:T, key:U){
    const val = obj[key];

    if(val === undefined || val==null) {
        throw new Error("Accessing undefined or null value");
    }

    return val;
}

const user = {name: 'Khalid', age: 30};

const val = getProp(user,'age');

const data = {id:1, isStored:false,values:[1,-5,10]};

const isStored = getProp(data,'isStored');

