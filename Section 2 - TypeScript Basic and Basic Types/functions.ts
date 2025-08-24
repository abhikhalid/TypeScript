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