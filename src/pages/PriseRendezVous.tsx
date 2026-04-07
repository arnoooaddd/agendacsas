import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SectionCTA from "@/components/SectionCTA";
import ExemplesTournage from "@/components/ExemplesTournage";
import GoogleReviews from "@/components/GoogleReviews";
import CaseStudy from "@/components/CaseStudy";
import { CalendarCheck, CheckCircle, Star, ArrowRight, Shield, Target, Clock, Users, Zap, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const PriseRendezVous = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToContact = () => {
    const footer = document.getElementById("contact");
    if (footer) footer.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-background">
          <div className="absolute inset-0 gradient-mesh opacity-100" />
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary/8 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1.5s" }} />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center gap-2 glass-card px-5 py-2.5 mb-6 border-gradient">
                  <Star size={16} className="text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-medium text-foreground/80">Service phare Agendac</span>
                </div>
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight"
              >
                Prise de{" "}
                <span className="text-gradient">rendez-vous qualifiés</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10"
              >
                Agendac gère votre communication, filtre les prospects, les qualifie par téléphone et prend rendez-vous. Vous ne payez que lorsqu'un devis est envoyé au client.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-4"
              >
                <Button
                  onClick={() => document.getElementById("etude-de-cas")?.scrollIntoView({ behavior: "smooth" })}
                  variant="secondary" size="lg" className="group glow-secondary"
                >
                  Voir une étude de cas
                  <ArrowRight className="group-hover:translate-x-1 transition-transform w-4 h-4" />
                </Button>
                <Button
                  onClick={() => document.getElementById("formule-pprdv")?.scrollIntoView({ behavior: "smooth" })}
                  variant="outline" size="lg" className="group"
                >
                  En savoir plus sur l'offre
                  <ArrowRight className="group-hover:translate-x-1 transition-transform w-4 h-4" />
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Avis Google */}
        <GoogleReviews />

        {/* Étude de cas */}
        <CaseStudy />

        {/* Formule PP-RDV */}
        <section id="formule-pprdv" className="py-24 relative overflow-hidden bg-background">
          <div className="absolute inset-0 gradient-mesh opacity-20" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedSection>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 tracking-tight">
                  Formule <span className="text-gradient">PP-RDV</span> — Paie-par-rendez-vous
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <p className="text-muted-foreground text-lg">
                   Un modèle simple : vous ne payez que lorsqu'un devis est envoyé et qu'une intention de vente est réalisée.
                </p>
              </AnimatedSection>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
              <AnimatedSection delay={0.2} direction="scale">
                <div className="glass-card p-8 border-gradient bg-white/80">
                  <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <CalendarCheck className="text-primary" size={24} />
                    Comment ça fonctionne
                  </h3>
                  <div className="space-y-5">
                    {[
                      { icon: Zap, text: "Déploiement de l'infrastructure Agendac sur votre entreprise" },
                      { icon: Target, text: "Génération de prospects via des campagnes publicitaires ciblées" },
                      { icon: Users, text: "Qualification stricte par téléphone par notre équipe" },
                      { icon: CalendarCheck, text: "Prise de rendez-vous directement dans votre agenda" },
                      { icon: ThumbsUp, text: "Facturation uniquement lorsqu'un devis est envoyé au client" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <item.icon size={18} className="text-primary" />
                        </div>
                        <p className="text-foreground font-medium pt-2">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3} direction="scale">
                <div className="glass-card p-6 border-gradient bg-white/80">
                  <div className="bg-primary/5 rounded-xl p-6 mb-6">
                    <h4 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
                      <Shield size={20} />
                      Définition d'un RDV commercialement qualifié
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <p className="text-foreground text-sm">
                          Un rendez-vous est qualifié dès lors qu'<strong>un devis a été réalisé</strong> (intention de vente de votre part).
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-red-500 font-bold mt-0.5 flex-shrink-0 text-sm">✗</span>
                        <p className="text-muted-foreground text-sm">
                          S'il n'y a <strong>pas eu de devis</strong> envoyé au client, le rendez-vous n'est pas comptabilisé (client absent, problème technique, etc.)
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 bg-muted/50 rounded-xl">
                      <p className="text-sm font-medium text-foreground mb-1 flex items-center gap-2">
                        <Clock size={16} className="text-primary" />
                        Mise en place de l'infrastructure
                      </p>
                      <p className="text-primary font-bold text-lg">21 jours</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-xl">
                      <p className="text-sm font-medium text-foreground mb-1">Commande minimum</p>
                      <p className="text-primary font-bold text-lg">20 rendez-vous</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-xl">
                      <p className="text-sm font-medium text-foreground mb-1">Frais publicitaires</p>
                      <p className="text-muted-foreground text-sm">À votre charge — budget défini ensemble lors de l'appel de mise en route</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-xl">
                      <p className="text-sm font-medium text-foreground mb-1">Tarif par rendez-vous</p>
                      <p className="text-muted-foreground text-sm">Défini durant l'appel visio — variable selon le secteur, l'industrie, le nombre de services, la concurrence</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Ce qui nous différencie */}
        <section className="py-24 relative overflow-hidden bg-[#DFF1FF]">
          <div className="absolute inset-0 gradient-mesh opacity-30" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedSection>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 tracking-tight">
                  Ce qui nous <span className="text-gradient-warm">différencie</span>
                </h2>
              </AnimatedSection>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { icon: Shield, title: "Votre marque, pas la nôtre", desc: "Nous mettons en avant votre entreprise. Pas de marque blanche — votre nom, votre image, vos couleurs." },
                { icon: Target, title: "Qualification stricte", desc: "Chaque prospect est appelé et qualifié par notre équipe avant d'être envoyé en rendez-vous." },
                { icon: CalendarCheck, title: "Paiement au résultat", desc: "Vous ne payez que les rendez-vous qui aboutissent à un devis. Pas de devis = pas de facturation." },
                { icon: Zap, title: "Infrastructure complète", desc: "Pages de capture, publicités, suivi CRM, relances — tout est géré et optimisé par Agendac." },
                { icon: Users, title: "Équipe dédiée", desc: "Un responsable communication, un media buyer et un closer sont assignés à votre compte." },
                { icon: Clock, title: "Déploiement en 21 jours", desc: "De l'appel de mise en route aux premiers rendez-vous : 3 semaines maximum." },
              ].map((item, index) => (
                <AnimatedSection key={index} delay={index * 0.05} direction="scale">
                  <div className="glass-card p-6 border-gradient h-full hover:glow-primary transition-all duration-300">
                    <item.icon size={28} className="text-primary mb-4" />
                    <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <SectionCTA className="mt-16" />
          </div>
        </section>

        {/* Exemples de tournage */}
        <ExemplesTournage ctaMode="contact" />
      </main>
      <Footer />
    </div>
  );
};

export default PriseRendezVous;
