/**
 *
 * Asynchronously loads the component for Datepiker
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
