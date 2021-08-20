import React from "react";
import GoogleMapReact from "google-map-react";
import Logo from "../assets/pointerLogo.png";

const Pointer = ({ lat, lng, text }) => {
  return (
    <div className="pointer-container" lat={lat} lng={lng}>
      <p className="pointer-text">{text}</p>
      <img className="pointer-logo" src={Logo} alt="Pointer Logo" />
    </div>
  );
};
export default function Map({ geoLocations = [], center }) {
  return (
    <div className="map-container">
      <p>View Stops for a selected route in the map</p>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        center={center}
        defaultZoom={12}
      >
        {geoLocations &&
          geoLocations.map((item) => {
            const { school_route_stop_uuid, geo_location } = item;
            console.log(item);

            return (
              <Pointer
                lat={parseFloat(geo_location.latitude)}
                lng={parseFloat(geo_location.longitude)}
                text={school_route_stop_uuid}
              />
            );
          })}
      </GoogleMapReact>
    </div>
  );
}
