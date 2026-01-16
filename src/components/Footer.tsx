import { Youtube, Linkedin, Heart, Mail, ExternalLink, MessageCircle, Calendar } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect } from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    // Load Typeform script
    const existingScript = document.querySelector('script[src="//embed.typeform.com/next/embed.js"]');
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "//embed.typeform.com/next/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }

    // Load Elfsight for language translator
    const existingElfsight = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]');
    if (!existingElfsight) {
      const elfsightScript = document.createElement("script");
      elfsightScript.src = "https://elfsightcdn.com/platform.js";
      elfsightScript.async = true;
      document.body.appendChild(elfsightScript);
    }
  }, []);

  return (
    <footer id="contact" className="relative overflow-hidden border-t border-border/30 bg-muted/30">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh opacity-30" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Main Content - Typeform left, Contact info right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Typeform */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Entrer en <span className="text-gradient">contact</span>
            </h3>
            <div 
              data-tf-live="01JYVP6HGCMDWP8MECVSYMTB5P"
              className="bg-white rounded-2xl shadow-lg overflow-hidden min-h-[400px]"
            />
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Nous <span className="text-gradient-warm">contacter</span>
            </h3>
            
            <div className="space-y-4">
              {/* Email */}
              <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Button asChild variant="outline" size="lg" className="w-full justify-start bg-white/50 hover:bg-white">
                  <a href="mailto:contact@agendac.fr" className="flex items-center gap-3">
                    <Mail size={20} className="text-primary" />
                    <span className="font-medium">contact@agendac.fr</span>
                  </a>
                </Button>
              </motion.div>

              {/* Booking */}
              <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Button asChild variant="secondary" size="lg" className="w-full justify-start glow-secondary">
                  <a 
                    href="https://api.leadconnectorhq.com/widget/booking/57xP6cJ3bacw7ZTpsRXe" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3"
                  >
                    <Calendar size={20} />
                    <span className="font-medium">Réserver un appel visio</span>
                    <ExternalLink size={16} className="ml-auto" />
                  </a>
                </Button>
              </motion.div>

              {/* WhatsApp */}
              <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Button asChild variant="outline" size="lg" className="w-full justify-start bg-[#25D366]/10 hover:bg-[#25D366]/20 border-[#25D366]/30">
                  <a 
                    href="https://wa.me/33749410774" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3"
                  >
                    <MessageCircle size={20} className="text-[#25D366]" />
                    <span className="font-medium text-foreground">Nous contacter sur WhatsApp</span>
                    <ExternalLink size={16} className="ml-auto text-muted-foreground" />
                  </a>
                </Button>
              </motion.div>

              {/* LinkedIn */}
              <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Button asChild variant="outline" size="lg" className="w-full justify-start bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 border-[#0A66C2]/30">
                  <a 
                    href="https://www.linkedin.com/company/agendac-sas/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3"
                  >
                    <Linkedin size={20} className="text-[#0A66C2]" />
                    <span className="font-medium text-foreground">Suivez-nous sur LinkedIn</span>
                    <ExternalLink size={16} className="ml-auto text-muted-foreground" />
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Info */}
        <div className="border-t border-border/30 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xl font-bold text-foreground block mb-2">
                Agendac
              </span>
              <p className="text-sm text-muted-foreground">
                L'accélérateur de croissance N°1 des sociétés de rénovation de l'habitat.
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center justify-center gap-3"
            >
              <motion.a
                whileHover={{ y: -5, scale: 1.1 }}
                href="https://www.youtube.com/@agendac-fr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-[#FF0000] transition-all duration-300"
              >
                <Youtube size={18} />
              </motion.a>
              <motion.a
                whileHover={{ y: -5, scale: 1.1 }}
                href="https://www.linkedin.com/company/agendac-sas/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-[#0A66C2] transition-all duration-300"
              >
                <Linkedin size={18} />
              </motion.a>
              <motion.a
                whileHover={{ y: -5, scale: 1.1 }}
                href="https://www.facebook.com/agendac.fr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-[#1877F2] transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ y: -5, scale: 1.1 }}
                href="https://www.instagram.com/agendac.fr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-[#E4405F] transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ y: -5, scale: 1.1 }}
                href="https://x.com/agendac_sas"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </motion.a>
            </motion.div>

            {/* Legal - Fixed for mobile centering */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center md:text-right"
            >
              <ul className="space-y-1 text-muted-foreground text-sm">
                <li>SIREN : 930 805 981</li>
                <li>Capital Social : 10 000 €</li>
                <li className="text-xs">Une société du groupe Adornier LLC</li>
              </ul>
            </motion.div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pt-6 border-t border-border/20">
            <p className="text-muted-foreground text-sm flex items-center gap-1 text-center lg:text-left">
              © {currentYear} Agendac SAS tous droits réservés. Fait avec <Heart size={14} className="text-secondary animate-pulse" /> en France.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a 
                href="https://agendacsas.fr/mentions-legales" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Mentions légales
              </a>
              <a 
                href="https://agendacsas.fr/confidentialitc3a9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Politique de confidentialité
              </a>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-border/20">
            <p className="text-xs text-muted-foreground/70 text-center max-w-4xl mx-auto leading-relaxed">
              Ce site ne fait pas partie du site Web de Facebook, Instagram ou de META Inc. De plus, ce site n'est PAS approuvé par Facebook, ni Instagram de quelque manière que ce soit. FACEBOOK et INSTAGRAM sont des marques commerciales de META, Inc.
            </p>
          </div>

          {/* Elfsight Language Translator */}
          <div className="mt-6 flex justify-center">
            <div 
              className="elfsight-app-e948bbb4-7d30-4bcc-951a-aa1f0959fa52" 
              data-elfsight-app-lazy
              style={{ minWidth: '90px', minHeight: '40px' }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;