import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Faith Walk Live — Follow Minister Zay's 3,000-mile walk from Philadelphia to California";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
            "radial-gradient(ellipse at 30% 20%, #1a1a4a 0%, #0A0A2A 55%, #05051a 100%)",
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
            Faith Walk Live
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              color: "#E8C46B",
              fontSize: 104,
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: -2,
              textShadow: "0 0 40px rgba(232, 196, 107, 0.25)",
            }}
          >
            3,000 miles on faith.
          </div>
          <div
            style={{
              color: "#F5DEB3",
              fontSize: 42,
              lineHeight: 1.2,
              maxWidth: 960,
            }}
          >
            Follow Minister Zay&apos;s walk from Philadelphia to California —
            live map, daily clips, scripture, prayer wall.
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
          <span style={{ color: "#F0E6D2" }}>faithwalklive.com</span>
          <span>Built by AI Bible Gospels</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
