import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "../assets/style.css"; // Make sure your styles are applied correctly

function MapView({ selectedProfile }) {
  const mapContainerRef = useRef(null);
  const [map, setMap] = useState(null);
  const [address, setAddress] = useState({ lng: -74.006, lat: 40.7128 }); // Default location (New York)
  const [error, setError] = useState(""); // For handling location fetch errors

  const fetchLocation = async (addressString) => {
    if (!addressString) {
      setError("No location provided.");
      return;
    }
    
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${addressString}&format=json`
      );
      const data = await response.json();
      if (data && data.length > 0) {
        const { lat, lon } = data[0];
        setAddress({ lng: parseFloat(lon), lat: parseFloat(lat) });
        setError(""); // Reset error on successful location fetch
      } else {
        setError("Location not found!");
        console.error("Location not found!");
      }
    } catch (err) {
      setError("Error fetching location data.");
      console.error("Error fetching location data:", err);
    }
  };

  useEffect(() => {
    const initializeMap = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11", // You can switch to a different style if needed
      center: [address.lng, address.lat],
      zoom: 5, // Default zoom, you can adjust this based on location
    });
    setMap(initializeMap);

    return () => initializeMap.remove(); // Cleanup the map when component unmounts
  }, []);

  useEffect(() => {
    if (selectedProfile) {
      // Fetch new location when selectedProfile changes
      fetchLocation(selectedProfile.location);
    }
  }, [selectedProfile]);

  useEffect(() => {
    if (map && selectedProfile) {
      // Add a marker for the selected profile location
      const marker = new mapboxgl.Marker()
        .setLngLat([address.lng, address.lat])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setText(selectedProfile.name)
        )
        .addTo(map);

      // Fly to the location with a smooth animation
      map.flyTo({
        center: [address.lng, address.lat],
        zoom: 5, // Adjust zoom level based on the location
        essential: true, // Ensure the flyTo animation is not skipped
      });

      // Cleanup the marker when profile changes
      return () => marker.remove();
    }
  }, [map, address, selectedProfile]);

  return (
    <div className="map-view-container">
      {error && <div className="error-message">{error}</div>} {/* Display error message */}
      <div ref={mapContainerRef} className="map-container" /> {/* Map container */}
    </div>
  );
}

export default MapView;
