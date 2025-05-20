"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import React from "react";
gsap.registerPlugin(ScrollTrigger);

const ScrollDownIcon = () => {
  const iconRef = useRef(null);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const icon = iconRef.current;
    if (!icon) return;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: icon,
        start: "top bottom",
        end: "+=300",
        scrub: true,
        toggleActions: "play none none reverse",
      },
    });
    tl.to(icon, {
      y: 40,
      opacity: 0,
      scale: 0.7,
      duration: 1.2,
      ease: "power2.inOut",
    });
    return () => {
      if (tl) tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  return (
    <div
      ref={iconRef}
      className="w-fit min-h-[50px] p-1 border-2 rounded-full border-gray-500 dark:border-white fixed left-1/2 -translate-x-1/2 bottom-10 z-50 bg-white/80 dark:bg-black/60 shadow-lg"
    >
      <div className="w-3 h-3 rounded-full bg-gray-500 dark:bg-white animate-bounce" />
    </div>
  );
};

export default ScrollDownIcon;