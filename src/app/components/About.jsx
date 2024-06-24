"use client";
import React, { useState } from "react";
import "../Styles/About.css";
import SignUp from "./SignUp";
import Login from "./Login";

function About() {
  const [login, setLogin] = useState("login-container hide");
  const [signUp, setSignUp] = useState("sign-up-container show");
  const [signUpActive, setSignUpActive] = useState("sign-up active");
  const [loginActive, setLoginActive] = useState("login");

  const SignUpCont = () => {
    setSignUp("sign-up-container show");
    setLogin("login-container hide");
    setSignUpActive("sign-up active");
    setLoginActive("login");
  };
  const LoginCont = () => {
    setSignUp("sign-up-container hide");
    setLogin("login-container show");
    setSignUpActive("sign-up");
    setLoginActive("login active");
  };

  return (
    <>
      <section id="intro">
        <div className="about-cont">
          <div className="about-content">
            <div className="about-page flex justify-between">
              <div className="about-page-left">
                <h1>
                  <i>
                    Explore your <span className="hobby">hobby</span> or{" "}
                    <span className="cue">passion</span>
                  </i>
                </h1>
                <p>
                  Sign-in to interact with a community of fellow hobbyists and
                  an eco-system of experts, teachers, suppliers, classes,
                  workshops, and places to practice, participate or perform.
                  Your hobby may be about visual or performing arts, sports,
                  games, gardening, model making, cooking, indoor or outdoor
                  activities…
                </p>
                <p>
                  If you are an expert or a seller, you can Add your Listing and
                  promote yourself, your students, products, services or events.
                  Hop on your hobbyhorse and enjoy the ride.
                </p>
              </div>
              <div className="about-page-right">
                <div className="navigation-cont">
                  <div className="navigation-content flex justify-between">
                    <div className={signUpActive} onClick={SignUpCont}>
                      Sign Up
                    </div>
                    <div className={loginActive} onClick={LoginCont}>
                      Join In
                    </div>
                  </div>
                  <div className="form-cont ">
                    <div className={signUp}>
                      <SignUp />
                    </div>
                    <div className={login}>
                      <Login />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-image-cont">
              <img src="/Group 27.png" alt="" className="about-img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
