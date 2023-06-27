import "./visited.css";

function Data(props){
    return(
        <div className="d-card">
            <div className="d-image">
             <img src={props.image} alt="image"/>
        </div>
        <h4>{props.heading}</h4>
        <p>{props.text}</p>
    </div>
    );
}
export default Data;