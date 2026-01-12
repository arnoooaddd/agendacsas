import { Youtube, Linkedin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-extrabold text-background">
                Agendac
              </span>
              <span className="text-xs text-background/60">
                agence d'acquisition
              </span>
            </div>
            <p className="text-background/70 mb-6 max-w-md">
              L'accélérateur de croissance N°1 des sociétés de rénovation de l'habitat. Des rendez-vous qualifiés pour développer votre activité.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Youtube size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-background/70 hover:text-background transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#resultats" className="text-background/70 hover:text-background transition-colors">
                  Résultats
                </a>
              </li>
              <li>
                <a href="#temoignages" className="text-background/70 hover:text-background transition-colors">
                  Témoignages
                </a>
              </li>
              <li>
                <a href="#equipe" className="text-background/70 hover:text-background transition-colors">
                  L'Équipe
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-background mb-4">Contact</h4>
            <ul className="space-y-3 text-background/70">
              <li>contact@agendac.fr</li>
              <li>+33 1 23 45 67 89</li>
              <li>France</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-background/60 text-sm">
            © {currentYear} Agendac. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-background/60 hover:text-background transition-colors">
              Mentions légales
            </a>
            <a href="#" className="text-background/60 hover:text-background transition-colors">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
