import { Link } from "react-router-dom";
import { Star, ArrowRight } from "lucide-react";

const SeoIntro = () => {
  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          <div className="glass-card p-8 sm:p-10 border-gradient">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 leading-tight">
              Une agence marketing spécialisée pour les entreprises de rénovation, d'habitat et du BTP
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Agendac aide les entreprises de rénovation, d'habitat et du BTP à structurer leur acquisition client grâce à des campagnes publicitaires, des landing pages performantes et un système de génération de leads qualifiés. Notre approche s'adresse aux entreprises qui veulent développer leurs demandes entrantes, améliorer leur coût d'acquisition et construire une croissance plus prévisible.
            </p>
          </div>

          <div className="glass-card p-6 sm:p-8 border-gradient flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <Star size={14} className="text-yellow-500 fill-yellow-500" />
              <span className="text-xs font-medium text-muted-foreground">Avis Google vérifié</span>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">
                AP
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-foreground truncate">Anthony PROPERZIO</p>
                <p className="text-xs text-muted-foreground">Stores et Fenêtres du Golfe · Mai 2026</p>
              </div>
              <img
                src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png"
                alt="Google"
                className="w-5 h-5 flex-shrink-0"
                loading="lazy"
              />
            </div>
            <div className="flex items-center gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} className="fill-yellow-500 text-yellow-500" />
              ))}
            </div>
            <p className="text-sm text-foreground/85 leading-relaxed flex-1">
              J'ai actuellement le plaisir de pouvoir collaborer avec Agendac et je ne peux que mettre en avant leur travail exceptionnel. L'identité de cette agence de communication se repose sur des bases saines et solides. Dès le premier contact, l'ambiance s'est révélée à la fois dynamique et conviviale, ce qui rend chaque échange agréable. Leurs compétences ont été cruciales pour donner vie à mes demandes : ils allient créativité, rigueur et une vraie expertise stratégique. Le suivi est irréprochable : ils prennent le temps de comprendre chaque besoin, restent disponibles et assurent une proximité rassurante. Je remercie Arnaud, Kérim, Omar et tout particulièrement Manon, qui, avec moi, passe du temps à sans cesse améliorer les différents points importants de notre collaboration pour booster le rendement de l'entreprise. Je recommande donc cette agence les yeux fermés à quiconque cherche un partenaire fiable, créatif et à l'écoute.
            </p>
            <Link
              to="/resultats-clients-agendac"
              className="mt-5 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors rounded-xl px-5 py-3 text-sm font-semibold"
            >
              Voir les résultats partenaires
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeoIntro;