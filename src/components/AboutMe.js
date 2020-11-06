import React, { useContext } from 'react';
import { AppContext, defaultObject } from '../AppContext';
import BusinessCard from './BusinessCard';

const AboutMe = () => {
  const { handleBusinessCardClick } = useContext(AppContext);

  return (
    <div
      className='menu about-me'
      // className='menu about-me--unorganized'
      onClick={() => handleBusinessCardClick('aboutme')}
    >
      {/* <BusinessCard text='Who am I' /> */}
      <BusinessCard text='Who am I' />
    </div>
  );
};

export default AboutMe;
