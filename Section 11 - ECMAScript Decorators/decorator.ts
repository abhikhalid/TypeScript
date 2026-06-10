// Decorator is an object oriented related feature, I will start by adding a class

function logger<T extends new (...args: any[]) => any>(target: T, ctx: ClassDecoratorContext) {
    console.log('logger decorator');
    console.log(target);
    console.log(ctx);

    return class extends target{
        constructor(...args:any[]){
            super(...args);
            console.log('class constructor');
            console.log(this);
        }
    }
}

function autobind(target: (...args: any[]) => any, ctx: ClassMethodDecoratorContext) {
    console.log(target);
    console.log(ctx);
}

@logger
class Person{
    name = 'Khalid';
   
    @autobind
    greet(){
        console.log('Hi, I am '+ this.name);
    }
}

//let's just point to greet function, not execute it
const max = new Person();
const greet = max.greet();
greet(); //error.



//in the terminal
// tsc --init
// tsc
// node decorator.js
