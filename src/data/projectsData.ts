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


export type Project = {
  id: number;
  title: string;
  slug: string;
  category: string;
  fullDescription: string;
  thumbnail: string;
  images: string[];
  size: number;
  align: 'start' | 'end' | 'center';
  technologies: string[];
  highlights: string[];
  results: Record<string, string>;
  duration: string;
  team: string;
  year: string;
  demoLink?: string;
  codeLink?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Accounting Assistant",
    slug: "accounting-assistant",
    category: "FinTech & Automation", 
    fullDescription: "An intelligent financial automation tool that revolutionizes accounting workflows by automatically generating balance sheets and income statements from Excel transaction data. Uses advanced algorithms to categorize transactions and ensure compliance with accounting standards.",
    thumbnail: accountingImage,
    images: [accountingImage, accountingImage, accountingImage],
    size: 5,
    align: "center",
    technologies: ["Python", "Pandas", "React", "Machine Learning", "Excel API", "AWS"],
    highlights: ["Excel integration", "Auto categorization", "Compliance ready", "Real-time processing"],
    results: {
      "Efficiency": "Reduced manual data entry and report generation from hours to minutes",
      "Error Reduction": "Minimized human mistakes in transaction categorization through automated checks.",
      "Clarity": "Enabled real-time financial insights for quicker business decision-making."
    },
    duration: "3 months",
    team: "3 developers",
    year: "2024",
  },
  {
    id: 2,
    title: "Anime Persona Matcher",
    slug: "anime-persona-matcher",
    category: "Big Data & AI/ML",
    fullDescription: "A sophisticated big data application leveraging multiple machine learning models to match users with anime characters based on personality analysis. Features advanced quiz algorithms, character database with 10,000+ entries, and personality profiling using psychometric principles.",
    thumbnail: animeMatcherImage,
    images: [animeMatcherImage, animeMatcherImage],
    size: 7,
    align: "end",
    technologies: ["Python", "TensorFlow", "React", "MongoDB", "Neo4j", "Docker"],
    highlights: ["ML personality matching", "10K+ character database", "Advanced analytics", "Real-time recommendations"],
    results: {
      "Speed": "Deliver instant results with sub-second response time.",
      "Scale": "Efficiently handles 10,000+ character dataset.",
      "Accuracy": "Improved match precision using psychometric-based ML models."
    },
    duration: "2 months", 
    team: "3 developers",
    year: "2024",
  },
  {
    id: 3,
    title: "Break Into PCs - PC and Games Marketplace",
    slug: "break-into-pcs",
    category: "Computers and Gaming",
    fullDescription: "A cutting-edge e-commerce platform specifically for gamers. With features like an integrated tech blog and a bespoke PC builder for customizing components, the project's main goal was to provide an easy-to-use user experience. Although it is mostly front-end oriented, it has some backend support for necessary features.",
    thumbnail: breakIntoPcImage,
    images: Object.values(breakIntoPcImages) as string[],
    size: 9,
    align: "end",
    technologies: ["Next.js", "MongoDB", "TypeScript", "Framer Motion"],
    highlights: ["Custom PC Builder", "Tech Blog", "Modern Design", "Product Catalog"],
    results: {
      "Product Discovery": "Simplified browsing and filtering for gaming components.",
      "Configuration": "Quick and easy custom PC configuration.",
      "Maintenance": "Modular architecture for easier updates and management."
    },
    duration: "2 weeks",
    team: "3 developers",
    year: "2024"
  },
  {
    id: 4,
    title: "Trackio",
    slug: "trackio",
    category: "SaaS & Productivity",
    fullDescription: "A comprehensive web-based time and expense tracking application designed specifically for freelancers and small businesses. Features automated time tracking, project management, expense categorization, and detailed reporting with seamless invoice generation.",
    thumbnail: trackioImage,
    images: [trackioImage, trackioImage, trackioImage, trackioImage],
    size: 4,
    align: "center",
    technologies: ["React", "Node.js", "PostgreSQL", "TypeScript", "Stripe", "WebRTC"],
    highlights: ["Real-time tracking", "Invoice automation", "Multi-project support", "Team collaboration"],
    results: {
      "Error Reduction": "Reduced tracking errors with real-time monitoring.",
      "Efficiency": "Automated invoice generation saves hours of manual work.",
      "Collaboration": "Enabled smooth multi-project collaboration for teams."
    },
    duration: "5 months",
    team: "5 developers", 
    year: "2023",
    codeLink: "https://github.com/example/trackio"
  },
  {
    id: 5,
    title: "Alpha Care Education - An Online Course Platform",
    slug: "alpha-care-education",
    category: "E-Learning & Education",
    fullDescription: "A full-stack web application built with React and Supabase, designed to connect students and instructors seamlessly. Students can securely access purchased courses, watch video lectures, complete quizzes and labs, and track their learning progress. Instructors can create, organize, and manage course content with videos, quizzes, and labs. The platform also features a professional home page to showcase featured courses and platform information, offering a complete end-to-end solution for online learning.",
    thumbnail: alphaCareImage,
    images: Object.values(alphaCareImages) as string[],
    size: 10, 
    align: "center",
    technologies: ["React", "Supabase", "Supabase Auth", "ShadCN UI", "Vite"],
    highlights: [
      "Secure student and instructor dashboards",
      "Video lectures with progress tracking",
      "Interactive quizzes and practical labs",
      "Course creation and content management tools"
    ],
    results: {
      experience: "Smooth and intuitive learning experience across devices",
      reliability: "Stable content delivery and consistent platform performance",
      engagement: "Designed to encourage continuous learning and interaction"
    },
    duration: "1 month",
    team: "2 developers",
    year: "2025"
  },
  {
    id: 6,
    title: "Weather Forecast Application",
    slug: "weather-forecast-application",
    category: "Desktop & Utilities",
    fullDescription: "A JavaFX-based desktop weather application that delivers real-time weather data using the OpenWeather API. Features include a 5-day forecast, air quality index monitoring, pollutant-level insights, and location-based weather detection. User preferences are stored in a MySQL database, with support for city and coordinate-based searches. The application also includes an email notification service and intelligent caching to reduce unnecessary API requests.",
    thumbnail: weatherAppImage,
    images: Object.values(weatherAppImages) as string[],
    size: 6,
    align: "center",
    technologies: ["Java", "JavaFX", "MySQL", "OpenWeather API"],
    highlights: [
      "Real-time weather data",
      "5-day forecast",
      "Air quality monitoring",
      "Location-based detection"
    ],
    results: {
      performance: "Reduced redundant API calls by caching data",
      reliability: "Consistent real-time data delivery",
      usability: "Faster city-based weather lookup across the globe"
    },
    duration: "2 weeks",
    team: "3 developers",
    year: "2023"
  },
  {
    id: 7,
    title: "Dumpster Rental Application",
    slug: "dumpster-rental-application",
    category: "Logistics & Services",
    fullDescription:
      "A full-stack web application designed for waste-management and dumpster rental companies. The platform streamlines daily dispatch operations with an advanced drag-and-drop scheduling system for deliveries, pickups, and swaps. It includes customer management, order handling, driver assignment, real-time truck schedules, dynamic time-slot management, and automated invoice generation. The system provides a highly responsive UI, optimized data queries, and precise business logic for logistics workflows.",
    thumbnail: dumpsterAppImage,
    images: Object.values(dumpsterAppImages) as string[],
    size: 10,
    align: "center",
    technologies: [
      "React",
      "Node.js",
      "Supabase",
      "Clover API",
      "Adobe EchoSign API",
    ],
    highlights: [
      "Drag-and-drop truck scheduling grid",
      "Time-slot based automated dispatching",
      "Dynamic invoice PDF generation",
      "Optimized Postgres schema for logistics workflows"
    ],
    results: {
      workflow:
        "Reduced dispatcher workload by enabling instant scheduling and order assignment.",
      efficiency:
        "Improved daily routing efficiency with clear visual time-slot planning.",
      reliability:
        "Consistent and accurate dispatch management with timezone-safe scheduling."
    },
    duration: "4-6 weeks",
    team: "2 developers",
    year: "2025"
  }
];
