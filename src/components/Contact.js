import React, { useContext } from 'react';
import { AppContext, defaultObject } from '../AppContext';
import BusinessCard from './BusinessCard';
const Contact = () => {
  const { handleBusinessCardClick } = useContext(AppContext);

  return (
    <div className='menu menu--contact' onClick={handleBusinessCardClick}>
      {/* <BusinessCard text='Who am I' /> */}
      <BusinessCard text='kontakt' />
    </div>
  );
};

export default Contact;
