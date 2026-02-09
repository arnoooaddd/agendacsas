import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoAgendac from "@/assets/logo-agendac.webp";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Témoignages", href: "#temoignages" },
    { label: "Résultats", href: "#resultats" },
    { label: "Équipe", href: "#equipe" },
    { label: "Création de site", href: "/creation-site-internet" },
    { label: "Réseaux sociaux", href: "/creation-reseaux-sociaux" },
    { label: "Tournage vidéo", href: "/tournage" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToContact = () => {
    const footer = document.getElementById("contact");
    if (footer) footer.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header 
      className={`fixed left-0 right-0 z-50 transition-all duration-500 top-0 animate-slide-up ${
        isScrolled ? "glass border-b border-border/50 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
              <img src={logoAgendac} alt="Agendac" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="text-xl font-bold text-foreground">Agendac</span>
              <span className="hidden sm:block text-xs text-muted-foreground">Agence d'acquisition</span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-foreground/70 hover:text-foreground text-sm font-medium transition-colors rounded-lg hover:bg-muted/30"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button onClick={scrollToContact} variant="secondary" size="lg" className="glow-secondary hover:scale-105 transition-transform">
              Entrer en contact
            </Button>
          </div>

          <button
            className="lg:hidden w-10 h-10 rounded-xl glass flex items-center justify-center text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 glass border-t border-border/50 overflow-hidden animate-fade-in">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-foreground/70 hover:text-foreground font-medium py-3 px-4 rounded-xl hover:bg-muted/30 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button onClick={scrollToContact} variant="secondary" className="mt-4 w-full glow-secondary">
              Entrer en contact
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
