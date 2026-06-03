interface Authenticatable{
    email: string;
    password: string;

    login(): void;
    logout(): void;
}

interface Authenticatable {
    role: string;
}
// Now the Authenticatable interface has both the properties 
// and methods from the original definition and the new role property.

let user: Authenticatable;

user = {
    email: "test@example.com",
    password: "password123",
    login() {
        console.log("User logged in.");
    },
    logout() {
        console.log("User logged out.");
    },
    role: "user"
}

//Difference between type and interface in TypeScript:
// 1. Declaration: Interfaces are declared using the 'interface' keyword, while types are declared using the 'type' keyword.
// 2. Extensibility: Interfaces can be extended using the 'extends' keyword, allowing you to create new interfaces based on existing ones. Types cannot be extended in the same way, but they can be composed using intersection types.
// 3. Merging: Interfaces can be merged, meaning that if you declare the same interface multiple times, TypeScript will combine their properties. Types cannot be merged; if you declare the same type multiple times, it will result in an error.
// 4. Use Cases: Interfaces are typically used to define the shape of objects and to describe the structure of classes. Types are more versatile and can be used for a wider range of purposes, including union types, intersection types, and mapped types.

// ============================================================
// CODE EXAMPLES FOR THESE CLAIMS
// ============================================================

// 1. DECLARATION EXAMPLE
// Using interface keyword
interface Animal {
    name: string;
    age: number;
}

// Using type keyword
type Vehicle = {
    brand: string;
    year: number;
};

// Both work similarly for object structures, but have different syntax

// ============================================================
// 2. EXTENSIBILITY EXAMPLE
// Interface extension with 'extends'
interface Person {
    name: string;
    age: number;
}

interface Employee extends Person {
    employeeId: string;
    department: string;
}

// Type composition with intersection (&)
type PersonType = {
    name: string;
    age: number;
};

type EmployeeType = PersonType & {
    employeeId: string;
    department: string;
};

const employee: Employee = {
    name: "John",
    age: 30,
    employeeId: "E123",
    department: "IT"
};

// ============================================================
// 3. MERGING EXAMPLE
// Interfaces can be merged (same interface declared twice)
interface Shape {
    width: number;
}

interface Shape {
    height: number;
}

// Now Shape has both width and height properties
const rectangle: Shape = {
    width: 10,
    height: 20
};

// Types CANNOT be merged - this would cause an error:
// type Color = { red: number };
// type Color = { blue: number }; // ERROR: Duplicate identifier 'Color'

// ============================================================
// 4. USE CASES EXAMPLE
// Types are better for union types
type Status = "success" | "error" | "pending";
type Response = string | number | boolean;

// Types for intersection types
type Admin = {
    adminLevel: number;
};

type User = {
    userId: string;
};

type AdminUser = Admin & User; // Intersection of Admin and User

// Types for mapped types
type Readonly_<T> = {
    readonly [K in keyof T]: T[K];
};

type ReadonlyPerson = Readonly_<PersonType>;

// Interfaces are typically used for defining class contracts
interface Logger {
    log(message: string): void;
    error(message: string): void;
}

class ConsoleLogger implements Logger {
    log(message: string): void {
        console.log(`[LOG] ${message}`);
    }
    error(message: string): void {
        console.log(`[ERROR] ${message}`);
    }
}