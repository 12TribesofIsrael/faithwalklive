import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Faith Walk adds an RV for rolling support — Minister Zay's 3,000-mile walk continues with mobile support.";
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
            Faith Walk Live · May 8, 2026
          </div>
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
          RV joins the Faith Walk for rolling support.
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
          Mobile support · Indianapolis · Philly to Cali continues
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
          faithwalklive.com / updates / rv-rolling-support
        </div>
      </div>
    ),
    { ...size }
  );
}
