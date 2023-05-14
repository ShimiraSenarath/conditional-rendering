import React, { useState } from "react";
import "./style/LightDark.css"

export default function Example4(){

    const [darkMode, setDarkMode] = useState(false);

    return(
        <div className= {darkMode ? 'dark-mode' : 'light-mode'}>
            <div className="container">
                <div>
                    {darkMode
                    ? <span style={{color:"#c96dfd"  }}> Dark Mode</span>
                    : <span style={{color: "#ffff00" }}> Light Mode</span>
                    }
                </div>
                <div className="switch-checkbox">
                    <label className="switch">
                        <input type="checkbox"
                        onChange={ () => setDarkMode(!darkMode)}
                        >   
                        </input>
                        <span className="slider round"></span>
                    </label>
                    
                </div>
            </div>
        </div>
    )
    
} 