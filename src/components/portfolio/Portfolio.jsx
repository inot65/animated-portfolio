import {useRef} from 'react';
import './portfolio.scss';
import {motion, useScroll, useSpring, useTransform} from 'framer-motion';

const items = [
  {
    id: 1,
    title: 'React Commerce',
    img: 'https://images.pexels.com/photos/12059444/pexels-photo-12059444.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci alias, illum facilis fugiat cupiditate rem quia debitis tempora itaque quo doloremque excepturi ex atque quam dolores, beatae quibusdam repellat dicta.',
  },
  {
    id: 2,
    title: 'Next.js Blog',
    img: 'https://images.pexels.com/photos/15839628/pexels-photo-15839628/free-photo-of-tabel-mic-dejun-ine-in-maini-cana-de-cafea.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci alias, illum facilis fugiat cupiditate rem quia debitis tempora itaque quo doloremque excepturi ex atque quam dolores, beatae quibusdam repellat dicta.',
  },
  {
    id: 3,
    title: 'Vanilla JS App',
    img: 'https://images.pexels.com/photos/18624571/pexels-photo-18624571/free-photo-of-seara-bokeh-haina-palton.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci alias, illum facilis fugiat cupiditate rem quia debitis tempora itaque quo doloremque excepturi ex atque quam dolores, beatae quibusdam repellat dicta.',
  },
  {
    id: 4,
    title: 'Music Appe',
    img: 'https://images.pexels.com/photos/9864565/pexels-photo-9864565.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci alias, illum facilis fugiat cupiditate rem quia debitis tempora itaque quo doloremque excepturi ex atque quam dolores, beatae quibusdam repellat dicta.',
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
            <button className='singleButton'>Vezi demo</button>
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
