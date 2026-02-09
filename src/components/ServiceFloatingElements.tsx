import { Calendar, CalendarCheck, FileSignature, Star, TrendingUp, Users } from "lucide-react";

interface ServiceFloatingElementsProps {
  variant?: "site" | "reseaux" | "tournage";
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
      { icon: FileSignature, label: "Script validé", sublabel: "Prêt à tourner", color: "bg-primary/20", textColor: "text-primary", pos: "top-32 left-[5%]", anim: "animate-bounce-soft" },
      { icon: TrendingUp, label: "12 vidéos", sublabel: "Livrées", color: "bg-green-500/20", textColor: "text-green-500", pos: "top-48 right-[8%]", anim: "animate-float" },
      { icon: Star, label: "100% interne", sublabel: "Aucune sous-traitance", color: "bg-yellow-500/20", textColor: "text-yellow-500", pos: "top-[60%] left-[3%]", anim: "animate-bounce-soft", delay: "1s", xl: true },
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
