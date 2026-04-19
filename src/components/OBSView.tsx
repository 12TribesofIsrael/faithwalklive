"use client";

import dynamic from "next/dynamic";
import type { Checkpoint } from "@/lib/checkpoints";

const OBSMap = dynamic(() => import("./OBSMap"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "grid",
        placeItems: "center",
        color: "rgba(255,255,255,0.3)",
        fontFamily: "Inter, system-ui, sans-serif",
        fontSize: 12,
        background: "#0a0a0a",
      }}
    >
      Loading map…
    </div>
  ),
});

export default function OBSView({
  checkpoints,
  bare,
  brand,
  currentDay,
  miles,
  percent,
  isRestDay = false,
}: {
  checkpoints: Checkpoint[];
  bare: boolean;
  brand: boolean;
  currentDay: number;
  miles: number;
  percent: number;
  isRestDay?: boolean;
}) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        background: "#0a0a0a",
        overflow: "hidden",
      }}
    >
      <OBSMap checkpoints={checkpoints} />

      {!bare && (
        <div
          style={{
            position: "absolute",
            bottom: 20,
            left: 20,
            padding: "10px 16px",
            background: "rgba(10,10,10,0.85)",
            border: "1px solid rgba(251,191,36,0.4)",
            borderRadius: 10,
            color: "#fff",
            fontFamily: "Inter, system-ui, sans-serif",
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: 0.5,
            backdropFilter: "blur(8px)",
            zIndex: 1000,
            pointerEvents: "none",
          }}
        >
          <span style={{ color: "#fbbf24" }}>Day {currentDay}</span>
          {isRestDay && (
            <>
              <span style={{ color: "rgba(255,255,255,0.5)", margin: "0 8px" }}>·</span>
              <span style={{ color: "#fbbf24" }}>REST</span>
            </>
          )}
          <span style={{ color: "rgba(255,255,255,0.5)", margin: "0 8px" }}>·</span>
          <span>{miles} mi</span>
          <span style={{ color: "rgba(255,255,255,0.5)", margin: "0 8px" }}>·</span>
          <span style={{ color: "#fbbf24" }}>{percent}%</span>
        </div>
      )}

      {brand && (
        <div
          style={{
            position: "absolute",
            bottom: 20,
            right: 20,
            padding: "6px 12px",
            background: "rgba(10,10,10,0.7)",
            border: "1px solid rgba(251,191,36,0.25)",
            borderRadius: 8,
            color: "#fbbf24",
            fontFamily: "Inter, system-ui, sans-serif",
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: 0.6,
            backdropFilter: "blur(6px)",
            zIndex: 1000,
            pointerEvents: "none",
          }}
        >
          faithwalklive.com
        </div>
      )}
    </div>
  );
}
