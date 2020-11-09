import React, { useContext } from 'react';
import { AppContext, defaultObject } from '../AppContext';
import BusinessCard from './BusinessCard';
const Contact = () => {
  const { handleBusinessCardClick } = useContext(AppContext);

  return (
    <div
      className='menu contact'
      // className='menu   contact--unorganized'

      onClick={handleBusinessCardClick}
    >
      {/* <BusinessCard text='Who am I' /> */}
      <BusinessCard text='contact' />
    </div>
  );
};

export default Contact;
