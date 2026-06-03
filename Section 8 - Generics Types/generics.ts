let names : Array<string> = ['Khalid','Mahmud']


type DataStore<T> = {
    [key : string] : T;
}

let store : DataStore<string | boolean> = {};

store.name = 'Khalid';
store.IsInstructor = true;

let nameStore: DataStore<string> = {};


function merge<T extends object>(a: T, b: T) {
    return {...a,...b};
}

const ids = merge({id: 1}, {name: 'Khalid'});