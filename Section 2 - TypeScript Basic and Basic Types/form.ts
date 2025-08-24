// const inputEl = document.getElementById('user-name')!;

const inputEl = document.getElementById('user-name')  as HTMLInputElement | null;

// console.log(inputEl.value);

// if(!inputEl) {
//     throw new Error('Unable to find user-name element');
// }

console.log(inputEl?.value);