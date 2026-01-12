const Partners = () => {
  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <p className="text-center text-muted-foreground mb-8 font-medium">
          Ils font confiance à Agendac
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60">
          {/* Partner logos represented as text badges */}
          {["Google Partner", "Meta Business Partner", "CVC Pro", "ENR Solutions", "Habitat+"].map(
            (partner, index) => (
              <div
                key={index}
                className="text-xl font-bold text-muted-foreground/80 hover:text-primary transition-colors"
              >
                {partner}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Partners;
