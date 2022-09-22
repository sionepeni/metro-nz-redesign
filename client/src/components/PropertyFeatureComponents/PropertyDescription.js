import '../../style/FeaturePageStyles/propertyDescription.css';
import Bed from '../../style/pics/Bed.png';
import Bath from '../../style/pics/bath.png';
import Car from '../../style/pics/Car.png';
import Amenities from '../../style/pics/Amenities.png';
import Map from '../Map';
import Card from '../Card/Card';
import { useState, useEffect } from "react"




export default function PropertyDescription() {

    return(

        <div className="Main-Body-Description">
            <div className="Sub-Header">
                <h1>2-10  Sylvan Avenue East, Mount Eden,
                    Auckland 1024
                </h1>
                <div className="Icon-Container">
                    <div className="Feature-icons-1">
                    <img src={Bed}/><h3>2</h3>   
                    </div>
                    <div className="Feature-icons-2">
                    <img src={Bath}/> <h3>1</h3>   
                    </div>
                    <div className="Feature-icons-3">
                     <img src={Car}/> <h3>1</h3> 
                    </div>
                </div>

                    
                

                
                

                
                <p className='Upper-Text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum vestibulum tortor sagittis, faucibus vestibulum imperdiet pellentesque.
                 Senectus metus urna, velit praesent volutpat. Mauris quis nam ultrices amet leo accumsan. <br/><br/>
                 Property ID:5478563</p> 

                 <hr className="Horizontal"/>
                 <h2>About the property</h2>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum vestibulum tortor sagittis, faucibus vestibulum imperdiet pellentesque.<br/><br/>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum vestibulum tortor sagittis, faucibus vestibulum imperdiet pellentesque. Senectus metus urna, velit praesent volutpat. Mauris quis nam ultrices amet leo accumsan.<br/><br/>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum vestibulum tortor sagittis, faucibus vestibulum imperdiet pellentesque. Senectus metus urna, velit praesent volutpat. Mauris quis nam ultrices amet leo accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum vestibulum tortor sagittis, faucibus vestibulum imperdiet pellentesque. Senectus metus urna, velit praesent volutpat. Mauris quis nam ultrices amet leo accumsan. 

                 </p><br/>
            
                 <hr className="Horizontal"/>
                 
                <div className="Amenities">
                    <h2>Property Amenities</h2><br/>
                    <img src={Amenities} />
                </div>
                <div className="Map-Header">
                <h2>Where you'll be</h2><br/>
                <p>Mt Eden, Auckland</p>
                </div>
                
                
            </div>

            <div className="Listing-Header">
                    <h2>Similar listings</h2>
                    <input type="button" name="next" className="Listing-Button" value="Browse all Properties" />
                </div>
        </div>

    

   

    )
}