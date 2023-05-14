import React from "react";
import ReactDOM from 'react-dom';

class Example1 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: true};
        
    }

    render(){
        const isLoggedIn = this.state.isLoggedIn;
        let text;
    
        console.log(isLoggedIn, "ex1");
        if (isLoggedIn) {
            text = <UserLogin/>
        } else {
            text =  <GuestLogin />
        }
    
        return (
          <div>
            <h1>Example1</h1>
            {text}
          </div>
        );
      }

     
    
}

function UserLogin(props) {
    return <h1>Welcome back!</h1>;
}
  
function GuestLogin(props) {
    return <h1>Please sign up.</h1>;
}


 export default Example1;