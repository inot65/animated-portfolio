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
      <section>
        <Parallax type='services' />
      </section>
      <section id='Servicii'>
        <Services />
      </section>
      <section>
        <Parallax type='portfolio' />
      </section>
      <section id='Portofoliu'>
        <Portfolio />
      </section>
      <section id='Contact'>
        <Contact />
      </section>
      {/* <section id='Despre'>Despre</section> */}
      {/* <Test />
      <Test /> */}
    </div>
  );
};

export default App;
