import leadsRenovation from "@/assets/blog/leads-renovation-2026.jpg";
import internaliserMarketing from "@/assets/blog/internaliser-marketing-renovation.jpg";
import arreterAchatLeads from "@/assets/blog/arreter-achat-leads-renovation.jpg";
import marketingRenovation from "@/assets/blog/marketing-renovation-habitat.jpg";
import googleVsFacebookAds from "@/assets/blog/google-ads-vs-facebook-ads-renovation.jpg";
import coutPublicite from "@/assets/blog/cout-publicite-renovation-habitat.jpg";
import delaiResultats from "@/assets/blog/delai-resultats-acquisition-digitale-renovation.jpg";
import choisirAgence from "@/assets/blog/choisir-agence-marketing-renovation.jpg";
import externaliserRdv from "@/assets/blog/externaliser-prise-rdv-renovation.png";
import niveauxQualification from "@/assets/blog/niveaux-qualification-prospect-renovation.png";

const coverImages: Record<string, string> = {
  "leads-renovation-2026": leadsRenovation,
  "internaliser-marketing-renovation": internaliserMarketing,
  "arreter-achat-leads-renovation": arreterAchatLeads,
  "marketing-renovation-habitat": marketingRenovation,
  "google-ads-vs-facebook-ads-renovation": googleVsFacebookAds,
  "cout-publicite-renovation-habitat": coutPublicite,
  "delai-resultats-acquisition-digitale-renovation": delaiResultats,
  "choisir-agence-marketing-renovation": choisirAgence,
  "externaliser-prise-rdv-renovation": externaliserRdv,
  "niveaux-qualification-prospect-renovation": niveauxQualification,
};

export const getCoverImage = (key: string): string => {
  return coverImages[key] || leadsRenovation;
};
