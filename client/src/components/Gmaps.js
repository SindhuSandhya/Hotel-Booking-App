import React from 'react';
import PropTypes from 'prop-types';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends React.Component {
    render() {
        const mapStyles = {
            width: '100%',
            height: '100%',
          };
        return (
            
            <Map
              google={this.props.google}
              zoom={8}
              style={mapStyles}
              initialCenter={{ lat: 47.444, lng: -122.176}}
            />
        );
      }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBqGQ6GEWr9uYzDg5oWYscSkX1Nxv_kE2U'
  })(MapContainer);