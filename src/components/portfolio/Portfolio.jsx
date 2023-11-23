import {useRef} from 'react';
import './portfolio.scss';
import {motion, useScroll, useSpring, useTransform} from 'framer-motion';

const items = [
  {
    id: 1,
    title: 'React MapPin App',
    img: '/Mappin.PNG',
    desc: 'Aplicatie care permite unui utilizator logat la aplicatie sa plaseze pe o harta diverse puncte de interes vizibile si celorlalti utilizatori. Punctul de interes este editabil doar de catre utilizatorul care l-a realizat. .',
    link: 'https://frontend-mappin.onrender.com/',
  },
  {
    id: 2,
    title: 'React Blog',
    img: '/blog.png',
    desc: 'Aplicatie de blogging realizata in react. Orice utilizator inregistrat poate publica postari insotite de o imagine reprezentativa. Deasemenea isi poate modifica profilul, schimba parola, etc. Postarile personale pot fi editate, sau sterse. Se pot filtra postarile dupa utilizatorul care le-a postat, sau dupa categoriile in care se afla. Clik pe autor in pagina HOME si se vor afisa doar postarile acelui user. Click pe o categorie din cele afisate in dreapta si se vor afisa doar postarile din acea categorie.',
    link: 'https://frontend-blog-tan.vercel.app/',
  },
  {
    id: 3,
    title: 'Vanilla JS App',
    img: 'https://images.pexels.com/photos/18624571/pexels-photo-18624571/free-photo-of-seara-bokeh-haina-palton.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci alias, illum facilis fugiat cupiditate rem quia debitis tempora itaque quo doloremque excepturi ex atque quam dolores, beatae quibusdam repellat dicta.',
    link: '/#',
  },
  {
    id: 4,
    title: 'Music Appe',
    img: 'https://images.pexels.com/photos/9864565/pexels-photo-9864565.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci alias, illum facilis fugiat cupiditate rem quia debitis tempora itaque quo doloremque excepturi ex atque quam dolores, beatae quibusdam repellat dicta.',
    link: '/#',
  },
];

const Single = ({item}) => {
  const ref = useRef();

  const {scrollYProgress} = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className='container'>
        <div className='wrapper'>
          <div className='imageContainer' ref={ref}>
            <img src={item.img} alt='' />
          </div>
          <motion.div className='textContainer' style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button className='singleButton'>
              <a href={item.link} rel='noreferrer' target={'_blank'}>
                Vezi demo
              </a>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className='portfolio' ref={ref}>
      <div className='progress'>
        <h1>Lucrări realizate</h1>
        <motion.div style={{scaleX}} className='progressBar'></motion.div>
      </div>
      {items.map((item) => (
        <Single key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Portfolio;
