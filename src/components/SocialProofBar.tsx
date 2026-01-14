import { Star } from "lucide-react";

const SocialProofBar = () => {
  return (
    <div className="bg-primary/10 border-b border-primary/20 py-2.5 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-8 text-sm flex-wrap">
          <div className="flex items-center gap-2 text-foreground/90">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-yellow-500 text-yellow-500" />
              ))}
            </div>
            <span className="font-medium">4.9/5 sur Google</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-border" />
          <div className="flex items-center gap-2 text-foreground/90">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>+200 entreprises accompagnées</span>
          </div>
          <div className="hidden md:block w-px h-4 bg-border" />
          <div className="hidden md:flex items-center gap-2 text-foreground/90">
            <span>🏆</span>
            <span>N°1 de la rénovation de l'habitat</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProofBar;
