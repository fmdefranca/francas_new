import React, {
  Component
} from "react";
import {
  Map,
  GoogleApiWrapper
} from "google-maps-react";

// const mapStyles = {
//   width: '50vw',
//   height: '75vh',
//   'marginLeft': 'auto',
//   'marginRight': 'auto'
// };

export class MapContainer extends Component {
  render() {
    return ( <
      Map google = {
        this.props.google
      }
      zoom = {
        14
      }
      // style = {
      //   mapStyles
      // }
      initialCenter = {
        {
          lat: -0.0337,
          lng: 51.8187,
        }
      }
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCDkPuezda8PUfN9z1te9dkfpFCn5Do04w",
})(MapContainer);