 //if  statement
 let num = 20;

if (num % 2 === 0) {
    console.log("Given number is even number.");
}

if (num % 2 !== 0) {
    console.log("Given number is odd number.");
};

//else if statement
if (num > 0) {
    console.log("Given number is positive.");
} else if (num < 0) {
    console.log("Given number is negative.");
} else {
    console.log("Given number is zero.");
};

//switch case
let operator ='+';
let output;
switch(operator)
{
    case'+':
        output= "Addition";
        break;
    case '-':
        output= "subtraction";
        break;
    case '*':
        output="multiplication";
         break;
    default:
         output="invalid";
}
 console.log(output)
 //ternary operator
 let age = 21;

 const result =
     (age >= 18) ? "You are eligible to vote."
         : "You are not eligible to vote.";
 
 console.log(result);
 
 //nested if
 var temperature=30;
 if (temperature > 30) {
    console.log("It's hot outside");
 } else if (temperature < 15) {
    console.log("It's cold outside");
 } else {
    console.log("The weather is mild");
 }
