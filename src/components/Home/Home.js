import React, { useState, useEffect } from 'react';

import './index.scss';
import LogoE from '../../assets/images/logo-lines.png';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import Logo from './Logo/Logo';
import Loader from 'react-loaders';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover');
    }, 5600);
  }, []);

  useEffect(() => {
    alert(
      'Website belum tersedia dalam tampilan handphone, oleh karena itu mungkin akan terlihat jelek apabila dibuka melalui handphone. Buka-lah dengan desktop'
    );
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={`${letterClass} _12`}>H</span>
            <span className={`${letterClass} _13`}>a</span>
            <span className={`${letterClass} _14`}>i</span> <br />
            <span className={`${letterClass} _15`}>S</span>
            <span className={`${letterClass} _16`}>a</span>
            <span className={`${letterClass} _17`}>y</span>
            <span className={`${letterClass} _18`}>a</span>&nbsp;
            <img src={LogoE} alt="E" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[...'vandra']}
              idx={19}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[...'Siswa SMK Negeri 7 Semarang']}
              idx={24}
            />
          </h1>
          <Link to="/contact-link" className="flat-button">
            Kontak Saya
          </Link>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Home;
