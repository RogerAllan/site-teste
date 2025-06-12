import { GiCrown } from 'react-icons/gi';
import { BsCheck } from 'react-icons/bs';
import './PricingSection.css';

const PricingSection = () => {
  const plans = [
    {
      name: 'Bronze',
      bonus: 'Curso Introdutório',
      deposit: 'R$47',
      features: [
        'Fundamentos da Roleta',
        'Acesso por 7 dias',
        'Grupo de Alunos no Telegram',
        'Garantia de 3 dias'
      ],
      popular: false,
      iconClass: 'icon-bronze'
    },
    {
      name: 'Gold',
      bonus: 'Curso Completo + Bônus',
      deposit: 'R$97',
      features: [
        'Todas as Estratégias Avançadas',
        'Acesso Vitalício',
        'Suporte Prioritário',
        'Planilha de Gestão',
        'Grupo VIP no Telegram'
      ],
      popular: true,
      iconClass: 'icon-gold'
    },
    {
      name: 'Diamond',
      bonus: 'Mentoria + Curso Completo',
      deposit: 'R$297',
      features: [
        'Mentoria Individual',
        'Análise Personalizada',
        'Suporte VIP Direto',
        'Acesso a Lives Fechadas',
        'Atualizações Exclusivas',
        'Garantia Estendida de 7 dias'
      ],
      popular: false,
      iconClass: 'icon-diamond'
    }
  ];

  return (
    <section className="pricing-section">
      <div className="pricing-container">
        <div className="pricing-header">
          <h2 className="pricing-title">
            Planos de Acesso ao Curso
          </h2>
          <p className="pricing-subtitle">
            Escolha o nível ideal e comece sua jornada para dominar a roleta
          </p>
        </div>
        
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && (
                <div className="popular-badge">
                  🏆 MAIS POPULAR
                </div>
              )}
              
              <div className="card-header">
                <div className={`card-icon ${plan.iconClass}`}>
                  <GiCrown />
                </div>
                <h3 className="card-name">{plan.name}</h3>
                <div className="card-bonus">
                  {plan.bonus}
                </div>
                <p className="card-deposit">Investimento: {plan.deposit}</p>
              </div>
              
              <ul className="features-list">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>
                    <div className="feature-check">
                      <BsCheck />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className={`claim-button ${plan.popular ? 'popular' : ''}`}>
                Garantir Acesso
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
