import { Youtube, Linkedin, Facebook, Instagram, Zap, Heart, Mail, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Youtube, href: "https://www.youtube.com/@agendac-fr", label: "YouTube" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/agendac-sas/", label: "LinkedIn" },
    { icon: Facebook, href: "https://www.facebook.com/agendac.fr", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/agendac.fr", label: "Instagram" },
  ];

  return (
    <footer id="contact" className="relative overflow-hidden border-t border-border/30 bg-muted/30">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh opacity-30" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center animate-pulse-soft">
                <Zap size={22} className="text-primary-foreground" />
              </div>
              <div>
                <span className="text-xl font-bold text-foreground">
                  Agendac
                </span>
                <span className="block text-xs text-muted-foreground">
                  Agence d'acquisition
                </span>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              L'accélérateur de croissance N°1 des sociétés de rénovation de l'habitat. Des rendez-vous qualifiés 100% exclusifs pour développer votre activité.
            </p>
            <div className="flex items-center gap-3 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-primary transition-all duration-300 hover:-translate-y-1"
                >
                  <social.icon size={18} />
                </a>
              ))}
              {/* X (Twitter) */}
              <a
                href="https://x.com/agendac_sas"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-primary transition-all duration-300 hover:-translate-y-1"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
            {/* Contact buttons */}
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="secondary" size="sm" className="glow-secondary">
                <a href="https://api.leadconnectorhq.com/widget/booking/57xP6cJ3bacw7ZTpsRXe" target="_blank" rel="noopener noreferrer">
                  Prendre rendez-vous
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </Button>
              <Button asChild variant="outline" size="sm">
                <a href="mailto:contact@agendac.fr">
                  <Mail size={14} className="mr-1" />
                  contact@agendac.fr
                </a>
              </Button>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-3">
              {[
                { label: "Témoignages", href: "#temoignages" },
                { label: "Résultats", href: "#resultats" },
                { label: "Équipe", href: "#equipe" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Informations légales</h4>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li>SIREN : 930 805 981</li>
              <li>Capital Social : 10 000 €</li>
              <li className="pt-2">
                <span className="text-xs leading-relaxed block">
                  Une société du groupe AELU-MEDIA LLC
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/30 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              © {currentYear} Agendac SAS tous droits réservés. Fait avec <Heart size={14} className="text-secondary animate-pulse" /> en France.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Politique de confidentialité
              </a>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-border/20">
            <p className="text-xs text-muted-foreground/70 text-center max-w-4xl mx-auto leading-relaxed">
              Ce site ne fait pas partie du site Web de Facebook, Instagram ou de META Inc. De plus, ce site n'est PAS approuvé par Facebook, ni Instagram de quelque manière que ce soit. FACEBOOK et INSTAGRAM sont des marques commerciales de META, Inc.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;