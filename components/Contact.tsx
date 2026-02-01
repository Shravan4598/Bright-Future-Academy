"use client";

import Reveal from "./Reveal";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    className: "",
    message: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `Hello, I want enquiry for Bright Future Academy:

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Interested Class: ${form.className}
Message: ${form.message}`;

    const url =
      "https://wa.me/918102223747?text=" + encodeURIComponent(text);

    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="section">
      <div className="container centerText">
        <Reveal>
          <h2 className="sectionTitle">Contact Us</h2>
          <p className="sectionSub">
            Reach out for admissions and school information. We'll be happy to help.
          </p>
        </Reveal>

        <div className="contactContainer" style={{ marginTop: "48px" }}>
          {/* ================= LEFT CARD ================= */}
          <Reveal delay={0.05}>
            <motion.div
              className="card liftGlow contactCard"
              whileHover={{ y: -6 }}
            >
              <div className="contactBox">
                <div className="contactIcon">📞</div>
                <div className="contactContent">
                  <div className="contactLabel">Phone</div>
                  <div className="contactValue">8102223747</div>
                </div>
              </div>

              <div className="contactBox">
                <div className="contactIcon">📧</div>
                <div className="contactContent">
                  <div className="contactLabel">Email</div>
                  <div className="contactValue">
                    shravankumarpandeyu825412@gmail.com
                  </div>
                </div>
              </div>

              <div className="admissionsBox">
                <strong>✨ Admissions Open:</strong> Nursery to Class 10
              </div>
            </motion.div>
          </Reveal>

          {/* ================= ENQUIRY FORM ================= */}
          <Reveal delay={0.1}>
            <motion.div
              className="card liftGlow enquiryCard"
              whileHover={{ y: -6 }}
            >
              <h3 style={{ marginBottom: 8 }}>Quick Enquiry Form</h3>

              <p
                style={{
                  marginBottom: 24,
                  color: "rgba(255,255,255,.75)",
                  fontSize: 13
                }}
              >
                Send us your details and we'll get back to you shortly.
              </p>

              <form className="enquiryForm" onSubmit={handleSubmit}>
                {/* Full Name */}
                <div className="formGroup">
                  <label>Full Name</label>
                  <input
                    name="name"
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Phone + Email Row */}
                <div className="formRow">
                  <div className="formGroup">
                    <label>Phone Number</label>
                    <input
                      name="phone"
                      placeholder="Your phone number"
                      value={form.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="formGroup">
                    <label>Email Address</label>
                    <input
                      name="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Class */}
                <div className="formGroup">
                  <label>Interested Class</label>
                  <select
                    name="className"
                    value={form.className}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a class</option>
                    <option>Nursery</option>
                    <option>KG</option>
                    <option>Class 1-5</option>
                    <option>Class 6-8</option>
                    <option>Class 9-10</option>
                  </select>
                </div>

                {/* Message */}
                <div className="formGroup">
                  <label>Message (Optional)</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us more about your enquiry..."
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="btn btnPrimary formSubmitBtn">
                  Send Enquiry (WhatsApp)
                </button>
              </form>

              <div className="ctaBox">
                <strong>💡 Tip:</strong> Connect via WhatsApp for instant response.
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>

      <style jsx>{`
        .contactContainer {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .contactCard,
        .enquiryCard {
          padding: 40px;
          width: 100%;
          box-sizing: border-box;
        }

        .contactBox {
          display: flex;
          gap: 18px;
          padding: 22px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,.12);
          margin-bottom: 16px;
        }

        .contactIcon {
          font-size: 28px;
        }

        .contactLabel {
          font-size: 12px;
          font-weight: 800;
        }

        .contactValue {
          font-size: 15px;
        }

        .admissionsBox {
          padding: 18px;
          border: 1px dashed rgba(22,224,194,.4);
          border-radius: 12px;
        }

        .enquiryForm {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .formGroup {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .formRow {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        @media (max-width: 768px) {
          .formRow {
            grid-template-columns: 1fr;
          }
        }

        input, select, textarea {
          padding: 12px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,.15);
          background: rgba(255,255,255,.06);
          color: white;
        }

        .formSubmitBtn {
          width: 100%;
          margin-top: 8px;
        }

        .ctaBox {
          margin-top: 14px;
          font-size: 13px;
          opacity: .8;
        }
      `}</style>
    </section>
  );
}
