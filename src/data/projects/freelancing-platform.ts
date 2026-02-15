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
    slug: "skillforge",
    client: "Personal Project",
    year: "2025",
    scopeOfWork: [
        "Product Design",
        "Frontend Development",
        "Role-Based System",
        "Workflow Design"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Radix UI", "Socket API"],
    industry: "Freelancing & Professional Services",
    title: "SkillForge",
    description:
        "SkillForge is a dual-mode freelancing platform interface designed to serve both clients and freelancers within a unified application. A global role toggle dynamically adapts navigation, dashboards, and workflows based on the active user perspective. Clients can post projects with milestone-based budgeting, discover talent, and track project progress, while freelancers can browse opportunities, manage proposals, and monitor earnings. Built with a component-driven architecture, the platform emphasizes clarity, intuitive navigation, and professional visual consistency, with strong focus on financial transparency and milestone progress visualization.",
    thumbnail: getImageUrl('cover'),
    thumbnailDescription:
        "A professional freelancing platform showcasing role-based dashboards, milestone tracking, and integrated communication tools.",
    images: [
        {
            src: getImageUrl('1'),
            title: "Client Dashboard",
            description:
                "The client dashboard acts as a centralized overview for managing posted jobs and ongoing projects. It presents activity summaries, project progress indicators, and proposal tracking within a structured card-based layout. The interface enables quick navigation between project stages while maintaining a clear visual hierarchy and includes a seamless role toggle for switching user perspectives.",
            bulletHeading: "Key Features",
            bullets: [
                "Search-enabled dashboard for filtering jobs and projects",
                "Posted jobs section displaying proposal counts and budgets",
                "Ongoing projects list with visual progress tracking",
                "Archived project history with completion summaries",
                "Integrated Post Job action for quick project creation"
            ],
        },
        {
            src: getImageUrl('2'),
            title: "Post Job",
            description:
                "The Post Job interface provides a guided workflow that helps clients define project requirements with precision. The form dynamically suggests relevant skills based on selected categories and includes a milestone manager for structuring budgets and deliverables. A contextual freelancer recommendation panel supports instant talent discovery during project creation.",
            bulletHeading: "Key Features",
            bullets: [
                "Category-driven job form with dynamic skill suggestions",
                "Milestone manager with editable phases and budget allocation",
                "Automatic total budget calculation",
                "Recommended freelancer sidebar filtered by category",
                "Freelancer cards displaying ratings, rates, and skill highlights"
            ],
        },
        {
            src: getImageUrl('3'),
            title: "Client Project Detail",
            description:
                "The project detail view consolidates project management, financial tracking, and communication tools into a single workspace. It highlights budget allocation, payment status, and milestone progress through visual timelines and structured data panels, enabling clients to manage project execution efficiently.",
            bulletHeading: "Key Features",
            bullets: [
                "Financial overview displaying budget, payments, escrow, and progress",
                "Visual milestone timeline with completion indicators",
                "Payment history table with status tracking",
                "Freelancer profile sidebar with ratings and skill summary",
                "Inline chat preview for direct project communication"
            ],
        },
        {
            src: getImageUrl('4'),
            title: "Find Work (Freelancer Dashboard)",
            description:
                "The freelancer dashboard is designed for efficient job discovery and project monitoring. It combines performance analytics, categorized job feeds, and active project tracking within a streamlined layout, helping freelancers manage opportunities and ongoing work simultaneously.",
            bulletHeading: "Key Features",
            bullets: [
                "Performance stats bar displaying earnings, success rate, and ratings",
                "Category filter tabs for targeted job browsing",
                "Detailed job cards showing client info, budgets, and skill requirements",
                "Active projects sidebar with real-time progress indicators",
                "Quick apply functionality for faster proposal submission"
            ],
        },
        {
            src: getImageUrl('5'),
            title: "Freelancer Project Detail",
            description:
                "This view mirrors the client project interface but focuses on freelancer workflows and earnings visibility. It prioritizes work submission actions, milestone progress, and payment tracking while providing contextual client details and communication tools.",
            bulletHeading: "Key Features",
            bullets: [
                "Earnings-focused financial summary with escrow tracking",
                "Submit Work and contract management controls",
                "Milestone tracker with revision and delivery indicators",
                "Client profile sidebar with ratings and project history",
                "Integrated messaging preview for direct collaboration"
            ],
        },
        {
            src: getImageUrl('6'),
            title: "My Proposals",
            description:
                "The proposals dashboard provides freelancers with a structured overview of submitted applications. It highlights bid comparisons, proposal status tracking, and submission history, allowing users to monitor performance and refine bidding strategies.",
            bulletHeading: "Key Features",
            bullets: [
                "Proposal cards showing job details and client information",
                "Color-coded status badges for proposal tracking",
                "Bid-to-budget comparison insights",
                "Cover letter preview snippets for quick review",
                "Category tags for application context organization"
            ],
        },
    ].filter(img => img.src),
};
