import React from 'react';
import '../sass/Experience.scss';

type Props = {
    company: string
}

const ExperienceCard = (props: Props) => {
  return (
    <img className='experience-card' src={require(`../img/logo-${props.company}.png`)} alt={`logo de ${props.company}`} />
  );
};

export default ExperienceCard;