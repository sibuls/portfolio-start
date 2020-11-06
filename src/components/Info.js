import React, { useContext } from 'react';
import { AppContext, defaultObject } from '../AppContext';
import AboutMeInfo from './AboutMeInfo';
import BusinessCard from './BusinessCard';
import DescriptionInfo from './DescriptionInfo';

const Info = () => {
  const { isAboutMeActive, menuActive } = useContext(AppContext);

  const menu = menuActive;
  const menuSwitch = (menu) => {
    switch (menu) {
      case 'aboutme':
        return (
          <div className='info info--aboutme'>
            <AboutMeInfo />
          </div>
        );
        break;
      case 'description':
        return (
          <div className='info info--description'>
            <DescriptionInfo />
          </div>
        );
        break;
      default:
        return <div>Choose any option</div>;
      // code block
    }
  };

  return <React.Fragment>{menuSwitch(menu)}</React.Fragment>;
};

export default Info;
