let names : Array<string> = ['Khalid','Mahmud']


type DataStore<T> = {
    [key : string] : T;
}

let store : DataStore<string | boolean> = {};

store.name = 'Khalid';
store.IsInstructor = true;

let nameStore: DataStore<string> = {};


function merge<T extends object, U extends object>(a: T, b: U) {
    return {...a,...b};
}

const merged = merge({id: 1}, {name: 'Khalid'});
console.log(merged);


interface Role<T>{
    
}

class User<T>{
    constructor(public id: T) {
    }
}

const user1 = new User<number>(1);
const user2 = new User<string>('abc');
user1.id; // number
user2.id; // string