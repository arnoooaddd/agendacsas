import { Link } from "react-router-dom";
import { CheckCircle, AlertTriangle, TrendingUp, Target, BarChart3, Zap, Clock, Search, Users } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionCTA from "@/components/SectionCTA";

const ArticleGoogleVsFacebookAds = () => (
  <div className="prose-custom">
    {/* Résumé */}
    <section className="mb-10">
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium leading-relaxed">
          <strong>Google Ads ou Facebook Ads</strong> pour générer des clients en rénovation ? Ce comparatif vous aide à comprendre les forces de chaque canal, les erreurs qui font perdre de l'argent, et comment structurer une <strong>stratégie d'acquisition</strong> rentable pour votre entreprise de rénovation habitat.
        </p>
      </div>
    </section>

    {/* Sommaire */}
    <section className="mb-12">
      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <h2 className="text-lg font-bold text-foreground font-display mb-4">📑 Sommaire</h2>
        <nav>
          <ol className="space-y-2 text-muted-foreground text-sm">
            <li><a href="#mauvaise-question" className="hover:text-primary transition-colors">1. Google Ads ou Facebook Ads : la mauvaise question</a></li>
            <li><a href="#google-ads" className="hover:text-primary transition-colors">2. Google Ads : un canal lent, mais extrêmement rentable</a></li>
            <li><a href="#facebook-ads" className="hover:text-primary transition-colors">3. Facebook Ads : du volume rapide… mais plus instable</a></li>
            <li><a href="#personne-nexplique" className="hover:text-primary transition-colors">4. Ce que personne ne vous explique (et qui change tout)</a></li>
            <li><a href="#faut-il-choisir" className="hover:text-primary transition-colors">5. Faut-il choisir Google Ads ou Facebook Ads ?</a></li>
            <li><a href="#meilleures-entreprises" className="hover:text-primary transition-colors">6. Ce que font les entreprises qui dominent leur marché</a></li>
            <li><a href="#dependance-leads" className="hover:text-primary transition-colors">7. Sortir de la dépendance aux leads</a></li>
            <li><a href="#conclusion" className="hover:text-primary transition-colors">8. Conclusion</a></li>
          </ol>
        </nav>
      </div>
    </section>

    {/* Introduction */}
    <section className="mb-12" id="mauvaise-question">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Target size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Google Ads ou Facebook Ads : la mauvaise question
        </h2>
      </div>

      <p className="text-lg text-muted-foreground leading-relaxed mb-4 italic">
        "Google Ads est mieux que Facebook Ads pour trouver des clients en rénovation…"
      </p>
      <p className="text-foreground font-semibold mb-4">C'est faux.</p>
      <p className="text-muted-foreground mb-4">
        Et c'est exactement ce genre de raccourci qui fait perdre des dizaines de milliers d'euros à des entreprises du bâtiment chaque année.
      </p>
      <p className="text-muted-foreground mb-2">La réalité est simple :</p>
      <p className="text-foreground font-semibold text-xl mb-4">
        👉 Il n'y a pas de meilleur canal. Il y a une <Link to="/services" className="text-primary hover:underline">stratégie d'acquisition</Link> adaptée à votre situation.
      </p>
      <p className="text-muted-foreground">
        Encore faut-il comprendre comment ces deux leviers fonctionnent. Parce qu'ils ne jouent pas du tout au même jeu.
      </p>
    </section>

    {/* Google Ads */}
    <section className="mb-12" id="google-ads">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Search size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Google Ads : un canal lent, mais extrêmement rentable
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">Google Ads repose sur un principe simple :</p>
      <p className="text-foreground font-semibold mb-6">👉 Vous captez une demande déjà existante</p>

      <p className="text-muted-foreground mb-3">Vos prospects cherchent activement :</p>
      <ul className="space-y-2 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><Search size={16} className="text-primary mt-0.5 shrink-0" /> "isolation extérieure prix"</li>
        <li className="flex items-start gap-2"><Search size={16} className="text-primary mt-0.5 shrink-0" /> "rénovation salle de bain devis"</li>
        <li className="flex items-start gap-2"><Search size={16} className="text-primary mt-0.5 shrink-0" /> "artisan menuiserie + ville"</li>
      </ul>
      <p className="text-foreground font-medium mb-6">Et vous apparaissez au bon moment.</p>

      <h3 className="text-xl font-bold text-foreground font-display mb-4">Ce que ça implique concrètement</h3>
      <ul className="space-y-2 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Leads très qualifiés</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Coût par lead plus élevé</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Volume plus faible</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Cycle de vente souvent plus court</li>
      </ul>

      <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
        <p className="text-foreground font-semibold mb-3">👉 Google Ads est un diesel</p>
        <ul className="space-y-2 text-muted-foreground text-sm">
          <li>• Démarrage lent (<strong>60 à 90 jours</strong> pour être vraiment performant)</li>
          <li>• Phase d'optimisation nécessaire</li>
          <li>• Mais une fois lancé : <strong>stable, prévisible, scalable</strong></li>
        </ul>
        <p className="text-foreground font-medium text-sm mt-3">C'est un levier de fond.</p>
      </div>
    </section>

    {/* Facebook Ads */}
    <section className="mb-12" id="facebook-ads">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <Users size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Facebook Ads : du volume rapide… mais plus instable
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">À l'inverse, Facebook Ads fonctionne sur un principe totalement différent :</p>
      <p className="text-foreground font-semibold mb-6">👉 Vous créez la demande</p>
      <p className="text-muted-foreground mb-6">
        Vous interrompez vos prospects pendant qu'ils scrollent. Ils ne cherchaient pas forcément vos services… mais vous captez leur attention.
      </p>

      <h3 className="text-xl font-bold text-foreground font-display mb-4">Résultat</h3>
      <ul className="space-y-2 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Beaucoup plus de volume</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Coût par lead souvent plus bas</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Prospects moins qualifiés (au départ)</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Nécessite un bon process commercial derrière</li>
      </ul>

      <div className="bg-secondary/5 border border-secondary/20 rounded-xl p-6 mb-6">
        <p className="text-foreground font-semibold mb-3">👉 Facebook Ads est un accélérateur</p>
        <ul className="space-y-2 text-muted-foreground text-sm">
          <li>• Résultats visibles en <strong>3 à 5 semaines</strong></li>
          <li>• Phase d'apprentissage rapide</li>
          <li>• Idéal pour générer du flux rapidement</li>
        </ul>
      </div>

      <p className="text-muted-foreground mb-3">En revanche :</p>
      <ul className="space-y-1 text-muted-foreground">
        <li>• Moins stable</li>
        <li>• Dépend fortement de la créa, de l'offre et du ciblage</li>
        <li>• Peut s'essouffler si mal structuré</li>
      </ul>
    </section>

    {/* Comparatif visuel */}
    <section className="mb-12">
      <h3 className="text-xl font-bold text-foreground font-display mb-6 text-center">Comparatif rapide</h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
          <h4 className="text-lg font-bold text-foreground mb-4 text-center">🔵 Google Ads</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><CheckCircle size={14} className="text-primary mt-0.5 shrink-0" /> Capte la demande existante</li>
            <li className="flex items-start gap-2"><CheckCircle size={14} className="text-primary mt-0.5 shrink-0" /> Leads très qualifiés</li>
            <li className="flex items-start gap-2"><CheckCircle size={14} className="text-primary mt-0.5 shrink-0" /> Démarrage lent (60-90 jours)</li>
            <li className="flex items-start gap-2"><CheckCircle size={14} className="text-primary mt-0.5 shrink-0" /> Stable et prévisible</li>
            <li className="flex items-start gap-2"><CheckCircle size={14} className="text-primary mt-0.5 shrink-0" /> Coût par lead plus élevé</li>
          </ul>
        </div>
        <div className="bg-secondary/5 border border-secondary/20 rounded-xl p-6">
          <h4 className="text-lg font-bold text-foreground mb-4 text-center">🟠 Facebook Ads</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><CheckCircle size={14} className="text-secondary mt-0.5 shrink-0" /> Crée la demande</li>
            <li className="flex items-start gap-2"><CheckCircle size={14} className="text-secondary mt-0.5 shrink-0" /> Volume élevé</li>
            <li className="flex items-start gap-2"><CheckCircle size={14} className="text-secondary mt-0.5 shrink-0" /> Résultats en 3-5 semaines</li>
            <li className="flex items-start gap-2"><CheckCircle size={14} className="text-secondary mt-0.5 shrink-0" /> Moins stable</li>
            <li className="flex items-start gap-2"><CheckCircle size={14} className="text-secondary mt-0.5 shrink-0" /> Coût par lead plus bas</li>
          </ul>
        </div>
      </div>
    </section>

    {/* Ce que personne ne vous explique */}
    <section className="mb-12" id="personne-nexplique">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
          <AlertTriangle size={20} className="text-destructive" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Ce que personne ne vous explique (et qui change tout)
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">Le vrai problème, ce n'est pas Google vs Facebook.</p>
      <p className="text-foreground font-semibold text-xl mb-6">
        👉 C'est l'absence de système d'acquisition structuré
      </p>

      <p className="text-muted-foreground mb-3">La plupart des entreprises de rénovation :</p>
      <ul className="space-y-1 text-muted-foreground mb-6">
        <li>• achètent des leads</li>
        <li>• testent un peu de pub</li>
        <li>• changent d'agence tous les 3 mois</li>
      </ul>

      <p className="text-muted-foreground mb-4">Et concluent que "la publicité ne marche pas".</p>
      <p className="text-foreground font-semibold mb-2">C'est faux.</p>
      <p className="text-foreground font-semibold">
        👉 Ce qui ne marche pas, c'est l'absence de <Link to="/blog/marketing-renovation-habitat-publicite-leads" className="text-primary hover:underline">stratégie globale</Link>.
      </p>
    </section>

    {/* CTA milieu */}
    <section className="mb-12">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-10 text-center shadow-card">
        <p className="text-muted-foreground mb-2">
          Vous ne savez pas quel canal activer en priorité pour votre entreprise ?
        </p>
        <p className="text-foreground font-semibold text-lg mb-6">
          Découvrez la stratégie qui fonctionne pour les entreprises de rénovation à +1M€.
        </p>
        <SectionCTA />
      </div>
    </section>

    {/* Faut-il choisir ? */}
    <section className="mb-12" id="faut-il-choisir">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <BarChart3 size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Alors, faut-il choisir Google Ads ou Facebook Ads ?
        </h2>
      </div>

      <p className="text-muted-foreground mb-6">La réponse est simple.</p>

      <div className="space-y-4 mb-6">
        <div className="bg-secondary/5 border border-secondary/20 rounded-xl p-4">
          <p className="text-foreground font-medium">👉 <strong>Si vous voulez du volume rapidement</strong> → Facebook Ads</p>
        </div>
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
          <p className="text-foreground font-medium">👉 <strong>Si vous voulez des leads qualifiés et du long terme</strong> → Google Ads</p>
        </div>
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20 rounded-xl p-4">
          <p className="text-foreground font-semibold">👉 <strong>Si vous voulez scaler intelligemment</strong> → Les deux</p>
        </div>
      </div>
    </section>

    {/* Ce que font les meilleures entreprises */}
    <section className="mb-12" id="meilleures-entreprises">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <TrendingUp size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Ce que font les entreprises qui dominent leur marché
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Les sociétés de rénovation les plus performantes ne choisissent pas. <strong className="text-foreground">Elles structurent.</strong>
      </p>

      <div className="bg-muted/50 border border-border rounded-xl p-6 mb-6">
        <p className="text-foreground font-medium mb-3">Elles utilisent :</p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> <strong>Facebook Ads</strong> → pour générer du volume</li>
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> <strong>Google Ads</strong> → pour capter la demande chaude</li>
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Un <strong>process commercial solide</strong> → pour convertir</li>
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Une <strong>image de marque</strong> → pour augmenter le taux de closing</li>
        </ul>
      </div>

      <p className="text-foreground font-semibold mb-1">👉 Résultat : elles ne dépendent plus des plateformes de leads.</p>
      <p className="text-foreground font-medium">
        Elles contrôlent leur <Link to="/resultats" className="text-primary hover:underline">acquisition</Link>.
      </p>
    </section>

    {/* Dépendance aux leads */}
    <section className="mb-12" id="dependance-leads">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
          <AlertTriangle size={20} className="text-destructive" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Le vrai enjeu : sortir de la dépendance aux leads
        </h2>
      </div>

      <p className="text-muted-foreground mb-3">Acheter des leads, c'est simple. Mais :</p>
      <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6 mb-6">
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Marges réduites</li>
          <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Concurrence accrue</li>
          <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Qualité variable</li>
          <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Dépendance totale</li>
        </ul>
      </div>

      <p className="text-foreground font-medium mb-3">
        👉 À l'inverse, un <Link to="/blog/arreter-achat-leads-renovation" className="text-primary hover:underline">système d'acquisition maîtrisé</Link> permet :
      </p>
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Plus de contrôle</li>
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Meilleure rentabilité</li>
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Croissance stable</li>
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Valorisation de l'entreprise</li>
        </ul>
      </div>
    </section>

    {/* À retenir */}
    <section className="mb-12">
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-8">
        <h3 className="text-xl font-bold text-foreground font-display mb-4">📌 À retenir</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <CheckCircle size={20} className="text-primary mt-0.5 shrink-0" />
            <span className="text-foreground"><strong>Google Ads</strong> capte la demande existante — c'est un levier de fond, stable et rentable sur le long terme.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle size={20} className="text-primary mt-0.5 shrink-0" />
            <span className="text-foreground"><strong>Facebook Ads</strong> crée la demande — c'est un accélérateur puissant pour générer du volume rapidement.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle size={20} className="text-primary mt-0.5 shrink-0" />
            <span className="text-foreground">Le vrai enjeu n'est pas de choisir un canal — c'est de <strong>structurer un système d'acquisition complet</strong>.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle size={20} className="text-primary mt-0.5 shrink-0" />
            <span className="text-foreground">Les entreprises qui dominent combinent les deux avec un process commercial solide et une image de marque forte.</span>
          </li>
        </ul>
      </div>
    </section>

    {/* Conclusion */}
    <section className="mb-12" id="conclusion">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">
        Conclusion : arrêtez de chercher le "meilleur canal"
      </h2>
      <p className="text-muted-foreground mb-4">Ce n'est pas une question d'outil.</p>
      <p className="text-foreground font-semibold mb-6">👉 C'est une question de structure.</p>

      <p className="text-muted-foreground mb-3">Si votre acquisition n'est pas maîtrisée :</p>
      <ul className="space-y-1 text-muted-foreground mb-6">
        <li>• vous surpayez vos clients</li>
        <li>• vous subissez le marché</li>
        <li>• vous perdez en compétitivité</li>
      </ul>
    </section>

    {/* CTA final */}
    <section className="mb-16">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center shadow-card">
        <p className="text-foreground font-semibold text-lg mb-2">
          Vous dirigez une entreprise de rénovation à +1M€ ?
        </p>
        <p className="text-muted-foreground mb-2">
          Si vous voulez savoir quel canal activer en priorité, comment structurer votre acquisition et générer des RDV qualifiés en continu :
        </p>
        <p className="text-foreground font-semibold mb-2">👉 Rendez-vous sur Agendac.fr</p>
        <p className="text-xs text-muted-foreground mb-6">
          Article rédigé par <strong>Arnaud UTILLE</strong>, Président d'Agendac
        </p>
        <SectionCTA />
      </div>
    </section>

    {/* FAQ SEO */}
    <section className="mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">
        Questions fréquentes
      </h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="faq-1" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Google Ads ou Facebook Ads : lequel est le plus rentable en rénovation ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Cela dépend de votre objectif. Google Ads génère des leads plus qualifiés avec un coût unitaire plus élevé. Facebook Ads produit plus de volume à moindre coût. Les entreprises les plus performantes combinent les deux dans un système d'acquisition structuré.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Combien de temps faut-il pour voir des résultats avec Google Ads ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Google Ads nécessite généralement 60 à 90 jours d'optimisation avant d'atteindre sa pleine performance. C'est un levier de fond qui devient stable et prévisible une fois bien configuré.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Facebook Ads fonctionne-t-il pour les entreprises de rénovation ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Oui, Facebook Ads est très efficace pour la rénovation habitat. Il permet de générer un volume important de leads rapidement (résultats en 3 à 5 semaines). La clé est d'avoir un bon process commercial pour qualifier et convertir ces prospects.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-4" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Pourquoi acheter des leads n'est pas une bonne stratégie ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            L'achat de leads crée une dépendance aux plateformes, compresse vos marges et vous met en concurrence directe sur les prix. Un système d'acquisition maîtrisé (publicité + marque + process) offre plus de contrôle et une meilleure rentabilité.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-5" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Quel budget prévoir pour Google Ads et Facebook Ads en rénovation ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Le budget dépend de votre zone géographique, vos services et vos objectifs. L'essentiel n'est pas le montant investi, mais la structure derrière : tracking, tunnel de conversion, process commercial. Sans ça, même un gros budget ne produira pas de résultats.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>

    {/* Liens internes */}
    <section className="mb-8">
      <h3 className="text-lg font-bold text-foreground font-display mb-4">📚 Articles connexes</h3>
      <div className="grid sm:grid-cols-2 gap-3">
        <Link to="/blog/marketing-renovation-habitat-publicite-leads" className="block p-4 rounded-xl border border-border hover:border-primary/50 transition-colors bg-card">
          <p className="text-sm font-medium text-foreground">Marketing rénovation habitat : pourquoi la publicité fonctionne</p>
        </Link>
        <Link to="/blog/arreter-achat-leads-renovation" className="block p-4 rounded-xl border border-border hover:border-primary/50 transition-colors bg-card">
          <p className="text-sm font-medium text-foreground">Arrêter d'acheter des leads en rénovation</p>
        </Link>
        <Link to="/blog/pourquoi-acheter-des-leads-renovation-mauvaise-strategie-2026" className="block p-4 rounded-xl border border-border hover:border-primary/50 transition-colors bg-card">
          <p className="text-sm font-medium text-foreground">Pourquoi acheter des leads est une mauvaise stratégie en 2026</p>
        </Link>
        <Link to="/blog/internaliser-marketing-renovation" className="block p-4 rounded-xl border border-border hover:border-primary/50 transition-colors bg-card">
          <p className="text-sm font-medium text-foreground">Internaliser ou externaliser son marketing en rénovation</p>
        </Link>
      </div>
    </section>
  </div>
);

export default ArticleGoogleVsFacebookAds;
