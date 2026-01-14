import Header from "@/components/Header";
import SocialProofBar from "@/components/SocialProofBar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Mission from "@/components/Mission";
import Clients from "@/components/Clients";
import GoogleReviews from "@/components/GoogleReviews";
import Interviews from "@/components/Interviews";
import Team from "@/components/Team";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import CaseStudy from "@/components/CaseStudy";
import TypeformEmbed from "@/components/TypeformEmbed";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SocialProofBar />
      <Header />
      <main>
        <Hero />
        <Stats />
        <Mission />
        <Clients />
        <GoogleReviews />
        <Interviews />
        <Team />
        <Gallery />
        <FAQ />
        <CaseStudy />
        <TypeformEmbed />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
