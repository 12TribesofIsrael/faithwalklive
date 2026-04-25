"use client";

import { useEffect, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Polyline,
  Popup,
  Marker,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { Checkpoint } from "@/lib/checkpoints";
import { clipsFor } from "@/lib/checkpoints";

function ClipLinks({ c, label }: { c: Checkpoint; label: string }) {
  const arr = clipsFor(c);
  if (arr.length === 0) return null;
  if (arr.length === 1) {
    return (
      <a
        href={arr[0]}
        target="_blank"
        rel="noopener noreferrer"
        className="text-amber-600 hover:underline"
      >
        {label}
      </a>
    );
  }
  return (
    <div>
      {c.clipsTitle && (
        <p className="text-[10px] uppercase tracking-wider text-amber-600 font-semibold mt-1">
          {c.clipsTitle}
        </p>
      )}
      <div className="mt-1 flex flex-wrap gap-x-2 gap-y-0">
        {arr.map((url, i) => (
          <a
            key={url}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-600 hover:underline"
          >
            ▶ Clip {i + 1}
          </a>
        ))}
      </div>
    </div>
  );
}

/* ── pulsing beacon CSS (injected once) ── */
const PULSE_CSS = `
@keyframes pulse-ring {
  0% { transform: scale(0.5); opacity: 1; }
  100% { transform: scale(2.5); opacity: 0; }
}
.pulse-marker {
  position: relative;
  width: 20px;
  height: 20px;
}
.pulse-marker::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: #fbbf24;
  animation: pulse-ring 1.8s ease-out infinite;
}
.pulse-marker::after {
  content: '';
  position: absolute;
  inset: 4px;
  border-radius: 50%;
  background: #fbbf24;
  border: 2px solid #fff;
}
.start-marker {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #22c55e;
  border: 3px solid #fff;
  box-shadow: 0 0 8px rgba(34,197,94,0.6);
}
`;

function injectStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById("map-pulse-css")) return;
  const style = document.createElement("style");
  style.id = "map-pulse-css";
  style.textContent = PULSE_CSS;
  document.head.appendChild(style);
}

/* ── custom icons ── */
const pulseIcon = L.divIcon({
  className: "",
  html: '<div class="pulse-marker"></div>',
  iconSize: [20, 20],
  iconAnchor: [10, 10],
});

const startIcon = L.divIcon({
  className: "",
  html: '<div class="start-marker"></div>',
  iconSize: [16, 16],
  iconAnchor: [8, 8],
});

/* ── fit bounds helper ── */
function FitBounds({ positions }: { positions: [number, number][] }) {
  const map = useMap();
  const fitted = useRef(false);
  useEffect(() => {
    if (fitted.current || positions.length < 2) return;
    const bounds = L.latLngBounds(positions.map(([a, b]) => [a, b]));
    map.fitBounds(bounds, { padding: [40, 40] });
    fitted.current = true;
  }, [map, positions]);
  return null;
}

/* ── fly to active checkpoint ── */
function FlyToDay({
  checkpoints,
  activeDay,
}: {
  checkpoints: Checkpoint[];
  activeDay: number | null | undefined;
}) {
  const map = useMap();
  useEffect(() => {
    if (!activeDay) return;
    const cp = checkpoints.find((c) => c.day === activeDay);
    if (!cp) return;
    map.flyTo([cp.lat, cp.lng], 11, { duration: 1 });
  }, [map, activeDay, checkpoints]);
  return null;
}

/* ── main component ── */
export default function TrackerMap({
  checkpoints,
  activeDay,
}: {
  checkpoints: Checkpoint[];
  activeDay?: number | null;
}) {
  const walking = checkpoints.filter((c) => !c.restOnly);
  const line: [number, number][] = walking.map((c) => [c.lat, c.lng]);
  const first = walking[0];
  const last = walking[walking.length - 1];

  // Mirror the card NOW logic: if an archived rest day sits ahead of the
  // latest walking checkpoint, that's the most-recent confirmed event and
  // should carry the beacon's NOW label. Coords usually match the walking
  // day (rest at same city), but use the entry's own coords if present.
  const lastEntry = checkpoints[checkpoints.length - 1];
  const now =
    lastEntry?.restOnly && last && lastEntry.day > last.day
      ? lastEntry
      : last;

  const center: [number, number] = now
    ? [now.lat ?? last?.lat, now.lng ?? last?.lng]
    : [39.9526, -75.1652];

  useEffect(() => {
    injectStyles();
  }, []);

  return (
    <MapContainer
      center={center}
      zoom={7}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%" }}
      className="bg-neutral-900"
    >
      <TileLayer
        attribution='&copy; <a href="https://carto.com/">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />

      <FitBounds positions={line} />
      <FlyToDay checkpoints={checkpoints} activeDay={activeDay} />

      {/* Route line */}
      <Polyline
        positions={line}
        pathOptions={{ color: "#fbbf24", weight: 3, opacity: 0.6 }}
      />

      {/* Start marker */}
      {first && (
        <Marker position={[first.lat, first.lng]} icon={startIcon}>
          <Popup>
            <div className="text-sm">
              <p className="font-semibold">Start — {first.location}</p>
              <p className="text-neutral-600">{first.date} · Mile 0</p>
            </div>
          </Popup>
        </Marker>
      )}

      {/* Checkpoint dots (skip first + last — they get special markers) */}
      {walking.slice(1, -1).map((c) => (
        <CircleMarker
          key={c.day}
          center={[c.lat, c.lng]}
          radius={activeDay === c.day ? 8 : 5}
          pathOptions={{
            color: activeDay === c.day ? "#fbbf24" : "#92400e",
            fillColor: activeDay === c.day ? "#fbbf24" : "#d97706",
            fillOpacity: activeDay === c.day ? 1 : 0.7,
            weight: activeDay === c.day ? 3 : 1.5,
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
              <ClipLinks c={c} label="Watch clip →" />
            </div>
          </Popup>
        </CircleMarker>
      ))}

      {/* Current location — pulsing beacon */}
      {now && now !== first && (
        <Marker
          position={[now.lat ?? last.lat, now.lng ?? last.lng]}
          icon={pulseIcon}
        >
          <Popup>
            <div className="text-sm">
              <p className="font-bold text-amber-600">
                NOW — Day {now.day}
                {now.restOnly ? " · REST" : ""}
              </p>
              <p className="font-semibold">{now.location}</p>
              <p className="text-neutral-600">
                {now.date}
                {now.restOnly ? " · REST DAY 💤" : ` · ${now.miles} mi`}
              </p>
              <ClipLinks c={now} label="Watch clip →" />

            </div>
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
}
