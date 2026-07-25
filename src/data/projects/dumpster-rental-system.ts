import { Project } from "../projectsData";

const images = import.meta.glob('@/assets/projects/dumpster-rental-system/*.{jpg,png,jpeg,webp}', {
    eager: true,
    query: '?url',
    import: 'default'
});

const getImageUrl = (name: string) => {
    return (images[`/src/assets/projects/dumpster-rental-system/${name}.png`] ||
        images[`/src/assets/projects/dumpster-rental-system/${name}.jpg`] ||
        images[`/src/assets/projects/dumpster-rental-system/${name}.jpeg`] ||
        images[`/src/assets/projects/dumpster-rental-system/${name}.webp`]) as string;
};

export const dumpsterRentalSystemProject: Project = {
    slug: "dumpster-rental-system",
    client: "Dumpster Rental & Waste Logistics Company",
    year: "2026",
    scopeOfWork: ["Dispatch Scheduling", "Order Management", "CRM", "Invoice Automation", "Fleet Tracking"],
    techStack: ["React", "Node.js", "Express", "Supabase", "Pusher"],
    industry: "Logistics & Waste Management",
    title: "Dumpster Rental System",
    description:
        "A full-stack SaaS operations platform built for a dumpster rental and waste logistics business, digitizing and centralizing its entire daily workflow. It covers dispatch scheduling, order management, customer and vendor CRM, automated invoicing, and real-time fleet tracking in one production-grade application built with React, Node.js, Express, and Supabase. The platform replaced a manual, spreadsheet-and-phone-call operation with a live drag-and-drop dispatch board, automatic invoicing on job completion, and a searchable CRM, cutting dispatch errors and billing delays after go-live.",
    thumbnail: getImageUrl('cover'),
    thumbnailDescription:
        "A centralized operations dashboard giving dispatchers a live view of active jobs, revenue, and dumpster inventory.",
    images: [
        {
            src: getImageUrl('1'),
            title: "Operations Dashboard",
            description: "The central dashboard gives staff a live overview of the business: pending, scheduled, and completed orders, total revenue, monthly order volume, and real-time dumpster inventory by size, all in one view, with quick search and customer or order creation built in.",
        },
        {
            src: getImageUrl('2'),
            title: "Create Order",
            description: "A guided order creation flow that captures the customer, job address, dumpster size, service zone, and delivery window, then calculates pricing automatically from tonnage, zone fees, and any additional charges before the order is confirmed.",
        },
        {
            src: getImageUrl('3'),
            title: "Driver Dispatch Board",
            description: "A drag-and-drop dispatch board where unassigned pickup and delivery orders are scheduled directly onto trucks and time slots, giving dispatchers a live, day-by-day view of the full fleet schedule.",
        },
        {
            src: getImageUrl('4'),
            title: "Orders List",
            description: "A complete, searchable view of every order with customer, size, price, service type, delivery or pickup date, and both order and payment status, so staff can track the full lifecycle of every job at a glance.",
        },
        {
            src: getImageUrl('5'),
            title: "System Settings",
            description: "A configuration panel for the business itself: dumpster sizes and tonnage, pricing, service zones, placement options, time slots, service types, and materials, letting the operator tailor the platform to their exact workflow without a developer.",
        },
    ].filter(img => img.src),
};
