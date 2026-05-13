import { useParams, Link, Navigate, useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogArticles } from "@/data/blogArticles";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { useEffect, lazy, Suspense } from "react";
import { getCoverImage } from "@/utils/blogImages";
import arnaudImg from "@/assets/team/arnaud-utille.webp";
import kerimImg from "@/assets/team/kerim-jakupovic.webp";
import rachadImg from "@/assets/team/rachad-ait-hamou.webp";
import omarImg from "@/assets/team/omar-troussi.webp";
import RelatedService, { type ServiceKey } from "@/components/RelatedService";
import ArticleTOC from "@/components/blog/ArticleTOC";

const authorProfiles: Record<string, { image: string; role: string }> = {
  "Arnaud UTILLE": { image: arnaudImg, role: "Président" },
  "Kerim JAKUPOVIC": { image: kerimImg, role: "Directeur général" },
  "Rachad AIT HAMOU": { image: rachadImg, role: "Rachad AIT HAMOU" },
  "Omar TROUSSI": { image: omarImg, role: "Responsable publicités" },
};

// Mapping article slug → most relevant Agendac service
const articleToService: Record<string, { service: ServiceKey; intro?: string }> = {
  "crise-batiment-opportunite-communication-2026": {
    service: "gestion-communication",
    intro: "Transformez les périodes de ralentissement en opportunité d'acquisition en structurant une communication marketing BTP cohérente et continue.",
  },
  "site-electricien-generer-prospects-2026": {
    service: "gestion-communication",
    intro: "Structurez votre site et votre visibilité locale pour générer plus de demandes qualifiées en électricité rénovation.",
  },
  "renovation-marche-porteur-strategie-acquisition-2026": {
    service: "gestion-communication",
    intro: "Structurez une stratégie marketing rénovation qui relie vraiment visibilité, acquisition et traitement commercial pour capter ce marché porteur.",
  },
  "strategie-marketing-btp-services-differenciation-2026": {
    service: "gestion-communication",
    intro: "Transformez vos services en arguments de réassurance et en leviers commerciaux mieux visibles dans tout le parcours client.",
  },
  "communication-domotique-trouver-clients-2026": {
    service: "gestion-communication",
    intro: "Structurez votre visibilité, vos pages et votre suivi commercial pour générer plus de demandes qualifiées en domotique.",
  },
  "revetements-sols-leads-2026": {
    service: "gestion-communication",
    intro: "Reliez vos pages métiers, votre visibilité locale et vos campagnes pour générer des demandes plus qualifiées en revêtements de sols.",
  },
  "strategie-marketing-maconnerie-2026": {
    service: "gestion-communication",
    intro: "Structurez votre communication, votre preuve chantier et votre suivi commercial pour générer des demandes de maçonnerie plus qualifiées.",
  },
  "relations-presse-seo-btp-autorite-2026": {
    service: "gestion-seo",
    intro: "Renforcez votre autorité SEO avec des contenus, mentions et liens alignés sur vos pages stratégiques et vos objectifs d’acquisition.",
  },
  "attirer-comptes-cles-btp-inbound-abm-2026": {
    service: "gestion-communication",
    intro: "Reliez contenu, ciblage et suivi commercial pour approcher vos comptes stratégiques avec une mécanique plus crédible et plus exploitable.",
  },
  "video-drone-btp-visibilite-reassurance": {
    service: "tournage",
    intro: "Montrez vos chantiers avec des contenus vidéo qui renforcent la réassurance et soutiennent vraiment le parcours commercial.",
  },
  "communication-btp-levier-strategique-positionnement": {
    service: "gestion-communication",
    intro: "Renforcez votre positionnement avec une communication plus claire, plus cohérente et mieux reliée à vos enjeux commerciaux.",
  },
  "reseaux-sociaux-btp-b2b-2026": {
    service: "creation-reseaux-sociaux",
    intro: "Choisissez les plateformes sociales qui renforcent vraiment votre crédibilité, votre preuve terrain et votre acquisition commerciale.",
  },
  "google-ads-keyword-planner-renovation": {
    service: "gestion-communication",
    intro: "Structurez vos campagnes Google Ads à partir de mots-clés plus rentables pour éviter les clics coûteux et les demandes mal qualifiées.",
  },
  "menuiserie-exterieure-strategie-marketing-2026": {
    service: "gestion-communication",
    intro: "Reliez SEO local, site et campagnes pour générer plus de demandes qualifiées en menuiserie extérieure.",
  },
  "communication-btp-tendances-2026-entreprises-habitat": {
    service: "gestion-communication",
    intro: "Transformez votre communication BTP en levier plus mesurable, mieux aligné avec vos objectifs commerciaux.",
  },
  "communication-btob-btp-strategie-utile-2026": {
    service: "gestion-communication",
    intro: "Structurez une communication BtoB qui soutient vraiment votre crédibilité, votre qualification commerciale et votre acquisition dans le BTP.",
  },
  "strategie-marketing-couverture-2026": {
    service: "gestion-communication",
    intro: "Reliez visibilité locale, site, preuve chantier et suivi commercial pour générer des demandes plus rentables en couverture.",
  },
  "isolation-strategie-marketing-2026": {
    service: "gestion-communication",
    intro: "Structurez vos leviers d’acquisition pour transformer vos demandes isolation en chantiers plus rentables.",
  },
  "extensions-google-ads-visibilite-clics-qualifies-renovation": {
    service: "gestion-communication",
    intro: "Structurez vos campagnes Google Ads pour générer des demandes plus lisibles, mieux qualifiées et mieux traitées commercialement.",
  },
  "crm-marketing-automation-btp-2026": {
    service: "gestion-communication",
    intro: "Reliez qualification, relances et suivi CRM pour transformer plus proprement vos demandes entrantes.",
  },
  "prioriser-marketing-btp-donnees-2026": {
    service: "gestion-communication",
    intro: "Reliez enfin vos indicateurs marketing aux vraies décisions business pour arbitrer plus proprement vos budgets et vos priorités.",
  },
  "lead-nurturing-renovation-convertir-demandes-chantiers-2026": {
    service: "prise-rendez-vous",
    intro: "Mieux relancer vos demandes pour transformer plus d'intérêt en rendez-vous vraiment exploitables.",
  },
  "strategie-marketing-btp-feuille-route-2026-demandes-rentables": {
    service: "prise-rendez-vous",
    intro: "Repositionnez votre marketing comme un levier de croissance réellement piloté par les demandes utiles et la rentabilité.",
  },
  "lead-renovation-demande-vraiment-qualifiee": {
    service: "prise-rendez-vous",
    intro: "Filtrez mieux vos demandes pour concentrer vos équipes sur les vrais prospects à signer.",
  },
  "devis-renovation-transformer-demandes-chantiers-signes": {
    service: "prise-rendez-vous",
    intro: "Transformez plus de demandes de devis en rendez-vous utiles et en chantiers signés.",
  },
  "site-internet-renovation-erreurs-demandes-devis": {
    service: "creation-site-internet",
    intro: "Corrigez les erreurs qui bloquent vos demandes de devis avec un site pensé pour convertir.",
  },
  "renovation-erreurs-site-devis-2026": {
    service: "creation-site-internet",
    intro: "Évitez les 6 erreurs qui font perdre des devis sur votre site internet de rénovation.",
  },
  "landing-page-renovation-rendez-vous": {
    service: "creation-site-internet",
    intro: "Transformez vos clics en demandes qualifiées avec une landing page pensée pour la rénovation.",
  },
  "branding-local-entreprise-renovation": {
    service: "creation-reseaux-sociaux",
    intro: "Devenez la marque locale que les prospects reconnaissent avant même le premier devis.",
  },
  "achat-leads-renovation-mauvaise-strategie": {
    service: "prise-rendez-vous",
    intro: "Au lieu d'acheter des leads partagés, construisez votre propre système d'acquisition.",
  },
  "internaliser-externaliser-marketing-renovation-btp": {
    service: "prise-rendez-vous",
    intro: "L'alternative concrète à un recrutement marketing en interne.",
  },
  "arreter-achat-leads-renovation-habitat": {
    service: "prise-rendez-vous",
    intro: "Sortez de la guerre des prix avec un système d'acquisition exclusif.",
  },
  "marketing-renovation-habitat-generation-leads": {
    service: "prise-rendez-vous",
    intro: "L'infrastructure complète pour transformer vos campagnes en chiffre d'affaires.",
  },
  "site-web-btp-erreurs-coutent-demandes-devis-2026": {
    service: "creation-site-internet",
    intro: "Un site qui convertit mieux commence par une structure pensée pour les demandes qualifiées.",
  },
  "referencement-btp-google-ia-generatives-2026": {
    service: "creation-site-internet",
    intro: "Le référencement rentable commence par des pages utiles, locales et pensées pour la conversion.",
  },
  "site-web-renovation-levier-commercial-2026": {
    service: "creation-site-internet",
    intro: "Un site utile commercialement aide vos équipes à convertir mieux, pas seulement à être jolies en ligne.",
  },
  "actions-marketing-btp-generer-demandes-qualifiees-2026": {
    service: "prise-rendez-vous",
    intro: "Structurez vos actions marketing BTP pour obtenir plus de demandes vraiment exploitables par vos équipes.",
  },
  "inbound-marketing-btp-automation-abm-developper-business-2026": {
    service: "gestion-communication",
    intro: "Reliez contenu, automation et acquisition payante dans une logique business enfin pilotable.",
  },
  "combiner-seo-publicite-generer-demandes-devis-renovation-2026": {
    service: "gestion-seo",
    intro: "Faites travailler référencement local et acquisition payante ensemble pour capter plus de demandes qualifiées.",
  },
  "fiche-google-maps-site-internet-referencement-local-2026": {
    service: "gestion-seo",
    intro: "Reliez votre fiche Google Maps et vos pages clés pour renforcer votre visibilité locale et convertir plus de recherches de proximité.",
  },
  "pourquoi-acheter-des-prospects-fausse-bonne-idee": {
    service: "gestion-communication",
    intro: "Réduisez votre dépendance aux plateformes de leads en structurant une acquisition plus rentable et mieux pilotée.",
  },
  "pourquoi-certaines-entreprises-batiment-dominent-google-2026": {
    service: "gestion-seo",
    intro: "Structurez vos signaux locaux pour apparaître plus souvent sur Google et transformer cette visibilité en demandes vraiment utiles.",
  },
  "marketing-btp-levier-croissance-2026": {
    service: "gestion-communication",
    intro: "Reliez visibilité, acquisition et traitement commercial pour faire du marketing un vrai levier de croissance.",
  },
  "google-ads-vs-facebook-ads-renovation-habitat": {
    service: "prise-rendez-vous",
    intro: "Agendac orchestre Google Ads et Meta Ads pour vous — payable au RDV qualifié.",
  },
  "cout-publicite-google-ads-meta-ads-renovation": {
    service: "prise-rendez-vous",
    intro: "Maîtrisez votre coût d'acquisition : ne payez qu'au devis envoyé.",
  },
  "delai-resultats-acquisition-clients-renovation": {
    service: "prise-rendez-vous",
    intro: "Premiers rendez-vous qualifiés sous 21 jours après la mise en route.",
  },
  "choisir-agence-marketing-renovation-btp": {
    service: "prise-rendez-vous",
    intro: "Une agence spécialisée rénovation, payable au résultat.",
  },
  "externaliser-prise-rdv-entreprise-renovation": {
    service: "prise-rendez-vous",
    intro: "Notre offre dédiée pour ne plus jamais perdre un lead par manque de relance.",
  },
  "qualification-prospect-tunnel-vente-renovation": {
    service: "prise-rendez-vous",
    intro: "Notre équipe qualifie chaque prospect par téléphone avant tout RDV.",
  },
  "contacter-leads-facebook-ads-renovation-rdv": {
    service: "prise-rendez-vous",
    intro: "Externalisez le rappel et la qualification de vos leads Meta.",
  },
  "google-ads-meta-ads-entreprise-renovation": {
    service: "prise-rendez-vous",
    intro: "Multi-canal géré de A à Z : campagnes, qualification, prise de RDV.",
  },
  "retargeting-leads-perdus-renovation-habitat": {
    service: "creation-site-internet",
    intro: "Un site bien tracké est la base d'un retargeting performant.",
  },
  "strategie-publicite-entreprise-renovation-2026": {
    service: "tournage",
    intro: "Les vidéos qui performent en 2026 ne s'improvisent pas — production internalisée.",
  },
  "generation-leads-fiables-entreprise-renovation": {
    service: "creation-reseaux-sociaux",
    intro: "Crédibilité en ligne : la première arme pour vous démarquer des arnaques.",
  },
  "site-web-couvreur-confiance-devis-2026": {
    service: "creation-site-internet",
    intro: "Un site de couvreur orienté confiance et conversion pour générer des demandes de devis qualifiées.",
  },
  "site-web-plombier-erreurs-devis-2026": {
    service: "creation-site-internet",
    intro: "Un site de plombier orienté urgence et conversion pour générer des demandes de devis qualifiées.",
  },
  "temoignage-client-btp-roi-2026": {
    service: "tournage",
    intro: "Transformez vos chantiers terminés en preuves commerciales diffusables avec des témoignages clients et des vidéos de chantier qui renforcent votre crédibilité et votre conversion.",
  },
};

