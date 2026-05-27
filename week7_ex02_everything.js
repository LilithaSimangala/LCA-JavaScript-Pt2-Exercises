
//SUM CODE
function sum(parameter)
{
    if (typeof parameter!=="number")
    {
        return "This value is not a number"
    }

    let total =0

    for (let i=0;i<=parameter;i++)
    {
        total = total + i;
    }

    return total;

}
//Test of sum code
console.log(sum(2));
console.log(sum("Hi"))

console.log("----------------------------------")


function factorial(number)

{
    if (typeof number!=="number")
    {
        return "This is is not a number"
    }
    
    let result = 1;

    for (let i=number; i>=1;i--)
    {
            result = result * i;
    }
    
    return result;

}
//Test Of Factorial
console.log(factorial(6));
console.log(factorial(5));


console.log("----------------------------------")



function funkyMath(firstNumber,secNumber,num3,num4)
{

    if (arguments.length ==2)
    {
        return secNumber -firstNumber;
    }

    if (arguments.length==3)
    {
        return firstNumber +secNumber +num3;
    }

    if (arguments.length==4)
    {
        let answer1 = firstNumber +secNumber;
        let answer2 = num3 +num4;

        let finalAnswer = answer1/answer2;
        
        return finalAnswer;
    }

    return "Invalid number of inputs"
}

//Test of  funky Maths
console.log(funkyMath(2,4));
console.log(funkyMath(2,4,6));
console.log(funkyMath(2,4,6,8));

console.log("----------------------------------")

let givenArray = [1,2,33,45,6,44];

let Odd = [];
let Even =[];

for (let i=0; i <givenArray.length;i++)
{
    if (givenArray[i]%2 ===0)
    {
        Even.push(givenArray[i]);
    }

    else
    {
        Odd.push(givenArray[i]);
    }
}

//sort 
Odd.sort(function(a,b)
{
    return a -b;
})

//Test of arrays

console.log("Odd numbers: ", Odd);
console.log("Even numbers: ", Even);

let me = 
{
    firstName: "Lilitha",
    lastName : "Simangala",
    age: "21",
    favColor: "Blue",
    dreamCar: "Range Rover"
};

me.favouriteFood ="Pizza";

delete me.age;





