const Header = () => {
  return (
    <header className="navbar py-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img src="/images/logo.png" alt="Chatnutri Logo" className="h-10" />
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#beneficios" className="text-gray-300 hover:text-green-400 transition-colors">Benefícios</a>
          <a href="#recursos" className="text-gray-300 hover:text-green-400 transition-colors">Recursos</a>
          <a href="#valores" className="text-gray-300 hover:text-green-400 transition-colors">Valores</a>
          <a href="#depoimentos" className="text-gray-300 hover:text-green-400 transition-colors">Depoimentos</a>
          <a href="#contato" className="text-gray-300 hover:text-green-400 transition-colors">Contato</a>
        </nav>
        
        <a 
          href="https://form.respondi.app/zsxclVae" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden md:block cta-button"
        >
          Agende uma Demo
        </a>
        
        <button className="md:hidden text-gray-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
