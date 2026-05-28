
let globalCount = 0;

function localmadeExample()
{
    let localMessage = "This exists only inside this function, its local";

    console.log(localMessage);
}

//FUNCTION THAT uses both local and global variables

function modifylocalandGlobalVariables()
{
    let localCount= 1;
    
    globalCount = globalCount+5 ;
    localCount =localCount+4;

    console.log("Global Count: ",globalCount);
    console.log("Local Count : ",localCount);
}

//Student CONSTRUCTOR Function

function Student(firstName,lastName,age)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.age=age;
}

//Creating Several Student Instances

let student1 = new Student("Ace","Mabheka","25");
let student2 = new Student("Jayceon","Taylor",38);
let student3 = new Student("Awethu","Simangala",12);

console.log(student1);
console.log(student2);
console.log(student3);


//An Object literal with nested properties

let school =
{
    name : "Kwasa Hip Hop Academy",
    location: "Kuyasa",

    head: 
    {
        rapName: "JTT",
        age: 21
    }
};

console.log(school.head.rapName);