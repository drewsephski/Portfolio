"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
// @ts-ignore
import "@splidejs/react-splide/css/core";

import "@splidejs/react-splide/css";
import { BentoGridThirdDemo } from "@/components/ui/bento-grid-demo-3"; // Added import

// eslint-disable-next-line import/order
import { FileTextIcon, PersonIcon } from "@radix-ui/react-icons"; // Added for placeholder icons

const OLD_PROJECTS_DATA = [
  {
    id: 1,
    name: "Coding Ducks",
    description: `Dive into CodingDucks, a fusion of CodePen's creative playground with LeetCode's problem-solving realm.
Whether you're a newbie or a seasoned coder, join the community to paddle through coding adventures and let your
creativity soar.`,
    link: "https://www.codingducks.live",
    images: [
      "/assets/projects-screenshots/codingducks/1.webp",
      "/assets/projects-screenshots/codingducks/2.webp",
      "/assets/projects-screenshots/codingducks/3.webp",
      "/assets/projects-screenshots/codingducks/4.webp",
      "/assets/projects-screenshots/codingducks/5.webp",
    ],
  },
  {
    id: 2,
    name: "Ghost Chat",
    description: `GhostChat is an anonymous messaging app that allows users to connect without revealing their identities. 
Join the community for intriguing conversations and mysterious encounters.`,
    link: "https://ghostchatt.vercel.app/",
    images: [
      "/assets/projects-screenshots/ghostchat/1.webp",
      "/assets/projects-screenshots/ghostchat/2.webp",
      "/assets/projects-screenshots/ghostchat/3.webp",
      "/assets/projects-screenshots/ghostchat/4.webp",
    ],
  },
  {
    id: 3,
    name: "Coupon Luxury",
    description: `Welcome to CouponLuxury, your destination for exclusive discounts and savings. Explore the platform to find the
best deals on luxury brands and products. Join our savvy community of shoppers and unlock access to premium coupons.`,
    link: "https://www.couponluxury.com/",
    images: [
      "/assets/projects-screenshots/couponluxury/1.webp",
      "/assets/projects-screenshots/couponluxury/2.webp",
      "/assets/projects-screenshots/couponluxury/3.webp",
      "/assets/projects-screenshots/couponluxury/4.webp",
      "/assets/projects-screenshots/couponluxury/5.webp",
    ],
  },
];
function Page() {
  // Transform OLD_PROJECTS_DATA to the new format for BentoGridThirdDemo
  const bentoProjects = OLD_PROJECTS_DATA.map((project, index) => ({
    title: project.name,
    description: project.description,
    header: (
      <Image
        src={project.images[0]} // Use the first image for the header
        alt={project.name}
        width={600} // Adjust as needed
        height={400} // Adjust as needed
        className="object-cover w-full h-full rounded-t-xl" // Ensure image covers header and rounds top corners
      />
    ),
    // Using a simple alternating icon as a placeholder, you can customize this further
    icon: index % 2 === 0 ? <FileTextIcon className="h-4 w-4 text-neutral-500" /> : <PersonIcon className="h-4 w-4 text-neutral-500" />,
    // Example class assignment, adjust logic as needed for your layout preference
    className: project.id === 1 || project.id === OLD_PROJECTS_DATA.length ? "md:col-span-2" : "md:col-span-1", 
    link: project.link,
  }));

  return (
    <section className="py-12 px-4 md:px-6 lg:px-8 bg-background text-foreground">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            My Projects
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A showcase of my recent work and personal endeavors.
          </p>
        </motion.div>
        <BentoGridThirdDemo projects={bentoProjects} />
      </div>
       {/* Optional: You can keep or remove the drone image section based on your preference */}
       <div className="flex justify-center my-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/assets/projects-screenshots/portfolio/drone.webp"
              alt="Drone screenshot"
              width={800}
              height={600}
              className="rounded-md"
            />
          </motion.div>
        </div>
    </section>
  );
}

export default Page;
