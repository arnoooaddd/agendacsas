import { Calendar, CalendarCheck, CalendarDays } from "lucide-react";

const FloatingCalendars = () => {
  return (
    <>
      {/* Floating calendar items */}
      <div className="absolute top-32 left-[5%] glass-card p-4 rounded-2xl animate-float opacity-60 hidden lg:block" style={{ animationDelay: '0s' }}>
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

      <div className="absolute top-48 right-[8%] glass-card p-4 rounded-2xl animate-float opacity-50 hidden lg:block" style={{ animationDelay: '-2s' }}>
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

      <div className="absolute top-[60%] left-[3%] glass-card p-4 rounded-2xl animate-float opacity-40 hidden xl:block" style={{ animationDelay: '-4s' }}>
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

      <div className="absolute top-[70%] right-[5%] glass-card p-4 rounded-2xl animate-float opacity-50 hidden xl:block" style={{ animationDelay: '-1s' }}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
            <Calendar size={20} className="text-accent" />
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Jeudi 16h</div>
            <div className="text-sm font-medium text-foreground">Nouveau lead</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[30%] left-[10%] glass-card p-3 rounded-xl animate-float opacity-30 hidden lg:block" style={{ animationDelay: '-3s' }}>
        <div className="w-8 h-8 rounded-lg bg-primary/30 flex items-center justify-center">
          <CalendarCheck size={16} className="text-primary" />
        </div>
      </div>

      <div className="absolute top-[40%] right-[2%] glass-card p-3 rounded-xl animate-float opacity-35 hidden lg:block" style={{ animationDelay: '-5s' }}>
        <div className="w-8 h-8 rounded-lg bg-green-500/30 flex items-center justify-center">
          <Calendar size={16} className="text-green-500" />
        </div>
      </div>
    </>
  );
};

export default FloatingCalendars;
