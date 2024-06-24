import React from "react";
import "../Styles/Header.css"
import Image from "next/image";

function Header() {
  return (
    <>
      <header>
        <div className="header-cont">
          <div className="header-content">
            <div className="header-left-cont flex items-center justify-between">
              <div className="header-left-content  flex   items-center justify-between">
                <div className="logo-cont">
                  <Image height={50} width={50} src="/logo.png" alt="" className="" />
                  
                </div>
                <div className="company-name">
                  <i>
                    <h1>

                    <span className="hobby">hobby</span>
                    <span className="cue">cue</span>
                    </h1>
                  </i>
                  <p> <i>
                    
                    Your Hobby, Your Community
                    </i> 
                    </p>
                </div>
              </div>
              <div className="search-cont">
                <div className="search-content flex justify-around">
                    <input type="text" className="search" placeholder="Search here.." />
                    <div className="search-cont">

                    <Image height={15} width={15} src="/search.png" alt="" className="search-icon bg-blue"  />
                    </div>
                </div>
              </div>
            </div>
            <div className="header-right-cont">
                <div className="header-right-content flex justify-between">
                    <div className="more-cont explore flex justify-evenly">
                        <Image height={25} width={25} src="/Explore.png" alt="" className="more-icon" />
                        <p>Explore</p>
                        <Image height={25} width={25} src="/Arrow.png" alt="" className="more-" />
                        <ul className="dropdown">
                          <li>People - Community</li>
                          <li>Places - Venues</li>
                          <li>Programs - Event</li>
                          <li>Product - Store</li>
                          <li>Blogs</li>
                        </ul>
                    </div>
                    <div className="more-cont flex justify-evenly">
                        <Image height={25} width={25} src="/Hobbies.png" alt="" className="more-icon" />
                        <p>Hobbies</p>
                        <Image height={25} width={25} src="/Arrow.png" alt="" className="more-" />
                    </div>
                    <div className="header-icon-cont flex items-center justify-between">

                    <Image height={25} width={25} src="/bookmark.png" alt="" className="header-icon hide" />
                    <Image height={25} width={25} src="/cart.png" alt="" className="header-icon hide" />
                    <Image height={25} width={25} src="/notifications.png" alt="" className="header-icon" />
                    <Image height={25} width={25} src="/Search (2).png" alt="" className="header-icon search-profile" />
                    <Image height={25} width={25} src="/Menu.png" alt="" className="header-icon search-profile" />
                    </div>
                    <div className="profile-cont">
                      <Image width={50} height={50} src= "/Ellipse 23.png" />
                      <Image width={30} height={30} src= "/Arrow.png" />

                    </div>
                    <div className="sign-in-cont">
                        <div className="sign">Sign In</div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
