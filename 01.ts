/**
 * 01
 * Create a function that takes an array, an index, and a value as parameters.
 * Inside the function, use the splice method to insert the value at the specified index in the array.
 * Return the modified array.
 */

import inquirer from 'inquirer';

function insertValueAtIndex(arr: any[], index: number, value: any): any[] {
    arr.splice(index, 0, value);
    return arr;
}

const sampleArray: any[] = [1, 2, 3, 4, 5];
console.log('Array', sampleArray)

async function getUserInput() {
    const questions = [
        {
            type: 'input',
            name: 'index',
            message: 'Enter the index where you want to insert the value:',
            filter: (value: string) => parseInt(value),
        },
        {
            type: 'input',
            name: 'value',
            message: 'Enter the value to insert:',
            filter: (value: string) => parseInt(value.trim()),
        },
    ];

    const answers = await inquirer.prompt(questions);

    const { index, value } = answers;

    const modifiedArray = insertValueAtIndex(sampleArray, index, value);
    console.log('Modified Array:', modifiedArray);
}

// Call the function to start taking user input
getUserInput();
