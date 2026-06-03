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