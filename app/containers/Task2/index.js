/**
 *
 * Task2
 *
 */

import React, { useEffect, useState } from 'react';

// import PropTypes from 'prop-types';
import { catFacts } from 'utils/cats';

export function Task2() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(next, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const next = () => {
    if (counter + 1 < catFacts.length) {
      return setCounter(ctr => ctr + 1);
    }

    return setCounter(0);
  };

  const prev = () => {
    if (counter > 0) {
      return setCounter(ctr => ctr - 1);
    }

    return setCounter(catFacts.length - 1);
  };

  return (
    <div style={{ width: '50%', padding: '10px', margin: '0 auto' }}>
      <h1 style={{ height: '150px' }}> {catFacts[counter]} </h1>
      <button type="button" onClick={prev}>
        {'<< prev'}
      </button>
      <button type="button" onClick={next}>
        {'next>>'}
      </button>
    </div>
  );
}

export default Task2;
