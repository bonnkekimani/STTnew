import React from 'react'
import './Contact.css'
// import { themeContext } from "../../Context";
// import { useState,  useContext, useRef} from "react";


function Contact() {
    return (
        // NavBar Goes Here
        <div className='container'>
        <div className='contact-form' id='Contact'>
             <div className='c-left'>
                     <div className='awesome'>
                         
                         <span>
                            <h4>WE'D LOVE TO HEAR FROM YOU</h4>
                            <p className='contact-text'>Sayari Tours and Adventures is a tour company based in Nairobi, Kenya. <br></br>
                            We offer the most competitive and highly customized travel<br></br>
                             services with affordable pricing to match your budget and needs.</p>
                         </span>
                     </div>
                </div>
                <div className='c-right'>
                    {/* <form ref ={form} onSubmit={sendEmail}> */}
                    <form>
                        <h4>CONTACT FORM</h4>
                        <p>Send us a message and we'll respond as soon as possible</p>
                        <input type='text' name='user_name' className='user' placeholder='Name'/>
                        <input type='email' name='user_email' className='user' placeholder='Email'/>
                         <textarea name='message'className='user' placeholder='Message'/>
                         <input type="submit" value="Send" className='button'/>
                         {/* <span>{done && "Thank you for Contacting Me!"}</span> */}
                    </form>
                 </div>
                 <div className='image-contact'>
                    <img src='./pictures/giraffes.jpg' alt='giraffe'/>
                 </div>
            </div>
            </div>
            
        // Footer Goes Here
      )
}
export default Contact