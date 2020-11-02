import React, { useContext } from 'react';
import { AppContext, defaultObject } from '../AppContext';
import BusinessCard from './BusinessCard';

const Responsive = () => {
  const { handleBusinessCardClick } = useContext(AppContext);

  return (
    <div className='menu menu--responsive' onClick={handleBusinessCardClick}>
      {/* <BusinessCard text='Who am I' /> */}
      <BusinessCard text='responsywnosc' />
    </div>
  );
};

export default Responsive;
