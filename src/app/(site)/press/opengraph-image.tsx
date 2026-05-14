import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Press Kit — Faith Walk Philly | Faith Walk Live. Press assets, fast facts, and contact for the 3,000-mile Philly-to-California Faith Walk.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background:
            "linear-gradient(135deg, #0b1020 0%, #14213d 50%, #1a1a2e 100%)",
          padding: "80px",
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto",
          color: "#f3e7c0",
        }}
      >
        <div
          style={{
            fontSize: "20px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#d4af37",
            marginBottom: "32px",
          }}
        >
          Faith Walk Philly · Faith Walk Live · Press Kit
        </div>
        <div
          style={{
            fontSize: "64px",
            fontWeight: 700,
            lineHeight: 1.1,
            color: "#fff8e1",
            textAlign: "center",
            maxWidth: "1000px",
          }}
        >
          PRESS KIT — FAITH WALK PHILLY
        </div>
        <div
          style={{
            marginTop: "20px",
            fontSize: "28px",
            color: "#f3e7c0",
            textAlign: "center",
            maxWidth: "950px",
            lineHeight: 1.3,
          }}
        >
          Philly to California · 3,000 miles on faith
        </div>
        <div
          style={{
            marginTop: "20px",
            fontSize: "22px",
            color: "#e6c870",
            textAlign: "center",
            maxWidth: "950px",
            lineHeight: 1.4,
          }}
        >
          Fast facts · Boilerplate · Bios · Assets · Coverage · Press contact
        </div>
        <div
          style={{
            marginTop: "auto",
            fontSize: "20px",
            color: "#a89968",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          faithwalklive.com / press
        </div>
      </div>
    ),
    { ...size }
  );
}
