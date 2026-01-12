import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Calendar, FileText, Send, Phone, ArrowRight } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-dark" />
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/15 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/15 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
            <Phone size={16} className="text-primary" />
            <span className="text-sm font-medium text-foreground/80">
              Contactez-nous
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Prêt à <span className="text-gradient">accélérer</span> ?
          </h2>
          <p className="text-muted-foreground text-lg">
            Choisissez le moyen de contact qui vous convient le mieux.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {/* WhatsApp */}
          <a
            href="https://wa.me/33123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-8 border-gradient group hover:glow-accent transition-all duration-500 text-center cursor-pointer"
          >
            <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500/30 transition-colors">
              <MessageCircle size={32} className="text-green-500" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">WhatsApp</h3>
            <p className="text-muted-foreground mb-4">
              Réponse instantanée sur WhatsApp
            </p>
            <span className="inline-flex items-center gap-2 text-green-500 font-medium group-hover:gap-3 transition-all">
              Nous écrire
              <ArrowRight size={16} />
            </span>
          </a>

          {/* Calendly */}
          <a
            href="https://calendly.com/agendac"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-8 border-gradient group hover:glow-primary transition-all duration-500 text-center cursor-pointer"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/30 transition-colors">
              <Calendar size={32} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Calendly</h3>
            <p className="text-muted-foreground mb-4">
              Réservez un créneau dans notre agenda
            </p>
            <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
              Réserver un appel
              <ArrowRight size={16} />
            </span>
          </a>

          {/* Form */}
          <div
            className="glass-card p-8 border-gradient group hover:glow-secondary transition-all duration-500 text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/30 transition-colors">
              <FileText size={32} className="text-secondary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Formulaire</h3>
            <p className="text-muted-foreground mb-4">
              Remplissez le formulaire ci-dessous
            </p>
            <span className="inline-flex items-center gap-2 text-secondary font-medium">
              Réponse sous 24h
            </span>
          </div>
        </div>

        {/* Lead Form */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="glass-card p-8 border-gradient">
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">
              Demande de contact
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Nom complet *
                </label>
                <Input
                  type="text"
                  placeholder="Jean Dupont"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-muted/50 border-border/50 focus:border-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Entreprise *
                </label>
                <Input
                  type="text"
                  placeholder="Votre entreprise"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="bg-muted/50 border-border/50 focus:border-primary"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <Input
                  type="email"
                  placeholder="jean@entreprise.fr"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-muted/50 border-border/50 focus:border-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Téléphone *
                </label>
                <Input
                  type="tel"
                  placeholder="06 12 34 56 78"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-muted/50 border-border/50 focus:border-primary"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <Textarea
                placeholder="Décrivez votre projet et vos objectifs..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-muted/50 border-border/50 focus:border-primary min-h-[120px]"
                rows={4}
              />
            </div>

            <Button type="submit" variant="secondary" size="xl" className="w-full group glow-secondary">
              Envoyer ma demande
              <Send size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>

            <p className="text-center text-muted-foreground text-sm mt-4">
              En soumettant ce formulaire, vous acceptez notre politique de confidentialité.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
