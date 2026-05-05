import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const toc = [
  { id: "pourquoi-plateformes-comptent", label: "Pourquoi toutes les plateformes ne se valent pas" },
  { id: "linkedin", label: "LinkedIn" },
  { id: "facebook-instagram", label: "Facebook et Instagram" },
  { id: "youtube", label: "YouTube" },
  { id: "tiktok", label: "TikTok" },
  { id: "comment-choisir", label: "Comment choisir les bonnes plateformes" },
  { id: "erreurs", label: "Les erreurs les plus fréquentes" },
  { id: "accompagnement", label: "Quand faut-il se faire accompagner ?" },
  { id: "faq", label: "FAQ" },
];

const ArticleReseauxSociauxBtpB2b2026 = () => (
  <>
    <div className="mb-8 rounded-xl border border-border bg-muted/30 p-5 md:p-6">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">En bref</p>
      <p className="text-base leading-relaxed text-foreground">
        En 2026, une entreprise du BTP n&apos;a pas besoin d&apos;être partout sur les réseaux sociaux. Elle doit surtout choisir les plateformes qui renforcent sa crédibilité, sa preuve terrain et sa capacité à générer des opportunités commerciales sérieuses.
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

    <section id="pourquoi-plateformes-comptent" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Pourquoi toutes les plateformes ne se valent pas dans le BTP</h2>
      <p className="mb-4 text-muted-foreground">Une entreprise de rénovation ne consomme pas les réseaux sociaux comme un e-commerce ou une marque lifestyle. Les cycles de vente sont plus longs, la confiance se construit plus lentement et la décision repose souvent sur des éléments très concrets : réputation, réalisations, avis, qualité du suivi et capacité à rassurer.</p>
      <p className="mb-4 text-muted-foreground">Cela change complètement la lecture des canaux sociaux. Un bon réseau pour le BTP n&apos;est pas celui qui fait le plus de vues. C&apos;est celui qui aide à rendre l&apos;entreprise visible auprès des bonnes cibles, à montrer son sérieux et à soutenir une vraie logique d&apos;<strong>acquisition clients BTP</strong>.</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>rendre l&apos;entreprise visible auprès des bons décideurs ou prescripteurs ;</li>
        <li>valoriser les réalisations et le sérieux opérationnel ;</li>
        <li>nourrir la confiance avant une demande de devis ;</li>
        <li>renvoyer du trafic qualifié vers le site ou une prise de contact ;</li>
        <li>renforcer les autres leviers déjà en place.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Dans le BTP, le problème n&apos;est presque jamais uniquement le trafic. Il se situe souvent entre la promesse, la qualification et le traitement commercial. Les réseaux sociaux doivent donc servir ce parcours, pas fonctionner en silo.</p>
    </section>

    <section id="linkedin" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">LinkedIn : le meilleur choix pour la crédibilité B2B et les prescripteurs</h2>
      <p className="mb-4 text-muted-foreground">Pour une entreprise du bâtiment qui travaille avec des architectes, maîtres d&apos;œuvre, promoteurs, asset managers ou partenaires BtoB, <strong>LinkedIn est souvent la plateforme la plus stratégique</strong>.</p>
      <p className="mb-4 text-muted-foreground">Elle permet de diffuser une expertise lisible, de montrer la solidité de l&apos;entreprise et d&apos;exister dans les conversations professionnelles qui influencent les appels d&apos;offres, les recommandations et les mises en relation.</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>mise en avant de références chantiers avec contexte business ;</li>
        <li>contenus d&apos;expertise sur la rénovation, la visibilité locale ou la performance commerciale ;</li>
        <li>travail de notoriété auprès des prescripteurs et décideurs ;</li>
        <li>appui aux démarches de prospection ou d&apos;account-based marketing.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Exemple concret : une entreprise de rénovation énergétique qui cible des partenaires prescripteurs peut utiliser LinkedIn pour publier des retours d&apos;expérience, des cas clients et des points de vue sur les enjeux du marché. Le but n&apos;est pas seulement de faire des impressions, mais d&apos;installer une légitimité qui facilite ensuite les rendez-vous commerciaux.</p>
    </section>

    <section id="facebook-instagram" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Facebook et Instagram : utiles pour la preuve sociale et la réassurance locale</h2>
      <p className="mb-4 text-muted-foreground">Facebook et Instagram restent utiles pour beaucoup d&apos;entreprises de rénovation de l&apos;habitat, notamment quand le marché repose sur la proximité, le bouche-à-oreille amplifié et la réassurance visuelle.</p>
      <p className="mb-4 text-muted-foreground">Ces plateformes sont intéressantes lorsque l&apos;entreprise a besoin de montrer :</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>des avant / après crédibles ;</li>
        <li>la qualité d&apos;exécution sur chantier ;</li>
        <li>des témoignages ou avis mis en scène intelligemment ;</li>
        <li>la vie de l&apos;entreprise et le sérieux des équipes ;</li>
        <li>des offres ou actualités locales relayées à une audience déjà sensibilisée.</li>
      </ul>
      <p className="mb-4 mt-4 text-muted-foreground">Instagram fonctionne bien quand le visuel est fort : façade, menuiserie, cuisine, salle de bain, toiture, aménagement extérieur ou photovoltaïque. Facebook garde un rôle intéressant pour relayer du contenu, recibler des audiences ou soutenir des campagnes locales.</p>
      <p className="text-muted-foreground">En revanche, publier des photos de chantier sans angle, sans preuve, sans promesse et sans lien vers une action utile produit rarement un vrai retour. Ce n&apos;est pas la plateforme qui manque de potentiel, c&apos;est souvent la structuration éditoriale qui manque.</p>
    </section>

    <section id="youtube" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">YouTube : sous-exploité pour éduquer, rassurer et améliorer la visibilité</h2>
      <p className="mb-4 text-muted-foreground">YouTube est souvent sous-estimé par les entreprises du BTP alors qu&apos;il peut jouer un double rôle : créer de la confiance et renforcer la visibilité sur Google.</p>
      <p className="mb-4 text-muted-foreground">Une société bien structurée peut y publier :</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>des explications pédagogiques sur les travaux ;</li>
        <li>des réponses aux objections fréquentes des prospects ;</li>
        <li>des visites de chantier ou décryptages de réalisations ;</li>
        <li>des témoignages clients filmés ;</li>
        <li>des contenus qui préqualifient les demandes avant le devis.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Pour une entreprise qui vend des chantiers à forte valeur, une vidéo claire sur ce qu&apos;il faut vérifier avant de signer un devis peut faire gagner un temps commercial réel. Les prospects arrivent mieux informés, plus confiants et souvent plus qualifiés.</p>
    </section>

    <section id="tiktok" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">TikTok : une opportunité réelle, mais pas une priorité universelle</h2>
      <p className="mb-4 text-muted-foreground">TikTok peut fonctionner si l&apos;entreprise est capable de produire des contenus courts, incarnés, rythmés et pédagogiques. Mais ce n&apos;est pas une priorité automatique pour une entreprise de rénovation déjà structurée.</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>humaniser l&apos;entreprise ;</li>
        <li>mettre en avant les coulisses du chantier ;</li>
        <li>démontrer un savoir-faire technique simplement ;</li>
        <li>toucher une audience plus large avec une logique d&apos;attention.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">La bonne question n&apos;est pas « faut-il être sur TikTok ? » mais « avons-nous le modèle de production et de validation qui permet d&apos;en tirer quelque chose ? » Sans cela, la plateforme devient vite énergivore et mal alignée avec les objectifs.</p>
    </section>

    <section id="comment-choisir" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Comment choisir les bonnes plateformes selon vos objectifs business</h2>
      <p className="mb-4 text-muted-foreground">Le bon arbitrage dépend moins des modes que des priorités commerciales de l&apos;entreprise.</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li><strong>Vous voulez travailler votre image B2B, vos prescripteurs ou vos partenaires ?</strong> Priorité à LinkedIn.</li>
        <li><strong>Vous devez rassurer des particuliers ou valoriser vos réalisations locales ?</strong> Facebook et Instagram sont souvent les plus utiles.</li>
        <li><strong>Vous avez besoin d&apos;expliquer, de préqualifier et de construire une autorité durable ?</strong> YouTube mérite une vraie place.</li>
        <li><strong>Vous avez une capacité de production vidéo agile et une marque incarnée ?</strong> TikTok peut devenir un pari intéressant.</li>
      </ul>
      <div className="mt-6 rounded-xl border border-border bg-muted/30 p-6 md:p-7">
        <p className="mb-3 font-semibold text-foreground">Cadre simple</p>
        <p className="text-muted-foreground">Dans une entreprise du BTP déjà structurée, la meilleure stratégie consiste souvent à choisir <strong>1 plateforme principale, 1 plateforme de réassurance et 1 canal d&apos;amplification</strong>, plutôt qu&apos;à disperser les équipes sur cinq réseaux mal alimentés.</p>
      </div>
    </section>

    <section id="erreurs" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Les erreurs les plus fréquentes dans la stratégie social media BTP</h2>
      <p className="mb-4 text-muted-foreground">On retrouve souvent les mêmes erreurs chez les entreprises qui publient beaucoup mais avancent peu :</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>être présent partout sans ligne éditoriale claire ;</li>
        <li>confondre visibilité et performance commerciale ;</li>
        <li>publier des contenus trop génériques ou trop institutionnels ;</li>
        <li>ne pas relier les réseaux sociaux au site, au CRM et au suivi des demandes ;</li>
        <li>mesurer uniquement les likes au lieu de suivre les signaux utiles.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Une entreprise de menuiserie peut par exemple avoir un compte Instagram actif, des campagnes Meta qui tournent et un site correct, tout en perdant des opportunités parce que les formulaires sont mal traités ou que les contenus n&apos;orientent pas assez vers la bonne demande. Le réseau social n&apos;est alors qu&apos;un maillon d&apos;un système mal connecté.</p>
    </section>

    <section id="accompagnement" className="mb-12 scroll-mt-28">
      <h2 className="mb-4 text-2xl font-bold text-foreground font-display md:text-3xl">Quand faut-il se faire accompagner ?</h2>
      <p className="mb-4 text-muted-foreground">Si votre entreprise doit soutenir des objectifs de croissance, développer plusieurs zones géographiques ou mieux coordonner image, contenu, publicité et suivi commercial, la question dépasse vite le simple community management.</p>
      <p className="mb-4 text-muted-foreground">À ce stade, il faut une stratégie cohérente avec vos cibles prioritaires, vos offres les plus rentables, votre site, vos campagnes et votre traitement commercial derrière les demandes. Pour aller plus loin, les offres <Link to="/creation-reseaux-sociaux" className="text-primary hover:underline">création de réseaux sociaux</Link> et <Link to="/gestion-communication" className="text-primary hover:underline">gestion de la communication</Link> permettent d&apos;aligner présence sociale et acquisition réelle.</p>
    </section>

    <section id="faq" className="scroll-mt-28">
      <h2 className="mb-6 text-2xl font-bold text-foreground font-display md:text-3xl">FAQ : réseaux sociaux et BTP</h2>
      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="faq-1" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Quel est le meilleur réseau social pour une entreprise du BTP ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Il n&apos;existe pas une seule bonne réponse. LinkedIn est souvent le plus pertinent en B2B, Facebook et Instagram restent puissants pour la réassurance locale et la valorisation des réalisations, tandis que YouTube peut devenir un vrai levier d&apos;autorité.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Faut-il être présent sur tous les réseaux sociaux dans le BTP ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Non. Dans la majorité des cas, mieux vaut concentrer l&apos;effort sur peu de plateformes bien exploitées plutôt que multiplier les comptes peu actifs ou peu cohérents.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Les réseaux sociaux peuvent-ils vraiment générer des demandes de devis ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Oui, mais rarement seuls. Ils fonctionnent mieux lorsqu&apos;ils sont reliés à une stratégie plus large : site performant, offre claire, preuve sociale, retargeting, CRM et suivi commercial sérieux.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-4" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">LinkedIn est-il utile pour une entreprise de rénovation ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Oui, surtout si l&apos;entreprise travaille avec des partenaires, prescripteurs ou décideurs professionnels, ou si elle veut renforcer sa crédibilité sur des chantiers à forte valeur.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </>
);

export default ArticleReseauxSociauxBtpB2b2026;
