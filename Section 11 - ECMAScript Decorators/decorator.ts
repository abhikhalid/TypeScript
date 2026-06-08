// Decorator is an object oriented related feature, I will start by adding a class

function logger<T extends new (...args: any[]) => any>(target: T, ctx: ClassDecoratorContext){
    console.log('logger decorator');
    console.log(target);
    console.log(ctx);

    return class extends target{
        age = 30;
    }
}

@logger
class Person{
    name = 'Khalid';

    greet(){
        console.log('Hi, I am '+ this.name);
    }
}

const person = new Person();
console.log(person);

//in the terminal
// tsc
// node decorator.ts
