import { useEffect } from "react";

const WhatsAppWidget = () => {
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
    <div 
      className="elfsight-app-be211911-1daa-4ecc-bc47-ee3501b68c28" 
      data-elfsight-app-lazy
    />
  );
};

export default WhatsAppWidget;