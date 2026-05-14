import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Faith Walk Philly — Philly to California 3,000-Mile Faith Walk. The Philadelphia roots of Faith Walk Live.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function PhillyOG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(ellipse at 20% 25%, #2a1a3a 0%, #0A0A2A 55%, #05051a 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#E8C46B",
              boxShadow: "0 0 24px 4px #E8C46B",
            }}
          />
          <span
            style={{
              color: "#D4A04A",
              fontSize: 26,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            Faith Walk Philly · Faith Walk Live
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              color: "#E8C46B",
              fontSize: 112,
              fontWeight: 700,
              lineHeight: 1.0,
              letterSpacing: -2,
              textShadow: "0 0 40px rgba(232, 196, 107, 0.3)",
            }}
          >
            Faith Walk Philly.
          </div>
          <div
            style={{
              color: "#F5DEB3",
              fontSize: 44,
              lineHeight: 1.2,
              maxWidth: 1000,
            }}
          >
            Philly to California — 3,000 miles on faith. The Philadelphia
            roots of Faith Walk Live.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            color: "#8B5E3C",
            fontSize: 24,
          }}
        >
          <span style={{ color: "#F0E6D2" }}>faithwalklive.com/philly</span>
          <span>Built by AI Bible Gospels</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
