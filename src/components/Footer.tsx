import { NAV_LINKS, CONTACT_CONFIG } from '../config';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__top">
          {/* Brand */}
          <div className="footer__brand">
            <a href="/" className="footer__logo" aria-label="JuriVault — Accueil">
              <span className="footer__logo-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                  <path d="M14 2L4 6.5V14C4 19.25 8.4 24.17 14 25.67C19.6 24.17 24 19.25 24 14V6.5L14 2Z"
                    stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
                  <path d="M9.5 14l3 3 6-6" stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="footer__logo-name">JuriVault</span>
            </a>
            <p className="footer__brand-desc">
              Application juridique desktop intégrant une intelligence artificielle 
              exécutée localement. Conçue pour les cabinets d'avocats.
            </p>
            {CONTACT_CONFIG.email && (
              <a
                href={`mailto:${CONTACT_CONFIG.email}`}
                className="footer__contact-email"
                aria-label={`Contacter JuriVault par e-mail : ${CONTACT_CONFIG.email}`}
              >
                {CONTACT_CONFIG.email}
              </a>
            )}
          </div>

          {/* Links */}
          <nav className="footer__nav" aria-label="Navigation du pied de page">
            <div className="footer__nav-col">
              <h3 className="footer__nav-title">Produit</h3>
              <ul>
                {NAV_LINKS.map(link => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="footer__nav-link"
                      onClick={(e) => {
                        e.preventDefault();
                        const el = document.querySelector(link.href);
                        if (el) {
                          const top = el.getBoundingClientRect().top + window.scrollY - 80;
                          window.scrollTo({ top, behavior: 'smooth' });
                        }
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer__nav-col">
              <h3 className="footer__nav-title">Légal</h3>
              <ul>
                <li>
                  <a href="/mentions-legales" className="footer__nav-link">
                    Mentions légales
                    <span className="footer__placeholder" aria-label="À compléter">[à compléter]</span>
                  </a>
                </li>
                <li>
                  <a href="/confidentialite" className="footer__nav-link">
                    Politique de confidentialité
                    <span className="footer__placeholder" aria-label="À compléter">[à compléter]</span>
                  </a>
                </li>
                <li>
                  <a href="/conditions" className="footer__nav-link">
                    Conditions d'utilisation
                    <span className="footer__placeholder" aria-label="À compléter">[à compléter]</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <hr className="divider" />

        <div className="footer__bottom">
          <p className="footer__legal">
            © {year} JuriVault.
            {CONTACT_CONFIG.legalEntity && ` ${CONTACT_CONFIG.legalEntity}.`}
            {CONTACT_CONFIG.siret && ` SIRET\u00a0: ${CONTACT_CONFIG.siret}.`}
            {' '}Tous droits réservés.
          </p>
          <p className="footer__disclaimer">
            JuriVault est un logiciel d'assistance documentaire et ne constitue pas un service de conseil juridique.
          </p>
        </div>
      </div>
    </footer>
  );
}
