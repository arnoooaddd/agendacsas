import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Resultats = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const params = window.location.search;
    navigate("/resultats-clients-agendac" + params, { replace: true });
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <p className="text-muted-foreground">Redirection en cours...</p>
    </div>
  );
};

export default Resultats;