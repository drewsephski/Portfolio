"use client";

import React, { useCallback, useEffect, useRef } from "react";

import { cn } from "@/lib/utils";
import { Circle } from "@/types";
import { useMousePosition } from "@/utils/mouse";

interface ParticlesProps {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
  refresh?: boolean;
}

export default function Particles({
  className = "",
  quantity = 30,
  staticity = 50,
  ease = 50,
  refresh = false,
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null); // Renamed
  const circles = useRef<Circle[]>([]); // Typed
  const mousePosition = useMousePosition();
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;
  const animationFrameId = useRef<number | null>(null);

  const remapValue = useCallback(
    (
      value: number,
      start1: number,
      end1: number,
      start2: number,
      end2: number
    ): number => {
      const remapped =
        ((value - start1) * (end2 - start2)) / (end1 - start1) + start2;
      return remapped > 0 ? remapped : 0;
    },
    []
  );

  const clearContext = useCallback(() => {
    if (contextRef.current) {
      contextRef.current.clearRect(
        0,
        0,
        canvasSize.current.w,
        canvasSize.current.h
      );
    }
  }, []);

  const circleParams = useCallback((): Circle => {
    const x = Math.floor(Math.random() * canvasSize.current.w);
    const y = Math.floor(Math.random() * canvasSize.current.h);
    const translateX = 0;
    const translateY = 0;
    const size = Math.floor(Math.random() * 2) + 0.1;
    const alpha = 0;
    const targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1));
    const dx = (Math.random() - 0.5) * 0.2;
    const dy = (Math.random() - 0.5) * 0.2;
    const magnetism = 0.1 + Math.random() * 4;
    return {
      x,
      y,
      translateX,
      translateY,
      size,
      alpha,
      targetAlpha,
      dx,
      dy,
      magnetism,
    };
  }, []);

  const drawCircle = useCallback(
    (circle: Circle, update = false) => {
      if (contextRef.current) {
        const { x, y, translateX, translateY, size, alpha } = circle;
        contextRef.current.translate(translateX, translateY);
        contextRef.current.beginPath();
        contextRef.current.arc(x, y, size, 0, 2 * Math.PI);
        contextRef.current.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        contextRef.current.fill();
        contextRef.current.setTransform(dpr, 0, 0, dpr, 0, 0);

        if (!update) {
          circles.current.push(circle);
        }
      }
    },
    [dpr]
  );

  const resizeCanvas = useCallback(() => {
    if (canvasContainerRef.current && canvasRef.current && contextRef.current) {
      circles.current.length = 0;
      canvasSize.current.w = canvasContainerRef.current.offsetWidth;
      canvasSize.current.h = canvasContainerRef.current.offsetHeight;
      canvasRef.current.width = canvasSize.current.w * dpr;
      canvasRef.current.height = canvasSize.current.h * dpr;
      canvasRef.current.style.width = `${canvasSize.current.w}px`;
      canvasRef.current.style.height = `${canvasSize.current.h}px`;
      contextRef.current.scale(dpr, dpr);
    }
  }, [dpr]);

  const drawParticles = useCallback(() => {
    clearContext();
    const particleCount = quantity;
    for (let i = 0; i < particleCount; i++) {
      const c = circleParams(); // get new params
      drawCircle(c); // draw with new params
    }
  }, [clearContext, quantity, circleParams, drawCircle]);

  const onMouseMove = useCallback(() => {
    if (canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      const { w, h } = canvasSize.current;
      const x = mousePosition.x - rect.left - w / 2;
      const y = mousePosition.y - rect.top - h / 2;
      const inside = x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2;
      if (inside) {
        mouse.current.x = x;
        mouse.current.y = y;
      }
    }
  }, [mousePosition.x, mousePosition.y]);

  const initCanvas = useCallback(() => {
    resizeCanvas();
    drawParticles();
  }, [resizeCanvas, drawParticles]);

  const animate = useCallback(() => {
    clearContext();
    circles.current.forEach((circle: Circle, _i: number) => {
      const edge = [
        circle.x + circle.translateX - circle.size,
        canvasSize.current.w - circle.x - circle.translateX - circle.size,
        circle.y + circle.translateY - circle.size,
        canvasSize.current.h - circle.y - circle.translateY - circle.size,
      ];
      const closestEdge = edge.reduce((a, b) => Math.min(a, b));
      const remapClosestEdge = parseFloat(
        remapValue(closestEdge, 0, 20, 0, 1).toFixed(2)
      );
      if (remapClosestEdge > 1) {
        circle.alpha += 0.02;
        if (circle.alpha > circle.targetAlpha) {
          circle.alpha = circle.targetAlpha;
        }
      } else {
        circle.alpha = circle.targetAlpha * remapClosestEdge;
      }
      circle.x += circle.dx;
      circle.y += circle.dy;
      circle.translateX +=
        (mouse.current.x / (staticity / circle.magnetism) -
          circle.translateX) /
        ease;
      circle.translateY +=
        (mouse.current.y / (staticity / circle.magnetism) -
          circle.translateY) /
        ease;
      if (
        circle.x < -circle.size ||
        circle.x > canvasSize.current.w + circle.size ||
        circle.y < -circle.size ||
        circle.y > canvasSize.current.h + circle.size
      ) {
        Object.assign(circle, circleParams());
      } else {
        drawCircle(
          {
            ...circle,
            x: circle.x,
            y: circle.y,
            translateX: circle.translateX,
            translateY: circle.translateY,
            alpha: circle.alpha,
          },
          true
        );
      }
    });
    animationFrameId.current = window.requestAnimationFrame(animate);
  }, [
    clearContext,
    remapValue,
    staticity,
    ease,
    circleParams,
    drawCircle,
  ]);

  useEffect(() => {
    if (canvasRef.current) {
      contextRef.current = canvasRef.current.getContext("2d");
    }
    initCanvas();
    // Start animation
    animationFrameId.current = window.requestAnimationFrame(animate);
    window.addEventListener("resize", initCanvas);

    return () => {
      window.removeEventListener("resize", initCanvas);
      if (animationFrameId.current) {
        window.cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [initCanvas, animate]); // animate and initCanvas are now memoized

  useEffect(() => {
    onMouseMove();
  }, [mousePosition.x, mousePosition.y, onMouseMove]); // onMouseMove is memoized

  useEffect(() => {
    initCanvas();
  }, [refresh, initCanvas]); // initCanvas is memoized

  return (
    <div
      className={cn(
        className,
        "dark:bg-gradient-to-tl from-black via-zinc-600/20 to-black"
      )}
      ref={canvasContainerRef}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} />
    </div>
  );
}