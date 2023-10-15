import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from './Loader'
import './login.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailerror] = useState(false)
    const [passError, setPasserror] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 3000);
    })

    const handleClick = (e) => {
        e.preventDefault();
        (email == "") ? setEmailerror(true) : checkEmail();
        (password == "") ? setPasserror(true) : setPasserror(false)

        setTimeout(() => { //remove shake class after 500ms
            setEmailerror(false)
            setPasserror(false)
        }, 500);
    }
    function checkEmail() { //checkEmail function
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //pattern for validate email
        if (!email.match(pattern)) { //if pattern not matched then add error and remove valid class
            setEmailerror(true)
            // let errorTxt = eField.querySelector(".error-txt");
            //if email value is not empty then show please enter valid email else show Email can't be blank
            // (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email can't be blank";
        } else { //if pattern matched then remove error and add valid class
            setEmailerror(false)
        }

    }

    function checkPass() { //checkPass function
        if (password == "") { //if pass is empty then add error and remove valid class
            setPasserror(true)
        } else {
            setPasserror(false)
        }
    }

    //if eField and pField doesn't contains error class that mean user filled details properly
    // if (!eField.classList.contains("error") && !pField.classList.contains("error")) {
    //     window.location.href = form.getAttribute("action"); //redirecting user to the specified url which is inside action attribute of form tag
    // }

    return (
        <>
            {isLoading ? <Loader /> :
                <div className="wrapper" >
                    <header>Login Form</header>
                    <form onSubmit={handleClick}>
                        <div className={`field email ${emailError ? "shake" : "valid"}`} >
                            <div className="input-area">
                                <input type="text" placeholder="Email Address" onChange={(e) => {
                                    setEmail(e.target.value);
                                    checkEmail()
                                }} />
                                <i className="icon fas fa-envelope"></i>
                                <i className="error error-icon fas fa-exclamation-circle"></i>
                            </div>
                            <div className="error error-txt">{emailError != "" ? "Enter a valid email address" : ""}</div>
                        </div>
                        <div className={`field password ${passError ? "shake" : ""}`} >
                            <div className="input-area">
                                <input type="password" placeholder="Password" onChange={(e) =>
                                    setPassword(e.target.value)

                                } />
                                <i className="icon fas fa-lock"></i>
                                <i className="error error-icon fas fa-exclamation-circle"></i>
                            </div>
                            <div className="error-txt">{passError ? "password can't be a blank" : ""}</div>
                        </div>
                        <div className="pass-txt"><a href="#">Forgot password?</a></div>
                        <input type="submit" value="Login" />
                    </form>
                    <div className="sign-txt">Not yet member? <Link to={'/registration'}>Signup now</Link></div>
                </div>
            }
        </>
    )
}

export default Login
