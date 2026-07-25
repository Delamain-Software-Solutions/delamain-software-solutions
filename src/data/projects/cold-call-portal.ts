import { Project } from "../projectsData";

const images = import.meta.glob('@/assets/projects/cold-call-portal/*.{jpg,png,jpeg,webp}', {
    eager: true,
    query: '?url',
    import: 'default'
});

const getImageUrl = (name: string) => {
    return (images[`/src/assets/projects/cold-call-portal/${name}.png`] ||
        images[`/src/assets/projects/cold-call-portal/${name}.jpg`] ||
        images[`/src/assets/projects/cold-call-portal/${name}.jpeg`] ||
        images[`/src/assets/projects/cold-call-portal/${name}.webp`]) as string;
};

export const coldCallPortalProject: Project = {
    slug: "cold-call-collaboration-portal",
    client: "Sales & Lead Generation Team",
    year: "2026",
    scopeOfWork: ["Real-Time Applications", "Serverless Architecture", "Cloud Infrastructure", "CI/CD Automation"],
    techStack: ["React", "AWS Lambda", "Amazon DynamoDB", "API Gateway", "WebSocket"],
    industry: "Sales & Lead Generation",
    title: "Cold Call Collaboration Portal",
    description:
        "A real-time lead management platform built for a sales team running simultaneous cold calling sessions. Multiple users log in at once, work from the same shared lead list, and see every update from any team member reflected instantly across all connected sessions, with no page refresh required. Built as a fully serverless application on AWS using React, AWS Lambda, DynamoDB, and API Gateway, it replaced a fragmented spreadsheet workflow with a single shared workspace, cutting duplicate calls and giving the team a live, coordinated view of daily progress.",
    thumbnail: getImageUrl('cover'),
    thumbnailDescription:
        "A shared, real-time cold calling workspace where every note, status update, and flag syncs instantly across all connected users.",
    images: [
        {
            src: getImageUrl('cover'),
            title: "Portal Dashboard",
            description: "Multiple users can log in and work from the same shared list of leads. When one person adds a note, marks a lead done, or flags it, every other connected user sees the update instantly, no refresh needed. Each user can also create private lists visible only to them, or public lists shared among the rest of the team.",
        },
        {
            src: getImageUrl('2'),
            title: "CI/CD Pipeline",
            description: "The deployment pipeline runs as a GitHub Actions workflow. A push to main triggers deploy-backend, which packages and deploys the Lambda functions through the Serverless Framework, then deploy-frontend builds the React app, syncs it to S3, and invalidates the CloudFront cache. Every push ships to production automatically, with no manual deploy steps.",
        },
        {
            src: getImageUrl('3'),
            title: "Cloud Architecture",
            description: "The AWS architecture is fully serverless. Route 53 routes frontend traffic to CloudFront and S3, where the React app is hosted, and API traffic to API Gateway, which invokes Lambda functions that read and write leads in DynamoDB. A DynamoDB Stream triggers a Lambda that broadcasts every change over a WebSocket connection, so all logged-in users see updates live, with no servers to manage.",
        },
    ].filter(img => img.src),
};
