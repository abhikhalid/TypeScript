type DataStore = {
    [prop: string]: number | boolean;
}

let store: DataStore = {};

store.id = 3;
store.isOpen = true;

// store.name = "My Store"; // Error: Type 'string' is not assignable to type 'number | boolean'.