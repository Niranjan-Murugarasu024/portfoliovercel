import '@/Portfolio.css';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Projects from './components/Projects';
import Stack from './components/Stack';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <CustomCursor />
      <Navigation />
      <Hero />
      <Ticker />
      <Projects />
      <Stack />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;