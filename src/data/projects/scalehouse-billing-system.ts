import { Project } from "../projectsData";

const images = import.meta.glob('@/assets/projects/scalehouse-billing-system/*.{jpg,png,jpeg,webp}', {
    eager: true,
    query: '?url',
    import: 'default'
});

const getImageUrl = (name: string) => {
    return (images[`/src/assets/projects/scalehouse-billing-system/${name}.png`] ||
        images[`/src/assets/projects/scalehouse-billing-system/${name}.jpg`] ||
        images[`/src/assets/projects/scalehouse-billing-system/${name}.jpeg`] ||
        images[`/src/assets/projects/scalehouse-billing-system/${name}.webp`]) as string;
};

export const scalehouseBillingSystemProject: Project = {
    slug: "scalehouse-billing-system",
    client: "Waste & Recycling Yard",
    year: "2026",
    scopeOfWork: ["Weighbridge Billing", "Hardware Integration", "Reporting & Analytics", "Dashboard Development"],
    techStack: ["React", "Node.js", "Express", "Supabase"],
    industry: "Recycling & Waste Management",
    title: "Scalehouse Billing System",
    description:
        "A full-stack weighbridge billing platform built for a waste and recycling yard to digitize and automate its truck weighing and billing operation. The system handles two distinct workflows, incoming trucks delivering waste material and outgoing trucks collecting recycled material, each with its own weight capture process, billing logic, and invoicing flow, tied directly into the yard's weighbridge hardware. It replaced a fully manual process of handwritten weights and after-the-fact invoicing with automated hardware-driven weight capture, instant billing on job completion, and a live operational dashboard the yard manager never had before.",
    thumbnail: getImageUrl('cover'),
    thumbnailDescription:
        "A management console for truck weighing and billing, with real-time scale integration and automated invoicing.",
    images: [
        {
            src: getImageUrl('1'),
            title: "Dashboard & Realtime Controls",
            description: "The core operational dashboard provides direct controls for creating new tickets and monitoring active dispatches, with a real-time display of connected weighbridge scales so operators can oversee live weights without leaving the main interface.",
            bulletHeading: "Key Features",
            bullets: [
                "Direct weighbridge hardware integration for automated weight capture",
                "Real-time scale data display",
                "Quick ticket creation and management",
                "Live task and dispatch overview",
            ],
        },
        {
            src: getImageUrl('2'),
            title: "Customer & Vendor Management",
            description: "A dedicated CRM section for handling all customer and vendor data. Administrators can add, edit, or delete records, ensuring contacts and company details are always up to date and accessible for ticketing.",
            bulletHeading: "Key Features",
            bullets: [
                "Comprehensive customer and vendor database",
                "Streamlined data entry workflows",
                "Quick search and filtering options",
            ],
        },
        {
            src: getImageUrl('3'),
            title: "Report Generation Center",
            description: "The reports page offers deep insight into operational metrics. Users can build custom templates and generate reports covering ticket volumes, weights, and financial summaries, filterable by date, customer, material, and driver.",
            bulletHeading: "Key Features",
            bullets: [
                "Custom report template creation",
                "Automated data aggregation",
                "Exportable operations summaries",
                "Granular filtering by date, customer, and material",
            ],
        },
        {
            src: getImageUrl('4'),
            title: "System Settings",
            description: "A centralized settings interface controlling the global configuration of the platform, including rate structures, charge rules, and hardware connections, so the system matches the yard's exact billing logic.",
            bulletHeading: "Key Features",
            bullets: [
                "Global application configuration",
                "Rate structure and charge rule management",
                "Hardware and scale connection settings",
            ],
        },
    ].filter(img => img.src),
};
