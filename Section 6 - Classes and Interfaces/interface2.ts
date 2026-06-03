interface Authenticatable{
        email: string;
        password: string;

        login(): void;
        logout(): void;
}

interface AuthenticatableAdmin extends Authenticatable {
    role: 'admin' | 'superadmin';
}

class AuthenticatableUser implements Authenticatable {
    email: string;
    password: string;

    constructor(public userName: string, email: string, password: string) {
        this.email = email;
        this.password = password;
    }

    login(): void {
        console.log("User logged in.");
    }

    logout(): void {
        console.log("User logged out.");
    }
}


function authenticate(user: Authenticatable) {
    user.login();
    // Additional authentication logic can be added here
    user.logout();
}

// in the terminal type the following command to compile the TypeScript code:
// tsc interface2.ts --target ES2022 --module NodeNext
// This will generate a JavaScript file named interface2.js that can be run in a Node.js environment.
// To run the generated JavaScript file, use the following command in the terminal:
// node interface2.js

// in the compiled JavaScript file, you will see the output from the login and logout methods when the authenticate function is called with an instance of AuthenticatableUser.
// see the image.png file for the expected output in the terminal.