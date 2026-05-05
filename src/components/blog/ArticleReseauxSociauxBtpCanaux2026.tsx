import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const sections = [
  { id: "pourquoi-plateformes-differentes", label: "Pourquoi toutes les plateformes ne se valent pas dans le BTP" },
  { id: "trois-reseaux-utiles", label: "Les 3 réseaux sociaux les plus utiles pour une entreprise de rénovation" },
  { id: "choisir-selon-objectif", label: "Comment choisir le bon canal selon votre objectif business" },
  { id: "erreurs-frequentes", label: "Les erreurs fréquentes qui font perdre du temps sur les réseaux sociaux" },
  { id: "plateformes-secondaires", label: "Faut-il tester TikTok, X ou d’autres plateformes ?" },
  { id: "quand-se-faire-accompagner", label: "Quand faut-il se faire accompagner ?" },
  { id: "faq-reseaux-sociaux-btp", label: "FAQ sur les réseaux sociaux dans le BTP" },
];

export default function ArticleReseauxSociauxBtpCanaux2026() {
  return (
    <article className="space-y-10">
      <div className="space-y-4 text-lg leading-8 text-foreground/90">
        <p>
          Beaucoup d’entreprises du bâtiment ouvrent plusieurs comptes sociaux, puis constatent que la visibilité progresse peu,
          que les demandes restent irrégulières et que les équipes n’ont pas le temps d’animer chaque canal sérieusement.
        </p>
        <p>
          En 2026, le sujet n’est plus d’être partout. Le vrai enjeu consiste à choisir les bons réseaux sociaux selon votre cycle
          de vente, votre zone de chalandise et votre capacité à transformer l’attention en opportunités commerciales.
        </p>
      </div>

      <section className="rounded-2xl border border-border bg-muted/30 p-6">
        <h2 className="text-xl font-semibold mb-4">Sommaire</h2>
        <ul className="space-y-2 text-sm md:text-base">
          {sections.map((section) => (
            <li key={section.id}>
              <a className="text-primary hover:underline" href={`#${section.id}`}>
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <p>
          Pour une entreprise de rénovation ou un acteur du BTP déjà structuré, un réseau social rentable est un canal capable de
          soutenir la preuve, la réassurance, la notoriété locale ou la génération de demandes qualifiées sans disperser les équipes.
        </p>
      </section>

      <section id="pourquoi-plateformes-differentes" className="space-y-4 scroll-mt-24">
        <h2 className="text-3xl font-bold tracking-tight">Pourquoi toutes les plateformes ne se valent pas dans le BTP</h2>
        <p>
          Le BTP n’achète pas l’attention comme une marque e-commerce. Un dirigeant de société de couverture, de menuiserie ou
          d’isolation a surtout besoin de rassurer, de montrer le sérieux d’exécution et de rester visible au bon moment.
        </p>
        <p>
          C’est pour cela que certains canaux performent mieux que d’autres. Facebook peut soutenir la visibilité locale et les avis.
          Instagram valorise les chantiers et l’avant-après. LinkedIn aide davantage sur la crédibilité BtoB, le recrutement ou les prescripteurs.
        </p>
        <p>
          <strong>Dans le BTP, le problème n’est presque jamais uniquement le manque de portée.</strong> Il se situe souvent entre la promesse
          visible sur le réseau, la qualité du trafic renvoyé vers le site et le traitement commercial des prises de contact.
        </p>
      </section>

      <section id="trois-reseaux-utiles" className="space-y-4 scroll-mt-24">
        <h2 className="text-3xl font-bold tracking-tight">Les 3 réseaux sociaux les plus utiles pour une entreprise de rénovation</h2>
        <p>Dans la majorité des cas, trois plateformes suffisent largement pour construire une présence utile.</p>
        <h3 className="text-2xl font-semibold tracking-tight">Facebook pour la visibilité locale et la réassurance</h3>
        <p>
          Facebook reste pertinent pour une entreprise du bâtiment qui travaille en local. Les publications de réalisations, avis
          clients, photos d’équipes et actualités d’entreprise contribuent à rassurer un prospect avant une demande de devis.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>utile pour toucher des particuliers dans une zone précise ;</li>
          <li>intéressant pour relayer des avis et du contenu pratique ;</li>
          <li>cohérent si vous utilisez déjà Meta Ads pour générer des demandes.</li>
        </ul>
        <h3 className="text-2xl font-semibold tracking-tight">Instagram pour valoriser les chantiers</h3>
        <p>
          Instagram fonctionne bien quand l’entreprise peut produire des visuels propres : façades, rénovations globales,
          menuiseries, extensions, cuisines, salles de bain, couverture ou photovoltaïque.
        </p>
        <p>
          Ce canal est particulièrement utile quand l’image joue un rôle fort dans la décision. Un avant-après bien construit peut faire
          comprendre en quelques secondes le niveau de finition, le style de projet et la qualité perçue.
        </p>
        <h3 className="text-2xl font-semibold tracking-tight">LinkedIn pour la crédibilité BtoB et les partenariats</h3>
        <p>LinkedIn n’est pas toujours le premier levier de demandes entrantes pour les rénovateurs orientés particuliers. En revanche, il peut être très utile pour :</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>recruter des profils clés ;</li>
          <li>développer la notoriété de marque employeur ;</li>
          <li>travailler les relations avec prescripteurs, architectes, partenaires ou donneurs d’ordre ;</li>
          <li>porter une parole de dirigeant plus crédible.</li>
        </ul>
      </section>

      <section id="choisir-selon-objectif" className="space-y-4 scroll-mt-24">
        <h2 className="text-3xl font-bold tracking-tight">Comment choisir le bon canal selon votre objectif business</h2>
        <p>Le bon choix dépend moins de la mode du moment que de votre objectif principal.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Vous voulez plus de demandes locales :</strong> Facebook et Instagram sont souvent prioritaires.</li>
          <li><strong>Vous voulez mieux valoriser votre image et vos réalisations :</strong> Instagram devient central.</li>
          <li><strong>Vous ciblez des prescripteurs ou un environnement BtoB :</strong> LinkedIn prend plus de poids.</li>
          <li><strong>Vous cherchez à recruter :</strong> LinkedIn et Facebook peuvent se compléter.</li>
        </ul>
        <div className="rounded-2xl border border-border p-6 bg-background">
          <h3 className="text-xl font-semibold mb-3">Exemple terrain</h3>
          <p>
            Une entreprise de rénovation énergétique à 3 M€ de chiffre d’affaires peut publier ses chantiers sur Instagram,
            diffuser ses preuves sociales sur Facebook, puis utiliser son site pour capter les demandes de devis. Si les demandes ne progressent pas,
            le problème n’est pas forcément le réseau social lui-même : il peut venir d’une offre mal formulée, d’un site peu convaincant ou d’un suivi commercial trop lent.
          </p>
        </div>
      </section>

      <section id="erreurs-frequentes" className="space-y-4 scroll-mt-24">
        <h2 className="text-3xl font-bold tracking-tight">Les erreurs fréquentes qui font perdre du temps sur les réseaux sociaux</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>ouvrir trop de comptes sans capacité d’animation réelle ;</li>
          <li>publier uniquement des photos de chantier sans angle ni bénéfice client ;</li>
          <li>confondre visibilité et acquisition client rénovation ;</li>
          <li>ne pas relier les contenus à un site, une landing page ou un vrai parcours de conversion ;</li>
          <li>laisser les messages entrants sans relance rapide.</li>
        </ul>
        <p>
          Une entreprise du bâtiment peut publier régulièrement et pourtant ne générer aucune demande sérieuse. Sans ligne éditoriale
          claire, sans ciblage et sans traitement commercial, les réseaux deviennent un poste de charge plus qu’un système d’acquisition client BTP.
        </p>
      </section>

      <section id="plateformes-secondaires" className="space-y-4 scroll-mt-24">
        <h2 className="text-3xl font-bold tracking-tight">Faut-il tester TikTok, X ou d’autres plateformes ?</h2>
        <p>
          Ces canaux ne sont pas prioritaires pour la plupart des entreprises de rénovation déjà établies. Ils peuvent avoir du sens
          dans des cas précis : communication de marque, recrutement, contenu différenciant ou démonstration chantier très visuelle.
        </p>
        <p>Mais avant d’explorer des plateformes secondaires, mieux vaut sécuriser ce socle :</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>un site qui inspire confiance ;</li>
          <li>une fiche Google Business Profile cohérente ;</li>
          <li>des contenus sociaux alignés avec les vraies offres ;</li>
          <li>un suivi rigoureux des demandes entrantes.</li>
        </ul>
      </section>

      <section id="quand-se-faire-accompagner" className="space-y-4 scroll-mt-24 rounded-2xl border border-border bg-muted/30 p-6">
        <h2 className="text-3xl font-bold tracking-tight">Quand faut-il se faire accompagner ?</h2>
        <p>
          L’accompagnement devient pertinent quand la communication digitale existe déjà mais ne produit pas assez d’opportunités commerciales,
          ou quand l’entreprise veut structurer une stratégie marketing rénovation plus cohérente entre contenus, publicité et conversion.
        </p>
        <p>
          Si vos réseaux sociaux génèrent de l’attention mais peu de devis, il faut souvent retravailler l’ensemble du système : message,
          fréquence, preuve, trafic, pages de destination et traitement des prospects. C’est là que la gestion de communication devient un levier utile,
          non comme simple production de posts, mais comme pilotage d’acquisition.
        </p>
      </section>

      <section id="faq-reseaux-sociaux-btp" className="space-y-4 scroll-mt-24">
        <h2 className="text-3xl font-bold tracking-tight">FAQ sur les réseaux sociaux dans le BTP</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Quel est le meilleur réseau social pour une entreprise du bâtiment ?</AccordionTrigger>
            <AccordionContent>
              Il n’existe pas de réponse unique. Pour beaucoup d’entreprises locales, Facebook et Instagram restent les plus utiles.
              LinkedIn devient stratégique si l’objectif concerne le BtoB, les prescripteurs ou le recrutement.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Les réseaux sociaux suffisent-ils pour trouver des clients en rénovation ?</AccordionTrigger>
            <AccordionContent>
              Non. Ils peuvent soutenir la visibilité, la réassurance et parfois la génération de demandes, mais ils doivent être reliés
              à un site performant, une offre claire et un suivi commercial réactif.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Faut-il publier tous les jours ?</AccordionTrigger>
            <AccordionContent>
              Pas forcément. Dans le BTP, la régularité compte plus que le volume. Mieux vaut deux publications utiles par semaine qu’une présence quotidienne sans ligne éditoriale ni objectif.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Instagram est-il utile sans gros moyens de production ?</AccordionTrigger>
            <AccordionContent>
              Oui, si l’entreprise dispose de photos propres, d’avant-après lisibles et d’une capacité minimale à raconter ses réalisations.
              La cohérence visuelle compte plus que la sophistication.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </article>
  );
}
