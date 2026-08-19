import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import PropTypes from "prop-types";
import LoadingAnim from "./LoadingAnim";
import "leaflet/dist/leaflet.css";

const LocationsMap = ({ location }) => {

  LocationsMap.propTypes = {
    location: PropTypes.object,
  };

  return (

  <div className="flex w-full justify-center px-4">
    <div className="w-full max-w-5xl overflow-hidden rounded-xl">
      {location.coordinates && location.coordinates.length > 0 ? (
        <MapContainer
          className="h-[320px] w-full"
          center={location.coordinates}
          zoom={12}
          scrollWheelZoom={false}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          <Marker position={location.coordinates}>
            <Popup>{location.city}</Popup>
          </Marker>
        </MapContainer>
      ) : (
        <div className="flex h-[320px] items-center justify-center">
          <LoadingAnim />
        </div>
      )}
    </div>
  </div> 
  
  );

};

export default LocationsMap;

