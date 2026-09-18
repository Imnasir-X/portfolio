"use client";

import { useEffect, useRef, useState } from "react";

function getReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function SubtleGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isReducedMotion, setIsReducedMotion] = useState(getReducedMotion);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (isReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(0, 0, width, height);

      const gridSize = 60;
      const alpha = 0.03;

      ctx.strokeStyle = `rgba(138, 136, 130, ${alpha})`;
      ctx.lineWidth = 1;

      // Draw vertical lines with subtle wave
      for (let x = 0; x <= width; x += gridSize) {
        const offset = Math.sin(time * 0.001 + x * 0.01) * 2;
        ctx.beginPath();
        ctx.moveTo(x + offset, 0);
        ctx.lineTo(x + offset, height);
        ctx.stroke();
      }

      // Draw horizontal lines with subtle wave
      for (let y = 0; y <= height; y += gridSize) {
        const offset = Math.cos(time * 0.001 + y * 0.01) * 2;
        ctx.beginPath();
        ctx.moveTo(0, y + offset);
        ctx.lineTo(width, y + offset);
        ctx.stroke();
      }

      // Draw sparse dots at intersections
      ctx.fillStyle = `rgba(201, 184, 150, ${alpha * 2})`;
      for (let x = 0; x <= width; x += gridSize * 2) {
        for (let y = 0; y <= height; y += gridSize * 2) {
          const offsetX = Math.sin(time * 0.001 + x * 0.01) * 2;
          const offsetY = Math.cos(time * 0.001 + y * 0.01) * 2;
          if ((x / gridSize + y / gridSize) % 3 === 0) {
            ctx.beginPath();
            ctx.arc(x + offsetX, y + offsetY, 1, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      time += 16;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
