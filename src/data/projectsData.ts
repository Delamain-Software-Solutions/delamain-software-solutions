import { coldCallPortalProject } from "./projects/cold-call-portal";
import { dumpsterRentalSystemProject } from "./projects/dumpster-rental-system";
import { oratorAiProject } from "./projects/orator-ai";
import { scalehouseBillingSystemProject } from "./projects/scalehouse-billing-system";
import { trackioProject } from "./projects/trackio";
import { animeProject } from "./projects/anime";

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
  dumpsterRentalSystemProject,
  oratorAiProject,
  coldCallPortalProject,
  scalehouseBillingSystemProject,
  trackioProject,
  animeProject,
];
