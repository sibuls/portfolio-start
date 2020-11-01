import React, { useContext, useState } from 'react';
import { AppContext } from '../AppContext';
import AboutMe from './AboutMe';
import AboutMeInfo from './AboutMeInfo';
import Hand from './Hand';

const Phone = () => {
  const { isAboutMeActive } = useContext(AppContext);
  console.log(isAboutMeActive);
  return (
    <div className='phone phone-anime'>
      {' '}
      <div className='phone__frame'></div>
      <div className='phone__screen'>
        {isAboutMeActive ? <AboutMeInfo /> : <p>ssfsfs</p>}
      </div>
      <div className='phone__microphone'></div>
      <div className='phone__microphone phone__microphone--second'></div>
      <div className='phone__front-camera'></div>
      <div className='phone__home-button'></div>
      <div className='phone__bottom'></div>
    </div>
  );
};

export default Phone;
