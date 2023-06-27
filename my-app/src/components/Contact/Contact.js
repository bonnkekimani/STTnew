import React from 'react'
import './Contact.css'
import {FaFacebook,FaInstagram,FaTwitter,} from "react-icons/fa"
import {HouseRounded, Phone, Email} from '@mui/icons-material';
import { useState } from 'react';


function Contact() {
     const [selected , setSelected] = useState(null)
     const toggle = (i) =>{
          if (selected === i){
               return setSelected(null)
          }
          setSelected (i)
     }
     const data=[
          {
              
              "question": "1) How do I join Sayari Tours and Travel?",
              "answer": "Contact 0701418956 or 0797662811. Ps: It’s FREE to join.We have a WhatsApp group that is strict on what we share.You can follow us in all our socials:Instagram, Facebook and Twitter"
           },
           {
              
              "question": "2) Who can join Sayari Tours and Travel?",
              "answer": "Everyone is welcome. Come with your full spirit of adventure, haha!"
           },
           {
              
              "question": "3) Does participation in the activities lined up dependant on whether one is a member?",
              "answer": "Absolutely not. We aim at satisfying your wanderlust unbiased."
           },
           {
              
              "question": "4) How often are our activities?",
              "answer": "We strive to offer the best and most affordable expeditions at least monthly"
           },
           {
              
              "question": "5) What makes Sayari Tours and Travel different?",
              "answer": "We listen to our fellow adventurers’ expedition ideas and requests and act on them. We work best as a team"
           },
           {
              
              "question": "6) Where can one get updates on Sayari’s activities?",
              "answer": "Instagram, WhatsApp,Twitter,Facebook."
           },
          
      ]
  
    return (
        // NavBar Goes Here
        <div className='Main-div'>
        <div className='container'>
        <div className='contact-div' id='Contact'>

             <div className='c-left'>
                   <h4>CONTACT INFORMATION</h4>
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
                    <div className='iconEmail'>
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
                        <input type='text' name='user_name' className='user' placeholder='Full Names'/>
                        <input type='email' name='user_email' className='user' placeholder='Email'/>
                         <textarea name='message'className='user' placeholder='Message'/>
                         <input type="submit" value="Send" className='button'/>
                        
                    </form>
                 </div>
                 
            </div>
            </div>
            <div className='newsletter-div'>
                <div className='newsletter-details'>
                    <h3>Subscribe to our Newsletters</h3>
                    <p>Sign up for our newsletter to get information about our latest adventures.</p>
                    <input type='email' name='user_email' className='user' placeholder='Email'/>
                    <input type="submit" value="Subscribe" className='button'/>
              </div>
              <div className='icons'>
                   <a href='https://www.facebook.com/sayaritoursandtravel/'style={{color:'black'}}><span><FaFacebook/></span></a> 
                    <a href='https://instagram.com/sayaritoursandtravel?igshid=YmMyMTA2M2Y='style={{color:'black'}}><span><FaInstagram/></span></a>
                    <a href='https://twitter.com/sayari_tours?t=1GAgyZCmnkpaIgsFaIhmvg&s=09' style={{color:'black'}}><span><FaTwitter/></span></a>
          
                </div>
                <div className='f-wrapper'>
                <h2 style = {{color:'black'}}>FAQs</h2>
                    <div className='accordion'>
                         
                         {data.map((item,i)=>(
                              <div className='item'>
                                   <div className='title' onClick={()=>toggle(i)}>
                                        <h2>{item.question}</h2>
                                        <span>{selected === i ? '-': '+'}</span>
                                   </div>
                                   <div className={selected === i ? 'content show': 'content'}>{item.answer}</div>
                              </div>
                         ))}
                         


                    </div>
                    <div className='motto'>
                              <h2>MOTTO: </h2>
                              <p>Satisfying Your Wanderlust.</p>
                              <br></br>
                              <h2>VISION</h2>
                              <p>To ensure our clients experience are fun-filled, adventurous and life-changing moments.</p>
                              <h2>MISSION</h2>
                         <p>To ensure all gallivanters step in and enjoy the outdoors by making our outdoor experiences affordable and fun.</p>
                    </div>
                    

                </div>

            </div>
            </div>
        // Footer Goes Here
      )
}
export default Contact