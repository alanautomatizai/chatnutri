const Challenges = () => {
  const challenges = [
    {
      icon: "🎯",
      title: "Poucos nutricionistas batendo a meta",
      description: "Muitos profissionais lutam para atingir seus objetivos de vendas e crescimento, mesmo com ótimos serviços."
    },
    {
      icon: "📊",
      title: "Taxas de conversão inconsistentes",
      description: "Enquanto alguns nutricionistas convertem 40% das consultas em pacientes, outros mal chegam a 10%."
    },
    {
      icon: "⏱️",
      title: "Falta de tempo para acompanhamento",
      description: "Não há tempo suficiente para analisar todas as interações com potenciais clientes e otimizar o processo."
    },
    {
      icon: "📈",
      title: "Investimento em marketing sem retorno proporcional",
      description: "Aumento nos gastos com marketing digital nem sempre se traduz em mais pacientes e receita."
    },
    {
      icon: "❌",
      title: "Dificuldade em identificar falhas no processo de vendas",
      description: "É difícil saber exatamente por que algumas vendas são perdidas e como melhorar o processo."
    },
    {
      icon: "🔍",
      title: "Dificuldade em visualizar pontos de melhoria",
      description: "Sem dados claros, é difícil identificar quais aspectos do atendimento precisam ser aprimorados."
    },
    {
      icon: "⚙️",
      title: "Falta de consistência no processo comercial",
      description: "Cada atendimento acontece de forma diferente, sem um padrão que garanta resultados previsíveis."
    },
    {
      icon: "👨‍🏫",
      title: "Sem tempo para capacitar a equipe",
      description: "Nutricionistas e clínicas não conseguem dedicar tempo suficiente para treinar adequadamente sua equipe comercial."
    }
  ];

  return (
    <section id="desafios" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Você se identifica com algum <span className="gradient-text">desses desafios?</span>
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            O Chatnutri foi desenvolvido para resolver os principais problemas enfrentados por nutricionistas e clínicas no processo comercial.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((challenge, index) => (
            <div key={index} className="challenge-card">
              <div className="text-4xl mb-4">{challenge.icon}</div>
              <h3 className="text-xl font-bold mb-3">{challenge.title}</h3>
              <p className="text-gray-300">{challenge.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://form.respondi.app/zsxclVae" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cta-button inline-block"
          >
            Resolva esses desafios com o Chatnutri
          </a>
        </div>
      </div>
    </section>
  );
};

export default Challenges;
