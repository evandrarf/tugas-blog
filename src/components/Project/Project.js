import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import projectList from './project-list';

import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Project = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [currentProject, setCurrentProject] = useState(0);
  const [fullImage, setFullImage] = useState(null);
  const [showFullImage, setShowFullImage] = useState(false);

  const showFullImageFunc = (i) => {
    setFullImage(projectList[i].img);
    setShowFullImage(true);
  };

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((currentProject) => {
        if (currentProject === projectList.length - 1) {
          return 0;
        }
        return currentProject + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  });

  return (
    <>
      <div className="container project-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={[...'Projek dan Prestasi']}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p>
            Saya sudah pernah membuat berbagai macam karya baik itu tugas dari
            sekolah maupun mandiri. Saya juga memiliki beberapa sertifikat
          </p>
        </div>
        <div className="card-wrapper">
          {projectList.map((item, i) => (
            <>
              <div
                key={item.name + i}
                className={i == currentProject ? 'card active' : 'card'}
              >
                <div
                  className="img-container"
                  onClick={() => showFullImageFunc(i)}
                >
                  <img className="img" src={item.img} />
                </div>
                <div className="title">{item.name}</div>
                <div className="desc">{item.desc}</div>
              </div>
            </>
          ))}
          <div className="card-amount">
            {projectList.map((item, i) => (
              <div
                key={item + i}
                className={i == currentProject ? 'active' : ''}
                onClick={() => setCurrentProject(i)}
              ></div>
            ))}
          </div>
        </div>
      </div>
      <Loader type="pacman" />
      <div className={`full-image-container ${showFullImage ? 'active' : ''}`}>
        <FontAwesomeIcon
          icon={faXmark}
          fontSize={56}
          color="#ddd"
          onClick={() => setShowFullImage(false)}
        />
        <img src={fullImage} />
      </div>
    </>
  );
};

export default Project;
