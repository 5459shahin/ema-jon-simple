import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'> Log In</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id=''></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id=''></input>
                    </div>
                    <div>
                        <input className='form-submit' type="submit" value="Login" />
                    </div>
                </form>
                <p>
                    New to ema-john? <Link className='form-link' to="/signup">Create an account</Link>
                </p>
                <div className='from-underline'>
                    <div className='from-underline-div'></div>
                     <div style={{marginTop: 0}}>Or</div> 
                    
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