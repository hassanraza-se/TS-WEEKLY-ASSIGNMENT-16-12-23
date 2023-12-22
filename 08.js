/**
 * 08
 * Implement a program that takes a list of temperatures in Celsius as input from the user.
 * Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and
 * store the converted temperatures in an array. Use a for loop to perform the conversion for each temperature.
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
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
function convertTemperatures() {
    return __awaiter(this, void 0, void 0, function* () {
        const questions = [
            {
                type: 'input',
                name: 'temperatures',
                message: 'Enter temperatures in Celsius separated by commas:',
                filter: (value) => value.split(',').map(item => parseFloat(item.trim())),
            },
        ];
        const answers = yield inquirer.prompt(questions);
        const celsiusTemperatures = answers.temperatures;
        const temp = [];
        for (let i = 0; i < celsiusTemperatures.length; i++) {
            const fahrenheit = celsiusToFahrenheit(celsiusTemperatures[i]);
            temp.push({
                celsius: celsiusTemperatures[i],
                fahrenheit: fahrenheit
            });
        }
        console.table(temp);
    });
}
convertTemperatures();
