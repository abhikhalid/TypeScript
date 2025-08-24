let hobbies = ['Sports', 'Cooking'];

// hobbies.push(10); // This will cause a type error

let users: (string | number)[];

users = [1, 'Max'];
users = [5, 1];
users = ['Max', 'Anna'];