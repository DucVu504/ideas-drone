"use client";
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect, useState } from 'react';

// Dynamic import MapContainer and other Leaflet components
const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), { ssr: false });

// Custom red icon for markers
const redIcon = new L.Icon({
  iconUrl: '/images/common/location.png',
  iconRetinaUrl: '/images/common/location.png',
  iconSize: [40, 44], // Icon size
  iconAnchor: [12, 41], // Position of the icon anchor
  popupAnchor: [1, -34], // Position of the popup relative to the icon
  shadowSize: [41, 41] // Shadow size
});

const MapProjects = ({ projects }) => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const geocodeProjects = async () => {
      const geocodedLocations = await Promise.all(
        projects.map(async (project) => {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(project.address)}`
          );
          const data = await response.json();
          return {
            ...project,
            lat: data[0]?.lat,
            lon: data[0]?.lon
          };
        })
      );
      setLocations(geocodedLocations);
    };

    geocodeProjects();
  }, [projects]);

  return (
    <MapContainer
      center={[14.0583, 108.2772]} // Default center to Vietnam
      zoom={5} // Default zoom level for Vietnam
      style={{ height: '100%', width: '100%', borderRadius: '10px' }}
      whenCreated={(map) => {
        if (locations.length > 0) {
          const bounds = L.latLngBounds(locations.map(loc => [loc.lat, loc.lon]));
          map.fitBounds(bounds);
        }
      }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((location, index) => (
        <Marker
          key={index}
          position={[location.lat, location.lon]}
          icon={redIcon}
        >
          <Popup>{location.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapProjects;
