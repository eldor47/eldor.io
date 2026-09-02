"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const FrogHopper = () => {
  const [position, setPosition] = useState({ x: -120, y: -120 });

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const target = {
      x: window.innerWidth - 96,
      y: window.innerHeight - 110,
    };
    const current = { ...target };
    let frame = 0;

    const onMove = (event: PointerEvent) => {
      target.x = event.clientX + 18;
      target.y = event.clientY + 18;
    };

    const tick = () => {
      if (prefersReduced) {
        setPosition(target);
        return;
      }

      current.x += (target.x - current.x) * 0.055;
      current.y += (target.y - current.y) * 0.055;
      setPosition({ x: current.x, y: current.y });
      frame = window.requestAnimationFrame(tick);
    };

    if (!prefersReduced) {
      window.addEventListener("pointermove", onMove, { passive: true });
    }

    frame = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-40 hidden sm:block"
      style={{ left: position.x, top: position.y }}
      aria-hidden="true"
    >
      <Image
        src="/emotes/animated_frog.gif"
        alt=""
        width={72}
        height={72}
        unoptimized
        className="h-[72px] w-[72px] object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,0.35)]"
      />
    </div>
  );
};

export default FrogHopper;
