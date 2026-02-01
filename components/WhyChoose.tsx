"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

type Reason = {
  title: string;
  desc: string;
  icon: string;
};

const reasons: Reason[] = [
  {
    icon: "👩‍🏫",
    title: "Well-qualified & Caring Teachers",
    desc: "Supportive mentors who guide students with patience, discipline, and strong subject knowledge."
  },
  {
    icon: "🎯",
    title: "Individual Student Focus",
    desc: "Attention to each child’s strengths and learning pace for better confidence and results."
  },
  {
    icon: "📚",
    title: "Strong Academics",
    desc: "Concept clarity, regular practice, and structured preparation from Nursery to Class 10."
  },
  {
    icon: "🎭",
    title: "Cultural & Extracurricular Activities",
    desc: "Activities that develop creativity, leadership, teamwork, and stage confidence."
  },
  {
    icon: "🛡️",
    title: "Safe Environment",
    desc: "A clean, secure campus with a positive culture that supports learning and growth."
  }
];

export default function WhyChoose() {
  return (
    <section id="why" className="section">
      <div className="container centerText">
        <Reveal>
          <h2 className="sectionTitle">Why Choose Bright Future Academy</h2>
          <p className="sectionSub">
            A modern, child-friendly school environment with a strong academic
            foundation and holistic development.
          </p>
        </Reveal>

        <div className="grid">
          {reasons.map((r, idx) => (
            <Reveal key={r.title} delay={0.06 * idx}>
              <motion.div
                className="card liftGlow reasonCard"
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
              >
                <div className="icon" aria-hidden="true">
                  {r.icon}
                </div>

                <div className="title">{r.title}</div>
                <div className="desc">{r.desc}</div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>

      <style jsx>{`
        .grid {
          justify-items: center;
        }

        .reasonCard {
          width: 100%;
          max-width: 320px;
          padding: 22px 20px;
          min-height: 220px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .reasonCard::before {
          content: "";
          position: absolute;
          inset: -2px;
          background:
            radial-gradient(600px 240px at 20% 0%, rgba(22,224,194,.18), transparent 60%),
            radial-gradient(600px 260px at 90% 100%, rgba(255,211,90,.14), transparent 60%);
          opacity: .9;
          pointer-events: none;
        }

        .icon {
          width: 56px;
          height: 56px;
          border-radius: 18px;
          display: grid;
          place-items: center;
          font-size: 26px;
          margin-bottom: 14px;
          background: rgba(255,255,255,.08);
          border: 1px solid rgba(255,255,255,.14);
          box-shadow: 0 18px 45px rgba(0,0,0,.25);
          z-index: 1;
        }

        .title {
          font-weight: 800;
          font-size: 16px;
          letter-spacing: -0.02em;
          margin-bottom: 8px;
          z-index: 1;
        }

        .desc {
          font-size: 14px;
          line-height: 1.6;
          color: rgba(255,255,255,.75);
          z-index: 1;
        }
      `}</style>
    </section>
  );
}
