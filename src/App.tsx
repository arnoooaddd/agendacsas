import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Resultats from "./pages/Resultats";
import Simulateur from "./pages/Simulateur";
import Rdv from "./pages/Rdv";
import HashRedirect from "./pages/HashRedirect";
import CreationReseaux from "./pages/CreationReseaux";
import CreationSite from "./pages/CreationSite";
import Tournage from "./pages/Tournage";
import Results from "./pages/Results";
import Blog from "./pages/Blog";
import BlogArticle from "./pages/BlogArticle";
import BlogRedirect from "./pages/BlogRedirect";
import PriseRendezVous from "./pages/PriseRendezVous";
import EquipeAgendac from "./pages/EquipeAgendac";

const queryClient = new QueryClient();

// Old blog slugs that need redirects to new SEO-optimized URLs
const oldBlogSlugs = [
  "se-demarquer-arnaques-renovation",
  "publicite-renovation-2026",
  "retargeting-prospects-renovation",
  "plateforme-publicite-renovation",
  "contacter-leads-reseaux-sociaux-renovation",
  "niveaux-qualification-prospect-renovation",
  "externaliser-prise-rdv-renovation",
  "choisir-agence-marketing-renovation",
  "delai-resultats-acquisition-digitale-renovation",
  "cout-publicite-renovation-habitat",
  "google-ads-vs-facebook-ads-renovation",
  "marketing-renovation-habitat-publicite-leads",
  "arreter-achat-leads-renovation",
  "internaliser-marketing-renovation",
  "pourquoi-acheter-des-leads-renovation-mauvaise-strategie-2026",
];

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/resultats-clients-agendac" element={<Results />} />
          <Route path="/resultats" element={<Resultats />} />
          <Route path="/resultat" element={<Resultats />} />
          <Route path="/résultat" element={<Resultats />} />
          <Route path="/résultats" element={<Resultats />} />
          <Route path="/results" element={<Resultats />} />
          <Route path="/interviews" element={<Resultats />} />
          <Route path="/simulateur" element={<Simulateur />} />
          <Route path="/rdv" element={<Rdv />} />
          <Route path="/creation-reseaux-sociaux" element={<CreationReseaux />} />
          <Route path="/creation-site-internet" element={<CreationSite />} />
          <Route path="/tournage" element={<Tournage />} />
          <Route path="/prise-rendez-vous" element={<PriseRendezVous />} />
          <Route path="/equipe-agendac" element={<EquipeAgendac />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogArticle />} />
          {/* Redirects from old blog slugs to new SEO-optimized URLs */}
          {oldBlogSlugs.map((slug) => (
            <Route key={slug} path={`/blog/${slug}`} element={<BlogRedirect />} />
          ))}
          <Route path="/services" element={<HashRedirect hash="hero" />} />
          <Route path="/service" element={<HashRedirect hash="hero" />} />
          <Route path="/merci" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
