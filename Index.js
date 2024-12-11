
//Answer to the question no 1

function calculateDifference(x, y) {
    return x - y;
   }
console.log(calculateDifference (100, 99));



//Answer to the question no 2

function isOdd(number) {
    return number % 2 !== 0;
}
console.log(isOdd(5));



//Answer to the question no 3

function findMin(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        throw new Error("Input must be a non-empty array of numbers.");
    }
    return Math.min(...numbers);
}
console.log(findMin([82, 43, 27, 34])); 




//Answer to the question no 4

function filterEvenNumbers(numbers) {
    return numbers.filter(function(number) {
        return number % 2 === 0;
    });
}

const numbers = [3, 4, 8, 23, 44, 9];
const evenNumbers = filterEvenNumbers(numbers);
console.log(evenNumbers);




//Answer to the question no 5

function sortArrayDescending(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Input must be an array");
    }
    // Create a copy of the array to avoid mutating the original array
    const sortedArray = [...arr];

    // Use the sort method with a compare function for descending order
    sortedArray.sort((a, b) => b - a);

    return sortedArray;
}

const number = [43, 23, 23, 75, 51, 97, 86];
const sortedNumbers = sortArrayDescending(number);

console.log(sortedNumbers);



//Answer to the question no 6

function lowercaseFirstLetter(str) {
    if (!str) {
        return str; 
    }
    return str.charAt(0).toLowerCase() + str.slice(1);
}
console.log(lowercaseFirstLetter("ASSIGNMENT"));



//Answer to the question no 7

function findAverage(num) {
    if (num.length === 0) {
        return 0; 
    }
    const sum = num.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return sum / num.length;
}

const num = [27, 73, 66, 34];
const average = findAverage(num);
console.log(average); 



//Answer to the question no 8

function isLeapYear(year) {
    if (typeof year !== 'number' || !Number.isInteger(year)) {
        throw new Error('Input must be an integer.');
    }
    
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}


console.log(isLeapYear(2024));



