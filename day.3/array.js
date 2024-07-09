//array length
let course=["maths","science","social"]
console.log(course.length)

//array to string
let d=[1,2,3,"hello",567]
const c=d.toString()
console.log(c)
console.log(c.split(','))

//array join
console.log(course.join('|'))

//array delete
let id={name:"shainy",age:22,salary:20000}
console.log(id)
let p=delete id.salary
console.log(id)

//cocatenation
let a1=[11,12,13]
let a2=[14,15,16]
let a3=["hello","world"]
let a4=console.log(a1.concat(a2,a3))

//flat
let b1=[[11,12,13],[14,15,16],18,[19]]
let b2=console.log(b1.flat());

//push
let c1=[11,12,13,14,15,16,18,19]
c1.push(20)
console.log(c1)

//pop
let d1=[11,12,13,14,15,16,18,19]
let d2=d1.pop()
console.log(d2)
console.log(d1)

//unshift
let e1=[11,12,13,18,19]
e1.unshift(22)
console.log(e1)

//shift
let f1=[14,15,16,18,19]
let f2=f1.shift()
console.log(f2)
console.log(f1)

//splice
let g1=[14,15,16,18,24]
g1.splice(1,2)
console.log(g1)
g1.splice(2,0,20,22)
console.log(g1)

//slice
let h1=[2,5,4,7,0,9]
let h2=h1.slice(2,5)
console.log(h2)
let h3=h1.slice(6,5)
console.log(h3)

//sort
let arr = [4, 2, 3, 1]; 
arr.sort(); 
console.log(arr); 
arr.sort((a, b) => b + a);
console.log(arr); 
arr.sort((a, b) => b - a); 
console.log(arr); 

//include
let j1=[2,5,4,7,0,9]
console.log(j1.includes(4))

//some
let k1=[2,5,4,3,0,9]
let k2=k1.some(greet)
function greet(element,index,array){
    return element>5
}
console.log(k2)

//reduce
let z=[2,5,4,3,0,9]
let r= z.reduce(tot)
function tot(total,num){
    return total-num
}
console.log(r)

//reverse
let v=z.reverse()
console.log(v)
