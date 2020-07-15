/**
 *
 * Lc
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {makeSelectLc,makeSelectUser} from './selectors';
import reducer from './reducer';
import saga from './saga';
import TextFields from './components/textbox'
import ContainedButtons from './components/button'
import { passwords,usernames,login,logout } from './actions';



export function Lc(props) {
  useInjectReducer({ key: 'lc', reducer });
  useInjectSaga({ key: 'lc', saga });
  var val = localStorage.getItem('username');
  
  const Log=()=>{
    return(
    <div>
      <form>
      <TextFields label='Username' type='text' onchange={props.users}/>
      <TextFields label='Password' type='password' onchange={props.passwd} />
      <ContainedButtons onclick={props.login} name="Login" />
      </form>
    </div>
    )
  }
  const Noval=()=>{
    return(
    <div>
      <form>
    <span>HELLO,WELCOME {val}</span>
      <ContainedButtons onclick={props.logout} name="Logout" />
      </form>
    </div>
    )
  }


  return (
    <div>
      {val==null?<Log />:<Noval />}
    </div>
    
  );
}

Lc.propTypes = {
  
  lc:PropTypes.string
  
};

const mapStateToProps = createStructuredSelector({
 
  user:makeSelectUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    users:(user)=>dispatch(usernames(user.target.value)),
    passwd:(pswd)=>dispatch(passwords(pswd.target.value)),
    login:()=>dispatch(login()),
    logout:()=>dispatch(logout())
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Lc);
