import { Project } from "../projectsData";

const images = import.meta.glob('@/assets/projects/heqi/*.{jpg,png,jpeg,webp}', {
    eager: true,
    query: '?url',
    import: 'default'
});

const getImageUrl = (name: string) => {
    return (images[`/src/assets/projects/heqi/${name}.png`] ||
        images[`/src/assets/projects/heqi/${name}.jpg`] ||
        images[`/src/assets/projects/heqi/${name}.jpeg`] ||
        images[`/src/assets/projects/heqi/${name}.webp`]) as string;
};

export const heqiProject: Project = {
    slug: "heqi-industrial-solutions",
    client: "HEQI Heavy Industries",
    year: "2025",
    scopeOfWork: ["Industrial Web Design", "Service Portfolios", "Client Portals"],
    techStack: ["Next.js", "TypeScript", "Sanity CMS", "Framer Motion"],
    industry: "Industrial Manufacturing",
    title: "HEQI Heavy Industries Digital Presence",
    description:
        "A sophisticated digital environment for HEQI, showcasing their industrial expertise and large-scale manufacturing capabilities. Includes service catalogs, case studies, and partner portals.",
    thumbnail: getImageUrl('cover'),
    thumbnailDescription:
        "A professional corporate portal highlighting heavy industrial solutions and manufacturing power.",
    images: [
        {
            src: getImageUrl('1'),
            title: "Industrial Portfolio",
            description: "Detailed catalog of heavy machinery and manufacturing services.",
        },
        {
            src: getImageUrl('2'),
            title: "Case Study Insights",
            description: "Showcasing successful large-scale industrial projects globally.",
        },
        {
            src: getImageUrl('3'),
            title: "Technical Documentation",
            description: "Integrated resource center for partners and industrial clients.",
        },
    ].filter(img => img.src),
};
