import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    window.location.replace("https://adornier.net");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <p className="text-muted-foreground">Redirection en cours vers Adornier...</p>
    </div>
  );
};

export default Index;
