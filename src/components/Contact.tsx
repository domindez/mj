import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsappSquare } from '@fortawesome/free-brands-svg-icons'; // <-- import styles to be used

import React from 'react';
import '../sass/Contact.scss';
import PhoneBtn from './PhoneBtn';

const Contact = () => {
  return (
    <section className='contact'>
      <div className='contact__grid'>
        <div>
          <img
            src={require('../img/maria-contreras-psicologa-contact-2.webp')}
            alt='maria contreras psicologa'
          />
        </div>
        <div>
          <h3>Pide una cita por WhatsApp</h3>
          <a className='whatsapp' href='https://api.whatsapp.com/send?phone=34689603837&text=Hola,%20me%20gustar%C3%ADa%20consultar%20disponibilidad%20para%20una%20cita.'>
            <FontAwesomeIcon className='whatsapp__icon' icon={faWhatsappSquare} />
          </a>
        </div>
        <div>
          <h3>O llámame ahora</h3>
          <PhoneBtn />
          <h4 className='mail'>info@mariacontreraspsicologa.com</h4>
        </div>
      </div>
    </section>
  );
};

export default Contact;
