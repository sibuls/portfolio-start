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
  const [menuActive, setMenuActive] = useState(defaultObject.menuActive);

  const handleBusinessCardClick = (menu) => {
    // setIsAboutMeActive(!isAboutMeActive);
    setMenuActive(menu);

    console.log('clicked handle business in App');
    console.log(menu);
  };
  const paper = () => {
    return {
      /* <div className='paper'>
  <div className='paper__main'>
    <div className='paper__pattern'>
      <div className='paper__content'>notatki notatki notatki</div>
      <div className='paper__content'>notatki notatki notatki</div>
      <div className='paper__content'>notatki notatki notatki</div>
      <div className='paper__content'>notatki notatki notatki</div>
    </div>
  </div>
  <div className='paper__margin'></div>
</div> */
    };
  };

  return (
    <div className='wrapper'>
      <AppContext.Provider
        value={{
          isAboutMeActive: isAboutMeActive,
          menuActive: menuActive,
          handleBusinessCardClick: handleBusinessCardClick,
        }}
      >
        <AnimationFrame />
      </AppContext.Provider>
    </div>
  );
};

export default App;
