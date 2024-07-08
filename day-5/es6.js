//let
var a=10;
console.log(a)
if(a){
    let a=20   
    console.log(a)
}
console.log(a)

//const
var a=100;
console.log(a)
if(a){
    const a=200   
    console.log(a)
}
console.log(a)

//arrow function
let f=3,g=6
const mul = (x, y) => x * y;
console.log(mul(f,g))

//setting default parameter for a funtion
function say(m){
    console.log(m)
}
say()

function hell(m1=5){
     m1= typeof m1 == "undefined" ?'hello':'hi'
    console.log(m1)
}
hell()

//rest parameters
num=[2,4,6]
function add(...num){
      return `the numbers are ${num}`
}
let c=add(num)
console.log(c)

//spread operator
const a1=[2,5,4]
const a2=[...a1]//copy array
console.log(a2)
let a5=[7,0,9]
let a4=[...a1,...a5]//combine
console.log(a4)
const b1={a:45,b:52}
const b2={...b1}//copy object
console.log(b2)
let b3={c:23,d:67}
let b4={...b2,...b3}//combine
console.log(b4)
function multiply(a, b, c,d,e,f) {
    return b+c;
  }
  console.log(multiply(...a4));
  
  //array destructuring
  const numbers = [1, 2, 3];
const [s, t, u] = numbers;
console.log(s); 
console.log(t); 
console.log(u); 

const num1 = [1, 2, 3, 4, 5];
const [first, , third, , fifth] = num1;
console.log(first); //skipping elements
console.log(third); 
console.log(fifth); 

 //object destructuring
 const person = {n:"kinjal",age:22};
 const {n,age} = person;
 console.log(age); 
 console.log(n); 
 const{n:nm}=person//assigning new variable
 console.log(nm)
 console.log(n);

//template literals
 let str = `Template literal in ES6`;
console.log(str);
console.log(str.length); 
console.log(typeof str);
 
