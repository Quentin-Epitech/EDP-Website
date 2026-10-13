import { Folder, FileText, MessageSquare, Search, ChevronRight } from 'lucide-react';
import './AppWindowMockup.css';

const SIDEBAR_FOLDERS = [
  { name: 'Dossier Dupont c/ Martin', active: true, count: 4 },
  { name: 'Affaire immobilière 2024', active: false, count: 7 },
  { name: 'Contrats fournisseurs', active: false, count: 3 },
  { name: 'Dossier Pénal — Ref. 094', active: false, count: 2 },
];

const CHAT_MESSAGES = [
  {
    role: 'user' as const,
    text: 'Quelles sont les clauses de résiliation dans le contrat de bail annexé ?',
  },
  {
    role: 'ai' as const,
    text: "D'après le document analysé, l'article 12 prévoit trois conditions de résiliation anticipée : (1) non-paiement pendant deux mois consécutifs, (2) violation des obligations d'entretien, (3) résiliation amiable avec préavis de trois mois.",
    ref: 'Contrat de bail — art. 12, p. 8',
  },
  {
    role: 'user' as const,
    text: "Y a-t-il une clause d'indexation du loyer ?",
  },
];

const HIGHLIGHT_LINES = [
  { text: 'Article 12 — Résiliation du bail', highlight: false, weight: 'bold' as const },
  { text: "Le présent bail peut être résilié avant son terme dans les cas suivants :", highlight: false, weight: 'normal' as const },
  { text: "(i) en cas de défaut de paiement du loyer pendant deux (2) mois consécutifs,", highlight: true, weight: 'normal' as const },
  { text: "n\u2019ayant pas été régularisé dans un délai de quinze (15) jours suivant mise en demeure ;", highlight: true, weight: 'normal' as const },
  { text: "(ii) en cas de violation des obligations d\u2019entretien définies à l\u2019article 8,", highlight: true, weight: 'normal' as const },
  { text: '(iii) par résiliation amiable moyennant préavis de trois (3) mois.', highlight: true, weight: 'normal' as const },
  { text: 'Article 13 — Indexation', highlight: false, weight: 'bold' as const },
  { text: "Le loyer mensuel est indexé annuellement sur la base de l\u2019Indice de Référence des Loyers (IRL).", highlight: false, weight: 'normal' as const },
];

export default function AppWindowMockup() {
  return (
    <figure
      className="app-window"
      aria-label="Démonstration de l'interface JuriVault (données fictives)"
      role="img"
    >
      {/* Window chrome */}
      <div className="app-window__chrome" aria-hidden="true">
        <div className="app-window__dots">
          <span className="dot dot--red" />
          <span className="dot dot--yellow" />
          <span className="dot dot--green" />
        </div>
        <div className="app-window__title-bar">
          <span>JuriVault — Dossier Dupont c/ Martin</span>
        </div>
        <div className="app-window__toolbar-right">
          <Search size={12} />
        </div>
      </div>

      {/* App body */}
      <div className="app-window__body">
        {/* Sidebar */}
        <aside className="app-sidebar" aria-label="Dossiers (démonstration)">
          <div className="app-sidebar__section">
            <span className="app-sidebar__label">Dossiers</span>
            <ul>
              {SIDEBAR_FOLDERS.map((folder) => (
                <li
                  key={folder.name}
                  className={`app-sidebar__item ${folder.active ? 'app-sidebar__item--active' : ''}`}
                >
                  <Folder size={13} />
                  <span className="app-sidebar__item-name">{folder.name}</span>
                  <span className="app-sidebar__item-count">{folder.count}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="app-sidebar__section">
            <span className="app-sidebar__label">Conversations</span>
            <ul>
              <li className="app-sidebar__item app-sidebar__item--active">
                <MessageSquare size={13} />
                <span className="app-sidebar__item-name">Analyse bail — 12 oct.</span>
              </li>
              <li className="app-sidebar__item">
                <MessageSquare size={13} />
                <span className="app-sidebar__item-name">Résumé pièces — 8 oct.</span>
              </li>
            </ul>
          </div>
        </aside>

        {/* Main area */}
        <div className="app-main">
          {/* Document pane */}
          <div className="app-doc">
            <div className="app-doc__header">
              <FileText size={12} />
              <span>Contrat de bail — Dupont_bail_2024.pdf</span>
              <span className="app-doc__demo-badge">Données de démonstration</span>
            </div>
            <div className="app-doc__content">
              {HIGHLIGHT_LINES.map((line, i) => (
                <p
                  key={i}
                  className={`app-doc__line ${line.highlight ? 'app-doc__line--highlighted' : ''} ${line.weight === 'bold' ? 'app-doc__line--bold' : ''}`}
                >
                  {line.text}
                </p>
              ))}
            </div>
          </div>

          {/* Chat pane */}
          <div className="app-chat">
            <div className="app-chat__messages">
              {CHAT_MESSAGES.map((msg, i) => (
                <div
                  key={i}
                  className={`app-chat__msg app-chat__msg--${msg.role}`}
                >
                  <p className="app-chat__msg-text">{msg.text}</p>
                  {msg.role === 'ai' && msg.ref && (
                    <span className="app-chat__msg-ref">
                      <ChevronRight size={10} />
                      {msg.ref}
                    </span>
                  )}
                </div>
              ))}
              <div className="app-chat__typing">
                <span /><span /><span />
              </div>
            </div>
            <div className="app-chat__input">
              <div className="app-chat__input-field">Rédigez votre question…</div>
              <div className="app-chat__input-local">
                <span className="app-chat__local-dot" />
                IA locale
              </div>
            </div>
          </div>
        </div>
      </div>

      <figcaption className="app-window__caption">
        Démonstration — données entièrement fictives
      </figcaption>
    </figure>
  );
}
