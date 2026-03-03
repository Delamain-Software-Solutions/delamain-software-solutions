import { Project } from "../projectsData";

const images = import.meta.glob('@/assets/projects/arc-scale-software/*.{jpg,png,jpeg,webp}', {
    eager: true,
    query: '?url',
    import: 'default'
});

const getImageUrl = (name: string) => {
    return (images[`/src/assets/projects/arc-scale-software/${name}.png`] ||
        images[`/src/assets/projects/arc-scale-software/${name}.jpg`] ||
        images[`/src/assets/projects/arc-scale-software/${name}.jpeg`] ||
        images[`/src/assets/projects/arc-scale-software/${name}.webp`]) as string;
};

export const arcScaleProject: Project = {
    slug: "arc-scale-software",
    client: "America's Recycling Company",
    year: "2026",
    scopeOfWork: [
        "Web Development",
        "API Integrations",
        "Dashboard Development",
        "Database Management"
    ],
    techStack: ["React", "TypeScript", "Express", "Node.js", "PostgreSQL"],
    industry: "Recycling & Waste Management",
    title: "ARC Scale Software",
    description:
        "ARC Scale Software is a comprehensive management panel designed specifically for truck weighing and dispatching operations, tailored for dumpster management. It provides a robust, real-time interface for operators to monitor connected scales, manage ticketing, maintain customer and vendor relationships, and generate detailed reports. Built with a focus on operational efficiency, the software streamlines complex logistical tasks into an intuitive, centralized dashboard.",
    thumbnail: getImageUrl('cover'),
    thumbnailDescription:
        "A robust management panel for truck weighing, dispatching, and dumpster tracking, featuring real-time scale integration.",
    images: [
        {
            src: getImageUrl('1'),
            title: "Dashboard & Realtime Controls",
            description:
                "The core operational dashboard provides direct controls for the creation of new tickets and monitoring of active dispatches. A standout feature is the real-time display of attached scales, allowing operators to oversee weights instantly without leaving the main interface.",
            bulletHeading: "Key Features",
            bullets: [
                "Real-time scale data integration",
                "Quick ticket creation and management",
                "Live task and dispatch overview",
                "Intuitive operational controls"
            ],
        },
        {
            src: getImageUrl('2'),
            title: "Customer & Vendor Management",
            description:
                "A dedicated CRM section for handling all customer and vendor data. This page allows administrators to easily add, edit, or delete records, ensuring that the necessary contacts and company details are always up-to-date and accessible for ticketing.",
            bulletHeading: "Key Features",
            bullets: [
                "Comprehensive customer database",
                "Vendor and supplier management",
                "Streamlined data entry workflows",
                "Quick search and filtering options"
            ],
        },
        {
            src: getImageUrl('3'),
            title: "Report Generation Center",
            description:
                "The reports page is designed to offer deep insights into operational metrics. Users can create custom templates and generate comprehensive reports covering ticket volumes, weights, financial summaries, and more, facilitating better business decisions.",
            bulletHeading: "Key Features",
            bullets: [
                "Custom report template creation",
                "Automated data aggregation",
                "Exportable operations summaries",
                "Granular filtering for specific data points"
            ],
        },
        {
            src: getImageUrl('4'),
            title: "System Settings",
            description:
                "A centralized settings management interface that controls the global configuration of the software. Users can adjust system preferences, manage hardware connections, and tailor the platform to their specific facility requirements.",
            bulletHeading: "Key Features",
            bullets: [
                "Global application configuration",
                "Hardware and scale connection settings",
                "User role and permission management",
                "Customizable interface preferences"
            ],
        }
    ].filter(img => img.src),
};
