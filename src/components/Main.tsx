import React from 'react';
import '../sass/Main.scss';

const Main = () => {
  return (
    <section className='main'>
      <div className='left'>

        <div className='text-box'>
          <h2 className='tittle'>
            <strong>Psicóloga sanitaria, experta en terapia sistémica.</strong>
          </h2>
          <p className='text'>
            Mi trabajo consiste en acompañarte en este proceso de mejora y
            cambio personal que vas a iniciar a través de un enfoque sistémico
            centrado en soluciones. Lo haremos a través de la escucha y del
            trabajo en equipo; a través de tus habilidades y tus propias
            herramientas estableceremos objetivos propios y realistas que te
            lleven a conseguir aquello que quieres.{' '}
          </p>
          <h3 className='signature'>M. Ángeles Contreras</h3>
        </div>

      </div>
      <div className="right">
        <img src={require('../img/maria-contreras-psicologa.webp')} />
      </div>
    </section>
  );
};

export default Main;
