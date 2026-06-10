// Decorator is an object oriented related feature, I will start by adding a class

function logger<T extends new (...args: any[]) => any>(target: T) {
    console.log('logger decorator');
    console.log(target);

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

const person = new Person();
const person2 = new Person();

//in the terminal
// tsc --init
// tsc
// node decorator.js
