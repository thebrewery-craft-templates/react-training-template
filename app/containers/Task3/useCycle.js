import { useState, useEffect } from 'react';

export const useCycle = (max, intervalLength) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(next, intervalLength);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const next = () => {
    if (counter + 1 < max) {
      return setCounter(ctr => ctr + 1);
    }

    return setCounter(0);
  };

  const prev = () => {
    if (counter > 0) {
      return setCounter(ctr => ctr - 1);
    }

    return setCounter(max - 1);
  };

  return [counter, next, prev, setCounter];
};
