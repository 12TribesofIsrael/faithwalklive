"use client";

import { useEffect, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  Polyline,
  Marker,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { Checkpoint } from "@/lib/checkpoints";

const PULSE_CSS = `
@keyframes pulse-ring {
  0% { transform: scale(0.5); opacity: 1; }
  100% { transform: scale(2.5); opacity: 0; }
}
.obs-pulse {
  position: relative;
  width: 24px;
  height: 24px;
}
.obs-pulse::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: #fbbf24;
  animation: pulse-ring 1.8s ease-out infinite;
}
.obs-pulse::after {
  content: '';
  position: absolute;
  inset: 5px;
  border-radius: 50%;
  background: #fbbf24;
  border: 2px solid #fff;
  box-shadow: 0 0 12px rgba(251,191,36,0.8);
}
.obs-start {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #22c55e;
  border: 3px solid #fff;
  box-shadow: 0 0 10px rgba(34,197,94,0.7);
}
.leaflet-container {
  background: #0a0a0a !important;
}
`;

function injectStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById("obs-map-css")) return;
  const style = document.createElement("style");
  style.id = "obs-map-css";
  style.textContent = PULSE_CSS;
  document.head.appendChild(style);
}

const pulseIcon = L.divIcon({
  className: "",
  html: '<div class="obs-pulse"></div>',
  iconSize: [24, 24],
  iconAnchor: [12, 12],
});

const startIcon = L.divIcon({
  className: "",
  html: '<div class="obs-start"></div>',
  iconSize: [18, 18],
  iconAnchor: [9, 9],
});

function FitBounds({ positions }: { positions: [number, number][] }) {
  const map = useMap();
  const fitted = useRef(false);
  useEffect(() => {
    if (fitted.current || positions.length < 2) return;
    const bounds = L.latLngBounds(positions.map(([a, b]) => [a, b]));
    map.fitBounds(bounds, { padding: [60, 60] });
    fitted.current = true;
  }, [map, positions]);
  return null;
}

export default function OBSMap({ checkpoints }: { checkpoints: Checkpoint[] }) {
  const walking = checkpoints.filter((c) => !c.restOnly);
  const line: [number, number][] = walking.map((c) => [c.lat, c.lng]);
  const first = walking[0];
  const last = walking[walking.length - 1];
  const center: [number, number] = last
    ? [last.lat, last.lng]
    : [39.9526, -75.1652];

  useEffect(() => {
    injectStyles();
  }, []);

  return (
    <MapContainer
      center={center}
      zoom={7}
      scrollWheelZoom={false}
      zoomControl={false}
      attributionControl={false}
      dragging={false}
      doubleClickZoom={false}
      touchZoom={false}
      keyboard={false}
      style={{ height: "100vh", width: "100vw" }}
    >
      <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />

      <FitBounds positions={line} />

      <Polyline
        positions={line}
        pathOptions={{
          color: "#fbbf24",
          weight: 4,
          opacity: 0.9,
        }}
      />

      {first && <Marker position={[first.lat, first.lng]} icon={startIcon} />}

      {last && last !== first && (
        <Marker position={[last.lat, last.lng]} icon={pulseIcon} />
      )}
    </MapContainer>
  );
}
