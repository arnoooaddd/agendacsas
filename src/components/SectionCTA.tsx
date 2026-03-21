import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
    <div className={`section-cta-container flex items-center justify-center ${className}`}>
      <Button 
        onClick={scrollToContact}
        variant="secondary" 
        size="lg" 
        className="group glow-secondary"
      >
        Entrer en contact
        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  );
};

export default SectionCTA;