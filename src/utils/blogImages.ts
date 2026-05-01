import leadsRenovation from "@/assets/blog/leads-renovation-2026.png";
import internaliserMarketing from "@/assets/blog/internaliser-marketing-renovation.png";
import arreterAchatLeads from "@/assets/blog/arreter-achat-leads-renovation.png";
import marketingRenovation from "@/assets/blog/marketing-renovation-habitat.png";
import googleVsFacebookAds from "@/assets/blog/google-ads-vs-facebook-ads-renovation.png";
import coutPublicite from "@/assets/blog/cout-publicite-renovation-habitat.png";
import delaiResultats from "@/assets/blog/delai-resultats-acquisition-digitale-renovation.png";
import choisirAgence from "@/assets/blog/choisir-agence-marketing-renovation.png";
import externaliserRdv from "@/assets/blog/externaliser-prise-rdv-renovation-new.png";
import niveauxQualification from "@/assets/blog/niveaux-qualification-prospect-renovation.png";
import contacterLeads from "@/assets/blog/contacter-leads-reseaux-sociaux.png";
import plateformePublicite from "@/assets/blog/plateforme-publicite-renovation.png";
import retargetingProspects from "@/assets/blog/retargeting-prospects-renovation.png";
import publiciteRenovation2026 from "@/assets/blog/publicite-renovation-2026.png";
import seDemarquerArnaques from "@/assets/blog/se-demarquer-arnaques-renovation.png";
import siteInternetRenovationErreurs from "@/assets/blog/site-internet-renovation-erreurs-demandes-devis.png";
import devisRenovationChantiersSignes from "@/assets/blog/devis-renovation-transformer-demandes-chantiers-signes.png";
import leadRenovationDemandeQualifiee from "@/assets/blog/lead-renovation-demande-vraiment-qualifiee.png";

const coverImages: Record<string, string> = {
  // Anciennes clés (compat)
  "se-demarquer-arnaques-renovation": seDemarquerArnaques,
  "publicite-renovation-2026": publiciteRenovation2026,
  "retargeting-prospects-renovation": retargetingProspects,
  "plateforme-publicite-renovation": plateformePublicite,
  "contacter-leads-reseaux-sociaux": contacterLeads,
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

  // Nouvelles clés (slugs SEO actuels)
  "lead-renovation-demande-vraiment-qualifiee": leadRenovationDemandeQualifiee,
  "devis-renovation-transformer-demandes-chantiers-signes": devisRenovationChantiersSignes,
  "site-internet-renovation-erreurs-demandes-devis": siteInternetRenovationErreurs,
  "generation-leads-fiables-entreprise-renovation": seDemarquerArnaques,
  "strategie-publicite-entreprise-renovation-2026": publiciteRenovation2026,
  "retargeting-leads-perdus-renovation-habitat": retargetingProspects,
  "google-ads-meta-ads-entreprise-renovation": plateformePublicite,
  "contacter-leads-facebook-ads-renovation-rdv": contacterLeads,
  "qualification-prospect-tunnel-vente-renovation": niveauxQualification,
  "externaliser-prise-rdv-entreprise-renovation": externaliserRdv,
  "choisir-agence-marketing-renovation-btp": choisirAgence,
  "delai-resultats-acquisition-clients-renovation": delaiResultats,
  "cout-publicite-google-ads-meta-ads-renovation": coutPublicite,
  "google-ads-vs-facebook-ads-renovation-habitat": googleVsFacebookAds,
  "marketing-renovation-habitat-generation-leads": marketingRenovation,
  "arreter-achat-leads-renovation-habitat": arreterAchatLeads,
  "internaliser-externaliser-marketing-renovation-btp": internaliserMarketing,
  "achat-leads-renovation-mauvaise-strategie": leadsRenovation,
};

export const getCoverImage = (key: string): string => {
  return coverImages[key] || leadsRenovation;
};
