// to run in the temrinal. Follow these steps
// 'tsc' to compiler
// node typeof.js

// typeof => operator allows us to derive type from values

let userName = 'Max';

console.log(typeof userName);

type UserName = typeof userName;



const settings = {
    difficulty: 'easy',
    minLevel: 10,
    didStart: false,
    players: ['John','Jane']
};

// type Settings = typeof settings;

function loadData(s: typeof settings){
    //...
}

loadData(settings);