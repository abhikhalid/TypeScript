function add(a:number, b:number){
    return a + b;
}

type AddFn = typeof add; //to get the type of the function

// but what if I want to get the only return type of the return function? 

// that's when 'infer' helps us


// type ReturnValueType<T> = T extends (...args: any[]) => infer RV ? RV : T;
type ReturnValueType<T> = T extends (...args: any[]) => infer RV ? RV : never;

type AddFnReturnValueType = ReturnValueType<AddFn>