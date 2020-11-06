import React, { useContext } from 'react';
import { AppContext, defaultObject } from '../AppContext';
import BusinessCard from './BusinessCard';

const Responsive = () => {
  const { handleBusinessCardClick } = useContext(AppContext);

  return (
    <div
      className='menu responsive'
      // className='menu   responsive-unorganized'

      onClick={handleBusinessCardClick}
    >
      {/* <BusinessCard text='Who am I' /> */}
      <BusinessCard text='responsywnosc' />
    </div>
  );
};

export default Responsive;
