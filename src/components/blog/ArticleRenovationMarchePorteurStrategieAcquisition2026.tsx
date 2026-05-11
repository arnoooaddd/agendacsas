import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const toc = [
  { id: "pourquoi-renovation-moteur-batiment", label: "Pourquoi la rénovation est devenue le moteur du bâtiment en 2026" },
  { id: "trois-piliers-strategie-renovation", label: "Les trois piliers d'une stratégie de communication rénovation" },
  { id: "piller-positionnement-renovation", label: "1. Un positionnement clair sur la rénovation" },
  { id: "piller-presence-locale", label: "2. Une présence locale forte" },
  { id: "piller-systeme-transformation", label: "3. Un système qui transforme la demande en chantier" },
  { id: "erreurs-couter-des-parts-de-marche", label: "Les erreurs qui coûtent des parts de marché" },
  { id: "quand-marche-concurrentiel-strategie-difference", label: "Quand le marché devient concurrentiel" },
  { id: "faq-renovation-marche-porteur", label: "FAQ" },
];

const ArticleRenovationMarchePorteurStrategieAcquisition2026 = () => (
  <>
    <div className="mb-8 rounded-xl border border-border bg-muted/30 p-5 md:p-6">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">En bref</p>
      <p className="text-base leading-relaxed text-foreground">
        Face au ralentissement du neuf et aux aides publiques maintenues, la rénovation est devenue le principal
        gisement de croissance pour les entreprises du bâtiment. Encore faut-il structurer une stratégie de communication
        et d'acquisition qui capte ce marché porteur de façon durable.
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

    <section id="pourquoi-renovation-moteur-batiment" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Pourquoi la rénovation est devenue le moteur du bâtiment en 2026</h2>
      <p className="mb-4 text-muted-foreground">Le constat est largement partagé : la construction neuve n'a pas retrouvé son dynamisme d'avant 2023. Les taux d'emprunt restent élevés, le coût des matériaux a augmenté, et les ménages français se tournent massivement vers la rénovation de leur logement. Cette bascule est structurelle, encouragée par des aides publiques maintenues et un parc de logements vieillissant qui nécessite des travaux.</p>
      <p className="mb-4 text-muted-foreground">Pour une entreprise de rénovation déjà établie, ce contexte représente une opportunité réelle, mais à une condition : être visible et crédible au moment où le particulier ou le maître d'ouvrage cherche son prestataire. Le gisement est là, encore faut-il que votre système d'acquisition clients rénovation soit capable de le capter.</p>
      <p className="text-muted-foreground"><strong>Dans la rénovation, le problème n'est presque jamais l'absence de demande.</strong> Il se situe plutôt entre la visibilité, la réassurance et la capacité à traiter les opportunités commerciales de façon professionnelle.</p>
    </section>

    <section id="trois-piliers-strategie-renovation" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Les trois piliers d'une stratégie de communication rénovation efficace en 2026</h2>
      <p className="mb-4 text-muted-foreground">Une stratégie marketing rénovation qui fonctionne en 2026 repose sur trois piliers concrets, aucun ne fonctionnant isolément.</p>
    </section>

    <section id="piller-positionnement-renovation" className="mb-10 scroll-mt-28">
      <h3 className="mb-3 text-xl font-bold text-foreground font-display md:text-2xl">1. Un positionnement clair sur la rénovation</h3>
      <p className="mb-4 text-muted-foreground">Les entreprises qui performent sur ce marché ne sont pas celles qui communiquent sur « tous les travaux ». Ce sont celles qui assument un positionnement rénovation affirmé.</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>un site web qui parle explicitement de rénovation, pas de construction neuve</li>
        <li>des réalisations et des études de cas qui illustrent des projets de rénovation (isolation, toiture, façade, menuiserie)</li>
        <li>un discours qui valorise l'expertise en rénovation énergétique</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Exemple concret : un artisan spécialisé dans l'isolation par l'extérieur qui affiche clairement son positionnement, montre des chantiers réalisés et explique son approche technique génère plus de demandes qualifiées qu'une entreprise « généraliste tous travaux » présente sur tous les fronts.</p>
    </section>

    <section id="piller-presence-locale" className="mb-10 scroll-mt-28">
      <h3 className="mb-3 text-xl font-bold text-foreground font-display md:text-2xl">2. Une présence locale forte et stratégique</h3>
      <p className="mb-4 text-muted-foreground">Dans la rénovation, la grande majorité des chantiers se décide dans un rayon de 50 à 80 kilomètres autour de l'entreprise. La visibilité locale est donc le socle de toute génération de leads rénovation : fiche Google Business Profile optimisée, avis clients récents et détaillés, contenu qui parle des zones d'intervention réelles.</p>
      <p className="mb-4 text-muted-foreground">Compléter cette présence locale par des campagnes publicitaires rénovation ciblées géographiquement permet d'aller chercher les prospects qui cherchent activement un professionnel. L'enjeu n'est pas d'être partout, mais d'être bien présent là où se trouvent vos clients potentiels.</p>
    </section>

    <section id="piller-systeme-transformation" className="mb-10 scroll-mt-28">
      <h3 className="mb-3 text-xl font-bold text-foreground font-display md:text-2xl">3. Un système qui transforme la demande en chantier</h3>
      <p className="mb-4 text-muted-foreground">Le problème le plus fréquent dans les entreprises de rénovation établies n'est pas le nombre de demandes, mais leur traitement. Un prospect qui contacte une entreprise et n'obtient pas de réponse rapide et professionnelle part chez le concurrent.</p>
      <p className="mb-4 text-muted-foreground">Un système d'acquisition client rénovation performant ne s'arrête pas à la génération de leads. Il intègre :</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>un contact rapide (moins de 2 heures après la demande)</li>
        <li>une qualification claire pour éviter les déplacements inutiles</li>
        <li>un suivi structuré des devis envoyés</li>
        <li>une relance systématique des devis non signés</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Une entreprise de rénovation qui reçoit 20 demandes par mois mais n'en traite correctement que la moitié laisse passer l'équivalent de plusieurs dizaines de milliers d'euros de chiffre d'affaires potentiel chaque année.</p>
    </section>

    <section id="erreurs-couter-des-parts-de-marche" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Les erreurs qui coûtent des parts de marché en 2026</h2>
      <p className="mb-4 text-muted-foreground">Plusieurs entreprises de rénovation perdent des opportunités sur ce marché porteur à cause d'erreurs évitables :</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li><strong>Communiquer comme en 2020</strong> : un site vieillissant, pas de contenu récent, une absence sur les moteurs de recherche. Dans un marché où la demande est forte, celui qui ne se voit pas n'existe pas pour le prospect.</li>
        <li><strong>Miser uniquement sur le bouche-à-oreille</strong> : si votre carnet de commandes est actuellement plein, c'est le moment d'investir dans un système d'acquisition clients rénovation pour préparer la suite. Ne pas le faire, c'est créer un trou d'air quand le bouche-à-oreille ralentit.</li>
        <li><strong>Négliger le suivi des devis</strong> : dans la rénovation, le cycle de décision peut prendre plusieurs semaines. Un devis sans relance, c'est une chance sur deux de ne jamais être signé.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Ces erreurs sont fréquentes mais corrigeables. Le plus souvent, corriger le traitement commercial et la visibilité suffit à relancer la croissance sans augmenter le budget publicitaire.</p>
    </section>

    <section id="quand-marche-concurrentiel-strategie-difference" className="mb-12 scroll-mt-28">
      <div className="rounded-xl border border-border bg-muted/30 p-6 md:p-7">
        <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Quand le marché devient concurrentiel, la stratégie fait la différence</h2>
        <p className="mb-4 text-muted-foreground">Le boom de la rénovation attire de nouveaux entrants : entreprises générales qui se mettent à la rénovation, plateformes en ligne, artisans qui passent professionnels. La concurrence est réelle et va s'intensifier.</p>
        <p className="mb-4 text-muted-foreground">Dans ce contexte, ce sont les entreprises qui ont structuré leur marketing digital rénovation et leur acquisition qui sortent du lot. Pas nécessairement celles qui dépensent le plus en publicité, mais celles qui ont construit un système cohérent : visibilité locale, contenu de qualité et traitement commercial professionnel.</p>
        <p className="mb-4 text-muted-foreground">Pour les dirigeants d'entreprises de rénovation qui génèrent déjà plusieurs centaines de milliers d'euros de chiffre d'affaires, l'enjeu n'est pas seulement de trouver des clients rénovation. C'est de structurer un système reproductible qui alimente le pipeline commercial en continu, sans dépendre d'un seul canal.</p>
        <p className="text-muted-foreground">C'est précisément là qu'un accompagnement structuré en <Link to="/gestion-communication" className="text-primary hover:underline">gestion de la communication orientée performance</Link> prend tout son sens : en passant d'une logique de « faire de la com' » à un vrai système de génération de leads rénovation piloté par les résultats.</p>
      </div>
    </section>

    <section id="faq-renovation-marche-porteur" className="mb-16 scroll-mt-28">
      <h2 className="mb-6 text-2xl font-bold text-foreground font-display md:text-3xl">FAQ</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="quoi-investir">
          <AccordionTrigger className="text-left text-base font-medium">Comment savoir si mon entreprise doit investir dans la rénovation plutôt que le neuf ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Regardez votre carnet de commandes des 12 derniers mois : si la part de rénovation augmente naturellement sans action spécifique, c'est le signe que le marché est en train de basculer. Anticiper ce mouvement est plus rentable que de le subir. Si vous n'avez pas encore de données, consultez les tendances locales du marché de l'habitat dans votre zone d'intervention.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="budget-marketing">
          <AccordionTrigger className="text-left text-base font-medium">Quel budget prévoir pour une stratégie marketing rénovation en 2026 ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Pour une entreprise de rénovation structurée (plus d'un million d'euros de chiffre d'affaires), un budget marketing cohérent se situe entre 3 % et 8 % du chiffre d'affaires annuel, selon les objectifs de croissance. Le bon indicateur n'est pas le budget en lui-même, mais le coût acquisition client rénovation et le retour sur investissement sur 12 mois.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="delai-resultats">
          <AccordionTrigger className="text-left text-base font-medium">Combien de temps faut-il pour qu'une stratégie marketing rénovation porte ses fruits ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Les premiers résultats visibles (demandes entrantes, visites site web) apparaissent généralement sous 4 à 8 semaines. L'impact sur le chiffre d'affaires est visible à 3-6 mois, une fois que le système de traitement commercial est en place et optimisé. La patience est payante, mais les premiers signaux sont rapides.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </>
);

export default ArticleRenovationMarchePorteurStrategieAcquisition2026;
