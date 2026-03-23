import { useEffect } from "react";

const Rdv = () => {
  useEffect(() => {
    const params = window.location.search;
    window.location.href = "https://agendacsas.fr/rdv" + params;
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <p className="text-muted-foreground">Redirection en cours...</p>
    </div>
  );
};

export default Rdv;
