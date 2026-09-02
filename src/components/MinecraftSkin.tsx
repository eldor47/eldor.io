"use client";

import { useEffect, useRef } from "react";

const MinecraftSkin = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let cancelled = false;
    let viewer: { dispose: () => void } | undefined;

    const start = async () => {
      const { IdleAnimation, SkinViewer } = await import("skinview3d");
      if (cancelled || !canvas) return;

      const skinViewer = new SkinViewer({
        canvas,
        width: 240,
        height: 360,
        skin: "/api/skin",
        cape: "/api/cape",
      });

      skinViewer.autoRotate = true;
      skinViewer.autoRotateSpeed = 0.45;
      skinViewer.animation = new IdleAnimation();
      skinViewer.controls.enableZoom = false;
      viewer = skinViewer;
    };

    void start();

    return () => {
      cancelled = true;
      viewer?.dispose();
    };
  }, []);

  return (
    <div className="mx-auto flex w-full max-w-[240px] flex-col items-center">
      <canvas
        ref={canvasRef}
        className="h-[360px] w-[240px] cursor-grab active:cursor-grabbing"
      />
      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.22em] text-lime-300/80">
        eldooor
      </p>
    </div>
  );
};

export default MinecraftSkin;
