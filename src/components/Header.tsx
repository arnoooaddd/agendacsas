import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Témoignages", href: "#temoignages" },
    { label: "Résultats", href: "#resultats" },
    { label: "Équipe", href: "#equipe" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header 
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "glass border-b border-border/50 py-3 top-0" 
          : "bg-transparent py-5 top-[42px]"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center glow-primary">
              <Zap size={22} className="text-primary-foreground" />
            </div>
            <div>
              <span className="text-xl font-bold text-foreground">
                Agendac
              </span>
              <span className="hidden sm:block text-xs text-muted-foreground">
                Agence d'acquisition
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-foreground/70 hover:text-foreground font-medium transition-colors rounded-lg hover:bg-muted/30"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="secondary" size="lg" className="glow-secondary">
              Réserver un appel
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden w-10 h-10 rounded-xl glass flex items-center justify-center text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 glass border-t border-border/50 animate-slide-up">
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
            <Button variant="secondary" className="mt-4 w-full glow-secondary">
              Réserver un appel
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
