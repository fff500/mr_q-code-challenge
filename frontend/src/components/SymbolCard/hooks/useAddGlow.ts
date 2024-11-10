import { useState } from 'react';
import { VisualsClasses } from './types';

export const useAddGlow = () => {
  const [glow, setGlow] = useState<string>('');

  const addGlow = (previousPrice: number, price: number): void => {
    if (!!(price - previousPrice)) {
      if (price > previousPrice) {
        setGlow(VisualsClasses.GreenGlow);
      } else {
        setGlow(VisualsClasses.RedGlow);
      }
    }
  };

  return { glow, setGlow, addGlow };
};
