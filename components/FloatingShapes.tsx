"use client";

import { useEffect } from "react";

export default function FloatingShapes() {
  useEffect(() => {
    const onScroll = () => {
      document.documentElement.style.setProperty("--scrollY", String(window.scrollY || 0));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div aria-hidden="true" className="shapes">
      <span className="shape s1" />
      <span className="shape s2" />
      <span className="shape s3" />
      <span className="shape s4" />
      <span className="shape s5" />
      <span className="shape wave" />
      <style jsx>{`
        .shapes{
          position:absolute; inset:0; pointer-events:none; overflow:hidden;
        }
        .shape{
          position:absolute;
          filter: blur(.2px);
          opacity: .85;
          transform: translate3d(0,0,0);
          will-change: transform;
          border: 1px solid rgba(255,255,255,.14);
          box-shadow: 0 30px 90px rgba(0,0,0,.25);
        }
        .s1{
          width: 220px; height: 220px; border-radius: 999px;
          left: -70px; top: 40px;
          background: radial-gradient(circle at 30% 30%, rgba(22,224,194,.55), rgba(22,224,194,.05));
          animation: float1 10s ease-in-out infinite;
          transform: translateY(calc((var(--scrollY, 0) * 0.06) * -1px));
        }
        .s2{
          width: 180px; height: 180px; border-radius: 32px;
          right: -60px; top: 120px;
          background: radial-gradient(circle at 30% 30%, rgba(255,211,90,.55), rgba(255,211,90,.05));
          animation: float2 12s ease-in-out infinite;
          transform: translateY(calc((var(--scrollY, 0) * 0.05) * -1px)) rotate(12deg);
        }
        .s3{
          width: 140px; height: 140px; border-radius: 999px;
          left: 10%; bottom: 90px;
          background: radial-gradient(circle at 30% 30%, rgba(80,240,137,.50), rgba(80,240,137,.06));
          animation: float3 9s ease-in-out infinite;
          transform: translateY(calc((var(--scrollY, 0) * 0.04) * -1px));
        }
        .s4{
          width: 260px; height: 160px; border-radius: 999px;
          right: 12%; bottom: 70px;
          background: radial-gradient(circle at 30% 30%, rgba(120,190,255,.35), rgba(120,190,255,.04));
          animation: float2 14s ease-in-out infinite;
          transform: translateY(calc((var(--scrollY, 0) * 0.03) * -1px));
        }
        .s5{
          width: 110px; height: 110px; border-radius: 28px;
          left: 55%; top: 40px;
          background: radial-gradient(circle at 30% 30%, rgba(255,255,255,.22), rgba(255,255,255,.03));
          animation: float3 11s ease-in-out infinite;
          transform: translateY(calc((var(--scrollY, 0) * 0.02) * -1px)) rotate(-10deg);
        }
        .wave{
          width: 520px; height: 520px;
          left: 50%; top: 55%;
          border-radius: 45% 55% 60% 40% / 55% 45% 55% 45%;
          background: conic-gradient(from 180deg, rgba(22,224,194,.18), rgba(255,211,90,.12), rgba(80,240,137,.12), rgba(22,224,194,.18));
          opacity: .55;
          animation: blob 16s ease-in-out infinite;
          transform: translate(-50%, -50%) translateY(calc((var(--scrollY, 0) * 0.025) * -1px));
        }
        @keyframes float1{
          0%,100%{ transform: translateY(calc((var(--scrollY, 0) * 0.06) * -1px)) translateX(0); }
          50%{ transform: translateY(calc((var(--scrollY, 0) * 0.06) * -1px)) translateX(16px) translateY(12px); }
        }
        @keyframes float2{
          0%,100%{ transform: translateY(calc((var(--scrollY, 0) * 0.05) * -1px)) rotate(12deg); }
          50%{ transform: translateY(calc((var(--scrollY, 0) * 0.05) * -1px)) translateY(14px) rotate(18deg); }
        }
        @keyframes float3{
          0%,100%{ transform: translateY(calc((var(--scrollY, 0) * 0.04) * -1px)); }
          50%{ transform: translateY(calc((var(--scrollY, 0) * 0.04) * -1px)) translateY(-14px); }
        }
        @keyframes blob{
          0%,100%{ border-radius: 45% 55% 60% 40% / 55% 45% 55% 45%; rotate: 0deg; }
          50%{ border-radius: 60% 40% 45% 55% / 45% 60% 40% 55%; rotate: 18deg; }
        }
      `}</style>
    </div>
  );
}
