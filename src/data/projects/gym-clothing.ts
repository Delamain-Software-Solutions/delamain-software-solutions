import { Project } from "../projectsData";

const images = import.meta.glob('@/assets/projects/gym-clothing/*.{jpg,png,jpeg,webp}', {
    eager: true,
    query: '?url',
    import: 'default'
});

const getImageUrl = (name: string) => {
    return (images[`/src/assets/projects/gym-clothing/${name}.png`] ||
        images[`/src/assets/projects/gym-clothing/${name}.jpg`] ||
        images[`/src/assets/projects/gym-clothing/${name}.jpeg`] ||
        images[`/src/assets/projects/gym-clothing/${name}.webp`]) as string;
};

export const gymClothingProject: Project = {
    slug: "gym-clothing-ecommerce",
    client: "ValorFit",
    year: "2026",
    scopeOfWork: ["E-commerce Development", "Brand Identity", "Storefront Optimization"],
    techStack: ["Python", "React", "Tailwind CSS", "FashN API", "Supabase"],
    industry: "Apparel & Health",
    title: "ValorFit E-commerce Website",
    description:
        "A sleek and high-performance online store for a gym-wear brand. The platform focuses on high-quality visual storytelling and a seamless, mobile-first shopping experience.",
    thumbnail: getImageUrl('cover'),
    thumbnailDescription:
        "An e-commerce website featuring premium gym apparel and athletic gear.",
    images: [
        {
            src: getImageUrl('1'),
            title: "Product Collections",
            description: "Organized categories with high-resolution imagery and videos. Each product has a Virtual try-on option, to test before buying on his own image.",
        },
        {
            src: getImageUrl('2'),
            title: "Dynamic Shopping Cart",
            description: "Optimized checkout flow to minimize abandonment and enhance UX. The cart is fully responsive and mobile-friendly.",
        },
        {
            src: getImageUrl('3'),
            title: "Mobile Shopping Experience",
            description: "Fully responsive design for seamless browsing across all devices.",
        },
    ].filter(img => img.src),
};
