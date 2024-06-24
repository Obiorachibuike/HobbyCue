import React from 'react'
import "../Styles/SignUp.css";


function Login() {
  return (
    <>
          <div className="form-content">
        <form action="" className="form">
        <div className="other-btn-cont">
            <img src="/Google.png" alt="" />
            <button className="other-btn">Continue with Google</button>
          </div>
          <div className="other-btn-cont">
            <img src="/Facebook.png" alt="" />
            <button className="other-btn"> Continue with Facebook</button>
          </div>
          <div className="or">
            <div></div>or<div></div>
          </div>
       
          <div className="form-input flex-col flex">
            <input type="email" className="email input" placeholder="Email" />
            <input
              type="password"
              className="password input"
              placeholder="Password"
            />
          </div>
          <div className="forget-cont">
            
            <div className="strength">

            <span><img src="/lock.png" /></span>
            <a href='#'>Password Strength</a>
            </div>
          </div>
          <div className="btn-cont">
            <button className="btn">Continue</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login