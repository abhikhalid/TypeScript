// Decorator is an object oriented related feature, I will start by adding a class

function logger(target: any, ctx: ClassDecoratorContext){
    console.log('logger decorator');
    console.log(target);
    console.log(ctx);
}

@logger
class Person{
    name = 'Khalid';

    greet(){
        console.log('Hi, I am '+ this.name);
    }
}

//in the terminal
// tsc
// node decorator.ts
