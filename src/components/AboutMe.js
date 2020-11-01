import React, { useContext, useState } from 'react';
import { AppContext, defaultObject } from '../AppContext';
import BusinessCard from './BusinessCard';
import Phone from './Phone';

const AboutMe = () => {
  const { handleBusinessCardClick } = useContext(AppContext);

  return (
    <div className='menu menu--about-me' onClick={handleBusinessCardClick}>
      <BusinessCard text='Who am I' />
    </div>
  );
};

export default AboutMe;
