const Hero = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 to-purple-900/30"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0a0a1a] to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Transforme sua <span className="gradient-text">Clínica de Nutrição</span> com Automação Comercial
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              O Chatnutri é a primeira plataforma de automação comercial feita exclusivamente para nutricionistas que desejam escalar seus resultados com organização, profissionalismo e leveza.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://form.respondi.app/zsxclVae" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cta-button text-center"
              >
                Agende uma Demonstração
              </a>
              
              <a 
                href="#desafios" 
                className="secondary-button text-center"
              >
                Saiba Mais
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-purple-600 rounded-2xl blur opacity-30"></div>
              <div className="relative bg-[#0a0a1a]/80 p-6 rounded-2xl border border-white/10">
                <img 
                  src="/images/dashboard-preview.png" 
                  alt="Chatnutri Dashboard" 
                  className="w-full rounded-lg shadow-2xl"
                  onError={(e) => {
                    e.currentTarget.src = "/images/logo.png";
                    e.currentTarget.style.maxHeight = "300px";
                    e.currentTarget.style.objectFit = "contain";
                    e.currentTarget.style.margin = "0 auto";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
