import React, {createContext, useContext, useState} from 'react';

export  const UserContext =createContext();

function Context(){
    const[user]=useState("Hello ");
    return(
        <UserContext.Provider value={user}>
            <ComponentA user ={user}/>  
            </UserContext.Provider>
    )

}
function ComponentA(){

    
    return(
        <div  className="box">
                <h1> ComponentA</h1>
                <ComponentB/>
            </div>
        )
        
            
        
}
    function ComponentB(){
        return(
            <div  className="box">
                <h1> componentB</h1>
                <ComponentC/>
            </div>
        )
    }
        function ComponentC(){
            return(
                <div  className="box">
                    <h1> componentC</h1>
                    <ComponentD/>
                </div>
            )
        }
        
        function ComponentD(){
            const user =useContext(UserContext)

            return(
                <div  className="box">
                    <h1> ComponentD </h1>
                    <h2>{`${user}`}</h2>
                </div>
            )
        
        
        }



export default Context;


       