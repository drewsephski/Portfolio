"use client";

import {
  Briefcase,
  BookOpenText,
  BarChart3,
  MessageSquare,
  ShoppingBag,
} from "lucide-react"; // Import necessary icons
// import Image from "next/image"; // Import Image component - Unused
import React from "react";

import AnimatedBackground from "@/components/animated-background";
import ContactSection from "@/components/sections/contact";
import HeroSection from "@/components/sections/hero";
import ProjectsSection from "@/components/sections/projects";
import SkillsSection from "@/components/sections/skills";
import SmoothScroll from "@/components/smooth-scroll";
import { BentoGrid, type BentoItem } from "@/components/ui/bento-grid"; // Import new BentoGrid and BentoItem
import projectsData from "@/data/projects";
import { cn } from "@/lib/utils";

const projectIcons = [
  <Briefcase key="briefcase-icon" className="w-4 h-4 text-neutral-500" />,
  <BookOpenText key="bookopen-icon" className="w-4 h-4 text-neutral-500" />,
  <BarChart3 key="barchart-icon" className="w-4 h-4 text-neutral-500" />,
  <MessageSquare key="messagesquare-icon" className="w-4 h-4 text-neutral-500" />,
  <ShoppingBag key="shoppingbag-icon" className="w-4 h-4 text-neutral-500" />,
];

const BentoGridSection = () => {
  const bentoItems: BentoItem[] = projectsData
    .slice(0, 5)
    .map((project, index) => ({
      title: project.title,
      description: project.description,
      icon: projectIcons[index] || <Briefcase key="default-icon" className="w-4 h-4 text-neutral-500" />, // Fallback icon
      tags: project.tags,
      cta: project.live === "#" ? "View Project" : project.live,
      // Assign colSpan based on index for the 2-row layout (2 items, then 3 items)
      // md:grid-cols-3 means 3 columns in medium screens and above.
      // Item 0: spans 2 columns (takes up 2/3 of the first row)
      // Item 1: spans 1 column (takes up 1/3 of the first row)
      // Item 2: spans 1 column (first item of the second row)
      // Item 3: spans 1 column (second item of the second row)
      // Item 4: spans 1 column (third item of the second row)
      colSpan: index === 0 ? 2 : 1,
    }));

  return (
    <section id="bento-grid" className="max-w-7xl mx-auto md:min-h-[70vh] mb-32"> {/* Adjusted vertical spacing as mb-96 was quite large, mb-32 is more reasonable */}
      <h2 className={cn(
        "bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-16",
        "bg-gradient-to-b from-black/80 to-black/50",
        "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50 mb-16 md:mb-24" // Adjusted heading margin
      )}>
        Featured Projects
      </h2>
      <BentoGrid items={bentoItems} />
    </section>
  );
};

function MainPage() {
  return (
    <>
      <SmoothScroll>
        <main className={cn("bg-slate-100 dark:bg-transparent")}>
          <div className="top-0 z-0 fixed w-full h-screen">
            <AnimatedBackground />
          </div>
          <HeroSection />
          <SkillsSection />
          <ProjectsSection />
          <BentoGridSection />
          <ContactSection />
        </main>
      </SmoothScroll>
    </>
  );
}

export default MainPage;