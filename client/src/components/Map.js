import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';



const mapStyles = {
  width: '50%',
  height: '50%'
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
            lat: -36.881709407321914,
            lng: 174.75151524726442

             
          }
        }
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_API_KEY
})(MapContainer);