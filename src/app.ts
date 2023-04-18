// interface Admin  {
//     name: string;
//     privileges: string[];
// };

// interface Employee  {
//     name: string;
//     startDate: Date;
// };

// interface ElevatedEmployee extends Admin, Employee{};

// alterative way to do the same thing with intersection types

type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Max',
    privileges : ['create-server'],
    startDate: new Date()
}

// intersection types are useful as they can take to definitions and merge them together based on their common type

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; // this will be a number type because number is the common type between the two

// type guards

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
    if(typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

const result = add('Max', 'Schwartz');
result.split(' ');

const result2 = add(1, 2)

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//     console.log('Name ' + emp.name)
//     if('privileges' in emp) {
//         console.log('privileges ' + emp.privileges)
//     }
//     if('startDate' in emp) {
//         console.log('Start date ' + emp.startDate)
//     }
    
// }

// printEmployeeInformation(e1);
// printEmployeeInformation({name: 'Manu', startDate: new Date()});

// class Car {
//     drive() {
//         console.log('Driving...')
//     }
// }

// class Truck {
//     drive() {
//         console.log('Driving a truck...')
//     }   

//     loadCargo(amount: number) {
//         console.log('Loading Cargo...' + amount)
//     }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//     vehicle.drive();
//     if (vehicle instanceof Truck) {
//         vehicle.loadCargo(1000)
//     }
// }

// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
//     type: 'bird';
//     flyingSpeed: number;
// }

// interface Horse {
//     type: 'horse';
//     runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//     let speed;
//     switch (animal.type) {
//         case 'bird':
//             speed = animal.flyingSpeed;
//             break;
//         case 'horse':
//             speed = animal.runningSpeed;
//             break;
//     }
//     console.log('Moving at speed: ' + speed)

// }

// moveAnimal({type: 'bird', flyingSpeed: 10});

// const paragraph =document.getElementById('message-output');

// // const userInputElement = <HTMLInputElement>document.getElementById('user-input')! //  type casting but can clash with react syntax
// // const userInputElement = document.getElementById('user-input')  as HTMLInputElement; // type casting 
// const userInputElement = document.getElementById('user-input') 

// if (userInputElement) {
//     (userInputElement as HTMLInputElement).value = 'Hi there!'
// }

// interface ErrorContainer { // {email: 'Not a valid email', username: 'Must start with a character'}
//     [key: string]: string; // index property
// }

// const errorBag: ErrorContainer = {
//     email: 'Not a valid email',
//     username: 'Must start with a capital character'
// };