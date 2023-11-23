import './services.scss';
import {useRef} from 'react';
import {motion, useInView} from 'framer-motion';

const variants = {
  initial: {
    x: -100,
    opacity: 0,
    y: 100,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, {margin: '-100px'});

  return (
    <motion.div
      className='services'
      ref={ref}
      variants={variants}
      initial='initial'
      //   whileInView='animate'
      animate={isInView && 'animate'}
    >
      <motion.div className='textContainer' variants={variants}>
        <p>
          Mă concentrez să ajut la creșterea mărcii
          <br />
          și la mersul ei înainte
        </p>
        <hr />
      </motion.div>
      <motion.div className='titleContainer' variants={variants}>
        <div className='title'>
          <img src='/people.webp' alt='' />
          <h1>
            Idei <motion.b whileHover={{color: 'orange'}}>unice</motion.b>
          </h1>
        </div>
        <div className='title'>
          <h1>
            pentru afacerea{' '}
            <motion.b whileHover={{color: 'orange'}}>ta</motion.b>
          </h1>
          <button>CE POT FACE EU ?</button>
        </div>
      </motion.div>
      <motion.div className='listContainer' variants={variants}>
        <motion.div
          className='box'
          whileHover={{background: 'lightgrey', color: 'black'}}
        >
          <h2>Proiectare</h2>
          <p>
            Ai nevoie de realizarea unei aplicații conform cerințelor proprii ?
            <br />
            Apelează-mă cu încredere!
          </p>
          <button>Contact</button>
        </motion.div>
        <motion.div
          className='box'
          whileHover={{background: 'lightgrey', color: 'black'}}
        >
          <h2>Suport tehnic</h2>
          <p>
            Orice aplicație complexă are nevoie de suport tehnic pentru a rula
            fără probleme.
            <br />
            Puteți oricând apela la serviciile mele!
          </p>
          <button>Contact</button>
        </motion.div>
        <motion.div
          className='box'
          whileHover={{background: 'lightgrey', color: 'black'}}
        >
          <h2>Idei de conținut</h2>
          <p>
            Totdeauna aveți nevoie de idei noi pentru a insufleți conținutul
            aplicației dvs.
            <br />
            Vă stau la dispoziție oricând cu idei noi de conținut!
          </p>
          <button>Contact</button>
        </motion.div>
        <motion.div
          className='box'
          whileHover={{background: 'lightgrey', color: 'black'}}
        >
          <h2>Branding</h2>
          <p>
            Vreți un aspect consistent al aplicație dvs. care-și păstrează
            stilul pe absolut toate paginile aplicației dvs.? <br />
            Poți apela oricând la serviciile mele!
          </p>
          <button>Contact</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
