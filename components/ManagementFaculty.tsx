"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { motion } from "framer-motion";

type Person = {
  name: string;
  role: string;
  photo: string;
};

const people: Person[] = [
  { name: "Aditya Pandey", role: "Director", photo: "/images/director.png" },
  { name: "Ganga Devi", role: "Principal", photo: "/images/principal.jpg" },
  { name: "Prince", role: "Faculty", photo: "/images/faculty-1.jpg" },
  { name: "Prem", role: "Faculty", photo: "/images/faculty-2.jpg" }
];

export default function ManagementFaculty() {
  return (
    <section id="faculty" className="section">
      <div className="container centerText">
        <Reveal>
          <h2 className="sectionTitle">Management & Faculty</h2>
          <p className="sectionSub">
            Experienced leadership and caring educators dedicated to each child's growth.
          </p>
        </Reveal>

        <div className="grid">
          {people.map((p, idx) => (
            <Reveal key={p.name} delay={0.08 * idx}>
              <motion.div
                className="card liftGlow profile"
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 240, damping: 18 }}
              >
                <div className="avatar">
                  <span className="ring" />
                  <div className="img">
                    <Image
                      src={p.photo}
                      alt={`${p.name} - ${p.role}`}
                      fill
                      sizes="140px"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>

                <div className="meta">
                  <div className="name">{p.name}</div>
                  <div className="role">{p.role}</div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>

      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
          max-width: 700px;
          margin: 0 auto;
          justify-items: center;
        }

        .profile {
          width: 100%;
          max-width: 300px;
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 18px;
          position: relative;
          overflow: hidden;
        }

        .profile::before {
          content: "";
          position: absolute;
          inset: -2px;
          background:
            radial-gradient(600px 220px at 10% 0%, rgba(22, 224, 194, 0.18), transparent 60%),
            radial-gradient(600px 220px at 90% 100%, rgba(255, 211, 90, 0.16), transparent 60%);
          opacity: 0.85;
          pointer-events: none;
        }

        .avatar {
          width: 120px;
          height: 120px;
          position: relative;
        }

        .ring {
          position: absolute;
          inset: -4px;
          border-radius: 999px;
          background: linear-gradient(
            135deg,
            rgba(22, 224, 194, 0.95),
            rgba(255, 211, 90, 0.9),
            rgba(80, 240, 137, 0.85)
          );
        }

        .img {
          position: absolute;
          inset: 3px;
          border-radius: 999px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.18);
          background: rgba(255, 255, 255, 0.05);
        }

        .meta {
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 6px;
          z-index: 1;
        }

        .name {
          font-weight: 800;
          letter-spacing: -0.02em;
          font-size: 16px;
        }

        .role {
          font-size: 14px;
          color: var(--muted);
        }

        /* Responsive: Stack on smaller screens */
        @media (max-width: 640px) {
          .grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }
      `}</style>
    </section>
  );
}
