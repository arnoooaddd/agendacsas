import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionCTA from "@/components/SectionCTA";

const toc = [
  { id: "pourquoi-services-redeviennent-differenciant", label: "Pourquoi les services redeviennent différenciants" },
  { id: "services-attendus-dans-renovation-btp", label: "Les services vraiment attendus" },
  { id: "structurer-offre-services-business", label: "Structurer l’offre de services" },
  { id: "communiquer-services-au-bon-moment", label: "Communiquer au bon moment" },
  { id: "erreurs-qui-neutralisent-valeur", label: "Les erreurs qui neutralisent la valeur" },
  { id: "plan-action-90-jours", label: "Plan d’action 90 jours" },
  { id: "quand-se-faire-accompagner", label: "Quand faut-il se faire accompagner ?" },
  { id: "faq-services-experience-client-btp", label: "FAQ" },
];

const ArticleStrategieMarketingBtpServicesDifferenciation2026 = () => (
  <>
    <div className="mb-8 rounded-xl border border-border bg-muted/30 p-5 md:p-6">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">En bref</p>
      <p className="text-base leading-relaxed text-foreground">
        Dans beaucoup d’entreprises du BTP, les produits et les prix finissent par se ressembler. Ce qui fait la différence en 2026, ce sont les services qui rassurent, accélèrent la décision et fluidifient réellement l’expérience client.
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

    <section id="pourquoi-services-redeviennent-differenciant" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Pourquoi les services redeviennent un vrai facteur de différenciation dans le BTP</h2>
      <p className="mb-4 text-muted-foreground">Une stratégie marketing BTP rentable ne vend pas seulement une prestation ou un chantier. Elle vend aussi une expérience plus simple, plus lisible et plus sécurisante pour le prospect à chaque étape du parcours.</p>
      <p className="mb-4 text-muted-foreground">Dans la rénovation et l’habitat, beaucoup d’acteurs parlent encore surtout de produit, de technique ou de prix. Pourtant, les signaux qui font avancer un devis sont souvent ailleurs : rapidité de réponse, clarté des étapes, aide administrative, qualité du diagnostic, suivi après rendez-vous, visibilité sur le planning ou accompagnement au financement.</p>
      <p className="text-muted-foreground"><strong>Chez Agendac, on retrouve souvent le même angle mort :</strong> l’entreprise pense manquer de trafic, alors qu’une partie de la perte se joue entre la promesse, le service rendu et le traitement commercial derrière la demande.</p>
    </section>

    <section id="services-attendus-dans-renovation-btp" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Les services vraiment attendus par les clients en rénovation et dans le BTP</h2>
      <p className="mb-4 text-muted-foreground">Tous les services n’ont pas la même valeur perçue. Les plus utiles sont ceux qui retirent une friction concrète du parcours client.</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li><strong>Avant la prise de contact</strong> : simulateur simple, explication claire de l’offre, cas comparables, zone d’intervention, éléments de réassurance.</li>
        <li><strong>Pendant la qualification</strong> : rappel rapide, questions précises, cadrage du besoin, filtrage des demandes peu sérieuses.</li>
        <li><strong>Au moment du devis</strong> : méthode lisible, délais annoncés, options expliquées, arbitrage budgétaire plus clair.</li>
        <li><strong>Après signature</strong> : suivi chantier, coordination, documentation, SAV, accompagnement administratif si nécessaire.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Exemple concret : une entreprise de rénovation énergétique peut améliorer son taux de transformation sans toucher à son budget publicitaire simplement en ajoutant un pré-appel de qualification, un mini-audit de faisabilité et un suivi de devis plus clair. Le service réduit alors l’incertitude avant même de parler prix.</p>
    </section>

    <section id="structurer-offre-services-business" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Comment structurer une offre de services qui crée vraiment de la valeur business</h2>
      <p className="mb-4 text-muted-foreground">Le bon réflexe n’est pas d’empiler des “petits plus”. Il faut organiser vos services autour des moments où le prospect hésite, compare ou décroche.</p>
      <p className="mb-4 text-muted-foreground">Un cadre simple consiste à travailler en 4 blocs :</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li><strong>Compréhension</strong> : qu’est-ce qui bloque vos prospects avant le premier échange ?</li>
        <li><strong>Réassurance</strong> : quels services ou preuves réduisent le risque perçu ?</li>
        <li><strong>Fluidité</strong> : qu’est-ce qui fait gagner du temps au client et à vos équipes ?</li>
        <li><strong>Rentabilité</strong> : quels services améliorent réellement la qualification, le devis ou la marge ?</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Si un service ne répond à aucun de ces 4 blocs, il reste souvent décoratif. À l’inverse, un service bien positionné devient une pièce de votre <Link to="/gestion-communication" className="text-primary hover:underline">gestion de la communication</Link> parce qu’il clarifie votre valeur et soutient directement l’acquisition.</p>
      <div className="mt-6 rounded-xl border border-border bg-muted/30 p-6 md:p-7">
        <p className="mb-3 font-semibold text-foreground">Mini-framework utile</p>
        <p className="text-muted-foreground">Listez vos 5 objections commerciales les plus fréquentes. Pour chacune, demandez-vous quel service concret, quel contenu ou quel process pourrait réduire cette objection avant le rendez-vous ou au moment du devis.</p>
      </div>
    </section>

    <section id="communiquer-services-au-bon-moment" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Comment communiquer sur vos services au bon moment du parcours client</h2>
      <p className="mb-4 text-muted-foreground">Des services utiles mais invisibles ne créent pas de préférence. Il faut donc les rendre lisibles là où le prospect vous évalue réellement.</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>sur les pages clés du site, avec une promesse orientée bénéfice client et non une liste floue d’options ;</li>
        <li>dans les campagnes et pages d’acquisition, pour filtrer et mieux qualifier ;</li>
        <li>dans les contenus SEO, quand ils répondent à des objections concrètes ;</li>
        <li>dans les scripts commerciaux et relances, pour ancrer la valeur perçue ;</li>
        <li>dans les témoignages ou cas clients, pour montrer comment le service change réellement l’expérience.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Si votre enjeu principal est la visibilité organique sur ces sujets, un travail de <Link to="/gestion-seo" className="text-primary hover:underline">gestion SEO</Link> permet de transformer ces preuves en pages et contenus qui ressortent mieux sur Google. Si le sujet est surtout la cohérence globale des messages et des canaux, la priorité reste souvent côté communication et conversion.</p>
    </section>

    <section id="erreurs-qui-neutralisent-valeur" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Les erreurs qui neutralisent la valeur de vos services</h2>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li><strong>Parler des services trop tard</strong> : uniquement au rendez-vous ou dans une plaquette.</li>
        <li><strong>Rester générique</strong> : “accompagnement personnalisé” ne veut rien dire sans exemple concret.</li>
        <li><strong>Créer des services sans logique commerciale</strong> : utiles en interne, mais invisibles ou incompris côté prospect.</li>
        <li><strong>Ne pas mesurer l’impact</strong> : temps de rappel, taux de qualification, délai de devis, taux de signature.</li>
        <li><strong>Décorréler marketing et terrain</strong> : promettre une expérience que les équipes ne peuvent pas délivrer ensuite.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Dans une entreprise du BTP déjà structurée, le service doit être pensé comme une partie du système commercial, pas comme une décoration marketing. C’est souvent ce qui permet de défendre les marges quand les offres techniques se ressemblent.</p>
    </section>

    <section id="plan-action-90-jours" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Plan d’action 90 jours pour remettre vos services au cœur de l’expérience client</h2>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li><strong>Jours 1 à 30</strong> : cartographier les points de friction du parcours client, les objections fréquentes et les services déjà existants mais peu visibles.</li>
        <li><strong>Jours 31 à 60</strong> : reformuler l’offre, clarifier les bénéfices clients, mettre à niveau les pages clés, les scripts de qualification et les supports commerciaux.</li>
        <li><strong>Jours 61 à 90</strong> : diffuser ces services dans les bons canaux, suivre leur impact sur la qualité des demandes, les rendez-vous et la signature.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">L’objectif n’est pas d’ajouter des couches. L’objectif est de rendre votre proposition plus lisible, plus rassurante et plus rentable pour des prospects déjà en phase de comparaison.</p>
    </section>

    <section id="quand-se-faire-accompagner" className="mb-12 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Quand faut-il se faire accompagner ?</h2>
      <p className="mb-4 text-muted-foreground">L’accompagnement devient utile quand vos services existent, mais qu’ils ne se traduisent ni dans vos messages, ni dans vos pages, ni dans la qualité des demandes entrantes. C’est aussi le bon moment si votre équipe commerciale passe son temps à retraiter des prospects mal cadrés.</p>
      <p className="mb-4 text-muted-foreground">Dans ce cas, il faut souvent retravailler en même temps la promesse, les contenus, la qualification et le parcours de conversion. Et si le vrai sujet se situe entre génération de la demande et traitement commercial, la <Link to="/prise-rendez-vous" className="text-primary hover:underline">prise de rendez-vous</Link> peut devenir un levier complémentaire très concret.</p>
      <SectionCTA />
    </section>

    <section id="faq-services-experience-client-btp" className="scroll-mt-28">
      <h2 className="mb-6 text-2xl font-bold text-foreground font-display md:text-3xl">FAQ</h2>
      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="faq-1" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Quels services valoriser en priorité dans une entreprise de rénovation ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Priorisez les services qui retirent une friction réelle : qualification rapide, aide au cadrage du besoin, visibilité sur les étapes, accompagnement administratif, suivi devis ou réassurance chantier.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Comment savoir si un service améliore vraiment la performance commerciale ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Mesurez son impact sur des indicateurs concrets : délai de réponse, taux de qualification, taux de rendez-vous utiles, vitesse d’envoi des devis et taux de signature.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Faut-il créer de nouveaux services ou mieux communiquer sur ceux qui existent déjà ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Dans beaucoup de cas, le plus rentable est d’abord de mieux rendre visibles et compréhensibles les services déjà existants. Beaucoup d’entreprises délivrent plus de valeur qu’elles n’en montrent réellement.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-4" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Les services peuvent-ils vraiment justifier un prix plus élevé ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Oui, à condition qu’ils réduisent un risque, fassent gagner du temps ou simplifient la prise de décision. Ce n’est pas le mot “service” qui protège la marge, c’est la valeur perçue et concrètement démontrée.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </>
);

export default ArticleStrategieMarketingBtpServicesDifferenciation2026;
