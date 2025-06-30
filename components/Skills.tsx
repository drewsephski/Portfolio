"use client";
import { IconCloud } from "@/components/ui/IconCloud";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "postgresql",
  "vercel",
  "jest",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "mongodb",
  "python",
  "framer",
  "ai",
  "tailwindcss",
  "numpy",
];

function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const shouldReduceMotion = useReducedMotion();

  const textRevealVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );
  return (
    <div className="my-10 py-10 ">
      <div style={{ overflow: "hidden" }}>
        <motion.h1
          ref={ref}
          className="heading"
          variants={shouldReduceMotion ? {} : textRevealVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          Skills &amp; <span className="text-purple">Technologies</span>
        </motion.h1>
      </div>
      <div className="flex justify-center align-middle">
        <IconCloud images={images} />
      </div>
    </div>
  );
}

export default Skills;
