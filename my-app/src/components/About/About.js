import './About.css'
import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css/pagination'
import { Pagination } from 'swiper'
import 'swiper/css'

function About(){
    const things=[
        {
            "avatar_url": "/pictures/NgongHills.jpg",
            "name": "Local Tours",
            "description": "Tour and get to see the most beautiful parts of Kenya "
         },
         {
            "avatar_url": "/pictures/Excursion.jpg",
            "name": "Excursions",
            "description": "Take only memories, leave only footprints"
         },
         {
            "avatar_url": "/pictures/hikes.jpg",
            "name": "Hikes",
            "description": "Leave the road, take the trails."
         },
         {
            "avatar_url": "/pictures/NatureWalks.jpg",
            "name": "Nature Trails and Walks",
            "description": "A walk in nature walks the soul back home."
         },
         {
            "avatar_url": "/pictures/bikes.jpg",
            "name": "Bike Riding",
            "description": "Life is like riding a bicycle – in order to keep your balance, you must keep moving"
         },
         {
            "avatar_url": "/pictures/roadtrips.jpg",
            "name": "Road Trips",
            "description": "Roads were made for journeys, not destinations."
         },
         {
            "avatar_url": "/pictures/Bus.jpg",
            "name": "Airport Transport",
            "description": "Trust Us to get you there on time"
         },
         {
            "avatar_url": "/pictures/camp.jpg",
            "name": "Camping",
            "description": "Wilderness is not a luxury but a necessity of the human spirit"
         },
    ]

    
    return(
       <div className="main-container">
            <div className='about-div'>
               <span style={{fontWeight:'bold',fontSize:'1rem'}}>ABOUT US</span>

                <div className='about-left'>
                   <p>Welcome to Sayari Tours and Adventures, 
                    <br></br>your gateway to thrilling experiences and unforgettable journeys. <br></br>
                    With a passion for exploration and a commitment to excellence, <br></br>
                    we are a premier tours and adventures company dedicated to creating remarkable memories for every adventurer.<br></br>
                    Whether you seek adrenaline-pumping activities, cultural immersion, or serene natural wonders,<br></br>
                    our expert team curates an array of meticulously crafted itineraries tailored to your interests and preferences.<br></br>
                    From heart-stopping hikes to captivating city tours, our handpicked destinations span the globe, ensuring that every traveler<br></br>
                    discovers their personal paradise. With XYZ Tours and Adventures, embark on a transformative journey where adventure knows no boundaries.<br></br>
                    Let us be your guide to extraordinary experiences, creating memories that last a lifetime.</p>
                </div> 
                <div className='about-right'>
                <div className='t-wrapper' id='Testimonials'>
                    <div className='t-heading'> 
                        <span>WHAT WE DO</span>   
                    </div>  
                    <Swiper
                         modules={[Pagination]}
                         slidesPerView={1}
                         pagination={{clickable:true}}
                     >
                       {things.map((thing,index)=>{
                         return(
                          <SwiperSlide key={index}>
                                <div className='testimonial'>
                                <img src={thing.avatar_url} alt=''/>
                                <span>{thing.name}</span>
                                <span>{thing.description}</span>
                                </div>
                    
                             </SwiperSlide>
                           )
                        })}
   

                     </Swiper>

                   
                    
                </div>
                </div>
                </div>

       </div> 
    )
}
export default About