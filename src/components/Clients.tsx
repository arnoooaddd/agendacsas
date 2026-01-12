import { useEffect } from "react";
import { Building2 } from "lucide-react";

const Clients = () => {
  useEffect(() => {
    // Ensure Elfsight script is loaded
    const existingScript = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]');
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="py-20 relative overflow-hidden border-y border-border/30">
      {/* Background */}
      <div className="absolute inset-0 bg-card/50" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-4">
            <Building2 size={16} className="text-primary" />
            <span className="text-sm font-medium text-foreground/80">
              Nos clients
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
            Ils nous font <span className="text-gradient">confiance</span>
          </h3>
        </div>

        {/* Elfsight Logo Showcase Widget */}
        <div className="max-w-6xl mx-auto">
          <div 
            className="elfsight-app-b1e000b2-31a9-48e4-8175-d63a0e2fdacd" 
            data-elfsight-app-lazy
          />
        </div>
      </div>
    </section>
  );
};

export default Clients;
