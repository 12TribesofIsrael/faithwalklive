import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at 50% 40%, #1a1a4a 0%, #0A0A2A 70%, #05051a 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: 999,
            background: "#E8C46B",
            boxShadow: "0 0 32px 8px rgba(232, 196, 107, 0.55)",
            marginBottom: 14,
          }}
        />
        <div
          style={{
            color: "#E8C46B",
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          Faith Walk
        </div>
      </div>
    ),
    { ...size }
  );
}
