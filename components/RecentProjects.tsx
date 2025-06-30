"use client";
import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/PinContainer";
import { FaLocationArrow } from "react-icons/fa";


const RecentProjects = () => {
  return (
    <div className="py-10" id="projects">
      <h1 className="heading bg-clip-text text-transparent bg-gradient-to-b from-white to-[#00BFFF] backdrop-filter backdrop-blur-lg bg-opacity-20">
        A small selection of recent projects
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-20 gap-y-2">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
          >
            <PinContainer title={link} href={link} >
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10 rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-black/70 z-10" />
                <img 
                  src={img} 
                  alt={title} 
                  className="absolute inset-0 w-full h-full object-cover z-0"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20 bg-gradient-to-t from-black/90 to-transparent">
                  <h2 className="text-white text-lg font-semibold">{title}</h2>
                </div>
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-gradient-glass">
                {title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center space-x-1">
                  {iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="group relative"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <div className="border border-white/20 rounded-full bg-black/80 backdrop-blur-sm lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center transition-all duration-300 group-hover:border-purple-400/50 group-hover:bg-purple-900/30 group-hover:scale-110">
                        <img 
                          src={icon} 
                          alt={`${title} tech ${index + 1}`} 
                          className="p-1.5 lg:p-2 transition-transform duration-300 group-hover:scale-110"
                          style={{
                            filter: "invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) contrast(103%)"
                          }}
                        />
                      </div>
                      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-white bg-black/80 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                        {icon.split('/').pop()?.replace('.svg', '')}
                      </span>
                    </div>
                  ))}
                </div>

                <a 
                  href={link} 
                  className="flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-900/80 to-purple-500/80 text-white text-sm font-medium transition-all duration-300 hover:from-purple-900 hover:to-purple-600 hover:shadow-lg hover:shadow-purple-500/20"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="mr-2">Live Demo</span>
                  <FaLocationArrow className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
