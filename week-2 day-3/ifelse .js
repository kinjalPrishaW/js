import React, { Component } from 'react'

 class Ifelse extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn :false  
      }
    }
  render() {
    if(this.state.isLoggedIn){
        return <div><h2>welcome guest</h2></div>
        
    }
    else{
        return <div><h2>welcome friend</h2></div>
        
    }

     return this.state.isLoggedIn ? "hi" : "bye"
}
 }
  


export default Ifelse;
