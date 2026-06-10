// Decorator is an object oriented related feature, I will start by adding a class

//Class Decorator
function logger<T extends new (...args: any[]) => any>(target: T, ctx: ClassDecoratorContext) {
    console.log('\n logger decorator - class decorator');
    console.log(target);
    console.log(ctx);

    //Replacing the original class constructor by 'return' keyword
    return class extends target{
        constructor(...args:any[]){
            super(...args);
            console.log('class constructor');
            console.log(this);
        }
    }
}

// Method Decorator
function autobind(target: (...args: any[]) => any, ctx: ClassMethodDecoratorContext) {
   ctx.addInitializer(function(this:any){
        this[ctx.name] = this[ctx.name].bind(this);
   });

   // just as with the class decorator, the method decorator can also return an updated version of the method you are binding to
   // or you could replace the original method if you are willing to

   return function(this:any){
     console.log('\n autobind - method decorator');
     console.log('Executing original function')
     target.apply(this); // you are essentially wrapping the original function
     // apply executes immediately.
   }
}


//Field Decorator
function fieldLogger(target: undefined, ctx: ClassFieldDecoratorContext){
    console.log('\n fieldLogger - Field Decorator');
    console.log(target);
    console.log(ctx);

    return (initialValue: any) => {
        console.log(initialValue);
        return '';
    }
}



@logger
class Person{
    @fieldLogger
    name = 'Khalid';

    Person(){
        console.log('I am parent constructor');
    }

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
