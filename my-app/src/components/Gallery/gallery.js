import React, { useState } from 'react';
import './gallery.css';
import data from "./data"
import CloseIcon from '@mui/icons-material/Close';

const Gallery = () => {
    const[model, setModel] = useState(false);
    const[tempimgSrc, setTempImgSrc] = useState('');
    const getImg = (imgSrc) =>{
        // console.log(imgSrc)
        setTempImgSrc(imgSrc);
        setModel(true);
    }
    return (
        <>
        <div className={model? "model open" : "model"}>
            <img src ={tempimgSrc} />
            <CloseIcon onClick = {() => setModel(false)}/>
        </div>
        <div className = "container">
        <div className = "gallery">
            {data.map((item, index)=>{
                return (
                    
                    <div className='pics' key ={index} onClick ={()=> getImg(item.imgSrc)}>
                        <img src={item.imgSrc} style={{width:'100%'}}/>
                        <div className="img_text">
                        <h2>{item.title}</h2>
                        </div>
                    </div>
                )
            })}
        </div>
        </div>
        </>
    )
}
export default Gallery;