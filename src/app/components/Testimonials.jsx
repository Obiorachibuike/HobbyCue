import React from "react";
import "../Styles/Featuring.css";
import Image from "next/image";

function Testimonials() {
  return (
    <>
      <div className="testimonial-cont">
        <div className="featuring-cont">
          <div className="testimonial-content">
            <div className="fearting-heading">
              <Image height={30} width={30} src="/quote.png" alt="" className="quote" />

              <h1>Testimonials</h1>
            </div>
            <div className="featuring-text">
              In a fast growing and ever changing city like Bangalore, it
              sometimes becomes very difficult to find or connect with like
              minded people. Websites like hobbycue.com is a great service which
              helps me get in touch with, communicate, connect, and exchange
              ideas with other dancers. It also provides the extra benefit of
              finding products and services that I can avail, which I can be
              assured is going to be of great quality as it comes recommended by
              people of the hobbycue community. To have discussions, to get
              visibility, and to be able to safely explore various hobbies and
              activities in my city, all under one roof, is an excellent idea
              and I highly recommend it.
            </div>
            <div className="featuring-bottom-cont">
              <div className="audio-track-cont">
            
                <div className="audio-track">
                  <div className="play-cont">
                    <Image
                      height={30}
                      width={30}
                      src="/Play.png"
                      alt=""
                      className="play"
                    />
                  </div>
                  <div className="range-cont">
                    <div className="range">
                      <div className="line">
                      </div>
                        <div className="circle"></div>
                    </div>
                    <div className="time">0:00</div>
                  </div>

                  <div className="artist-profile">
                    <Image
                      height={50}
                      width={50}
                      src="/Artist.png"
                      alt=""
                      className="artist-pic"
                    />
                    <Image
                      height={30}
                      width={30}
                      src="/Mic.png"
                      alt=""
                      className="mic"
                    />
                  </div>
                </div>
              </div>

              <div className="dancer-cont">
                <div className="dancer-image">
                  <Image height={70} width={70} src="/Ellipse 12.png" alt="" className="dancer" />
                </div>
                <div className="dancer-name-cont">
                  <div className="cue dancer-name">Shubha Nagarajan</div>
                  <div className="hobby">Classical Dancer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
