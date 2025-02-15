// npm install react-leaflet leaflet


"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Button } from "@/components/ui/button"; // ShadCN button
import L from "leaflet"; // Import Leaflet
import { Card } from "./ui/card";

// Fix: Define a custom marker icon using the local image
const customIcon = new L.Icon({
    iconUrl: "/location.png", // Path to the image in the public folder
    iconSize: [20, 20], // Size of the icon (adjust as needed)
    iconAnchor: [16, 32], // Anchor the icon at the bottom center of the marker
    popupAnchor: [1, -34], // Position of the popup relative to icon
});

// Your shop's latitude & longitude
const shopLocation = { lat: 11.572101803733375, lng: 77.6398669070622 };

// Function to open Google Maps
export const openGoogleMaps = () => {
    window.open(`https://www.google.com/maps?q=${shopLocation.lat},${shopLocation.lng}`, "_blank");
};

const ShopMap = () => {

    return (
        <div className="flex flex-col items-center gap-4 py-10 max-w-xl mx-auto">
            {/* Map Container */}
            <MapContainer center={[shopLocation.lat, shopLocation.lng]} zoom={15} style={{ height: "400px", width: "100%" }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[shopLocation.lat, shopLocation.lng]} icon={customIcon}>
                    <Popup>
                        📍 My Shop Location <br />
                        <Button onClick={openGoogleMaps} className="mt-2">Get Directions</Button>
                    </Popup>
                </Marker>
            </MapContainer>

            {/* Separate button to open Google Maps */}
            <Button onClick={openGoogleMaps} variant="outline">
                Open in Google Maps
            </Button>
        </div>
    );
};

export default ShopMap;