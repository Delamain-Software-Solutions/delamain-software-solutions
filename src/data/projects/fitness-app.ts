import { Project } from "../projectsData";

const images = import.meta.glob('@/assets/projects/fitness-app/*.{jpg,png,jpeg,webp}', {
    eager: true,
    query: '?url',
    import: 'default'
});

const getImageUrl = (name: string) => {
    return (images[`/src/assets/projects/fitness-app/${name}.png`] ||
        images[`/src/assets/projects/fitness-app/${name}.jpg`] ||
        images[`/src/assets/projects/fitness-app/${name}.jpeg`] ||
        images[`/src/assets/projects/fitness-app/${name}.webp`]) as string;
};

export const fitnessAppProject: Project = {
    slug: "alphafitness-mobile-app",
    client: "AlphaFitness Zone",
    year: "2025",
    scopeOfWork: [
        "UI/UX Design",
        "Mobile App Design",
        "User Journey Mapping"
    ],
    techStack: ["Kotlin", "Android Studio"],
    industry: "Health & Fitness",
    title: "AlphaFitness Mobile App",
    description:
        "AlphaFitness Mobile App is a modern and premium mobile fitness application designed for a local gym to enhance their members' workout experience. The app provides a comprehensive dashboard for user progress tracking, goal management, and seamless class scheduling. Members can monitor their fitness streaks, log daily tasks, and explore exclusive premium features, all within a sleek, dynamic, and high-performance dark-mode interface.",
    thumbnail: getImageUrl('cover'),
    thumbnailDescription:
        "A premium fitness app made for a local gym with features like workout progress tracking, an interactive dashboard, and a modern dark UI.",
    images: [
        // {
        //     src: getImageUrl('1'),
        //     title: "Landing Page",
        //     description:
        //         "The landing page incorporates a high-energy athletic design with dynamic visual elements and neon accents on a dark background. It clearly presents the core value proposition of the gym, enticing users with a clear and modern onboarding experience.",
        //     bulletHeading: "Key Features",
        //     bullets: [
        //         "High-conversion hero section with vibrant typography",
        //         "Dynamic athlete background for increased engagement",
        //         "Streamlined modern UI for smooth onboarding",
        //         "Dark mode aesthetics with energetic neon accents"
        //     ],
        // },
        // {
        //     src: getImageUrl('2'),
        //     title: "User Dashboard",
        //     description:
        //         "The dashboard provides an all-in-one view for fitness enthusiasts, highlighting their daily progress and activities. From streak tracking to fitness statistics and daily workout tasks, the UI utilizes premium glassmorphism effects to organize data clearly without feeling cluttered.",
        //     bulletHeading: "Key Features",
        //     bullets: [
        //         "Calendar streak days and progress tracking",
        //         "Interactive fitness stats rings and daily summaries",
        //         "Personalized daily workout task list",
        //         "Premium glassmorphism cards and layout"
        //     ],
        // },
        // {
        //     src: getImageUrl('3'),
        //     title: "Premium Paywall",
        //     description:
        //         "Designed to maximize conversions, the premium paywall clearly outlines the benefits of upgrading. The sleek dark mode design is elevated with gold and neon accents, drawing attention to flexible membership pricing tiers and exclusive unlockable features.",
        //     bulletHeading: "Key Features",
        //     bullets: [
        //         "Clear membership pricing tiers (monthly/annual options)",
        //         "Detailed list of unlockable pro features",
        //         "Gold and neon accents emphasizing premium value",
        //         "High-converting button placement and sleek layout"
        //     ],
        // }
    ].filter(img => img.src),
};
