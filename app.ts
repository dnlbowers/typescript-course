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
const person = {
    name: 'David',
    age: 38
};

// Above Ts will infer the type of the object as:
// const person: {
//     name: string;
//     age: number;
//     }



console.log(person.name);
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