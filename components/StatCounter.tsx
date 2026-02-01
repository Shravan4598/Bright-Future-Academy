"use client";

import { animate } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type Props = {
  value: number;
  suffix?: string;
  duration?: number;
};

export default function StatCounter({
  value,
  suffix = "",
  duration = 1.2,
}: Props) {
  const [display, setDisplay] = useState(0);

  const target = useMemo(() => value, [value]);

  useEffect(() => {
    const controls = animate(0, target, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });

    return () => controls.stop();
  }, [target, duration]);

  return (
    <span style={{ fontVariantNumeric: "tabular-nums" }}>
      {display}
      {suffix}
    </span>
  );
}
