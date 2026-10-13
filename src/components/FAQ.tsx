import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import './FAQ.css';

const FAQ_ITEMS = [
  {
    id: 'faq-what',
    q: "Qu'est-ce que JuriVault ?",
    a: "JuriVault est une application desktop en cours de développement, conçue pour aider les professionnels du droit à travailler avec leurs documents juridiques grâce à une intelligence artificielle qui s'exécute localement sur leur ordinateur. Elle vise les cabinets d'avocats comptant entre 1 et 15 avocats.",
  },
  {
    id: 'faq-local-ai',
    q: "Comment fonctionne l'IA locale ?",
    a: "L'objectif est d'intégrer un modèle d'IA qui s'exécute directement sur votre machine, sans nécessiter d'envoi de données à un service distant pour les fonctions principales. Cela signifie que le traitement de vos documents est réalisé localement, sous votre contrôle. Les modalités techniques précises seront précisées lors du lancement.",
  },
  {
    id: 'faq-data',
    q: "Mes documents sont-ils envoyés sur Internet ?",
    a: "Le principe de conception de JuriVault est de ne pas envoyer vos documents à une API d'IA externe pour les fonctions principales. Les données restent sur votre ordinateur. Certaines fonctionnalités annexes pourraient nécessiter une connexion — ce sera clairement indiqué dans l'application.",
  },
  {
    id: 'faq-platforms',
    q: "JuriVault fonctionne-t-il sur Windows et macOS ?",
    a: "JuriVault est prévu pour être compatible avec Windows et macOS. Les deux versions sont en cours de développement. Les configurations minimales requises seront communiquées lors du lancement.",
  },
  {
    id: 'faq-hardware',
    q: "Dois-je disposer d'un ordinateur puissant ?",
    a: "Faire fonctionner une IA localement nécessite une certaine puissance de calcul. Les prérequis matériels précis n'ont pas encore été définis et seront communiqués lors de la publication de la première version. L'objectif est de rendre JuriVault accessible sur des configurations professionnelles courantes.",
  },
  {
    id: 'faq-skills',
    q: "Puis-je utiliser JuriVault sans compétences informatiques ?",
    a: "JuriVault est conçu pour être accessible sans formation technique particulière. L'installation et l'utilisation visent à être simples et guidées, adaptées aux professionnels du droit qui ne disposent pas nécessairement d'une équipe informatique.",
  },
  {
    id: 'faq-accuracy',
    q: "JuriVault remplace-t-il les recherches juridiques et la vérification des sources ?",
    a: "Non. JuriVault est un outil d'assistance documentaire, pas un substitut à l'expertise de l'avocat. Les réponses produites par l'IA doivent toujours être vérifiées et validées par un professionnel du droit. JuriVault ne garantit pas l'exactitude, l'exhaustivité ni la conformité juridique de ses résultats.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section className="faq section" id="faq" aria-labelledby="faq-title">
      <div className="container">
        <div className="faq__header">
          <p className="eyebrow">Questions fréquentes</p>
          <h2 id="faq-title" className="faq__title">
            Tout ce que vous devez savoir<br />
            <span className="serif" style={{ fontStyle: 'italic' }}>sur JuriVault.</span>
          </h2>
        </div>

        <dl className="faq__list" role="list">
          {FAQ_ITEMS.map(({ id, q, a }) => {
            const isOpen = openId === id;
            return (
              <div
                key={id}
                id={id}
                className={`faq__item ${isOpen ? 'faq__item--open' : ''}`}
                role="listitem"
              >
                <dt>
                  <button
                    className="faq__question"
                    aria-expanded={isOpen}
                    aria-controls={`${id}-answer`}
                    onClick={() => toggle(id)}
                    id={`${id}-btn`}
                  >
                    <span>{q}</span>
                    <span className="faq__icon" aria-hidden="true">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>
                </dt>
                <dd
                  id={`${id}-answer`}
                  role="region"
                  aria-labelledby={`${id}-btn`}
                  className="faq__answer"
                  hidden={!isOpen}
                >
                  <p>{a}</p>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
