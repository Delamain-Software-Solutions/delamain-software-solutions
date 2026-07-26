import { projects } from "@/data/projectsData";

const industries = Array.from(new Set(projects.map((p) => p.industry)));

export const siteStats = {
  projectCount: projects.length,
  industriesCount: industries.length,
  industries,
  upworkRating: "5.0",
  upworkJobSuccess: "100%",
};
