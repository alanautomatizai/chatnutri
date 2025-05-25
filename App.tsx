import './App.css';

// Componentes
import Header from './components/Header';
import Hero from './components/Hero';
import Challenges from './components/Challenges';
import Benefits from './components/Benefits';
import Features from './components/Features';
import Values from './components/Values';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Challenges />
      <Benefits />
      <Features />
      <Values />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
