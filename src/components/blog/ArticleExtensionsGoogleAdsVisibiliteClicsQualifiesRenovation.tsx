import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionCTA from "@/components/SectionCTA";

const toc = [
  { id: "extensions-google-ads-definition", label: "À quoi servent vraiment les extensions ?" },
  { id: "extensions-augmentent-performance", label: "Pourquoi elles améliorent la performance" },
  { id: "types-extensions-prioritaires", label: "Les extensions à prioriser" },
  { id: "erreurs-courantes-extensions", label: "Les erreurs les plus fréquentes" },
  { id: "comment-les-integrer-dans-une-strategie-rentable", label: "Comment les intégrer dans une stratégie rentable" },
  { id: "quand-se-faire-accompagner-google-ads", label: "Quand faut-il se faire accompagner ?" },
  { id: "faq-extensions-google-ads", label: "FAQ" },
];

const ArticleExtensionsGoogleAdsVisibiliteClicsQualifiesRenovation = () => (
  <>
    <div className="mb-8 rounded-xl border border-border bg-muted/30 p-5 md:p-6">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">En bref</p>
      <p className="text-base leading-relaxed text-foreground">
        Les extensions Google Ads ne servent pas seulement à prendre plus de place dans Google. Bien configurées, elles aident une entreprise de rénovation à mieux expliquer son offre, à rassurer plus vite et à filtrer une partie des clics peu utiles.
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

    <section id="extensions-google-ads-definition" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">À quoi servent vraiment les extensions Google Ads ?</h2>
      <p className="mb-4 text-muted-foreground">Les extensions sont des compléments affichés autour de votre annonce principale : liens supplémentaires, accroches, numéro de téléphone, localisation, prix, promotions ou formulaire.</p>
      <p className="mb-4 text-muted-foreground">Leur rôle est double : rendre l’annonce plus lisible commercialement et qualifier davantage le clic avant même l’arrivée sur votre site.</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li><strong>Améliorer la compréhension</strong> de votre offre en quelques secondes.</li>
        <li><strong>Occuper plus d’espace</strong> dans la page de résultats face aux concurrents.</li>
        <li><strong>Réduire l’ambiguïté</strong> pour attirer plus de demandes cohérentes avec vos prestations.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Dans le BTP, cela compte beaucoup. Entre deux annonces, celle qui montre clairement les bons services, les bonnes zones ou les bons éléments de réassurance capte plus facilement l’attention du bon prospect.</p>
    </section>

    <section id="extensions-augmentent-performance" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Pourquoi elles améliorent souvent la performance des campagnes</h2>
      <p className="mb-4 text-muted-foreground">Les extensions ne sauvent pas une mauvaise campagne. Si le ciblage est flou, si la promesse n’est pas claire ou si la relance commerciale est faible, elles ne corrigent pas tout.</p>
      <p className="mb-4 text-muted-foreground">En revanche, elles renforcent souvent trois points clés :</p>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li>un <strong>taux de clic plus solide</strong> grâce à une annonce plus complète ;</li>
        <li>une <strong>meilleure pré-qualification</strong> parce que le prospect comprend plus vite ce qu’il va trouver ;</li>
        <li>une <strong>meilleure cohérence commerciale</strong> entre message, page de destination et prise de contact.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Dans beaucoup d’entreprises de rénovation, le problème n’est pas seulement le trafic. Il se situe entre la promesse, la qualification et le traitement commercial. Les extensions améliorent surtout la première brique : ce que le prospect comprend avant de cliquer.</p>
    </section>

    <section id="types-extensions-prioritaires" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Les extensions à prioriser en premier pour une entreprise de rénovation</h2>
      <p className="mb-5 text-muted-foreground">Toutes les extensions n’ont pas la même valeur. Pour une entreprise habitat ou BTP, certaines méritent d’être mises en place avant les autres.</p>

      <h3 className="mb-3 text-xl font-semibold text-foreground font-display">Les liens annexes</h3>
      <p className="mb-4 text-muted-foreground">C’est souvent l’extension la plus utile. Elle permet d’envoyer vers plusieurs pages clés : prestations, zones, avis, réalisations, demande de devis.</p>
      <p className="mb-4 text-muted-foreground">Si votre site travaille déjà vos <Link to="/gestion-seo" className="text-primary hover:underline">pages métiers et votre visibilité organique</Link>, ces liens renforcent aussi la cohérence entre référencement, publicité et conversion.</p>

      <h3 className="mb-3 text-xl font-semibold text-foreground font-display">Les accroches</h3>
      <p className="mb-4 text-muted-foreground">Elles servent à mettre en avant des éléments concrets de réassurance : délai de réponse, garantie, certifications, accompagnement ou spécialisation chantier.</p>
      <p className="mb-4 text-muted-foreground">Le piège est de rester générique. “Qualité” ou “sérieux” n’aident pas à décider. Une accroche utile doit rassurer ou filtrer.</p>

      <h3 className="mb-3 text-xl font-semibold text-foreground font-display">L’extension d’appel</h3>
      <p className="mb-4 text-muted-foreground">Elle est utile si votre équipe répond vite et qualifie correctement. Sinon, elle ajoute du bruit commercial plus qu’elle n’améliore la performance.</p>

      <h3 className="mb-3 text-xl font-semibold text-foreground font-display">L’extension de lieu</h3>
      <p className="mb-4 text-muted-foreground">Très pertinente pour les métiers locaux : couverture, plomberie, isolation, chauffage, façade, menuiserie. Elle renforce la proximité et soutient le parcours de conversion local.</p>
      <p className="mb-4 text-muted-foreground">Elle devient encore plus forte lorsqu’elle s’intègre à une vraie logique entre <Link to="/blog/fiche-google-maps-site-internet-referencement-local-2026" className="text-primary hover:underline">fiche Google Maps, site internet et pages locales</Link>.</p>

      <h3 className="mb-3 text-xl font-semibold text-foreground font-display">Les prix et promotions</h3>
      <p className="text-muted-foreground">À utiliser avec discernement. En rénovation, c’est surtout utile pour des offres standardisées, des audits, des forfaits ou une opération commerciale ponctuelle. Pour des chantiers complexes, cela peut simplifier à l’excès la perception de l’offre.</p>
    </section>

    <section id="erreurs-courantes-extensions" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Les erreurs les plus fréquentes avec les extensions</h2>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
        <li><strong>Envoyer vers des pages faibles</strong> qui ne rassurent pas ou ne convertissent pas.</li>
        <li><strong>Multiplier les promesses vagues</strong> sans vrai différenciateur.</li>
        <li><strong>Afficher un numéro mal traité</strong> alors que personne ne rappelle vite.</li>
        <li><strong>Utiliser une promotion sans logique de marge</strong> ni objectif commercial précis.</li>
        <li><strong>Déconnecter les extensions du reste du tunnel</strong> : annonce, landing page, qualification et CRM doivent porter la même promesse.</li>
      </ul>
      <p className="mt-4 text-muted-foreground">Exemple terrain : une entreprise de chauffage peut obtenir davantage de clics après avoir ajouté appel + liens annexes. Mais si la page d’atterrissage reste floue et que les demandes sont rappelées 48 heures plus tard, le gain réel restera limité.</p>
    </section>

    <section id="comment-les-integrer-dans-une-strategie-rentable" className="mb-10 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Comment les intégrer dans une stratégie Google Ads plus rentable</h2>
      <p className="mb-4 text-muted-foreground">Le bon usage des extensions commence par une question simple : qu’est-ce que le prospect doit comprendre avant de cliquer ?</p>
      <div className="rounded-xl border border-border bg-muted/30 p-6 md:p-7">
        <p className="mb-3 font-semibold text-foreground">Méthode simple à suivre</p>
        <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
          <li>associer chaque groupe d’annonces à une prestation ou un besoin clair ;</li>
          <li>relier les liens annexes à des pages vraiment utiles ;</li>
          <li>choisir des accroches qui répondent aux vraies objections ;</li>
          <li>activer appel ou formulaire seulement si le traitement commercial suit ;</li>
          <li>piloter la campagne jusqu’au rendez-vous, au devis et à la signature.</li>
        </ul>
      </div>
      <p className="mt-4 text-muted-foreground">Autrement dit, les extensions doivent soutenir une logique d’<Link to="/gestion-communication" className="text-primary hover:underline">acquisition pilotée comme un système</Link>, pas seulement embellir une annonce.</p>
    </section>

    <section id="quand-se-faire-accompagner-google-ads" className="mb-12 scroll-mt-28">
      <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Quand faut-il se faire accompagner sur ce sujet ?</h2>
      <p className="mb-4 text-muted-foreground">Si vos campagnes tournent déjà mais que vous avez du mal à comprendre pourquoi certaines annonces génèrent des clics sans générer de vrais dossiers, il y a souvent un sujet de structuration plus large.</p>
      <p className="mb-4 text-muted-foreground">Les extensions peuvent faire partie du correctif, mais l’enjeu réel est souvent de relier le message publicitaire, la page de destination, la qualification des demandes et le suivi commercial derrière.</p>
      <p className="mb-4 text-muted-foreground">Quand ces briques sont alignées, Google Ads devient plus lisible, plus pilotable et plus rentable. Quand elles ne le sont pas, on a vite l’impression que la plateforme coûte cher alors que le vrai problème est dans le système d’acquisition.</p>
      <SectionCTA />
    </section>

    <section id="faq-extensions-google-ads" className="scroll-mt-28">
      <h2 className="mb-6 text-2xl md:text-3xl font-bold text-foreground font-display">FAQ sur les extensions Google Ads</h2>
      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="faq-1" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Les extensions Google Ads sont-elles obligatoires ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Non, mais elles sont fortement recommandées. Une annonce sans extension paraît souvent moins complète et moins compétitive qu’une annonce mieux structurée.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Les extensions suffisent-elles pour améliorer la rentabilité d’une campagne ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Non. Elles peuvent améliorer la visibilité et le taux de clic, mais la rentabilité dépend aussi du ciblage, de l’offre, de la page de destination et du traitement commercial.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Quelle extension est la plus utile pour une entreprise de rénovation ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Les liens annexes sont souvent le meilleur point de départ, car ils aident à mieux présenter les prestations et à guider le prospect vers les bonnes pages.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-4" className="rounded-xl border border-border px-5">
          <AccordionTrigger className="text-left font-semibold text-foreground">Faut-il activer l’extension d’appel à tout prix ?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">Seulement si votre équipe peut répondre rapidement et qualifier les appels. Sinon, vous risquez d’ajouter du volume sans améliorer la qualité des dossiers.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </>
);

export default ArticleExtensionsGoogleAdsVisibiliteClicsQualifiesRenovation;
