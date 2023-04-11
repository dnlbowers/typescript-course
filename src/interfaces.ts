// type AddFn = (a: number, b: number) => number;
// above is the same as below
interface AddFn {
    (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
    return n1 + n2;
}

interface Person {
    /*interfaces set a framework for types cannot take initializer ie. name = max*/
    name: string;
    age: number;

    // just name of method with types but no logic
    greet(phrase: string): void;
}

let person1: Person;

person1 = {
    /* valid person1 object because it satisfies the conditions on the above interface */
    name: 'Max',
    age: 30,
    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
}

person1.greet('Hi there - I am');

interface Named {
    readonly name?: string;
    /*readonly makes the property immutable*/
    outputName?: string; // ? makes the property optional
}

interface Greetable extends Named {
    /*interfaces set a framework for types cannot take initializer ie. name = max*/
    // readonly name: string;
    // just name of method with types but no logic
    greet(phrase: string): void;
}


class User implements Greetable {
    /* can implement several interfaces, implement is a contract that the class has to follow the interface */
    /*can be used to extend the interface but have to follow the contract of the interface method and types */
    name?: string;
    age = 30;

    constructor(n?: string) { //could also make defualt value of name = 'Max' in the constructor
        if (n){
            this.name = n;
        }
    }

    greet(phrase: string) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        } else {
            console.log('Hi!');
        }
    }
}

let user1: Greetable
// let user1.name = 'Manu' // cannot reassign name because of readonly in the interface

user1 = new User();
console.log(user1);
user1.greet('Hi there - I am');

