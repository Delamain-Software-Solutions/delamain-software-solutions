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
    client: "Academic Project",
    year: "2023",
    scopeOfWork: ["Desktop Application", "API Integration", "Data Persistence"],
    techStack: ["Java", "JavaFX", "MySQL", "OpenWeather API"],
    industry: "Utilities & Weather Services",
    title: "Weather Forecast Application",
    description:
        "A JavaFX desktop application providing real-time weather updates, 5-day forecasts, air quality metrics, and pollutant insights. Includes location-based detection, caching, and email notifications.",
    thumbnail: getImageUrl('cover'),
    thumbnailDescription:
        "A desktop weather application displaying real-time forecasts and air quality insights.",
    images: [
        {
            src: getImageUrl('1'),
            title: "Real-time Conditions",
            description: "Current weather details with temperature, humidity, and wind speed.",
        },
        {
            src: getImageUrl('2'),
            title: "5-Day Forecast",
            description: "Extended weather patterns and predicted conditions for travel planning.",
        },
        {
            src: getImageUrl('3'),
            title: "Air Quality Index",
            description: "Detailed pollutant data and safety recommendations based on AQI.",
        },
    ].filter(img => img.src),
};
