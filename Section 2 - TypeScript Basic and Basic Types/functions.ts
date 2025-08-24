function add(a: number, b: number):number {
    return a + b;
}

function log(message: string): void {
    console.log(message);
}

//typescript infers the return type of function as void
function logAndThrow(errorMessage: string) {
    console.log(errorMessage);
    throw new Error(errorMessage);
}

//but you could also explicitly specify the return type 'never' for functions that never return a value
//you could say that the function never completes
function logAndThrow(errorMessage: string): never {
    console.log(errorMessage);
    throw new Error(errorMessage);
}


const logMsg = (msg: string) => {
    console.log(msg);
}

function performJob(cb: (msg: string) => void) {
    cb("Job is done");  
}

performJob(logMsg);

type User = {
    name: string;
    age: number;
    greet: () => string;
};

let user: User = {
    name: 'Max',
    age: 32,
    greet() {
        return 'Hello, I am ' + this.name;
    }
}