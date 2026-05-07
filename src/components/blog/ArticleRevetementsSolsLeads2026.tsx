import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionCTA from "@/components/SectionCTA";

const sommaire = [
  { id: "pourquoi-visibilite-commerciale-faible", label: "Pourquoi la visibilité reste faible" },
  { id: "leviers-acquisition-revetements-sols", label: "Les leviers qui comptent" },
  { id: "site-performant-revetements-sols", label: "Ce qu’un site doit montrer" },
  { id: "framework-generation-leads", label: "Le framework simple" },
  { id: "erreurs-rentabilite-marketing", label: "Les erreurs fréquentes" },
  { id: "quand-se-faire-accompagner", label: "Quand se faire accompagner" },
  { id: "ce-qu-il-faut-retenir", label: "Ce qu’il faut retenir" },
  { id: "faq", label: "FAQ" },
];

const ArticleRevetementsSolsLeads2026 = () => {
  return (
    <div className="max-w-3xl">
      <div className="mb-10 space-y-5 text-base leading-8 text-muted-foreground">
        <p>
          Pour une entreprise de revêtements de sols, être visible en ligne ne suffit plus. En 2026, le vrai sujet est de <strong className="text-foreground">générer des demandes qualifiées</strong>, de les transformer en devis, puis en chantiers rentables.
        </p>
        <p>
          Beaucoup d’acteurs du secteur investissent dans un site, quelques publications LinkedIn ou un peu de publicité, sans construire un vrai système d’acquisition. Résultat : du trafic, parfois de la notoriété, mais pas assez d’opportunités commerciales concrètes.
        </p>
        <p>
          Une stratégie de <strong className="text-foreground">génération de leads rénovation</strong> rentable dans les revêtements de sols relie visibilité locale, preuve métier, qualification des contacts et suivi commercial. C’est ce lien qui fait la différence entre une simple présence digitale et une machine d’acquisition utile.
        </p>
      </div>

      <section className="mb-10 rounded-2xl border border-border bg-muted/40 p-6 lg:hidden">
        <h2 className="mb-4 text-lg font-semibold text-foreground">Sommaire</h2>
        <ul className="space-y-3 text-sm text-muted-foreground">
          {sommaire.map((item) => (
            <li key={item.id}>
              <a className="hover:text-primary transition-colors" href={`#${item.id}`}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10 rounded-2xl border border-primary/15 bg-primary/5 p-6">
        <h2 className="mb-3 text-xl font-semibold text-foreground">En bref</h2>
        <ul className="space-y-3 text-sm leading-7 text-muted-foreground">
          <li className="flex gap-3"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />Un bon volume de trafic ne vaut rien si l’offre, la preuve et la relance ne filtrent pas les bons projets.</li>
          <li className="flex gap-3"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />Les pages métiers, le SEO local et Google Ads doivent servir la qualité des demandes, pas seulement la visibilité.</li>
          <li className="flex gap-3"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />Le meilleur gain de rentabilité vient souvent du lien entre marketing, qualification et traitement commercial.</li>
        </ul>
      </section>

      <section id="pourquoi-visibilite-commerciale-faible" className="mb-12 scroll-mt-28">
        <h2 className="mb-4 text-2xl font-semibold tracking-tight text-foreground">Pourquoi beaucoup d’entreprises de revêtements de sols restent peu visibles commercialement</h2>
        <div className="space-y-5 text-base leading-8 text-muted-foreground">
          <p>
            Le marché des sols est concurrentiel, avec des offres qui peuvent sembler proches aux yeux du prospect : parquet, carrelage, sol PVC, LVT, résine, moquette, stratifié. Si votre entreprise ne clarifie pas sa spécialité, sa zone d’intervention et son niveau de valeur, elle devient interchangeable.
          </p>
          <p>
            Le problème n’est pas seulement marketing. Dans le BTP, le blocage se situe souvent entre la promesse, la qualification et le traitement commercial.
          </p>
          <ul className="list-disc space-y-3 pl-6">
            <li>Le site parle de l’entreprise, mais pas assez des cas clients et des types de chantiers.</li>
            <li>Les campagnes publicitaires envoient du trafic, mais sans filtre sur le budget, le type de projet ou la localisation.</li>
            <li>Les formulaires remontent des demandes trop vagues pour permettre un bon rappel.</li>
            <li>Le suivi commercial est irrégulier, donc des devis restent sans relance structurée.</li>
          </ul>
          <p>
            Une entreprise peut penser avoir un problème de visibilité, alors qu’elle a surtout un problème de <strong className="text-foreground">système acquisition client rénovation</strong>.
          </p>
        </div>
      </section>

      <section id="leviers-acquisition-revetements-sols" className="mb-12 scroll-mt-28">
        <h2 className="mb-4 text-2xl font-semibold tracking-tight text-foreground">Les leviers qui comptent vraiment pour trouver des clients en revêtements de sols</h2>
        <div className="space-y-5 text-base leading-8 text-muted-foreground">
          <p>
            Une entreprise de sols ne doit pas chercher à être présente partout. Elle doit concentrer ses efforts sur les canaux qui soutiennent réellement l’<strong className="text-foreground">acquisition clients rénovation</strong>.
          </p>
          <ul className="list-disc space-y-3 pl-6">
            <li><strong className="text-foreground">Le référencement local</strong> pour capter les recherches autour de la pose de parquet, du carrelage ou des sols souples sur votre zone.</li>
            <li><strong className="text-foreground">Les pages services bien structurées</strong> pour chaque spécialité : revêtement PVC, parquet, carrelage grand format, sols pour commerces, rénovation d’appartements ou de bureaux.</li>
            <li><strong className="text-foreground">Les campagnes Google Ads</strong> sur des requêtes à intention forte, quand la demande est déjà active.</li>
            <li><strong className="text-foreground">Les preuves visuelles</strong> avec avant/après, photos de chantier, détails de finitions, contraintes techniques et contexte du projet.</li>
            <li><strong className="text-foreground">Le reciblage</strong> pour rester présent auprès des visiteurs qui comparent plusieurs entreprises avant de demander un devis.</li>
          </ul>
          <p>
            Si votre objectif est de <strong className="text-foreground">comment générer des leads rénovation</strong> de qualité, chaque levier doit servir une logique simple : attirer la bonne demande, rassurer vite, faciliter la prise de contact.
          </p>
          <p>
            En pratique, cela suppose aussi de relier vos pages clés à un <Link to="/gestion-seo" className="text-primary hover:underline">travail SEO local structuré</Link> et vos campagnes à un pilotage publicitaire plus propre via <Link to="/gestion-communication" className="text-primary hover:underline">une gestion de communication orientée acquisition</Link>.
          </p>
        </div>
      </section>

      <section id="site-performant-revetements-sols" className="mb-12 scroll-mt-28">
        <h2 className="mb-4 text-2xl font-semibold tracking-tight text-foreground">Ce qu’un site performant doit montrer dans ce secteur</h2>
        <div className="space-y-5 text-base leading-8 text-muted-foreground">
          <p>
            Dans les revêtements de sols, le site ne doit pas être une brochure. Il doit aider un prospect à se projeter et à décider.
          </p>
          <p>Concrètement, un bon site pour ce secteur doit répondre immédiatement à quatre questions :</p>
          <ul className="list-disc space-y-3 pl-6">
            <li>Quels types de sols posez-vous exactement ?</li>
            <li>Pour quels types de projets intervenez-vous ? habitat, commerce, tertiaire, local professionnel ?</li>
            <li>Dans quelles zones géographiques travaillez-vous ?</li>
            <li>Pourquoi vous plutôt qu’un autre poseur ou une autre entreprise ?</li>
          </ul>
        </div>

        <div className="mt-6 rounded-2xl border border-border bg-muted/30 p-6">
          <h3 className="mb-3 text-xl font-semibold text-foreground">Exemple terrain</h3>
          <p className="text-base leading-8 text-muted-foreground">
            Une entreprise qui pose du LVT et du parquet en rénovation résidentielle peut augmenter fortement la qualité de ses demandes simplement en séparant ses pages par usage réel : rénovation appartement, rénovation maison, sol pour local commercial, remplacement après dégât des eaux, remise à niveau avant pose.
          </p>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            Ce niveau de précision améliore à la fois le <strong className="text-foreground">marketing digital rénovation</strong> et la qualité des prises de contact remontées à l’équipe commerciale. Si votre site reste trop généraliste, une <Link to="/creation-site-internet" className="text-primary hover:underline">refonte orientée conversion</Link> devient souvent un levier plus rentable qu’une hausse du budget média seule.
          </p>
        </div>
      </section>

      <section id="framework-generation-leads" className="mb-12 scroll-mt-28">
        <h2 className="mb-4 text-2xl font-semibold tracking-tight text-foreground">Le framework simple pour structurer la génération de leads</h2>
        <div className="space-y-5 text-base leading-8 text-muted-foreground">
          <p>
            Chez Agendac, un cadre simple fonctionne bien pour les entreprises du bâtiment déjà établies : <strong className="text-foreground">Offre, Preuve, Capture, Relance</strong>.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">1. Offre</h3>
              <p>Votre promesse doit être lisible. Pas seulement “pose de revêtements de sols”, mais une offre claire par type de chantier, niveau de gamme, délai, zone et bénéfice client.</p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">2. Preuve</h3>
              <p>Montrez des réalisations concrètes, pas seulement des slogans. Photos, contraintes du chantier, durée, résultat final, type de matériau, avis client.</p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">3. Capture</h3>
              <p>Le formulaire, l’appel ou la demande de devis doivent être simples, visibles et qualifiants. Demander le type de projet, la ville, l’échéance et la surface permet déjà d’améliorer le tri commercial.</p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">4. Relance</h3>
              <p>Une demande non rappelée rapidement perd vite de sa valeur. Sans suivi commercial structuré, la <strong className="text-foreground">génération de leads BTP</strong> se dégrade, même avec une bonne campagne.</p>
            </div>
          </div>

          <p>
            Ce framework paraît basique. Pourtant, beaucoup d’entreprises ont des trous dans un ou deux maillons, ce qui casse la performance globale.
          </p>
        </div>
      </section>

      <section id="erreurs-rentabilite-marketing" className="mb-12 scroll-mt-28">
        <h2 className="mb-4 text-2xl font-semibold tracking-tight text-foreground">Les erreurs fréquentes qui font baisser la rentabilité marketing</h2>
        <div className="space-y-5 text-base leading-8 text-muted-foreground">
          <p>Les entreprises de revêtements de sols qui investissent dans leur communication font souvent les mêmes erreurs.</p>
          <ul className="list-disc space-y-3 pl-6">
            <li>Communiquer de manière trop générique, sans spécialité ni segment clair.</li>
            <li>Envoyer tout le budget sur la visibilité, sans penser au traitement commercial.</li>
            <li>Créer un site joli mais pauvre en pages métiers et en preuves de chantier.</li>
            <li>Attendre des réseaux sociaux qu’ils produisent seuls des devis à court terme.</li>
            <li>Lancer des campagnes sans mesurer le <strong className="text-foreground">coût acquisition client rénovation</strong> réel.</li>
            <li>Ne pas distinguer un simple contact d’une vraie opportunité commerciale.</li>
          </ul>
          <p>
            Une erreur fréquente consiste aussi à juger une campagne uniquement au nombre de formulaires. Ce qui compte, c’est la chaîne complète : demande, qualification, visite, devis, signature, marge.
          </p>
        </div>
      </section>

      <section id="quand-se-faire-accompagner" className="mb-12 scroll-mt-28">
        <h2 className="mb-4 text-2xl font-semibold tracking-tight text-foreground">Quand faut-il se faire accompagner ?</h2>
        <div className="space-y-5 text-base leading-8 text-muted-foreground">
          <p>
            À partir d’un certain niveau d’activité, la question n’est plus “faut-il communiquer ?” mais “comment structurer un dispositif qui soutient vraiment les objectifs commerciaux ?”
          </p>
          <p>Un accompagnement devient pertinent quand :</p>
          <ul className="list-disc space-y-3 pl-6">
            <li>vous dépendez encore trop du bouche-à-oreille,</li>
            <li>vous recevez des demandes irrégulières ou peu sérieuses,</li>
            <li>vos campagnes ne produisent pas assez de devis signables,</li>
            <li>vous manquez de visibilité sur la rentabilité réelle de votre acquisition.</li>
          </ul>
          <p>
            Pour une entreprise de revêtements de sols déjà installée, le sujet n’est pas seulement de faire plus de communication. Il s’agit de <strong className="text-foreground">structurer marketing rénovation</strong> et suivi commercial pour alimenter le carnet de commandes avec plus de prévisibilité.
          </p>
        </div>
      </section>

      <section className="mb-12 rounded-2xl border border-border bg-muted/30 px-6 py-8 text-center">
        <h2 className="mb-3 text-2xl font-semibold tracking-tight text-foreground">Besoin d’un système d’acquisition plus propre pour vos chantiers ?</h2>
        <p className="mx-auto mb-6 max-w-2xl text-base leading-8 text-muted-foreground">
          Si votre visibilité ne se transforme pas en demandes exploitables, il faut souvent retravailler le lien entre pages métiers, SEO local, campagnes et relance commerciale. C’est là que la performance se joue.
        </p>
        <SectionCTA />
      </section>

      <section id="ce-qu-il-faut-retenir" className="mb-12 scroll-mt-28">
        <h2 className="mb-4 text-2xl font-semibold tracking-tight text-foreground">Ce qu’il faut retenir</h2>
        <div className="space-y-5 text-base leading-8 text-muted-foreground">
          <p>
            En 2026, une entreprise de revêtements de sols performante en ligne ne cherche pas seulement de la notoriété. Elle construit un système cohérent pour <strong className="text-foreground">trouver des clients rénovation</strong>, filtrer les bonnes demandes et améliorer son taux de transformation.
          </p>
          <p>
            Si votre visibilité ne se traduit pas en chantiers rentables, le problème vient rarement du trafic seul. Il vient souvent d’un positionnement flou, d’un manque de preuve métier, d’une capture faible ou d’un suivi commercial trop léger.
          </p>
        </div>
      </section>

      <section id="faq" className="scroll-mt-28">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight text-foreground">FAQ</h2>
        <Accordion type="single" collapsible className="w-full rounded-2xl border border-border bg-background px-5">
          <AccordionItem value="item-1">
            <AccordionTrigger>Comment générer des leads pour une entreprise de revêtements de sols sans dépendre uniquement du bouche-à-oreille ?</AccordionTrigger>
            <AccordionContent>
              Il faut combiner référencement local, pages services précises, preuves de chantier, campagnes ciblées et relance commerciale structurée. Sans ce système, la demande reste irrégulière.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Quel canal fonctionne le mieux pour trouver des clients en revêtements de sols ?</AccordionTrigger>
            <AccordionContent>
              Tout dépend du type de chantier et de la zone, mais les recherches Google à intention forte et les pages locales bien construites restent souvent les leviers les plus directement rentables.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Pourquoi une campagne publicitaire ne suffit-elle pas à elle seule ?</AccordionTrigger>
            <AccordionContent>
              Parce qu’une campagne peut générer des clics sans générer de devis signés. Si l’offre, la page d’atterrissage, la qualification ou le rappel sont faibles, la performance commerciale chute.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Comment savoir si sa stratégie marketing rénovation est rentable ?</AccordionTrigger>
            <AccordionContent>
              Il faut suivre au minimum le coût par demande, la part de demandes qualifiées, le taux de devis, le taux de signature et la marge générée par chantier.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
};

export default ArticleRevetementsSolsLeads2026;
