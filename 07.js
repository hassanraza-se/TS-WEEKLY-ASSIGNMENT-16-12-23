/**
 * 07
 * Create a function that takes an array of numbers as parameter.
 * Use a for loop to calculate and return the sum of all the numbers in the array.
 */
function calculateSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
const numberArray = [5, 10, 3, 7, 2];
const totalSum = calculateSum(numberArray);
console.log('The provided array is:', numberArray);
console.log('The sum of numbers in the array is:', totalSum);
export {};
