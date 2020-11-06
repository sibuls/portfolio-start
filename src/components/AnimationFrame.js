import React from 'react';

import AboutMe from './AboutMe';
import Contact from './Contact';
import Description from './Description';
import Laptop from './Laptop';
import Phone from './Phone';
import Projects from './Projects';
import Responsive from './Responsive';
import Steps from './Steps';

const AnimationFrame = () => {
  return (
    <div className='animation__frame'>
      {/* <div className='animation__line'></div> */}
      <Phone />
      <Laptop />
      <AboutMe />
      <Description />
      <Steps />
      {/* <Responsive /> */}
      <Projects />
      <Contact />
    </div>
  );
};

export default AnimationFrame;
