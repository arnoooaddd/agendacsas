import { Link } from "react-router-dom";
import { CheckCircle, MapPin, Search, MessageSquare, Target, Building2 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionCTA from "@/components/SectionCTA";

const ArticleMarketingLocalRenovation = () => (
  <div className="prose-custom">
    {/* Résumé */}
    <section className="mb-10">
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium leading-relaxed">
          Le <strong>marketing local en rénovation</strong> est souvent le levier le plus rentable pour une entreprise qui veut générer plus de demandes qualifiées sans dépendre uniquement des plateformes de leads. Si vous voulez être visible au bon endroit, rassurer plus vite et transformer votre présence locale en rendez-vous, cet article vous donne la méthode concrète.
        </p>
      </div>
    </section>

    {/* Sommaire */}
    <section className="mb-12">
      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <h2 className="text-lg font-bold text-foreground font-display mb-4">📑 Sommaire</h2>
        <nav>
          <ol className="space-y-2 text-muted-foreground text-sm">
            <li><a href="#pourquoi-local" className="hover:text-primary transition-colors">1. Pourquoi le marketing local change la rentabilité</a></li>
            <li><a href="#visibilite" className="hover:text-primary transition-colors">2. Où être visible pour capter la demande locale</a></li>
            <li><a href="#confiance" className="hover:text-primary transition-colors">3. Comment rassurer avant le premier contact</a></li>
            <li><a href="#tunnel" className="hover:text-primary transition-colors">4. Transformer la visibilité en rendez-vous</a></li>
            <li><a href="#plan-action" className="hover:text-primary transition-colors">5. Plan d'action simple sur 90 jours</a></li>
            <li><a href="#conclusion-mlr" className="hover:text-primary transition-colors">6. Conclusion</a></li>
            <li><a href="#faq-mlr" className="hover:text-primary transition-colors">7. Questions fréquentes</a></li>
          </ol>
        </nav>
      </div>
    </section>

    {/* Introduction */}
    <section className="mb-12">
      <p className="text-lg text-muted-foreground leading-relaxed mb-4">
        Beaucoup d'entreprises de rénovation pensent encore que pour trouver des clients, il faut surtout acheter des leads ou augmenter les budgets publicitaires.
      </p>
      <p className="text-lg text-muted-foreground leading-relaxed mb-4">
        En réalité, dans un marché local, la question la plus importante est souvent plus simple : <strong className="text-foreground">est-ce que votre entreprise apparaît comme la référence crédible dans sa zone ?</strong>
      </p>
      <p className="text-muted-foreground mb-4">
        Quand un particulier cherche un artisan, une entreprise générale ou un spécialiste de la rénovation, il ne compare pas seulement des prix. Il compare des <strong>signaux de confiance</strong> : présence locale, avis, clarté de l'offre, professionnalisme du suivi, qualité du site et cohérence du message.
      </p>
      <p className="text-muted-foreground">
        C'est exactement là que le <em>marketing local</em> devient un avantage concurrentiel. Bien exécuté, il vous aide à attirer des demandes plus sérieuses, à réduire la friction commerciale et à éviter la guerre des prix décrite dans <Link to="/blog/arreter-achat-leads-renovation-habitat" className="text-primary hover:underline font-medium">cet article sur l'arrêt de l'achat de leads</Link>.
      </p>
    </section>

    {/* Section 1 */}
    <section className="mb-12" id="pourquoi-local">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <MapPin size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          1. Pourquoi le marketing local change la rentabilité de votre acquisition
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Une entreprise de rénovation ne vend pas un service abstrait. Elle vend une intervention chez quelqu'un, dans une zone géographique précise, avec une notion très forte de confiance.
      </p>
      <p className="text-muted-foreground mb-4">
        Résultat : plus votre présence locale est claire, plus le prospect se dit que vous êtes déjà installé, déjà connu et probablement plus fiable que l'entreprise qu'il découvre au hasard dans une publicité générique.
      </p>

      <div className="bg-muted/50 border border-border rounded-xl p-6 mb-6">
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Vous réduisez la méfiance avant même le premier appel</li>
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Vous augmentez la qualité perçue de votre entreprise</li>
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Vous rendez votre publicité plus efficace car elle s'appuie sur une présence crédible</li>
        </ul>
      </div>

      <p className="text-muted-foreground mb-4">
        C'est aussi pour cette raison qu'une stratégie locale ne s'oppose pas à <Link to="/blog/google-ads-meta-ads-entreprise-renovation" className="text-primary hover:underline font-medium">Google Ads ou Meta Ads</Link>. Au contraire, elle les rend plus rentables. Une campagne qui envoie vers une entreprise localement rassurante convertit mieux qu'une campagne qui envoie vers une marque floue.
      </p>
      <p className="text-foreground font-semibold">
        En clair : le marketing local n'est pas un “plus”. C'est la base qui permet au reste du système d'acquisition de mieux performer.
      </p>
    </section>

    {/* Section 2 */}
    <section className="mb-12" id="visibilite">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <Search size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          2. Où être visible pour capter la demande locale au bon moment
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        La plupart des dirigeants dispersent leurs efforts. Un peu de réseaux sociaux, un peu de publicité, quelques avis, un site rarement mis à jour… puis ils s'étonnent que l'ensemble reste faible.
      </p>
      <p className="text-muted-foreground mb-4">
        Une stratégie locale efficace commence par concentrer la visibilité sur les points qui influencent directement la décision.
      </p>

      <h3 className="text-xl font-bold text-foreground font-display mb-4">Les 4 piliers à travailler en priorité</h3>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-card border border-border rounded-xl p-5">
          <p className="font-semibold text-foreground mb-2">1. Votre site</p>
          <p className="text-sm text-muted-foreground">Il doit expliquer clairement votre zone, vos prestations, vos preuves et votre promesse commerciale.</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-5">
          <p className="font-semibold text-foreground mb-2">2. Vos avis et preuves</p>
          <p className="text-sm text-muted-foreground">Le prospect veut voir que vous avez déjà livré des résultats concrets, près de chez lui si possible.</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-5">
          <p className="font-semibold text-foreground mb-2">3. Votre contenu local</p>
          <p className="text-sm text-muted-foreground">Articles, études de cas, photos de chantiers et pages orientées marché local renforcent la crédibilité.</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-5">
          <p className="font-semibold text-foreground mb-2">4. Votre suivi commercial</p>
          <p className="text-sm text-muted-foreground">Une visibilité locale forte perd toute sa valeur si le lead est mal rappelé ou mal qualifié.</p>
        </div>
      </div>

      <p className="text-muted-foreground mb-4">
        Cela rejoint directement les sujets de <Link to="/blog/qualification-prospect-tunnel-vente-renovation" className="text-primary hover:underline font-medium">qualification des prospects</Link> et de <Link to="/blog/externaliser-prise-rdv-entreprise-renovation" className="text-primary hover:underline font-medium">prise de rendez-vous</Link>. Le marketing local attire l'attention, mais c'est le tunnel commercial qui transforme cette attention en chiffre d'affaires.
      </p>
    </section>

    {/* Section 3 */}
    <section className="mb-12" id="confiance">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <Building2 size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          3. Comment rassurer avant le premier contact
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        En rénovation, le prospect prend un risque perçu élevé : budget important, délais, accès au domicile, peur des mauvaises surprises. Votre marketing local doit donc réduire cette tension.
      </p>

      <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-6">
        <p className="text-foreground font-semibold mb-3">Les signaux qui rassurent le plus vite :</p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Une promesse claire, adaptée à votre marché local</li>
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Des visuels cohérents et professionnels</li>
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Des articles utiles qui montrent votre maîtrise du sujet</li>
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" /> Des appels à l'action simples et rassurants</li>
        </ul>
      </div>

      <p className="text-muted-foreground mb-4">
        L'objectif n'est pas de faire “plus beau” pour le principe. L'objectif est que le prospect se dise : <strong className="text-foreground">“cette entreprise a l'air sérieuse, structurée et adaptée à mon besoin.”</strong>
      </p>
      <p className="text-muted-foreground">
        C'est aussi ce qui fait la différence entre un trafic qui lit sans agir et un trafic qui accepte de laisser ses coordonnées, puis de se rendre disponible pour un rendez-vous qualifié.
      </p>
    </section>

    {/* CTA milieu */}
    <section className="mb-12">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-10 text-center shadow-card">
        <p className="text-muted-foreground mb-2">
          Si votre entreprise est visible localement mais que les demandes restent irrégulières,
        </p>
        <p className="text-foreground font-semibold text-lg mb-6">
          il faut relier votre visibilité à un vrai <strong>système d'acquisition clients rénovation</strong>.
        </p>
        <SectionCTA />
      </div>
    </section>

    {/* Section 4 */}
    <section className="mb-12" id="tunnel">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <MessageSquare size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          4. Transformer la visibilité locale en rendez-vous
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Le vrai piège du marketing local, c'est de croire que la visibilité suffit. En pratique, vous avez besoin d'un parcours simple : clic, confiance, prise de contact, rappel rapide, qualification, rendez-vous.
      </p>
      <p className="text-muted-foreground mb-4">
        Si une seule de ces étapes est faible, toute la performance baisse. C'est pour ça que les entreprises les plus rentables combinent plusieurs briques : visibilité locale, contenu, retargeting, relances, qualification et prise de rendez-vous.
      </p>

      <h3 className="text-xl font-bold text-foreground font-display mb-4">Le tunnel local le plus simple à mettre en place</h3>
      <ul className="space-y-2 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Une page claire avec une offre compréhensible</li>
        <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Des preuves visibles rapidement</li>
        <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Un formulaire ou CTA simple à activer</li>
        <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Un rappel rapide et structuré</li>
        <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Une relance si le prospect ne répond pas immédiatement</li>
      </ul>

      <p className="text-muted-foreground mb-4">
        Sur ce point, beaucoup d'entreprises perdent encore leurs opportunités faute de process. Si ce sujet vous parle, lisez aussi <Link to="/blog/contacter-leads-facebook-ads-renovation-rdv" className="text-primary hover:underline font-medium">cet article sur le rappel des leads réseaux sociaux</Link>.
      </p>
      <p className="text-foreground font-semibold">
        La bonne question n'est pas “comment avoir plus de trafic ?” mais “comment mieux convertir l'intention locale que j'attire déjà ?”
      </p>
    </section>

    {/* Section 5 */}
    <section className="mb-12" id="plan-action">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <Target size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          5. Plan d'action simple sur 90 jours
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Si vous voulez structurer votre marketing local sans partir dans un chantier infini, avancez en trois étapes.
      </p>

      <div className="space-y-5 mb-6">
        <div className="bg-muted/50 border border-border rounded-xl p-5">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">Jours 1 à 30 : clarifier votre positionnement local</h3>
          <p className="text-muted-foreground">Définissez votre zone, votre promesse, vos preuves principales et les mots-clés réellement liés à votre marché.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-5">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">Jours 31 à 60 : renforcer la conversion</h3>
          <p className="text-muted-foreground">Travaillez vos CTA, votre suivi commercial et votre capacité à rappeler rapidement les demandes.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-5">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">Jours 61 à 90 : amplifier ce qui fonctionne</h3>
          <p className="text-muted-foreground">Ajoutez de la publicité ou du retargeting seulement quand la base locale et commerciale est suffisamment solide.</p>
        </div>
      </div>

      <p className="text-muted-foreground">
        Cette logique permet d'éviter un problème fréquent : investir plus vite que votre système commercial ne peut absorber. C'est souvent ce qui explique des coûts d'acquisition décevants, même avec une bonne campagne.
      </p>
    </section>

    {/* Conclusion */}
    <section className="mb-12" id="conclusion-mlr">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">Conclusion</h2>
      <p className="text-muted-foreground mb-4">
        Le marketing local en rénovation ne consiste pas seulement à “être visible près de chez soi”. Il consiste à construire un avantage de confiance dans votre zone, puis à le transformer en rendez-vous concrets.
      </p>
      <p className="text-muted-foreground mb-4">
        Si votre entreprise veut grandir sans dépendre uniquement de l'achat de leads, vous avez besoin d'un système qui aligne visibilité, crédibilité et suivi commercial.
      </p>
      <p className="text-foreground font-semibold text-lg">
        Bien exécuté, le marketing local ne vous apporte pas juste plus de trafic : il vous apporte des demandes plus qualifiées et un meilleur taux de transformation.
      </p>
    </section>

    {/* CTA final */}
    <section className="mb-16">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center shadow-card">
        <p className="text-muted-foreground mb-2">
          Vous voulez rendre votre présence locale plus rentable et transformer plus de demandes en rendez-vous ?
        </p>
        <p className="text-foreground font-semibold text-lg mb-6">
          Mettez en place un <strong>système d'acquisition local</strong> cohérent, pas juste des actions isolées.
        </p>
        <SectionCTA />
      </div>
    </section>

    {/* FAQ */}
    <section className="mb-12" id="faq-mlr">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">
        Questions fréquentes
      </h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="faq-1" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Qu'est-ce que le marketing local pour une entreprise de rénovation ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            C'est l'ensemble des actions qui permettent à votre entreprise d'être visible, crédible et facile à contacter dans sa zone d'intervention. Cela inclut votre site, vos contenus, vos preuves, vos avis et votre capacité à transformer l'intérêt en rendez-vous.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Le marketing local remplace-t-il Google Ads ou Facebook Ads ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Non. Il les rend plus efficaces. Une campagne publicitaire convertit mieux quand elle s'appuie sur une image locale forte et un tunnel commercial structuré. Pour aller plus loin, comparez aussi <Link to="/blog/google-ads-vs-facebook-ads-renovation-habitat" className="text-primary hover:underline">Google Ads et Facebook Ads en rénovation</Link>.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Quel est le premier chantier prioritaire ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Commencez par clarifier votre positionnement local et vérifier que vos demandes sont bien rappelées et qualifiées. Sans cela, même une meilleure visibilité produira peu de résultats réels.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-4" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Comment savoir si mon acquisition locale fonctionne ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Regardez la qualité des demandes, le taux de contact, le taux de rendez-vous, puis le taux de devis et de signature. Un bon marketing local améliore tout le parcours, pas seulement le volume de trafic.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>

    {/* Maillage interne */}
    <section className="mb-12">
      <h3 className="text-lg font-bold text-foreground font-display mb-4">📚 Articles connexes</h3>
      <div className="grid sm:grid-cols-2 gap-3">
        <Link to="/blog/google-ads-meta-ads-entreprise-renovation" className="block p-4 rounded-xl border border-border hover:border-primary/50 transition-colors bg-card">
          <p className="text-sm font-medium text-foreground">Google Ads vs Meta Ads : quelle plateforme prioriser ?</p>
        </Link>
        <Link to="/blog/qualification-prospect-tunnel-vente-renovation" className="block p-4 rounded-xl border border-border hover:border-primary/50 transition-colors bg-card">
          <p className="text-sm font-medium text-foreground">Les 4 niveaux de qualification d'un prospect en rénovation</p>
        </Link>
        <Link to="/blog/externaliser-prise-rdv-entreprise-renovation" className="block p-4 rounded-xl border border-border hover:border-primary/50 transition-colors bg-card">
          <p className="text-sm font-medium text-foreground">Pourquoi externaliser sa prise de rendez-vous en rénovation</p>
        </Link>
        <Link to="/blog/choisir-agence-marketing-renovation-btp" className="block p-4 rounded-xl border border-border hover:border-primary/50 transition-colors bg-card">
          <p className="text-sm font-medium text-foreground">Comment choisir une agence marketing rénovation</p>
        </Link>
      </div>
    </section>
  </div>
);

export default ArticleMarketingLocalRenovation;
