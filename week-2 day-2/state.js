//state example
import React,   {  Component} from "react";
class Message extends Component {
    constructor(){
        super()
        this.state ={
            message: 'Hello ,have a nice day'
        }
    }
    changeMessage(){
        this.setState({
            message: "Thankyou for subscribing"

        })
    }
    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick ={()=> this.changeMessage()}>Subscribe</button>

            </div>
        )
    }

}
export default Message;
