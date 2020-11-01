import React from 'react';
import AboutMe from './AboutMe';
import Description from './Description';
import Menu from './Menu';
import Phone from './Phone';
import Steps from './Steps';

const AnimationFrame = () => {
  return (
    <div className='animation-frame'>
      <AboutMe />
      <Description />
      <Steps />
      <Phone />
    </div>
  );
};

export default AnimationFrame;
