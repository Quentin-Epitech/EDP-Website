import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../config';
import './Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`} role="banner">
      <div className="container header__inner">
        {/* Logo */}
        <a href="/" className="header__logo" aria-label="JuriVault — Accueil">
          <span className="header__logo-icon" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 2L4 6.5V14C4 19.25 8.4 24.17 14 25.67C19.6 24.17 24 19.25 24 14V6.5L14 2Z"
                stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
              <path d="M9.5 14l3 3 6-6" stroke="currentColor" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <span className="header__logo-name">JuriVault</span>
        </a>

        {/* Desktop nav */}
        <nav className="header__nav" aria-label="Navigation principale">
          <ul className="header__nav-list" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  className="header__nav-link"
                  onClick={() => handleNavClick(link.href)}
                  aria-label={`Aller à la section ${link.label}`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA */}
        <div className="header__actions">
          <button
            className="btn btn-primary"
            onClick={() => handleNavClick('#download')}
            id="header-cta-download"
          >
            Télécharger JuriVault
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="header__menu-toggle"
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="header__mobile" id="mobile-menu" role="dialog" aria-label="Menu de navigation">
          <nav aria-label="Navigation mobile">
            <ul className="header__mobile-list" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    className="header__mobile-link"
                    onClick={() => handleNavClick(link.href)}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  className="btn btn-primary header__mobile-cta"
                  onClick={() => handleNavClick('#download')}
                >
                  Télécharger JuriVault
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
