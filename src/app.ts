// const names: Array<string> = [];

// names[0].split(' ');

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done!");
//   }, 2000);
// });

// promise.then((data) => {
//     data.split(' ');
// });


function merge<T extends {}, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// console.log(merge({ name: "Max" }, { age: 30 }));

const mergedObj = merge({name: 'Max'}, {age: 30});