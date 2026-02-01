"use client";

export default function Particles() {
  const lines = Array.from({ length: 18 });

  return (
    <div className="particles" aria-hidden="true">
      {lines.map((_, i) => (
        <span
          key={i}
          className="line"
          style={{
            left: `${(i * 7) % 100}%`,
            animationDelay: `${i * 0.35}s`
          }}
        />
      ))}
      <style jsx>{`
        .particles{
          position:absolute; inset:0; overflow:hidden; pointer-events:none;
          opacity:.55;
        }
        .line{
          position:absolute;
          top:-20%;
          width: 2px;
          height: 140%;
          background: linear-gradient(to bottom,
            transparent,
            rgba(255,255,255,.22),
            rgba(22,224,194,.20),
            transparent
          );
          filter: blur(.2px);
          animation: drift 6.5s linear infinite;
          transform: translateZ(0);
        }
        @keyframes drift{
          0%{ transform: translateY(-10%) skewX(-8deg); opacity:.0; }
          15%{ opacity:.55; }
          100%{ transform: translateY(10%) skewX(-8deg); opacity:0; }
        }
      `}</style>
    </div>
  );
}
