import { createContext } from 'react';

export const defaultObject = {
  isAboutMeActive: false,
  handleBusinessCardClick: () => {},
};

export const AppContext = createContext(defaultObject);
