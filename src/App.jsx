import './app.scss';
import Contact from './components/contact/Contact';
import Cursor from './components/cursor/Cursor';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Parallax from './components/parallax/Parallax';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';

// import Test from './Test';

const App = () => {
  return (
    <div>
      <Cursor />
      <section id='Acasa'>
        <Navbar />
        <Hero />
      </section>
      <section id='Servicii'>
        <Parallax type='services' />
      </section>
      <section>
        <Services />
      </section>
      <section id='Portofoliu'>
        <Parallax type='portfolio' />
      </section>
      <Portfolio />
      <section id='Contact'>
        <Contact />
      </section>
    </div>
  );
};

export default App;
