import { animeProject } from "./projects/anime";
import { dumpsterProject } from "./projects/dumpster-rental-app";
import { freelancingProject } from "./projects/freelancing-platform";
import { gymClothingProject } from "./projects/gym-clothing";
import { heqiProject } from "./projects/heqi";
import { trackioProject } from "./projects/trackio";
import { weatherProject } from "./projects/weather-app";

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
  dumpsterProject,
  heqiProject,
  animeProject,
  freelancingProject,
  gymClothingProject,
  trackioProject,
  weatherProject,
];
