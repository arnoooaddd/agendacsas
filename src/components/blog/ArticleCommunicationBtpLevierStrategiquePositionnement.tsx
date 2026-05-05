import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionCTA from "@/components/SectionCTA";

const toc = [
  { id: "pourquoi-communication-critique-marche-ralentit", label: "Pourquoi la communication devient critique" },
  { id: "ce-que-protege-positionnement", label: "Ce que protège un bon positionnement" },
  { id: "ce-que-font-mieux-entreprises-solides", label: "Ce que font différemment les entreprises solides" },
  { id: "structurer-communication-utile", label: "Comment structurer une communication utile" },
  { id: "erreurs-qui-affaiblissent-positionnement", label: "Les erreurs qui affaiblissent le positionnement" },
  { id: "feuille-route-90-jours", label: "Feuille de route 90 jours" },
  { id: "quand-se-faire-accompagner", label: "Quand faut-il se faire accompagner ?" },
  { id: "faq-communication-btp-positionnement", label: "FAQ" },
];

const ArticleCommunicationBtpLevierStrategiquePositionnement = () => (
  <>
    <div className="mb-8 rounded-xl border border-border bg-muted/30 p-5 md:p-6">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">En bref</p>
      <p className="text-base leading-relaxed text-foreground">
        En 2026, une communication BTP utile ne sert pas seulement à faire parler de votre entreprise. Elle protège votre positionnement, nourrit la preuve commerciale et aide vos équipes à défendre leurs marges dans un marché plus tendu.
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

    <section id="pourquoi-communication-critique-marche-ralentit" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Pourquoi la communication devient critique quand le marché ralentit</h2>
      <p className="mb-4 text-muted-foreground">Quand la demande se contracte, la concurrence devient mécaniquement plus visible. Les entreprises qui vivaient correctement grâce au bouche-à-oreille découvrent alors une faiblesse structurelle : leur marché les connaît mal, les différencie mal, ou ne comprend pas clairement leur valeur.</p>
      <p className="mb-4 text-muted-foreground">Dans le BTP, la communication ne sert pas d’abord à embellir l’image. Elle sert à rendre votre entreprise lisible au bon moment, pour les bons interlocuteurs, avec le bon niveau de réassurance.</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>Elle clarifie votre spécialisation réelle.</li>
        <li>Elle structure votre présence sur les canaux où vos prospects vous vérifient.</li>
        <li>Elle alimente vos équipes commerciales en preuves concrètes.</li>
        <li>Elle évite d’entrer dans une guerre de prix faute de différenciation.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Une entreprise de rénovation énergétique qui investit en acquisition mais laisse un site générique, sans cas clients, sans messages sectoriels et sans suivi commercial rigoureux, perd souvent ses marges avant même de perdre du trafic.</p>
    </section>

    <section id="ce-que-protege-positionnement" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Ce que protège réellement un bon positionnement de marché</h2>
      <p className="mb-4 text-muted-foreground">Le positionnement n’est pas un slogan. C’est la place mentale et commerciale que vous occupez quand un prospect, un prescripteur ou un partenaire compare plusieurs acteurs.</p>
      <p className="mb-4 text-muted-foreground">Dans une société de rénovation ou un acteur habitat déjà structuré, un bon positionnement protège plusieurs choses à la fois :</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>la perception de votre expertise sur une catégorie de travaux ou une cible donnée ;</li>
        <li>la confiance avant la prise de contact ;</li>
        <li>la capacité à justifier vos prix ;</li>
        <li>la régularité des demandes entrantes qualifiées ;</li>
        <li>la qualité des échanges commerciaux en aval.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Le vrai sujet n’est donc pas seulement être visible. C’est être perçu comme le bon choix dans un contexte de comparaison, de tension budgétaire et de délais de décision plus longs.</p>
    </section>

    <section id="ce-que-font-mieux-entreprises-solides" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Les entreprises du bâtiment qui tiennent mieux leur marché font trois choses différemment</h2>
      <p className="mb-4 text-muted-foreground">Les entreprises les plus solides ne communiquent pas plus fort. Elles communiquent plus juste.</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li><strong>Elles assument un angle clair.</strong> Par exemple : rénovation globale, couverture haut de gamme, menuiserie sur-mesure, efficacité commerciale en habitat, réponse aux prescripteurs ou aux donneurs d’ordre.</li>
        <li><strong>Elles produisent de la preuve.</strong> Réalisations, témoignages, avant/après, explication du process, éléments de réassurance terrain, réponses aux objections fréquentes.</li>
        <li><strong>Elles relient communication et traitement commercial.</strong> Les messages diffusés en amont correspondent à ce que les équipes vendent réellement ensuite.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Chez Agendac, on voit souvent la même erreur : l’entreprise pense avoir un problème de visibilité, alors qu’une partie du blocage se situe entre la promesse marketing, la qualification des demandes et le suivi commercial. Dans le BTP, le problème n’est presque jamais uniquement le trafic.</p>
      <div className="mt-6 rounded-xl border border-border bg-muted/30 p-6 md:p-7">
        <p className="mb-3 font-semibold text-foreground">Exemple concret</p>
        <p className="text-muted-foreground">Une entreprise de couverture peut investir sur Google Ads et recevoir des formulaires, puis constater que les chantiers réellement signés ne suivent pas. La cause vient souvent d’un discours trop générique, d’un manque de preuve chantier et d’une qualification trop faible avant le rendez-vous.</p>
      </div>
    </section>

    <section id="structurer-communication-utile" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Comment structurer une communication utile sans tomber dans l’agitation marketing</h2>
      <p className="mb-4 text-muted-foreground">Une stratégie de communication BTP efficace en 2026 doit rester simple, pilotable et connectée à un objectif business.</p>
      <p className="mb-4 text-muted-foreground">Le plus sain est de raisonner en 4 blocs :</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li><strong>Positionnement :</strong> quelle promesse voulez-vous défendre et pour quel segment précis ?</li>
        <li><strong>Preuve :</strong> quels contenus, cas, chiffres ou démonstrations soutiennent cette promesse ?</li>
        <li><strong>Distribution :</strong> quels canaux méritent vraiment vos efforts : SEO, Google Maps, publicité, réseaux sociaux, email, vidéo, prospection indirecte ?</li>
        <li><strong>Conversion :</strong> que se passe-t-il une fois le contact généré : formulaire, rappel, qualification, rendez-vous, devis, relance ?</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Ce cadre évite de disperser le budget entre site web, publications sociales, campagnes payantes et contenus sans cohérence d’ensemble. Si votre priorité porte surtout sur le trafic payant et le pilotage des canaux, la <Link to="/gestion-communication" className="text-primary hover:underline">gestion de la communication</Link> devient souvent le bon point d’entrée. Si le sujet principal est la visibilité organique durable, la <Link to="/gestion-seo" className="text-primary hover:underline">gestion SEO</Link> est généralement plus pertinente.</p>
    </section>

    <section id="erreurs-qui-affaiblissent-positionnement" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Les erreurs de communication qui affaiblissent le positionnement</h2>
      <p className="mb-4 text-muted-foreground">Beaucoup d’entreprises du bâtiment dégradent leur image sans s’en rendre compte, non pas par manque d’effort, mais par manque d’alignement.</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>Parler à tout le monde au lieu de cibler un segment rentable.</li>
        <li>Publier sans logique de preuve ni objectif commercial.</li>
        <li>Avoir un discours premium avec un site ou des pages qui ne rassurent pas.</li>
        <li>Lancer de la publicité sans dispositif de qualification derrière.</li>
        <li>Mesurer la communication uniquement en vues ou en clics, sans lien avec les opportunités réellement créées.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Un fabricant ou rénovateur qui vise des chantiers à forte valeur mais présente un discours trop générique finit souvent comparé sur le prix. À l’inverse, une communication bien calibrée aide à filtrer en amont et à faire gagner du temps aux équipes commerciales.</p>
    </section>

    <section id="feuille-route-90-jours" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Feuille de route 90 jours pour renforcer votre présence sur le marché</h2>
      <p className="mb-4 text-muted-foreground">Si votre communication existe déjà mais ne soutient pas assez votre développement, voici une base de travail réaliste sur 90 jours :</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li><strong>Jours 1 à 30 :</strong> clarifier le positionnement, les cibles prioritaires, les objections récurrentes et les preuves disponibles.</li>
        <li><strong>Jours 31 à 60 :</strong> mettre à niveau les supports décisifs : pages clés du site, cas clients, éléments de réassurance, messages commerciaux, présence locale et SEO utile.</li>
        <li><strong>Jours 61 à 90 :</strong> activer ou optimiser les canaux d’acquisition cohérents avec ce positionnement, puis mesurer la qualité des demandes et le taux de transformation.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">L’objectif n’est pas d’être partout. L’objectif est d’installer une communication qui aide réellement à défendre les marges, soutenir la vente et sécuriser la croissance.</p>
    </section>

    <section id="quand-se-faire-accompagner" className="mb-12 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Quand faut-il se faire accompagner ?</h2>
      <p className="mb-4 text-muted-foreground">Le sujet dépasse souvent la simple communication quand plusieurs signaux apparaissent en même temps : peu de demandes vraiment qualifiées, discours peu différenciant, équipes commerciales qui retraitent des contacts tièdes, dépendance forte à un seul canal ou difficulté à relier les actions marketing au chiffre d’affaires.</p>
      <p className="mb-4 text-muted-foreground">Dans ce cas, il devient utile de retravailler l’ensemble du système : positionnement, contenu, acquisition, suivi CRM et logique de conversion. C’est là qu’une approche structurée évite de multiplier les actions isolées qui consomment du budget sans renforcer le marché. Pour aller plus loin, vous pouvez aussi renforcer la qualité des contacts traités via la <Link to="/prise-rendez-vous" className="text-primary hover:underline">prise de rendez-vous</Link> quand le vrai blocage se situe entre génération de la demande et conversion commerciale.</p>
      <SectionCTA />
    </section>

    <section id="faq-communication-btp-positionnement" className="scroll-mt-28">
      <h2 className="mb-6 text-2xl font-bold text-foreground font-display md:text-3xl">FAQ</h2>
      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="faq-1" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Pourquoi la communication est-elle stratégique pour une entreprise du BTP ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Parce qu’elle influence directement la perception du marché, la confiance avant contact, la qualité des demandes entrantes et la capacité à défendre ses prix face à la concurrence.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Quelle différence entre visibilité et positionnement ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">La visibilité vous rend présent. Le positionnement vous rend préférable. Une entreprise peut être visible sans être clairement choisie si son message reste trop générique.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Quels canaux privilégier pour une stratégie de communication BTP ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Tout dépend de l’objectif principal, mais les canaux les plus fréquents sont le site web, le SEO, Google Business Profile, la publicité digitale, les contenus de preuve, la vidéo et certains réseaux sociaux. Le bon choix dépend surtout de votre cible et de votre cycle commercial.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-4" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Comment savoir si ma communication soutient vraiment le business ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Il faut relier les actions menées à des indicateurs concrets : volume de demandes qualifiées, taux de prise de rendez-vous, qualité des devis, taux de signature et rentabilité des chantiers générés.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </>
);

export default ArticleCommunicationBtpLevierStrategiquePositionnement;
