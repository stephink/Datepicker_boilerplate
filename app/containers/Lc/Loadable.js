/**
 *
 * Asynchronously loads the component for Lc
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
