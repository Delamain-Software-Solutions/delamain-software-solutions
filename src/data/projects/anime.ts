import { Project } from "../projectsData";

// Dynamic image imports
const images = import.meta.glob('@/assets/projects/anime/*.{jpg,png,jpeg,webp}', {
    eager: true,
    query: '?url',
    import: 'default'
});

const getImageUrl = (name: string) => {
    return (images[`/src/assets/projects/anime/${name}.png`] ||
        images[`/src/assets/projects/anime/${name}.jpg`] ||
        images[`/src/assets/projects/anime/${name}.jpeg`] ||
        images[`/src/assets/projects/anime/${name}.webp`]) as string;
};

export const animeProject: Project = {
    slug: "anime-persona-matcher",
    client: "Internal Product",
    year: "2024",
    scopeOfWork: ["Machine Learning", "Personality Analysis", "Big Data Processing"],
    techStack: ["Python", "TensorFlow", "React", "SQL", "Docker"],
    industry: "Entertainment & Big Data",
    title: "Anime Persona Matcher",
    description:
        "A personality-based recommendation system that matches users with anime characters using quiz-driven analysis and machine learning models. Built to handle large character datasets with fast, real-time inference.",
    thumbnail: getImageUrl('cover'),
    thumbnailDescription:
        "An AI-powered personality matching interface connecting users with anime characters based on behavioral traits.",
    images: [
        {
            src: getImageUrl('1'),
            title: "Personality Assessment",
            description: "Quiz-driven character matching system. The user gives a short quiz and is asked about his behavorial traits.",
        },
        {
            src: getImageUrl('2'),
            title: "Large Scale Datasets",
            description: "Fast real-time character inference and management. The system is built to handle large datasets of anime characters and their traits.",
        },
        {
            src: getImageUrl('3'),
            title: "Psychometric Analysis",
            description: "User trait analysis based on behavioral metrics. The system uses its algorithm to analyze the user's answers and determine his personality traits and matches them to the huge dataset of the anime characters.",
        },
    ].filter(img => img.src),
};
