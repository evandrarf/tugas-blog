import React, { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import {
  faNodeJs,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './index.scss';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={[...'Tentang Saya']}
            idx={15}
          />
        </h1>
        <p>
          Saya Evandra Raditya Fauzan. Saya adalah siswa dari SMK Negeri 7
          Semarang yang saat ini duduk di kelas XI. Saya memasuki jurusan SIJA
          (Sistem Informatika Jaringan dan Aplikasi).
        </p>
        <p>
          Saya memiliki ketertarikan dengan dunia teknologi komputer. Selain itu
          saya memiliki hobi bermain game dan bersepeda
        </p>
        <p>
          Saat ini saya sedang belajar mengenai pengembangan aplikasi web (web
          development). Saya belajar mengenai HTML, CSS, Javascript, ReactJs,
          NodeJs dll
        </p>
      </div>
      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faNodeJs} color="#3c873a" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </div>
  );
};

export default About;
