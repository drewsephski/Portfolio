"use client";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import React from 'react';
import "@splidejs/react-splide/css";
import { DiMongodb, DiNginx, DiNpm, DiPostgresql, DiVim } from "react-icons/di";
import {
  FaAws,
  FaCss3,
  FaDocker,
  FaEnvelope,
  FaGit,
  FaGithub,
  FaHtml5,
  FaLinkedin,
  FaLinux,
  FaNodeJs,
  FaPhone,
  FaReact,
  FaVuejs,
  FaYarn,
} from "react-icons/fa6";
import {
  RiFirebaseFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiExpress,
  SiJavascript,
  SiKubuntu,
  SiPrettier,
  SiTypescript,
  SiVercel,
  SiVisualstudiocode,
} from "react-icons/si";
import { TbTerminal2 } from "react-icons/tb";

const CONTACT_LINKS = [
  {
    name: "Email",
    content: "drewsepeczi@gmail",
    href: "mailto:drewsepeczi@gmail.com",
    icon: <FaEnvelope height={"50px"} />,
  },
  {
    name: "Phone",
    content: "224-343-1711",
    href: "tel:2243431711",
    icon: <FaPhone height={"50px"} />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/drewsepeczi/",
    content: "/",
    icon: <FaLinkedin height={"50px"} />,
  },
  {
    name: "GitHub",
    href: "https://github.com/drewsephski",
    content: "/",
    icon: <FaGithub height={"50px"} />,
  },
];

const TOOLS = [
  {
    name: "JavaScript",
    content: "A versatile scripting language for web development.",
    icon: <SiJavascript size={"50px"} color={"#f0db4f"} />,
    color: "#f0db4f",
  },
  {
    name: "TypeScript",
    content: "A typed superset of JavaScript that enhances code maintainability.",
    icon: <SiTypescript size={"50px"} color={"#007acc"} />,
    color: "#007acc",
  },
  {
    name: "HTML",
    content: "The standard markup language for creating web pages.",
    icon: <FaHtml5 size={"50px"} color="#e34c26" />,
    color: "#e34c26",
  },
  {
    name: "CSS",
    content: "A stylesheet language used to describe the presentation of a document written in HTML.",
    icon: <FaCss3 size={"50px"} color="#563d7c" />,
    color: "#563d7c",
  },
  {
    name: "Nodejs",
    content: "A JavaScript runtime environment that allows you to run JS on the server.",
    icon: <FaNodeJs size={"50px"} color="#6cc24a" />,
    color: "#6cc24a",
  },
  {
    name: "React.js",
    content: "A JavaScript library for building user interfaces.",
    icon: <FaReact size={"50px"} color="#61dafb" />,
    color: "#61dafb",
  },
  {
    name: "Docker",
    content: "A platform for developing, shipping, and running applications in containers.",
    icon: <FaDocker size={"50px"} color="#2496ed" />,
    color: "#2496ed",
  },
  {
    name: "NginX",
    content: "A high-performance web server and reverse proxy.",
    icon: <DiNginx size={"50px"} color="#008000" />,
    color: "#008000",
  },
  {
    name: "Vue.js",
    content: "A progressive framework for building user interfaces.",
    icon: <FaVuejs size={"50px"} color="#41b883" />,
    color: "#41b883",
  },
  {
    name: "Express.js",
    content: "A minimal and flexible Node.js web application framework.",
    icon: <SiExpress size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "PostgreSQL",
    content: "A powerful, open source object-relational database system.",
    icon: <DiPostgresql size={"50px"} color="#336791" />,
    color: "#336791",
  },
  {
    name: "MongoDB",
    content: "A NoSQL document database that provides high performance, high availability, and easy scalability.",
    icon: <DiMongodb size={"50px"} color="#4db33d" />,
    color: "#4db33d",
  },
  {
    name: "Tailwind CSS",
    content: "A utility-first CSS framework for rapidly building custom designs.",
    icon: <RiTailwindCssFill size={"50px"} color="#06b6d4" />,
    color: "#06b6d4",
  },
  {
    name: "Firebase",
    content: "A platform developed by Google for creating mobile and web applications.",
    icon: <RiFirebaseFill size={"50px"} color="#FFCA28" />,
    color: "#FFCA28",
  },
  {
    name: "Git",
    content: "A distributed version control system.",
    icon: <FaGit size={"50px"} color="#f05032" />,
    color: "#f05032",
  },
  {
    name: "GitHub",
    content: "A platform for version control and collaboration.",
    icon: <FaGithub size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "VS Code",
    content: "A popular source code editor developed by Microsoft.",
    icon: <SiVisualstudiocode size={"50px"} color="#007acc" />,
    color: "#007acc",
  },
  {
    name: "VIM",
    content: "A highly configurable text editor.",
    icon: <DiVim size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "Prettier",
    content: "An opinionated code formatter.",
    icon: <SiPrettier size={"50px"} color="#f7b93c" />,
    color: "#f7b93c",
  },
  {
    name: "NPM",
    content: "A package manager for JavaScript.",
    icon: <DiNpm size={"50px"} color="#CB3837" />,
    color: "#CB3837",
  },
  {
    name: "Yarn",
    content: "A fast, reliable, and secure dependency management tool.",
    icon: <FaYarn size={"50px"} color="#2C8EBB" />,
    color: "#2C8EBB",
  },
  {
    name: "Vercel",
    content: "A platform for frontend developers, providing hosting and serverless functions.",
    icon: <SiVercel size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "Linux",
    content: "A family of open-source Unix-like operating systems.",
    icon: <FaLinux size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "Kubuntu",
    content: "A user-friendly Linux distribution based on Ubuntu.",
    // give me correct color for  kubuntu
    icon: <SiKubuntu size={"50px"} color="#0077C4" />,
    color: "#000000",
  },
  {
    name: "Terminal",
    content: "A command-line interface for interacting with the operating system.",
    icon: <TbTerminal2 size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "AWS",
    content: "Amazon Web Services, a comprehensive and broadly adopted cloud platform.",
    icon: <FaAws size={"50px"} color="#3f51b5" />,
    color: "#000000",
  },
];

