import React, { useState } from 'react';
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
    <div className='wrapper'>
      <AppContext.Provider
        value={{
          isAboutMeActive: isAboutMeActive,
          handleBusinessCardClick: handleBusinessCardClick,
        }}
      >
        <AnimationFrame />
      </AppContext.Provider>
    </div>
  );
};

export default App;
