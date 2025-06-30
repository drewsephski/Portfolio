"use client";
import { FaLocationArrow, FaFile } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import TypewriterEffect from "./ui/TypewriterEffect";

const Hero = () => {
  const words = [
    {
      text: "Researching",
      className: "text-gradient-glass dark:text-white",  
    },
    {
      text: "&",
      className: "text-white dark:text-white",
    },
    {
      text: "Developing",
      className: "text-gradient-glass dark:text-white",
    },
    {
      text: "AI",
      className: "text-gradient-glass dark:text-white",  
    },
    {
      text: "Solutions",
      className: "text-gradient-glass dark:text-white",
    },
  ];

  return (
    <div id="home" className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight className="top-10 left-full h-[80vh]" fill="#00BFFF" />
        <Spotlight
          className="top-28 left-80 h-[80vh] w-[50vw]"
          fill="#87CEEB"
        />
        <Spotlight
          className="absolute -top-20 left-1/2 transform -translate-x-1/2 h-[40vh] w-[30vw]"
          fill="white"
        />
      </div>

      <div className="h-screen w-full dark:bg-grid-white/[0.1] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20-z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <img
            src="/drew-lucy.png"
            alt="profile-pic"
            className="rounded-full w-80 h-70 border-2 border-white-100 mb-5"
          />
          <h2 className="uppercase tracking-widest text-xs text-center text-gradient-glass max-w-80">
            Drew Sepeczi
          </h2>
          <TypewriterEffect
            className="text-center md:text-5xl lg:text-6xl my-5 text-gradient-glass"
            words={words}
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-gradient-glass">
            Hi, I&apos;m Drew, a Software Developer and AI Researcher passionate about building intelligent systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="cursor-pointer">
              <MagicButton
                title="Get in Touch"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <a 
              href="https://docs.google.com/document/d/e/2PACX-1vQOOxielP1uVwLcD0538JZY_AEb_3QFbR5l1ByY53E7uqHDCuJ7z4gK4ukHC5EPEv17kD9x3J6kgRun/pub" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <MagicButton
                title="View Resume"
                icon={<FaFile />}
                position="right"
                otherClasses="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-700 hover:to-cyan-700"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
