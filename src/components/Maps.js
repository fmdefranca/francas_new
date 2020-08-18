import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import Grid from "@material-ui/core/Grid";

const mapStyles = {
  width: "50%",
  height: "50%",
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: -0.0337,
          lng: 51.8187,
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCDkPuezda8PUfN9z1te9dkfpFCn5Do04w",
})(MapContainer);
