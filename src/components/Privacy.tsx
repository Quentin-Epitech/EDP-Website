import { HardDrive, Lock, WifiOff } from 'lucide-react';
import './Privacy.css';

const PRINCIPLES = [
  {
    icon: HardDrive,
    title: 'Traitement local',
    body: "L'objectif de JuriVault est de traiter vos demandes avec une IA exécutée sur votre ordinateur. Les fonctions principales sont conçues pour ne pas envoyer vos documents à une API d'IA externe.",
    id: 'privacy-local',
  },
  {
    icon: Lock,
    title: 'Maîtrise des documents',
    body: "Vos documents et vos données de travail sont conçus pour rester sous le contrôle de votre cabinet, selon la configuration et les fonctionnalités effectivement disponibles.",
    id: 'privacy-control',
  },
  {
    icon: WifiOff,
    title: 'Sans dépendance obligatoire à un service distant',
    body: "Le fonctionnement principal de JuriVault est pensé pour ne pas dépendre d'un service d'IA hébergé à l'extérieur de votre infrastructure.",
    id: 'privacy-independent',
  },
];

export default function Privacy() {
  return (
    <section className="privacy section" id="privacy" aria-labelledby="privacy-title">
      <div className="container">
        <div className="privacy__header">
          <p className="eyebrow">Confidentialité par conception</p>
          <h2 id="privacy-title" className="privacy__title">
            Vos documents restent<br />
            <span className="serif" style={{ fontStyle: 'italic' }}>sous votre contrôle.</span>
          </h2>
          <p className="privacy__intro">
            La plupart des assistants IA envoient vos données vers des serveurs tiers. 
            JuriVault est conçu autour d'un principe inverse&nbsp;: l'intelligence artificielle 
            s'exécute sur votre machine, pas sur un cloud distant.
          </p>
        </div>

        {/* Comparison */}
        <div className="privacy__comparison" aria-label="Comparaison IA distante vs IA locale">
          <div className="privacy__compare-col privacy__compare-col--other">
            <h3 className="privacy__compare-heading">IA distante classique</h3>
            <ul className="privacy__compare-list">
              <li>Vos documents transitent par des serveurs tiers</li>
              <li>Dépendance à la connexion Internet</li>
              <li>Conditions de confidentialité du prestataire</li>
              <li>Données potentiellement utilisées pour l'entraînement</li>
            </ul>
          </div>
          <div className="privacy__compare-divider" aria-hidden="true">
            <span>vs</span>
          </div>
          <div className="privacy__compare-col privacy__compare-col--jv">
            <h3 className="privacy__compare-heading">JuriVault — IA locale</h3>
            <ul className="privacy__compare-list">
              <li>Traitement sur votre ordinateur</li>
              <li>Fonctionnement principal sans serveur externe</li>
              <li>Vos données sous votre contrôle</li>
              <li>Pas de dépendance obligatoire à un tiers</li>
            </ul>
          </div>
        </div>

        {/* Three principles */}
        <div className="privacy__principles" role="list">
          {PRINCIPLES.map(({ icon: Icon, title, body, id }) => (
            <article
              key={id}
              id={id}
              className="privacy__principle"
              role="listitem"
            >
              <div className="privacy__principle-icon" aria-hidden="true">
                <Icon size={20} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="privacy__principle-title">{title}</h3>
                <p className="privacy__principle-body">{body}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="privacy__disclaimer">
          JuriVault ne garantit pas une conformité juridique automatique, une sécurité absolue 
          ni une confidentialité totale. La sécurité de votre environnement informatique relève 
          de votre responsabilité.
        </p>
      </div>
    </section>
  );
}
