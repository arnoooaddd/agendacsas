import { Link } from "react-router-dom";
import { Eye, Target, RefreshCw, Users, Layers, AlertTriangle, CheckCircle, BarChart3 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionCTA from "@/components/SectionCTA";
import facebookLogo from "@/assets/logos/facebook.png";
import googleAdsLogo from "@/assets/logos/google-ads.png";
import youtubeLogo from "@/assets/logos/youtube.png";
import tiktokLogo from "@/assets/logos/tiktok.png";
import linkedinLogo from "@/assets/logos/linkedin.png";

const ArticleRetargetingProspectsRenovation = () => (
  <div className="prose-custom">
    {/* Résumé */}
    <section className="mb-10">
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <p className="text-foreground font-medium leading-relaxed">
          Entre <strong>80 et 95 % des visiteurs</strong> de votre site ne convertissent pas au premier contact. Sans <em><strong>retargeting</strong></em>, ces prospects partent chez vos concurrents. Découvrez comment mettre en place un système de reciblage multi-canal pour récupérer vos leads perdus et transformer votre <em><strong>acquisition clients rénovation</strong></em> en machine prévisible.
        </p>
      </div>
    </section>

    {/* Sommaire */}
    <section className="mb-12">
      <div className="bg-muted/50 border border-border rounded-xl p-6">
        <h2 className="text-lg font-bold text-foreground font-display mb-4">📑 Sommaire</h2>
        <nav>
          <ol className="space-y-2 text-muted-foreground text-sm">
            <li><a href="#pourquoi-perdez-leads" className="hover:text-primary transition-colors">1. Pourquoi vous perdez des leads sans le savoir</a></li>
            <li><a href="#role-pixels" className="hover:text-primary transition-colors">2. Le rôle des pixels (data = performance)</a></li>
            <li><a href="#comment-retargeting" className="hover:text-primary transition-colors">3. Comment fonctionne le retargeting concrètement</a></li>
            <li><a href="#cas-concret-retargeting" className="hover:text-primary transition-colors">4. Cas concret en rénovation</a></li>
            <li><a href="#audiences-prioritaires" className="hover:text-primary transition-colors">5. Les audiences à recibler en priorité</a></li>
            <li><a href="#multi-canal" className="hover:text-primary transition-colors">6. L'effet levier du multi-canal</a></li>
            <li><a href="#erreurs-retargeting" className="hover:text-primary transition-colors">7. Les erreurs qui détruisent vos campagnes</a></li>
            <li><a href="#faq-retargeting" className="hover:text-primary transition-colors">8. Questions fréquentes</a></li>
          </ol>
        </nav>
      </div>
    </section>

    {/* Section 1 */}
    <section className="mb-12" id="pourquoi-perdez-leads">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
          <Eye size={20} className="text-destructive" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Pourquoi vous perdez des leads sans le savoir
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Un prospect clique sur votre pub <em><strong>Google Ads rénovation</strong></em>, visite votre site… et ne convertit pas.
      </p>

      <p className="text-foreground font-medium mb-4">
        👉 Dans <strong>90 % des cas</strong>, ce n'est pas un refus.
      </p>

      <ul className="space-y-3 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Il n'est <strong>pas encore prêt</strong></li>
        <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Il lui manque une information</li>
        <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Il compare avec d'autres entreprises</li>
      </ul>

      <p className="text-foreground font-semibold">
        Sans système de reciblage → <strong>il disparaît</strong>. Et c'est votre concurrent qui signe.
      </p>
    </section>

    {/* Section 2 */}
    <section className="mb-12" id="role-pixels">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Target size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Le rôle des pixels : la base de votre système
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Un <strong>pixel publicitaire</strong> est un outil de tracking installé sur votre site. C'est votre <strong>base de données cachée</strong> — et le fondement de toute <em><strong>stratégie marketing rénovation</strong></em> performante.
      </p>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">Disponible sur toutes les plateformes</h3>

      <ul className="space-y-3 text-muted-foreground mb-6">
        <li className="flex items-center gap-3"><img src={facebookLogo} alt="Facebook" className="w-5 h-5 object-contain" /> <em><strong>Facebook Ads rénovation</strong></em> (Meta Pixel)</li>
        <li className="flex items-center gap-3"><img src={googleAdsLogo} alt="Google Ads" className="w-5 h-5 object-contain" /> <em><strong>Google Ads</strong></em> (balise de conversion)</li>
        <li className="flex items-center gap-3"><img src={youtubeLogo} alt="YouTube" className="w-5 h-5 object-contain" /> YouTube Ads</li>
        <li className="flex items-center gap-3"><img src={tiktokLogo} alt="TikTok" className="w-5 h-5 object-contain" /> TikTok Ads</li>
        <li className="flex items-center gap-3"><img src={linkedinLogo} alt="LinkedIn" className="w-5 h-5 object-contain" /> LinkedIn Ads</li>
      </ul>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">Ce qu'il fait concrètement</h3>

      <p className="text-muted-foreground mb-2">
        Il <strong>enregistre chaque visiteur</strong>, associe sa navigation à une plateforme, et vous permet de le <strong>recibler ensuite</strong> avec des publicités spécifiques.
      </p>

      <p className="text-foreground font-semibold mt-4">
        👉 Sans pixel installé, vous jetez littéralement de l'argent par les fenêtres.
      </p>
    </section>

    {/* Section 3 */}
    <section className="mb-12" id="comment-retargeting">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <RefreshCw size={20} className="text-accent-foreground" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Comment fonctionne le retargeting concrètement
        </h2>
      </div>

      <p className="text-muted-foreground mb-6">
        Le processus est simple. Trois étapes suffisent pour transformer un visiteur perdu en client signé.
      </p>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">Étape 1 — Le prospect arrive</h3>
      <p className="text-muted-foreground mb-2">
        Via Google, une pub, du SEO… peu importe. Le pixel <strong>enregistre son passage</strong>.
      </p>

      <h3 className="text-lg font-bold text-foreground font-display mt-6 mb-3">Étape 2 — Il repart sans convertir</h3>
      <p className="text-muted-foreground mb-2">
        Il n'a pas rempli de formulaire. Mais <strong>vous avez sa trace</strong> dans vos audiences.
      </p>

      <h3 className="text-lg font-bold text-foreground font-display mt-6 mb-3">Étape 3 — Vous le reciblez</h3>
      <p className="text-muted-foreground mb-4">
        Sur Facebook, Instagram, YouTube — avec des publicités conçues pour convertir :
      </p>

      <ul className="space-y-2 text-muted-foreground mb-4">
        <li className="flex items-start gap-2"><span className="text-primary mt-1">✅</span> Témoignages clients</li>
        <li className="flex items-start gap-2"><span className="text-primary mt-1">✅</span> Objections traitées</li>
        <li className="flex items-start gap-2"><span className="text-primary mt-1">✅</span> Preuves (avant/après, chantiers)</li>
        <li className="flex items-start gap-2"><span className="text-primary mt-1">✅</span> Offre claire et différenciée</li>
      </ul>

      <p className="text-foreground font-semibold">
        👉 Objectif : déclencher la conversion que vous aviez manquée.
      </p>
    </section>

    {/* CTA milieu */}
    <SectionCTA />

    {/* Section 4 */}
    <section className="mb-12" id="cas-concret-retargeting">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <BarChart3 size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Cas concret en rénovation
        </h2>
      </div>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">La situation</h3>
      <p className="text-muted-foreground mb-6">
        Un prospect cherche <em>"extension maison prix"</em> sur Google. Il clique sur votre site, consulte vos services… puis hésite et <strong>quitte la page</strong>.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-5">
          <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <AlertTriangle size={16} className="text-destructive" /> Sans retargeting
          </h4>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li>• Il oublie votre entreprise</li>
            <li>• Il voit la pub d'un concurrent</li>
            <li>• Il signe ailleurs</li>
          </ul>
          <p className="text-destructive font-medium mt-3 text-sm">👉 Lead perdu = argent perdu</p>
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
          <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <CheckCircle size={16} className="text-primary" /> Avec retargeting
          </h4>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li>• Il voit vos vidéos sur Facebook</li>
            <li>• Vous montrez des chantiers réalisés</li>
            <li>• Vous répondez à ses objections</li>
          </ul>
          <p className="text-primary font-medium mt-3 text-sm">👉 Il revient → demande un devis</p>
        </div>
      </div>

      <p className="text-foreground font-medium">
        C'est exactement ce que font les entreprises qui maîtrisent leur <em><strong>acquisition clients rénovation</strong></em>.
      </p>
    </section>

    {/* Section 5 */}
    <section className="mb-12" id="audiences-prioritaires">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/50 flex items-center justify-center">
          <Users size={20} className="text-foreground" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Les audiences à recibler en priorité
        </h2>
      </div>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">1. Visiteurs du site</h3>
      <p className="text-muted-foreground mb-2">
        Trafic <em><strong>Google Ads rénovation</strong></em>, SEO, direct — ce sont vos prospects les plus chauds.
      </p>
      <p className="text-foreground font-medium mb-6">👉 Priorité n°1.</p>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">2. Clics sans conversion</h3>
      <p className="text-muted-foreground mb-2">
        Ils ont visité votre page formulaire ou landing page mais <strong>n'ont pas converti</strong>.
      </p>
      <p className="text-foreground font-medium mb-6">👉 Très chaud → conversion rapide possible.</p>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">3. Engagés réseaux sociaux</h3>
      <ul className="space-y-2 text-muted-foreground mb-2">
        <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Vues de vidéos</li>
        <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Interactions (likes, commentaires)</li>
        <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> Clics sur vos pubs</li>
      </ul>
      <p className="text-foreground font-medium mb-6">👉 À faire monter en maturité avec du contenu ciblé.</p>

      <h3 className="text-lg font-bold text-foreground font-display mb-3">4. Leads non transformés</h3>
      <p className="text-muted-foreground mb-2">
        Prospects qui n'ont pas répondu ou n'ont pas signé. <strong>Énorme potentiel</strong> de récupération.
      </p>
      <p className="text-foreground font-medium">
        👉 Le retargeting les remet dans votre <em><strong>tunnel de vente rénovation</strong></em>.
      </p>
    </section>

    {/* Section 6 */}
    <section className="mb-12" id="multi-canal">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Layers size={20} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          L'effet levier du multi-canal
        </h2>
      </div>

      <p className="text-muted-foreground mb-4">
        Le retargeting prend tout son sens quand vous <strong>connectez plusieurs plateformes</strong> :
      </p>

      <ul className="space-y-3 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><span className="text-primary mt-1 font-bold">→</span> <strong>Google</strong> capte la demande existante</li>
        <li className="flex items-start gap-2"><span className="text-primary mt-1 font-bold">→</span> <strong>Meta</strong> convainc avec du contenu visuel</li>
        <li className="flex items-start gap-2"><span className="text-primary mt-1 font-bold">→</span> <strong>YouTube</strong> rassure avec des vidéos de chantiers</li>
      </ul>

      <p className="text-foreground font-medium mb-4">
        Vous créez un <strong>écosystème</strong> où votre marque est omniprésente. Le prospect vous voit partout — et finit par convertir.
      </p>

      <p className="text-muted-foreground">
        C'est le principe même d'une <em><strong>machine à leads rénovation</strong></em> : chaque canal nourrit les autres, et le <em><strong>coût acquisition client rénovation</strong></em> baisse à mesure que votre système mûrit.
      </p>
    </section>

    {/* Section 7 — Erreurs */}
    <section className="mb-12" id="erreurs-retargeting">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
          <AlertTriangle size={20} className="text-destructive" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display">
          Les erreurs qui détruisent vos campagnes
        </h2>
      </div>

      <ul className="space-y-3 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><span className="text-destructive mt-1">❌</span> <strong>Ne pas installer de pixel</strong> — pas de data, pas de reciblage</li>
        <li className="flex items-start gap-2"><span className="text-destructive mt-1">❌</span> <strong>Recibler tout le monde avec le même message</strong> — zéro personnalisation</li>
        <li className="flex items-start gap-2"><span className="text-destructive mt-1">❌</span> <strong>Ne pas traiter les objections</strong> dans vos pubs de retargeting</li>
        <li className="flex items-start gap-2"><span className="text-destructive mt-1">❌</span> <strong>Utiliser une seule plateforme</strong> au lieu d'un écosystème multi-canal</li>
      </ul>

      <p className="text-foreground font-semibold">
        👉 Résultat : budget publicitaire gaspillé et <em><strong>campagnes publicitaires rénovation</strong></em> inefficaces.
      </p>
    </section>

    {/* À faire maintenant */}
    <section className="mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-display mb-6">
        🎯 Ce que vous devez faire maintenant
      </h2>

      <p className="text-muted-foreground mb-4">
        Pour améliorer votre <em><strong>génération de leads rénovation</strong></em> :
      </p>

      <ul className="space-y-3 text-muted-foreground mb-6">
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" /> <strong>Installer les pixels</strong> sur toutes les plateformes</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" /> <strong>Créer des audiences personnalisées</strong> par niveau de maturité</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" /> <strong>Lancer des campagnes de retargeting</strong> avec des messages adaptés</li>
        <li className="flex items-start gap-2"><CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" /> <strong>Connecter Google + Meta + YouTube</strong> pour un système complet</li>
      </ul>

      <p className="text-muted-foreground">
        👉 Pour comprendre quel canal activer en premier, consultez notre article <Link to="/blog/plateforme-publicite-renovation" className="text-primary hover:underline font-medium">sur quelle plateforme lancer de la publicité en rénovation</Link>.
      </p>
    </section>

    {/* CTA fin */}
    <SectionCTA />

    {/* Articles liés */}
    <section className="mb-12">
      <h2 className="text-xl font-bold text-foreground font-display mb-4">📚 Articles liés</h2>
      <ul className="space-y-2">
        <li>
          <Link to="/blog/google-ads-vs-facebook-ads-renovation" className="text-primary hover:underline">
            Google Ads vs Facebook Ads rénovation : lequel choisir ?
          </Link>
        </li>
        <li>
          <Link to="/blog/cout-publicite-renovation-habitat" className="text-primary hover:underline">
            Combien coûte la publicité en rénovation habitat ?
          </Link>
        </li>
        <li>
          <Link to="/blog/niveaux-qualification-prospect-renovation" className="text-primary hover:underline">
            Les 4 niveaux de qualification d'un prospect en rénovation
          </Link>
        </li>
        <li>
          <Link to="/resultats-clients-agendac" className="text-primary hover:underline">
            Voir nos études de cas clients →
          </Link>
        </li>
      </ul>
    </section>

    {/* FAQ */}
    <section className="mb-8" id="faq-retargeting">
      <h2 className="text-2xl font-bold text-foreground font-display mb-6">❓ Questions fréquentes</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="faq-1">
          <AccordionTrigger className="text-left font-semibold">
            Qu'est-ce que le retargeting en rénovation ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Le retargeting consiste à <strong>recibler les visiteurs</strong> de votre site qui n'ont pas converti, en leur montrant des publicités personnalisées sur Facebook, Instagram, YouTube ou Google. C'est un levier clé de l'<em>acquisition clients rénovation</em> pour récupérer les prospects perdus.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2">
          <AccordionTrigger className="text-left font-semibold">
            Combien coûte une campagne de retargeting ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Le retargeting est généralement <strong>beaucoup moins cher</strong> que les campagnes d'acquisition classiques. Avec un budget de 200 à 500 €/mois, vous pouvez déjà obtenir des résultats significatifs. Le <em>coût acquisition client rénovation</em> baisse considérablement grâce au reciblage.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3">
          <AccordionTrigger className="text-left font-semibold">
            Faut-il utiliser Google Ads ou Facebook Ads pour le retargeting ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Idéalement <strong>les deux</strong>. <em>Google Ads rénovation</em> capte la demande existante et <em>Facebook Ads rénovation</em> convainc avec du contenu visuel. Combiner les deux plateformes crée un écosystème de conversion puissant.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-4">
          <AccordionTrigger className="text-left font-semibold">
            Comment une agence marketing rénovation peut-elle m'aider ?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Une <em>agence marketing rénovation</em> spécialisée installe les pixels, configure les audiences, crée les publicités adaptées à chaque niveau de maturité, et optimise en continu. Chez <Link to="/" className="text-primary hover:underline">Agendac</Link>, nous construisons des <em>systèmes d'acquisition</em> complets incluant le retargeting multi-canal.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </div>
);

export default ArticleRetargetingProspectsRenovation;
