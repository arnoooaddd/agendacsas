import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionCTA from "@/components/SectionCTA";

const toc = [
  { id: "marche-electricite-2026", label: "Le contexte 2026" },
  { id: "positionnement-electricien", label: "Clarifier le positionnement" },
  { id: "site-web-electricien", label: "Un site qui convertit" },
  { id: "seo-local-electricite", label: "SEO local" },
  { id: "preuve-chantier-electricite", label: "Preuve chantier" },
  { id: "publicite-suivi-commercial", label: "Publicité + suivi" },
  { id: "feuille-route-electricien", label: "Feuille de route" },
  { id: "faq-marketing-electricien", label: "FAQ" },
];

export default function ArticleStrategieMarketingElectricite2026() {
  return (
    <>
      <div className="mb-8 rounded-xl border border-border bg-muted/30 p-5 md:p-6">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">En bref</p>
        <p className="text-base leading-relaxed text-foreground">
          Pour un électricien, une stratégie marketing rentable ne consiste pas à être partout. Elle doit relier spécialisation, visibilité locale, preuves chantier et traitement rapide des demandes.
        </p>
      </div>

      <div className="mb-8 rounded-xl border border-primary/15 bg-primary/5 p-5 md:p-6">
        <p className="mb-0 leading-relaxed text-muted-foreground">
          Le marché de l’électricité évolue avec la rénovation énergétique, le smart building, les bornes de recharge, la domotique et la mise aux normes. Pour transformer ces opportunités en demandes qualifiées, la communication doit devenir un système commercial clair.
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

      <section id="marche-electricite-2026" className="mb-10 scroll-mt-28">
        <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Pourquoi le marché de l’électricité impose une communication plus structurée en 2026</h2>
        <p className="mb-4 text-muted-foreground">Les entreprises d’électricité ne vendent plus seulement des interventions ponctuelles. Elles interviennent sur des sujets plus stratégiques : rénovation, conformité, performance énergétique, pilotage des équipements, bornes de recharge et bâtiments connectés.</p>
        <p className="mb-4 text-muted-foreground">Cette évolution crée de vraies opportunités, mais elle rend aussi le marché plus lisible pour les acteurs qui savent se positionner. Un électricien généraliste, un spécialiste tertiaire, un installateur IRVE et une entreprise orientée rénovation résidentielle ne doivent pas communiquer de la même manière.</p>
        <p className="text-muted-foreground">La priorité n’est donc pas de publier plus. C’est de construire une <strong>stratégie marketing BTP</strong> capable d’attirer les bons projets, dans les bonnes zones, avec un niveau de qualification suffisant.</p>
      </section>

      <section id="positionnement-electricien" className="mb-10 scroll-mt-28">
        <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Clarifier votre positionnement avant de chercher plus de demandes</h2>
        <p className="mb-4 text-muted-foreground">Avant d’investir dans le site, le SEO ou la publicité, une entreprise d’électricité doit définir les demandes qu’elle veut réellement développer.</p>
        <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
          <li>mise aux normes et rénovation électrique ;</li>
          <li>installation de bornes de recharge ;</li>
          <li>électricité tertiaire et maintenance ;</li>
          <li>domotique, GTB ou smart building ;</li>
          <li>dépannage, petits travaux ou contrats récurrents.</li>
        </ul>
        <p className="text-muted-foreground">Chaque axe implique un message différent, des preuves différentes et parfois un tunnel commercial différent. Une stratégie efficace commence par ce tri.</p>
      </section>

      <section id="site-web-electricien" className="mb-10 scroll-mt-28">
        <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Construire un site d’électricien qui transforme la confiance en contacts utiles</h2>
        <p className="mb-4 text-muted-foreground">Un site performant ne se limite pas à présenter l’entreprise. Il doit aider le prospect à comprendre rapidement si vous êtes le bon interlocuteur pour son besoin.</p>
        <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
          <li>des pages dédiées aux prestations prioritaires ;</li>
          <li>des zones d’intervention clairement visibles ;</li>
          <li>des photos de réalisations et références chantier ;</li>
          <li>des éléments de réassurance : qualifications, délais, garanties, avis ;</li>
          <li>des appels à l’action précis : demande de devis, audit, rappel, étude technique.</li>
        </ul>
        <p className="text-muted-foreground">Si votre site mélange dépannage, tertiaire, rénovation et domotique sans hiérarchie, il attire des demandes floues. Un bon site doit au contraire filtrer et orienter.</p>
      </section>

      <section id="seo-local-electricite" className="mb-10 scroll-mt-28">
        <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Travailler le SEO local sur les recherches qui précèdent une vraie demande</h2>
        <p className="mb-4 text-muted-foreground">Le référencement d’un électricien doit viser les requêtes qui expriment une intention réelle : “électricien + ville”, “mise aux normes électrique”, “installation borne recharge”, “tableau électrique rénovation” ou “électricien tertiaire”.</p>
        <p className="mb-4 text-muted-foreground">La fiche Google Business Profile, les pages locales, les pages prestations et les avis doivent travailler ensemble. C’est ce lien qui permet de mieux apparaître sur Google et de convertir la visibilité en contacts.</p>
        <p className="text-muted-foreground">Pour aller plus loin, vous pouvez aussi structurer votre approche autour du <Link to="/blog/fiche-google-maps-site-internet-referencement-local-2026" className="text-primary hover:underline">couple fiche Google Maps + site internet</Link>.</p>
      </section>

      <section id="preuve-chantier-electricite" className="mb-10 scroll-mt-28">
        <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Utiliser la preuve chantier pour rassurer avant le devis</h2>
        <p className="mb-4 text-muted-foreground">Dans l’électricité, les prospects cherchent surtout à éviter les risques : installation mal faite, non-conformité, délais flous, devis incompréhensible ou manque de suivi.</p>
        <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
          <li>photos avant/après de tableaux ou installations ;</li>
          <li>cas concrets de rénovation ou mise aux normes ;</li>
          <li>explication simple du besoin et de la solution retenue ;</li>
          <li>avis clients contextualisés ;</li>
          <li>preuves de qualification ou spécialisation.</li>
        </ul>
        <p className="text-muted-foreground">Ces éléments améliorent la conversion du site, mais aussi la performance des campagnes et la qualité du suivi commercial.</p>
      </section>

      <section id="publicite-suivi-commercial" className="mb-10 scroll-mt-28">
        <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Associer publicité en ligne et suivi commercial rapide</h2>
        <p className="mb-4 text-muted-foreground">Google Ads ou Meta Ads peuvent accélérer l’acquisition, mais seulement si les bases sont prêtes : pages claires, formulaire utile, tracking, qualification et relance.</p>
        <p className="mb-4 text-muted-foreground">Une demande entrante doit être rappelée vite, qualifiée proprement et suivie dans un CRM. Sinon, l’entreprise paie pour générer des contacts qu’elle ne transforme pas.</p>
        <p className="text-muted-foreground">C’est souvent là que se joue la rentabilité : moins dans le volume brut que dans la capacité à transformer les bonnes demandes en rendez-vous, devis puis chantiers signés.</p>
      </section>

      <section id="feuille-route-electricien" className="mb-12 scroll-mt-28">
        <h2 className="mb-4 text-2xl md:text-3xl font-bold text-foreground font-display">Feuille de route 90 jours pour structurer votre marketing d’électricien</h2>
        <h3 className="mb-3 mt-6 text-xl font-bold text-foreground font-display">Semaines 1 à 3 : cadrer</h3>
        <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
          <li>choisir les prestations prioritaires ;</li>
          <li>définir les zones et profils de prospects ;</li>
          <li>auditer le site, la fiche Google et les avis ;</li>
          <li>clarifier le traitement commercial des demandes.</li>
        </ul>
        <h3 className="mb-3 mt-6 text-xl font-bold text-foreground font-display">Semaines 4 à 8 : renforcer</h3>
        <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
          <li>créer ou améliorer les pages services ;</li>
          <li>ajouter des références chantier ;</li>
          <li>corriger les formulaires et appels à l’action ;</li>
          <li>mettre en place un suivi des demandes.</li>
        </ul>
        <h3 className="mb-3 mt-6 text-xl font-bold text-foreground font-display">Semaines 9 à 12 : accélérer</h3>
        <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
          <li>optimiser le SEO local ;</li>
          <li>tester la publicité sur les prestations prioritaires ;</li>
          <li>mesurer les rendez-vous, devis et signatures ;</li>
          <li>réallouer les budgets vers les demandes les plus rentables.</li>
        </ul>
        <p className="mb-4 text-muted-foreground">Cette méthode évite de disperser les efforts. Elle transforme le <strong>marketing digital bâtiment</strong> en levier pilotable, relié à la marge et au chiffre signé.</p>
        <SectionCTA />
      </section>

      <section id="faq-marketing-electricien" className="scroll-mt-28">
        <h2 className="mb-6 text-2xl md:text-3xl font-bold text-foreground font-display">FAQ : stratégie marketing pour électricien</h2>
        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="faq-1" className="rounded-xl border border-border px-5">
            <AccordionTrigger className="text-left font-semibold text-foreground">Quel canal prioriser pour une entreprise d’électricité ?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">Le plus souvent : site web, fiche Google, avis, pages services locales, puis publicité si le suivi commercial est prêt. Le bon ordre dépend surtout des prestations prioritaires.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-2" className="rounded-xl border border-border px-5">
            <AccordionTrigger className="text-left font-semibold text-foreground">Le SEO est-il rentable pour un électricien ?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">Oui si les pages ciblent des recherches locales et des prestations à forte intention. Un SEO générique attire du trafic, mais pas forcément des demandes exploitables.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-3" className="rounded-xl border border-border px-5">
            <AccordionTrigger className="text-left font-semibold text-foreground">Faut-il faire de la publicité Google Ads ?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">Oui, mais pas trop tôt. Les campagnes sont utiles quand les pages, les formulaires, le tracking et la qualification sont déjà solides.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-4" className="rounded-xl border border-border px-5">
            <AccordionTrigger className="text-left font-semibold text-foreground">Comment mesurer la rentabilité du marketing ?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">Il faut suivre la source des demandes, leur qualité, les rendez-vous obtenus, les devis envoyés et le chiffre d’affaires signé. Le trafic seul ne suffit pas.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </>
  );
}
