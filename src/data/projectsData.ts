import { animeProject } from "./projects/anime";
import { dumpsterProject } from "./projects/dumpster-rental-app";
import { freelancingProject } from "./projects/freelancing-platform";
import { gymClothingProject } from "./projects/gym-clothing";
import { heqiProject } from "./projects/heqi";
import { trackioProject } from "./projects/trackio";
import { weatherProject } from "./projects/weather-app";
import { breakIntoPcProject } from "./projects/break-into-pc";
import { fitnessAppProject } from "./projects/fitness-app";
import { arcScaleProject } from "./projects/arc-scale-software";
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
  arcScaleProject,
  animeProject,
  heqiProject,
  freelancingProject,
  gymClothingProject,
  trackioProject,
  weatherProject,
  fitnessAppProject,
  breakIntoPcProject,
];
