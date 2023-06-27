import Data from "./data"
import falls from '../Visited/photos/14 Falls.png';
import Elephant from '../Visited/photos/Elephant-Hills.png';
import Lake from '../Visited/photos/Lake Elementaita.png';
import satima from '../Visited/photos/Mt Satima.png';
import Ruru from '../Visited/photos/Mt. Rurimeria.png';
import Namanga from '../Visited/photos/Namanga.png';
import Ngong from '../Visited/photos/Ngong Hills.png';
import Sagana from '../Visited/photos/Sagana Gorges.png';
import Table from '../Visited/photos/Table-mountain.webp';
import Wanjee from '../Visited/photos/Wanjee.png';
import camp from '../Visited/photos/camp malta.jpeg';
import kilima from '../Visited/photos/kilimambogo.jpeg';
import Kikuyu from '../Visited/photos/Kikuyu.png';
import Limuru from '../Visited/photos/Limuru.png';
import ndakaini from '../Visited/photos/ndakaini.png';
import gatundu from '../Visited/photos/gatundu.png';


function Visited() {
    return (
        <div className="visited">
            <div className="datacard1">
                <Data
                    image={falls}
                    heading="14 Falls"
                />
                <Data
                    image={Elephant}
                    heading="Elephant-Hills"
                />

                <Data
                    image={Lake}
                    heading="Lake Elementaita"
                />
                <Data
                    image={Sagana}
                    heading="Sagana Gorges"
                />
                <Data
                    image={satima}
                    heading="Mt. Satima"
                />
                <Data
                    image={Ruru}
                    heading="Mt. Rurimeria"
                />
                <Data
                    image={Namanga}
                    heading="Namanga"
                />
                <Data
                    image={Ngong}
                    heading="Ngong Hills"
                />
                <Data
                    image={Table}
                    heading="Table Mountains Kikopey"
                />
                <Data
                    image={Wanjee}
                    heading="Wanjee Camp"
                />
                <Data
                    image={camp}
                    heading="Camp Malta"
                />
                <Data
                    image={kilima}
                    heading="Mount Kilimambogo"
                />
                <Data 
                    image={gatundu}
                    heading="Juja - Gatundu Bike ride"
                    text="Under 35KM Challenge"
                />
                <Data
                    image={ndakaini}
                    heading="Juja - Ndakaini Bike ride"
                    text="Under 105KM Challenge"
                />
                <Data
                    image={Kikuyu}
                    heading="Juja - Kikuyu Bike ride"
                    text="Under 110KM Challenge"
                />
                <Data
                    image={Limuru}
                    heading="Juja - Limuru Bike ride"
                    text="Under 115KM Challenge"
                />
            </div>
        </div>

    )
}
export default Visited;