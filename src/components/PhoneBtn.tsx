import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import '../sass/PhoneBtn.scss';

const PhoneBtn = () => {
  return (
    <div className='phone-btn'>
      <a href="tel:+34689603837">
        <FontAwesomeIcon className='icon' icon={faPhone} />
    689603837
      </a>
    </div>
  );
};

export default PhoneBtn;