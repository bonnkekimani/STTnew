import React from 'react'
import './Contact.css'
import {FaFacebook,FaInstagram,FaTwitter,} from "react-icons/fa"
import {HouseRounded, Phone, Email} from '@mui/icons-material';


// import { themeContext } from "../../Context";
// import { useState,  useContext, useRef} from "react";


function Contact() {
    return (
        // NavBar Goes Here
        <div className='Main-div'>
        <div className='container'>
        <div className='contact-div' id='Contact'>
             <div className='c-left'>
                   <h4>Contact Information</h4>
                    <div className='addressInfo'>
                        <div className='iconAddress'>
                        <HouseRounded/>
                        </div>
                        <div className='address'>
                             <h4>ADDRESS</h4>
                              <p>Victoria Plaza, 5th Floor</p>
                             </div>
                    </div>
                    <div className='phoneInfo'>
                         <div className='iconPhone'>
                            <Phone/>
                         </div>
                         <div className='phone-details'>
                         <h4>PHONE</h4>
                              <p>**PHONE NUMBER**</p>
                         </div>
                    </div>
                    <div className='emailInfo'>
                    <div className='icon'>
                            <Email/>
                         </div>
                         <div className='phone-details'>
                         <h4>Email</h4>
                              <p>**EMAIL ADDRESS**</p>
                         </div>
                    </div>
                </div>
                <div className='c-right'>
                   
                    <form>
                        <h4>CONTACT FORM</h4>
                        <p>Send us a message and we'll respond as soon as possible</p>
                        <input type='text' name='user_name' className='user' placeholder='Name'/>
                        <input type='email' name='user_email' className='user' placeholder='Email'/>
                         <textarea name='message'className='user' placeholder='Message'/>
                         <input type="submit" value="Send" className='button'/>
                        
                    </form>
                 </div>
                 
            </div>
            </div>
            <div className='newsletter-div'>
                <div className='newsletter-details'>
                    <input type='email' name='user_email' className='user' placeholder='Email'/>
                    <input type="submit" value="Subscribe" className='button'/>
              </div>
              <div className='icons'>
                   <a href='https://www.facebook.com/sayaritoursandtravel/'style={{color:'#eb5e07'}}><span><FaFacebook/></span></a> 
                    <a href='https://instagram.com/sayaritoursandtravel?igshid=YmMyMTA2M2Y='style={{color:'#eb5e07'}}><span><FaInstagram/></span></a>
                    <a href='https://twitter.com/sayari_tours?t=1GAgyZCmnkpaIgsFaIhmvg&s=09' style={{color:'#eb5e07'}}><span><FaTwitter/></span></a>
                     
                   

              </div>

            </div>
            </div>
        // Footer Goes Here
      )
}
export default Contact