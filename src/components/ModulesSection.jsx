import React from "react";
import {
  BookOpen,
  Target,
  TrendingUp,
  Award,
  Zap,
  Users,
  Crown,
  Diamond,
} from "lucide-react";
import "./ModulesSection.css";

const modules = [
  {
    title: "Fundamentos da Roleta",
    lessons: 8,
    duration: "2h 30min",
    icon: BookOpen,
    description: "Domine as regras básicas e estratégias fundamentais",
  },
  {
    title: "Psicologia do Jogo",
    lessons: 12,
    duration: "4h 15min",
    icon: Target,
    description: "Leia seus oponentes e controle suas emoções",
  },
  {
    title: "Gestão de Banca",
    lessons: 6,
    duration: "1h 45min",
    icon: TrendingUp,
    description: "Proteja seu capital e maximize seus lucros",
  },
  {
    title: "Estratégias Avançadas",
    lessons: 15,
    duration: "6h 20min",
    icon: Award,
    description: "Técnicas profissionais para jogadores experientes",
  },
  {
    title: "Análise de Entradas",
    lessons: 10,
    duration: "3h 10min",
    icon: Zap,
    description: "Aprenda a tomar decisões perfeitas em tempo real",
  },
  {
    title: "Fique Rico",
    lessons: 9,
    duration: "2h 55min",
    icon: Users,
    description: "Domine diferentes formatos de jogo",
  },
];

const ModulesSection = () => {
  return (
    <section className="modules-section">
      <div className="particles">
        <div className="particle particle1"></div>
        <div className="particle particle2"></div>
        <div className="particle particle3"></div>
        <div className="particle particle4"></div>
        <div className="particle particle5"></div>
      </div>

      <div className="radial-gradient"></div>

      <div className="content">
        <div className="title-section">
          <div className="title-icons">
            <Crown className="icon crown" />
            <Diamond className="icon diamond" />
            <Crown className="icon crown" />
          </div>
          <h2 className="title-large title-yellow">O QUE VOCÊ VAI</h2>
          <h2 className="title-large title-red">APRENDER</h2>
          <div className="underline"></div>
        </div>

        <div className="modules-grid">
          {modules.map((module, index) => {
            const Icon = module.icon;
            const progressPercentage = ((index + 1) / modules.length) * 100;

            return (
              <div
                key={index}
                className="module-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inner-glow"></div>
                <div className="corner-decoration"></div>

                <div className="content-wrapper">
                  <div className="icon-wrapper">
                    <div className="icon-bg">
                      <Icon className="icon-svg" />
                    </div>
                    <div className="icon-glow"></div>
                  </div>

                  <div className="text-content">
                    <h3 className="module-title">{module.title}</h3>
                    <p className="module-description">{module.description}</p>

                    <div className="module-info">
                      <div className="lessons">
                        <div className="dot yellow-dot"></div>
                        <span>{module.lessons} aulas</span>
                      </div>
                      <div className="duration">
                        <div className="dot red-dot"></div>
                        <span>{module.duration}</span>
                      </div>
                    </div>

                    <div className="progress-bar">
                      <div className="progress-bg">
                        <div
                          className="progress-fill"
                          style={{ width: `${progressPercentage}%` }}
                        >
                          <div className="progress-pulse"></div>
                        </div>
                      </div>
                      <div className="progress-label">
                        {Math.round(progressPercentage)}%
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hover-glow"></div>
              </div>
            );
          })}
        </div>

        <div className="bottom-deco">
          <div className="premium-content">
            <Crown className="icon crown-small" />
            <span>Conteúdo Premium</span>
            <Crown className="icon crown-small" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
