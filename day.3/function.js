/ function
function hi()
{
    console.log("hello goodmorning")
}
hi()

//using function add two numbers

var a=6;
var b=9;
function add()
{
    console.log(a+b)
}
add()


//calling function iteratively

var  fActor="suriya"
var  fPlayer="virat kohli"
var  fmovie="varanam ayiram"
function favourite()
{
  console.log("favourite Actor:"+ fActor)
  console.log("favourite Actor:"+ fPlayer)
  console.log("favourite movie:"+fmovie)

}
favourite()
favourite()
//adding two numbers using function by passing parameter

function add(a,b)
{
    console.log(a+b)
}
add(10,78)
//area
function area(length,breadth)
{
    console.log("the parameter is:"+length*breadth)
}
area(10,70)

//function with return type
function myname()
{
    return "johny"
}
var a=myname()
console.log(a)

//function with return type and passing values
function add(a,b)
{
    return a*b
}
var total=add(15,5)
console.log(total)

//many functiom

function mul(a,b)
{
    return a*b
}
function div(a,b)
{
    return a/b
}
function mod(a,b)
{
    return a%b
}
var total=mul(15,10)
var divide=div(30,2)
var modu =mod(10,3)
console.log(total)
console.log(divide)
console.log(modu)
