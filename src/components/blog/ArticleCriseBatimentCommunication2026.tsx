import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionCTA from "@/components/SectionCTA";

const toc = [
  { id: "communication-crise-batiment-definition", label: "Une communication de crise utile" },
  { id: "revaloriser-services-batiment", label: "Revaloriser vos services" },
  { id: "travailler-prescription-batiment", label: "Travailler la prescription" },
  { id: "renforcer-lien-partenaires-terrain", label: "Renforcer le lien terrain" },
  { id: "reprendre-strategie-marketing-rentabilite", label: "Reprendre la stratégie marketing" },
  { id: "plan-action-90-jours-crise-batiment", label: "Un plan d’action sur 90 jours" },
  { id: "quand-se-faire-accompagner-crise-batiment", label: "Quand faut-il se faire accompagner ?" },
  { id: "faq-crise-batiment-communication-2026", label: "FAQ" },
];

const ArticleCriseBatimentCommunication2026 = () => (
  <>
    <div className="mb-8 rounded-xl border border-border bg-muted/30 p-5 md:p-6">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">En bref</p>
      <p className="text-base leading-relaxed text-foreground">
        En période de ralentissement, les entreprises du bâtiment qui traversent le mieux la crise ne sont pas celles qui coupent toute communication. Ce sont souvent celles qui recentrent leurs efforts sur la confiance, la différenciation et la génération de demandes vraiment exploitables.
      </p>
    </div>

    <div className="mb-8 lg:hidden rounded-xl border border-border bg-background p-5">
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

    <section id="communication-crise-batiment-definition" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Une communication de crise utile dans le bâtiment, c’est quoi exactement ?</h2>
      <p className="mb-4 text-muted-foreground">Quand le marché du bâtiment ralentit, beaucoup d’entreprises réduisent d’abord leur budget marketing. C’est compréhensible. Mais dans la rénovation de l’habitat, ce réflexe crée souvent un second problème : moins de visibilité, moins de demandes qualifiées, puis davantage de pression commerciale quelques mois plus tard.</p>
      <p className="mb-4 text-muted-foreground">En 2026, une crise ou un ralentissement ne se gère pas seulement avec des coupes budgétaires. Il se gère aussi avec des arbitrages plus intelligents. L’enjeu n’est pas de communiquer plus. L’enjeu est de <strong>recentrer votre communication sur ce qui protège votre pipeline, votre différenciation et votre reprise commerciale</strong>.</p>
      <p className="mb-4 text-muted-foreground">Dans le BTP et la rénovation, une communication rentable en période de tension n’a rien d’un exercice d’image. C’est un système qui aide à préserver la confiance, à garder des opportunités ouvertes et à concentrer les efforts sur les actions qui ont un impact réel sur l’acquisition client.</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>rester visible quand les décideurs reportent leurs projets ;</li>
        <li>défendre ses marges sans entrer dans une guerre des prix ;</li>
        <li>continuer à générer des demandes sérieuses même avec un marché plus attentiste ;</li>
        <li>préparer les prochains mois pendant que d’autres sortent des radars.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Dans le BTP, le problème n’est presque jamais uniquement le trafic. Il se situe souvent entre la promesse, la qualification des contacts et la capacité commerciale à convertir au bon moment.</p>
    </section>

    <section id="revaloriser-services-batiment" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">1. Revaloriser vos services pour éviter d’être comparé uniquement sur le prix</h2>
      <p className="mb-4 text-muted-foreground">Quand les carnets se tendent, beaucoup d’entreprises de rénovation mettent en avant leurs remises, leurs délais ou quelques arguments produit. C’est rarement suffisant. Si votre offre ressemble à celle des autres, le prospect arbitre surtout sur le prix ou sur le degré de confiance immédiat.</p>
      <p className="mb-4 text-muted-foreground">Revaloriser vos services consiste à rendre visibles les éléments qui sécurisent la décision :</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>la qualité du diagnostic avant devis ;</li>
        <li>la clarté de l’accompagnement administratif ;</li>
        <li>le suivi chantier et la coordination ;</li>
        <li>la pédagogie sur les aides, les délais ou les choix techniques ;</li>
        <li>la qualité du service après-vente et de la relation client.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Pour une entreprise spécialisée en isolation, en menuiserie ou en toiture, ces services sont souvent plus différenciants que le produit lui-même. Pourtant, ils restent cachés dans une page “à propos” ou évoqués trop tard dans le parcours.</p>
      <p className="text-muted-foreground">Posez-vous une question simple : <strong>qu’est-ce qui prouve concrètement que travailler avec vous réduit le risque pour le client ?</strong> Si la réponse n’apparaît pas en quelques secondes sur vos pages, vos supports ou vos campagnes, votre communication laisse de la valeur sur la table.</p>
    </section>

    <section id="travailler-prescription-batiment" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">2. Travailler la prescription et les relais d’influence avant que le marché ne reparte</h2>
      <p className="mb-4 text-muted-foreground">Dans la rénovation de l’habitat, beaucoup d’entreprises dépendent trop fortement de la demande directe. Or, en période plus instable, les relais comme les architectes, maîtres d’œuvre, gestionnaires d’actifs, apporteurs d’affaires locaux ou partenaires de réseau deviennent encore plus précieux.</p>
      <p className="mb-4 text-muted-foreground">Le problème, c’est que la prescription se construit lentement. Ce n’est donc pas un levier à activer seulement quand le carnet est vide. C’est un chantier de fond à lancer précisément quand la pression opérationnelle redescend un peu.</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>une proposition de valeur claire pour les prescripteurs ;</li>
        <li>des contenus qui montrent vos références, vos méthodes et vos zones d’expertise ;</li>
        <li>des cas clients exploitables commercialement ;</li>
        <li>des séquences de relance sobres pour entretenir le lien ;</li>
        <li>un meilleur suivi CRM des partenaires et opportunités indirectes.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Une entreprise de rénovation énergétique qui suit sérieusement ses partenaires voit souvent apparaître un avantage sous-estimé : les contacts recommandés sont moins volatils, mieux qualifiés et plus faciles à convertir. C’est un vrai sujet d’<strong>acquisition clients rénovation</strong>, pas seulement de notoriété.</p>
    </section>

    <section id="renforcer-lien-partenaires-terrain" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">3. Renforcer le lien avec vos partenaires terrain pour protéger le chiffre d’affaires</h2>
      <p className="mb-4 text-muted-foreground">Quand le marché se crispe, les artisans partenaires, poseurs, distributeurs ou équipes commerciales terrain ont besoin de repères clairs. Si votre communication devient floue, absente ou trop institutionnelle, vous perdez une partie de votre capacité à rester prioritaire dans les arbitrages du quotidien.</p>
      <p className="mb-4 text-muted-foreground">Renforcer ce lien ne veut pas dire multiplier les messages. Il faut surtout parler plus juste :</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>sur ce que vous apportez réellement au terrain ;</li>
        <li>sur les solutions qui facilitent la vente ou la mise en œuvre ;</li>
        <li>sur les supports qui aident à convaincre plus vite ;</li>
        <li>sur les engagements que vous êtes capable de tenir.</li>
      </ul>
      <div className="mt-6 rounded-xl border border-border bg-muted/30 p-6 md:p-7">
        <p className="mb-3 font-semibold text-foreground">Exemple terrain</p>
        <p className="text-muted-foreground">Une société de rénovation globale peut transformer ses meilleurs arguments commerciaux en outils simples : preuve sociale locale, comparatifs de scénarios, FAQ objections, séquences de relance après devis ou vidéos pédagogiques pour les commerciaux. Cette logique améliore la communication, mais aussi le traitement commercial.</p>
      </div>
      <p className="mt-4 text-muted-foreground">Quand les demandes baissent, <strong>chaque contact mal exploité coûte plus cher qu’en période haute</strong>. C’est pour cela que le lien entre communication et exécution commerciale devient central.</p>
    </section>

    <section id="reprendre-strategie-marketing-rentabilite" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">4. Reprendre toute votre stratégie marketing avec une logique de rentabilité</h2>
      <p className="mb-4 text-muted-foreground">Le quatrième chantier est souvent le plus rentable : remettre à plat votre système marketing au lieu de simplement couper quelques lignes de budget. Une crise agit comme un révélateur. Elle montre très vite les canaux peu pilotés, les messages trop génériques et les actions qui n’alimentent pas réellement le chiffre d’affaires.</p>
      <p className="mb-4 text-muted-foreground">Voici les questions à poser en priorité :</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>quels leviers génèrent encore des demandes sérieuses ;</li>
        <li>quels canaux amènent surtout des contacts peu qualifiés ;</li>
        <li>où se situent les pertes entre lead, devis, relance et signature ;</li>
        <li>quels contenus ou campagnes servent vraiment la vente ;</li>
        <li>quels investissements préparent la reprise plutôt que de juste occuper le terrain.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Dans une entreprise de rénovation au-delà de 1 M€ de chiffre d’affaires, cette revue doit connecter marketing, CRM et commerce. Si vous générez des demandes mais que personne ne suit les délais de relance, la source du problème n’est pas toujours la publicité. Si votre site attire du trafic mais peu de rendez-vous, le sujet peut venir de la promesse, des preuves ou du parcours de conversion.</p>
      <p className="text-muted-foreground">Autrement dit, structurer votre communication en 2026 revient aussi à <strong>structurer votre acquisition client BTP</strong>. Les entreprises qui traversent mieux les périodes compliquées sont souvent celles qui savent où elles perdent de la valeur, et qui agissent avant que le manque de volume ne devienne critique.</p>
    </section>

    <section id="plan-action-90-jours-crise-batiment" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Un plan d’action simple sur 90 jours pour reprendre la main</h2>
      <p className="mb-4 text-muted-foreground">Si vous voulez avancer sans vous disperser, voici une trame simple à déployer sur trois mois :</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li><strong>Jours 1 à 30 :</strong> audit des messages, des canaux, du traitement commercial et des pages qui génèrent des demandes.</li>
        <li><strong>Jours 31 à 60 :</strong> clarification de la proposition de valeur, mise à jour des preuves, recentrage des campagnes et priorisation des contenus utiles.</li>
        <li><strong>Jours 61 à 90 :</strong> relance des leviers les plus rentables, suivi plus rigoureux des opportunités et plan de prescription ou de partenariats.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Ce type de feuille de route aide à relier les arbitrages marketing à des indicateurs concrets : volume de demandes exploitables, taux de transformation, délai de relance, coût d’acquisition et marge protégée.</p>
    </section>

    <section id="quand-se-faire-accompagner-crise-batiment" className="mb-12 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Quand faut-il se faire accompagner ?</h2>
      <p className="mb-4 text-muted-foreground">Si votre entreprise de rénovation traverse un ralentissement, le plus grand risque n’est pas toujours de manquer d’idées. C’est de lancer trop d’actions isolées sans prioriser. Un accompagnement externe devient pertinent quand vous devez arbitrer entre plusieurs canaux, remettre de l’ordre entre marketing et commerce ou reconstruire un système d’acquisition plus lisible.</p>
      <p className="mb-4 text-muted-foreground">Chez Agendac, le sujet est abordé avec une logique simple : identifier ce qui soutient réellement les demandes qualifiées, clarifier la promesse et remettre le pilotage au service de la rentabilité. Dans un marché tendu, c’est souvent cette discipline qui fait la différence entre une entreprise qui subit et une entreprise qui prépare déjà son rebond.</p>
      <p className="mb-4 text-muted-foreground">Si votre priorité porte d’abord sur la visibilité organique et les contenus utiles, un accompagnement en <Link to="/gestion-seo" className="text-primary hover:underline">gestion SEO</Link> peut aider à remettre les bons sujets au centre. Si le sujet porte davantage sur l’orchestration des canaux et le pilotage global, la <Link to="/gestion-communication" className="text-primary hover:underline">gestion de la communication</Link> devient souvent le bon point d’appui.</p>
      <SectionCTA />
    </section>

    <section id="faq-crise-batiment-communication-2026" className="scroll-mt-28">
      <h2 className="mb-6 text-2xl md:text-3xl font-bold text-foreground font-display">FAQ : communication et marketing en période de crise dans le bâtiment</h2>
      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="faq-1" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Faut-il réduire complètement son budget marketing quand le marché du bâtiment ralentit ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Non. Il faut surtout couper ce qui n’est pas piloté ou peu utile, puis réinvestir sur les leviers qui soutiennent la visibilité, la confiance et les demandes réellement qualifiées.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Quel est le premier chantier à lancer dans une entreprise de rénovation ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Le plus urgent est souvent de clarifier la proposition de valeur et les services différenciants. Beaucoup d’entreprises perdent des opportunités car leur communication les rend trop comparables.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Pourquoi la prescription devient-elle stratégique en 2026 ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Parce qu’elle permet de sécuriser des opportunités plus stables, moins dépendantes de la seule demande directe, et souvent mieux préparées commercialement.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-4" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Comment savoir si mon problème vient du marketing ou du traitement commercial ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Il faut suivre la chaîne complète : source du lead, qualité de la demande, délai de relance, taux de devis, taux de signature et marge. Dans le BTP, une baisse de performance se joue souvent à l’interface entre acquisition et suivi commercial.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </>
);

export default ArticleCriseBatimentCommunication2026;
