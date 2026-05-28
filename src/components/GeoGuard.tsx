import { useEffect, useState } from "react";

const ALLOWED = ["FR", "BE", "CH", "LU"];
const STORAGE_KEY = "agendac_geo_check_v1";

// User-agents de bots à toujours laisser passer (SEO critique)
const BOT_REGEX = /bot|crawler|spider|crawling|googlebot|bingbot|slurp|duckduckbot|baiduspider|yandex|facebookexternalhit|facebot|twitterbot|linkedinbot|whatsapp|telegrambot|applebot|ahrefsbot|semrushbot|mj12bot|petalbot|gptbot|chatgpt|claudebot|perplexitybot|lighthouse|pagespeed|headlesschrome|prerender/i;

const GeoGuard = ({ children }: { children: React.ReactNode }) => {
  const [blocked, setBlocked] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    // 1) Bots : on laisse passer sans appel API
    if (BOT_REGEX.test(navigator.userAgent)) {
      setChecked(true);
      return;
    }

    // 2) Cache local pour éviter de rappeler l'API à chaque visite
    const cached = sessionStorage.getItem(STORAGE_KEY);
    if (cached === "ok") { setChecked(true); return; }
    if (cached === "blocked") { setBlocked(true); setChecked(true); return; }

    // 3) Appel géoloc IP (fail-open si erreur)
    const ctrl = new AbortController();
    const timeout = setTimeout(() => ctrl.abort(), 3500);

    fetch("https://ipapi.co/json/", { signal: ctrl.signal })
      .then((r) => r.ok ? r.json() : Promise.reject())
      .then((data) => {
        const country = (data?.country_code || data?.country || "").toUpperCase();
        if (country && !ALLOWED.includes(country)) {
          sessionStorage.setItem(STORAGE_KEY, "blocked");
          setBlocked(true);
        } else {
          sessionStorage.setItem(STORAGE_KEY, "ok");
        }
      })
      .catch(() => { /* fail-open : on n'empêche pas l'accès si l'API tombe */ })
      .finally(() => { clearTimeout(timeout); setChecked(true); });

    return () => { clearTimeout(timeout); ctrl.abort(); };
  }, []);

  if (!checked) return <>{children}</>; // pas de flash : on rend pendant le check

  if (blocked) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-6">
        <div className="max-w-md text-center glass-card p-10 border-gradient">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Service indisponible dans votre pays
          </h1>
          <p className="text-muted-foreground mb-2">
            Agendac accompagne uniquement les entreprises situées en
            France, Belgique, Suisse et Luxembourg.
          </p>
          <p className="text-sm text-muted-foreground/80 mt-6">
            Service unavailable in your country.
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default GeoGuard;