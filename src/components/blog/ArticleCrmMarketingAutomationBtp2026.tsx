import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionCTA from "@/components/SectionCTA";

const toc = [
  { id: "pourquoi-couplage-crm-automation", label: "Pourquoi ce couplage change la performance" },
  { id: "prerequis-avant-automatiser", label: "Les prérequis à valider" },
  { id: "scenarios-a-automatiser", label: "Les scénarios à prioriser" },
  { id: "exemple-terrain-crm-btp", label: "Exemple terrain" },
  { id: "choisir-outils-crm-automation", label: "Quels outils choisir" },
  { id: "erreurs-frequentes-crm-automation", label: "Les erreurs fréquentes" },
  { id: "quand-se-faire-accompagner-crm", label: "Quand faut-il se faire accompagner ?" },
  { id: "faq-crm-marketing-automation-btp", label: "FAQ" },
];

const ArticleCrmMarketingAutomationBtp2026 = () => (
  <>
    <div className="mb-8 rounded-xl border border-border bg-muted/30 p-5 md:p-6">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">En bref</p>
      <p className="text-base leading-relaxed text-foreground">
        Coupler CRM et marketing automation dans le BTP permet de mieux qualifier les demandes, accélérer les relances et relier enfin acquisition, rendez-vous, devis et signature dans un même système.
      </p>
    </div>

    <div className="mb-8 rounded-xl border border-border bg-background p-5 lg:hidden">
      <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground">Sommaire</p>
      <nav aria-label="Sommaire mobile">
        <ol className="space-y-2 text-sm text-muted-foreground">
          {toc.map((item, index) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="transition-colors hover:text-primary">{index + 1}. {item.label}</a>
            </li>
          ))}
        </ol>
      </nav>
    </div>

    <section id="pourquoi-couplage-crm-automation" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Pourquoi le couplage CRM et marketing automation change vraiment la performance commerciale</h2>
      <p className="mb-4 text-muted-foreground">Un CRM seul centralise des données. C&apos;est utile, mais insuffisant si les relances restent manuelles, irrégulières ou dépendantes d&apos;une seule personne.</p>
      <p className="mb-4 text-muted-foreground">Le marketing automation apporte la couche opérationnelle qui manque : qualification automatique, scénarios de relance, segmentation, alertes internes et priorisation commerciale.</p>
      <p className="text-muted-foreground">Dans le BTP, le problème n&apos;est presque jamais uniquement le trafic. Il se situe souvent entre la promesse marketing, la qualification réelle du besoin et la vitesse de traitement des demandes.</p>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>Le marketing sait quels contenus ou campagnes ont déclenché l&apos;intérêt.</li>
        <li>Le commercial voit plus vite quels contacts méritent un rappel prioritaire.</li>
        <li>La direction peut enfin relier acquisition, rendez-vous, devis et signature.</li>
      </ul>
    </section>

    <section id="prerequis-avant-automatiser" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Les prérequis avant d&apos;automatiser quoi que ce soit</h2>
      <p className="mb-4 text-muted-foreground">Automatiser un système mal structuré revient à industrialiser du désordre. Avant d&apos;aller plus loin, il faut valider quelques fondations.</p>
      <h3 className="mb-3 text-xl font-semibold text-foreground font-display">Un pipeline commercial lisible</h3>
      <p className="mb-4 text-muted-foreground">Vos statuts doivent refléter la réalité du terrain : nouveau contact, contact à qualifier, rendez-vous planifié, devis envoyé, affaire gagnée, affaire perdue, relance à prévoir. Si tout reste rangé dans une seule catégorie, l&apos;automatisation ne sert à rien.</p>
      <h3 className="mb-3 text-xl font-semibold text-foreground font-display">Des données exploitables</h3>
      <p className="mb-4 text-muted-foreground">Source du lead, métier visé, zone géographique, typologie de chantier et niveau d&apos;urgence doivent remonter proprement dans le CRM.</p>
      <h3 className="mb-3 text-xl font-semibold text-foreground font-display">Des contenus utiles pour nourrir la réflexion</h3>
      <p className="mb-4 text-muted-foreground">Une séquence automatisée sans matière finit en suite d&apos;emails sans impact. Il faut des pages services solides, des cas clients et des contenus SEO utiles au cycle de décision.</p>
      <h3 className="mb-3 text-xl font-semibold text-foreground font-display">Une logique RGPD claire</h3>
      <p className="text-muted-foreground">Consentement, segmentation et gestion des préférences doivent être propres pour éviter d&apos;envoyer le mauvais message au mauvais moment.</p>
    </section>

    <section id="scenarios-a-automatiser" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Quels scénarios automatiser en priorité dans une entreprise de rénovation ou du bâtiment</h2>
      <p className="mb-4 text-muted-foreground">Le bon réflexe n&apos;est pas de lancer vingt automatisations d&apos;un coup. Il vaut mieux commencer par les scénarios qui ont un impact direct sur la qualification et la conversion.</p>
      <h3 className="mb-3 text-xl font-semibold text-foreground font-display">1. Qualification et scoring des demandes</h3>
      <p className="mb-4 text-muted-foreground">Un contact qui visite une page service, consulte un cas client puis demande un devis n&apos;a pas la même maturité qu&apos;un simple téléchargement. Le scoring permet de faire remonter cette différence automatiquement.</p>
      <h3 className="mb-3 text-xl font-semibold text-foreground font-display">2. Séquence de nurturing après un premier signal d&apos;intérêt</h3>
      <p className="mb-4 text-muted-foreground">Après un téléchargement ou un formulaire, vous pouvez déclencher une courte séquence qui clarifie l&apos;offre, apporte de la réassurance et prépare la prise de rendez-vous.</p>
      <h3 className="mb-3 text-xl font-semibold text-foreground font-display">3. Relance post-devis</h3>
      <p className="mb-4 text-muted-foreground">Dans la rénovation, un devis peut rester en attente plusieurs semaines. Une relance automatisée bien cadencée évite qu&apos;une opportunité refroidisse simplement par manque de suivi.</p>
      <h3 className="mb-3 text-xl font-semibold text-foreground font-display">4. Alertes internes au bon moment</h3>
      <p className="text-muted-foreground">Si un prospect revient plusieurs fois sur une page stratégique ou clique sur une demande de rappel, le commercial doit être notifié rapidement.</p>
    </section>

    <section id="exemple-terrain-crm-btp" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Exemple concret : quand 40 demandes mensuelles ne deviennent pas 40 opportunités</h2>
      <p className="mb-4 text-muted-foreground">Prenons une entreprise de rénovation énergétique qui génère une quarantaine de demandes par mois via son site et ses campagnes digitales. Sans couplage CRM / automation, les formulaires arrivent dans une boîte mail, sont redistribués à la main et les relances dépendent de la charge du moment.</p>
      <p className="mb-4 text-muted-foreground">Résultat : certaines demandes sérieuses attendent trop longtemps, d&apos;autres sont mal orientées, et personne ne sait vraiment quelles sources produisent les meilleurs rendez-vous.</p>
      <div className="rounded-xl border border-border bg-muted/30 p-6 md:p-7">
        <p className="mb-3 font-semibold text-foreground">Ce que change un système mieux structuré</p>
        <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
          <li>segmenter automatiquement les contacts selon la zone, le type de travaux et le niveau d&apos;urgence ;</li>
          <li>déclencher une séquence courte après chaque demande pour maintenir l&apos;attention ;</li>
          <li>remonter immédiatement au commerce les contacts les plus engagés ;</li>
          <li>suivre le passage du lead au rendez-vous, puis du rendez-vous au devis signé.</li>
        </ul>
      </div>
      <p className="mt-4 text-muted-foreground">Le gain n&apos;est pas seulement marketing. Il touche directement la capacité à remplir le pipe commercial avec des opportunités mieux traitées.</p>
    </section>

    <section id="choisir-outils-crm-automation" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Quels outils choisir selon votre niveau de maturité</h2>
      <p className="mb-4 text-muted-foreground">Il n&apos;existe pas une seule stack idéale. Le bon choix dépend surtout de votre niveau de structuration, de vos volumes de demandes et de votre capacité interne à maintenir le système.</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li><strong>Suite intégrée CRM + automation :</strong> utile si vous voulez centraliser suivi, scénarios et reporting dans un même environnement.</li>
        <li><strong>CRM connecté à un outil d&apos;automation :</strong> pertinent si votre CRM est déjà en place mais que la couche de nurturing ou de scoring manque encore.</li>
        <li><strong>Connecteurs ou API :</strong> utile quand plusieurs outils coexistent déjà et qu&apos;il faut surtout fiabiliser la circulation de la donnée.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Le plus important n&apos;est pas la sophistication technique. C&apos;est la cohérence entre vos objectifs commerciaux, vos points de friction actuels et la réalité de vos équipes.</p>
    </section>

    <section id="erreurs-frequentes-crm-automation" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Les erreurs les plus fréquentes dans le BTP</h2>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>automatiser sans définir clairement les étapes du pipeline ;</li>
        <li>confondre volume de leads et qualité commerciale réelle ;</li>
        <li>envoyer les mêmes messages à tous les profils ;</li>
        <li>oublier le lien entre CRM, devis, marge et rentabilité ;</li>
        <li>croire qu&apos;un outil corrigera à lui seul un suivi commercial déjà fragile.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Dans beaucoup d&apos;entreprises du bâtiment, le sujet n&apos;est pas un manque d&apos;outil, mais un manque de système partagé entre marketing et commerce.</p>
    </section>

    <section id="quand-se-faire-accompagner-crm" className="mb-12 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Quand faut-il se faire accompagner ?</h2>
      <p className="mb-4 text-muted-foreground">Si vos campagnes génèrent déjà des demandes mais que vous avez du mal à qualifier, relancer ou prioriser correctement, le problème dépasse souvent la simple acquisition.</p>
      <p className="mb-4 text-muted-foreground">Un accompagnement utile consiste à auditer le parcours complet : source des leads, formulaires, règles de qualification, délais de rappel, statuts CRM, séquences d&apos;emails et reporting jusqu&apos;au devis signé.</p>
      <p className="mb-4 text-muted-foreground">C&apos;est généralement à ce niveau que les entreprises les plus structurées créent un avantage : elles ne se contentent pas de produire du trafic, elles organisent la conversion de bout en bout. Pour aller plus loin, un accompagnement en <Link to="/gestion-communication" className="text-primary hover:underline">gestion de la communication</Link> peut aider à relier campagnes, CRM et pilotage commercial.</p>
      <SectionCTA />
    </section>

    <section id="faq-crm-marketing-automation-btp" className="scroll-mt-28">
      <h2 className="mb-6 text-2xl md:text-3xl font-bold text-foreground font-display">FAQ sur le CRM et le marketing automation dans le BTP</h2>
      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="faq-1" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Un CRM suffit-il pour mieux convertir dans le BTP ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Non. Un CRM sans logique d&apos;automatisation ni règles de traitement reste souvent un simple outil de stockage. Il faut relier suivi commercial, qualification et relances.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Quel premier scénario automatiser quand on débute ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Commencez par la qualification et la relance des demandes entrantes. C&apos;est généralement là que le retour est le plus rapide.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Le marketing automation est-il réservé aux grands groupes ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Non. Une entreprise de rénovation déjà structurée peut obtenir des gains concrets avec quelques scénarios simples, à condition qu&apos;ils soient reliés au vrai process commercial.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-4" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Comment savoir si le couplage fonctionne vraiment ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Suivez des indicateurs concrets : délai de prise en charge, taux de rendez-vous, part des devis relancés, taux de transformation et origine des affaires signées.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </>
);

export default ArticleCrmMarketingAutomationBtp2026;
