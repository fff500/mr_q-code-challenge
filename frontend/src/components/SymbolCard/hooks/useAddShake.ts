import { useState } from 'react';
import { VisualsClasses } from './types';

export const useAddShake = () => {
  const [shake, setShake] = useState<string>('');

  const addShake = (previousPrice: number, price: number): void => {
    if (Math.abs(price - previousPrice) > Math.abs(previousPrice * 0.25)) {
      setShake(VisualsClasses.Shake);
    }
  };

  return { shake, setShake, addShake };
};
