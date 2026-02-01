"use client";

import Reveal from "./Reveal";
import StatCounter from "./StatCounter";
import { motion } from "framer-motion";

type Stat = {
  title: string;
  value?: number;
  suffix?: string;
  icon: string;
  note?: string;
};

const stats: Stat[] = [
  {
    icon: "🎓",
    title: "Result in Class 10",
    value: 100,
    suffix: "%",
    note: "Consistent board-focused preparation"
  },
  {
    icon: "🎭",
    title: "Participation in Cultural Programs",
    value: 80,
    suffix: "%",
    note: "Stage confidence & creativity"
  },
  {
    icon: "👩‍🏫",
    title: "Highly Qualified Teachers",
    note: "Dedicated mentors across subjects"
  },
  {
    icon: "📘",
    title: "Student-Centered Teaching",
    note: "Concept clarity + practice"
  },
  {
    icon: "💰",
    title: "Minimum & Affordable Fees",
    note: "Quality education within reach"
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <Reveal>
          <h2 className="sectionTitle">Achievements</h2>
          <p className="sectionSub">
            Highlights that reflect our commitment to excellence, learning, and
            a bright future for every student.
          </p>
        </Reveal>

        <div className="grid">
          {stats.map((s, idx) => (
            <div key={s.title} className="col">
              <Reveal delay={0.05 + idx * 0.04}>
                <motion.div
                  className="card liftGlow statCard"
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 240, damping: 18 }}
                >
                  <div className="top">
                    <div className="icon" aria-hidden="true">
                      {s.icon}
                    </div>

                    <div className="value">
                      {typeof s.value === "number" ? (
                        <span className="num">
                          <StatCounter value={s.value} suffix={s.suffix ?? ""} />
                        </span>
                      ) : (
                        <span className="badge">★</span>
                      )}
                    </div>
                  </div>

                  <div className="title">{s.title}</div>
                  {s.note ? <div className="note">{s.note}</div> : null}

                  <div className="shine" aria-hidden="true" />
                </motion.div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .col {
          grid-column: span 12;
        }
        @media (min-width: 720px) {
          .col {
            grid-column: span 6;
          }
        }
        @media (min-width: 1020px) {
          .col {
            grid-column: span 4;
          }
        }

        .statCard {
          padding: 18px;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.14);
        }

        .statCard::before {
          content: "";
          position: absolute;
          inset: -2px;
          background: radial-gradient(
              800px 240px at 12% 0%,
              rgba(22, 224, 194, 0.18),
              transparent 60%
            ),
            radial-gradient(
              900px 300px at 92% 110%,
              rgba(255, 211, 90, 0.14),
              transparent 60%
            );
          opacity: 0.95;
          pointer-events: none;
        }

        .top {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 12px;
        }

        .icon {
          width: 46px;
          height: 46px;
          border-radius: 16px;
          display: grid;
          place-items: center;
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.25);
          font-size: 22px;
        }

        .value {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          min-width: 72px;
        }

        .num {
          font-weight: 900;
          letter-spacing: -0.02em;
          font-size: 28px;
          color: rgba(255, 255, 255, 0.92);
          text-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
        }

        .badge {
          width: 40px;
          height: 40px;
          border-radius: 999px;
          display: grid;
          place-items: center;
          font-weight: 900;
          color: #061a2d;
          background: linear-gradient(
            90deg,
            rgba(22, 224, 194, 0.95),
            rgba(255, 211, 90, 0.92)
          );
          box-shadow: 0 18px 45px rgba(0, 0, 0, 0.3);
        }

        .title {
          position: relative;
          z-index: 1;
          font-weight: 900;
          letter-spacing: -0.02em;
          font-size: 16px;
          margin: 0 0 6px;
        }

        .note {
          position: relative;
          z-index: 1;
          color: rgba(255, 255, 255, 0.74);
          line-height: 1.6;
        }

        .shine {
          position: absolute;
          inset: -40% -30%;
          background: radial-gradient(
            circle at 30% 30%,
            rgba(255, 255, 255, 0.14),
            transparent 55%
          );
          transform: rotate(12deg);
          opacity: 0.65;
          pointer-events: none;
        }
      `}</style>
    </section>
  );
}