function Page() {
  return (
    <div className="container mx-auto px-4 md:px-[50px] xl:px-[200px] text-zinc-300 pt-20 pb-20">
      <div className="flex flex-col lg:flex-row gap-5">
        <aside className="w-full md:basis-1/4">
          <div
            className="p-4 md:p-8 lg:p-10 rounded-2xl border-[.5px] border-zinc-600 border-[1px] border-solid"
            style={{
              backdropFilter: "blur(2px)",
            }}
          >
            <div className="flex flex-row lg:flex-col items-center">
              <div className="flex justify-center items-center lg:w-full lg:aspect-square bg-zinc-800 rounded-xl lg:mb-5">
                <Image
                  className="rounded-full p-4 lg:p-10 w-[100px] md:w-[150px] lg:w-[200px] aspect-square  bg-zinc-800"
                  alt="me"
                  src="/assets/me.jpg"
                  width={200}
                  height={200}
                />
              </div>
              <div className="flex flex-col gap-3 lg:items-center ml-10 md:ml-20 lg:ml-0">
                <p className="text-center text-xl">Drew Sepeczi</p>
                <div className="text-xs bg-zinc-700 w-fit px-3 py-1 rounded-full">
                  Web Developer
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <hr className="my-10 border-zinc-600 border-[1px] border-solid" />
              <ul className="flex flex-col gap-3">
                {CONTACT_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      className="flex items-center px-3 gap-3 w-full h-12 border-zinc-700 border-[1px] border-solid bg-zinc-800 hover:border-zinc-600 border-[.5px] rounded-md"
                      href={link.href}
                    >
                      <div className="w-8">{link.icon}</div>
                      <div className="flex flex-col">
                        <div className="text-sm">{link.name}</div>
                        <div className="text-xs text-zinc-500">
                          {link.content}
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
        <main className="basis-3/4 w-[500px]">
          <div
            className="p-10 border-[.5px] rounded-md border-zinc-600 border-[1px] border-solid"
            style={{ backdropFilter: "blur(2px)" }}
          >
            <h1 className="text-3xl mb-10 lg:md-20">About me</h1>
            <p className="mb-10 text-roboto">
              Hey there! I&apos;m Drew, a Fullstack developer passionate about
              creating meaningful digital experiences. With years of experience in Web
              development, I thrive on turning ideas into reality through coding
              and design. My journey began with a fascination for technology and
              a drive to make a positive impact.
            </p>
            <p className="mb-10">
              When I&apos;m not coding, you can find me [Your
              Interests/Hobbies], exploring new technologies, or sipping coffee
              while brainstorming my next project.
            </p>
            <h1 className="text-3xl mb-10 lg:md-20">Stuff I use</h1>
            <div className="mb-5">
              <Splide
                options={{
                  type: "loop",
                  interval: 2000,
                  autoplay: true,
                  pagination: false,
                  speed: 2000,
                  perPage: 5,
                  perMove: 1,
                  rewind: true,
                  easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                  arrows: false,
                }}
                aria-label="My Favorite Images"
              >
                {TOOLS.reverse().map((tool) => (
                  <SplideSlide key={tool.name}>
                    <div
                      key={tool.name}
                      className="w-fit p-2 border-[.5px] border-zinc-600 border-[1px] border-solid rounded-md"
                    >
                      {tool.icon}
                    </div>
                  </SplideSlide>
                ))}
              </Splide>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Page;
