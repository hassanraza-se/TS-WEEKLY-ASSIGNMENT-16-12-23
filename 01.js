/**
 * 01
 * Create a function that takes an array, an index, and a value as parameters.
 * Inside the function, use the splice method to insert the value at the specified index in the array.
 * Return the modified array.
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
function insertValueAtIndex(arr, index, value) {
    arr.splice(index, 0, value);
    return arr;
}
const sampleArray = [1, 2, 3, 4, 5];
console.log('Array', sampleArray);
function getUserInput() {
    return __awaiter(this, void 0, void 0, function* () {
        const questions = [
            {
                type: 'input',
                name: 'index',
                message: 'Enter the index where you want to insert the value:',
                filter: (value) => parseInt(value),
            },
            {
                type: 'input',
                name: 'value',
                message: 'Enter the value to insert:',
                filter: (value) => parseInt(value.trim()),
            },
        ];
        const answers = yield inquirer.prompt(questions);
        const { index, value } = answers;
        const modifiedArray = insertValueAtIndex(sampleArray, index, value);
        console.log('Modified Array:', modifiedArray);
    });
}
// Call the function to start taking user input
getUserInput();
