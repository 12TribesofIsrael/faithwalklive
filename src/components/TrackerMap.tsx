"use client";

import { MapContainer, TileLayer, CircleMarker, Polyline, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { Checkpoint } from "@/lib/checkpoints";

export default function TrackerMap({ checkpoints }: { checkpoints: Checkpoint[] }) {
  const walking = checkpoints.filter((c) => !c.restOnly);
  const line: [number, number][] = walking.map((c) => [c.lat, c.lng]);
  const last = walking[walking.length - 1];
  const center: [number, number] = last ? [last.lat, last.lng] : [39.9526, -75.1652];

  return (
    <MapContainer
      center={center}
      zoom={7}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Polyline positions={line} pathOptions={{ color: "#fbbf24", weight: 4 }} />
      {walking.map((c) => (
        <CircleMarker
          key={c.day}
          center={[c.lat, c.lng]}
          radius={c.day === last?.day ? 10 : 6}
          pathOptions={{
            color: c.day === last?.day ? "#fbbf24" : "#f59e0b",
            fillColor: c.day === last?.day ? "#fbbf24" : "#92400e",
            fillOpacity: 0.9,
          }}
        >
          <Popup>
            <div className="text-sm">
              <p className="font-semibold">
                Day {c.day} — {c.location}
              </p>
              <p className="text-neutral-600">
                {c.date} · {c.miles} mi
                {c.estimatedMiles ? " (est)" : ""}
              </p>
              {c.clip && (
                <a
                  href={c.clip}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-600 hover:underline"
                >
                  Watch clip →
                </a>
              )}
            </div>
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}
