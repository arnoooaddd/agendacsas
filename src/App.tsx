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
import PriseRendezVous from "./pages/PriseRendezVous";
import EquipeAgendac from "./pages/EquipeAgendac";
import Presentation from "./pages/Presentation";
import Confirmation from "./pages/Confirmation";

const queryClient = new QueryClient();

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
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogArticle />} />
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
