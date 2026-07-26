const COVER_GRADIENTS: Record<string, string> = {
  "dumpster-rental-system": "linear-gradient(135deg,#26262a,#3a3a40)",
  "orator-ai": "linear-gradient(135deg,#0a84ff,#2b5bd6)",
  // AWS-native stack (Lambda, DynamoDB, API Gateway) — darkened AWS orange
  "cold-call-collaboration-portal": "linear-gradient(135deg,#b8620a,#7a3f05)",
  // Waste/recycling yard — darkened recycling green, distinct from other tones
  "scalehouse-billing-system": "linear-gradient(135deg,#1f8f5f,#0e5d3a)",
  // Stripe-billing SaaS tool — darkened Stripe purple
  "trackio": "linear-gradient(135deg,#4a3fb0,#241c66)",
  // Consumer/entertainment ML product — darkened warm rose
  "anime-persona-matcher": "linear-gradient(135deg,#b03a5b,#6e1f38)",
};

const FALLBACK_GRADIENT = "linear-gradient(135deg,#26262a,#3a3a40)";

export const getProjectCoverGradient = (slug: string): string =>
  COVER_GRADIENTS[slug] ?? FALLBACK_GRADIENT;
