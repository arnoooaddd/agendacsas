import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionCTA from "@/components/SectionCTA";

const toc = [
  { id: "pourquoi-avis-declenchent-confiance", label: "Pourquoi les avis pèsent autant dans la décision" },
  { id: "avis-referencement-local-google", label: "Avis clients et référencement local" },
  { id: "quels-avis-ont-valeur", label: "Quels avis ont vraiment de la valeur" },
  { id: "structurer-collecte-avis", label: "Structurer la collecte d’avis" },
  { id: "gerer-avis-negatifs", label: "Gérer les avis négatifs" },
  { id: "reutiliser-avis-au-dela-google", label: "Utiliser les avis au-delà de Google" },
  { id: "quand-le-sujet-depasse-collecte", label: "Quand le sujet dépasse la simple collecte" },
  { id: "faq-avis-clients-btp", label: "FAQ" },
];

const ArticleAvisClientsBtpAcquisition2026 = () => (
  <>
    <div className="mb-8 rounded-xl border border-primary/15 bg-primary/5 p-5 md:p-6">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">En bref</p>
      <p className="text-base leading-relaxed text-foreground">
        Dans le bâtiment, les avis clients ne servent pas seulement à rassurer. Ils influencent aussi la visibilité locale,
        la qualité des prises de contact et la capacité de votre entreprise à transformer plus de recherches en devis sérieux.
      </p>
    </div>

    <div className="mb-8 rounded-xl border border-border bg-muted/30 p-5 md:p-6">
      <p className="text-muted-foreground leading-relaxed mb-0">
        Un avis client utile dans le BTP n’est pas juste une note 5 étoiles. C’est un signal qui aide à la fois Google,
        le futur prospect et votre équipe commerciale à comprendre pourquoi votre entreprise mérite d’être contactée.
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

    <section id="pourquoi-avis-declenchent-confiance" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Pourquoi les avis clients pèsent autant dans la décision d’un prospect BTP</h2>
      <p className="mb-4 text-muted-foreground">Quand un particulier ou un maître d’ouvrage compare plusieurs entreprises, il veut réduire son risque. Dans la rénovation de l’habitat, le montant engagé, les délais et la peur de tomber sur le mauvais prestataire rendent cette phase de réassurance décisive.</p>
      <p className="mb-4 text-muted-foreground">Les avis clients jouent alors trois rôles en même temps :</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>ils rassurent sur la qualité perçue du travail ;</li>
        <li>ils donnent des indices concrets sur le sérieux de l’entreprise ;</li>
        <li>ils aident le prospect à se projeter dans un chantier similaire au sien.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Exemple terrain : une entreprise d’isolation peut afficher le même budget publicitaire que ses concurrents. Si ses avis mentionnent la propreté du chantier, la clarté des explications, le respect des délais et le confort ressenti après travaux, elle part souvent avec un avantage commercial net avant même la prise de rendez-vous.</p>
      <p className="mt-4 text-muted-foreground">Dans le BTP, le problème n’est presque jamais uniquement le trafic. Il se situe souvent entre la promesse, la réassurance et le traitement commercial. Les avis font justement le lien entre ces trois dimensions.</p>
    </section>

    <section id="avis-referencement-local-google" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Comment les avis renforcent votre référencement local et votre visibilité Google</h2>
      <p className="mb-4 text-muted-foreground">Les avis ne servent pas seulement à convaincre. Ils renforcent aussi votre présence dans l’écosystème local, notamment sur Google Business Profile.</p>
      <p className="mb-4 text-muted-foreground">Une entreprise qui reçoit régulièrement des retours récents et détaillés envoie des signaux utiles :</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>elle semble active sur sa zone ;</li>
        <li>elle montre que ses chantiers sont réels et récents ;</li>
        <li>elle accumule un vocabulaire naturel autour de ses métiers, de ses villes et de ses prestations ;</li>
        <li>elle améliore souvent son taux de clic depuis la fiche Google.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Autrement dit, les avis participent à votre <strong>gestion SEO locale</strong>, même s’ils ne suffisent pas à eux seuls. Une fiche Google peu travaillée, un site faible ou une page métier trop générique peuvent freiner le résultat. Mais à structure égale, l’entreprise qui obtient des avis réguliers et exploitables prend souvent l’avantage.</p>
      <p className="mt-4 text-muted-foreground">Si vous travaillez votre présence locale, les avis doivent donc être pensés comme un pilier de votre <Link to="/gestion-seo" className="text-primary hover:underline">référencement local</Link>, pas comme une simple décoration de fiche.</p>
    </section>

    <section id="quels-avis-ont-valeur" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Quels avis ont vraiment de la valeur pour une entreprise de rénovation</h2>
      <p className="mb-4 text-muted-foreground">Tous les avis n’ont pas le même impact. Une suite de commentaires vagues aide moins qu’un avis qui décrit une situation concrète.</p>
      <p className="mb-4 text-muted-foreground">Les avis les plus utiles sont ceux qui apportent des détails sur :</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>le type de travaux réalisés ;</li>
        <li>la qualité de la communication avant, pendant et après chantier ;</li>
        <li>le respect des délais ;</li>
        <li>la propreté, l’organisation ou la coordination ;</li>
        <li>le résultat obtenu et le ressenti global du client.</li>
      </ul>
      <div className="mt-5 rounded-xl border border-border bg-muted/30 p-6 md:p-7">
        <p className="mb-3 font-semibold text-foreground">Ce qu’un futur prospect comprend immédiatement avec un bon avis</p>
        <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
          <li>si votre équipe inspire confiance ;</li>
          <li>si le chantier est bien cadré ;</li>
          <li>si la promesse commerciale est réellement tenue ;</li>
          <li>si vous êtes le bon interlocuteur pour un projet similaire au sien.</li>
        </ul>
      </div>
      <p className="mt-4 text-muted-foreground">Pour une entreprise de couverture, un commentaire qui mentionne une fuite traitée rapidement, une explication claire du devis et un chantier sécurisé parle beaucoup plus à un futur prospect qu’une note sans contexte.</p>
    </section>

    <section id="structurer-collecte-avis" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Pourquoi la collecte d’avis doit faire partie de votre système acquisition client rénovation</h2>
      <p className="mb-4 text-muted-foreground">Beaucoup d’entreprises demandent un avis de temps en temps, quand elles y pensent. Le problème, c’est qu’une collecte irrégulière produit une image irrégulière.</p>
      <p className="mb-4 text-muted-foreground">Une stratégie plus rentable consiste à intégrer la demande d’avis à votre processus de fin de chantier ou de livraison commerciale. L’objectif n’est pas d’automatiser de façon froide. L’objectif est de rendre la collecte naturelle, constante et pilotable.</p>
      <h3 className="mb-3 text-xl font-semibold text-foreground font-display">Le minimum à structurer</h3>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>choisir le bon moment, quand la satisfaction est encore fraîche ;</li>
        <li>désigner qui demande l’avis et sur quel canal ;</li>
        <li>simplifier au maximum le parcours pour le client ;</li>
        <li>suivre le volume d’avis obtenus par mois et par type de chantier.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Une entreprise qui livre 20 chantiers par mois mais ne transforme que 2 ou 3 satisfactions en avis laisse beaucoup de valeur sur la table. À l’inverse, une structure qui installe un rituel simple peut renforcer à la fois sa visibilité locale, sa crédibilité et sa performance d’acquisition sans augmenter fortement son budget marketing.</p>
    </section>

    <section id="gerer-avis-negatifs" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Que faire des avis négatifs ou mitigés sans abîmer votre image</h2>
      <p className="mb-4 text-muted-foreground">Une entreprise du bâtiment sérieuse finira presque toujours par recevoir un avis critique. Le sujet n’est donc pas d’éviter toute tension. Le sujet est de montrer comment vous réagissez.</p>
      <p className="mb-4 text-muted-foreground">Un avis négatif bien traité peut parfois rassurer davantage qu’une série parfaite mais suspecte. Il montre que l’entreprise répond, assume et cherche à résoudre.</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>répondez rapidement, sans agressivité ;</li>
        <li>reconnaissez le point de blocage quand il est réel ;</li>
        <li>proposez une suite concrète hors espace public si nécessaire ;</li>
        <li>évitez les réponses juridiques, froides ou défensives ;</li>
        <li>analysez en interne si ce retour révèle un vrai problème de promesse, de chantier ou de suivi.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Sur le plan business, un avis négatif peut aussi servir de diagnostic. Si plusieurs commentaires parlent du délai de rappel, de devis trop lents ou d’un manque de clarté commerciale, le problème ne relève plus seulement de la communication. Il touche votre parcours de conversion.</p>
    </section>

    <section id="reutiliser-avis-au-dela-google" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Comment utiliser vos avis clients au-delà de Google</h2>
      <p className="mb-4 text-muted-foreground">Un avis utile ne doit pas rester enfermé dans une fiche. Il peut nourrir plusieurs points de contact du parcours prospect, à condition de rester authentique et contextualisé.</p>
      <p className="mb-4 text-muted-foreground">Vous pouvez notamment réutiliser vos avis pour :</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>renforcer les pages service ou pages locales de votre site ;</li>
        <li>alimenter vos argumentaires commerciaux ;</li>
        <li>appuyer une landing page dédiée à une offre ou une zone ;</li>
        <li>créer des publications réseaux sociaux ou des preuves chantier ;</li>
        <li>mieux former les équipes sur ce qui est réellement perçu comme différenciant par les clients.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Cette logique est puissante car elle reconnecte la voix du client à votre communication. Au lieu d’affirmer vous-même que vous êtes réactif, clair ou sérieux, vous laissez le marché le dire à votre place.</p>
    </section>

    <section id="quand-le-sujet-depasse-collecte" className="mb-12 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Quand le sujet dépasse la simple collecte d’avis</h2>
      <p className="mb-4 text-muted-foreground">Si vous manquez d’avis, le problème n’est pas toujours un manque de discipline. Il peut révéler un sujet plus large : faible volume de chantiers signés, expérience client irrégulière, mauvais timing de demande, absence de suivi CRM ou manque de clarté dans la promesse commerciale.</p>
      <p className="mb-4 text-muted-foreground">À partir d’un certain niveau d’activité, les avis doivent être intégrés à une logique plus large de système acquisition client rénovation. Cela inclut la visibilité locale, la qualité du site, la qualification des demandes et le suivi commercial.</p>
      <p className="mb-4 text-muted-foreground">Autrement dit, si vos avis sont faibles, votre enjeu n’est peut-être pas juste de demander plus souvent. Il est peut-être de structurer un parcours capable de produire plus de satisfaction visible, plus de preuves crédibles et plus de demandes sérieuses.</p>
      <SectionCTA />
    </section>

    <section id="faq-avis-clients-btp" className="scroll-mt-28">
      <h2 className="mb-6 text-2xl md:text-3xl font-bold text-foreground font-display">FAQ : avis clients et entreprise du bâtiment</h2>
      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="faq-1" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Pourquoi les avis clients sont-ils si importants dans le bâtiment ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Parce qu’ils réduisent le risque perçu avant un devis. Dans un secteur où les montants sont élevés et la confiance décisive, ils rassurent plus vite qu’un discours commercial seul.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Les avis clients améliorent-ils vraiment le référencement local ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Oui, surtout lorsqu’ils sont réguliers, récents et détaillés. Ils ne remplacent pas un bon site ni une bonne fiche Google, mais ils renforcent clairement votre visibilité locale.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Faut-il répondre à tous les avis, même positifs ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Oui. Répondre montre que l’entreprise suit sa relation client, valorise les retours et reste active. C’est aussi un signal utile pour les futurs prospects.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-4" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Peut-on utiliser les avis clients sur son site internet ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Oui, et c’est même recommandé. Bien intégrés sur des pages service ou des pages locales, ils renforcent la conversion et la réassurance commerciale.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </>
);

export default ArticleAvisClientsBtpAcquisition2026;
