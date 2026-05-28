
//Global User Inputs
let username =prompt("Enter your username: ");
let age = prompt("Enter your age: ");


//Function 1, VALIDATE USER INPUT

function validateUserInput(userName,userAge)
{
    try
    {
        if (userName ==="")
            {
                throw "Username must not be empty";
            }


        if (typeof userAge!=="number")
        {
            throw "Age must be a number";
        }


        if (userAge<0)
        {
            throw "Age cannot be negative";
        }
        
        console.log("Invalid input");
        
    }

    catch(error)
    {
        console.log("Validation Error: ".error);
    }

}

//Function 2 Multiple ERROR

function loginSystem(userName, password)
{
    try
    {
        if (userName === "")
        {
            throw "Username is required";
        }

        if (password.length < 5)
        {
            throw "Password is too short";
        }

        if (typeof password !== "string")
        {
            throw "Password must be text";
        }

        console.log("Login successful");
    }


    catch(error)
    {
        console.log("Login Error:", error);
    }
}

//Helper Functions for string manipulatin

function makeUpperCase(text)
{
    return text.toUpperCase();
}

function countCharacters(text)
{
    return text.length;
}

function removeSpaces(text)
{
    return text.replaceAll(" ", "");
}

//Helper Functions for array operations

function addItem(array, value)
{
    array.push(value);

    return array;
}

function getLargest(array)
{
    let largest = array[0];

    for (let i = 0; i < array.length; i++)
    {
        if (array[i] > largest)
        {
            largest = array[i];
        }
    }

    return largest;
}

function countItems(array)
{
    return array.length;
}

//Testing The Functions

// Validate user input
validateUserInput(username, age);

console.log("--------------------------------");


// Login system test
let password = prompt("Enter your password:");

loginSystem(username, password);

console.log("--------------------------------");


// String helper function tests
console.log(makeUpperCase("javascript"));
console.log(countCharacters("Programming"));
console.log(removeSpaces("I love JavaScript"));



// Array helper function tests
let numbers = [4, 12, 7, 30];

console.log(addItem(numbers, 100));
console.log(getLargest(numbers));
console.log(countItems(numbers));