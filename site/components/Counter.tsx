"use client";

import { useEffect, useRef } from "react";

export default function Counter({
  target,
  suffix = "",
  style,
}: {
  target: number;
  suffix?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const dur = 1300;
    const start = performance.now();
    let frame: number;
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (t < 1) frame = requestAnimationFrame(step);
    };
    const timeout = setTimeout(() => {
      frame = requestAnimationFrame(step);
    }, 350);
    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(frame);
    };
  }, [target, suffix]);

  return (
    <div ref={ref} style={style}>
      0{suffix}
    </div>
  );
}
