const Benefits = () => {
  const benefits = [
    {
      icon: "🤖",
      title: "IA Personalizada",
      description: "Responde como você, organiza o atendimento e qualifica leads de forma automática e humanizada."
    },
    {
      icon: "🔄",
      title: "Funil de Resgate",
      description: "Recupera leads que sumiram e aumenta sua taxa de fechamento, sem você precisar fazer follow-up manual."
    },
    {
      icon: "📊",
      title: "Pipeline Visual",
      description: "Traz clareza, foco e previsibilidade de vendas para seu consultório ou clínica."
    },
    {
      icon: "📈",
      title: "Dashboards Comerciais",
      description: "Mostram o que está funcionando com números reais para você tomar decisões baseadas em dados."
    }
  ];

  return (
    <section id="beneficios" className="py-20 relative">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern.svg')] bg-repeat"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Benefícios que <span className="gradient-text">Transformam</span> sua Prática
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            O Chatnutri foi desenvolvido para empoderar nutricionistas a venderem mais, atenderem melhor e viverem da profissão com liberdade.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-[#0a0a1a]/50 p-8 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all hover:transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-6">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://form.respondi.app/zsxclVae" 
            target="_blank" 
            rel="noopener noreferrer"
            className="secondary-button inline-block"
          >
            Conheça todos os benefícios
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
