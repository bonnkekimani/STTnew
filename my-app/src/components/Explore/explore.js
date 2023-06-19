import React from 'react';
import "./explore.css";
import Data from "./data"
import sayari from '../Explore/photos/Sayari.png';
import vision from '../Explore/photos/vision.png';
import mission from '../Explore/photos/mission.png';

function Explore(){
    return(
        <div className="explore">
            {/* <h1>Learn About us</h1> */}
            {/* <p>get to know us today</p> */}
            <div className="datacard">
                <Data 
                image = {sayari}
                heading = "MOTTO"
                text = "Satisfying Your Wanderlust."
                />

                <Data 
                image = {vision}
                heading = "VISION"
                text = "To ensure our clients experience are fun-filled, adventurous and life-changing moments."
                />

                <Data 
                image = {mission}
                heading = "MISSION"
                text = "To ensure all gallivanters step in and enjoy the outdoors by making our outdoor experiences affordable and fun."
                />
            </div>
            <h1 style = {{textAlign: 'center'}}>Brief History</h1>
            <p className='para'>
                Sayari Tours and Travel is a locally owned travel company. The story of Sayari
Tours and Travel all began in 2022 when two friends with a mutual fervour of
gallivanting, came together and registered the company as a travel agency. The
two friends, having previously worked with other adventure clubs and companies,
gave into the idea of having one of their own. They quickly learned from other
travel companies, travel and touring clubs and the company is swiftly upcoming.
In light of this, Sayari has partnered with several community-based organisations,
campus clubs and travel companies in different activities, among them: a safari to
Namanga- Kenya-Tanzania border, hikes to Elephant Hills-Aberdare Kenya,
Sleeping Warriors-Gilgil Kenya, Mt.Satima & Dragon's teeth-Aberdare, Mount
Kilimambogo, Table mountains-Gilgil,Kikopey, a camp at Camp Malta-Sagana
Kenya, a camp at Wanjee Nature Park-Nyeri Kenya,round bike trips: Juja-Gatundu,
Juja-Kikuyu, Juja-Ndakaini among others.
Sayari Tours and Travel aims at making travel and tour experiences fun, serene
and worth commemoration by offering great service and pocket-friendly
expeditions to all travellers.
                </p>
        </div>
        
    )
}
export default Explore;