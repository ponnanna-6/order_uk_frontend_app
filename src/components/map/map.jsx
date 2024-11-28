import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import styles from "./map.module.css";

// Fix default marker issue
delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
//   iconUrl: require("leaflet/dist/images/marker-icon.png"),
//   shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
// });

const MapWithInfoCard = () => {
  const position = [51.5074, -0.1278]; // Coordinates for London

  return (
    <div className={styles.container}>
      <div className={styles.infoCard}>
        <h2>McDonald's</h2>
        <h3>South London</h3>
        <p>
          Tooley St, London Bridge, London SE1 2TF, United Kingdom
        </p>
        <p>
          <strong>Phone number</strong>: +934443-43
        </p>
        <p>
          <strong>Website</strong>:{" "}
          <a href="http://mcdonalds.uk/" target="_blank" rel="noreferrer">
            http://mcdonalds.uk/
          </a>
        </p>
      </div>
      <MapContainer
        center={position}
        zoom={15}
        style={{ height: "100%", width: "100%", borderRadius: "8px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>McDonald's South London</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapWithInfoCard;
