export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  live: string;
}

export const projectsData: Project[] = [
  {
    title: "Portfolio",
    description: "Interactive portfolio with 3D animations",
    image: "/assets/projects-screenshots/portfolio.png",
    tags: ["Next.js", "TypeScript", "Three.js", "Framer Motion"],
    github: "https://github.com/drewsephski/portfolio",
    live: "#",
  },
  {
    title: "The Booking Desk",
    description: "Travel consultation hub with Sanity CMS",
    image: "/assets/projects-screenshots/the-booking-desk.png",
    tags: ["Next.js", "TypeScript", "Sanity CMS"],
    live: "#",
  },
  {
    title: "JNTUA Results Analyzer",
    description: "Result analyzer with Vue.js and TypeScript",
    image: "/assets/projects-screenshots/jra.png",
    tags: ["Vue.js", "TypeScript"],
    github: "https://github.com/Naresh-Khatri/JNTUA-result-analyser-spa",
    live: "#",
  },
  {
    title: "GhostChat",
    description: "Real-time chat application with Supabase",
    image: "/assets/projects-screenshots/ghostchat.png",
    tags: ["Next.js", "TypeScript", "Supabase"],
    github: "https://github.com/Naresh-Khatri/GhostChat",
    live: "#",
  },
  {
    title: "UI MCP",
    description: "Modern coupon marketplace with real-time updates",
    image: "/assets/projects-screenshots/ui-mcp.png",
    tags: ["Next.js", "TypeScript", "Supabase", "Firebase"],
    github: "https://github.com/drewsephski/ui-mcp",
    live: "#",
  }
];

export default projectsData;
