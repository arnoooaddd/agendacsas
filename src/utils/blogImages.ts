import leadsRenovation from "@/assets/blog/leads-renovation-2026.jpg";
import internaliserMarketing from "@/assets/blog/internaliser-marketing-renovation.jpg";

const coverImages: Record<string, string> = {
  "leads-renovation-2026": leadsRenovation,
  "internaliser-marketing-renovation": internaliserMarketing,
};

export const getCoverImage = (key: string): string => {
  return coverImages[key] || leadsRenovation;
};
