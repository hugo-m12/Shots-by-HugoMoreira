import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import PropTypes from "prop-types";
import LoadingAnim from "./LoadingAnim";
import "leaflet/dist/leaflet.css";

const LocationsMap = ({ location }) => {

  LocationsMap.propTypes = {
    location: PropTypes.object,
  };

  return (
    <div>
      {location.coordinates && location.coordinates.length > 0 ? (
        <MapContainer className="h-[300px]"
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
        <div className="flex items-center justify-center p-20">
          <LoadingAnim />
        </div>
      )}
    </div>
  );
};

export default LocationsMap;

