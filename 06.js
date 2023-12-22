/**
 * 06
 * Write a program having an array of numbers if the number is negative
 * it should remove the negative number from the array.
 */
// Function to remove negative numbers from an array
function removeNegativeNumbers(numbers) {
    return numbers.filter(number => number >= 0);
}
// Example array of numbers (modify as needed)
const numberArray = [5, -3, 8, -2, 0, 10, -7, 4, -1];
// Displaying the original array
console.log('Original Array:', numberArray);
// Removing negative numbers from the array
const filteredArray = removeNegativeNumbers(numberArray);
// Displaying the array after removing negative numbers
console.log('Array after removing negative numbers:', filteredArray);
export {};
