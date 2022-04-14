import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState(' ');
    const [password, setPassword] = useState(' ');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname ||'/';

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    if (user) {
        navigate(from, {replace: true});
    }


    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }


    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'> Log In</h2>
                <form onSubmit={handleUserSignIn}>
                    {/*=========================================
                                email field  */}
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id='' required></input>
                    </div>
                    {/*=======================================
                              password field  */}
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id='' placeholder='Your Email' required></input>
                    </div>

                    {/*============================================
                               Error message */}
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    {
                        loading && <p>Loading....</p>
                    }

                    <input className='form-submit' type="submit" value="Login" />
                </form>

                <p>
                    New to ema-john? <Link className='form-link' to="/signup">Create an account</Link>
                </p>
                <div className='from-underline'>
                    <div className='from-underline-div'></div>
                    <div style={{ marginTop: 0 }}>Or</div>

                    <div className='from-underline-div'></div>
                </div>
                <div className='from-login-google'>
                    <button><h1>G</h1> <p>Continue with Google </p></button>
                </div>
            </div>
        </div>
    );
};

export default Login;