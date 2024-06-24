import React from 'react'
import "../Styles/Started.css";

function Started() {
  return (
    <>
        <section id="started">
            <div className="started-cont">
                <div className="started-content">
                    <div className="started-head">Your <span className='cue'>Hobby,</span>  Your <span className='hobby' >Community...
                        </span> </div>
                <div className="started-btn">Get Started</div>
                <div className="started-image-cont"><img src="/Group 99.png" alt="" className="started-ima" /></div>
                </div>

                <div className="go-home-cont">
                    <img src="/Group 77.png" alt="" />
                    <div>Go to top (Ctrl+Home)</div>
                </div>

            </div>
        </section>
    </>
  )
}

export default Started