const articleComponents: Record<string, React.ComponentType> = {
  "crise-batiment-opportunite-communication-2026": lazy(() => import("@/components/blog/ArticleCriseBatimentOpportuniteCommunication2026")),
  "site-electricien-generer-prospects-2026": lazy(() => import("@/components/blog/ArticleSiteElectricienGenererProspects2026")),
  "renovation-marche-porteur-strategie-acquisition-2026": lazy(() => import("@/components/blog/ArticleRenovationMarchePorteurStrategieAcquisition2026")),
  "strategie-marketing-btp-services-differenciation-2026": lazy(() => import("@/components/blog/ArticleStrategieMarketingBtpServicesDifferenciation2026")),
  "communication-domotique-trouver-clients-2026": lazy(() => import("@/components/blog/ArticleCommunicationDomotiqueTrouverClients2026")),
  "revetements-sols-leads-2026": lazy(() => import("@/components/blog/ArticleRevetementsSolsLeads2026")),
  "strategie-marketing-maconnerie-2026": lazy(() => import("@/components/blog/ArticleStrategieMarketingMaconnerie2026")),
  "relations-presse-seo-btp-autorite-2026": lazy(() => import("@/components/blog/ArticleRelationsPresseSeoBtpAutorite2026")),
  "attirer-comptes-cles-btp-inbound-abm-2026": lazy(() => import("@/components/blog/ArticleAttirerComptesClesBtpInboundAbm2026")),
  "video-drone-btp-visibilite-reassurance": lazy(() => import("@/components/blog/ArticleVideoDroneBtpVisibiliteReassurance")),
  "communication-btp-levier-strategique-positionnement": lazy(() => import("@/components/blog/ArticleCommunicationBtpLevierStrategiquePositionnement")),
  "reseaux-sociaux-btp-b2b-2026": lazy(() => import("@/components/blog/ArticleReseauxSociauxBtpB2b2026")),
  "google-ads-keyword-planner-renovation": lazy(() => import("@/components/blog/ArticleGoogleAdsKeywordPlannerRenovation")),
  "extensions-google-ads-visibilite-clics-qualifies-renovation": lazy(() => import("@/components/blog/ArticleExtensionsGoogleAdsVisibiliteClicsQualifiesRenovation")),
  "crm-marketing-automation-btp-2026": lazy(() => import("@/components/blog/ArticleCrmMarketingAutomationBtp2026")),
  "prioriser-marketing-btp-donnees-2026": lazy(() => import("@/components/blog/ArticlePrioriserMarketingBtpDonnees2026")),
  "communication-btob-btp-strategie-utile-2026": lazy(() => import("@/components/blog/ArticleCommunicationBtobBtpStrategieUtile2026")),
  "strategie-marketing-couverture-2026": lazy(() => import("@/components/blog/ArticleStrategieMarketingCouverture2026")),
  "lead-nurturing-renovation-convertir-demandes-chantiers-2026": lazy(() => import("@/components/blog/ArticleLeadNurturingRenovation2026")),
  "strategie-marketing-btp-feuille-route-2026-demandes-rentables": lazy(() => import("@/components/blog/ArticleStrategieMarketingBtpFeuilleRoute2026")),
  "lead-renovation-demande-vraiment-qualifiee": lazy(() => import("@/components/blog/ArticleLeadRenovationDemandeQualifiee")),
  "devis-renovation-transformer-demandes-chantiers-signes": lazy(() => import("@/components/blog/ArticleDevisRenovationChantiersSignes")),
  "site-internet-renovation-erreurs-demandes-devis": lazy(() => import("@/components/blog/ArticleSiteInternetRenovationErreurs")),
  "landing-page-renovation-rendez-vous": lazy(() => import("@/components/blog/ArticleLandingPageRenovation")),
  "branding-local-entreprise-renovation": lazy(() => import("@/components/blog/ArticleBrandingLocalRenovation")),
  "achat-leads-renovation-mauvaise-strategie": lazy(() => import("@/components/blog/ArticleLeadsRenovation")),
  "internaliser-externaliser-marketing-renovation-btp": lazy(() => import("@/components/blog/ArticleInternaliserMarketing")),
  "arreter-achat-leads-renovation-habitat": lazy(() => import("@/components/blog/ArticleArreterAchatLeads")),
  "marketing-renovation-habitat-generation-leads": lazy(() => import("@/components/blog/ArticleMarketingRenovation")),
  "google-ads-vs-facebook-ads-renovation-habitat": lazy(() => import("@/components/blog/ArticleGoogleVsFacebookAds")),
  "cout-publicite-google-ads-meta-ads-renovation": lazy(() => import("@/components/blog/ArticleCoutPubliciteRenovation")),
  "delai-resultats-acquisition-clients-renovation": lazy(() => import("@/components/blog/ArticleDelaiResultatsAcquisition")),
  "choisir-agence-marketing-renovation-btp": lazy(() => import("@/components/blog/ArticleChoisirAgenceMarketingRenovation")),
  "externaliser-prise-rdv-entreprise-renovation": lazy(() => import("@/components/blog/ArticleExternaliserPriseRdv")),
  "qualification-prospect-tunnel-vente-renovation": lazy(() => import("@/components/blog/ArticleNiveauxQualificationProspect")),
  "contacter-leads-facebook-ads-renovation-rdv": lazy(() => import("@/components/blog/ArticleContacterLeadsReseauxSociaux")),
  "google-ads-meta-ads-entreprise-renovation": lazy(() => import("@/components/blog/ArticlePlateformePubliciteRenovation")),
  "retargeting-leads-perdus-renovation-habitat": lazy(() => import("@/components/blog/ArticleRetargetingProspectsRenovation")),
  "strategie-publicite-entreprise-renovation-2026": lazy(() => import("@/components/blog/ArticlePubliciteRenovation2026")),
  "generation-leads-fiables-entreprise-renovation": lazy(() => import("@/components/blog/ArticleSeDemarquerArnaquesRenovation")),
  "site-web-btp-erreurs-coutent-demandes-devis-2026": lazy(() => import("@/components/blog/ArticleSiteWebBtpErreursDemandesDevis2026")),
  "referencement-btp-google-ia-generatives-2026": lazy(() => import("@/components/blog/ArticleReferencementBtpGoogleIa2026")),
  "site-web-renovation-levier-commercial-2026": lazy(() => import("@/components/blog/ArticleSiteWebRenovationLevierCommercial2026")),
  "actions-marketing-btp-generer-demandes-qualifiees-2026": lazy(() => import("@/components/blog/ArticleActionsMarketingBtpDemandesQualifiees2026")),
  "inbound-marketing-btp-automation-abm-developper-business-2026": lazy(() => import("@/components/blog/ArticleInboundMarketingBtpAutomationAbm2026")),
  "combiner-seo-publicite-generer-demandes-devis-renovation-2026": lazy(() => import("@/components/blog/ArticleCombinerSeoPubliciteDemandesDevis2026")),
  "fiche-google-maps-site-internet-referencement-local-2026": lazy(() => import("@/components/blog/ArticleFicheGoogleMapsSiteInternetReferencementLocal2026")),
  "pourquoi-acheter-des-prospects-fausse-bonne-idee": lazy(() => import("@/components/blog/ArticleAchatProspectsAutonomie")),
  "pourquoi-certaines-entreprises-batiment-dominent-google-2026": lazy(() => import("@/components/blog/ArticlePourquoiEntreprisesBatimentDominentGoogle2026")),
  "marketing-btp-levier-croissance-2026": lazy(() => import("@/components/blog/ArticleMarketingBtpLevierCroissance2026")),
  "isolation-strategie-marketing-2026": lazy(() => import("@/components/blog/ArticleIsolationStrategieMarketing2026")),
  "menuiserie-exterieure-strategie-marketing-2026": lazy(() => import("@/components/blog/ArticleMenuiserieExterieureStrategieMarketing2026")),
  "communication-btp-tendances-2026-entreprises-habitat": lazy(() => import("@/components/blog/ArticleCommunicationBtpTendances2026EntreprisesHabitat")),
  "site-web-couvreur-confiance-devis-2026": lazy(() => import("@/components/blog/ArticleSiteWebCouvreurConfianceDevis2026")),
  "renovation-erreurs-site-devis-2026": lazy(() => import("@/components/blog/ArticleRenovationErreursSiteDevis2026")),
  "numerique-btp-nouvelles-pratiques-2026": lazy(() => import("@/components/blog/ArticleNumeriqueBtpPratiques2026")),
  "btob-btp-leads-commerciaux-2026": lazy(() => import("@/components/blog/ArticleBtobBtpLeads2026")),
  "strategie-communication-prescripteurs-btp": lazy(() => import("@/components/blog/ArticlePrescripteursBtp2026")),
  "communication-rse-btp-sans-greenwashing": lazy(() => import("@/components/blog/ArticleRseBtpCommunication2026")),
  "site-web-plombier-erreurs-devis-2026": lazy(() => import("@/components/blog/ArticleSiteWebPlombierErreursDevis2026")),
  "temoignage-client-btp-roi-2026": lazy(() => import("@/components/blog/ArticleTemoignageClientBtpRoi2026")),
};

