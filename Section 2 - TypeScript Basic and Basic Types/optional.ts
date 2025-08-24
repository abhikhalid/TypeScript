function generateError(message?: string) {
    throw new Error(message);
}

generateError();

type User = {
    name: string; 
    age: number;
    role?: 'admin' | 'guest'
}

let input = '';
const didProvideInput = input ?? false;