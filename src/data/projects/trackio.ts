import { Project } from "../projectsData";

const images = import.meta.glob('@/assets/projects/trackio/*.{jpg,png,jpeg,webp}', {
    eager: true,
    query: '?url',
    import: 'default'
});

const getImageUrl = (name: string) => {
    return (images[`/src/assets/projects/trackio/${name}.png`] ||
        images[`/src/assets/projects/trackio/${name}.jpg`] ||
        images[`/src/assets/projects/trackio/${name}.jpeg`] ||
        images[`/src/assets/projects/trackio/${name}.webp`]) as string;
};

export const trackioProject: Project = {
    slug: "trackio",
    client: "Internal Tool",
    year: "2025",
    scopeOfWork: ["SaaS Development", "Billing Systems", "Collaboration Tools"],
    techStack: ["React", "Python", "PostgreSQL", "ReCaptcha", "Stripe"],
    industry: "SaaS & Productivity",
    title: "Trackio",
    description:
        "A web-based time and expense tracking application built for freelancers and small teams. Includes project tracking, income and expense tracking, and automated invoice generation.",
    thumbnail: getImageUrl('cover'),
    thumbnailDescription:
        "A productivity-focused SaaS dashboard for tracking time, expenses, and invoices across multiple projects.",
    images: [
        {
            src: getImageUrl('1'),
            title: "Time & Expense Tracking",
            description: "Tracks work sessions and expenses in real time with structured project grouping.",
        },
        {
            src: getImageUrl('2'),
            title: "Invoice Generation",
            description: "Convert billable hours into professional invoices with one click.",
        },
        {
            src: getImageUrl('3'),
            title: "Team Collaboration",
            description: "Manage multiple users and roles within a shared workspace.",
        },
    ].filter(img => img.src),
};
