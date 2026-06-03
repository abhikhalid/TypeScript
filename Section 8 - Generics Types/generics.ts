let names : Array<string> = ['Khalid','Mahmud']


type DataStore<T> = {
    [key : string] : T;
}

let store : DataStore<string | boolean> = {};

store.name = 'Khalid';
store.IsInstructor = true;

let nameStore: DataStore<string> = {};


function merge<T, U>(a: T, b: U) {
    return [a,b];
}

// const ids = merge(1,"Khalid");
const ids = merge<number,string>(1,"Khalid");