import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GoogleReviews from "@/components/GoogleReviews";
import Stats from "@/components/Stats";
import Mission from "@/components/Mission";
import Clients from "@/components/Clients";
import Interviews from "@/components/Interviews";
import YouTubeShorts from "@/components/YouTubeShorts";
import Team from "@/components/Team";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import CaseStudy from "@/components/CaseStudy";
import TypeformEmbed from "@/components/TypeformEmbed";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <GoogleReviews />
        <Mission />
        <Clients />
        <Interviews />
        <YouTubeShorts />
        <Stats />
        <Team />
        <Gallery />
        <FAQ />
        <CaseStudy />
        <TypeformEmbed />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default Index;
