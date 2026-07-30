import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Minister Zay completes the 3,000-mile Faith Walk from Philadelphia to California on Day 124, July 27, 2026.";
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
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              fontSize: "20px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#d4af37",
            }}
          >
            Faith Walk Live · Jul 27, 2026 · Day 124
          </div>
        </div>
        <div
          style={{
            fontSize: "68px",
            fontWeight: 700,
            lineHeight: 1.1,
            color: "#fff8e1",
            textAlign: "center",
            maxWidth: "1000px",
          }}
        >
          He made it. 3,000 miles.
        </div>
        <div
          style={{
            marginTop: "32px",
            fontSize: "28px",
            color: "#e6c870",
            textAlign: "center",
            maxWidth: "900px",
            lineHeight: 1.4,
          }}
        >
          Philadelphia to California on foot · 124 days · Walk complete
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
          faithwalklive.com / updates / walk-complete
        </div>
      </div>
    ),
    { ...size }
  );
}
