import React from 'react';
import ExperienceCard from './ExperienceCard';
import '../sass/Experience.scss';

const Experiene = () => {
  return (
    <section>
      <h2>Mi experiencia</h2>
      <div className='experience__cards-container'>
        <ExperienceCard company={'atrio'}/>
        <ExperienceCard company={'engloba'}/>
        <ExperienceCard company={'uma'}/>
        <ExperienceCard company={'acude'}/>
      </div>
    </section>
  );
};

export default Experiene;