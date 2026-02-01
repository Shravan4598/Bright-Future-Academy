"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function Campus() {
  return (
    <section id="campus" className="section">
      <div className="container">
        <Reveal>
          <h2 className="sectionTitle">Our School Campus</h2>
          <p className="sectionSub">
            A safe, modern, and inspiring learning environment for every child.
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <motion.div
            className="card liftGlow campusWrap"
            initial={{ scale: 0.98, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="img">
              <Image
                src="/images/campus.jpg"
                alt="Bright Future Academy campus"
                fill
                priority={false}
                sizes="(max-width: 900px) 100vw, 1120px"
                style={{ objectFit: "cover" }}
              />
              <div className="overlay" />
              <motion.div
                className="zoom"
                aria-hidden="true"
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            <div className="caption">
              <strong>Bright Future Academy Campus</strong>
              <span>“A safe, modern, and inspiring learning environment for every child.”</span>
            </div>
          </motion.div>
        </Reveal>
      </div>

      <style jsx>{`
        .campusWrap{ overflow:hidden; }
        .img{
          position:relative;
          height: clamp(220px, 38vw, 420px);
          border-radius: var(--radius);
          overflow:hidden;
        }
        .overlay{
          position:absolute; inset:0;
          background: linear-gradient(90deg, rgba(6,26,45,.45), rgba(22,224,194,.10), rgba(255,211,90,.18));
        }
        .zoom{
          position:absolute; inset:-6%;
          background: radial-gradient(circle at 70% 30%, rgba(255,211,90,.14), transparent 55%),
                      radial-gradient(circle at 25% 70%, rgba(22,224,194,.12), transparent 55%);
          pointer-events:none;
        }
        .caption{
          padding: 16px 16px 18px;
          display:flex;
          flex-direction:column;
          gap:6px;
          color: rgba(255,255,255,.86);
        }
        .caption span{ color: var(--muted); line-height:1.6; }
      `}</style>
    </section>
  );
}
