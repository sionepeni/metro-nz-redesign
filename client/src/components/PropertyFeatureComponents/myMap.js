import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';



const mapStyles = {
  width: '40vw',
  height: '40vh',
  marginTop:'-45vh',
  marginLeft:'11.4vw'

  
};

export class MapContainer extends Component {
  render() {
    return (
      
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: -36.86908081285832,
            lng: 174.75964787116422
          
          }
        }
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_API_KEY
})(MapContainer);