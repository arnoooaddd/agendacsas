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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/resultats" element={<Resultats />} />
          <Route path="/resultat" element={<HashRedirect hash="resultats" />} />
          <Route path="/résultat" element={<HashRedirect hash="resultats" />} />
          <Route path="/résultats" element={<HashRedirect hash="resultats" />} />
          <Route path="/interviews" element={<HashRedirect hash="resultats" />} />
          <Route path="/simulateur" element={<Simulateur />} />
          <Route path="/rdv" element={<Rdv />} />
          <Route path="/services" element={<HashRedirect hash="hero" />} />
          <Route path="/service" element={<HashRedirect hash="hero" />} />
          <Route path="/merci" element={<NotFound />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;