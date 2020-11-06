import React from 'react';
import AboutMe from './AboutMe';
import Pencil from './Pencil';

const BusinessCard = (props) => {
  return (
    <div className='business-card'>
      <div className='business-card__title'>
        <p className='business-card__content'>{props.text}</p>
      </div>

      <div className='business-card__square business-card__square--xsmall'></div>
      <div className='business-card__square business-card__square--large'></div>
      <div className='business-card__square business-card__square--medium'></div>
      <div className='business-card__square business-card__square--draw'>
        <Pencil />
      </div>
      <div className='business-card__square business-card__square--small'></div>
    </div>
  );
};

export default BusinessCard;
