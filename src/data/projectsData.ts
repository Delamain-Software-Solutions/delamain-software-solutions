import trackioImage from "@/assets/trackio-project.jpg";
import accountingImage from "@/assets/accounting-assistant-project.jpg";
import animeMatcherImage from "@/assets/anime-matcher-project.jpg";
import breakIntoPcImage from "@/assets/break-into-pc.webp";
import alphaCareImage from "@/assets/alpha-care-education.webp";
import weatherAppImage from "@/assets/weather-forecast-application.webp";
import dumpsterAppImage from "@/assets/dumpster-rental-application.webp";
// Dynamic image imports using Vite's glob
const breakIntoPcImages = import.meta.glob('@/assets/break-into-pc/*.{jpg,png,jpeg,webp}', { 
  eager: true, 
  query: '?url', 
  import: 'default' 
});
const alphaCareImages = import.meta.glob('@/assets/alpha-care-education/*.{jpg,png,jpeg,webp}', { 
  eager: true, 
  query: '?url', 
  import: 'default' 
});
const weatherAppImages = import.meta.glob('@/assets/weather-forecast-application/*.{jpg,png,jpeg,webp}', { 
  eager: true, 
  query: '?url', 
  import: 'default' 
});
const dumpsterAppImages = import.meta.glob('@/assets/dumpster-rental-application/*.{jpg,png,jpeg,webp}', { 
  eager: true, 
  query: '?url', 
  import: 'default' 
});


export type ProjectImage = {
  src: string;
  title: string;
  description: string;
  bulletHeading?: string;
  bullets?: string[];
};

export type Project = {
  slug: string;
  client: string;
  year: string;
  scopeOfWork: string[];
  techStack: string[];
  industry: string;
  liveLink?: string;
  title: string;
  description: string;
  thumbnail: string;
  thumbnailDescription: string;
  images: ProjectImage[];
};

