/**
 *
 * Task3
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { catFacts } from 'utils/cats';
import { useCycle } from './useCycle';

export function Task3() {
  const [counter, next, prev] = useCycle(catFacts.length, 5000);
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

export default Task3;
