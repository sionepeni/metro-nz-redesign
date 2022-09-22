import React from 'react';
import '../style/FeaturePageStyles/propertyFeaturePageStyle.css';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import BookingForm from '../components/PropertyFeatureComponents/BookingForm';
import PropertyDescription from '../components/PropertyFeatureComponents/PropertyDescription';
import PropertyPics from '../components/PropertyFeatureComponents/PropertyPics';
import Map from '../components/PropertyFeatureComponents/myMap';
import SimilarListing from '../components/PropertyFeatureComponents/SimilarListing';


export default function PropertyFeature() {

    return(
        
        <div className="Page-Container">
            <Header/>
            <PropertyPics/>       
            <PropertyDescription/>             
            <BookingForm />  
            <Map />
            <SimilarListing />
            <Footer/>    
        </div>
    )
}