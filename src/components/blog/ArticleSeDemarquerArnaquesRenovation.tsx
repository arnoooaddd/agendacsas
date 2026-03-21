import { Link } from "react-router-dom";
import { Shield, AlertTriangle, CheckCircle, Eye, Layers, TrendingUp, Globe } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionCTA from "@/components/SectionCTA";

const ArticleSeDemarquerArnaquesRenovation = () => (
  <div className="prose-custom">
    {/* Résumé */}
    <section className="mb-10">
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium leading-relaxed">
          En 2027, les prospects en rénovation sont plus méfiants que jamais. Arnaques, faux comparateurs, <em><strong>achat leads rénovation</strong></em> partagés… La confiance ne se décrète plus, elle se prouve. Découvrez comment construire un <em><strong>système acquisition client rénovation</strong></em> fiable qui vous différencie — et génère des leads qualifiés sans dépendance.
        </p>
      </div>
    </section>

    {/* Sommaire */}
    <section className="mb-12">
      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <h2 className="text-lg font-bold text-foreground font-display mb-4">📑 Sommaire</h2>
        <nav>
          <ol className="space-y-2 text-muted-foreground text-sm">
            <li><a href="#prospects-confiance" className="hover:text-primary transition-colors">1. Pourquoi les prospects ne font plus confiance</a></li>
            <li><a href="#stop-achat-leads" className="hover:text-primary transition-colors">2. Stop à l'achat de leads</a></li>
            <li><a href="#image-de-marque" className="hover:text-primary transition-colors">3. Le vrai levier : votre image de marque</a></li>
            <li><a href="#present-partout" className="hover:text-primary transition-colors">4. Être présent partout (et cohérent)</a></li>
            <li><a href="#systeme-acquisition" className="hover:text-primary transition-colors">5. Structurer un système d'acquisition fiable</a></li>
            <li><a href="#role-site-contenu" className="hover:text-primary transition-colors">6. Le rôle clé du site et du contenu</a></li>
            <li><a href="#faq-arnaques" className="hover:text-primary transition-colors">7. Questions fréquentes</a></li>
          </ol>
        </nav>
      </div>
    </section>

    {/* Intro */}
    <section className="mb-12">
      <p className="text-lg text-muted-foreground leading-relaxed mb-4">
        Aujourd'hui, tout le monde fait de la pub en rénovation.
      </p>
      <p className="text-foreground font-semibold text-xl">
        👉 Vos prospects ne font plus confiance par défaut. La différence se fait sur la <strong>preuve</strong>, la <strong>présence</strong> et la <strong>cohérence</strong>.
      </p>
    </section>

    {/* Section 1 */}
    <section className="mb-12" id="prospects-confiance">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
          <Eye size={20} className="text-destructive" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Pourquoi les prospects ne font plus confiance
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Le marché de la rénovation est saturé de faux comparateurs, de plateformes d'<em><strong>achat leads rénovation</strong></em> douteuses, et de sociétés peu fiables.
      </p>

      <p className="text-foreground font-medium mb-6">
        👉 Les conséquences sont directes :
      </p>

      <ul className="space-y-3 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Prospects <strong>ultra-méfiants</strong> dès le premier contact</li>
        <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> <strong>Taux de conversion en baisse</strong> sur les campagnes classiques</li>
        <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Besoin de <strong>réassurance</strong> bien plus élevé qu'avant</li>
      </ul>

      <p className="text-muted-foreground">
        Dans ce contexte, les entreprises qui continuent à faire "comme avant" voient leur <em><strong>coût acquisition client rénovation</strong></em> exploser.
      </p>
    </section>

    {/* Section 2 */}
    <section className="mb-12" id="stop-achat-leads">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
          <AlertTriangle size={20} className="text-destructive" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Stop à l'achat de leads (erreur majeure)
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Acheter des leads, c'est simple. Mais c'est une <strong>dépendance</strong> qui vous coûte cher.
      </p>

      <ul className="space-y-3 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><span className="text-destructive mt-1">❌</span> Leads <strong>partagés</strong> entre plusieurs entreprises</li>
        <li className="flex items-start gap-2"><span className="text-destructive mt-1">❌</span> Qualité <strong>variable</strong> et imprévisible</li>
        <li className="flex items-start gap-2"><span className="text-destructive mt-1">❌</span> Aucune maîtrise du <em><strong>coût lead rénovation</strong></em></li>
      </ul>

      <p className="text-foreground font-semibold mb-4">
        👉 Et surtout : vous êtes perçu comme un prestataire parmi d'autres. <strong>Zéro différenciation.</strong>
      </p>

      <p className="text-muted-foreground">
        Pour comprendre en détail pourquoi, lisez notre article <Link to="/blog/pourquoi-acheter-des-leads-renovation-mauvaise-strategie-2026" className="text-primary hover:underline font-medium">Pourquoi acheter des leads en rénovation est une mauvaise stratégie</Link>.
      </p>
    </section>

    {/* Section 3 */}
    <section className="mb-12" id="image-de-marque">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Shield size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Le vrai levier : votre image de marque
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        En 2027, la différence entre une entreprise qui stagne et une qui explose se résume à un mot : <strong>confiance</strong>.
      </p>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">Ce que vous devez montrer</h3>

      <ul className="space-y-3 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" /> Vos <strong>chantiers</strong> — avant/après, en cours</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" /> Vos <strong>équipes</strong> — visages, métier, expertise</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" /> Vos <strong>clients</strong> — témoignages, interviews</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" /> Vos <strong>résultats</strong> — chiffres, preuves concrètes</li>
      </ul>

      <p className="text-foreground font-medium">
        👉 C'est ça qui rassure. Pas un visuel Canva. Pas une promesse vide. Du <strong>réel</strong>.
      </p>
    </section>

    {/* CTA milieu */}
    <SectionCTA />

    {/* Section 4 */}
    <section className="mb-12" id="present-partout">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/50 flex items-center justify-center">
          <Layers size={20} className="text-foreground" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Être présent partout (et cohérent)
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Un prospect ne décide plus en un seul point de contact. Il vous observe sur <strong>plusieurs plateformes</strong> avant de vous faire confiance.
      </p>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">Parcours réel d'un prospect</h3>

      <ol className="space-y-3 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><span className="text-primary font-bold">1.</span> Il vous voit sur <strong>Facebook</strong></li>
        <li className="flex items-start gap-2"><span className="text-primary font-bold">2.</span> Il vous cherche sur <strong>Google</strong></li>
        <li className="flex items-start gap-2"><span className="text-primary font-bold">3.</span> Il visite votre <strong>site</strong></li>
        <li className="flex items-start gap-2"><span className="text-primary font-bold">4.</span> Il voit vos <strong>avis</strong></li>
        <li className="flex items-start gap-2"><span className="text-primary font-bold">5.</span> Il revoit vos <strong>pubs</strong></li>
      </ol>

      <p className="text-foreground font-medium mb-4">
        👉 Il compare votre <strong>cohérence globale</strong>. Si tout est aligné, il convertit.
      </p>

      <p className="text-muted-foreground mb-4">
        Vous devez être présent sur <em><strong>Google Ads rénovation</strong></em>, <em><strong>Facebook Ads rénovation</strong></em>, Instagram, YouTube, et en SEO.
      </p>

      <p className="text-muted-foreground">
        Et tout connecter via le retargeting — consultez <Link to="/blog/retargeting-prospects-renovation" className="text-primary hover:underline font-medium">notre guide complet sur le retargeting en rénovation</Link>.
      </p>
    </section>

    {/* Section 5 */}
    <section className="mb-12" id="systeme-acquisition">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <TrendingUp size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Structurer un système d'acquisition fiable
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Les entreprises solides ne font pas "de la pub". Elles construisent une <em><strong>machine à leads rénovation</strong></em> complète :
      </p>

      <ul className="space-y-3 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><span className="text-primary mt-1 font-bold">→</span> <strong>Contenu organique</strong> (preuve sociale)</li>
        <li className="flex items-start gap-2"><span className="text-primary mt-1 font-bold">→</span> <strong>Publicité multi-canal</strong> (<em><strong>campagnes publicitaires rénovation</strong></em>)</li>
        <li className="flex items-start gap-2"><span className="text-primary mt-1 font-bold">→</span> <strong>Retargeting</strong> intelligent</li>
        <li className="flex items-start gap-2"><span className="text-primary mt-1 font-bold">→</span> <strong>Prise de RDV structurée</strong></li>
      </ul>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">Exemple concret</h3>

      <ol className="space-y-3 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><span className="text-primary font-bold">1.</span> Prospect voit une <strong>vidéo chantier</strong></li>
        <li className="flex items-start gap-2"><span className="text-primary font-bold">2.</span> Il clique → visite votre site</li>
        <li className="flex items-start gap-2"><span className="text-primary font-bold">3.</span> Il hésite</li>
        <li className="flex items-start gap-2"><span className="text-primary font-bold">4.</span> Il est <strong>retargeté</strong> avec des témoignages</li>
        <li className="flex items-start gap-2"><span className="text-primary font-bold">5.</span> Il demande un <strong>devis</strong></li>
      </ol>

      <p className="text-foreground font-semibold">
        👉 Vous construisez la confiance <strong>avant</strong> la vente. Et votre <em><strong>acquisition clients rénovation</strong></em> devient prévisible.
      </p>
    </section>

    {/* Section 6 */}
    <section className="mb-12" id="role-site-contenu">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Globe size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Le rôle clé du site et du contenu
        </h2>
      </div>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">Votre site doit</h3>
      <ul className="space-y-2 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" /> Être <strong>à jour</strong> et professionnel</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" /> Montrer vos <strong>réalisations</strong></li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" /> <strong>Rassurer immédiatement</strong></li>
      </ul>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">Votre contenu doit</h3>
      <ul className="space-y-2 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" /> Répondre aux <strong>objections</strong></li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" /> Montrer votre <strong>expertise</strong></li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" /> Prouver votre <strong>légitimité</strong></li>
      </ul>

      <p className="text-muted-foreground">
        Découvrez <Link to="/resultats" className="text-primary hover:underline font-medium">nos études de cas</Link> pour voir comment nos partenaires structurent leur présence en ligne.
      </p>
    </section>

    {/* Red flags */}
    <section className="mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">
        ⚠️ Ce que les prospects fuient
      </h2>

      <ul className="space-y-3 text-muted-foreground">
        <li className="flex items-start gap-2"><span className="text-destructive mt-1">❌</span> Pub <strong>trop agressive</strong></li>
        <li className="flex items-start gap-2"><span className="text-destructive mt-1">❌</span> <strong>Aucune preuve</strong> client</li>
        <li className="flex items-start gap-2"><span className="text-destructive mt-1">❌</span> Site <strong>vide ou daté</strong></li>
        <li className="flex items-start gap-2"><span className="text-destructive mt-1">❌</span> Uniquement de l'<strong>achat de leads</strong></li>
        <li className="flex items-start gap-2"><span className="text-destructive mt-1">❌</span> <strong>Incohérence</strong> entre les plateformes</li>
      </ul>
    </section>

    {/* CTA fin */}
    <SectionCTA />

    {/* Articles liés */}
    <section className="mb-12">
      <h2 className="text-xl font-bold text-foreground font-display mb-4">📚 Articles liés</h2>
      <ul className="space-y-2">
        <li><Link to="/blog/internaliser-marketing-renovation" className="text-primary hover:underline">Internaliser ou externaliser son marketing en rénovation</Link></li>
        <li><Link to="/blog/contacter-leads-reseaux-sociaux-renovation" className="text-primary hover:underline">Comment contacter efficacement des leads réseaux sociaux</Link></li>
        <li><Link to="/blog/google-ads-vs-facebook-ads-renovation" className="text-primary hover:underline">Google Ads vs Facebook Ads rénovation : lequel choisir ?</Link></li>
        <li><Link to="/blog/retargeting-prospects-renovation" className="text-primary hover:underline">Comment recibler ses prospects en rénovation</Link></li>
      </ul>
    </section>

    {/* FAQ */}
    <section className="mb-8" id="faq-arnaques">
      <h2 className="text-2xl font-bold text-foreground font-display mb-6">❓ Questions fréquentes</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="faq-1">
          <AccordionTrigger className="text-left font-semibold">
            Comment se différencier des arnaques en rénovation ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            En investissant dans votre <strong>image de marque</strong> : vidéos terrain, témoignages clients, présence multi-canal cohérente. Les prospects comparent — et la <em>preuve</em> fait la différence face aux sociétés douteuses.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2">
          <AccordionTrigger className="text-left font-semibold">
            Pourquoi l'achat de leads détruit-il l'image de mon entreprise ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Parce que les leads sont partagés entre plusieurs entreprises. Le prospect reçoit 3 à 4 appels, vous êtes perçu comme un prestataire interchangeable, et vous entrez dans une <strong>guerre des prix</strong>. L'<em>achat leads rénovation</em> empêche toute différenciation.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3">
          <AccordionTrigger className="text-left font-semibold">
            Quel est le meilleur système d'acquisition clients en rénovation ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Un <em>système acquisition client rénovation</em> complet combine contenu organique, <em>Google Ads rénovation</em>, <em>Facebook Ads rénovation</em>, retargeting et prise de RDV structurée. C'est ce que met en place une <Link to="/" className="text-primary hover:underline">agence marketing rénovation</Link> spécialisée comme Agendac.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-4">
          <AccordionTrigger className="text-left font-semibold">
            Combien de plateformes faut-il utiliser pour générer des leads fiables ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Au minimum <strong>deux</strong> (Google + Meta), idéalement <strong>trois ou plus</strong> (YouTube, Instagram, SEO). Le multi-canal connecté par le retargeting est la clé d'une <em>génération de leads rénovation</em> stable et prévisible.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </div>
);

export default ArticleSeDemarquerArnaquesRenovation;
