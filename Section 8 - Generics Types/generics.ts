let names : Array<string> = ['Khalid','Mahmud']


type DataStore = {
    [key : string] : string | number;
}

let store : DataStore = {};

store.name = 'Khalid';
store.age = 30;
