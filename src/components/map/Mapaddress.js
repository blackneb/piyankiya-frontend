import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import '../styles/style.css'

export default function Mapaddress() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: 9.06, lng: 38.76 }), []);

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
  );
}