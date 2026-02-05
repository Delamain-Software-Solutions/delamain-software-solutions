import { Project } from "../projectsData";

const images = import.meta.glob('@/assets/projects/freelancing-platform/*.{jpg,png,jpeg,webp}', {
    eager: true,
    query: '?url',
    import: 'default'
});

const getImageUrl = (name: string) => {
    return (images[`/src/assets/projects/freelancing-platform/${name}.png`] ||
        images[`/src/assets/projects/freelancing-platform/${name}.jpg`] ||
        images[`/src/assets/projects/freelancing-platform/${name}.jpeg`] ||
        images[`/src/assets/projects/freelancing-platform/${name}.webp`]) as string;
};

export const freelancingProject: Project = {
    slug: "freelancing-platform",
    client: "Global Marketplace",
    year: "2024",
    scopeOfWork: ["Marketplace Architecture", "Payment Integration", "User Verification"],
    techStack: ["React", "Next.js", "PostgreSQL", "Stripe API", "Firebase"],
    industry: "E-commerce & Freelance",
    title: "Next-Gen Freelancing Platform",
    description:
        "A comprehensive marketplace where clients can find and hire skilled veterans and professionals for diverse projects. Features integrated secure payments, real-time messaging, and profile verification.",
    thumbnail: getImageUrl('cover'),
    thumbnailDescription:
        "A modern marketplace interface showcasing skilled freelancers and available projects.",
    images: [
        {
            src: getImageUrl('1'),
            title: "Browse Talent",
            description: "Dynamic filters to discover specialized skills and expertise.",
        },
        {
            src: getImageUrl('2'),
            title: "Project Management",
            description: "Centralized hub for project milestones and communication.",
        },
        {
            src: getImageUrl('3'),
            title: "Secure Payments",
            description: "End-to-end encrypted transaction processing and escrow.",
        },
    ].filter(img => img.src),
};
