import { FileTextIcon } from "@radix-ui/react-icons";
import React from 'react';

import { BentoGrid, BentoItem } from "@/components/ui/bento-grid";

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

  return (
    <BentoGrid className="mx-auto max-w-4xl z-10 mt-12"> {/* Removed fixed row height */}
      {projects.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon || <FileTextIcon className="h-4 w-4 text-neutral-500" />}
          className={item.className || (i === 0 || i === projects.length - 1 ? "md:col-span-2" : "md:col-span-1")}
          onClick={item.link ? () => window.open(item.link, "_blank") : undefined}
          style={{ cursor: item.link ? 'pointer' : 'default' }}
        />
      ))}
    </BentoGrid>
  );
}