// const username = 'Max';
// // username = 'Manu'; // Error: cannot reassign a const!
// let age = 30;
// age = 29; // OK

// /const add = (a: number, b: number = 1):number => a + b;

// console.log(add(2, 5));
// console.log(add(2));
// console.log(add(89));

// // const printOutput = (output: string | number) => console.log(output);
// const printOutput: (a:number |string) => void = output => console.log(output);

// const button = document.querySelector('button');

// if (button) {
//     button.addEventListener('click', event => console.log(event))
// }

// printOutput(add(5, 2));  /

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

const person = {
    firstName: 'Max',
    age: 30
};

const copiedPerson = {...person};

const add = (...numbers: number[]) => { 
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    },0)
}

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2);

const {firstName, age} = person;