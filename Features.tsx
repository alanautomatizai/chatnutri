const Features = () => {
  const features = [
    {
      icon: "💬",
      title: "Mensagens Rápidas",
      description: "Agilidade no atendimento com qualidade. Responda perguntas frequentes e qualifique leads sem precisar digitar as mesmas informações repetidamente."
    },
    {
      icon: "👥",
      title: "Chat Interno com Equipe",
      description: "Coordene o atendimento com mais eficiência. Sua equipe pode colaborar internamente sem que o cliente veja, garantindo alinhamento e resolução rápida."
    },
    {
      icon: "📚",
      title: "Trilhas de Conteúdo para Equipe",
      description: "Treinamento padronizado e sob demanda. Sua equipe comercial aprende as melhores práticas de vendas para nutrição sem que você precise repetir as mesmas instruções."
    },
    {
      icon: "👨‍🏫",
      title: "Mentoria com Matheus",
      description: "Direcionamento direto para ajustar e escalar seu negócio. Aprenda com quem já construiu uma clínica milionária usando exatamente este sistema."
    },
    {
      icon: "🛟",
      title: "Suporte VIP e Comunidade",
      description: "Apoio rápido, especializado e coletivo. Nunca fique sozinho nas suas dúvidas e desafios comerciais."
    },
    {
      icon: "📱",
      title: "API Instagram e Meta",
      description: "Expanda seus canais e permita disparos em massa. Integre suas redes sociais para captar leads diretamente para seu funil de vendas."
    }
  ];

  return (
    <section id="recursos" className="py-20 relative bg-[#0a0a1a]/80">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 to-purple-900/10"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">
            O que torna o ChatNutri a <span className="gradient-text">melhor solução</span>?
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Criado por Matheus Galvão, nutricionista e fundador da maior clínica integrativa de mudança de hábitos do Brasil.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-[#0a0a1a]/80 p-8 rounded-xl border border-white/5 hover:border-green-500/20 transition-all hover:transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
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
            Quero conhecer o Chatnutri
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
