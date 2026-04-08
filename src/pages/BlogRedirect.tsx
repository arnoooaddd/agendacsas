import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const slugRedirects: Record<string, string> = {
  "se-demarquer-arnaques-renovation": "generation-leads-fiables-entreprise-renovation",
  "publicite-renovation-2026": "strategie-publicite-entreprise-renovation-2026",
  "retargeting-prospects-renovation": "retargeting-leads-perdus-renovation-habitat",
  "plateforme-publicite-renovation": "google-ads-meta-ads-entreprise-renovation",
  "contacter-leads-reseaux-sociaux-renovation": "contacter-leads-facebook-ads-renovation-rdv",
  "niveaux-qualification-prospect-renovation": "qualification-prospect-tunnel-vente-renovation",
  "externaliser-prise-rdv-renovation": "externaliser-prise-rdv-entreprise-renovation",
  "choisir-agence-marketing-renovation": "choisir-agence-marketing-renovation-btp",
  "delai-resultats-acquisition-digitale-renovation": "delai-resultats-acquisition-clients-renovation",
  "cout-publicite-renovation-habitat": "cout-publicite-google-ads-meta-ads-renovation",
  "google-ads-vs-facebook-ads-renovation": "google-ads-vs-facebook-ads-renovation-habitat",
  "marketing-renovation-habitat-publicite-leads": "marketing-renovation-habitat-generation-leads",
  "arreter-achat-leads-renovation": "arreter-achat-leads-renovation-habitat",
  "internaliser-marketing-renovation": "internaliser-externaliser-marketing-renovation-btp",
  "pourquoi-acheter-des-leads-renovation-mauvaise-strategie-2026": "achat-leads-renovation-mauvaise-strategie",
};

const BlogRedirect = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const newSlug = slug ? slugRedirects[slug] : null;
    if (newSlug) {
      navigate(`/blog/${newSlug}${window.location.search}`, { replace: true });
    } else {
      navigate("/blog", { replace: true });
    }
  }, [slug, navigate]);

  return null;
};

export default BlogRedirect;
