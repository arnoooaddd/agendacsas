import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleReviews from "@/components/GoogleReviews";
import AnimatedSection from "@/components/AnimatedSection";
import { CalendarCheck, Play } from "lucide-react";

const Rdv = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    // noindex
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);

    // LeadConnector embed script
    if (!document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]')) {
      const s = document.createElement("script");
      s.src = "https://link.msgsndr.com/js/form_embed.js";
      s.type = "text/javascript";
      s.async = true;
      document.body.appendChild(s);
    }
    return () => { document.head.removeChild(meta); };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero + calendrier */}
        <section className="relative pt-32 pb-16 overflow-hidden bg-background">
          <div className="absolute inset-0 gradient-mesh opacity-100" />
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-10">
              <div className="inline-flex items-center gap-2 glass-card px-5 py-2.5 mb-6 border-gradient">
                <CalendarCheck size={16} className="text-primary" />
                <span className="text-sm font-medium text-foreground/80">Réservez votre créneau</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight">
                Prenez <span className="text-gradient">rendez-vous</span> avec Agendac
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Choisissez le créneau qui vous convient. L'appel dure environ 30 minutes.
              </p>
            </div>

            <AnimatedSection direction="scale">
              <div className="max-w-4xl mx-auto glass-card p-2 sm:p-4 border-gradient bg-white/80">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/booking/57xP6cJ3bacw7ZTpsRXe"
                  style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "750px" }}
                  scrolling="no"
                  id="ipywTpfoz3OlUNwBeShu_1776712583715"
                />
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Vidéo Moments clés des interviews */}
        <section className="py-20 relative overflow-hidden bg-background">
          <div className="absolute inset-0 gradient-mesh opacity-40" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <AnimatedSection>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 tracking-tight">
                  Interview de vos confrères,{" "}
                  <span className="text-gradient-warm">partenaires Agendac</span>
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <p className="text-muted-foreground text-lg">Découvrez leurs retours d'expérience</p>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={0.2} direction="scale">
              <div className="max-w-4xl mx-auto">
                <div className="glass-card p-2 sm:p-3 border-gradient glow-primary">
                  <div className="flex items-center gap-2 px-3 py-2 mb-2">
                    <Play size={14} className="text-primary" />
                    <span className="text-xs font-medium text-muted-foreground">Moments clés des interviews</span>
                  </div>
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-card shadow-lg">
                    <iframe
                      src="https://www.loom.com/embed/c16266ef4214491eae19d087e0e02eea"
                      frameBorder="0"
                      loading="lazy"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                </div>
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

export default Rdv;
