import { Link } from "react-router-dom";

const toc = [
  { id: "ce-que-votre-client-veut-voir", label: "Comprendre ce que votre futur client veut vraiment voir" },
  { id: "mettre-realisations-au-centre", label: "Mettre vos réalisations au centre du site" },
  { id: "expliquer-prestations-sans-jargon", label: "Expliquer vos prestations sans jargon technique" },
  { id: "rassurer-avec-process-clair", label: "Rassurer avec un process clair et des étapes" },
  { id: "afficher-elements-de-confiance", label: "Afficher des éléments de confiance sans en faire trop" },
  { id: "soigner-qualite-percue-design", label: "Soigner la qualité perçue : design simple mais professionnel" },
  { id: "rendre-contact-evident", label: "Rendre le contact évident et rassurant" },
  { id: "conclusion", label: "Votre site doit rendre votre expertise visible" },
];

const ArticleCreerSiteMaconValoriseSavoirFaire2026 = () => (
  <>
    <div className="mb-8 rounded-xl border border-border bg-muted/30 p-5 md:p-6">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">En bref</p>
      <p className="text-base leading-relaxed text-foreground">
        En maçonnerie, votre travail est concret, technique et engage la solidité d'un logement. Pour un particulier, c'est un domaine difficile à juger. Avant de demander un devis, un client cherche surtout une chose : des preuves de sérieux. Votre site web est la vitrine de ce sérieux — il doit montrer que vous êtes un professionnel fiable et mettre en valeur votre savoir-faire sans discours compliqué.
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

    <section id="ce-que-votre-client-veut-voir" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Comprendre ce que votre futur client veut vraiment voir</h2>
      <p className="mb-4 text-muted-foreground">Un particulier ne sait pas toujours distinguer un bon maçon d'un mauvais sur Internet. Il cherche donc des signaux simples :</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>des réalisations concrètes et variées ;</li>
        <li>une entreprise identifiable (zone, équipe, parcours) ;</li>
        <li>un process clair (comment ça se passe, combien de temps, qui intervient) ;</li>
        <li>des garanties et de la transparence.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">L'objectif d'un bon site web de maçon n'est pas de faire « beau ». Il est de rendre votre compétence visible. Avant même le premier appel, votre site doit répondre à la question implicite de chaque visiteur : « Est-ce que ce maçon est sérieux et compétent ? »</p>
      <p className="mt-4 text-muted-foreground">C'est pourquoi la <Link to="/creation-site-internet" className="text-primary hover:underline">création d'un site internet professionnel</Link> pour un maçon ne suit pas les mêmes règles que pour un commerce ou une agence de services. Elle doit être pensée pour rassurer, prouver et convertir — dans cet ordre.</p>
    </section>

    <section id="mettre-realisations-au-centre" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Mettre vos réalisations au centre du site</h2>
      <p className="mb-4 text-muted-foreground">C'est le levier le plus puissant en maçonnerie. Vos chantiers sont vos meilleures preuves. Un prospect qui voit vos réalisations concrètes se projette immédiatement dans son propre projet.</p>

      <h3 className="mb-3 mt-6 text-xl font-semibold text-foreground">Ce qui fonctionne très bien</h3>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>des photos avant / après qui montrent la transformation ;</li>
        <li>des séries de photos pendant le chantier (fondations, élévation, dalle, finitions) ;</li>
        <li>une description simple du contexte : besoin du client, contraintes, solution mise en œuvre.</li>
      </ul>

      <h3 className="mb-3 mt-6 text-xl font-semibold text-foreground">Bonne pratique</h3>
      <p className="mb-4 text-muted-foreground">Créez une vraie section « Réalisations » (ou « Chantiers »), avec une page par projet. Chaque projet peut devenir à la fois une page SEO et un support commercial : « extension », « dalle », « ouverture mur porteur », « terrasse », etc.</p>
      <p className="mb-4 text-muted-foreground">Ces pages sont vos meilleurs atouts pour <strong>générer des leads qualifiés</strong> : un prospect qui s'arrête sur une réalisation similaire à son projet est déjà bien plus avancé dans sa réflexion qu'un visiteur qui survole une page d'accueil générique.</p>

      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium mb-2">Le bon réflexe :</p>
        <p className="text-muted-foreground mb-0">Ne vous contentez pas d'une galerie de photos. Documentez chaque chantier comme un cas client : besoin, solution, résultat. C'est ce format qui rassure le plus les prospects et qui vous démarque des maçons qui n'ont qu'un simple album photos.</p>
      </div>
    </section>

    <section id="expliquer-prestations-sans-jargon" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Expliquer vos prestations sans jargon technique</h2>
      <p className="mb-4 text-muted-foreground">Beaucoup de sites de maçons listent des prestations sans expliquer ce que ça implique. Or, c'est précisément ce que le client veut comprendre.</p>

      <p className="mb-2 font-medium text-foreground">Plutôt que :</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>« Travaux de gros œuvre »</li>
        <li>« Réalisation de dallage »</li>
        <li>« Maçonnerie générale »</li>
      </ul>

      <p className="mb-2 mt-4 font-medium text-foreground">Préférez :</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>« Construction et extension de maison »</li>
        <li>« Création de dalle béton et chapes »</li>
        <li>« Ouverture de mur porteur (avec étude et sécurisation) »</li>
        <li>« Terrasse, allées et aménagements extérieurs »</li>
      </ul>

      <p className="mt-4 text-muted-foreground">Ajoutez ensuite une explication simple : à quoi ça sert, dans quels cas on en a besoin, comment se déroule le chantier. Cette clarté est un élément clé d'une <strong>stratégie marketing rénovation</strong> efficace : elle réduit le doute et accélère la décision de contact.</p>
    </section>

    <section id="rassurer-avec-process-clair" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Rassurer avec un process clair (et des étapes)</h2>
      <p className="mb-4 text-muted-foreground">Un site qui valorise votre savoir-faire doit aussi valoriser votre méthode. Un client veut savoir comment vous travaillez avant de vous confier son projet.</p>

      <p className="mb-4 text-muted-foreground">Exemple de structure très efficace :</p>
      <ol className="list-decimal space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li><strong>Prise de contact</strong> et compréhension du besoin</li>
        <li><strong>Visite sur place</strong> et conseils techniques</li>
        <li><strong>Devis détaillé</strong> et planning</li>
        <li><strong>Réalisation du chantier</strong> avec points d'avancement</li>
        <li><strong>Réception et finitions</strong></li>
      </ol>

      <p className="mt-4 text-muted-foreground">Ce type de bloc réduit l'incertitude, montre votre organisation et augmente le taux de conversion. Un prospect qui visualise le déroulement du chantier est rassuré et plus enclin à demander un devis.</p>
      <p className="mt-4 text-muted-foreground">Dans le cadre d'un <strong>système d'acquisition client BTP</strong>, cette transparence est un avantage concurrentiel : peu d'artisans prennent le temps d'expliquer leur méthode. Ceux qui le font se démarquent immédiatement.</p>
    </section>

    <section id="afficher-elements-de-confiance" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Afficher des éléments de confiance sans en faire trop</h2>
      <p className="mb-4 text-muted-foreground">Votre savoir-faire se prouve aussi par des « preuves » simples :</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>avis clients (Google ou témoignages) ;</li>
        <li>assurance décennale ;</li>
        <li>zone d'intervention claire ;</li>
        <li>ancienneté / expérience ;</li>
        <li>éventuelles qualifications ou labels ;</li>
        <li>photos de l'équipe et de l'entreprise.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Un site de maçon impersonnel inspire rarement confiance. Une entreprise « incarnée » convertit mieux. Montrer qui vous êtes, votre équipe et votre histoire, c'est déjà commencer à créer une relation de confiance avec vos futurs clients.</p>

      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card">
        <p className="font-semibold text-foreground mb-3">Ce qui rassure le plus un prospect en maçonnerie :</p>
        <ul className="space-y-2 text-muted-foreground">
          <li>✅ Des photos de chantier nombreuses et de bonne qualité</li>
          <li>✅ Des avis Google récents et détaillés</li>
          <li>✅ Une zone d'intervention clairement définie</li>
          <li>✅ La mention de l'assurance décennale</li>
          <li>✅ Un visage, un nom, une équipe identifiable</li>
        </ul>
      </div>
    </section>

    <section id="soigner-qualite-percue-design" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Soigner la qualité perçue : design simple mais professionnel</h2>
      <p className="mb-4 text-muted-foreground">Un site peut être sobre et très efficace, à condition d'être propre :</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>lisible sur mobile ;</li>
        <li>rapide à charger ;</li>
        <li>titres clairs ;</li>
        <li>appels à l'action visibles ;</li>
        <li>photos de bonne qualité (même prises au téléphone si elles sont nettes).</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Un design trop chargé ou « daté » donne souvent une impression d'amateurisme, même si votre travail est excellent. À l'inverse, un site sobre et professionnel renforce la perception de sérieux. Dans le cadre de l'<strong>acquisition clients BTP</strong>, cette première impression est cruciale : elle détermine si le prospect reste sur votre site ou clique sur le concurrent d'à côté.</p>
    </section>

    <section id="rendre-contact-evident" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Rendre le contact évident et rassurant</h2>
      <p className="mb-4 text-muted-foreground">Beaucoup de maçons perdent des demandes de devis parce que le site ne facilite pas le passage à l'action.</p>

      <p className="mb-4 text-muted-foreground">À intégrer absolument :</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>numéro de téléphone visible sur toutes les pages ;</li>
        <li>bouton « Demander un devis » bien placé ;</li>
        <li>formulaire simple (nom, téléphone, type de projet, ville) ;</li>
        <li>message de réassurance : « Réponse sous 24/48h », « Devis gratuit », « Déplacement possible ».</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Plus le contact est simple, plus vous récupérez de demandes qualifiées. Chaque friction supplémentaire (formulaire trop long, numéro caché, pas de bouton visible) fait fuir une partie de vos prospects.</p>
      <p className="mt-4 text-muted-foreground">Un site bien conçu est le premier maillon d'un <strong>système d'acquisition client rénovation</strong> performant : il capte, rassure et convertit — avant même que votre commercial n'intervienne.</p>
    </section>

    <section id="conclusion" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Votre site doit rendre votre expertise visible</h2>
      <p className="mb-4 text-muted-foreground">Un bon site de maçon n'est pas un catalogue. C'est une vitrine de confiance, structurée pour :</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>montrer vos réalisations ;</li>
        <li>expliquer vos prestations simplement ;</li>
        <li>rassurer sur votre méthode ;</li>
        <li>donner envie de vous contacter.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Si votre site actuel ne remplit pas ces quatre fonctions, il est temps de le repenser. L'investissement dans un site web professionnel est souvent le levier le plus rentable pour <strong>générer des leads rénovation</strong> de qualité dans la maçonnerie.</p>
      <p className="mt-4 text-muted-foreground">Chez Agendac, nous concevons des sites web pensés pour les artisans du bâtiment, avec une logique claire : mettre en valeur le savoir-faire et générer des demandes de devis qualifiées.</p>
    </section>
  </>
);

export default ArticleCreerSiteMaconValoriseSavoirFaire2026;
