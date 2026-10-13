import { ExternalLink } from 'lucide-react';
import { DOWNLOAD_CONFIG } from '../config';
import './Download.css';

function WindowsIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="10" height="10" rx="1" fill="currentColor" opacity="0.9"/>
      <rect x="15" y="3" width="10" height="10" rx="1" fill="currentColor" opacity="0.9"/>
      <rect x="3" y="15" width="10" height="10" rx="1" fill="currentColor" opacity="0.9"/>
      <rect x="15" y="15" width="10" height="10" rx="1" fill="currentColor" opacity="0.9"/>
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M20.5 15.3c0-3.2 2.6-4.7 2.7-4.8-1.5-2.1-3.8-2.4-4.6-2.4-2-.2-3.8 1.2-4.8 1.2s-2.5-1.1-4.2-1.1c-2.1 0-4.1 1.2-5.2 3.2-2.2 3.9-.6 9.6 1.6 12.7 1 1.5 2.3 3.2 3.9 3.2 1.6-.1 2.2-1 4.1-1 1.9 0 2.5 1 4.1 1 1.7 0 2.8-1.6 3.9-3.1.8-1.1 1.4-2.4 1.7-3.6-3.8-1.5-4.2-6.3-4.2-6.3zM17.2 5.7c.9-1.1 1.5-2.6 1.3-4.1-1.3.1-2.8.9-3.7 2-.8 1-1.5 2.5-1.3 4 1.4.1 2.8-.7 3.7-1.9z" fill="currentColor"/>
    </svg>
  );
}

export default function Download() {
  const hasWindows = Boolean(DOWNLOAD_CONFIG.windowsDownloadUrl);
  const hasMacos   = Boolean(DOWNLOAD_CONFIG.macosDownloadUrl);

  return (
    <section className="download section" id="download" aria-labelledby="download-title">
      <div className="container">
        <div className="download__header">
          <p className="eyebrow">Téléchargement</p>
          <h2 id="download-title" className="download__title">
            Le droit mérite<br />
            <span className="serif" style={{ fontStyle: 'italic' }}>une IA que vous maîtrisez.</span>
          </h2>
          <p className="download__intro">
            JuriVault sera disponible en téléchargement direct pour Windows et macOS.
            Aucun abonnement cloud requis pour les fonctions principales.
          </p>
        </div>

        <div className="download__blocks">
          {/* Windows */}
          <div className="download__block" id="download-windows">
            <div className="download__block-header">
              <span className="download__block-icon">
                <WindowsIcon />
              </span>
              <div>
                <h3 className="download__block-title">Windows</h3>
                <p className="download__block-meta">
                  {hasWindows ? 'Disponible au téléchargement' : 'Version en préparation'}
                </p>
              </div>
            </div>

            {hasWindows ? (
              <a
                href={DOWNLOAD_CONFIG.windowsDownloadUrl!}
                className="btn btn-primary btn-lg download__btn"
                download
                aria-label="Télécharger JuriVault pour Windows"
              >
                Télécharger pour Windows
                <ExternalLink size={15} aria-hidden="true" />
              </a>
            ) : (
              <div className="download__unavailable">
                <button
                  className="btn btn-secondary btn-lg download__btn"
                  disabled
                  aria-disabled="true"
                  aria-label="Téléchargement Windows non disponible"
                >
                  Bientôt disponible
                </button>
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="download__sep" aria-hidden="true" />

          {/* macOS */}
          <div className="download__block" id="download-macos">
            <div className="download__block-header">
              <span className="download__block-icon">
                <AppleIcon />
              </span>
              <div>
                <h3 className="download__block-title">macOS</h3>
                <p className="download__block-meta">
                  {hasMacos ? 'Disponible au téléchargement' : 'Version en préparation'}
                </p>
              </div>
            </div>

            {hasMacos ? (
              <a
                href={DOWNLOAD_CONFIG.macosDownloadUrl!}
                className="btn btn-primary btn-lg download__btn"
                download
                aria-label="Télécharger JuriVault pour macOS"
              >
                Télécharger pour macOS
                <ExternalLink size={15} aria-hidden="true" />
              </a>
            ) : (
              <div className="download__unavailable">
                <button
                  className="btn btn-secondary btn-lg download__btn"
                  disabled
                  aria-disabled="true"
                  aria-label="Téléchargement macOS non disponible"
                >
                  Bientôt disponible
                </button>
              </div>
            )}
          </div>
        </div>

        <p className="download__note">
          Aucune version n'est encore publiée. Les informations relatives aux configurations 
          minimales et aux versions seront communiquées lors du lancement.
        </p>
      </div>
    </section>
  );
}
