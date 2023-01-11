import React from 'react';
import '../sass/Services.scss';

type Props = {
    service: string
}

const ServiceCard = (props: Props) => {
  return (
    <div className='service-card'>
      <img src={require(`../img/psicologa-${props.service}.png`)} alt={`servicio de consulta psicologia para ${props.service}`} />
      <h3>{props.service}</h3>
    </div>
  );
};

export default ServiceCard;
