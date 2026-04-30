import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, FileText, LayoutTemplate, MousePointerClick, Smartphone, Target } from "lucide-react";
import SectionCTA from "@/components/SectionCTA";

const ArticleSiteInternetRenovationErreurs = () => (
  <div className="prose-custom">
    <section className="mb-10">
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium leading-relaxed">
          Beaucoup d'entreprises de rénovation investissent dans leur site, dans Google Ads ou dans Meta Ads… puis se demandent pourquoi <strong>les demandes de devis ne rentrent pas</strong>. Le problème n'est pas toujours le trafic. Très souvent, le site <strong>bloque la conversion</strong> avant même le premier appel.
        </p>
      </div>
    </section>

    <section className="mb-12">
      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <h2 className="text-lg font-bold text-foreground font-display mb-4">📑 Sommaire</h2>
        <nav>
          <ol className="space-y-2 text-muted-foreground text-sm">
            <li><a href="#pourquoi-site-perd-des-devis" className="hover:text-primary transition-colors">1. Pourquoi un site fait perdre des demandes de devis</a></li>
            <li><a href="#sept-erreurs" className="hover:text-primary transition-colors">2. Les 7 erreurs les plus fréquentes</a></li>
            <li><a href="#comment-corriger" className="hover:text-primary transition-colors">3. Comment corriger rapidement ces blocages</a></li>
            <li><a href="#conclusion-site" className="hover:text-primary transition-colors">4. Conclusion</a></li>
            <li><a href="#faq-site" className="hover:text-primary transition-colors">5. Questions fréquentes</a></li>
          </ol>
        </nav>
      </div>
    </section>

    <section className="mb-12" id="pourquoi-site-perd-des-devis">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <MousePointerClick size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Pourquoi un site internet fait perdre des demandes de devis
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        En rénovation, le site ne sert pas juste à "faire pro". Il doit rassurer, orienter et pousser le prospect à passer à l'action. Si la page ne donne pas confiance, si l'offre est floue ou si le parcours est pénible, le prospect quitte le site sans formulaire, sans appel et sans devis.
      </p>
      <p className="text-muted-foreground mb-4">
        Autrement dit : vous pouvez payer du trafic qualifié, avoir un bon bouche-à-oreille ou une bonne réputation locale… et quand même perdre une partie de la demande sur <strong>la dernière ligne droite</strong>.
      </p>

      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card">
        <p className="font-semibold text-foreground mb-3">Un site qui convertit mieux permet de :</p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />augmenter le taux de demandes de devis sans augmenter le budget pub</li>
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />mieux filtrer les prospects réellement qualifiés</li>
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />améliorer la perception de sérieux avant le premier échange</li>
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />rentabiliser Google Ads, SEO local et retargeting</li>
        </ul>
      </div>
    </section>

    <section className="mb-12" id="sept-erreurs">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <LayoutTemplate size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Les 7 erreurs qui font perdre des demandes de devis
        </h2>
      </div>

      <div className="space-y-5">
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">1. Une promesse trop vague dès le premier écran</h3>
          <p className="text-muted-foreground">Si le visiteur ne comprend pas immédiatement ce que vous faites, pour qui et dans quelle zone, il décroche. Un bon hero doit parler résultat, spécialité et zone d'intervention.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">2. Aucune preuve concrète de sérieux</h3>
          <p className="text-muted-foreground">Pas d'avis, pas de chantiers, pas de visuels avant/après, pas de preuves locales : le prospect doute. En rénovation, la confiance se gagne vite ou se perd vite.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">3. Un formulaire trop long ou mal placé</h3>
          <p className="text-muted-foreground">Demander trop d'informations trop tôt crée de la friction. Le formulaire doit être visible, simple et adapté au niveau d'engagement attendu.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">4. Un site peu convaincant sur mobile</h3>
          <p className="text-muted-foreground">La majorité du trafic arrive sur téléphone. Si les boutons sont mal placés, le texte illisible ou les sections trop lourdes, vous perdez des demandes sans même le voir.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">5. Trop de distractions dans la page</h3>
          <p className="text-muted-foreground">Menu surchargé, trop de liens, plusieurs appels à l'action contradictoires : le prospect se disperse. Une page de conversion doit guider vers une seule action principale.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">6. Un discours centré sur l'entreprise au lieu du prospect</h3>
          <p className="text-muted-foreground">Le prospect veut savoir si vous pouvez résoudre son problème. Si la page parle surtout de vous, de votre historique ou de généralités, elle convertit moins.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">7. Aucun suivi clair après la demande</h3>
          <p className="text-muted-foreground">Même quand le formulaire est rempli, si la page ne précise pas la suite — rappel, délai, audit, visite — le prospect peut hésiter. La conversion continue après le clic.</p>
        </div>
      </div>

      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 mt-6">
        <p className="text-foreground font-medium mb-2">Le point clé :</p>
        <p className="text-muted-foreground">
          Un site qui ne convertit pas n'est pas toujours un site "moche". C'est souvent un site qui <strong>ne structure pas assez la confiance et l'action</strong>.
        </p>
      </div>
    </section>

    <section className="mb-12">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-10 text-center shadow-card">
        <p className="text-muted-foreground mb-2">Vous n'avez pas besoin de plus de trafic si votre site laisse déjà partir les bons prospects.</p>
        <p className="text-foreground font-semibold text-lg mb-6">Commencez par corriger les points de friction entre la visite et la demande de devis.</p>
        <SectionCTA />
      </div>
    </section>

    <section className="mb-12" id="comment-corriger">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <FileText size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Comment corriger rapidement ces blocages
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-muted/50 border border-border rounded-xl p-5">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">Clarifiez votre offre</h3>
          <p className="text-muted-foreground text-sm">Affichez clairement la spécialité, la zone et la promesse dès le premier écran.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-5">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">Ajoutez des preuves locales</h3>
          <p className="text-muted-foreground text-sm">Avis, réalisations, cas concrets, capture de résultats, vidéo chantier : montrez du réel.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-5">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">Simplifiez le passage à l'action</h3>
          <p className="text-muted-foreground text-sm">Un CTA principal, un formulaire plus court, une suite claire après la demande.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-5">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">Testez le mobile en priorité</h3>
          <p className="text-muted-foreground text-sm">La vraie page à optimiser est souvent celle vue sur smartphone, pas sur desktop.</p>
        </div>
      </div>

      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <div className="flex items-center gap-3 mb-3">
          <Smartphone size={18} className="text-primary" />
          <p className="font-semibold text-foreground">Le meilleur audit à faire cette semaine</p>
        </div>
        <p className="text-muted-foreground">
          Ouvrez votre site sur téléphone, arrivez depuis une pub ou une recherche locale, puis demandez-vous : <strong>en moins de 10 secondes, est-ce que je comprends pourquoi je devrais demander un devis ici ?</strong>
        </p>
      </div>

      <p className="text-muted-foreground mt-6">
        Si vous voulez aller plus loin, lisez aussi <Link to="/blog/landing-page-renovation-rendez-vous" className="text-primary hover:underline">notre guide sur les landing pages rénovation qui convertissent</Link>.
      </p>
    </section>

    <section className="mb-12" id="conclusion-site">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
          <Target size={20} className="text-destructive" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">Conclusion</h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Un site internet rénovation doit vous aider à transformer la confiance en prise de contact. S'il ne clarifie pas l'offre, ne rassure pas et ne guide pas l'action, il freine votre acquisition.
      </p>
      <p className="text-muted-foreground mb-4">
        Corriger ces 7 erreurs peut améliorer la rentabilité de vos campagnes, de votre SEO local et de votre bouche-à-oreille sans changer tout votre marketing.
      </p>
      <p className="text-foreground font-semibold text-lg">
        Le bon site n'est pas celui qui impressionne. C'est celui qui déclenche plus de demandes de devis qualifiées.
      </p>
    </section>

    <section className="mb-16">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center shadow-card">
        <p className="text-muted-foreground mb-2">Vous voulez un site qui aide vraiment vos campagnes à convertir ?</p>
        <p className="text-foreground font-semibold text-lg mb-6">Structurez un parcours simple, crédible et pensé pour générer plus de rendez-vous qualifiés.</p>
        <SectionCTA />
      </div>
    </section>

    <section className="mb-12" id="faq-site">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">Questions fréquentes</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="faq-1" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Mon site est beau, pourquoi il ne convertit pas ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Parce qu'un beau site ne suffit pas. En rénovation, il faut aussi une promesse claire, des preuves visibles, un bon CTA et un parcours sans friction.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Faut-il une page dédiée pour générer plus de devis ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Très souvent oui. Une page dédiée à une offre, à une zone ou à une campagne convertit mieux qu'une page générique de site vitrine.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Quel est le premier point à corriger ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Commencez par le premier écran : titre, sous-titre, preuve, CTA. Si ce bloc n'est pas clair, le reste de la page compensera rarement.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </div>
);

export default ArticleSiteInternetRenovationErreurs;
