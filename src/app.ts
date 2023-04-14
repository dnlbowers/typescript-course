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

type combinable = string | number;
type numeric = number | boolean;

type universal = combinable & numeric; // this will be a number type because number is the common type between the two