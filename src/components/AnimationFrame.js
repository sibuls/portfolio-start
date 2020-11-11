import React from 'react';

import AboutMe from './AboutMe';
import Contact from './Contact';
import Description from './Description';
import Laptop from './Laptop';
import Phone from './Phone';
import Projects from './Projects';

import Steps from './Steps';

const AnimationFrame = () => {
  return (
    <div className='animation'>
      <div className='animation__menu'>
        <Phone color={'white'} />
        {/* <Laptop /> */}

        <div className='animation__cards'>
          {' '}
          <AboutMe />
          <Description />
          <Steps />
          <Projects />
          <Contact />
        </div>
      </div>
      <div className='animation__laptop'>
        <Phone color={'black'} />
      </div>
    </div>
  );
};

export default AnimationFrame;
