"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(12px)",
        background: "rgba(2,10,18,0.55)",
        borderBottom: "1px solid rgba(255,255,255,0.10)"
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 0",
          gap: 16
        }}
      >
        <motion.a href="#top" style={{ fontWeight: 900 }}>
          Bright Future Academy
        </motion.a>

        <nav style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <a href="#campus">Campus</a>
          <a href="#about">About</a>
          <a href="#faculty">Management</a>
          <a href="#achievements">Achievements</a>
          <a href="#why">Why Choose</a>
          <a href="#location">Location</a>
          <a href="#contact">Contact</a>

          <a
            href="https://wa.me/918102223747?text=Hello%20I%20want%20school%20information"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btnPrimary"
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