export const projects: Project[] = [
  {
    slug: "accounting-assistant",
    client: "Internal Product",
    year: "2024",
    scopeOfWork: ["Financial Automation", "Data Processing", "Reporting Systems"],
    techStack: ["Python", "Pandas", "React", "Machine Learning", "Excel API", "AWS"],
    industry: "FinTech & Accounting",
    liveLink: "https://delamainsoftware.com/",
    title: "Accounting Assistant",
    description:
      "An intelligent financial automation tool designed to generate balance sheets and income statements directly from Excel transaction data. The system automatically categorizes entries and applies accounting rules to support structured, compliance-ready reporting.",
    thumbnail: accountingImage,
    thumbnailDescription:
      "A financial automation dashboard that converts raw Excel transaction data into structured accounting reports through intelligent categorization.",
    images: [
      {
        src: accountingImage,
        title: "Automated Financial Reporting",
        description:
          "Transforms Excel-based transaction data into organized financial statements with minimal manual input.",
        bulletHeading: "Core Capabilities",
        bullets: ["Excel data ingestion", "Automated categorization", "Real-time summaries"],
      },
    ],
  },

  {
    slug: "anime-persona-matcher",
    client: "Internal Product",
    year: "2024",
    scopeOfWork: ["Machine Learning", "Personality Analysis", "Big Data Processing"],
    techStack: ["Python", "TensorFlow", "React", "MongoDB", "Neo4j", "Docker"],
    industry: "Entertainment & AI",
    title: "Anime Persona Matcher",
    description:
      "A personality-based recommendation system that matches users with anime characters using quiz-driven analysis and machine learning models. Built to handle large character datasets with fast, real-time inference.",
    thumbnail: animeMatcherImage,
    thumbnailDescription:
      "An AI-powered personality matching interface connecting users with anime characters based on behavioral traits.",
    images: [
      {
        src: animeMatcherImage,
        title: "Personality-Based Matching",
        description:
          "Uses psychometric-style questions and ML models to determine character alignment.",
        bulletHeading: "System Highlights",
        bullets: [
          "Quiz-driven personality analysis",
          "Large-scale character dataset",
          "Graph-based relationship modeling",
        ],
      },
      {
        src: animeMatcherImage,
        title: "Personality-Based Matching",
        description:
          "Uses psychometric-style questions and ML models to determine character alignment.",
        bulletHeading: "System Highlights",
        bullets: [
          "Quiz-driven personality analysis",
          "Large-scale character dataset",
          "Graph-based relationship modeling",
        ],
      },
    ],
  },

  {
    slug: "break-into-pcs",
    client: "Break Into PCs",
    year: "2024",
    scopeOfWork: ["Frontend Development", "UI/UX Design", "E-commerce Interfaces"],
    techStack: ["Next.js", "MongoDB", "TypeScript", "Framer Motion"],
    industry: "Gaming & E-commerce",
    title: "Break Into PCs Marketplace",
    description:
      "A gamer-focused e-commerce platform featuring a custom PC builder, product catalog, and integrated tech blog. The project prioritizes usability, performance, and a visually engaging shopping experience.",
    thumbnail: breakIntoPcImage,
    thumbnailDescription:
      "A gaming marketplace interface featuring custom PC configuration and modern storefront design.",
    images: Object.values(breakIntoPcImages).map((img) => ({
      src: img as string,
      title: "Custom PC Builder",
      description:
        "Allows users to configure PC components interactively with real-time visual feedback.",
    })),
  },

  {
    slug: "trackio",
    client: "Internal Product",
    year: "2023",
    scopeOfWork: ["SaaS Development", "Billing Systems", "Collaboration Tools"],
    techStack: ["React", "Node.js", "PostgreSQL", "TypeScript", "Stripe", "WebRTC"],
    industry: "SaaS & Productivity",
    title: "Trackio",
    description:
      "A web-based time and expense tracking application built for freelancers and small teams. Includes project tracking, expense categorization, and automated invoice generation within a collaborative workspace.",
    thumbnail: trackioImage,
    thumbnailDescription:
      "A productivity-focused SaaS dashboard for tracking time, expenses, and invoices across multiple projects.",
    images: [
      {
        src: trackioImage,
        title: "Time & Expense Tracking",
        description:
          "Tracks work sessions and expenses in real time with structured project grouping.",
        bulletHeading: "Platform Features",
        bullets: [
          "Live time tracking",
          "Invoice-ready reporting",
          "Multi-project workflows",
        ],
      },
    ],
  },

  {
    slug: "alpha-care-education",
    client: "Alpha Care",
    year: "2025",
    scopeOfWork: ["Full-Stack Development", "Learning Platforms", "Content Management"],
    techStack: ["React", "Supabase", "Supabase Auth", "ShadCN UI", "Vite"],
    industry: "E-Learning & Education",
    title: "Alpha Care Education Platform",
    description:
      "A full-featured online learning platform connecting students and instructors. Supports video-based courses, quizzes, labs, progress tracking, and instructor-led content management.",
    thumbnail: alphaCareImage,
    thumbnailDescription:
      "An online education platform designed for structured learning and instructor-led course delivery.",
    images: Object.values(alphaCareImages).map((img) => ({
      src: img as string,
      title: "Course Learning Interface",
      description:
        "Students can access lectures, complete assessments, and track learning progress in one place.",
      bulletHeading: "Learning Tools",
      bullets: [
        "Video lectures",
        "Quizzes and labs",
        "Progress tracking",
      ],
    })),
  },

  {
    slug: "weather-forecast-application",
    client: "Academic Project",
    year: "2023",
    scopeOfWork: ["Desktop Application", "API Integration", "Data Persistence"],
    techStack: ["Java", "JavaFX", "MySQL", "OpenWeather API"],
    industry: "Utilities & Weather Services",
    title: "Weather Forecast Application",
    description:
      "A JavaFX desktop application providing real-time weather updates, 5-day forecasts, air quality metrics, and pollutant insights. Includes location-based detection, caching, and email notifications.",
    thumbnail: weatherAppImage,
    thumbnailDescription:
      "A desktop weather application displaying real-time forecasts and air quality insights.",
    images: Object.values(weatherAppImages).map((img) => ({
      src: img as string,
      title: "Weather & Air Quality View",
      description:
        "Displays forecast data, AQI levels, and pollutant breakdowns in a clean desktop UI.",
      bulletHeading: "Application Features",
      bullets: [
        "5-day weather forecast",
        "Air quality index monitoring",
        "City and coordinate search",
      ],
    })),
  },

  {
    slug: "dumpster-rental-management-system",
    client: "Logistics Provider",
    year: "2025",
    scopeOfWork: ["Logistics Systems", "Scheduling Tools", "Invoice Automation"],
    techStack: ["React", "Node.js", "Supabase", "Clover API", "Adobe EchoSign API"],
    industry: "Logistics & Waste Management",
    title: "Dumpster Rental Management System",
    description:
      "A full-stack logistics platform designed for dumpster rental companies. Provides drag-and-drop dispatch scheduling, customer and order management, automated invoicing, and real-time truck planning.",
    thumbnail: dumpsterAppImage,
    thumbnailDescription:
      "A logistics management dashboard built for scheduling, dispatching, and billing operations.",
    images: Object.values(dumpsterAppImages).map((img) => ({
      src: img as string,
      title: "Dispatch & Scheduling Grid",
      description:
        "Visual scheduling system for managing deliveries, pickups, and swaps efficiently.",
      bulletHeading: "Operational Tools",
      bullets: [
        "Drag-and-drop scheduling",
        "Automated invoice generation",
        "Time-slot based dispatching",
      ],
    })),
  },
];
