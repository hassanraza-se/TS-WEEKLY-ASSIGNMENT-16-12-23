/**
 * 05
 * Create a function that takes a positive integer as parameter and
 * uses a for loop to calculate and return the factorial of that number.
 */

import inquirer from 'inquirer';

function calculateFactorial(num: number): number {
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
async function getUserInput() {
    const question = {
        type: 'input',
        name: 'number',
        message: 'Enter a positive integer to calculate its factorial:',
        validate: (value: string) => {
            const parsedValue = parseInt(value);
            if (Number.isNaN(parsedValue) || parsedValue < 0) {
                return 'Please enter a valid positive integer.';
            }
            return true;
        },
    };

    const answer = await inquirer.prompt([question]);
    const userNumber = parseInt(answer.number);

    try {
        const result = calculateFactorial(userNumber);
        console.log(`Factorial of ${userNumber} is: ${result}`);
    } catch (error) {
        console.error(error);
    }
}

getUserInput();