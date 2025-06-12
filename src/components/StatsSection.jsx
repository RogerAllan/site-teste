import { FaUsers as Users, FaTrophy as Trophy, FaBullseye as Target, FaClock as Clock } from 'react-icons/fa';
import './StatsSection.css';

const StatsSection = () => {
  const stats = [
    { icon: Users, value: '12.000+', label: 'Alunos Treinados', colorClass: 'blue' },
    { icon: Trophy, value: 'R$3M+', label: 'Ganhos Acumulados', colorClass: 'yellow' },
    { icon: Target, value: '97.5%', label: 'Taxa de Sucesso', colorClass: 'green' },
    { icon: Clock, value: '7 dias', label: 'Retorno Médio', colorClass: 'purple' }
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stats-header">
          <h2 className="stats-title">
            Confiança de Milhares de Jogadores
          </h2>
          <p className="stats-subtitle">Resultados reais com estratégias comprovadas na roleta</p>
        </div>
        
        <div className="stats-grid">
          {stats.map(({ icon: Icon, value, label, colorClass }, index) => (
            <div key={index} className="stat-item">
              <div className="stat-icon-container">
                <div className="stat-icon-wrapper">
                  <Icon className={`stat-icon ${colorClass}`} />
                </div>
              </div>
              <div className="stat-value">{value}</div>
              <div className="stat-label">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
