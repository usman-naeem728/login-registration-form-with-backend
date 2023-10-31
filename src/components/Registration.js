import React, { useEffect, useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Loader from './Loader'
import userContext from '../context/userContext'


const Registration = () => {
    const context = useContext(userContext)
    const { signup,token, error } = context
    const navigate = useNavigate()

    const [passwordconfirm, setPasswordconfirm] = useState('')
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", contactno: "", address: "" })

    const [emailError, setEmailerror] = useState(false)
    const [passError, setPasserror] = useState()
    const [confirmPassError, setConfirmPasserror] = useState(false)
    const [nameError, setNameerror] = useState(false)
    const [contnoError, setContnoerror] = useState(false)
    const [addressError, setAddresserror] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const onchange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })


    }

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 3000);

        if (token !== "" ) {
            window.location.reload()
            navigate("/")
          }
    },[token,error])

    function passwordCheck(){
        (credentials.password.length < 5)? setPasserror(true) : setPasserror(false);
        (passError === false) && checkConfirmPass();
    }
    function checkConfirmPass() {
        (credentials.password !== passwordconfirm)? setConfirmPasserror(true) : nameCheck()
    }
    function nameCheck(){
        (credentials.name.length < 3) ? setNameerror(true) : checkContact();
    }
    function checkContact(){
        (credentials.contactno.length < 10) ? setContnoerror(true) : checkAddress(false);
    }
    function checkAddress(){
        (credentials.address.length < 7) ? setAddresserror(true) :signuphandler(false);
    }

    function signuphandler(){
        signup(credentials.name, credentials.email,credentials.password, credentials.contactno, credentials.address)
        
    }
    const handleClick = (e) => {
        e.preventDefault();
        (credentials.email === "")? setEmailerror(true) : checkEmail() ;

      
        // setTimeout(() => { //remove shake class after 500ms
        //     setEmailerror(false)
        //     setPasserror(false)
        //     setNameerror(false)
        //     setContnoerror(false)
        //     setAddresserror(false)
        // }, 5000);
     

    }



    function checkEmail() { //checkEmail function
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //pattern for validate email
        if (!credentials.email.match(pattern)) { //if pattern not matched then add error and remove valid class
            setEmailerror(true)
            // let errorTxt = eField.querySelector(".error-txt");
            //if email value is not empty then show please enter valid email else show Email can't be blank
            // (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email can't be blank";
        } else { //if pattern matched then remove error and add valid class
            setEmailerror(false)
            passwordCheck()
        }

    }

    return (
        <>
            {isLoading ? <Loader /> :
                <div className="wrapper">
                    <header>Registration Form</header>
                    <form onSubmit={handleClick}>
                        <div className={`field  ${nameError ? "shake" : "valid"}`} >
                            <div className="input-area">
                                <input required type="text" placeholder="Full Name" name="name" onChange={onchange}  />
                                <i className="icon fas fa-user"></i>
                                <i className="error error-icon fas fa-exclamation-circle"></i>
                            </div>
                            <div className="error error-txt">{nameError ? "Name should be three characters" : ""}</div>
                        </div>

                        <div className={`field email ${emailError ? "shake" : "valid"}`} >
                            <div className="input-area">
                                <input required type="text" placeholder="Email Address" name="email" onChange={onchange} />
                                <i className="icon fas fa-envelope"></i>
                                <i className="error error-icon fas fa-exclamation-circle"></i>
                            </div>
                            <div className="error error-txt">{emailError ? "Enter a valid email address" : ""}</div>
                        </div>

                        <div className={`field password ${passError ? "shake" : ""}`} >
                            <div className="input-area">
                                <input required type="password" placeholder="Password" name="password" onChange={onchange} 
                                />
                                <i className="icon fas fa-lock"></i>
                                <i className="error error-icon fas fa-exclamation-circle"></i>
                            </div>
                            <div className="error-txt">{passError ? "password must be at least 5 charachters" : ""}</div>
                        </div>

                        <div className={`field password ${passError ? "shake" : ""}`} >
                            <div className="input-area">
                                <input required type="password" placeholder="Confirm Password" onChange={(e) =>
                                    setPasswordconfirm(e.target.value)
                                } />
                                <i className="icon fas fa-lock"></i>
                                <i className="error error-icon fas fa-exclamation-circle"></i>
                            </div>
                            <div className="error-txt">{confirmPassError ? "Password not match" : ""}</div>
                        </div>

                        <div className={`field email ${contnoError ? "shake" : "valid"}`} >
                            <div className="input-area">
                                <input required type="text" placeholder="Contact No" name="contactno" onChange={onchange}  />
                                <i className="icon fas fa-phone"></i>
                                <i className="error error-icon fas fa-exclamation-circle"></i>
                            </div>
                            <div className="error error-txt">{contnoError ? "Enter a valid Contact no" : ""}</div>
                        </div>

                        <div className={`field email ${addressError ? "shake" : "valid"}`} >
                            <div className="input-area">
                                <input required type="text" placeholder="Address" name="address" onChange={onchange}  />
                                <i className="icon fas fa-globe"></i>
                                <i className="error error-icon fas fa-exclamation-circle"></i>
                            </div>
                            <div className="error error-txt">{addressError ? "Enter a complete Address" : ""}</div>
                        </div>

                        <div className="pass-txt"><a href="#">Forgot password?</a></div>
                        <input type="submit" value="Sign up" />
                    </form>
                    {error &&
                        <div style={{ "animation" : "shake 0.3s ease-in-out", "color" : "red"}} className="error error-txt ">email address already exists</div>
                   }
                    <div className="sign-txt">Already a member? <Link to={'/'} >Login now</Link></div>
                </div>
            }
        </>
    )
}

export default Registration
