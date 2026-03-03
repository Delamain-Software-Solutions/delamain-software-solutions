import { Project } from "../projectsData";

const images = import.meta.glob('@/assets/projects/dumpster-rental-app/*.{jpg,png,jpeg,webp}', {
    eager: true,
    query: '?url',
    import: 'default'
});

const getImageUrl = (name: string) => {
    return (images[`/src/assets/projects/dumpster-rental-app/${name}.png`] ||
        images[`/src/assets/projects/dumpster-rental-app/${name}.jpg`] ||
        images[`/src/assets/projects/dumpster-rental-app/${name}.jpeg`] ||
        images[`/src/assets/projects/dumpster-rental-app/${name}.webp`]) as string;
};

export const dumpsterProject: Project = {
    slug: "dumpster-rental-management-system",
    client: "America's Bin Company",
    year: "2026",
    scopeOfWork: ["Logistics Systems", "Truck Dispatch Systems", "Scheduling Tools", "Invoice Automation", "Payment Processing"],
    techStack: ["React", "Node.js", "Supabase", "Clover API", "Adobe EchoSign API"],
    industry: "Logistics & Waste Management",
    title: "Dumpster Rental Management System",
    description:
        "A full-stack logistics platform designed for a dumpster rental company. Provides drag-and-drop dispatch scheduling, customer and order management, automated invoicing, and real-time truck planning.",
    thumbnail: getImageUrl('cover'),
    thumbnailDescription:
        "A logistics management dashboard built for scheduling, dispatching, and billing operations.",
    images: [
        {
            src: getImageUrl('1'),
            title: "Create Orders",
            description: "A comprehensive interface to create new orders, capture customer information, and configure job-specific details including pricing and delivery locations.",
            bulletHeading: "Key Features",
            bullets: [
                "Detailed customer information capture",
                "Job address and location mapping",
                "Advanced pricing configurations"
            ]
        },
        {
            src: getImageUrl('2'),
            title: "Dispatch Board",
            description: "A central dispatch board designed for operational efficiency, providing a clear overview to manage dispatch schedules and monitor fleet performance.",
            bulletHeading: "Key Features",
            bullets: [
                "Interactive board for assigned tasks",
                "Real-time dispatch updates",
                "Efficiency and route tracking"
            ]
        },
        {
            src: getImageUrl('3'),
            title: "Orders List",
            description: "A complete tabular view of all active and past orders, alongside essential data like customer lists and current dumpster inventories for capacity planning.",
            bulletHeading: "Key Features",
            bullets: [
                "Searchable and filterable orders list",
                "Detailed customer records",
                "Live dumpster inventory status"
            ]
        },
    ].filter(img => img.src),
};
