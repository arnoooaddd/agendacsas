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
          Les prospects ne font plus confiance par défaut. Arnaques, leads partagés, sociétés douteuses : découvrez comment construire un <strong>système d'acquisition client rénovation</strong> fiable qui vous différencie — et génère des leads qualifiés sans dépendance.
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
        Le marché de la rénovation est saturé de faux comparateurs, de plateformes d'<strong>achat leads rénovation</strong> douteuses, et de sociétés peu fiables.
      </p>

      <p className="text-foreground font-medium mb-4">Les conséquences sont directes :</p>

      <ul className="space-y-2 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Prospects <strong>ultra-méfiants</strong> dès le premier contact</li>
        <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> <strong>Taux de conversion en baisse</strong> sur les campagnes classiques</li>
        <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span> Besoin de <strong>réassurance</strong> bien plus élevé qu'avant</li>
      </ul>

      <p className="text-muted-foreground">
        Dans ce contexte, les entreprises qui continuent à faire "comme avant" voient leur <strong>coût acquisition client rénovation</strong> exploser.
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

      <ul className="space-y-2 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><span className="text-destructive mt-1">❌</span> Leads <strong>partagés</strong> entre plusieurs entreprises</li>
        <li className="flex items-start gap-2"><span className="text-destructive mt-1">❌</span> Qualité <strong>variable</strong> et imprévisible</li>
        <li className="flex items-start gap-2"><span className="text-destructive mt-1">❌</span> Aucune maîtrise du <strong>coût lead rénovation</strong></li>
      </ul>

      <p className="text-foreground font-semibold mb-4">
        👉 Et surtout : vous êtes perçu comme un prestataire parmi d'autres. Zéro différenciation.
      </p>

      <p className="text-muted-foreground">
        Pour comprendre en détail : <Link to="/blog/achat-leads-renovation-mauvaise-strategie" className="text-primary hover:underline font-medium">Pourquoi acheter des leads en rénovation est une mauvaise stratégie</Link>.
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
        En 2026, la différence entre une entreprise qui stagne et une qui explose se résume à un mot : <strong>confiance</strong>.
      </p>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">Ce que vous devez montrer</h3>
      <ul className="space-y-2 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Vos <strong>chantiers</strong> — avant/après, en cours</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Vos <strong>équipes</strong> — visages, métier, expertise</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Vos <strong>clients</strong> — témoignages, interviews</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Vos <strong>résultats</strong> — chiffres, preuves concrètes</li>
      </ul>

      <p className="text-foreground font-medium">
        👉 C'est ça qui rassure. Pas un visuel Canva. Pas une promesse vide. Du <strong>réel</strong>.
      </p>
    </section>

    {/* CTA milieu */}
    <section className="mb-12">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-10 text-center shadow-card">
        <p className="text-muted-foreground mb-2">Vous voulez vous différencier et générer des leads fiables ?</p>
        <p className="text-foreground font-semibold text-lg mb-6">On construit des écosystèmes marketing complets pour la rénovation.</p>
        <SectionCTA />
      </div>
    </section>

    {/* Section 4 */}
    <section className="mb-12" id="present-partout">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <Layers size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Être présent partout (et cohérent)
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Un prospect ne décide plus en un seul point de contact. Il vous observe sur <strong>plusieurs plateformes</strong> avant de vous faire confiance.
      </p>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">Parcours réel d'un prospect</h3>
      <ol className="space-y-2 text-muted-foreground mb-6">
        <li><span className="text-primary font-bold">1.</span> Il vous voit sur <strong>Facebook</strong></li>
        <li><span className="text-primary font-bold">2.</span> Il vous cherche sur <strong>Google</strong></li>
        <li><span className="text-primary font-bold">3.</span> Il visite votre <strong>site</strong></li>
        <li><span className="text-primary font-bold">4.</span> Il voit vos <strong>avis</strong></li>
        <li><span className="text-primary font-bold">5.</span> Il revoit vos <strong>pubs</strong></li>
      </ol>

      <p className="text-foreground font-medium mb-4">
        👉 Il compare votre cohérence globale. Si tout est aligné, il convertit.
      </p>

      <p className="text-muted-foreground mb-4">
        Vous devez être présent sur <strong>Google Ads rénovation</strong>, <strong>Facebook Ads rénovation</strong>, Instagram, YouTube, et en SEO.
      </p>

      <p className="text-muted-foreground">
        Et tout connecter via le retargeting — consultez <Link to="/blog/retargeting-leads-perdus-renovation-habitat" className="text-primary hover:underline font-medium">notre guide complet sur le retargeting en rénovation</Link>.
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
        Les entreprises solides ne font pas "de la pub". Elles construisent une <strong>machine à leads rénovation</strong> complète :
      </p>

      <ul className="space-y-2 text-muted-foreground mb-6">
        <li>→ <strong>Contenu organique</strong> (preuve sociale)</li>
        <li>→ <strong>Publicité multi-canal</strong> (<strong>campagnes publicitaires rénovation</strong>)</li>
        <li>→ <strong>Retargeting</strong> intelligent</li>
        <li>→ <strong>Prise de RDV structurée</strong></li>
      </ul>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">Exemple concret</h3>
      <div className="bg-muted/50 border border-border rounded-xl p-6 mb-6">
        <ol className="space-y-2 text-muted-foreground">
          <li><strong>1.</strong> Prospect voit une <strong>vidéo chantier</strong></li>
          <li><strong>2.</strong> Il clique → visite votre site</li>
          <li><strong>3.</strong> Il hésite</li>
          <li><strong>4.</strong> Il est <strong>retargeté</strong> avec des témoignages</li>
          <li><strong>5.</strong> Il demande un <strong>devis</strong></li>
        </ol>
      </div>

      <p className="text-foreground font-semibold">
        👉 Vous construisez la confiance avant la vente. Et votre <strong>acquisition clients rénovation</strong> devient prévisible.
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
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Être <strong>à jour</strong> et professionnel</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Montrer vos <strong>réalisations</strong></li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> <strong>Rassurer immédiatement</strong></li>
      </ul>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">Votre contenu doit</h3>
      <ul className="space-y-2 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Répondre aux <strong>objections</strong></li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Montrer votre <strong>expertise</strong></li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Prouver votre <strong>légitimité</strong></li>
      </ul>

      <p className="text-muted-foreground">
        Découvrez <Link to="/resultats-clients-agendac" className="text-primary hover:underline font-medium">nos études de cas</Link> pour voir comment nos partenaires structurent leur présence en ligne.
      </p>
    </section>

    {/* Red flags */}
    <section className="mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">
        ⚠️ Ce que les prospects fuient
      </h2>

      <ul className="space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2"><span className="text-destructive mt-1">❌</span> Pub <strong>trop agressive</strong></li>
        <li className="flex items-start gap-2"><span className="text-destructive mt-1">❌</span> <strong>Aucune preuve</strong> client</li>
        <li className="flex items-start gap-2"><span className="text-destructive mt-1">❌</span> Site <strong>vide ou daté</strong></li>
        <li className="flex items-start gap-2"><span className="text-destructive mt-1">❌</span> Uniquement de l'<strong>achat de leads</strong></li>
        <li className="flex items-start gap-2"><span className="text-destructive mt-1">❌</span> <strong>Incohérence</strong> entre les plateformes</li>
      </ul>
    </section>

    {/* CTA fin */}
    <section className="mb-12">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center shadow-card">
        <p className="text-muted-foreground mb-2">Vous voulez reprendre le contrôle de votre acquisition ?</p>
        <p className="text-foreground font-semibold text-lg mb-6">On construit des systèmes fiables sans dépendance aux leads achetés.</p>
        <SectionCTA />
      </div>
    </section>

    {/* Articles liés */}
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-foreground font-display mb-6">📚 Articles liés</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        <Link to="/blog/internaliser-externaliser-marketing-renovation-btp" className="block bg-muted/50 border border-border rounded-xl p-5 hover:border-primary/50 transition-colors no-underline">
          <h3 className="font-semibold text-foreground mb-2">Internaliser ou externaliser son marketing</h3>
          <p className="text-sm text-muted-foreground">Le vrai coût caché de l'internalisation.</p>
        </Link>
        <Link to="/blog/retargeting-leads-perdus-renovation-habitat" className="block bg-muted/50 border border-border rounded-xl p-5 hover:border-primary/50 transition-colors no-underline">
          <h3 className="font-semibold text-foreground mb-2">Comment recibler ses prospects</h3>
          <p className="text-sm text-muted-foreground">Récupérer les leads perdus grâce au retargeting.</p>
        </Link>
      </div>
    </section>

    {/* FAQ */}
    <section className="mb-8" id="faq-arnaques">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">Questions fréquentes</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="faq-1" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Comment se différencier des arnaques en rénovation ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            En investissant dans votre <strong>image de marque</strong> : vidéos terrain, témoignages clients, présence multi-canal cohérente. Les prospects comparent — et la preuve fait la différence.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Pourquoi l'achat de leads détruit-il l'image de mon entreprise ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Parce que les leads sont partagés entre plusieurs entreprises. Le prospect reçoit 3 à 4 appels, vous êtes perçu comme un prestataire interchangeable, et vous entrez dans une guerre des prix.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Quel est le meilleur système d'acquisition clients en rénovation ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Un système complet qui combine contenu organique, <strong>Google Ads</strong>, <strong>Facebook Ads</strong>, retargeting et prise de RDV structurée. C'est ce que met en place une <Link to="/" className="text-primary hover:underline">agence marketing rénovation</Link> spécialisée.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-4" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Combien de plateformes faut-il utiliser pour générer des leads fiables ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Au minimum <strong>deux</strong> (Google + Meta), idéalement trois ou plus (YouTube, Instagram, SEO). Le multi-canal connecté par le retargeting est la clé d'une <strong>génération de leads rénovation</strong> stable.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </div>
);

export default ArticleSeDemarquerArnaquesRenovation;
