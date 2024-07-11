import React, { useState } from 'react'; 


const Application = () => { 
	const [num, setNum] = useState(0); 
	const handleClick = () => { 
		setNum(num + 1); 
	}; 

	return ( 
		<div className="App"> 
			<h2> {num}</h2> 
			<button onClick={handleClick}> 
				Add one 
			</button> 
		</div> 
	); 
}; 


export default Application; 
