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
    slug: "heqi-education-platform",
    client: "HEQI Edu Consultancy",
    year: "2025",
    scopeOfWork: ["Education Platform", "Service Portfolios", "Client Portals"],
    techStack: ["Next.js", "TypeScript", "Sanity CMS", "Framer Motion"],
    industry: "Education & Training",
    title: "HEQI Education Consultant Website",
    description:
        "HEQI is a web platform created for an education consultancy based in Hong Kong. It establishes an online presence for the consultancy and enables seamless content management through an intuitive admin panel.",
    thumbnail: getImageUrl('cover'),
    thumbnailDescription:
        "Offers a static website experience while allowing dynamic updates to content, ensuring flexibility to adapt to changing needs.",
    images: [
        {
            src: getImageUrl('1'),
            title: "Consultant Business Services",
            description: "The website highlights the services provided by the HEQI Education Consultancy, including past success stories and their approach to delivering results.",
        },
        {
            src: getImageUrl('2'),
            title: "Success stories and Steps",
            description: "Showcasing successful case studies and insights into the education industry.",
        },
        {
            src: getImageUrl('3'),  
            title: "Admin Portal",
            description: "The admin portal provides a secure and user-friendly interface for managing the list of universities and other related information, that is shown in the main website.",
        },
    ].filter(img => img.src),
};
