import { Project } from "../projectsData";

const images = import.meta.glob('@/assets/projects/weather-app/*.{jpg,png,jpeg,webp}', {
    eager: true,
    query: '?url',
    import: 'default'
});

const getImageUrl = (name: string) => {
    return (images[`/src/assets/projects/weather-app/${name}.png`] ||
        images[`/src/assets/projects/weather-app/${name}.jpg`] ||
        images[`/src/assets/projects/weather-app/${name}.jpeg`] ||
        images[`/src/assets/projects/weather-app/${name}.webp`]) as string;
};

export const weatherProject: Project = {
    slug: "weather-forecast-application",
    client: "Internal",
    year: "2025",
    scopeOfWork: ["Desktop Application", "API Integration", "Data Persistence"],
    techStack: ["Java", "JavaFX", "MySQL", "OpenWeather API"],
    industry: "Utilities & Weather Services",
    title: "Weather Forecast & Alert System",
    description:
        "A JavaFX desktop application providing real-time weather updates, 5-day forecasts, air quality metrics, and pollutant insights and weather alerts. Includes location-based detection, caching, and email notifications.",
    thumbnail: getImageUrl('cover'),
    thumbnailDescription:
        "A desktop weather application displaying real-time forecasts and air quality insights.",
    images: [
        {
            src: getImageUrl('1'),
            title: "Weather Alerts",
            description: "Realtime email alerts and desktop notifications for harsh weather conditions. Can be set for any number of locations.",
        },
    ].filter(img => img.src),
};
