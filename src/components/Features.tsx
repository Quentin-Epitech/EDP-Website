import { MessageSquare, FileSearch, Search, Layout } from 'lucide-react';
import './Features.css';

const FEATURES = [
  {
    icon: MessageSquare,
    title: 'Interroger ses documents',
    body: "Posez des questions sur les documents de votre cabinet et obtenez des réponses structurées, directement issues de vos pièces. L'IA analyse le contenu de vos fichiers pour vous aider à trouver l'information utile.",
    status: 'dev' as const,
    id: 'feature-query',
  },
  {
    icon: FileSearch,
    title: 'Analyser les documents juridiques',
    body: 'Facilitez la lecture, la compréhension et la synthèse des documents. Contrats, actes, pièces de procédure — exploitez leur contenu plus rapidement.',
    status: 'dev' as const,
    id: 'feature-analyze',
  },
  {
    icon: Search,
    title: "Retrouver l'information",
    body: "Recherchez les informations utiles dans l'ensemble des documents disponibles dans votre espace de travail. Plus besoin de parcourir chaque fichier manuellement.",
    status: 'dev' as const,
    id: 'feature-search',
  },
  {
    icon: Layout,
    title: 'Travailler dans un espace dédié',
    body: "Organisez vos conversations et vos dossiers de travail au sein d'une application desktop dédiée, pensée pour le quotidien du juriste.",
    status: 'dev' as const,
    id: 'feature-workspace',
  },
];

export default function Features() {
  return (
    <section className="features section" id="features" aria-labelledby="features-title">
      <div className="container">
        <div className="features__header">
          <p className="eyebrow">Fonctionnalités</p>
          <h2 id="features-title" className="features__title">
            Un outil pensé pour<br />
            <span className="serif" style={{ fontStyle: 'italic' }}>le travail juridique réel.</span>
          </h2>
          <p className="features__intro">
            JuriVault est conçu pour répondre aux besoins concrets des professionnels du droit. 
            Les fonctionnalités décrites ci-dessous sont en cours de développement.
          </p>
        </div>

        <div className="features__grid" role="list">
          {FEATURES.map(({ icon: Icon, title, body, status, id }) => (
            <article
              key={id}
              id={id}
              className="features__card"
              role="listitem"
            >
              <div className="features__card-top">
                <div className="features__card-icon" aria-hidden="true">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                {status === 'dev' && (
                  <span className="badge badge-soon" aria-label="En développement">
                    En développement
                  </span>
                )}
              </div>
              <h3 className="features__card-title">{title}</h3>
              <p className="features__card-body">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
