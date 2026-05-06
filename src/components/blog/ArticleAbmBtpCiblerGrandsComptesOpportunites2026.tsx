import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionCTA from "@/components/SectionCTA";

const toc = [
  { id: "abm-btp-pertinent-grands-comptes", label: "Pourquoi l’ABM devient pertinent" },
  { id: "signaux-prospection-grands-comptes", label: "Les signaux de manque de structure" },
  { id: "construire-strategie-abm-btp", label: "Construire une stratégie exploitable" },
  { id: "sequence-approche-abm-btp", label: "La séquence d’approche" },
  { id: "kpi-abm-btp", label: "Les indicateurs à suivre" },
  { id: "quand-se-faire-accompagner-abm", label: "Quand faut-il se faire accompagner ?" },
  { id: "faq-abm-btp", label: "FAQ" },
];

export default function ArticleAbmBtpCiblerGrandsComptesOpportunites2026() {
  return (
    <>
      <div className="mb-8 rounded-xl border border-border bg-muted/30 p-5 md:p-6">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">En bref</p>
        <p className="text-base leading-relaxed text-foreground">
          Dans le BTP, viser les grands comptes demande plus qu’une prospection plus intense. Il faut une méthode capable d’aligner ciblage, message, preuves et suivi commercial sur quelques comptes à fort potentiel.
        </p>
      </div>

      <div className="mb-8 rounded-xl border border-primary/15 bg-primary/5 p-5 md:p-6">
        <p className="mb-0 leading-relaxed text-muted-foreground">
          Une stratégie ABM BTP rentable est un système qui sélectionne les comptes prioritaires, aligne marketing et commerce, puis orchestre des prises de contact utiles jusqu’à l’ouverture d’une vraie opportunité. Dans le BTP, le problème n’est presque jamais uniquement le trafic. Il se situe souvent entre le ciblage des bons comptes, la qualité du message et la capacité commerciale à faire progresser la relation dans la durée.
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

      <section id="abm-btp-pertinent-grands-comptes" className="mb-10 scroll-mt-28">
        <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">
          Pourquoi l’ABM devient pertinent quand vous ciblez des comptes stratégiques
        </h2>
        <p className="mb-4 text-muted-foreground">
          Quand une entreprise du bâtiment cherche à travailler avec des promoteurs, des syndics, des réseaux d’architectes, des maîtres d’œuvre ou des donneurs d’ordre multi-sites, la logique classique de <strong>génération de leads BTP</strong> montre vite ses limites.
        </p>
        <p className="mb-4 text-muted-foreground">
          Les décideurs sont peu disponibles, les projets sont lents à mûrir et les messages trop généralistes sont filtrés très tôt. L’ABM consiste justement à traiter chaque compte prioritaire comme un mini-marché, avec un angle, des preuves et une progression commerciale adaptés.
        </p>
        <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
          <li>vous réduisez la dispersion commerciale ;</li>
          <li>vous améliorez la qualité des échanges dès le départ ;</li>
          <li>vous donnez au marketing un rôle utile dans la progression des comptes clés ;</li>
          <li>vous soutenez une <strong>stratégie marketing BTP</strong> plus précise, plus lisible et plus rentable.</li>
        </ul>
        <p className="mt-4 text-muted-foreground">
          Exemple concret : un spécialiste de la rénovation énergétique en habitat collectif n’a pas intérêt à diffuser le même discours à tous les acteurs du marché. S’il vise des syndics ou des gestionnaires de patrimoine, il doit parler coordination, délais de décision, pédagogie copropriété, gestion des objections et capacité à sécuriser des opérations complexes.
        </p>
      </section>

      <section id="signaux-prospection-grands-comptes" className="mb-10 scroll-mt-28">
        <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">
          Les signaux qui montrent que votre prospection grands comptes manque de structure
        </h2>
        <p className="mb-4 text-muted-foreground">
          Beaucoup d’entreprises pensent faire de l’ABM alors qu’elles font surtout de la prospection standard sur une courte liste de contacts. Sans méthode, le ciblage grands comptes devient vite chronophage, peu lisible et difficile à piloter.
        </p>
        <p className="mb-4 text-muted-foreground">Les symptômes les plus fréquents sont simples à repérer :</p>
        <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
          <li>les commerciaux contactent des comptes intéressants, mais sans scénario commun ni priorisation claire ;</li>
          <li>le marketing produit des contenus génériques qui n’aident pas les échanges terrain ;</li>
          <li>les interlocuteurs ciblés ne reçoivent pas le bon angle selon leur fonction ;</li>
          <li>les relances repartent de zéro à chaque prise de contact ;</li>
          <li>le CRM suit des contacts, mais pas réellement la maturation des comptes stratégiques.</li>
        </ul>
        <p className="mt-4 text-muted-foreground">
          Dans ces situations, vous n’avez pas seulement un sujet de message ou de canal. Vous avez surtout un sujet de <strong>structurer l’acquisition client dans le BTP</strong>. Sans cela, même une bonne équipe commerciale finit par brûler du temps sur des comptes mal activés.
        </p>
      </section>

      <section id="construire-strategie-abm-btp" className="mb-10 scroll-mt-28">
        <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">
          Comment construire une stratégie ABM BTP réellement exploitable
        </h2>
        <p className="mb-4 text-muted-foreground">
          Une approche ABM utile dans le bâtiment doit rester simple à piloter. L’objectif n’est pas de créer une usine à gaz, mais un cadre partagé entre direction, marketing et commerce.
        </p>

        <h3 className="mb-3 text-xl font-semibold text-foreground font-display">1. Sélectionner une liste de comptes cohérente</h3>
        <p className="mb-4 text-muted-foreground">
          Mieux vaut 20 à 40 comptes vraiment stratégiques qu’un fichier de 300 entreprises jamais activées proprement. La sélection doit tenir compte du type de chantier, de la récurrence potentielle, de la zone géographique, des marges et du potentiel de prescription.
        </p>

        <h3 className="mb-3 text-xl font-semibold text-foreground font-display">2. Cartographier les parties prenantes</h3>
        <p className="mb-4 text-muted-foreground">
          Dans un compte BTP, la décision se répartit rarement sur une seule personne. Il faut identifier qui influence quoi : direction technique, achats, direction générale, responsable patrimoine, conducteur d’opérations ou prescripteur externe.
        </p>

        <h3 className="mb-3 text-xl font-semibold text-foreground font-display">3. Clarifier la promesse par cible</h3>
        <p className="mb-4 text-muted-foreground">
          Un même argument ne parle pas à tout le monde. Un acheteur regardera le risque contractuel et le coût global. Un responsable technique regardera la fiabilité, la mise en œuvre et la coordination. Un dirigeant regardera la continuité d’exécution, la réputation et la capacité à tenir les engagements.
        </p>

        <h3 className="mb-3 text-xl font-semibold text-foreground font-display">4. Préparer des actifs de preuve</h3>
        <p className="text-muted-foreground">
          Cas chantier, note de méthode, retour d’expérience, comparatif, page dédiée : l’ABM a besoin de contenus qui aident une conversation. Pas de brochures génériques qui récitent vos savoir-faire sans lien avec le contexte du compte. Si vous travaillez déjà votre acquisition entrante, <Link to="/blog/actions-marketing-btp-generer-demandes-qualifiees-2026" className="text-primary hover:underline">cet article sur les actions marketing BTP les plus rentables</Link> complète bien la logique.
        </p>
      </section>

      <section id="sequence-approche-abm-btp" className="mb-10 scroll-mt-28">
        <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">
          La séquence d’approche qui ouvre plus d’opportunités que la prospection brute
        </h2>
        <p className="mb-4 text-muted-foreground">
          Une campagne ABM performante repose rarement sur un seul contact. Elle fonctionne mieux comme une séquence progressive où chaque interaction a un rôle clair.
        </p>
        <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
          <li><strong>Étape 1 :</strong> rendre le compte conscient de votre existence avec un angle crédible et contextualisé.</li>
          <li><strong>Étape 2 :</strong> partager un contenu ou une preuve directement utile au type de projet visé.</li>
          <li><strong>Étape 3 :</strong> relier cette preuve à une situation métier concrète du compte.</li>
          <li><strong>Étape 4 :</strong> proposer un échange ciblé, logique, sans basculer brutalement dans un pitch commercial standard.</li>
        </ul>

        <div className="mt-6 rounded-xl border border-border bg-muted/30 p-6 md:p-7">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">Exemple terrain</p>
          <p className="text-muted-foreground leading-relaxed mb-0">
            Une entreprise de façade qui veut entrer chez des architectes ou bureaux de maîtrise d’œuvre aura plus d’impact avec une séquence qui valorise des références chantier, des détails d’exécution, des contraintes traitées et des arbitrages techniques, qu’avec un email générique du type “nous sommes experts depuis 20 ans”.
          </p>
        </div>

        <p className="mt-4 text-muted-foreground">
          L’ABM ne supprime pas la relance commerciale. Il la rend plus légitime. Le commercial n’appelle plus vraiment “à froid” : il prolonge un contexte déjà construit. Dans cette logique, <Link to="/blog/crm-marketing-automation-btp-2026" className="text-primary hover:underline">un CRM bien structuré</Link> devient un support de progression, pas seulement un registre de contacts.
        </p>
      </section>

      <section id="kpi-abm-btp" className="mb-10 scroll-mt-28">
        <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">
          Quels indicateurs suivre pour savoir si votre ABM produit de vraies opportunités
        </h2>
        <p className="mb-4 text-muted-foreground">
          Une stratégie ABM BTP se pilote moins au volume qu’à la progression des comptes. Si vous gardez uniquement des KPI de campagne classiques, vous risquez de passer à côté de la réalité commerciale.
        </p>
        <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
          <li>nombre de comptes réellement activés ;</li>
          <li>nombre d’interlocuteurs qualifiés par compte ;</li>
          <li>taux de réponse ou d’interaction utile ;</li>
          <li>prise de rendez-vous avec les bons profils ;</li>
          <li>opportunités ouvertes dans le CRM ;</li>
          <li>temps moyen entre premier contact et échange qualifié ;</li>
          <li>part des comptes ciblés qui avancent réellement dans le pipeline.</li>
        </ul>
        <p className="mt-4 text-muted-foreground">
          Cette lecture change tout : vous ne jugez plus seulement la performance au nombre de leads remontés, mais à la capacité à faire progresser des comptes à fort potentiel jusqu’à une conversation commerciale sérieuse.
        </p>
      </section>

      <section id="quand-se-faire-accompagner-abm" className="mb-12 scroll-mt-28">
        <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">
          Quand faut-il se faire accompagner ?
        </h2>
        <p className="mb-4 text-muted-foreground">
          Si vos équipes savent déjà qui elles veulent cibler mais n’arrivent pas à industrialiser la méthode, le vrai sujet n’est pas seulement la prospection. Il peut être dans le cadrage de la cible, la production de preuves, la structuration CRM ou l’alignement entre marketing et commerce.
        </p>
        <p className="mb-4 text-muted-foreground">Un accompagnement utile aide surtout à :</p>
        <ul className="mb-6 list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
          <li>prioriser les comptes qui méritent un effort fort ;</li>
          <li>poser un système de messages et de contenus par cible ;</li>
          <li>organiser le suivi des interactions dans le temps ;</li>
          <li>relier l’ABM à votre pilotage commercial réel.</li>
        </ul>
        <p className="mb-4 text-muted-foreground">
          Pour une entreprise du BTP, l’intérêt n’est pas de “faire de l’ABM” parce que le terme est à la mode. L’intérêt est de transformer une prospection diffuse en mécanique commerciale plus sélective, plus crédible et plus rentable. Si votre sujet est plus large que l’ABM, <Link to="/gestion-communication" className="text-primary hover:underline">la gestion de communication Agendac</Link> permet justement de relier pilotage marketing et réalité commerciale.
        </p>
        <SectionCTA />
      </section>

      <section id="faq-abm-btp" className="scroll-mt-28">
        <h2 className="mb-6 text-2xl md:text-3xl font-bold text-foreground font-display">
          FAQ sur l’ABM dans le BTP
        </h2>
        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="faq-1" className="rounded-xl border border-border px-5">
            <AccordionTrigger className="text-left font-semibold text-foreground">
              L’ABM BTP est-il réservé aux très grandes entreprises ?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Non. Une entreprise du bâtiment déjà structurée peut utiliser l’ABM dès lors qu’elle cible quelques comptes à fort potentiel et qu’elle dispose d’un minimum de méthode commerciale et CRM.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-2" className="rounded-xl border border-border px-5">
            <AccordionTrigger className="text-left font-semibold text-foreground">
              Quelle différence entre ABM et prospection commerciale classique ?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              La prospection classique cherche souvent plus de volume. L’ABM cherche plus de précision. Il priorise quelques comptes, adapte les messages par interlocuteur et organise une progression dans le temps.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-3" className="rounded-xl border border-border px-5">
            <AccordionTrigger className="text-left font-semibold text-foreground">
              L’ABM remplace-t-il la génération de leads BTP ?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Non. Les deux approches peuvent coexister. La génération de leads nourrit la demande entrante, tandis que l’ABM sert surtout à ouvrir ou accélérer des comptes stratégiques difficiles à capter autrement.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-4" className="rounded-xl border border-border px-5">
            <AccordionTrigger className="text-left font-semibold text-foreground">
              Combien de comptes faut-il cibler au départ ?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Il vaut mieux commencer petit. Une première vague de 20 à 40 comptes bien choisis est souvent plus efficace qu’une longue liste mal exploitée.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </>
  );
}
