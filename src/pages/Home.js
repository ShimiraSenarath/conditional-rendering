import React from "react";
import { useNavigate } from 'react-router-dom';

export default function Home(){

    let example1 = useNavigate();
    let example2 = useNavigate();
    let example3 = useNavigate();
    let example4 = useNavigate();

    

    return (
        <div className="Home-content">
            <h1>React Conditional Rendering</h1>
            <div>
                <h3>Your components will often need to display different things depending on different conditions. <br/>
                In React, you can conditionally render JSX using JavaScript syntax like if statements, &&, and ? : operators.</h3>
            </div>
            <div>
                <div className="content" onClick={() => {example1("/example1")}}>
                    <h3>Example1</h3>
                    <p>Use condition as a if statements</p>
                </div>
                <div className="content" onClick={() => {example2("/example2")}}>
                    <h3>Example2</h3>
                    <p>Login and logout button - using ? : operator</p>
                </div>
                <div className="content" onClick={() => {example3("/example3")}}>
                    <h3>Example3</h3>
                    <p>Use condition as a && operator</p>
                </div>
                <div className="content" onClick={() => {example4("/example4")}}>
                    <h3>Example4</h3>
                    <p>Dark mode / Light mode button toggle</p>
                </div>
            </div>
        </div>
    )
}