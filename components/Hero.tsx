"use client";

import { motion } from "framer-motion";
import FloatingShapes from "./FloatingShapes";
import Particles from "./Particles";

export default function Hero() {
  return (
    <section id="top" style={{ position: "relative", overflow: "hidden" }}>
      <div className="heroBg" />
      <Particles />
      <FloatingShapes />

      <div className="container" style={{ padding: "92px 0 74px" }}>
        <motion.h1>
          Bright Future Academy
        </motion.h1>

        <motion.p>
          “Nurturing Young Minds for a Brighter Tomorrow”
        </motion.p>

        <motion.div className="btnRow">
          <a className="btn btnPrimary" href="#contact">
            Admissions Open
          </a>

          <a className="btn" href="#contact">
            Contact Us
          </a>

          <a
            className="btn"
            href="https://wa.me/918102223747?text=Hello%20I%20want%20admission%20details"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Chat
          </a>
        </motion.div>
      </div>
    </section>
  );
}
