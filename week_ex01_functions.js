// Function to multiply 3 different numbers
function multiply(num1, num2, num3) {

    // Check if any numbers are the same
    if (num1 === num2 || num1 === num3 || num2 === num3) {
        return "Numbers must not be the same";
    }

    return num1 * num2 * num3;
}

console.log(multiply(2, 3, 4));


// Function expression to convert minutes to seconds
const convertToSeconds = function(minutes) {
    return minutes * 60;
};

console.log(convertToSeconds(5));


// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

console.log(fahrenheitToCelsius(77));


// Function to reverse a string
function reverseString(text) {
    return text.split("").reverse().join("");
}

console.log(reverseString("Javascript"));


// Function to count vowels in a string
function countVowels(text) {

    let vowels = "aeiouAEIOU";
    let count = 0;

    for (let i = 0; i < text.length; i++) {

        if (vowels.includes(text[i])) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("Javascript"));


// Function to check if a number is prime
function isPrime(number) {

    if (number <= 1) {
        return false;
    }

    for (let i = 2; i < number; i++) {

        if (number % i === 0) {
            return false;
        }
    }
    return true;
}


// Testing with 4 numbers
console.log(isPrime(2));
console.log(isPrime(5));
console.log(isPrime(9));
console.log(isPrime(13));