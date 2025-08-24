// unknown type: a type that typicially use in conjunction with function.

//Let's say we have process function that should process some value that might be retrieved from a database or an API. We don't know the type of that value until runtime. In such cases, we can use the unknown type to ensure type safety while still allowing flexibility.

//It is like any, but safer because you must perform type checks before performing operations on it.
function process(value: any) {
    value.log(); // no error because we with 'any' type, we are back in js. But this might cause runtime error if value does not have log method.
}

function processUnknown(value: unknown) {
   if (typeof value === 'object' && value !== null && 'log' in value && typeof (value as any).log === 'function') {
       (value as any).log(); // Now it's safe to call log method
   }
}
