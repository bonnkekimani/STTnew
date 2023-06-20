// import Explore from "./explore";
import "./explore.css";

function Data(props){
    return(
        <div className="t-card">
            <div className="t-image">
             <img src={props.image} alt="picha"/>
        </div>
        <h4>{props.heading}</h4>
        <p>{props.text}</p>
    </div>
    );
}
export default Data;