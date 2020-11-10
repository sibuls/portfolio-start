import React, { useContext } from 'react';
import { AppContext, defaultObject } from '../AppContext';
import BusinessCard from './BusinessCard';

function Steps() {
  const { handleBusinessCardClick } = useContext(AppContext);
  return (
    <div
      className='menu  steps'
      //  className='menu  steps  steps--unorganized'
      onClick={() => handleBusinessCardClick('steps')}
    >
      <BusinessCard text={'Steps'} />
    </div>
  );
}

export default Steps;
