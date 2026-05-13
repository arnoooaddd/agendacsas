import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import PriseRendezVous from "./pages/PriseRendezVous";
import EquipeAgendac from "./pages/EquipeAgendac";
import Presentation from "./pages/Presentation";
import Confirmation from "./pages/Confirmation";
import VisibiliteMax from "./pages/VisibiliteMax";
import GestionSeo from "./pages/GestionSeo";
import PhoneWebhookTrigger from "./components/PhoneWebhookTrigger";
import SeoPageRoute from "./pages/seo/SeoPageRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <PhoneWebhookTrigger />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/accueil" element={<Navigate to="/" replace />} />
          <Route path="/com" element={<Navigate to="/gestion-communication" replace />} />
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
          <Route path="/gestion-communication" element={<VisibiliteMax />} />
          <Route path="/visibilite-max" element={<Navigate to="/gestion-communication" replace />} />
          <Route path="/gestion-seo" element={<GestionSeo />} />
          <Route path="/seo" element={<GestionSeo />} />
          <Route path="/prise-rendez-vous" element={<PriseRendezVous />} />
          <Route path="/equipe-agendac" element={<EquipeAgendac />} />
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogArticle />} />
          <Route path="/services" element={<HashRedirect hash="hero" />} />
          <Route path="/service" element={<HashRedirect hash="hero" />} />
          <Route path="/contact" element={<Navigate to="/prise-rendez-vous" replace />} />
          <Route path="/agence-marketing-renovation" element={<SeoPageRoute slug="agence-marketing-renovation" />} />
          <Route path="/agence-marketing-renovation-energetique" element={<SeoPageRoute slug="agence-marketing-renovation-energetique" />} />
          <Route path="/agence-marketing-btp" element={<SeoPageRoute slug="agence-marketing-btp" />} />
          <Route path="/agence-communication-renovation" element={<SeoPageRoute slug="agence-communication-renovation" />} />
          <Route path="/agence-generation-leads-renovation" element={<SeoPageRoute slug="agence-generation-leads-renovation" />} />
          <Route path="/agence-generation-leads-btp" element={<SeoPageRoute slug="agence-generation-leads-btp" />} />
          <Route path="/generation-leads-renovation" element={<SeoPageRoute slug="generation-leads-renovation" />} />
          <Route path="/publicite-renovation" element={<SeoPageRoute slug="publicite-renovation" />} />
          <Route path="/seo-renovation" element={<SeoPageRoute slug="seo-renovation" />} />
          <Route path="/site-internet-renovation" element={<SeoPageRoute slug="site-internet-renovation" />} />
          <Route path="/tournage-video-renovation" element={<SeoPageRoute slug="tournage-video-renovation" />} />
          <Route path="/merci" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
