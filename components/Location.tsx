"use client";

import Reveal from "./Reveal";
import { motion } from "framer-motion";

export default function Location() {
  // ✅ Exact Google Maps EMBED (iframe-compatible)
  const embedMapUrl =
    "https://www.google.com/maps?q=24.44579322314163,85.959381&z=17&output=embed";

  // ✅ Your shared Google Maps link (for navigation)
  const mapsLink = "https://share.google/QG2jY87uvBBElJrJF";

  return (
    <section id="location" className="section">
      <div className="container">
        <Reveal>
          <h2 className="sectionTitle">Location</h2>
          <p className="sectionSub">
            Visit Bright Future Academy — Doranda–Dhanwar Road, Sirmandih, Jharkhand 825412
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <motion.div
            className="card mapWrap liftGlow"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="borderGlow" aria-hidden="true" />

            <div className="frame">
              <iframe
                title="Bright Future Academy Location Map"
                src={embedMapUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div className="fallback">
              <div className="hint">
                Get turn-by-turn navigation using Google Maps
              </div>
              <a
                className="btn btnPrimary"
                href={mapsLink}
                target="_blank"
                rel="noreferrer"
              >
                Open in Google Maps
              </a>
            </div>
          </motion.div>
        </Reveal>
      </div>

      <style jsx>{`
        .mapWrap {
          position: relative;
          overflow: hidden;
          padding: 14px;
          border: 1px solid rgba(255, 255, 255, 0.16);
        }

        .borderGlow {
          position: absolute;
          inset: -2px;
          background: radial-gradient(
              700px 260px at 20% 0%,
              rgba(22, 224, 194, 0.18),
              transparent 60%
            ),
            radial-gradient(
              700px 260px at 80% 100%,
              rgba(255, 211, 90, 0.14),
              transparent 60%
            );
          pointer-events: none;
          opacity: 0.9;
        }

        .frame {
          position: relative;
          z-index: 1;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(0, 0, 0, 0.2);
          height: min(520px, 70vh);
        }

        iframe {
          width: 100%;
          height: 100%;
          border: 0;
          display: block;
        }

        .fallback {
          position: relative;
          z-index: 1;
          margin-top: 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
        }

        .hint {
          color: rgba(255, 255, 255, 0.78);
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
}
