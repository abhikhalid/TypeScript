let hobbies = ['Sports', 'Cooking'];

// hobbies.push(10); // This will cause a type error

// let users: (string | number)[];
let users: Array<string | number>;

users = [1, 'Max'];
console.log('users:', users);
users = [5, 1];
console.log('users:', users);
users = ['Max', 'Anna'];
console.log('users:', users);
console.log('hobbies:', hobbies);