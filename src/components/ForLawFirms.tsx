import { Users, MousePointer, Shield, Laptop } from 'lucide-react';
import './ForLawFirms.css';

const POINTS = [
  {
    icon: MousePointer,
    title: 'Accessible sans compétences techniques',
    body: "JuriVault est conçu pour être utilisé sans formation informatique particulière. Installation simple, interface claire.",
    id: 'firm-ease',
  },
  {
    icon: Laptop,
    title: 'Application desktop dédiée',
    body: "Un logiciel pensé pour le quotidien du juriste, disponible sur Windows et macOS, avec un environnement de travail structuré.",
    id: 'firm-desktop',
  },
  {
    icon: Shield,
    title: 'Maîtrise de vos données',
    body: "Vos documents et vos échanges restent sur votre machine. Le cabinet garde le contrôle de son espace de travail.",
    id: 'firm-data',
  },
  {
    icon: Users,
    title: 'Adapté aux petites structures',
    body: "Conçu pour les cabinets de 1 à 15 avocats qui ne disposent pas nécessairement d'une équipe informatique dédiée.",
    id: 'firm-size',
  },
];

export default function ForLawFirms() {
  return (
    <section className="firms section" id="for-law-firms" aria-labelledby="firms-title">
      <div className="container firms__inner">
        {/* Left */}
        <div className="firms__left">
          <p className="eyebrow">Conçu pour les cabinets</p>
          <h2 id="firms-title" className="firms__title">
            Une IA pensée pour<br />
            <span className="serif" style={{ fontStyle: 'italic' }}>la réalité des cabinets.</span>
          </h2>
          <p className="firms__body">
            JuriVault ne prétend pas remplacer l'avocat, ni garantir l'exactitude 
            de ses réponses. Il est conçu comme un outil d'assistance documentaire 
            pour gagner du temps sur les tâches de recherche et d'analyse, tout en 
            conservant votre rôle d'expert.
          </p>
          <p className="firms__disclaimer">
            Les résultats produits par l'IA doivent toujours être vérifiés et validés 
            par un professionnel du droit. JuriVault n'est pas un service de conseil juridique.
          </p>
        </div>

        {/* Right */}
        <div className="firms__right">
          <dl className="firms__points" role="list">
            {POINTS.map(({ icon: Icon, title, body, id }) => (
              <div key={id} id={id} className="firms__point" role="listitem">
                <dt className="firms__point-title">
                  <span className="firms__point-icon" aria-hidden="true">
                    <Icon size={16} strokeWidth={1.75} />
                  </span>
                  {title}
                </dt>
                <dd className="firms__point-body">{body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
