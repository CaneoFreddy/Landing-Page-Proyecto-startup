import './App.css';
import Hero from './components/Hero';
import Features from './components/Features';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Metrics from './components/Metrics';
import Process from './components/Process';

function App() {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <Metrics />
      <Features />
      <Services />
      <Projects />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
