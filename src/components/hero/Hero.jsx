import './hero.scss';
import {motion} from 'framer-motion';
import {useState} from 'react';
import {useEffect} from 'react';

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 30,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: '-420%',
    transition: {
      repeat: Infinity,
      duration: 40,
      repeatType: 'mirror',
      staggerChildren: 0.1,
    },
  },
};

const Hero = () => {
  const [butonProiecte, setButonProiecte] = useState(null);
  const [butonContact, setButonContact] = useState(null);

  useEffect(() => {
    setButonProiecte(document.getElementById('linkProiecte'));
    setButonContact(document.getElementById('linkContact'));
  }, []);

  // const butonProiecte = document.getElementById('linkProiecte');
  // const butonContact = document.getElementById('linkContact');

  useEffect(() => {
    if (butonProiecte) {
      butonProiecte.addEventListener('click', handleLinkProiecte);
      console.log('butonProiecte: ', butonProiecte);
    }
    if (butonContact) {
      butonContact.addEventListener('click', handleLinkContact);
      console.log('butonContact: ', butonContact);
    }
  }, [butonProiecte, butonContact]);

  const handleLinkProiecte = () => {
    console.log('Sar la portofoliu !');
    window.location.replace('#Portofoliu');
  };
  const handleLinkContact = () => {
    console.log('Sar la portofoliu !');
    window.location.replace('#Contact');
  };

  return (
    <div className='hero'>
      <div className='wrapper'>
        <motion.div
          className='textContainer'
          variants={textVariants}
          initial='initial'
          animate='animate'
        >
          <motion.h2 variants={textVariants}>PRUNĂ TOMIȚĂ</motion.h2>
          <motion.h1 variants={textVariants}>
            Wep developer și UI designer
          </motion.h1>
          <motion.div className='buttons' variants={textVariants}>
            <motion.button
              id='linkProiecte'
              variants={textVariants}
              onClick={handleLinkProiecte}
            >
              Vezi ultimele mele lucrări
            </motion.button>
            <motion.button id='linkContact' variants={textVariants}>
              Contactează-mă
            </motion.button>
          </motion.div>
          <motion.img
            src='/scroll.png'
            alt=''
            variants={textVariants}
            animate='scrollButton'
          />
        </motion.div>
      </div>
      <motion.div
        className='slidingTextContainer'
        variants={sliderVariants}
        initial='initial'
        animate='animate'
      >
        Creator de continut, proiectant de aplicatii, branding
      </motion.div>
      <div className='imageContainer'>
        <img src='/hero.png' alt='' />
      </div>
    </div>
  );
};

export default Hero;
