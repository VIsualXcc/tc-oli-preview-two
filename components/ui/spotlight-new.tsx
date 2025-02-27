"use client";
import React, { useRef, useEffect, memo } from "react";

type SpotlightProps = {
  className?: string;
  gradientFirst?: string;
  gradientSecond?: string;
  gradientThird?: string;
  translateY?: number;
  width?: number;
  height?: number;
  smallWidth?: number;
  duration?: number;
  xOffset?: number;
  disabled?: boolean;
};

// Optimierte Spotlight-Komponente mit weniger JavaScript-Last und besserer Memory-Nutzung
const SpotlightComponent = ({
  className = "",
  gradientFirst = "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 85%, 0.08) 0%, hsla(210, 100%, 55%, 0.02) 50%, hsla(210, 100%, 45%, 0) 80%)",
  gradientSecond = "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, 0.06) 0%, hsla(210, 100%, 55%, 0.02) 80%, transparent 100%)",
  gradientThird = "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, 0.04) 0%, hsla(210, 100%, 45%, 0.02) 80%, transparent 100%)",
  translateY = -350,
  width = 560,
  height = 1380,
  smallWidth = 240,
  duration = 10,
  xOffset = 100,
  disabled = false,
}: SpotlightProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const positionRef = useRef({ left: 0, right: 0, direction: 1 });
  
  // Bei Unmount: Bereinige Animationen
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = undefined;
      }
    };
  }, []);
  
  // Optimierte Animation mit besserem Memory-Management
  useEffect(() => {
    if (disabled || typeof window === 'undefined') return;
    
    // Animation-Performance-Optimierung
    let lastTime = 0;
    const targetFps = 30; // Niedrigere FPS für bessere Performance
    const fpsInterval = 1000 / targetFps;
    
    const animate = (timestamp: number) => {
      if (!containerRef.current) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      
      // FPS-Begrenzung
      const elapsed = timestamp - lastTime;
      if (elapsed < fpsInterval) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      
      lastTime = timestamp - (elapsed % fpsInterval);
      
      // Kleinerer Wert für langsamere Animation
      const step = 0.05;
      const { left, right, direction } = positionRef.current;
      
      // Richtungsänderung
      let newDirection = direction;
      if (left >= xOffset || left <= -xOffset) newDirection *= -1;
      
      // Position berechnen
      const newLeft = left + step * newDirection;
      const newRight = right - step * newDirection;
      
      // Positionen aktualisieren
      positionRef.current = { left: newLeft, right: newRight, direction: newDirection };
      
      // DOM-Manipulation minimieren, nur transformieren
      const leftElements = containerRef.current.querySelectorAll('.left-element');
      const rightElements = containerRef.current.querySelectorAll('.right-element');
      
      leftElements.forEach(el => {
        (el as HTMLElement).style.transform = `${(el as HTMLElement).style.transform.split(' translateX')[0]} translateX(${newLeft}px)`;
      });
      
      rightElements.forEach(el => {
        (el as HTMLElement).style.transform = `${(el as HTMLElement).style.transform.split(' translateX')[0]} translateX(${newRight}px)`;
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    // Animation starten mit Verzögerung
    const timeoutId = setTimeout(() => {
      animationRef.current = requestAnimationFrame(animate);
    }, 300);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      clearTimeout(timeoutId);
    };
  }, [xOffset, disabled]);
  
  if (disabled) return null;
  
  return (
    <div
      ref={containerRef}
      className={`pointer-events-none absolute inset-0 opacity-70 h-full w-full overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <div className="absolute top-0 left-0 w-screen h-screen z-10 pointer-events-none">
        <div
          style={{
            transform: `translateY(${translateY}px) rotate(-45deg)`,
            background: gradientFirst,
            width: `${width}px`,
            height: `${height}px`,
          }}
          className="absolute top-0 left-0 left-element"
        />

        <div
          style={{
            transform: "rotate(-45deg) translate(5%, -50%)",
            background: gradientSecond,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className="absolute top-0 left-0 origin-top-left left-element"
        />

        <div
          style={{
            transform: "rotate(-45deg) translate(-180%, -70%)",
            background: gradientThird,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className="absolute top-0 left-0 origin-top-left left-element"
        />
      </div>

      <div
        className="absolute top-0 right-0 w-screen h-screen z-10 pointer-events-none"
      >
        <div
          style={{
            transform: `translateY(${translateY}px) rotate(45deg)`,
            background: gradientFirst,
            width: `${width}px`,
            height: `${height}px`,
          }}
          className="absolute top-0 right-0 right-element"
        />

        <div
          style={{
            transform: "rotate(45deg) translate(-5%, -50%)",
            background: gradientSecond,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className="absolute top-0 right-0 origin-top-right right-element"
        />

        <div
          style={{
            transform: "rotate(45deg) translate(180%, -70%)",
            background: gradientThird,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className="absolute top-0 right-0 origin-top-right right-element"
        />
      </div>
    </div>
  );
};

// Memoization für höhere Performance
export const Spotlight = memo(SpotlightComponent);
