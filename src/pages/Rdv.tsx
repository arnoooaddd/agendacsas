import { useEffect } from "react";

const Rdv = () => {
  useEffect(() => {
    window.location.href = "https://agendacsas.fr/rdv";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <p className="text-muted-foreground">Redirection en cours...</p>
    </div>
  );
};

export default Rdv;
