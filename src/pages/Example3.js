import { memo, useState, useContext } from 'react'; 

export default function Example3(){


    const [isCurrent, userState] = useState(false);
    const [isCurrentLogin, isLoggedIn] = useState(false);
    const [LogoutText, setBtnText] = useState('Login');
    const style ={
        loginUser:{
            display: isCurrent ? "block" : "none",
        }
    }
    

    const handleLoginClick =(e) =>{
        userState(true);
        isLoggedIn(true);
        setBtnText('Logout')
    }

    return (
        <div>
          <h1>Example1</h1>
          <div>
            <button
                onClick={handleLoginClick}
                className={` ${isCurrentLogin ? 'logout-btn' : 'login-btn'}`}
            >
                {LogoutText}
            </button>
            <div style={style.loginUser}>User Login</div>
            <div>
                {(isCurrentLogin && isCurrent)
                ? "And operator":"Operator fail"}
            </div>
          </div>
        </div>
      );

}
