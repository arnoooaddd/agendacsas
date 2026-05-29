import { Link } from "react-router-dom";
import { AlertTriangle, DollarSign, Building2, Lightbulb, TrendingUp, BadgeCheck, ChartColumn } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionCTA from "@/components/SectionCTA";

const ArticleAcheterLeadsPlateformesDevisBtp2026 = () => (
  <div className="prose-custom">
    <section className="mb-10">
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium leading-relaxed mb-3">
          Les plateformes de mise en relation promettent un flux régulier de demandes de devis. Mais derrière l'abonnement mensuel se cachent des coûts bien plus élevés que prévu pour les entreprises du BTP.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-0">
          Entre <strong>leads partagés avec la concurrence</strong>, qualité aléatoire des demandes et dépendance à un intermédiaire, de nombreux dirigeants de rénovation découvrent que ces plateformes ne sont pas la solution miracle espérée. Voici comment évaluer leur vrai retour sur investissement et quelles alternatives construire.
        </p>
      </div>
    </section>

    <section className="mb-12 lg:hidden">
      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <h2 className="text-lg font-bold text-foreground font-display mb-4">Sommaire</h2>
        <nav>
          <ol className="space-y-2 text-muted-foreground text-sm">
            <li><a href="#attrait-plateformes" className="hover:text-primary transition-colors">1. Pourquoi les plateformes attirent les entreprises</a></li>
            <li><a href="#cout-reel" className="hover:text-primary transition-colors">2. Le vrai coût des leads achetés</a></li>
            <li><a href="#risques-dependance" className="hover:text-primary transition-colors">3. Les risques de la dépendance</a></li>
            <li><a href="#quand-utiles" className="hover:text-primary transition-colors">4. Quand les plateformes peuvent être utiles</a></li>
            <li><a href="#alternatives-durables" className="hover:text-primary transition-colors">5. Construire des alternatives durables</a></li>
            <li><a href="#calcul-rentabilite" className="hover:text-primary transition-colors">6. Calculer la rentabilité réelle</a></li>
            <li><a href="#cta-plateformes" className="hover:text-primary transition-colors">7. Reprendre le contrôle de votre acquisition</a></li>
            <li><a href="#faq-plateformes" className="hover:text-primary transition-colors">8. Questions fréquentes</a></li>
          </ol>
        </nav>
      </div>
    </section>

    <section className="mb-12" id="attrait-plateformes">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Building2 size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Pourquoi les plateformes de devis attirent les entreprises de rénovation
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Le principe est séduisant : vous créez un profil, renseignez vos zones d'intervention et vos spécialités (isolation, toiture, menuiserie, chauffage…), et la plateforme vous envoie des demandes de devis de clients situés dans votre secteur. Pas de publicité à gérer, pas de site internet à optimiser, des leads qui arrivent « clé en main ».
      </p>
      <p className="text-muted-foreground mb-4">
        Des plateformes comme 123Devis, Travaux.com ou MesDépanneurs.fr ont connu une forte croissance en capitalisant sur ce besoin immédiat de demandes commerciales. Pour une entreprise de rénovation qui cherche à remplir son carnet de commandes rapidement, l'offre semble pertinente.
      </p>
      <p className="text-muted-foreground mb-4">
        Le piège, c'est que le coût réel d'un lead acheté sur ces plateformes est souvent masqué par des abonnements mensuels et des commissions par devis, sans aucune garantie de transformation en chantier signé.
      </p>
    </section>

    <section className="mb-12" id="cout-reel">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <DollarSign size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Le vrai coût des leads achetés sur les plateformes
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Pour une entreprise de rénovation, le coût d'un lead sur une plateforme de devis ne se limite pas à l'abonnement ou à la commission par mise en relation. Il faut intégrer plusieurs facteurs cachés.
      </p>

      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card">
        <p className="font-semibold text-foreground mb-3">Les coûts réels d'un lead sur plateforme de devis :</p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" /><strong>Le coût d'abonnement mensuel</strong> : de 50 € à plusieurs centaines d'euros selon les plateformes et les packs</li>
          <li className="flex items-start gap-2"><BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" /><strong>La commission par devis</strong> : certaines plateformes prélèvent un pourcentage du montant du chantier si vous signez</li>
          <li className="flex items-start gap-2"><BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" /><strong>Le temps passé à qualifier</strong> : toutes les demandes ne sont pas sérieuses. Vous passez du temps à répondre à des prospects qui comparent dix devis ou n'ont pas le budget</li>
          <li className="flex items-start gap-2"><BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" /><strong>La concurrence directe</strong> : le même lead est souvent envoyé à 3 à 5 entreprises simultanément. Vous êtes en compétition sur le prix dès le départ</li>
          <li className="flex items-start gap-2"><BadgeCheck size={16} className="text-primary mt-0.5 shrink-0" /><strong>L'absence de fidélisation</strong> : le client appartient à la plateforme, pas à vous. Vous ne pouvez pas le recontacter directement pour des travaux futurs</li>
        </ul>
      </div>

      <p className="text-muted-foreground mt-6 mb-4">
        Concrètement, si vous payez 200 € par mois d'abonnement et recevez 10 leads, dont 2 débouchent sur un devis et 1 sur un chantier signé à 10 000 €, votre coût d'acquisition client est de 200 € — mais seulement si le chantier est rentable après toutes les commissions.
      </p>
    </section>

    <section className="mb-12" id="risques-dependance">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <AlertTriangle size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Les risques cachés de la dépendance aux plateformes
        </h2>
      </div>

      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 mb-6">
        <p className="text-foreground font-medium mb-2">Le piège à éviter :</p>
        <p className="text-muted-foreground mb-0">Plus vous dépendez d'une plateforme, plus vous perdez le contrôle de votre <strong>acquisition client</strong>. Si la plateforme augmente ses tarifs, modifie ses algorithmes ou perd en popularité, votre flux de demandes s'effondre du jour au lendemain. Vous passez des mois à remplir le portefeuille d'un intermédiaire, pas le vôtre.</p>
      </div>

      <p className="text-muted-foreground mb-4">Les autres risques à connaître :</p>

      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <ul className="space-y-2 text-muted-foreground">
          <li><strong>Course au moins-disant</strong> : quand 5 entreprises reçoivent la même demande, celle avec le devis le moins cher a statistiquement plus de chances de signer. Cela tire les marges vers le bas</li>
          <li><strong>Impossibilité de construire une marque</strong> : sur une plateforme, vous êtes interchangeable. Le client choisit sur le prix et la note, pas sur votre positionnement</li>
          <li><strong>Qualité aléatoire des leads</strong> : certaines périodes de l'année sont très actives, d'autres beaucoup moins. Vous payez pour un volume qui fluctue</li>
          <li><strong>Pas de donnée client exploitable</strong> : la plateforme garde le contrôle de la relation. Vous ne pouvez pas nourrir votre CRM, faire du reciblage publicitaire ou du marketing de fidélisation</li>
        </ul>
      </div>
    </section>

    <section className="mb-12" id="quand-utiles">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Lightbulb size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Quand les plateformes de devis peuvent-elles être utiles ?
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Malgré ces limites, les plateformes de mise en relation ne sont pas totalement inutiles. Dans certaines situations, elles peuvent servir de canal d'appoint.
      </p>

      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card">
        <p className="font-semibold text-foreground mb-3">Quand une plateforme de devis peut avoir du sens :</p>
        <ul className="space-y-2 text-muted-foreground">
          <li>• En phase de <strong>démarrage</strong> : quand vous n'avez pas encore de notoriété locale et avez besoin de vos premiers chantiers</li>
          <li>• En <strong>période creuse</strong> : pour compléter votre pipeline quand les demandes organiques sont insuffisantes</li>
          <li>• Pour tester un <strong>nouveau marché géographique</strong> : avant d'investir dans une stratégie marketing locale complète</li>
          <li>• Pour un <strong>métier très standardisé</strong> : certains petits chantiers répétitifs peuvent être rentables même avec une commission</li>
        </ul>
      </div>

      <p className="text-muted-foreground mt-6 mb-4">
        Mais dans tous les cas, une plateforme ne doit jamais être votre unique source de clients. Elle doit rester un complément temporaire ou marginal d'une stratégie d'acquisition maîtrisée.
      </p>
    </section>

    <section className="mb-12" id="alternatives-durables">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
          <TrendingUp size={20} className="text-secondary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Construire des alternatives durables pour générer des leads
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Les entreprises de rénovation qui ne veulent pas dépendre d'intermédiaires disposent de plusieurs leviers pour bâtir un système d'acquisition client solide et pérenne.
      </p>

      <div className="space-y-5">
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">1. Un site internet optimisé pour la conversion</h3>
          <p className="text-muted-foreground">Contrairement à un profil sur une plateforme, votre site vous appartient. Vous contrôlez le message, le design, le parcours client. Un site bien structuré avec des pages métiers, des photos de chantier et un formulaire de contact simple génère des demandes directes, sans commission et sans concurrence affichée.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">2. Le référencement local (SEO)</h3>
          <p className="text-muted-foreground">Google reste le premier point de départ des particuliers qui cherchent un professionnel de confiance. Être bien positionné dans les résultats locaux et sur Google Maps vous apporte des leads gratuits, qualifiés et récurrents. L'investissement est sur le temps long, mais le retour est durable.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">3. La publicité maîtrisée (Google Ads, Meta Ads)</h3>
          <p className="text-muted-foreground">Avec les bons réglages, la publicité en ligne peut être plus rentable qu'une plateforme de devis. Vous choisissez vos mots-clés, votre zone géographique, votre budget. Vous pilotez, et surtout, vous récupérez les données des prospects pour les recontacter plus tard.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">4. Le bouche-à-oreille structuré</h3>
          <p className="text-muted-foreground">Le meilleur lead reste celui qui vient d'une recommandation. En mettant en place un programme de parrainage et en sollicitant systématiquement les avis Google, vous transformez vos clients satisfaits en ambassadeurs de votre entreprise.</p>
        </div>
        <div className="bg-muted/50 border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground font-display mb-2">5. Un CRM et un suivi commercial structuré</h3>
          <p className="text-muted-foreground">Beaucoup d'entreprises de rénovation ne relancent pas leurs prospects passés. Un CRM bien utilisé permet de suivre chaque demande, de relancer les devis en attente et de proposer des visites de contrôle ou des travaux complémentaires aux anciens clients. C'est un gisement de leads souvent négligé.</p>
        </div>
      </div>
    </section>

    <section className="mb-12" id="calcul-rentabilite">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <ChartColumn size={20} className="text-accent" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Comment évaluer si vos leads sur plateforme sont rentables
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Avant de couper ou de continuer un abonnement à une plateforme, prenez le temps de calculer le retour sur investissement réel. Voici la méthode à suivre.
      </p>

      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card">
        <p className="font-semibold text-foreground mb-3">Méthode de calcul du coût d'acquisition client réel :</p>
        <ul className="space-y-2 text-muted-foreground">
          <li>1. Additionnez tous les coûts liés à la plateforme sur un mois (abonnement + commissions + temps de qualification estimé)</li>
          <li>2. Comptez le nombre de chantiers signés issus exclusivement de cette plateforme</li>
          <li>3. Divisez le coût total par le nombre de chantiers signés</li>
          <li>4. Comparez ce résultat avec votre coût d'acquisition moyen sur les autres canaux</li>
          <li>5. Si le coût est plus élevé que vos autres sources, la plateforme détruit de la valeur, elle n'en crée pas</li>
        </ul>
      </div>

      <p className="text-muted-foreground mt-6 mb-4">
        Ce calcul simple permet de prendre une décision objective, sans se laisser bercer par la promesse de « leads faciles ».
      </p>
    </section>

    <section className="mb-16" id="cta-plateformes">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-card">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-4">
          Reprendre le contrôle de votre acquisition client
        </h2>
        <p className="text-muted-foreground mb-4">
          Les plateformes de devis ne sont pas un ennemi à diaboliser, mais elles ne doivent jamais être le pilier de votre stratégie d'acquisition. Elles sont un canal d'appoint, utile dans certaines circonstances, mais structurellement limité.
        </p>
        <p className="text-muted-foreground mb-4">
          Les entreprises de rénovation qui réussissent sur la durée sont celles qui investissent dans leurs propres actifs : un site internet professionnel, une présence locale optimisée, une marque reconnue et un système commercial qui leur appartient.
        </p>
        <p className="text-muted-foreground mb-6">
          Vous souhaitez construire un vrai système d'acquisition client pour votre entreprise de rénovation ? Découvrez notre offre <Link to="/prise-rendez-vous" className="text-primary hover:underline">prise de rendez-vous</Link> pour les entreprises du bâtiment.
        </p>
        <SectionCTA />
      </div>
    </section>

    <section className="mb-12" id="faq-plateformes">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">Questions fréquentes</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="faq-1" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Quel est le coût moyen d'un lead sur une plateforme de devis BTP ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Les prix varient de 20 € à plus de 100 € par lead selon la plateforme, la zone géographique et le métier. Certaines plateformes facturent aussi un abonnement mensuel fixe, qui peut aller de 50 € à 500 €. En intégrant le temps de qualification, le coût réel par chantier signé dépasse souvent 300 à 500 €.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Vaut-il mieux une plateforme de devis ou Google Ads pour une entreprise de rénovation ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Google Ads offre plus de contrôle : vous choisissez vos mots-clés, votre budget, votre ciblage géographique. Vous récupérez les données des prospects. L'investissement initial est plus élevé en compétence et en réglages, mais le potentiel de rentabilité est nettement supérieur à long terme par rapport à une plateforme de devis.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Comment sortir de la dépendance aux plateformes de devis ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Progressivement. Commencez par investir dans votre site internet et votre référencement local. Ajoutez une campagne publicitaire maîtrisée. Mettez en place un CRM pour suivre et relancer vos prospects. Une fois que ces canaux génèrent un flux régulier, réduisez votre abonnement à la plateforme sans risque pour votre trésorerie.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-4" className="border-border">
          <AccordionTrigger className="text-left text-foreground hover:no-underline">
            Faut-il une agence pour remplacer une plateforme de devis par une stratégie d'acquisition complète ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            C'est fortement recommandé. Une agence spécialisée comme Agendac construit un système d'acquisition sur mesure (SEO, publicité, site, CRM) qui remplace avantageusement les plateformes génériques, avec un ROI généralement meilleur dès les premiers mois.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </div>
);

export default ArticleAcheterLeadsPlateformesDevisBtp2026;
