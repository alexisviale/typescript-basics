let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Ale';

if(typeof userInput === 'string'){
    userName = userInput;
}
 
function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code}
}

generateError('An error ocurred', 500)

// tsc app.ts to compile.
// tsc app.ts -w to compile everytime you make a change in the file.