// Getter in TypeScript
// A getter is a method that gets the value of a specific property. 
// It allows you to define a method that will be called when you try to access a property of an object. This can be useful for encapsulating the internal representation of an object and providing a way to access it in a controlled manner.
// In TypeScript, you can define a getter using the `get` keyword. Here's an example of how to use a getter in a class:


class User{
    constructor(private firstName: string, private lastName: string) {}

    // This is a getter for the fullName property
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

const user = new User("John", "Doe");
console.log(user.fullName); // Output: John Doe

// type 'tsc' and 'node advanced.js' in the terminal to compile and run the code respectively.
