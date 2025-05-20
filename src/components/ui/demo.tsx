import React from 'react'; // Added React import to prevent linting errors
import { BentoGrid, type BentoItem } from './bento-grid'; // Corrected path and type
import { // Ensure these icons are used if this demo component is used, or similar ones for actual data
    CheckCircle,
    Clock,
    Star,
    TrendingUp,
    Video,
    Globe,
} from "lucide-react";

const itemsSample: BentoItem[] = [
    {
        title: "Analytics Dashboard",
        meta: "v2.4.1",
        description:
            "Real-time metrics with AI-powered insights and predictive analytics",
        icon: <TrendingUp className="w-4 h-4 text-blue-500" />,
        status: "Live",
        tags: ["Statistics", "Reports", "AI"],
        colSpan: 2,
        hasPersistentHover: true,
    },
    {
        title: "Task Manager",
        meta: "84 completed",
        description: "Automated workflow management with priority scheduling",
        icon: <CheckCircle className="w-4 h-4 text-emerald-500" />,
        status: "Updated",
        tags: ["Productivity", "Automation"],
        colSpan: 1, // Example: ensure colSpan logic is followed for 2-3 layout
    },
    {
        title: "Media Library",
        meta: "12GB used",
        description: "Cloud storage with intelligent content processing",
        icon: <Video className="w-4 h-4 text-purple-500" />,
        tags: ["Storage", "CDN"],
        colSpan: 1, // Example
    },
    {
        title: "Global Network",
        meta: "6 regions",
        description: "Multi-region deployment with edge computing",
        icon: <Globe className="w-4 h-4 text-sky-500" />,
        status: "Beta",
        tags: ["Infrastructure", "Edge"],
        colSpan: 1, // Example
    },
     { // Added a 5th item for the 2-3 layout
        title: "Star Project",
        meta: "Top rated",
        description: "A highly acclaimed project with excellent feedback.",
        icon: <Star className="w-4 h-4 text-yellow-500" />,
        status: "Featured",
        tags: ["Innovation", "Featured"],
        colSpan: 1, // Example
    },
];

// This demo component is for illustrative purposes.
// The main integration will happen in src/app/page.tsx using actual projectData.
function BentoGridDemo() {
    return <BentoGrid items={itemsSample} />;
}

export { BentoGridDemo };