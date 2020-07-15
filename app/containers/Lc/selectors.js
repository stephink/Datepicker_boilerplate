import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the lc state domain
 */

const selectLcDomain = state => state.lc || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Lc
 */

const makeSelectLc = () =>
  createSelector(
    selectLcDomain,
    substate => substate,
  );
const makeSelectUser = () =>
  createSelector(
    selectLcDomain,
    substate => substate.user,
  );

export default makeSelectLc;
export { selectLcDomain,makeSelectUser };
