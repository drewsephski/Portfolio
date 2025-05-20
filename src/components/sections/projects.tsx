import React from "react";

import { SplineSceneBasic } from "@/components/ui/spinedemo"

export default function Projects() {
  console.log("Projects component loaded");
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 border-b">
      <div className="container px-4 md:px-6">
        <SplineSceneBasic />
      </div>
    </section>
  )
}
