import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import { AppContext } from '../AppContext';
import AboutMe from './AboutMe';
import AboutMeInfo from './AboutMeInfo';
import DescriptionInfo from './DescriptionInfo';
import '../sass/style.scss';
import styled, { css, keyframes, createGlobalStyle } from 'styled-components';
import Info from './Info';

// assign components to animations - have to be outside of the function, but we can get to all animation by props
const DivAnimation = styled.div`
  animation: 5s ${(props) => props.phoneShowMain} ease-out 1;
`;

//
//

const PhoneBottom = styled.div`
  animation: 1s 0s ${(props) => props.phoneBottomAnime} ease-out 1,
    3s 0s ${(props) => props.phoneToTabletBottom} ease-out forwards;
`;

//
//

const Frame = styled.div`
  animation: 3s 0s ${(props) => props.frameAnime} ease-out 1,
    4s 1s ${(props) => props.phoneToTabletFrame} ease-out forwards; ;
`;
const Screen = styled.div`
  animation: 5s 0s ${(props) => props.screenAnime} ease-out 1,
    6s 0s ${(props) => props.phoneToTabletScreen} ease-out forwards;
`;
const Browser = styled.div`
  animation: ${(props) => props.screenTime} ${(props) => props.screenFade}
      ease-out 1,
    6s 0s ${(props) => props.phoneToTabletBrowser} ease-out forwards;
`;
const Glass = styled.div`
  animation: 4s 0s ${(props) => props.glassAnime} ease-out 1,
    4s 1.5s ${(props) => props.phoneToTabletGlass} ease-out forwards;
`;
const ButtonAnime = styled.div`
  animation: 6s 0s ${(props) => props.accesoriesAnime} ease-out 1;
`;
const Microphone = styled.div`
  animation: 6s 0s ${(props) => props.accesoriesAnime} ease-out 1;
`;
const Camera = styled.div`
  animation: 6s 0s ${(props) => props.accesoriesAnime} ease-out 1;
`;
// end of assign components to animations

// --- main function start ---

