import React, { useEffect, useRef, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import emailjs from '@emailjs/browser';

import './index.scss';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const refForm = useRef();

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_s0hozro',
        'template_zrbzyxf',
        refForm.current,
        'user_dgDg768mve3AZ9qMYrzeN'
      )
      .then(
        () => {
          alert('Message successfully sent!');
          window.location.reload(false);
        },
        (e) => {
          alert('Failed to send message, please try again');
          console.log(e);
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={[...'Kontak Saya']}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p>
            Kontak saya jika anda memiliki sesuatu seperti saran, kritik,
            keperluan yang hendak dikatakan. Atau anda dapat sekedar berkata hai
            :v
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Nama" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subjek"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Pesan"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="KIRIM" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Evandra Raditya Fauzan, <br />
          Indonesia, <br />
          Jalan Aribuana no.21 50141,
          <br />
          Kota Semarang, <br />
          <span>evandraraditya049@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer
            center={[-6.975696442996729, 110.39467396370559]}
            zoom={50}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              className="map"
            />
            <Marker position={[-6.975696442996729, 110.39467396370559]}>
              <Popup>Evan tinggal di sini, datanglah untuk ngopi :v</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
