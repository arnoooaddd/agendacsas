import { Calendar, CalendarCheck, FileSignature, Star, TrendingUp, Users, Video, Camera, Clapperboard, PhoneCall, Phone, Eye, Mail, MessageCircle, Heart, Megaphone } from "lucide-react";

interface ServiceFloatingElementsProps {
  variant?: "site" | "reseaux" | "tournage" | "rdv" | "communication";
}

const ServiceFloatingElements = ({ variant = "site" }: ServiceFloatingElementsProps) => {
  const elements = {
    site: [
      { icon: Calendar, label: "Site livré", sublabel: "Clé en main", color: "bg-primary/20", textColor: "text-primary", pos: "top-32 left-[5%]", anim: "animate-bounce-soft" },
      { icon: TrendingUp, label: "+45% trafic", sublabel: "En 30 jours", color: "bg-green-500/20", textColor: "text-green-500", pos: "top-48 right-[8%]", anim: "animate-float" },
      { icon: Star, label: "5 étoiles", sublabel: "Nouvel avis", color: "bg-yellow-500/20", textColor: "text-yellow-500", pos: "top-[60%] left-[3%]", anim: "animate-bounce-soft", delay: "1s", xl: true },
    ],
    reseaux: [
      { icon: Users, label: "+120 abonnés", sublabel: "Cette semaine", color: "bg-primary/20", textColor: "text-primary", pos: "top-32 left-[5%]", anim: "animate-bounce-soft" },
      { icon: CalendarCheck, label: "Compte créé", sublabel: "Instagram Pro", color: "bg-green-500/20", textColor: "text-green-500", pos: "top-48 right-[8%]", anim: "animate-float" },
      { icon: Star, label: "SEO local", sublabel: "Optimisé ✓", color: "bg-yellow-500/20", textColor: "text-yellow-500", pos: "top-[60%] left-[3%]", anim: "animate-bounce-soft", delay: "1s", xl: true },
    ],
    tournage: [
      { icon: Camera, label: "Tournage programmé", sublabel: "Mardi 9h sur site", color: "bg-primary/20", textColor: "text-primary", pos: "top-32 left-[5%]", anim: "animate-bounce-soft" },
      { icon: Clapperboard, label: "Script validé", sublabel: "Prêt à tourner", color: "bg-secondary/20", textColor: "text-secondary", pos: "top-48 right-[8%]", anim: "animate-float" },
      { icon: Video, label: "12 vidéos livrées", sublabel: "Cette semaine", color: "bg-green-500/20", textColor: "text-green-500", pos: "top-[60%] left-[3%]", anim: "animate-bounce-soft", delay: "1s", xl: true },
      { icon: Calendar, label: "Planning organisé", sublabel: "De A à Z", color: "bg-primary/20", textColor: "text-primary", pos: "top-[35%] right-[12%]", anim: "animate-float", delay: "1.2s", xl: true },
      { icon: Star, label: "Qualité pro", sublabel: "100% internalisé", color: "bg-yellow-500/20", textColor: "text-yellow-500", pos: "bottom-[35%] right-[10%]", anim: "animate-bounce-soft", delay: "2s", xl: true },
    ],
    rdv: [
      { icon: PhoneCall, label: "RDV confirmé", sublabel: "Lundi 14h", color: "bg-primary/20", textColor: "text-primary", pos: "top-32 left-[5%]", anim: "animate-bounce-soft" },
      { icon: CalendarCheck, label: "+3 RDV qualifiés", sublabel: "Cette semaine", color: "bg-green-500/20", textColor: "text-green-500", pos: "top-48 right-[8%]", anim: "animate-float" },
      { icon: FileSignature, label: "Devis envoyé", sublabel: "Aujourd'hui", color: "bg-secondary/20", textColor: "text-secondary", pos: "top-[60%] left-[3%]", anim: "animate-bounce-soft", delay: "1s", xl: true },
      { icon: Phone, label: "Prospect qualifié", sublabel: "Par téléphone", color: "bg-primary/20", textColor: "text-primary", pos: "top-[35%] right-[12%]", anim: "animate-float", delay: "1.2s", xl: true },
      { icon: Star, label: "Lead chaud", sublabel: "Projet < 3 mois", color: "bg-yellow-500/20", textColor: "text-yellow-500", pos: "bottom-[35%] right-[10%]", anim: "animate-bounce-soft", delay: "2s", xl: true },
    ],
    communication: [
      { icon: Eye, label: "+357 000 vues", sublabel: "Ce mois-ci", color: "bg-primary/20", textColor: "text-primary", pos: "top-32 left-[5%]", anim: "animate-bounce-soft" },
      { icon: FileSignature, label: "Nouvelle signature", sublabel: "+12 500 €", color: "bg-green-500/20", textColor: "text-green-500", pos: "top-32 right-[5%]", anim: "animate-float" },
      { icon: Phone, label: "Appel entrant", sublabel: "Demande de devis", color: "bg-secondary/20", textColor: "text-secondary", pos: "top-[60%] left-[3%]", anim: "animate-bounce-soft", delay: "1s", xl: true },
      { icon: Mail, label: "Nouveau lead", sublabel: "Formulaire reçu", color: "bg-primary/20", textColor: "text-primary", pos: "top-[58%] right-[5%]", anim: "animate-float", delay: "1.2s", xl: true },
      { icon: Heart, label: "+248 interactions", sublabel: "Sur vos réseaux", color: "bg-pink-500/20", textColor: "text-pink-500", pos: "bottom-[40%] left-[10%]", anim: "animate-float", delay: "0.6s", xl: true },
      { icon: Megaphone, label: "Campagne live", sublabel: "Meta · Google · YT", color: "bg-yellow-500/20", textColor: "text-yellow-500", pos: "bottom-[15%] right-[8%]", anim: "animate-bounce-soft", delay: "2s", xl: true },
    ],
  };

  return (
    <>
      {elements[variant].map((el, i) => (
        <div
          key={i}
          className={`absolute ${el.pos} glass-card p-4 rounded-2xl opacity-50 hidden ${el.xl ? 'xl:block' : 'lg:block'} ${el.anim}`}
          style={el.delay ? { animationDelay: el.delay } : undefined}
        >
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl ${el.color} flex items-center justify-center`}>
              <el.icon size={20} className={el.textColor} />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">{el.sublabel}</div>
              <div className="text-sm font-medium text-foreground">{el.label}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ServiceFloatingElements;
