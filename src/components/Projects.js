import React, { useContext } from 'react';
import { AppContext, defaultObject } from '../AppContext';
import BusinessCard from './BusinessCard';

const Projects = () => {
  const { handleBusinessCardClick } = useContext(AppContext);

  return (
    <div
      className='menu  projects'
      // className='menu   projects-unorganized'

      onClick={handleBusinessCardClick}
    >
      {/* <BusinessCard text='Who am I' /> */}
      <BusinessCard text='projekty' />
    </div>
  );
};

export default Projects;