const Phone = (props) => {
  const { isAboutMeActive, menuActive } = useContext(AppContext);
  const animationStartTop = menuActive === 'start' ? '50%' : '56%';
  const animationStartLeft = menuActive === 'start' ? '150%' : '51%';
  // const animationTime = menuActive === 'start' ? '5s' : '3s';
  const screenTime = menuActive === 'start' ? '10s' : '1s';
  const screenOpacity = menuActive === 'start' ? '0' : '0.6';

  // --loading page animations--
  //
  // main animation - makes whole phone visible
  const phoneShowMain = keyframes`
  0% {
  top:${animationStartTop};
  left:${animationStartLeft};
  transform: translate(-50%, -50%) skew(15deg, 0deg) scale(1.2) rotate(-5deg);
  }
  10%{
  top: 56%;
  left: 51%;
  }`;

  // fist animation of phone parts - gold bottom
  const phoneBottomAnime = keyframes`
  0% {${menuActive === 'start' ? 'top: 60%; left: 51%; opacity:0;' : null}}
  `;

  //  second animation of phone parts - white frame
  const frameAnime = keyframes`
  0% {${menuActive === 'start' ? 'top: -50%; left: 51%; opacity:0;  ' : null}}
  `;

  //  third animation on phone parts - glass
  const glassAnime = keyframes`
  0% {${menuActive === 'start' ? 'top: -30%; left: 0%; opacity:0;' : null}}
  20% {${
    menuActive === 'start'
      ? 'top: -150%; left: 0%; opacity:0;  transform: rotate(-90deg);'
      : null
  }}
  30% {${menuActive === 'start' ? 'top: -130%; left: 0%; opacity:1;' : null}}
  `;

  //  fourth animation on phone parts - black screen (browser)
  const screenAnime = keyframes`
  0% {${menuActive === 'start' ? '   opacity:0;  ' : null}}
  90% {${menuActive === 'start' ? '   opacity:0;    ' : null}}
  `;

  //  fifth animation on phone parts - accesories: button, camera, speaker
  const accesoriesAnime = keyframes`
  0% {${menuActive === 'start' ? 'opacity:0;' : null}}
  60% {${menuActive === 'start' ? 'opacity:0;' : null}}
  `;

  // animation black/white screen - works for start animation and changing menu
  const screenFade = keyframes`
    0% {opacity:0;}
    // 50% {opacity:${screenOpacity}}
    60% {opacity:${screenOpacity}}
    100% {opacity:1;}`;
  //
  // --end of loading page animations--

  //--start animations: transform phone to tablet--

  // fist animation of phone parts - gold bottom
  const phoneToTabletBottom = keyframes`
  0% {${menuActive === 'steps' ? 'height:100%;' : null}}
  10% {${menuActive === 'steps' ? 'height:100%;' : null}}
  80% {${menuActive === 'steps' ? 'height:100%;' : null}}
  100% {${menuActive === 'steps' ? 'width:250%; height:90%;left:-60%' : null}}
  `;

  const phoneToTabletScreen = keyframes`
  0% {${
    menuActive === 'steps'
      ? 'width:90%; height:75%; left:5%; top:12%; background:black; '
      : null
  }}
  30% {${
    menuActive === 'steps'
      ? 'width:90%; height:75%; left:5%; top:12%; background:black;  '
      : null
  }}
 
  99% {${menuActive === 'steps' ? 'background:black;  ' : null}}

  100% {${
    menuActive === 'steps' ? 'width:180%; height:70% ;top:10%;left:-30%' : null
  }}
  `;

  const phoneToTabletBrowser = keyframes`
  0% {${menuActive === 'steps' ? ' opacity:0;' : null}}
 
  
  60% {${menuActive === 'steps' ? '  opacity:0;' : null}}
  100% {${
    menuActive === 'steps'
      ? 'width:180%; height:70%;top:10%; left:-30%; '
      : null
  }}
  `;

  const phoneToTabletFrame = keyframes`
  0% {${menuActive === 'steps' ? '' : null}}
  100% {${menuActive === 'steps' ? 'width:240%; height:90%;left:-60%;' : null}}
  `;

  const phoneToTabletGlass = keyframes`
  0% {${menuActive === 'steps' ? '' : null}}
  100% {${menuActive === 'steps' ? 'width:240%; height:90%;left:-60%; ' : null}}
  `;

  //--end animations: transform phone to tablet--

  // return Phone function
  return (
    <React.Fragment>
      <DivAnimation
        // animationTime={animationTime}
        phoneShowMain={phoneShowMain}
        // className='phone phone-anime'
        className='phone '
      >
        {' '}
        <Frame
          frameAnime={frameAnime}
          phoneToTabletFrame={phoneToTabletFrame}
          className={`${
            props.color === 'white'
              ? 'phone-part phone__frame'
              : 'phone-part phone__frame phone__frame--black'
          }`}
        ></Frame>
        <Glass
          glassAnime={glassAnime}
          phoneToTabletGlass={phoneToTabletGlass}
          className='phone-part phone__glass'
        ></Glass>
        <Screen
          screenAnime={screenAnime}
          phoneToTabletScreen={phoneToTabletScreen}
          className='phone-part phone__screen phone__screen--modelx'
        >
          <Browser
            screenTime={screenTime}
            screenFade={screenFade}
            phoneToTabletBrowser={phoneToTabletBrowser}
            className='phone__browser'
          >
            <Info />
          </Browser>
        </Screen>
        <Microphone
          accesoriesAnime={accesoriesAnime}
          className='phone-part phone__microphone phone__microphone--second'
        ></Microphone>
        <Camera
          accesoriesAnime={accesoriesAnime}
          className='phone-part phone__front-camera'
        ></Camera>
        <ButtonAnime
          accesoriesAnime={accesoriesAnime}
          className='phone-part phone__home-button phone__home-button--modelx'
        >
          <div className='phone-part phone__home-button--inside'></div>
        </ButtonAnime>
        <PhoneBottom
          phoneBottomAnime={phoneBottomAnime}
          phoneToTabletBottom={phoneToTabletBottom}
          className={
            menuActive === 'steps'
              ? 'phone-part phone__bottom phone__bottom--tablet'
              : 'phone-part phone__bottom'
          }
        ></PhoneBottom>
      </DivAnimation>
    </React.Fragment>
  );
};

export default Phone;
