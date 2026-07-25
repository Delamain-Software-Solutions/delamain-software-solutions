import { Project } from "../projectsData";

const images = import.meta.glob('@/assets/projects/orator-ai/*.{jpg,png,jpeg,webp}', {
    eager: true,
    query: '?url',
    import: 'default'
});

const getImageUrl = (name: string) => {
    return (images[`/src/assets/projects/orator-ai/${name}.png`] ||
        images[`/src/assets/projects/orator-ai/${name}.jpg`] ||
        images[`/src/assets/projects/orator-ai/${name}.jpeg`] ||
        images[`/src/assets/projects/orator-ai/${name}.webp`]) as string;
};

export const oratorAiProject: Project = {
    slug: "orator-ai",
    client: "AI Presentation Coaching Platform",
    year: "2026",
    scopeOfWork: ["AI & Computer Vision Product", "Microservices Architecture", "Cloud Infrastructure", "CI/CD Automation"],
    techStack: ["React", "Django REST Framework", "MediaPipe", "Docker", "AWS", "GitHub Actions"],
    industry: "EdTech & AI Products",
    title: "Orator AI",
    description:
        "Orator AI is an AI-powered presentation coaching web application that analyzes a user's video recording and returns detailed, scored feedback on both verbal and non-verbal communication. Users record themselves presenting directly in the browser or upload an existing video, and a microservices backend, built with Django REST Framework, MediaPipe, and custom-trained ML models, produces a full report covering transcription, delivery scores, gesture and posture detection, and a timestamped breakdown of the whole performance. We also built and ran the production infrastructure behind it: a containerized Docker deployment on AWS EC2 inside a VPC, with Amazon RDS as the database, a globally distributed React frontend served through CloudFront and S3, and a GitHub Actions CI/CD pipeline that ships both backend and frontend to production automatically on every push to main, with no manual deploys.",
    thumbnail: getImageUrl('cover'),
    thumbnailDescription:
        "An AI coaching product that turns a raw presentation recording into a detailed, timestamped performance report, backed by a fully automated cloud deployment.",
    images: [
        {
            src: getImageUrl('2'),
            title: "Record a Presentation",
            description: "Users can record a live session directly in the browser using the MediaRecorder API, or upload an existing video. An optional AI coach can generate a practice script or suggest a topic based on the user's skill level, and pre-session tips help ensure clean audio and video for analysis.",
        },
        {
            src: getImageUrl('3'),
            title: "Verbal Analysis Results",
            description: "The results dashboard scores fluency, clarity, pace, vocabulary richness, and overall delivery, alongside a full transcription and detected accent, giving the user a concrete, numeric breakdown of their speaking performance rather than vague feedback.",
        },
        {
            src: getImageUrl('4'),
            title: "Non-Verbal Activity Review",
            description: "A timeline-based review synced to the recording itself, flagging specific non-verbal events like hands dropping out of frame, brief pauses, or drifting out of the presentation zone, so users can jump straight to the exact moment each issue occurred.",
        },
    ].filter(img => img.src),
};
