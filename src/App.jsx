import React from 'react';
import googleIcon from './assets/google.svg';  
import facebookIcon from './assets/facebook.svg';
import appleIcon from './assets/apple.svg';   
import mobileIcon from './assets/mobile.svg';  
import './App.css';

const App = () => {
  return (
    <div class="input-box">
      <div class="header">
        <h1>Login</h1>
        <p>Enter your email and password to log in</p>
      </div>

      <form>
        <input type="email" placeholder='Enter your Email' className='input-field' required/>
        <br></br>
        <input type='password' placeholder='Enter your password' className='input-field' required/>
        <div className='password-option'>
          <label>
          <input type='checkbox'/>Remember Me
          </label>
          <a href='#'>Forgot password?</a>
        </div>
        <button className='login-button'>Log In</button>
      </form>

      <div className='separator'>Or login with</div>

      <div className="login-options">
        <button className="btn">
          <img src={googleIcon} alt="google" />
        </button>
        <button className="btn">
          <img src={facebookIcon} alt="facebook" />
        </button>
        <button className="btn">
          <img src={appleIcon} alt="apple" />
        </button>
        <button className="btn">
          <img src={mobileIcon} alt="mobile" />
        </button>
      </div>

      <p className="signup">
          Don’t have an account? <a href="/Signup">Sign Up</a>
      </p>

    </div>
  )
}

export default App