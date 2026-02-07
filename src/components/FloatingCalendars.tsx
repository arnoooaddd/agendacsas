import { Calendar, CalendarCheck, CalendarDays, FileSignature, Receipt, Star } from "lucide-react";

const FloatingCalendars = () => {
  return (
    <>
      <div 
        className="absolute top-32 left-[5%] glass-card p-4 rounded-2xl opacity-60 hidden lg:block animate-bounce-soft"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
            <Calendar size={20} className="text-primary" />
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Lundi 14h</div>
            <div className="text-sm font-medium text-foreground">RDV confirmé</div>
          </div>
        </div>
      </div>

      <div 
        className="absolute top-48 right-[8%] glass-card p-4 rounded-2xl opacity-50 hidden lg:block animate-float"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
            <CalendarCheck size={20} className="text-green-500" />
          </div>
          <div>
            <div className="text-xs text-muted-foreground">+3 RDV</div>
            <div className="text-sm font-medium text-foreground">Cette semaine</div>
          </div>
        </div>
      </div>

      <div 
        className="absolute top-[60%] left-[3%] glass-card p-4 rounded-2xl opacity-40 hidden xl:block animate-bounce-soft"
        style={{ animationDelay: "1s" }}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center">
            <CalendarDays size={20} className="text-secondary" />
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Mardi 10h</div>
            <div className="text-sm font-medium text-foreground">Lead qualifié</div>
          </div>
        </div>
      </div>

      <div 
        className="absolute top-[35%] right-[12%] glass-card p-4 rounded-2xl opacity-40 hidden xl:block animate-float"
        style={{ animationDelay: "1.2s" }}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
            <Receipt size={20} className="text-primary" />
          </div>
          <div>
            <div className="text-xs text-muted-foreground">+12 500 €</div>
            <div className="text-sm font-medium text-foreground">Nouveau contrat</div>
          </div>
        </div>
      </div>

      <div 
        className="absolute bottom-[40%] right-[10%] glass-card p-4 rounded-2xl opacity-45 hidden xl:block animate-bounce-soft"
        style={{ animationDelay: "2s" }}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-yellow-500/20 flex items-center justify-center">
            <Star size={20} className="text-yellow-500 fill-yellow-500" />
          </div>
          <div>
            <div className="text-xs text-muted-foreground">5 étoiles</div>
            <div className="text-sm font-medium text-foreground">Nouvel avis</div>
          </div>
        </div>
      </div>

      <div 
        className="absolute top-[25%] left-[12%] glass-card p-4 rounded-2xl opacity-45 hidden xl:block animate-float"
        style={{ animationDelay: "0.3s" }}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
            <FileSignature size={20} className="text-green-500" />
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Aujourd'hui</div>
            <div className="text-sm font-medium text-foreground">Devis signé ✓</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingCalendars;