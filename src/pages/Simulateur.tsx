import { useEffect } from "react";

const Simulateur = () => {
  useEffect(() => {
    const params = window.location.search;
    window.location.href = "https://agendacsas.fr/simulateur" + params;
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <p className="text-muted-foreground">Redirection en cours...</p>
    </div>
  );
};

export default Simulateur;