import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionCTA from "@/components/SectionCTA";

const toc = [
  { id: "abm-btp-pertinent-grands-comptes", label: "Pourquoi l'ABM devient pertinent" },
  { id: "signaux-prospection-grands-comptes", label: "Les signaux de manque de structure" },
  { id: "construire-strategie-abm-btp", label: "Construire une stratégie exploitable" },
  { id: "sequence-approche-abm-btp", label: "La séquence d'approche" },
  { id: "kpi-abm-btp", label: "Les indicateurs à suivre" },
  { id: "quand-se-faire-accompagner-abm", label: "Quand faut-il se faire accompagner ?" },
  { id: "faq-abm-btp", label: "FAQ" },
];

const ArticleAbmBtpCiblerGrandsComptesOpportunites2026 = () => (
  <>
    <div className="mb-8 rounded-xl border border-border bg-muted/30 p-5 md:p-6">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">En bref</p>
      <p className="text-base leading-relaxed text-foreground">
        Dans le BTP, viser les grands comptes ne se joue pas au volume. L&apos;ABM consiste à concentrer les efforts marketing et commerciaux sur une liste restreinte de comptes stratégiques pour ouvrir des opportunités sérieuses, là où la prospection classique s&apos;épuise.
      </p>
    </div>

    <div className="mb-8 rounded-xl border border-primary/15 bg-primary/5 p-5 md:p-6">
      <p className="text-muted-foreground leading-relaxed mb-0">
        L&apos;enjeu n&apos;est pas de générer plus de contacts à tout prix, mais de concentrer les efforts sur les comptes qui peuvent réellement nourrir votre pipeline. Une <strong>stratégie ABM BTP</strong> rentable sélectionne les comptes prioritaires, aligne marketing et commerce, puis orchestre des prises de contact utiles jusqu&apos;à l&apos;ouverture d&apos;une vraie opportunité.
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

    <section id="abm-btp-pertinent-grands-comptes" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Pourquoi l&apos;ABM devient pertinent quand vous ciblez des comptes stratégiques</h2>
      <p className="mb-4 text-muted-foreground">Quand une entreprise du bâtiment cherche à travailler avec des promoteurs, des syndics, des réseaux d&apos;architectes, des maîtres d&apos;œuvre ou des donneurs d&apos;ordre multi-sites, la logique classique de génération de leads BTP montre vite ses limites. Les décideurs sont peu disponibles, les projets sont lents à mûrir et les messages trop généralistes sont filtrés très tôt.</p>
      <p className="mb-4 text-muted-foreground">L&apos;ABM consiste à traiter chaque compte prioritaire comme un mini-marché. Au lieu de chercher à toucher tout le monde, vous concentrez vos moyens sur une liste restreinte d&apos;entreprises qui correspondent réellement à votre offre, à votre zone d&apos;intervention et à votre ambition commerciale.</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>vous réduisez la dispersion commerciale ;</li>
        <li>vous améliorez la qualité des échanges dès le départ ;</li>
        <li>vous donnez au marketing un rôle utile dans la progression des comptes clés ;</li>
        <li>vous soutenez une stratégie marketing BTP plus précise, plus lisible et plus rentable.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Exemple concret : un spécialiste de la rénovation énergétique en habitat collectif n&apos;a pas intérêt à diffuser le même discours à tous les acteurs du marché. S&apos;il vise des syndics ou des gestionnaires de patrimoine, il doit parler coordination, délais de décision, pédagogie copropriété, gestion des objections et capacité à sécuriser des opérations complexes.</p>
    </section>

    <section id="signaux-prospection-grands-comptes" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Les signaux qui montrent que votre prospection grands comptes manque de structure</h2>
      <p className="mb-4 text-muted-foreground">Beaucoup d&apos;entreprises pensent faire de l&apos;ABM alors qu&apos;elles font surtout de la prospection standard sur une courte liste de contacts. La nuance est importante, car sans méthode, le ciblage grands comptes devient vite chronophage et peu mesurable.</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>les commerciaux contactent des comptes intéressants, mais sans scénario commun ni priorisation claire ;</li>
        <li>le marketing produit des contenus génériques qui n&apos;aident pas les échanges terrain ;</li>
        <li>les interlocuteurs ciblés ne reçoivent pas le bon angle selon leur fonction ;</li>
        <li>les relances repartent de zéro à chaque prise de contact ;</li>
        <li>le CRM suit des contacts, mais pas réellement la maturation des comptes stratégiques.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Dans ces situations, vous n&apos;avez pas seulement un sujet de message ou de canal. Vous avez surtout un sujet de structuration de votre acquisition client BTP. Sans cela, même une équipe commerciale solide finit par brûler du temps sur des comptes mal activés.</p>
    </section>

    <section id="construire-strategie-abm-btp" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Comment construire une stratégie ABM BTP réellement exploitable</h2>
      <p className="mb-4 text-muted-foreground">Une approche ABM utile dans le bâtiment doit rester simple à piloter. L&apos;objectif n&apos;est pas de créer une usine à gaz, mais un cadre partagé entre direction, marketing et commerce.</p>

      <h3 className="mb-3 mt-6 text-xl font-semibold text-foreground font-display">1. Sélectionner une liste de comptes cohérente</h3>
      <p className="mb-4 text-muted-foreground">Commencez par une liste restreinte. Mieux vaut 20 à 40 comptes vraiment stratégiques qu&apos;un fichier de 300 entreprises jamais activées proprement.</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>typologie de chantiers ou d&apos;opérations ;</li>
        <li>taille et récurrence potentielle du compte ;</li>
        <li>compatibilité avec vos marges et votre organisation ;</li>
        <li>zone géographique ;</li>
        <li>historique commercial ou potentiel de prescription.</li>
      </ul>

      <h3 className="mb-3 mt-6 text-xl font-semibold text-foreground font-display">2. Cartographier les parties prenantes</h3>
      <p className="mb-4 text-muted-foreground">Dans un compte BTP, la décision se répartit rarement sur une seule personne. Il faut identifier qui influence quoi : direction technique, achats, direction générale, responsable patrimoine, conducteur d&apos;opérations, prescripteur externe.</p>

      <h3 className="mb-3 mt-6 text-xl font-semibold text-foreground font-display">3. Clarifier la promesse par cible</h3>
      <p className="mb-4 text-muted-foreground">Un même argument ne parle pas à tout le monde. Un acheteur regardera le risque contractuel et le coût global. Un responsable technique regardera la fiabilité, la mise en œuvre et la coordination. Un dirigeant regardera la continuité d&apos;exécution, la réputation et la capacité à tenir les engagements.</p>

      <h3 className="mb-3 mt-6 text-xl font-semibold text-foreground font-display">4. Préparer des actifs de preuve</h3>
      <div className="rounded-xl border border-border bg-muted/30 p-6 md:p-7">
        <p className="mb-3 font-semibold text-foreground">Les supports qui font avancer une conversation ABM :</p>
        <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
          <li>cas chantier détaillé par typologie de projet ;</li>
          <li>guide ciblé répondant à une vraie question métier ;</li>
          <li>note de méthode ou comparatif technique ;</li>
          <li>page dédiée au compte ou au segment visé.</li>
        </ul>
      </div>
      <p className="mt-4 text-muted-foreground">C&apos;est là qu&apos;une bonne <Link to="/gestion-communication" className="text-primary hover:underline">agence marketing BTP</Link> ou une équipe interne structurée fait la différence : elle transforme des arguments commerciaux diffus en supports concrets, réutilisables et contextualisés.</p>
    </section>

    <section id="sequence-approche-abm-btp" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">La séquence d&apos;approche qui ouvre plus d&apos;opportunités que la prospection brute</h2>
      <p className="mb-4 text-muted-foreground">Une campagne ABM performante repose rarement sur un seul contact. Elle fonctionne mieux comme une séquence progressive où chaque interaction a un rôle clair.</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li><strong>Étape 1 :</strong> rendre le compte conscient de votre existence avec un angle crédible et contextualisé ;</li>
        <li><strong>Étape 2 :</strong> partager un contenu ou une preuve directement utile au type de projet visé ;</li>
        <li><strong>Étape 3 :</strong> relier cette preuve à une situation métier concrète du compte ;</li>
        <li><strong>Étape 4 :</strong> proposer un échange ciblé, logique, sans basculer brutalement dans un pitch commercial standard.</li>
      </ul>
      <div className="mt-6 rounded-xl border border-border bg-background p-6 shadow-card">
        <p className="mb-3 font-semibold text-foreground">Exemple terrain</p>
        <p className="text-muted-foreground">Une entreprise de façade qui veut entrer chez des architectes ou bureaux de maîtrise d&apos;œuvre aura plus d&apos;impact avec une séquence qui valorise des références chantier, des détails d&apos;exécution, des contraintes traitées et des arbitrages techniques, qu&apos;avec un email générique « nous sommes experts depuis 20 ans ».</p>
      </div>
      <p className="mt-4 text-muted-foreground">L&apos;ABM ne supprime pas la relance commerciale. Il la rend plus légitime. Le commercial n&apos;appelle plus « à froid » au sens strict : il prolonge un contexte déjà construit. Pour aller plus loin, lisez aussi <Link to="/blog/inbound-marketing-btp-automation-abm-developper-business-2026" className="text-primary hover:underline">notre approche inbound et automation BTP</Link>.</p>
    </section>

    <section id="kpi-abm-btp" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Quels indicateurs suivre pour savoir si votre ABM produit de vraies opportunités</h2>
      <p className="mb-4 text-muted-foreground">Une stratégie ABM BTP se pilote moins au volume qu&apos;à la progression des comptes. Si vous gardez uniquement des KPI de campagne classiques, vous risquez de passer à côté de la réalité commerciale.</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>nombre de comptes réellement activés ;</li>
        <li>nombre d&apos;interlocuteurs qualifiés par compte ;</li>
        <li>taux de réponse ou d&apos;interaction utile ;</li>
        <li>prise de rendez-vous avec les bons profils ;</li>
        <li>opportunités ouvertes dans le CRM ;</li>
        <li>temps moyen entre premier contact et échange qualifié ;</li>
        <li>part des comptes ciblés qui avancent réellement dans le pipeline.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Cette lecture change tout : vous ne jugez plus seulement la performance au nombre de leads remontés, mais à la capacité à faire progresser des comptes à fort potentiel jusqu&apos;à une conversation commerciale sérieuse.</p>
    </section>

    <section id="quand-se-faire-accompagner-abm" className="mb-12 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Quand faut-il se faire accompagner ?</h2>
      <p className="mb-4 text-muted-foreground">Si vos équipes savent déjà qui elles veulent cibler mais n&apos;arrivent pas à industrialiser la méthode, le vrai sujet n&apos;est pas seulement la prospection. Il peut être dans le cadrage de la cible, la production de preuves, la structuration CRM ou l&apos;alignement entre marketing et commerce.</p>
      <p className="mb-4 text-muted-foreground">Un accompagnement utile aide surtout à prioriser les comptes qui méritent un effort fort, poser un système de messages et de contenus par cible, organiser le suivi des interactions dans le temps et relier l&apos;ABM à votre pilotage commercial réel.</p>
      <SectionCTA />
    </section>

    <section id="faq-abm-btp" className="scroll-mt-28">
      <h2 className="mb-6 text-2xl md:text-3xl font-bold text-foreground font-display">FAQ : ABM dans le BTP</h2>
      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="faq-1" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">L&apos;ABM BTP est-il réservé aux très grandes entreprises ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Non. Une entreprise du bâtiment déjà structurée peut utiliser l&apos;ABM dès lors qu&apos;elle cible quelques comptes à fort potentiel et qu&apos;elle dispose d&apos;un minimum de méthode commerciale et CRM.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Quelle différence entre ABM et prospection commerciale classique ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">La prospection classique cherche souvent plus de volume. L&apos;ABM cherche plus de précision. Il priorise quelques comptes, adapte les messages par interlocuteur et organise une progression dans le temps.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">L&apos;ABM remplace-t-il la génération de leads BTP ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Non. Les deux approches peuvent coexister. La génération de leads nourrit la demande entrante, tandis que l&apos;ABM sert surtout à ouvrir ou accélérer des comptes stratégiques difficiles à capter autrement.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-4" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Combien de comptes faut-il cibler au départ ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Il vaut mieux commencer petit. Une première vague de 20 à 40 comptes bien choisis est souvent plus efficace qu&apos;une longue liste mal exploitée.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </>
);

export default ArticleAbmBtpCiblerGrandsComptesOpportunites2026;