// Redirects from old blog slugs to new SEO-optimized URLs
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

// Wrapper component that handles redirects before rendering the main component
const BlogArticleRedirectGuard = () => {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();

  // If old slug, redirect immediately — no hooks below, clean early return
  if (slug && slugRedirects[slug]) {
    const search = searchParams.toString();
    const newUrl = `/blog/${slugRedirects[slug]}${search ? `?${search}` : ""}`;
    return <Navigate to={newUrl} replace />;
  }

  return <BlogArticleContent slug={slug} />;
};

const BlogArticleContent = ({ slug }: { slug: string | undefined }) => {
  const article = blogArticles.find((a) => a.slug === slug);
  const authorProfile = article ? (authorProfiles[article.author] || authorProfiles["Arnaud UTILLE"]) : authorProfiles["Arnaud UTILLE"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const cover = article ? getCoverImage(article.coverImage) : "";

  useEffect(() => {
    if (!article) return;

    const origin = typeof window !== "undefined" ? window.location.origin : "https://agendac.fr";
    const absoluteCover = cover.startsWith("http") ? cover : `${origin}${cover}`;
    const canonicalUrl = `https://agendac.fr/blog/${article.slug}`;
    const fullTitle = `${article.title} | Agendac`;

    const setMeta = (selector: string, attr: "name" | "property", key: string, content: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const setLink = (rel: string, href: string) => {
      let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    document.title = fullTitle;
    setMeta('meta[name="title"]', "name", "title", fullTitle);
    setMeta('meta[name="description"]', "name", "description", article.metaDescription);
    setMeta('meta[name="keywords"]', "name", "keywords", article.keywords.join(", "));

    // Open Graph
    setMeta('meta[property="og:type"]', "property", "og:type", "article");
    setMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    setMeta('meta[property="og:title"]', "property", "og:title", fullTitle);
    setMeta('meta[property="og:description"]', "property", "og:description", article.metaDescription);
    setMeta('meta[property="og:image"]', "property", "og:image", absoluteCover);
    setMeta('meta[property="og:image:secure_url"]', "property", "og:image:secure_url", absoluteCover);
    setMeta('meta[property="og:image:alt"]', "property", "og:image:alt", article.title);

    // Twitter
    setMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    setMeta('meta[name="twitter:url"]', "name", "twitter:url", canonicalUrl);
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", fullTitle);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", article.metaDescription);
    setMeta('meta[name="twitter:image"]', "name", "twitter:image", absoluteCover);

    setLink("canonical", canonicalUrl);

    return () => {
      // Restore generic site metadata when leaving the article
      const genericTitle = "Agendac | Accélérateur de Croissance N°1 - Rénovation de l'Habitat";
      const genericDesc = "Agendac accompagne les entreprises de rénovation de l'habitat à bâtir une présence digitale solide et à générer une croissance prévisible et durable.";
      const genericImage = "https://agendac.fr/og-image.png";
      const genericUrl = "https://agendac.fr/";
      document.title = genericTitle;
      setMeta('meta[name="title"]', "name", "title", genericTitle);
      setMeta('meta[name="description"]', "name", "description", genericDesc);
      setMeta('meta[property="og:type"]', "property", "og:type", "website");
      setMeta('meta[property="og:url"]', "property", "og:url", genericUrl);
      setMeta('meta[property="og:title"]', "property", "og:title", genericTitle);
      setMeta('meta[property="og:description"]', "property", "og:description", genericDesc);
      setMeta('meta[property="og:image"]', "property", "og:image", genericImage);
      setMeta('meta[name="twitter:title"]', "name", "twitter:title", genericTitle);
      setMeta('meta[name="twitter:description"]', "name", "twitter:description", genericDesc);
      setMeta('meta[name="twitter:image"]', "name", "twitter:image", genericImage);
      setLink("canonical", genericUrl);
    };
  }, [article, cover]);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-28 pb-20 container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Article introuvable</h1>
          <Link to="/blog" className="text-primary hover:underline">← Retour au blog</Link>
        </main>
        <Footer />
      </div>
    );
  }

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  const ArticleContent = slug ? articleComponents[slug] : null;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: article.title,
            description: article.metaDescription,
            image: cover,
            author: {
              "@type": "Person",
              name: article.author,
              jobTitle: authorProfile.role,
              worksFor: { "@type": "Organization", name: "Agendac" },
            },
            datePublished: article.date,
            publisher: {
              "@type": "Organization",
              name: "Agendac",
              url: "https://agendac.fr",
            },
            keywords: article.keywords.join(", "),
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://agendac.fr/blog/${article.slug}`,
            },
          }),
        }}
      />

      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 mb-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm">
            <ArrowLeft size={16} /> Retour au blog
          </Link>
        </div>

        <div className="container mx-auto px-4 max-w-6xl">
          <header className="mb-10 max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-4">
              {article.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-primary border-primary/30">{tag}</Badge>
              ))}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-display leading-tight mb-6">
              {article.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-1"><Calendar size={14} /> {formatDate(article.date)}</span>
              <span className="flex items-center gap-1"><Clock size={14} /> {article.readTime} de lecture</span>
            </div>
            {/* Author card */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 border border-border">
              <img
                src={authorProfile.image}
                alt={`${article.author}, ${authorProfile.role} d'Agendac`}
                className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
              />
              <div>
                <p className="font-semibold text-foreground">{article.author}</p>
                <p className="text-sm text-muted-foreground">{authorProfile.role} d'Agendac — <Link to="/" className="text-primary hover:underline">Agence marketing rénovation</Link></p>
              </div>
            </div>
          </header>

          <div className="rounded-2xl overflow-hidden mb-12 aspect-[16/8] max-w-4xl">
            <img src={cover} alt={article.title} className="w-full h-full object-cover" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_240px] gap-10 lg:gap-14">
            <article>
              {ArticleContent && (
                <Suspense fallback={<div className="text-center py-12 text-muted-foreground">Chargement…</div>}>
                  <ArticleContent />
                </Suspense>
              )}

              {slug && articleToService[slug] && (
                <RelatedService
                  service={articleToService[slug].service}
                  intro={articleToService[slug].intro}
                />
              )}
            </article>

            <ArticleTOC slug={slug} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogArticleRedirectGuard;
