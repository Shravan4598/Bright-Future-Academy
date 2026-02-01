"use client";

import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container centerText">
        <Reveal>
          <h2 className="sectionTitle">About Bright Future Academy</h2>
          <p className="sectionSub">
            Bright Future Academy provides a balanced, child-friendly learning
            experience with a professional academic environment.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            className="card liftGlow"
            style={{
              maxWidth: "100%",
              width: "100%",
              margin: "0 auto",
              padding: "32px 40px",
              textAlign: "left"
            }}
          >
            <ul
              style={{
                margin: 0,
                paddingLeft: 24,
                color: "rgba(255,255,255,.85)",
                lineHeight: 1.9,
                fontSize: "15px"
              }}
            >
              <li style={{ marginBottom: "16px" }}>
                <strong style={{ fontWeight: 700, color: "var(--teal)" }}>
                  Classes:
                </strong>{" "}
                Nursery to 10th Standard
              </li>
              <li style={{ marginBottom: "16px" }}>
                <strong style={{ fontWeight: 700, color: "var(--teal)" }}>
                  Affordable & quality education
                </strong>{" "}
                with strong foundations
              </li>
              <li style={{ marginBottom: "16px" }}>
                Focus on{" "}
                <strong style={{ fontWeight: 700, color: "var(--teal)" }}>
                  discipline
                </strong>
                ,{" "}
                <strong style={{ fontWeight: 700, color: "var(--teal)" }}>
                  academics
                </strong>
                , and{" "}
                <strong style={{ fontWeight: 700, color: "var(--teal)" }}>
                  activities
                </strong>
              </li>
              <li>
                Student-centered approach with supportive mentoring
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
