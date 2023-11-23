import React from 'react';
import {motion} from 'framer-motion';

import './navbar.scss';
import Sidebar from '../sidebar/Sidebar';

const Navbar = () => {
  return (
    <div className='navbar'>
      {/* Sidebar */}
      <Sidebar />
      <div className='wrapper'>
        <motion.span
          initial={{opacity: 0, scale: 0.5}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 0.5}}
        >
          toniDev
        </motion.span>
        <div className='social'>
          <a href='#1'>
            <img src='/facebook.png' alt='' />
          </a>
          <a href='#1'>
            <img src='/instagram.png' alt='' />
          </a>
          <a href='#1'>
            <img src='/youtube.png' alt='' />
          </a>
          <a href='#1'>
            <img src='/dribbble.png' alt='' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
