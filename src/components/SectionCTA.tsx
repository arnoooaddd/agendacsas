import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface SectionCTAProps {
  className?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

const SectionCTA = ({ 
  className = "", 
  title,
  description,
  buttonText,
  buttonLink
}: SectionCTAProps) => {
  const scrollToContact = () => {
    const footer = document.getElementById("contact");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`section-cta-container flex flex-col items-center justify-center text-center ${className}`}>
      {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
      {description && <p className="text-muted-foreground max-w-2xl mb-6">{description}</p>}
      <Button 
        onClick={buttonLink ? undefined : scrollToContact}
        asChild={!!buttonLink}
        variant="secondary" 
        size="lg" 
        className="group glow-secondary"
      >
        {buttonLink ? (
          <a href={buttonLink} className="flex items-center gap-2">
            {buttonText || "Entrer en contact"}
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        ) : (
          <span className="flex items-center gap-2">
            {buttonText || "Entrer en contact"}
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </span>
        )}
      </Button>
    </div>
  );
};

export default SectionCTA;