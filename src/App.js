import React, { useState } from 'react';
import Div100vh from 'react-div-100vh';
import { AppContext, defaultObject } from './AppContext';

import AboutMe from './components/AboutMe';
import AnimationFrame from './components/AnimationFrame';
import Description from './components/Description';
import Phone from './components/Phone';
import Steps from './components/Steps';

const App = () => {
  const [isAboutMeActive, setIsAboutMeActive] = useState(
    defaultObject.isAboutMeActive
  );

  const handleBusinessCardClick = () => {
    setIsAboutMeActive(!isAboutMeActive);
    console.log('clicked handle business in App');
  };

  return (
    <Div100vh className='wrapper'>
      <div className='topbar'>
        <p>https://www.this.areaisdisabled.pl</p>
      </div>

      <div className='bottombar'>
        <p> lewo prawo</p>
      </div>
      {/* <div className='wrapper'> */}
      {/* <div className='line1'>1</div>
      <div className='line2'>2</div>
      <div className='line3'>3</div>
      <div className='line4'>4</div>
      <div className='line5'>5</div>
      <div className='line6'>6</div>
      <div className='line7'>7</div>
      <div className='line8'>8</div>
      <div className='line9'>9</div>
      <div className='line10'>10</div> */}
      <AppContext.Provider
        value={{
          isAboutMeActive: isAboutMeActive,
          handleBusinessCardClick: handleBusinessCardClick,
        }}
      >
        <AnimationFrame />
      </AppContext.Provider>
      {/* </div> */}
    </Div100vh>
  );
};

export default App;
