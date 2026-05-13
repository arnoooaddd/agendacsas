import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GoogleReviews from "@/components/GoogleReviews";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Clients from "@/components/Clients";
import Interviews from "@/components/Interviews";
import YouTubeShorts from "@/components/YouTubeShorts";
import Team from "@/components/Team";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import CaseStudy from "@/components/CaseStudy";
import ExemplesTournage from "@/components/ExemplesTournage";
import RelatedArticles from "@/components/RelatedArticles";
import SeoIntro from "@/components/SeoIntro";
import AiContextSection from "@/components/AiContextSection";
import Footer from "@/components/Footer";
import { usePageTitle, useMetaDescription, useCanonical } from "@/hooks/usePageTitle";

const Index = () => {
  usePageTitle("Agence marketing rénovation & BTP");
  useMetaDescription("Agendac, agence marketing spécialisée pour les sociétés de rénovation de l'habitat et du BTP. Génération de demandes qualifiées, publicité, SEO, sites web et tournages.");
  useCanonical("/");
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <GoogleReviews />
        <Services />
        <SeoIntro />
        <Clients />
        <Interviews />
        <YouTubeShorts />
        <ExemplesTournage />
        <Stats />
        <Team />
        <Gallery />
        <FAQ />
        <CaseStudy />
        <AiContextSection />
        <RelatedArticles
          slugs={[
            "internaliser-externaliser-marketing-renovation-btp",
            "achat-leads-renovation-mauvaise-strategie",
            "google-ads-vs-facebook-ads-renovation-habitat",
          ]}
          subtitle="Décryptages, stratégies et chiffres pour structurer votre acquisition en rénovation de l'habitat."
        />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
