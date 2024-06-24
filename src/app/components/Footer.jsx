import React from 'react'
import "../Styles/Footer.css";
import { AddCircle } from "@mui/icons-material";
import Image from 'next/image';

function Footer() {
  return (
    <>
         <footer>
            <div class="footer-cont">
                <div class="footer-content">
                  
                 
              
                    <div class="legal-cont">
                        <div className="footer-heading">
                        <div class="footer-title">Hobbycue</div>
                        <div className="footer-dropdown">
                      <Image width={22} height={22} src= "/expand.png" />

                        </div>
                        </div>
                        <div class="legal-content">
                            <p>About Us</p>
                            <p>Our Services</p>
                            <p>Work with Us</p>
                            <p>FAQ</p>
                            <p>Contact Us</p>
                        </div>
                    </div>
                    <div class="product-cont">
                    <div className="footer-heading">
                        <div class="footer-title">How Do I</div>
                        <div className="footer-dropdown">
                      <Image width={22} height={22} src= "/expand.png" />

                        </div>
                        </div>
                        <div class="legal-content">
                            <p>Sign Up</p>
                            <p>Add a Listing</p>
                            <p>Claim a Listing</p>
                            <p>Post a Query</p>
                            <p>Add a Blog Post</p>
                            <p>Other Queries</p>
                        </div>
                    </div>
                     
                    <div class="links-cont">
                    <div className="footer-heading">
                        <div class="footer-title">Quick Links</div>
                     <div className="footer-dropdown">
                   <Image width={22} height={22} src= "/expand.png" />

                     </div>
                        </div>
                        
                            <p>Listings</p>
                            <p>Blog Posts</p>
                            <p>Shop / Store</p>
                            <p>Community</p>
                          
                       
                    </div>

                    <div class="social-media">
                    <div className="footer-heading">
                        <div class="footer-title">Social Media</div>
                        <div className="footer-dropdown">
                      {/* <Image width={22} height={22} src= "/expand.png" /> */}

                        </div>
                        </div>
                        <div class="legal-content">
                            <div className="social-icons flex justify-between items-center">
                                <Image height={25} width={25} src="/Facebook (3).png" alt="" />
                                <Image height={25} width={25} src="/Twitter.png" alt="" />
                                <Image height={25} width={25} src="/Instagram.png" alt="" />
                                <Image height={25} width={25} src="/Pintrest.png" alt="" />
                                <Image height={25} width={25} src="/Google (2).png" alt="" />
                                <Image height={25} width={25} src="/Youtube.png" alt="" />
                                <Image height={25} width={25} src="/Telegram.png" alt="" />
                                <Image height={25} width={25} src="/Gmail.png" alt="" />
                            </div>
                          <div class="newsletter-cont">
                        <div class="footer-title">Invite Friends</div>
                            <input type="text" placeholder="Your email" />
                            <button>Invite</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>

                &copy Purple Cues Private Limited
                </p>
            </div>
        </footer>
    </>


  )
}

export default Footer