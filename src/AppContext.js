import { createContext } from 'react';

export const defaultObject = {
  isAboutMeActive: false,
  menuActive: 'start',
  handleBusinessCardClick: () => {},
  color: 'white',
};

export const AppContext = createContext(defaultObject);
