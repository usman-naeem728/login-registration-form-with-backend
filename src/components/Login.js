import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import Loader from './Loader'
import './login.css'
import userContext from '../context/userContext'


const Login = () => {
    const context = useContext(userContext)
    const { login, token, error } = context
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 3000);
        if(token !== ""){
            window.location.reload()
        }
    },[token,error])

    const handleClick = (e) => {
        e.preventDefault();
        login(email, password)

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
                        <div className={`field email `} >
                            <div className="input-area">
                                <input type="text" placeholder="Email Address" onChange={(e) =>
                                    setEmail(e.target.value)} />
                                <i className="icon fas fa-envelope"></i>
                                <i className="error error-icon fas fa-exclamation-circle"></i>
                            </div>
                           
                        </div>
                        <div className={`field password`} >
                            <div className="input-area">
                                <input type="password" placeholder="Password" onChange={(e) =>
                                    setPassword(e.target.value)

                                } />
                                <i className="icon fas fa-lock"></i>
                                <i className="error error-icon fas fa-exclamation-circle"></i>
                            </div>
                        </div>
                        <div className="pass-txt"><a href="#">Forgot password?</a></div>
                        <input type="submit" value="Login" />
                    </form>
                    {error &&
                        <div style={{ "animation" : "shake 0.3s ease-in-out", "color" : "red"}} className="error error-txt ">Invalid email or password</div>
                   }
                    <div className="sign-txt">Not yet member? <Link to={'/registration'}>Signup now</Link></div>
                </div>
            }
        </>
    )
}

export default Login
