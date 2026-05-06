import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionCTA from "@/components/SectionCTA";

const toc = [
  { id: "strategie-inbound-abm-btp", label: "Ce que change la combinaison inbound + ABM" },
  { id: "pourquoi-comptes-cles-difficiles", label: "Pourquoi les comptes clés sont difficiles à convertir" },
  { id: "ce-que-font-les-bonnes-equipes", label: "Ce que les équipes les plus solides font différemment" },
  { id: "methode-5-etapes-abm-btp", label: "La méthode en 5 étapes" },
  { id: "erreurs-abm-btp", label: "Les erreurs les plus fréquentes" },
  { id: "quand-se-faire-accompagner-abm-btp", label: "Quand faut-il se faire accompagner ?" },
  { id: "faq-abm-inbound-btp", label: "FAQ" },
];

export default function ArticleAttirerComptesClesBtpInboundAbm2026() {
  return (
    <>
      <div className="mb-8 rounded-xl border border-border bg-muted/30 p-5 md:p-6">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">En bref</p>
        <p className="text-base leading-relaxed text-foreground">
          Associer inbound marketing et account-based marketing permet de transformer une prospection grands comptes trop diffuse en mécanique plus crédible, plus ciblée et mieux reliée au suivi commercial.
        </p>
      </div>

      <div className="mb-8 rounded-xl border border-primary/15 bg-primary/5 p-5 md:p-6">
        <p className="mb-0 leading-relaxed text-muted-foreground">
          Une stratégie inbound + ABM dans le BTP est un système qui attire les bons décideurs avec du contenu utile, identifie les comptes prioritaires, puis personnalise la relance pour ouvrir de vraies conversations commerciales. Dans le BTP, le problème n’est presque jamais uniquement le trafic. Il se situe souvent entre la promesse, la qualification et le traitement commercial.
        </p>
      </div>

      <div className="mb-8 rounded-xl border border-border bg-background p-5 lg:hidden">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground">Sommaire</p>
        <nav aria-label="Sommaire mobile">
          <ol className="space-y-2 text-sm text-muted-foreground">
            {toc.map((item, index) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="transition-colors hover:text-primary">
                  {index + 1}. {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>

      <section id="strategie-inbound-abm-btp" className="mb-10 scroll-mt-28">
        <h2 className="mb-4 text-2xl font-bold font-display text-foreground md:text-3xl">
          Ce que change vraiment la combinaison inbound + ABM dans le BTP
        </h2>
        <p className="mb-4 text-muted-foreground">
          L’inbound marketing sert à attirer des décideurs avec des contenus utiles. L’account-based marketing, lui, concentre l’effort sur une liste restreinte de comptes à fort potentiel. Ensemble, ils permettent de mieux structurer l’<strong>acquisition clients BTP</strong> quand la cible est exigeante, lente à convertir et impliquée sur plusieurs niveaux de décision.
        </p>
        <p className="mb-4 text-muted-foreground">
          Concrètement, l’inbound fait émerger l’intérêt et capte des signaux. L’ABM personnalise ensuite l’approche sur les entreprises qui comptent vraiment. Le commerce intervient alors avec un contexte déjà construit, au lieu de repartir d’un discours générique à chaque prise de contact.
        </p>
        <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
          <li>l’inbound nourrit la crédibilité ;</li>
          <li>l’ABM réduit la dispersion ;</li>
          <li>le CRM aide à prioriser les comptes qui avancent réellement ;</li>
          <li>le commercial récupère des échanges beaucoup plus exploitables.</li>
        </ul>
      </section>

      <section id="pourquoi-comptes-cles-difficiles" className="mb-10 scroll-mt-28">
        <h2 className="mb-4 text-2xl font-bold font-display text-foreground md:text-3xl">
          Pourquoi les comptes clés sont si difficiles à convertir dans le bâtiment
        </h2>
        <p className="mb-4 text-muted-foreground">
          Un compte clé ne décide pas seul, n’avance pas vite et n’achète presque jamais sur une simple promesse marketing. Dans le bâtiment, il faut souvent convaincre plusieurs interlocuteurs : direction, achats, prescripteurs, équipes techniques ou exploitation.
        </p>
        <p className="mb-4 text-muted-foreground">Cela crée trois blocages récurrents :</p>
        <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
          <li>les messages trop génériques ne retiennent pas l’attention ;</li>
          <li>les contenus parlent de l’offre, mais pas du contexte métier du compte ciblé ;</li>
          <li>la relance commerciale arrive soit trop tôt, soit sans matière utile.</li>
        </ul>
        <p className="mt-4 text-muted-foreground">
          Exemple terrain : un industriel qui veut travailler davantage avec des promoteurs ou des grands réseaux de pose ne peut pas se contenter d’un guide générique. Il doit montrer comment son offre répond à des enjeux précis : délais, conformité, coordination chantier, rentabilité ou sécurisation des approvisionnements.
        </p>
      </section>

      <section id="ce-que-font-les-bonnes-equipes" className="mb-10 scroll-mt-28">
        <h2 className="mb-4 text-2xl font-bold font-display text-foreground md:text-3xl">
          Ce que les équipes les plus solides font différemment
        </h2>
        <p className="mb-4 text-muted-foreground">
          Les entreprises qui avancent vraiment sur les comptes stratégiques ne séparent pas marketing et commerce. Elles organisent une mécanique commune, pilotée autour d’une courte liste de cibles et d’une progression suivie dans le temps.
        </p>
        <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
          <li>une liste claire de comptes prioritaires ;</li>
          <li>des contenus capables de prouver une expertise utile ;</li>
          <li>des signaux de qualification remontés dans le CRM ;</li>
          <li>des scénarios de relance adaptés au niveau de maturité ;</li>
          <li>une coordination réelle entre marketing, direction commerciale et terrain.</li>
        </ul>
        <p className="mt-4 text-muted-foreground">
          Une <strong>stratégie marketing BTP</strong> rentable n’est pas une juxtaposition d’articles, de campagnes LinkedIn et d’emails. C’est un système qui relie acquisition, qualification commerciale, suivi CRM et rentabilité des affaires signées. Si vous travaillez déjà vos leviers d’acquisition, <Link to="/blog/actions-marketing-btp-generer-demandes-qualifiees-2026" className="text-primary hover:underline">ces actions marketing BTP à renforcer</Link> complètent bien cette logique.
        </p>
      </section>

      <section id="methode-5-etapes-abm-btp" className="mb-10 scroll-mt-28">
        <h2 className="mb-4 text-2xl font-bold font-display text-foreground md:text-3xl">
          La méthode en 5 étapes pour attirer les comptes clés
        </h2>
        <p className="mb-5 text-muted-foreground">
          Pour qu’une stratégie d’account-based marketing fonctionne dans le BTP, il faut partir d’une base éditoriale solide puis augmenter progressivement le niveau de personnalisation.
        </p>

        <h3 className="mb-3 text-xl font-semibold font-display text-foreground">1. Produire un contenu socle vraiment utile</h3>
        <p className="mb-4 text-muted-foreground">
          Le point de départ reste un contenu à forte valeur ajoutée : guide, article expert, étude de cas, webinar ou page ressource. Ce contenu doit répondre à une vraie question métier, pas à une envie de publier pour publier.
        </p>

        <h3 className="mb-3 text-xl font-semibold font-display text-foreground">2. Collecter la bonne donnée, pas juste des contacts</h3>
        <p className="mb-4 text-muted-foreground">
          Le formulaire n’a de valeur que s’il prépare une suite commerciale utile. L’objectif n’est pas de remplir une base avec des emails peu exploitables, mais d’identifier l’entreprise, la fonction, le problème exprimé et le potentiel réel du compte.
        </p>

        <h3 className="mb-3 text-xl font-semibold font-display text-foreground">3. Prioriser les comptes à fort enjeu</h3>
        <p className="mb-4 text-muted-foreground">
          Tous les comptes ne méritent pas le même niveau d’effort. La sélection doit se faire selon le potentiel de chiffre d’affaires, la récurrence, la compatibilité avec vos marges, la présence de décideurs activables et la probabilité d’ouverture commerciale.
        </p>

        <h3 className="mb-3 text-xl font-semibold font-display text-foreground">4. Adapter le contenu à chaque cible ou micro-segment</h3>
        <p className="mb-4 text-muted-foreground">
          C’est ici que l’ABM fait la différence. Un même fond peut être retravaillé différemment pour un industriel, un réseau de concessionnaires, une entreprise multi-agences ou un acteur de la rénovation énergétique. L’objectif est d’ajuster les cas d’usage, les preuves et les objections sans repartir de zéro à chaque fois.
        </p>

        <h3 className="mb-3 text-xl font-semibold font-display text-foreground">5. Déployer une prise de contact cohérente avec le cycle de vente</h3>
        <p className="mb-4 text-muted-foreground">
          Une fois les comptes identifiés et le contenu adapté, il faut organiser la diffusion : email ciblé, LinkedIn, relance commerciale ou partage d’un cas client pertinent. Le point clé est la continuité. Si le marketing envoie un contenu ciblé mais que le commercial reprend avec un discours générique, toute la mécanique se casse.
        </p>

        <div className="mt-6 rounded-xl border border-border bg-muted/30 p-6 md:p-7">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">Exemple terrain</p>
          <p className="mb-0 leading-relaxed text-muted-foreground">
            Une entreprise de rénovation multi-agences peut partir d’un guide sur la qualité des demandes entrantes, puis décliner ce contenu pour parler coût d’acquisition, homogénéité du traitement commercial et pilotage CRM selon les profils visés. Le contenu ne change pas totalement, mais l’angle devient enfin activable.
          </p>
        </div>
      </section>

      <section id="erreurs-abm-btp" className="mb-10 scroll-mt-28">
        <h2 className="mb-4 text-2xl font-bold font-display text-foreground md:text-3xl">
          Les erreurs qui font échouer la plupart des approches ABM dans le BTP
        </h2>
        <p className="mb-4 text-muted-foreground">
          Beaucoup d’entreprises lancent une démarche ABM sans réunir les prérequis. Résultat : peu de réponses, des relances peu convaincantes et une impression que les grands comptes sont inaccessibles.
        </p>
        <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
          <li>confondre personnalisation et simple insertion du prénom dans un email ;</li>
          <li>utiliser un contenu trop générique pour des interlocuteurs très spécifiques ;</li>
          <li>ne pas relier le CRM, le scoring et les relances commerciales ;</li>
          <li>viser des comptes sans hypothèse claire de valeur ;</li>
          <li>mesurer seulement les leads générés au lieu de suivre les opportunités ouvertes.</li>
        </ul>
        <p className="mt-4 text-muted-foreground">
          Dans une entreprise déjà structurée, un contenu ne doit pas être jugé uniquement sur son volume de téléchargements. Il doit être évalué sur sa capacité à ouvrir des conversations avec des comptes qui peuvent réellement devenir rentables. Si ce point bloque, <Link to="/blog/crm-marketing-automation-btp-2026" className="text-primary hover:underline">ce cadrage CRM et marketing automation</Link> aide souvent à remettre de l’ordre dans le suivi.
        </p>
      </section>

      <section id="quand-se-faire-accompagner-abm-btp" className="mb-12 scroll-mt-28">
        <h2 className="mb-4 text-2xl font-bold font-display text-foreground md:text-3xl">
          Quand faut-il se faire accompagner ?
        </h2>
        <p className="mb-4 text-muted-foreground">
          Si votre équipe produit déjà du contenu mais peine à transformer cette visibilité en discussions avec des décideurs, le sujet n’est probablement plus éditorial uniquement. Il devient organisationnel.
        </p>
        <p className="mb-4 text-muted-foreground">Un accompagnement externe devient pertinent lorsque :</p>
        <ul className="mb-6 list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
          <li>vous avez des comptes cibles définis mais pas de séquence marketing-commerciale claire ;</li>
          <li>vos contenus existent mais ne servent pas réellement la prospection ;</li>
          <li>votre CRM ne permet pas de prioriser les opportunités ;</li>
          <li>vos commerciaux relancent sans matière contextualisée ;</li>
          <li>vous voulez structurer une vraie machine d’acquisition autour de comptes à forte valeur.</li>
        </ul>
        <p className="mb-4 text-muted-foreground">
          L’objectif n’est pas d’ajouter une couche marketing de plus. C’est de relier contenu, ciblage, qualification et suivi commercial pour que chaque effort serve la progression du pipeline. Si votre enjeu est de mieux piloter l’ensemble de ce dispositif, <Link to="/gestion-communication" className="text-primary hover:underline">la gestion de communication Agendac</Link> est le point de départ le plus cohérent.
        </p>
        <SectionCTA />
      </section>

      <section id="faq-abm-inbound-btp" className="scroll-mt-28">
        <h2 className="mb-6 text-2xl font-bold font-display text-foreground md:text-3xl">FAQ</h2>
        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="faq-1" className="rounded-xl border border-border px-5">
            <AccordionTrigger className="text-left font-semibold text-foreground">
              L’account-based marketing est-il réservé aux très grandes entreprises du BTP ?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Non. Une entreprise du bâtiment ou de rénovation déjà structurée peut utiliser l’ABM dès lors qu’elle cible quelques comptes à fort potentiel et qu’elle dispose d’une offre assez claire pour personnaliser son approche.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-2" className="rounded-xl border border-border px-5">
            <AccordionTrigger className="text-left font-semibold text-foreground">
              Quelle différence entre génération de leads BTP et ABM ?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              La génération de leads BTP cherche à créer un flux de demandes ou de contacts. L’ABM concentre les efforts sur un nombre limité d’entreprises stratégiques avec un niveau de personnalisation beaucoup plus élevé.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-3" className="rounded-xl border border-border px-5">
            <AccordionTrigger className="text-left font-semibold text-foreground">
              Quels contenus fonctionnent le mieux pour ouvrir une discussion avec un compte clé ?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Les contenus les plus efficaces traitent un enjeu concret : coût d’acquisition, qualité des demandes, prescription, conversion commerciale, organisation du suivi ou rentabilité. Un contenu trop général performe rarement sur des comptes stratégiques.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </>
  );
}
