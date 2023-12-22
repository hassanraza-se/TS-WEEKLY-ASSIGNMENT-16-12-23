/**
 * 08
 * Implement a program that takes a list of temperatures in Celsius as input from the user.
 * Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and
 * store the converted temperatures in an array. Use a for loop to perform the conversion for each temperature.
 */

import inquirer from 'inquirer';

function celsiusToFahrenheit(celsius: number): number {
    return (celsius * 9 / 5) + 32;
}

async function convertTemperatures() {
    const questions = [
        {
            type: 'input',
            name: 'temperatures',
            message: 'Enter temperatures in Celsius separated by commas:',
            filter: (value: string) => value.split(',').map(item => parseFloat(item.trim())),
        },
    ];

    const answers = await inquirer.prompt(questions);
    const celsiusTemperatures: number[] = answers.temperatures;

    const temp = [];

    for (let i = 0; i < celsiusTemperatures.length; i++) {
        const fahrenheit = celsiusToFahrenheit(celsiusTemperatures[i]);
        temp.push({
            celsius: celsiusTemperatures[i],
            fahrenheit: fahrenheit
        })
    }

    console.table(temp);
}

convertTemperatures();
