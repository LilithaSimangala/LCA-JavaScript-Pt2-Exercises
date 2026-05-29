
//1: MULTILINE STRING USING TEMPLATE LITERALS
let studentName = "Lilitha";

let message = `
Welcome ${studentName}

This is JavaScript ES6.
Template literals allow multiline strings.
`;

console.log(message);

//2. A Function that uses template literals for HTML generation


function createProfile(name, age)
{
    let html = `
    <div>
        <h1>${name}</h1>
        <p>Age: ${age}</p>
    </div>
    `;

    return html;
}

console.log(createProfile("Ace", 21));


//Converting Regular Functions to Arrow Functions
const greetArrow = (name) =>
{
    return "Hello " + name;
}

console.log(greetArrow("Jay"));


const multiply = (a, b) =>
{
    return a * b;
}

console.log(multiply(3, 4));

//3. Using Arrow Functions with  Array Methods


let numbers = [2, 4, 6, 8];

numbers.forEach((num) =>  //For Each loops through  every item in the array
{
    console.log(num);
});


let doubledNumbers = numbers.map((num) =>  //Map Creates a NEW array, each value is modified and stored
{
    return num * 2;
});

console.log(doubledNumbers);


let bigNumbers = numbers.filter((num) => //Filter Fits only values matching the condition
{
    return num > 4;
});

console.log(bigNumbers);