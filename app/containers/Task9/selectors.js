import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the task9 state domain
 */

const selectTask9Domain = state => state.task9 || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Task9
 */

const makeSelectTask9 = () =>
  createSelector(
    selectTask9Domain,
    substate => substate,
  );

export default makeSelectTask9;
export { selectTask9Domain };
