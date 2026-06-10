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
   ctx.addInitializer(function(this:any){
        this[ctx.name] = this[ctx.name].bind(this);
   });

   // just as with the class decorator, the method decorator can also return an updated version of the method you are binding to
   // or you could replace the original method if you are willing to

   return function(this:any){
     console.log('Executing original function')
     target.apply(this); // you are essentially wrapping the original function
     // apply executes immediately.
   }
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
const greet = max.greet;
greet(); 



//in the terminal
// tsc --init
// tsc
// node decorator.js
