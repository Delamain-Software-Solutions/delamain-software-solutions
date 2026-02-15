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
            title: "Scheduling Dashboard",
            description: "Interactive calendar for managing rentals, pickups and other types of services.",
        },
        {
            src: getImageUrl('2'),
            title: "Inventory Tracking",
            description: "Real-time updates on dumpster locations and availability. The system also tracks the inventory of dumpsters and their availability.",
        },
        {
            src: getImageUrl('3'),
            title: "Automated Billing",
            description: "Integrated invoicing and payment processing system. The system also handles the payment processing and billing for the customers.",
        },
    ].filter(img => img.src),
};
