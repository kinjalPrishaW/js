//for loop

for (let i = 0; i < 5; i++) {
    console.log("Hello World!");
}

// for loop
let val = 2;
while ( val <= 5)
{ 
    console.log(val)
    val +=1;
}

//d0 while statement

let a=29;
do{
    console.log(a)
    a+=1;
}while(a<=30)
//for in loop acess through keys in object//
let details={name :"anu",age :28,gender :"female"};
for(keys in details){
    console.log(keys)
}

//for in loop access through in object//
let info={name :"anu",age :28,gender :"female"};
for(keys in info){
    console.log(keys +":"+info[keys])
}

let myObj = { x: 1, y: 2, z: 3 };
for (let key in myObj) {
    console.log(key, myObj[key]);
}


//for of loop
let arr = [1, 2, 3, 4, 5];
for (let value of arr) {
    console.log(value);
}
//break statment
for (let i = 1; i < 6; i++) {
    if (i == 4) 
        break;
        
    console.log(i);
}
//continue statement
for (let i = 0; i < 11; i++) {
    if (i % 2 == 0) 
        continue;
        
    console.log(i);
}



