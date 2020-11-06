import { createContext } from 'react';

export const defaultObject = {
  isAboutMeActive: false,
  menuActive: 'start',
  handleBusinessCardClick: () => {},
};

export const AppContext = createContext(defaultObject);
