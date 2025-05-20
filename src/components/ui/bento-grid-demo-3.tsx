import { FileTextIcon } from "@radix-ui/react-icons";
import React from 'react';

import { BentoGrid, BentoItem } from "@/components/ui/bento-grid"; // BentoItem is the interface

interface Project {
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  header: React.ReactNode;
  icon: React.ReactNode;
  className: string;
  link?: string; // Optional link for the project
}



interface BentoGridThirdDemoProps {
  projects: Project[];
}

export function BentoGridThirdDemo({ projects }: BentoGridThirdDemoProps) {
  if (!Array.isArray(projects)) {
    return <div>Error: Projects data is not an array.</div>;
  }

  if (projects.length === 0) {
    return <div>Loading...</div>;
  }

  // Transform Project[] to BentoItem[]
  const bentoItems: BentoItem[] = projects.map((project, i) => {
    let colSpan;
    if (project.className?.includes("md:col-span-2")) {
      colSpan = 2;
    } else if (project.className?.includes("md:col-span-1")) {
      colSpan = 1;
    } else {
      // Default or fallback logic for colSpan based on index if className is not specific
      colSpan = (i === 0 || i === projects.length - 1 ? 2 : 1);
    }

    return {
      title: project.title as string, // BentoItem expects string
      description: project.description as string, // BentoItem expects string
      icon: project.icon || <FileTextIcon className="h-4 w-4 text-neutral-500" />,
      colSpan: colSpan,
      // 'header' from Project is not in BentoItem
      // 'link' for onClick from Project is not directly supported; BentoItem has 'cta' (string)
      // For now, link/onClick functionality and header are not carried over due to interface mismatch.
    };
  });

  return (
    <BentoGrid items={bentoItems} className="mx-auto max-w-4xl z-10 mt-12" />
  );
}