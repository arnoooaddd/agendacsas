import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleReviews from "@/components/GoogleReviews";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle } from "lucide-react";
import { usePageTitle } from "@/hooks/usePageTitle";

const Confirmation = () => {
  usePageTitle("Confirmation");
  useEffect(() => {
    window.scrollTo(0, 0);
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    return () => { document.head.removeChild(meta); };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="relative pt-32 pb-16 overflow-hidden bg-background">
          <div className="absolute inset-0 gradient-mesh opacity-100" />
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-10">
              <div className="inline-flex items-center gap-2 glass-card px-5 py-2.5 mb-6 border-gradient">
                <CheckCircle size={16} className="text-primary" />
                <span className="text-sm font-medium text-foreground/80">Rendez-vous confirmé</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight">
                Merci, votre <span className="text-gradient">rendez-vous</span> est confirmé
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Un message de Kerim avant notre échange — prenez 2 minutes pour le visionner.
              </p>
            </div>

            <AnimatedSection direction="scale">
              <div
                className="mx-auto w-full"
                style={{
                  maxWidth: 900,
                  borderRadius: 16,
                  overflow: "hidden",
                  boxShadow: "0 6px 24px rgba(0,0,0,.12)",
                  aspectRatio: "16 / 9",
                  background: "#000",
                }}
              >
                <iframe
                  src="https://www.youtube.com/embed/w415js57_Ig"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                  style={{ width: "100%", height: "100%", border: 0, display: "block" }}
                />
              </div>
            </AnimatedSection>
          </div>
        </section>

        <GoogleReviews />
      </main>
      <Footer />
    </div>
  );
};

export default Confirmation;
