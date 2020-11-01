import React from 'react';
import AboutMe from './AboutMe';

const BusinessCard = (props) => {
  return (
    <div className='business-card'>
      <p>{props.text}</p>
      <p>{props.text2}</p>
    </div>
  );
};

export default BusinessCard;
