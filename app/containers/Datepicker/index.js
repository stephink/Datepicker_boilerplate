/**
 *
 * Datepicker
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {makeSelectDate,makeSelectIso }from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import DenseAppBar from './componets/appbar'
import DateAndTimePickers from './componets/datetime'

import {Load_Date_Picker} from './actions';

export function Datepicker(props) {
  useInjectReducer({ key: 'datepicker', reducer });
  useInjectSaga({ key: 'datepicker', saga });
  

  return (
    <div>
      <Helmet>
        <title>Datepicker</title>
        <meta name="description" content="Description of Datepicker" />
      </Helmet>
      <DenseAppBar />
      <form>
      <DateAndTimePickers label='DATE PICKER' type='datetime-local' onChange={props.handlechange}/>
      <DateAndTimePickers label='ISO FORMAT' type='text' value={props.iso}/>
      <DateAndTimePickers label='Date' type='text' value={props.dates}/>
      {console.log(props.dates)}
      
      
      </form>
      
    </div>
  );
}


Datepicker.propTypes = {
 
  dates:PropTypes.object,
  iso:PropTypes.string

};

const mapStateToProps = createStructuredSelector({
  dates: makeSelectDate(),
  iso:makeSelectIso()
});

function mapDispatchToProps(dispatch) {
  return {
    handlechange:(date)=>dispatch(Load_Date_Picker(date.target.value))
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Datepicker);
