import { Calendar, CalendarCheck, CalendarDays, FileCheck, ClipboardCheck, CheckCircle, FileSignature, Receipt, Star } from "lucide-react";
import { motion } from "framer-motion";

const FloatingCalendars = () => {
  return (
    <>
      {/* Original floating calendar items */}
      <motion.div 
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-[5%] glass-card p-4 rounded-2xl opacity-60 hidden lg:block"
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
      </motion.div>

      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-48 right-[8%] glass-card p-4 rounded-2xl opacity-50 hidden lg:block"
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
      </motion.div>

      <motion.div 
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[60%] left-[3%] glass-card p-4 rounded-2xl opacity-40 hidden xl:block"
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
      </motion.div>

      <motion.div 
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute top-[70%] right-[5%] glass-card p-4 rounded-2xl opacity-50 hidden xl:block"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
            <Calendar size={20} className="text-accent" />
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Jeudi 16h</div>
            <div className="text-sm font-medium text-foreground">Nouveau lead</div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[30%] left-[10%] glass-card p-3 rounded-xl opacity-30 hidden lg:block"
      >
        <div className="w-8 h-8 rounded-lg bg-primary/30 flex items-center justify-center">
          <CalendarCheck size={16} className="text-primary" />
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute top-[40%] right-[2%] glass-card p-3 rounded-xl opacity-35 hidden lg:block"
      >
        <div className="w-8 h-8 rounded-lg bg-green-500/30 flex items-center justify-center">
          <Calendar size={16} className="text-green-500" />
        </div>
      </motion.div>

      {/* NEW: Additional floating items - Devis signés */}
      <motion.div 
        animate={{ y: [0, -16, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        className="absolute top-[25%] left-[12%] glass-card p-4 rounded-2xl opacity-45 hidden xl:block"
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
      </motion.div>

      <motion.div 
        animate={{ y: [0, -22, 0] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="absolute top-[35%] right-[12%] glass-card p-4 rounded-2xl opacity-40 hidden xl:block"
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
      </motion.div>

      <motion.div 
        animate={{ y: [0, -18, 0], x: [0, 5, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
        className="absolute top-[55%] left-[15%] glass-card p-3 rounded-xl opacity-35 hidden lg:block"
      >
        <div className="w-8 h-8 rounded-lg bg-secondary/30 flex items-center justify-center">
          <FileCheck size={16} className="text-secondary" />
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-[40%] right-[10%] glass-card p-4 rounded-2xl opacity-45 hidden xl:block"
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
      </motion.div>

      <motion.div 
        animate={{ y: [0, -12, 0], rotate: [0, -2, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
        className="absolute top-[80%] left-[8%] glass-card p-3 rounded-xl opacity-30 hidden lg:block"
      >
        <div className="w-8 h-8 rounded-lg bg-green-500/30 flex items-center justify-center">
          <CheckCircle size={16} className="text-green-500" />
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        className="absolute top-[15%] right-[15%] glass-card p-3 rounded-xl opacity-35 hidden xl:block"
      >
        <div className="w-8 h-8 rounded-lg bg-accent/30 flex items-center justify-center">
          <ClipboardCheck size={16} className="text-accent" />
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, -18, 0], x: [0, -3, 0] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 2.2 }}
        className="absolute bottom-[25%] right-[3%] glass-card p-4 rounded-2xl opacity-40 hidden xl:block"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
            <CalendarCheck size={20} className="text-primary" />
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Vendredi 9h</div>
            <div className="text-sm font-medium text-foreground">Visite technique</div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 3.5 }}
        className="absolute top-[45%] left-[2%] glass-card p-3 rounded-xl opacity-25 hidden lg:block"
      >
        <div className="w-8 h-8 rounded-lg bg-secondary/30 flex items-center justify-center">
          <FileSignature size={16} className="text-secondary" />
        </div>
      </motion.div>
    </>
  );
};

export default FloatingCalendars;