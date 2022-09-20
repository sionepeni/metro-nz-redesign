import '../style/propertyDescription.css';
import Bed from '../style/pics/Bed.png';
import Bath from '../style/pics/bath.png';
import Car from '../style/pics/Car.png';
import Amenities from '../style/pics/Amenities.png';
import Map from './Map';



export default function PropertyDescription() {

    return(
        <div className="Main-Container">
            <h2>2-10 Sylvan Avenue East, Mount Eden, <br/>Auckland 1024</h2>
            <img src={Bed} /> <img src={Bath}/> <img src={Car}/> <br/>
            <div className="Random-Text">
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum vestibulum tortor sagittis, faucibus vestibulum imperdiet pellentesque.
                 Senectus metus urna, velit praesent volutpat. Mauris quis nam ultrices amet leo accumsan. <br/><br/>
                 Property ID:5478563</p> 
                 <hr className="Horizontal"/>
                 <h4>About the property</h4>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum vestibulum tortor sagittis, faucibus vestibulum imperdiet pellentesque.<br/><br/>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum vestibulum tortor sagittis, faucibus vestibulum imperdiet pellentesque. Senectus metus urna, velit praesent volutpat. Mauris quis nam ultrices amet leo accumsan.<br/><br/>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum vestibulum tortor sagittis, faucibus vestibulum imperdiet pellentesque. Senectus metus urna, velit praesent volutpat. Mauris quis nam ultrices amet leo accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum vestibulum tortor sagittis, faucibus vestibulum imperdiet pellentesque. Senectus metus urna, velit praesent volutpat. Mauris quis nam ultrices amet leo accumsan. 

                 </p><br/>
            
                 <hr className="Horizontal"/>
                 <h4>Property Amenities</h4><br/>
                 <div className="Amenities">
                    <img src={Amenities}/><br/><br/><br/>
                 </div>
                 <div className="Map-Container">
                    <h4>Where you'll be</h4>
                    <p>Mt Eden, Auckland</p>
                    <Map/>
                 </div>



                 
            </div>

            
            



        </div>
    )
}