import { Link } from "react-router-dom";
import { ArrowRight, CalendarCheck, Video, Globe, Share2, type LucideIcon } from "lucide-react";

export type ServiceKey = "prise-rendez-vous" | "tournage" | "creation-site-internet" | "creation-reseaux-sociaux";

interface ServiceConfig {
  title: string;
  badge: string;
  description: string;
  cta: string;
  href: string;
  icon: LucideIcon;
}

const services: Record<ServiceKey, ServiceConfig> = {
  "prise-rendez-vous": {
    title: "Prise de rendez-vous qualifiés",
    badge: "Service phare Agendac",
    description:
      "Agendac génère vos prospects, les qualifie par téléphone et remplit votre agenda de rendez-vous prêts à signer. Vous ne payez qu'au devis envoyé.",
    cta: "Découvrir l'offre PP-RDV",
    href: "/prise-rendez-vous",
    icon: CalendarCheck,
  },
  tournage: {
    title: "Tournage vidéo professionnel",
    badge: "Production 100 % internalisée",
    description:
      "Scripts orientés conversion, tournage sur site et montage performance : des vidéos qui captent l'attention et alimentent vos campagnes publicitaires.",
    cta: "Voir l'offre tournage",
    href: "/tournage",
    icon: Video,
  },
  "creation-site-internet": {
    title: "Création de site internet",
    badge: "Optimisé conversion & SEO local",
    description:
      "Un site rapide, responsive et orienté conversion, prêt à recevoir vos campagnes Google et Meta — avec tracking, CRM et SEO local intégrés.",
    cta: "Voir l'offre site internet",
    href: "/creation-site-internet",
    icon: Globe,
  },
  "creation-reseaux-sociaux": {
    title: "Création de réseaux sociaux",
    badge: "Mise en place professionnelle",
    description:
      "Création et paramétrage de vos plateformes (Meta, Google Business, YouTube, LinkedIn) avec interconnexion publicitaire complète.",
    cta: "Voir l'offre réseaux sociaux",
    href: "/creation-reseaux-sociaux",
    icon: Share2,
  },
};

interface RelatedServiceProps {
  service: ServiceKey;
  intro?: string;
}

const RelatedService = ({ service, intro }: RelatedServiceProps) => {
  const config = services[service];
  const Icon = config.icon;

  return (
    <aside className="my-12 not-prose">
      <div className="glass-card border-gradient p-6 sm:p-8 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col sm:flex-row items-start gap-5">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Icon size={26} className="text-primary" />
          </div>
          <div className="flex-1">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-wide text-primary bg-primary/10 px-2.5 py-1 rounded-full mb-3">
              {config.badge}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 leading-snug">
              {config.title}
            </h3>
            {intro && <p className="text-sm text-muted-foreground italic mb-2">{intro}</p>}
            <p className="text-sm sm:text-base text-muted-foreground mb-5">{config.description}</p>
            <Link
              to={config.href}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors px-5 py-2.5 rounded-full text-sm font-semibold group"
            >
              {config.cta}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default RelatedService;