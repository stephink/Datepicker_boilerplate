import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the datepicker state domain
 */

const selectDatepickerDomain = state => state.datepicker || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Datepicker
 */

const makeSelectDate = () =>
  createSelector(
    selectDatepickerDomain,
    substate => substate.dates
  );
const makeSelectIso = () =>
  createSelector(
    selectDatepickerDomain,
    substate => substate.iso
  );


export { selectDatepickerDomain,makeSelectDate,makeSelectIso };
