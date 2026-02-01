"use client";

import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.10)",
        background: "rgba(2,10,18,0.55)",
        backdropFilter: "blur(12px)"
      }}
    >
      <div className="container" style={{ padding: "34px 0" }}>
        <div className="footGrid">
          <div className="brand">
            <div className="title">Bright Future Academy</div>
            <div className="desc">
              Nursery to Class 10 — nurturing values, confidence, and excellence.
            </div>
          </div>

          <div className="links">
            <div className="head">Quick Links</div>
            <a href="#campus">Campus</a>
            <a href="#about">About</a>
            <a href="#faculty">Management</a>
            <a href="#achievements">Achievements</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="social">
            <div className="head">Follow Us</div>
            <div className="icons">
              <a
                className="icon"
                href="https://www.facebook.com/shravankumar.pandey.142"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>

              <a
                className="icon"
                href="https://www.instagram.com/shravan_kumar_pandey11/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                className="icon"
                href="http://www.youtube.com/@shravankumarpandey108"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
            </div>

            <div className="note">
              Optimized for Vercel deployment.
            </div>
          </div>
        </div>

        <div className="bottom">
          <span>
            © {new Date().getFullYear()} Bright Future Academy – All Rights Reserved
          </span>
          <span className="sep">•</span>
          <span></span>
        </div>
      </div>

      <style jsx>{`
        .footGrid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;
        }
        @media (min-width: 900px) {
          .footGrid {
            grid-template-columns: 1.6fr 1fr 1fr;
            align-items: start;
          }
        }

        .title {
          font-weight: 900;
          letter-spacing: -0.02em;
          font-size: 18px;
        }
        .desc {
          margin-top: 8px;
          color: rgba(255, 255, 255, 0.72);
          line-height: 1.6;
          max-width: 520px;
        }

        .head {
          font-weight: 900;
          letter-spacing: -0.02em;
          margin-bottom: 10px;
        }

        .links a {
          display: block;
          padding: 6px 0;
          color: rgba(255, 255, 255, 0.74);
          transition: color 0.2s ease, transform 0.2s ease;
          width: fit-content;
        }
        .links a:hover {
          color: rgba(255, 255, 255, 0.92);
          transform: translateX(2px);
        }

        .icons {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .icon {
          width: 40px;
          height: 40px;
          border-radius: 14px;
          display: grid;
          place-items: center;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: rgba(255, 255, 255, 0.82);
          font-size: 18px;
          transition: transform 0.25s ease, box-shadow 0.25s ease,
            background 0.25s ease;
          box-shadow: 0 14px 30px rgba(0, 0, 0, 0.25);
          user-select: none;
        }
        .icon:hover {
          transform: translateY(-3px);
          background: rgba(255, 255, 255, 0.1);
          box-shadow: 0 18px 42px rgba(0, 0, 0, 0.35);
        }

        .note {
          margin-top: 10px;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.6;
        }

        .bottom {
          margin-top: 18px;
          padding-top: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          color: rgba(255, 255, 255, 0.66);
        }
        .sep {
          opacity: 0.6;
        }
      `}</style>
    </footer>
  );
}
