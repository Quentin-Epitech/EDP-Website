import { ArrowRight, ChevronRight } from 'lucide-react';
import AppWindowMockup from './AppWindowMockup';
import './Hero.css';

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="hero section" id="product" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="eyebrow animate-fade-in-up">L'IA juridique, autrement.</p>

          <h1
            id="hero-title"
            className="hero__title animate-fade-in-up delay-100"
          >
            Votre expertise juridique.{' '}
            <span className="hero__title-serif">Votre IA.</span>{' '}
            Vos données.
          </h1>

          <p className="hero__subtitle animate-fade-in-up delay-200">
            JuriVault est une application juridique conçue pour fonctionner localement
            sur votre ordinateur. Analysez vos documents et travaillez avec l'IA tout
            en gardant la maîtrise de vos données.
          </p>

          <div className="hero__actions animate-fade-in-up delay-300">
            <button
              id="hero-cta-discover"
              className="btn btn-primary btn-lg"
              onClick={() => scrollTo('#features')}
              aria-label="Découvrir les fonctionnalités de JuriVault"
            >
              Découvrir JuriVault
              <ChevronRight size={16} aria-hidden="true" />
            </button>
            <button
              id="hero-cta-download"
              className="btn btn-secondary btn-lg"
              onClick={() => scrollTo('#download')}
              aria-label="Aller à la section téléchargement"
            >
              Télécharger l'application
              <ArrowRight size={16} aria-hidden="true" />
            </button>
          </div>

          <p className="hero__availability animate-fade-in-up delay-400">
            <span className="hero__avail-dot" aria-hidden="true" />
            Windows et macOS — versions en préparation
          </p>
        </div>

        <div className="hero__visual animate-fade-in-up delay-200">
          <AppWindowMockup />
        </div>
      </div>
    </section>
  );
}
