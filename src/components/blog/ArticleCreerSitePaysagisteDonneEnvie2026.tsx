import { Link } from "react-router-dom";
import SectionCTA from "@/components/SectionCTA";

const toc = [
  { id: "premiere-impression-decisive-paysagisme", label: "La première impression est décisive en paysagisme" },
  { id: "visuels-forts-immersifs", label: "Miser sur des visuels forts et immersifs" },
  { id: "page-realisations-raconte-histoire", label: "Créer une page réalisations qui raconte une histoire" },
  { id: "ton-inspirant-pas-uniquement-technique", label: "Adopter un ton inspirant, pas uniquement technique" },
  { id: "mettre-en-avant-style-approche", label: "Mettre en avant votre style et votre approche" },
  { id: "rassurer-sans-casser-emotion", label: "Rassurer sans casser l'émotion" },
  { id: "experience-utilisateur-mobile", label: "Soigner l'expérience utilisateur sur mobile" },
  { id: "passer-inspiration-action", label: "Faciliter le passage de l'inspiration à l'action" },
  { id: "conclusion", label: "Conclusion" },
];

const ArticleCreerSitePaysagisteDonneEnvie2026 = () => (
  <>
    <div className="mb-8 rounded-xl border border-border bg-muted/30 p-5 md:p-6">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">En bref</p>
      <p className="text-base leading-relaxed text-foreground">
        Le métier de paysagiste est unique dans le bâtiment : l'émotion et la projection comptent autant que la technique. Votre site web doit donner envie, inspirer confiance et guider vers le contact — le tout en quelques secondes.
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

    <section id="premiere-impression-decisive-paysagisme" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">La première impression est décisive en paysagisme</h2>
      <p className="mb-4 text-muted-foreground">Le métier de paysagiste est l'un des rares métiers du bâtiment où l'émotion joue un rôle central. Un particulier ne cherche pas seulement une prestation technique — il cherche à se projeter : un jardin agréable, une terrasse conviviale, un extérieur qui donne envie de passer du temps dehors.</p>
      <p className="mb-4 text-muted-foreground">Votre site web est souvent le premier contact avec votre univers. En quelques secondes, le visiteur doit ressentir votre style, comprendre votre savoir-faire et se dire : « C'est exactement ce que je veux pour mon jardin. »</p>
      <p className="mb-4 text-muted-foreground">Contrairement à d'autres corps de métier, un site de paysagiste est jugé très vite sur son ressenti visuel. Un site trop neutre, trop technique ou mal présenté peut donner l'impression d'un manque de créativité, même si votre travail est excellent.</p>
      <p className="mb-4 text-muted-foreground">Dès l'arrivée sur le site, le visiteur doit percevoir : votre sens de l'esthétique, votre capacité à transformer un extérieur, et la qualité de vos réalisations. Ces trois signaux suffisent à déclencher — ou non — l'envie d'en savoir plus.</p>
    </section>

    <section id="visuels-forts-immersifs" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Miser sur des visuels forts et immersifs</h2>
      <p className="mb-4 text-muted-foreground">En paysagisme, les images parlent souvent mieux que les mots. Un site web de paysagiste efficace doit mettre en avant :</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>des photos de jardins réalisés ;</li>
        <li>des avant / après qui montrent la transformation ;</li>
        <li>des ambiances extérieures (terrasses, allées, espaces verts) ;</li>
        <li>différents styles pour montrer votre palette (contemporain, naturel, méditerranéen, etc.).</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Une bonne pratique consiste à utiliser de grandes images dès la page d'accueil, bien cadrées et lumineuses. Un visiteur doit pouvoir se projeter immédiatement dans votre univers. La qualité des visuels est directement associée à la qualité perçue de votre travail.</p>
      <p className="mt-4 text-muted-foreground">Si vous n'avez pas encore assez de photos de qualité, investir dans un <Link to="/tournage" className="text-primary hover:underline">tournage professionnel</Link> de vos plus beaux chantiers est souvent le premier pas vers un site qui convertit mieux.</p>
    </section>

    <section id="page-realisations-raconte-histoire" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Créer une page réalisations qui raconte une histoire</h2>
      <p className="mb-4 text-muted-foreground">Une simple galerie de photos ne suffit pas toujours. Les projets les plus inspirants sont ceux qui racontent une transformation. Pour chaque réalisation, vous pouvez présenter :</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>le contexte : besoin du client, contraintes du terrain ;</li>
        <li>la solution proposée ;</li>
        <li>le résultat final.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Ce storytelling permet au visiteur de se reconnaître dans des situations concrètes et de mieux comprendre votre valeur ajoutée. C'est aussi un excellent moyen de <strong>générer des leads qualifiés</strong> : un prospect qui s'identifie à une réalisation est déjà à mi-chemin de la demande de devis.</p>
    </section>

    <section id="ton-inspirant-pas-uniquement-technique" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Adopter un ton inspirant, pas uniquement technique</h2>
      <p className="mb-4 text-muted-foreground">Un site de paysagiste ne doit pas ressembler à un catalogue de prestations. Le discours doit évoquer l'usage, le confort et le plaisir.</p>
      <p className="mb-4 text-muted-foreground">Plutôt que de lister uniquement « création de jardin, entretien, aménagement extérieur », expliquez comment vous transformez un extérieur en lieu de vie, comment vous accompagnez le client dans ses choix, comment vous adaptez chaque projet au terrain et aux envies.</p>
      <p className="mb-4 text-muted-foreground">Un ton chaleureux et accessible donne envie de vous contacter. Cette approche éditoriale est un pilier d'une <strong>stratégie marketing rénovation</strong> qui fonctionne, car elle crée une connexion émotionnelle bien avant la mise en concurrence technique.</p>
    </section>

    <section id="mettre-en-avant-style-approche" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Mettre en avant votre style et votre approche</h2>
      <p className="mb-4 text-muted-foreground">Chaque paysagiste a sa patte. Votre site web doit refléter votre identité. Cela peut passer par :</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>une présentation claire de votre approche (sur-mesure, respect de l'environnement, durabilité) ;</li>
        <li>le type de projets que vous aimez réaliser ;</li>
        <li>vos valeurs (écoute, créativité, proximité, conseils).</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Un site qui affirme un style attire des clients en affinité avec votre façon de travailler. C'est ce qui vous permet de <strong>trouver des clients BTP</strong> qui correspondent vraiment à votre positionnement, plutôt que de répondre à des demandes génériques.</p>
    </section>

    <section id="rassurer-sans-casser-emotion" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Rassurer sans casser l'émotion</h2>
      <p className="mb-4 text-muted-foreground">Donner envie est essentiel, mais la confiance reste indispensable. Votre site web doit aussi intégrer :</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>des avis clients ;</li>
        <li>une présentation de l'entreprise ;</li>
        <li>votre zone d'intervention ;</li>
        <li>votre expérience ou ancienneté ;</li>
        <li>des garanties ou certifications éventuelles.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Ces éléments doivent être présents, mais intégrés de façon fluide pour ne pas casser l'aspect inspirant du site. L'équilibre est subtil : trop de technique tue l'émotion, pas assez de réassurance tue la confiance.</p>
    </section>

    <section id="experience-utilisateur-mobile" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Soigner l'expérience utilisateur sur mobile</h2>
      <p className="mb-4 text-muted-foreground">Beaucoup de visiteurs découvrent votre site sur smartphone, parfois depuis un réseau social ou une recherche Google. Un site de paysagiste doit être :</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>parfaitement lisible sur mobile ;</li>
        <li>rapide à charger ;</li>
        <li>simple à naviguer ;</li>
        <li>avec des boutons de contact visibles.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Un site agréable à consulter sur mobile renforce immédiatement la perception de qualité. Dans le cadre d'une <strong>acquisition clients rénovation</strong>, c'est même un prérequis : un prospect qui galère sur votre site depuis son téléphone ne prendra pas la peine de vous contacter.</p>
    </section>

    <section id="passer-inspiration-action" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Faciliter le passage de l'inspiration à l'action</h2>
      <p className="mb-4 text-muted-foreground">Un visiteur inspiré doit savoir quoi faire ensuite. C'est un point souvent négligé sur les sites de paysagistes. Les bonnes pratiques incluent :</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>bouton « Demander un devis » visible ;</li>
        <li>formulaire simple ;</li>
        <li>message rassurant (« Devis gratuit », « Projet sur mesure », « Réponse rapide ») ;</li>
        <li>téléphone cliquable si nécessaire.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">L'objectif est de transformer l'émotion en prise de contact. Si votre site donne envie mais que le formulaire est caché, compliqué ou anxiogène, vous perdez une partie des prospects séduits par vos réalisations.</p>
    </section>

    <section id="conclusion" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Un site web de paysagiste doit faire ressentir votre valeur</h2>
      <p className="mb-4 text-muted-foreground">Un bon site de paysagiste ne se contente pas de montrer ce que vous faites. Il doit : donner envie, inspirer, rassurer et guider vers le contact.</p>
      <p className="mb-4 text-muted-foreground">Si votre site actuel ne remplit pas ces quatre fonctions, il est temps de repenser votre approche. L'investissement dans un site bien conçu est souvent le levier le plus rentable pour <strong>générer des leads rénovation</strong> de qualité dans le paysagisme.</p>
    </section>
  </>
);

export default ArticleCreerSitePaysagisteDonneEnvie2026;
