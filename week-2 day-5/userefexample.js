import React,{useState,useRef}from 'react';
function Ref(){
    const [counter,setCounter]=useState(0) //save data without rerender
    const counterRef =useRef(0)
    const handleClick =()=> {
        setCounter(counter+1);

    };
    const handleRef =()=> {
        counterRef.current++;

    };
    console.log ("running");

    return(
        <div>
     <h1>{`Counter is ${counter}`}</h1>
     <h1>{`Ref is ${counterRef.current}`}</h1>
     <button onClick={handleClick}>click</button>
     <button onClick={handleRef}>click ref</button>
     </div>

    )
   
}
export default Ref;

