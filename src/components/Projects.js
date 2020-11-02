import React, { useContext } from 'react';
import { AppContext, defaultObject } from '../AppContext';
import BusinessCard from './BusinessCard';

const Projects = () => {
  const { handleBusinessCardClick } = useContext(AppContext);

  return (
    <div className='menu menu--projects' onClick={handleBusinessCardClick}>
      {/* <BusinessCard text='Who am I' /> */}
      <BusinessCard text='projekty' />
    </div>
  );
};

export default Projects;
