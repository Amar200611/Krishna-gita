"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  depth: number; // For parallax effect on scroll
  baseAlpha: number;
  currentAlpha: number;
  alphaSpeed: number;
  color: string;
  glowColor: string;
}

export default function GlowingUniverseParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Scroll reactivity variables
    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;
      // Smoothly cap and store scroll impulse
      scrollVelocity = Math.max(Math.min(delta * 0.45, 18), -18);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Color palettes: ethereal divine pink and cosmic electric blue
    const colors = [
      {
        core: "rgba(244, 114, 182, ", // soft glowing pink
        glow: "rgba(236, 72, 153, ",
      },
      {
        core: "rgba(251, 113, 133, ", // cosmic rose pink
        glow: "rgba(244, 63, 94, ",
      },
      {
        core: "rgba(96, 165, 250, ", // celestial blue
        glow: "rgba(59, 130, 246, ",
      },
      {
        core: "rgba(56, 189, 248, ", // radiant cyan/blue
        glow: "rgba(14, 165, 233, ",
      },
      {
        core: "rgba(192, 132, 252, ", // violet/pink blend
        glow: "rgba(168, 85, 247, ",
      },
    ];

    const particleCount = 45;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const palette = colors[Math.floor(Math.random() * colors.length)];
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.2 + 1.2,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -Math.random() * 0.35 - 0.1,
        depth: Math.random() * 0.85 + 0.4, // Different depths move at different speeds
        baseAlpha: Math.random() * 0.4 + 0.35,
        currentAlpha: Math.random() * 0.6,
        alphaSpeed: Math.random() * 0.015 + 0.008,
        color: palette.core,
        glowColor: palette.glow,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Dampen scroll velocity smoothly back to 0
      scrollVelocity *= 0.92;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move particle naturally + responsive scroll motion with parallax depth
        p.x += p.vx + scrollVelocity * 0.05 * (p.vx > 0 ? 1 : -1);
        p.y += p.vy - scrollVelocity * p.depth;

        // Wrap around viewport edges seamlessly
        if (p.x < -15) p.x = width + 15;
        if (p.x > width + 15) p.x = -15;
        if (p.y < -15) p.y = height + 15;
        if (p.y > height + 15) p.y = -15;

        // Twinkle / Pulse opacity
        p.currentAlpha += p.alphaSpeed;
        const opacity =
          p.baseAlpha + Math.sin(p.currentAlpha) * (p.baseAlpha * 0.6);

        // Draw outer ambient glow
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 4.5, 0, Math.PI * 2);
        ctx.fillStyle = `${p.glowColor}${opacity * 0.25})`;
        ctx.shadowBlur = 18;
        ctx.shadowColor = `${p.glowColor}${opacity * 0.85})`;
        ctx.fill();
        ctx.restore();

        // Draw radiant particle center
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${opacity})`;
        ctx.shadowBlur = 9;
        ctx.shadowColor = `${p.glowColor}1)`;
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 50,
      }}
    />
  );
}
