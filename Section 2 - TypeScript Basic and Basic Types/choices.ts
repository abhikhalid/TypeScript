enum Role{
    Admin,
    Editor,
    Guest,
}

let userRole: Role = Role.Admin;

//......

userRole = Role.Guest;

// run command: tsc choices.ts

