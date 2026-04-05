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
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <GoogleReviews />
        <Services />
        <Clients />
        <Interviews />
        <YouTubeShorts />
        <ExemplesTournage />
        <Stats />
        <Team />
        <Gallery />
        <FAQ />
        <CaseStudy />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
