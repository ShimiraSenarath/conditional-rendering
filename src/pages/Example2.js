import React from "react";
import ReactDOM from 'react-dom';
import { memo, useState, useContext } from 'react';
import "./style/page.css";

export default function Example2(){
    
    const [isCurrent, userState] = useState(false);
    const [isCurrentLogin, isLoggedIn] = useState(false);
    

    const handleLoginClick =(e) =>{
        userState(true);
        isLoggedIn(true);
    }
    const handleLogoutClick =(e) =>{
        userState(false);
        isLoggedIn(false);
    }

    return (
        <div>
          <h1>Example1</h1>
          <div className="example1">
            <button
                onClick={handleLoginClick}
                className={` ${isCurrentLogin ? '' : 'login-btn'}`}
            >
                Login
            </button>
            <button
                onClick={handleLogoutClick}
                className={` ${isCurrentLogin ? 'logout-btn' : ''}`}
            >
                Logout
            </button>

          </div>

          <div className="example2">
            {isCurrent
            ?<div> User Login</div>
            :<div> User Logout</div>}
          </div>
        </div>
      );

}
