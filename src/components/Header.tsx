import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons'; // <-- import styles to be used
import React from 'react';
import '../sass/Header.scss';
import PhoneBtn from './PhoneBtn';

const Header = () => {
  return (
    <header className='header'>
      <img src={require('../img/logo-maria-contreras-psicologa.png')} />
      <div className='buttons'>
        <a href="https://www.linkedin.com/in/m-%C3%A1ngeles-contreras-55b85364/"><FontAwesomeIcon className='linkedin' icon={faLinkedin}/></a>
        <PhoneBtn />
        <a href="https://www.linkedin.com/in/m-%C3%A1ngeles-contreras-55b85364/"><FontAwesomeIcon className='header-whatsapp' icon={faWhatsappSquare}/></a>
      </div>
    </header>
  );
};

export default Header;
