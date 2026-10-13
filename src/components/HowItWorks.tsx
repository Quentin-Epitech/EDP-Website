import { Download, FolderOpen, MessageSquare } from 'lucide-react';
import './HowItWorks.css';

const STEPS = [
  {
    number: '01',
    icon: Download,
    title: 'Installez JuriVault',
    body: "Téléchargez et installez l'application sur votre ordinateur Windows ou macOS. Aucune configuration serveur n'est nécessaire.",
    id: 'step-install',
  },
  {
    number: '02',
    icon: FolderOpen,
    title: 'Travaillez avec vos documents',
    body: 'Importez les documents que vous souhaitez analyser — contrats, actes, pièces de procédure. Ils restent stockés localement sur votre machine.',
    id: 'step-documents',
  },
  {
    number: '03',
    icon: MessageSquare,
    title: 'Interrogez votre IA locale',
    body: "Posez vos questions et exploitez les résultats directement dans l'application. L'IA s'exécute sur votre ordinateur, sans connexion requise pour les fonctions principales.",
    id: 'step-query',
  },
];

export default function HowItWorks() {
  return (
    <section className="how section" id="how-it-works" aria-labelledby="how-title">
      <div className="container">
        <div className="how__header">
          <p className="eyebrow">Comment ça fonctionne</p>
          <h2 id="how-title" className="how__title">
            Trois étapes pour<br />
            <span className="serif" style={{ fontStyle: 'italic' }}>commencer à travailler.</span>
          </h2>
          <p className="how__intro">
            JuriVault est conçu pour une prise en main rapide, sans compétences techniques particulières.
          </p>
        </div>

        <ol className="how__steps" aria-label="Étapes d'utilisation de JuriVault">
          {STEPS.map(({ number, icon: Icon, title, body, id }, index) => (
            <li key={id} id={id} className="how__step">
              <div className="how__step-connector" aria-hidden="true">
                <span className="how__step-number">{number}</span>
                {index < STEPS.length - 1 && (
                  <div className="how__step-line" />
                )}
              </div>
              <div className="how__step-content">
                <div className="how__step-icon" aria-hidden="true">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="how__step-title">{title}</h3>
                  <p className="how__step-body">{body}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <p className="how__note">
          Le fonctionnement décrit ici correspond au concept prévu du produit. 
          Certaines étapes peuvent évoluer en fonction des fonctionnalités effectivement disponibles lors du lancement.
        </p>
      </div>
    </section>
  );
}
