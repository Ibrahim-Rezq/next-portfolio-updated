import { ImageResponse } from "next/og";

export const alt = "Ibrahim Amin — Next.js & React Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background: "#134E52",
        color: "#FEF8EC",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          fontSize: 26,
          letterSpacing: 6,
          textTransform: "uppercase",
          color: "#C4943F",
          fontWeight: 700,
        }}
      >
        Ibrahim Amin
      </div>
      <div
        style={{
          marginTop: 28,
          fontSize: 76,
          fontWeight: 800,
          lineHeight: 1.05,
          maxWidth: 900,
        }}
      >
        I build web apps that actually work.
      </div>
      <div style={{ marginTop: 30, fontSize: 30, color: "#F7EFDD" }}>
        Next.js &amp; React Developer · based in Egypt
      </div>
      <div
        style={{
          marginTop: 48,
          width: 120,
          height: 6,
          borderRadius: 999,
          background: "#C4943F",
        }}
      />
    </div>,
    { ...size },
  );
}
