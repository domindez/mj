import React from 'react';
import '../sass/Services.scss';
import ServiceCard from './ServiceCard';

const Services = () => {
  return (
    <section className='services'>
      <div className='text'>
        <h2><strong>Consulta psicológica online y presencial</strong></h2>
        <p>
        Podemos tratar tu caso desde la comodidad de tu hogar. Las sesiones de
          <strong>psicología online</strong> son la forma más confortable de hacerlo. Pero si
        prefieres hacerlo de forma presencial puedes venir a mi consulta en
        Málaga.
        </p>
      </div>

      <div className='services__images'>
        <ServiceCard service={'Espacio seguro LGTBIQ'}/>
        <ServiceCard service={'Niños'}/>
        <ServiceCard service={'Adultos'}/>
        <ServiceCard service={'Parejas'}/>
      </div>
    </section>
  );
};

export default Services;
