import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, ArrowRight, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
                Contactez-nous
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Prêt à accélérer votre{" "}
                <span className="text-primary">croissance</span> ?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Discutons de vos objectifs et voyons comment Agendac peut vous aider à générer plus de leads qualifiés.
              </p>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 text-foreground">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Phone size={22} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Téléphone</div>
                    <div className="font-semibold">+33 1 23 45 67 89</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-foreground">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Mail size={22} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="font-semibold">contact@agendac.fr</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-foreground">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin size={22} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Adresse</div>
                    <div className="font-semibold">France</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - CTA Card */}
            <div className="bg-card rounded-3xl p-10 shadow-xl border border-border">
              <div className="text-center mb-8">
                <div className="w-20 h-20 rounded-2xl gradient-hero flex items-center justify-center mx-auto mb-6">
                  <Calendar size={36} className="text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Réservez votre appel découverte
                </h3>
                <p className="text-muted-foreground">
                  30 minutes pour analyser votre situation et définir votre stratégie d'acquisition.
                </p>
              </div>

              <div className="space-y-4">
                <Button variant="secondary" size="xl" className="w-full group">
                  Entrer en contact
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  Sans engagement • Réponse sous 24h
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
