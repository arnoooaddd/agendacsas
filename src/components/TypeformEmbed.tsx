import { useEffect } from "react";
import { FileText } from "lucide-react";

const TypeformEmbed = () => {
  useEffect(() => {
    // Load Typeform script
    const script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[src="//embed.typeform.com/next/embed.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-dark" />
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/15 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/15 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 glass-card px-5 py-2.5 mb-6 border-gradient">
            <FileText size={16} className="text-primary" />
            <span className="text-sm font-medium text-foreground/80">
              Démarrer maintenant
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Prêt à <span className="text-gradient">accélérer</span> votre croissance ?
          </h2>
          <p className="text-muted-foreground text-lg">
            Remplissez le formulaire ci-dessous et un expert vous contactera sous 24h.
          </p>
        </div>

        {/* Typeform Embed */}
        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-4 sm:p-8 border-gradient glow-primary">
            <div 
              data-tf-live="01JYVP6HGCMDWP8MECVSYMTB5P"
              style={{ minHeight: '500px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypeformEmbed;
