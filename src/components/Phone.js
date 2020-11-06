import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import { AppContext } from '../AppContext';
import AboutMe from './AboutMe';
import AboutMeInfo from './AboutMeInfo';
import DescriptionInfo from './DescriptionInfo';
import Hand from './Hand';
import '../sass/style.scss';
import styled, { css, keyframes, createGlobalStyle } from 'styled-components';
import Info from './Info';

const Phone = () => {
  const { isAboutMeActive, menuActive } = useContext(AppContext);
  const animationTop = menuActive === 'start' ? '50%' : '60%';
  const animationLeft = menuActive === 'start' ? '150%' : '51%';
  const animationIterationCount = menuActive === 'start' ? '1' : '8';
  const animationTime = menuActive === 'start' ? '1s' : '0.1s';
  const screenTime = menuActive === 'start' ? '3s' : '1s';
  const screenOpacity = menuActive === 'start' ? '0' : '0.5';

  const phoneRing = keyframes`
  0% {
  
   top:${animationTop};
   left:${animationLeft};
  transform: translate(-50%, -50%) skew(15deg, 0deg) scale(1.2) rotate(-5deg);
  }
  50% {
    // transform: translate(-50%, -50%)   skew(15deg, 0deg) scale(1.2) rotate(-16deg)  ;
  }
  100% {
    transform: translate(-50%, -50%) skew(15deg, 0deg) scale(1.2) rotate(-5deg);
    top: 60%;
    left: 51%;
  }
`;

  const screenFade = keyframes`
0% {


 opacity: 0;
}
50% {
  opacity:${screenOpacity}

}
100% {
 
  opacity:1;


}
`;

  const DivAnimation = styled.div`
    animation: ${animationTime} ${phoneRing} ease-out ${animationIterationCount};
  `;

  const ScreenAnimation = styled.div`
    animation: ${screenTime} ${screenFade} ease-out 1;
  `;

  const phone = () => {
    return (
      <DivAnimation className='phone phone-anime'>
        {' '}
        <div className='phone-part phone__frame'></div>
        <div className='phone-part phone__glass'>
          <div className='phone-part phone__glass--bottom'></div>
        </div>
        <div className='phone-part phone__screen phone__screen--iphone'>
          <ScreenAnimation className='phone__browser'>
            <Info />
          </ScreenAnimation>
        </div>
        <div className='phone-part phone__microphone'></div>
        <div className='phone-part phone__microphone phone__microphone--second'></div>
        <div className='phone-part phone__front-camera'></div>
        <div className='phone-part phone__home-button phone__home-button--iphone'>
          <div className='phone-part phone__home-button--inside'></div>
        </div>
        {/* <div className='phone-part phone__arrow'>
          <div className='phone-part  phone__triangle'></div>
          <div className='phone-part phone__line'></div>
        </div> */}
        {/* <div className='phone-part phone__squares'>
          <div className='phone-part phone__square'></div>
          <div className='phone-part phone__square phone__square--bottom'></div>
        </div> */}
        <div className='phone-part phone__bottom'></div>
      </DivAnimation>
    );
  };

  return <div> {phone()}</div>;
};

export default Phone;
