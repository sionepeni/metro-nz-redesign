import '../../style/FeaturePageStyles/propertyPics.css';
import Button from '../../style/pics/Button.png';
import { HeartStraight } from "phosphor-react"
import { useState } from 'react';


export default function PropertyPics() {
    const toggleHeart = () => {
        heartColor === "black"
            ? setHeartColor("#F85757")
            : setHeartColor("black")
    }
    const [heartColor, setHeartColor] = useState("black")
    return(
        <div className="Main-Body-Pics">
           <span onClick={toggleHeart} className="card-image-heart">
                        <HeartStraight className="heart-shape" color={heartColor} size={30} /> <h3>Save to watchlist</h3>
            </span> 
          
          <div className="First-Chunk">
            <img className="Main-Pic" src="https://trademe.tmcdn.co.nz/photoserver/plus/1830345358.jpg"/>
            <img className="Main-Pic" src="https://trademe.tmcdn.co.nz/photoserver/plus/1830345284.jpg"/>
            <img className="Small-Pic" src="https://trademe.tmcdn.co.nz/photoserver/plus/1830345301.jpg"/>
            <img className="Small-Pic-1" src="https://trademe.tmcdn.co.nz/photoserver/plus/1830345312.jpg"/>

            <div className="Other-Pics">
            <img src="https://trademe.tmcdn.co.nz/photoserver/plus/1830345324.jpg"/>
            <img src="https://trademe.tmcdn.co.nz/photoserver/plus/1830345343.jpg"/>
            </div>
            <img src={Button} className="Viewmore-Button"/>
            
            

          </div>
           
        </div>
     
    )
}