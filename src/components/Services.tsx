import { CalendarCheck, Video, Globe, Share2, ArrowRight, Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { Button } from "./ui/button";

const services = [
  {
    icon: CalendarCheck,
    title: "Prise de rendez-vous qualifiés",
    desc: "Agendac gère votre communication, qualifie les prospects par téléphone et prend rendez-vous. Vous ne payez que lorsqu'un devis est envoyé.",
    href: "/prise-rendez-vous",
    star: true,
  },
  {
    icon: Video,
    title: "Tournage professionnel",
    desc: "Scripts, tournage sur site, montage et livraison — 100 % internalisé. Des vidéos pensées pour la publicité et les réseaux sociaux.",
    href: "/tournage",
    star: true,
  },
  {
    icon: Globe,
    title: "Création de site internet",
    desc: "Un site professionnel orienté conversion, conçu pour transformer vos visiteurs en prospects qualifiés.",
    href: "/creation-site-internet",
    star: false,
  },
  {
    icon: Share2,
    title: "Création de réseaux sociaux",
    desc: "Présence professionnelle sur les réseaux sociaux pour renforcer votre crédibilité et votre visibilité.",
    href: "/creation-reseaux-sociaux",
    star: false,
  },
];

const Services = () => {
  return (
    <section id="nos-services" className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 gradient-mesh opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6 border-gradient">
              <CalendarCheck size={16} className="text-primary" />
              <span className="text-sm font-medium text-foreground/80">Ce que nous proposons</span>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Nos <span className="text-gradient">services</span>
            </h2>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.1} direction="scale">
              <a href={service.href} className="block h-full">
                <div className={`glass-card p-6 border-gradient h-full hover:glow-primary transition-all duration-300 hover:-translate-y-1 relative ${service.star ? "ring-1 ring-primary/20" : ""}`}>
                  {service.star && (
                    <div className="absolute -top-3 right-4 inline-flex items-center gap-1 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      <Star size={12} className="fill-current" />
                      Service phare
                    </div>
                  )}
                  <service.icon size={28} className="text-primary mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{service.desc}</p>
                  <span className="text-primary text-sm font-medium flex items-center gap-1">
                    En savoir plus <ArrowRight size={14} />
                  </span>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
