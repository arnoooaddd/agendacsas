import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

interface SectionCTAProps {
  className?: string;
}

const SectionCTA = ({ className = "" }: SectionCTAProps) => {
  const scrollToContact = () => {
    const footer = document.getElementById("contact");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`section-cta-container flex flex-col sm:flex-row items-center justify-center gap-4 ${className}`}>
      <Button 
        onClick={scrollToContact}
        variant="secondary" 
        size="lg" 
        className="group glow-secondary"
      >
        Entrer en contact
        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
      </Button>
      <Button 
        asChild
        variant="outline" 
        size="lg" 
        className="group"
      >
        <a href="https://api.leadconnectorhq.com/widget/booking/57xP6cJ3bacw7ZTpsRXe" target="_blank" rel="noopener noreferrer">
          <Calendar size={18} className="mr-1 text-primary" />
          Prendre rendez-vous
        </a>
      </Button>
    </div>
  );
};

export default SectionCTA;