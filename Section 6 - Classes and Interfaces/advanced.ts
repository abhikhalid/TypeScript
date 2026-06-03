// Getter in TypeScript
// A getter is a method that gets the value of a specific property. 
// It allows you to define a method that will be called when you try to access a property of an object. This can be useful for encapsulating the internal representation of an object and providing a way to access it in a controlled manner.
// In TypeScript, you can define a getter using the `get` keyword. Here's an example of how to use a getter in a class:


class User{
    private _firstName: string = '';
    private _lastName: string = '';

    // This is a getter for the fullName property
    get fullName(): string {
        return `${this._firstName} ${this.lastName}`;
    }

    set firstName(name: string) {
        if(name.trim() === '') {
            throw new Error('First name cannot be empty');
        }

        this._firstName = name;
    }

      set lastName(name: string) {
        if(name.trim() === '') {
            throw new Error('Last name cannot be empty');
        }

        this._lastName = name;
    }
}


const user = new User();
user.firstName = 'John';
user.lastName = 'Doe';
console.log(user.fullName); // Output: John Doe

// In this example, we have a `User` class with private properties `_firstName` and `_lastName`. We define a getter `fullName` that returns the full name of the user by concatenating the first and last names. We also have setter methods for `firstName` and `lastName` to allow setting these properties while ensuring they are not empty. When we create an instance of the `User` class and set the first and last names, we can access the full name using the `fullName` getter.

