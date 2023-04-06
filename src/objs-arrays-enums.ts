// You can explicitly define the object like this
// const person: {
//     name: string;
//     age: number;
//     } = {
//         name: 'David',
//         age: 38
//     };

// however its better practice to let TS to infer the type of the object like this 
// however its better practice to let TS to infer the type of the object like this 
// const person: {
//     name: string,
//     age: number,
//     hobbies: string[],
//     // Tuple: a fixed length array
//     role: [number, string]
// } = {
//     name: 'David',
//     age: 38,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// };

// push works because TS sees that the role is an array even though it is a tuple
// person.role.push('admin');
// person.role[1] = 10;

// Above Ts will infer the type of the object as:
// const person: {
//     name: string;
//     age: number;
//     }


// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {ADMIN = 'ADMIN' , READ_ONLY =100, AUTHOR = 200};

const person = {
    name: 'David',
    age: 38,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

if (person.role === Role.ADMIN) {
    console.log('is admin');
}

let favoriteActivities: string[];
favoriteActivities = ['Sports'];



// console.log(person.name);

// for (const hobby of person.hobbies) {
//     console.log(hobby.toUpperCase());
//     // console.log(hobby.map());  !!ERROR!!!! because type of hobby is set to string and map is not a string method
// }

// Nested Objects & Types
// Of course object types can also be created for nested objects.

// Let's say you have this JavaScript object:

const product = {
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!'
  }
}
// This would be the type of such an object:

// {
//   id: string;
//   price: number;
//   tags: string[];
//   details: {
//     title: string;
//     description: string;
//   }
// }
// So you have an object type in an object type so to say.

console.log(product.details.title);


