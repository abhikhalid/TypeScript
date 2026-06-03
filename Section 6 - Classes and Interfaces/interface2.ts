interface Authenticatable{
        email: string;
        password: string;

        login(): void;
        logout(): void;
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
}