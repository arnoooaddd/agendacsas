import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface HashRedirectProps {
  hash: string;
}

const HashRedirect = ({ hash }: HashRedirectProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/", { replace: true });
    // Small delay to ensure navigation completes before scrolling
    setTimeout(() => {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }, [navigate, hash]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <p className="text-muted-foreground">Redirection en cours...</p>
    </div>
  );
};

export default HashRedirect;
