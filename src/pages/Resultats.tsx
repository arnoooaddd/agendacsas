import { useEffect } from "react";

const Resultats = () => {
  useEffect(() => {
    window.location.href = "https://agendacsas.fr/resultats";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <p className="text-muted-foreground">Redirection en cours...</p>
    </div>
  );
};

export default Resultats;