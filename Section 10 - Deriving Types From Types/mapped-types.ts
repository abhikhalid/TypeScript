type Operations = {
    add: (a:number,b:number) => number;
    subtract: (a:number,b:number) => number;
};


let mathOperations: Operations = {
    add(a:number, b:number){
        return a + b;
    },

    subtract(a:number, b:number){
        return a-b;
    }
}

//let's say I want to store the result of the 'mathOperations'
type Results<T> = {
    [Key in keyof T]: number;
}

let mathResults: Results<Operations> = {
    add: mathOperations.add(1,2),
    subtract: mathOperations.subtract(5,2)
};