let userInput: unknown;

let userName1: string;

userInput = 5;
userInput = 'Max';

if (typeof userInput === 'string'){
    userName1 = userInput;
}

// Never Type
// never returns anything just crashes the program
function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code };
    // while(true){} // infinite loop
}

const result = generateError('An error occurred!', 500);
console.log(result);