/**
 *
 * Datepiker
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Datepiker() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Datepiker.propTypes = {};

export default memo(Datepiker);
