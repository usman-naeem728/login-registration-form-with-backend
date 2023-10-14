import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Registration = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailerror] = useState(false)
    const [passError, setPasserror] = useState(false)
    const [error, setError] = useState(false)

    const navigation = () =>{
        navigate('/')
    }

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
    return (
        <>
            <div className="wrapper">
                <header>Registration Form</header>
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
                <div className="sign-txt">Already a member? <a href="/" onClick={navigation}>Login now</a></div>
            </div>
        </>
    )
}

export default Registration