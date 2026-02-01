"use client";

export default function Credits() {
  return (
    <section
      style={{
        padding: "22px 0",
        borderTop: "1px solid rgba(255,255,255,0.12)",
        background: "rgba(0,0,0,0.18)"
      }}
    >
      <div
        className="container centerText"
        style={{
          fontSize: 14,
          color: "rgba(255,255,255,0.7)",
          lineHeight: 1.6
        }}
      >
        © {new Date().getFullYear()}{" "}
        <strong style={{ color: "rgba(255,255,255,0.9)" }}>
          Bright Future Academy
        </strong>
        . All Rights Reserved.
        <br />
        <span style={{ fontSize: 13, color: "rgba(255,255,255,0.55)" }}>
          Designed & Developed with Shravan Kumar Pandey
        </span>
      </div>
    </section>
  );
}
