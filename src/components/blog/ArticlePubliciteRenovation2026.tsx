import { Link } from "react-router-dom";
import { TrendingUp, Video, Layers, Target, AlertTriangle, CheckCircle, Sparkles } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionCTA from "@/components/SectionCTA";

const ArticlePubliciteRenovation2026 = () => (
  <div className="prose-custom">
    {/* Résumé */}
    <section className="mb-10">
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium leading-relaxed">
          Les règles de la <em><strong>publicité rénovation</strong></em> ont changé. Le contenu IA générique ne convertit plus, les plateformes favorisent l'organique, et le multi-canal est devenu obligatoire. Découvrez ce qui fonctionne réellement en 2026 pour votre <em><strong>acquisition clients rénovation</strong></em> — et ce qu'il faut arrêter immédiatement.
        </p>
      </div>
    </section>

    {/* Sommaire */}
    <section className="mb-12">
      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <h2 className="text-lg font-bold text-foreground font-display mb-4">📑 Sommaire</h2>
        <nav>
          <ol className="space-y-2 text-muted-foreground text-sm">
            <li><a href="#contenu-ia" className="hover:text-primary transition-colors">1. Le contenu IA ne fonctionne plus</a></li>
            <li><a href="#contenu-organique" className="hover:text-primary transition-colors">2. Les plateformes favorisent le contenu organique</a></li>
            <li><a href="#multi-canal" className="hover:text-primary transition-colors">3. Le multi-canal est devenu indispensable</a></li>
            <li><a href="#data-pixels" className="hover:text-primary transition-colors">4. La data (pixels) change tout</a></li>
            <li><a href="#ne-marche-plus" className="hover:text-primary transition-colors">5. Ce qui ne marche plus en 2026</a></li>
            <li><a href="#faire-maintenant" className="hover:text-primary transition-colors">6. Ce que vous devez faire maintenant</a></li>
            <li><a href="#faq-pub-2026" className="hover:text-primary transition-colors">7. Questions fréquentes</a></li>
          </ol>
        </nav>
      </div>
    </section>

    {/* Intro */}
    <section className="mb-12">
      <p className="text-lg text-muted-foreground leading-relaxed mb-4">
        Si vous faites encore de la <em><strong>publicité rénovation</strong></em> "comme en 2022", vous payez plus cher pour moins de résultats.
      </p>
      <p className="text-foreground font-semibold text-xl">
        👉 Les règles ont changé. Voici ce qui fonctionne aujourd'hui.
      </p>
    </section>

    {/* Section 1 */}
    <section className="mb-12" id="contenu-ia">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
          <Sparkles size={20} className="text-destructive" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Le contenu IA ne fonctionne plus
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Tout le monde utilise l'IA pour créer du contenu. Résultat : des textes copiés, des visuels génériques, <strong>zéro différenciation</strong>.
      </p>

      <p className="text-foreground font-medium mb-6">
        👉 Les prospects le voient immédiatement. Et ça provoque :
      </p>

      <ul className="space-y-3 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Perte de <strong>crédibilité</strong></li>
        <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Baisse du <strong>taux de conversion</strong></li>
        <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Image <strong>low-cost</strong> associée à votre entreprise</li>
      </ul>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">Ce qui marche en 2026</h3>

      <ul className="space-y-3 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" /> <strong>Vraies vidéos terrain</strong> — filmées sur vos chantiers</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" /> <strong>Vrais clients</strong> — témoignages authentiques</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" /> <strong>Vrai discours</strong> — votre expertise, pas du copier-coller</li>
      </ul>

      <p className="text-muted-foreground">
        Utilisez l'IA pour <strong>structurer, corriger, optimiser</strong>. Pas pour remplacer votre communication.
      </p>
    </section>

    {/* Section 2 */}
    <section className="mb-12" id="contenu-organique">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Video size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Les plateformes favorisent le contenu organique
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Meta, YouTube, TikTok… toutes les plateformes veulent du contenu qui <strong>ne ressemble pas à de la pub</strong>.
      </p>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">L'erreur classique</h3>
      <p className="text-muted-foreground mb-6">
        Un visuel Canva + un texte commercial + une offre directe. <strong>Ça ne performe plus.</strong>
      </p>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">Ce qui performe</h3>

      <ul className="space-y-3 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><span className="text-primary mt-1 font-bold">→</span> Vidéos filmées <strong>sur chantier</strong></li>
        <li className="flex items-start gap-2"><span className="text-primary mt-1 font-bold">→</span> Interviews <strong>clients</strong></li>
        <li className="flex items-start gap-2"><span className="text-primary mt-1 font-bold">→</span> Coulisses de <strong>l'entreprise</strong></li>
        <li className="flex items-start gap-2"><span className="text-primary mt-1 font-bold">→</span> Explications simples sur <strong>vos prestations</strong></li>
      </ul>

      <p className="text-foreground font-semibold mb-2">
        La logique 2026 est inversée :
      </p>
      <p className="text-foreground font-medium">
        👉 <strong>Contenu organique → publicité</strong> (et non l'inverse).
      </p>
      <p className="text-muted-foreground mt-4">
        Vous créez du contenu authentique, puis vous le <strong>boostez en publicité</strong>. C'est la base d'une <em><strong>stratégie marketing rénovation</strong></em> qui fonctionne.
      </p>
    </section>

    {/* Section 3 */}
    <section className="mb-12" id="multi-canal">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/50 flex items-center justify-center">
          <Layers size={20} className="text-foreground" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Le multi-canal est devenu indispensable
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Avant, un seul canal pouvait suffire. Aujourd'hui, vos prospects sont <strong>partout</strong> : YouTube, Google, Facebook, Instagram, LinkedIn, TikTok.
      </p>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">Parcours réel d'un prospect</h3>

      <ol className="space-y-3 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><span className="text-primary font-bold">1.</span> Il voit une <strong>vidéo YouTube</strong></li>
        <li className="flex items-start gap-2"><span className="text-primary font-bold">2.</span> Il cherche votre nom sur <strong>Google</strong></li>
        <li className="flex items-start gap-2"><span className="text-primary font-bold">3.</span> Il visite votre <strong>site</strong></li>
        <li className="flex items-start gap-2"><span className="text-primary font-bold">4.</span> Il voit une pub <strong>Facebook</strong></li>
        <li className="flex items-start gap-2"><span className="text-primary font-bold">5.</span> Il <strong>convertit</strong></li>
      </ol>

      <p className="text-foreground font-medium">
        👉 Il ne fait jamais le lien entre toutes ces étapes. Mais <strong>tout est connecté</strong>.
      </p>

      <p className="text-muted-foreground mt-4">
        Les <em><strong>campagnes publicitaires rénovation</strong></em> les plus rentables fonctionnent en écosystème, pas en silo.
      </p>
    </section>

    {/* CTA milieu */}
    <SectionCTA />

    {/* Section 4 */}
    <section className="mb-12" id="data-pixels">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Target size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          La data (pixels) change tout
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Le cœur du système, ce sont les <strong>pixels</strong> (ensembles de données). Ils permettent de suivre les visiteurs, de les recibler, et de les faire convertir plus tard.
      </p>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">Exemple concret</h3>

      <ol className="space-y-3 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><span className="text-primary font-bold">1.</span> Prospect clique sur <em><strong>Google Ads rénovation</strong></em></li>
        <li className="flex items-start gap-2"><span className="text-primary font-bold">2.</span> Ne convertit pas</li>
        <li className="flex items-start gap-2"><span className="text-primary font-bold">3.</span> Est retargeté sur <em><strong>Facebook Ads rénovation</strong></em></li>
        <li className="flex items-start gap-2"><span className="text-primary font-bold">4.</span> Voit une vidéo qui répond à son objection</li>
        <li className="flex items-start gap-2"><span className="text-primary font-bold">5.</span> Convertit <strong>10 jours plus tard</strong></li>
      </ol>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-5">
          <p className="font-bold text-foreground mb-2 flex items-center gap-2">
            <AlertTriangle size={16} className="text-destructive" /> Sans pixel
          </p>
          <p className="text-muted-foreground text-sm">Lead perdu définitivement.</p>
        </div>
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
          <p className="font-bold text-foreground mb-2 flex items-center gap-2">
            <CheckCircle size={16} className="text-primary" /> Avec pixel
          </p>
          <p className="text-muted-foreground text-sm">Lead récupéré et converti.</p>
        </div>
      </div>

      <p className="text-muted-foreground">
        👉 Pour approfondir, consultez notre article sur <Link to="/blog/retargeting-prospects-renovation" className="text-primary hover:underline font-medium">le retargeting en rénovation</Link>.
      </p>
    </section>

    {/* Section 5 — Ce qui ne marche plus */}
    <section className="mb-12" id="ne-marche-plus">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
          <AlertTriangle size={20} className="text-destructive" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Ce qui ne marche plus en 2026
        </h2>
      </div>

      <ul className="space-y-3 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><span className="text-destructive mt-1">❌</span> Miser sur <strong>une seule plateforme</strong></li>
        <li className="flex items-start gap-2"><span className="text-destructive mt-1">❌</span> Pubs <strong>"agressives"</strong> type promo directe</li>
        <li className="flex items-start gap-2"><span className="text-destructive mt-1">❌</span> Contenu <strong>générique</strong> créé par IA</li>
        <li className="flex items-start gap-2"><span className="text-destructive mt-1">❌</span> <strong>Pas de vidéo</strong></li>
        <li className="flex items-start gap-2"><span className="text-destructive mt-1">❌</span> <strong>Pas de retargeting</strong></li>
      </ul>

      <p className="text-foreground font-semibold">
        👉 Résultat : <em><strong>coût lead rénovation</strong></em> en hausse constante.
      </p>
    </section>

    {/* Section 6 — À faire */}
    <section className="mb-12" id="faire-maintenant">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <TrendingUp size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Ce que vous devez faire maintenant
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Pour une <em><strong>stratégie marketing rénovation</strong></em> performante en 2026 :
      </p>

      <ul className="space-y-3 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" /> <strong>Produire du contenu réel</strong> — terrain, chantiers, équipes</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" /> <strong>Publier régulièrement</strong> — construire votre présence organique</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" /> <strong>Booster les contenus qui marchent</strong> — publicité sur l'organique</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" /> <strong>Connecter toutes vos plateformes</strong> — multi-canal</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" /> <strong>Installer vos pixels</strong> — retargeting intelligent</li>
      </ul>

      <p className="text-muted-foreground">
        Pour un accompagnement complet, découvrez <Link to="/resultats" className="text-primary hover:underline font-medium">nos études de cas</Link> et voyez comment nous structurons l'<em><strong>acquisition clients rénovation</strong></em> pour nos partenaires.
      </p>
    </section>

    {/* CTA fin */}
    <SectionCTA />

    {/* Articles liés */}
    <section className="mb-12">
      <h2 className="text-xl font-bold text-foreground font-display mb-4">📚 Articles liés</h2>
      <ul className="space-y-2">
        <li>
          <Link to="/blog/retargeting-prospects-renovation" className="text-primary hover:underline">
            Comment recibler ses prospects en rénovation (et récupérer les leads perdus)
          </Link>
        </li>
        <li>
          <Link to="/blog/plateforme-publicite-renovation" className="text-primary hover:underline">
            Sur quelle plateforme lancer de la publicité en rénovation ?
          </Link>
        </li>
        <li>
          <Link to="/blog/google-ads-vs-facebook-ads-renovation" className="text-primary hover:underline">
            Google Ads vs Facebook Ads rénovation : lequel choisir ?
          </Link>
        </li>
        <li>
          <Link to="/blog/cout-publicite-renovation-habitat" className="text-primary hover:underline">
            Combien coûte la publicité en rénovation habitat ?
          </Link>
        </li>
      </ul>
    </section>

    {/* FAQ */}
    <section className="mb-8" id="faq-pub-2026">
      <h2 className="text-2xl font-bold text-foreground font-display mb-6">❓ Questions fréquentes</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="faq-1">
          <AccordionTrigger className="text-left font-semibold">
            La publicité fonctionne-t-elle encore pour la rénovation en 2026 ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Oui, la <em>publicité rénovation</em> fonctionne toujours. Mais les méthodes ont changé : il faut du contenu authentique, du multi-canal et du retargeting. Les campagnes "à l'ancienne" avec un seul visuel Canva ne suffisent plus.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2">
          <AccordionTrigger className="text-left font-semibold">
            Faut-il arrêter d'utiliser l'IA pour créer du contenu ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Non, l'IA reste un outil précieux pour <strong>structurer et optimiser</strong>. Ce qu'il faut arrêter, c'est le contenu 100 % généré sans touche humaine. Les entreprises de rénovation qui performent combinent IA + contenu terrain réel.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3">
          <AccordionTrigger className="text-left font-semibold">
            Quel budget prévoir pour une stratégie multi-canal en rénovation ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Pour une entreprise à +1M€ de CA, comptez <strong>3 000 à 6 500 €/mois</strong> en combinant <em>Google Ads rénovation</em> et <em>Facebook Ads rénovation</em>. Consultez notre article sur <Link to="/blog/cout-publicite-renovation-habitat" className="text-primary hover:underline">le coût de la publicité en rénovation</Link> pour les détails.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-4">
          <AccordionTrigger className="text-left font-semibold">
            Pourquoi le contenu vidéo est-il devenu obligatoire ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Les plateformes (Meta, YouTube, TikTok) favorisent le format vidéo dans leurs algorithmes. En rénovation, les vidéos de chantiers et témoignages clients créent de la <strong>confiance</strong> — le facteur n°1 de conversion. Une <em>agence marketing rénovation</em> performante intègre systématiquement la vidéo dans sa stratégie.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </div>
);

export default ArticlePubliciteRenovation2026;
