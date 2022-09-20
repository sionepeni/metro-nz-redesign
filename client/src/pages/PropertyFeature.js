import React from 'react';
import '../style/propertyFeaturePageStyle.css';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import BookingForm from '../components/BookingForm';
import PropertyDescription from '../components/PropertyDescription';
import { MapContainer } from '../components/Map';
import Card from '../components/Card/Card';


export default function PropertyFeature() {

    return(
        
        <div className="Page-Container">

        <div className="Header-Container">
            <Header/>
        </div>
            
        
        
                 <div className="Body-Container">
                    
                    
                    <div className="Property-Description">
                        <PropertyDescription/>
                    </div>

                    <div className="Booking-Container">
                     <BookingForm />   
                    </div>

                    
                        

                    



                    
                     
                     
                        {/* <MapContainer/> */}

                     
                     
                </div>
        

        <div className="Footer-Container">
            <Footer/>
        </div>
            
       
            

        </div>
    )
}