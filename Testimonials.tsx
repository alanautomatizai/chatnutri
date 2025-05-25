const Testimonials = () => {
  const testimonials = [
    {
      name: "Juliana",
      role: "Nutricionista | SP",
      quote: "Nunca imaginei que uma IA pudesse vender por mim de forma tão humana. Em 1 mês, fechei 9 pacientes sem eu precisar responder 1 por 1.",
      image: "/images/testimonial1.jpg"
    },
    {
      name: "Carla",
      role: "Clínica NutriBem | RJ",
      quote: "Minhas vendedoras agora são treinadas com a trilha da plataforma. Não gasto mais horas ensinando passo a passo.",
      image: "/images/testimonial2.jpg"
    },
    {
      name: "Ricardo",
      role: "Nutricionista Esportivo | DF",
      quote: "O pipeline visual mudou tudo. Eu não perco mais nenhum lead e tenho previsão de faturamento real.",
      image: "/images/testimonial3.jpg"
    }
  ];

  return (
    <section id="depoimentos" className="py-20 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 to-purple-900/10"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="gradient-text">Provas Sociais</span>
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Veja como o Chatnutri está transformando clínicas e consultórios de nutrição por todo o Brasil.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="testimonial-card flex flex-col"
            >
              <div className="mb-6 flex-grow">
                <svg className="w-10 h-10 text-green-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-lg italic text-gray-300">{testimonial.quote}</p>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
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
            Seja o próximo caso de sucesso
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
