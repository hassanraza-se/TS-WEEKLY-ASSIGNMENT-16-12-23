/**
 * 05
 * Create a function that takes a positive integer as parameter and
 * uses a for loop to calculate and return the factorial of that number.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import inquirer from 'inquirer';
function calculateFactorial(num) {
    if (num < 0) {
        throw new Error('Please provide a positive integer.');
    }
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}
// Function to prompt user for a positive integer
function getUserInput() {
    return __awaiter(this, void 0, void 0, function* () {
        const question = {
            type: 'input',
            name: 'number',
            message: 'Enter a positive integer to calculate its factorial:',
            validate: (value) => {
                const parsedValue = parseInt(value);
                if (Number.isNaN(parsedValue) || parsedValue < 0) {
                    return 'Please enter a valid positive integer.';
                }
                return true;
            },
        };
        const answer = yield inquirer.prompt([question]);
        const userNumber = parseInt(answer.number);
        try {
            const result = calculateFactorial(userNumber);
            console.log(`Factorial of ${userNumber} is: ${result}`);
        }
        catch (error) {
            console.error(error);
        }
    });
}
getUserInput();
