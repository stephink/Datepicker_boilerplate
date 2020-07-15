/*
 *
 * Lc reducer
 *
 */
import produce from 'immer';
import { LOGIN,USER,PASSWORD,LOGOUT } from './constants';;

export const initialState = {
  users:'',
  paswd:''
};

/* eslint-disable default-case, no-param-reassign */
const lcReducer = (state = initialState, action) =>
  produce(state,draft => {
    switch (action.type) {
      case USER:
        console.log(state)
        draft.users=action.username
        console.log(state)
        return draft
        break;
        case PASSWORD:
          console.log(state)
          draft.paswd=action.password
          console.log(state)
          return draft
          break;
        case LOGIN:
          localStorage.setItem("username", state.users);
          window.location.reload(false)
          break;
        case LOGOUT:
          console.log("ggag")
          localStorage.clear();
          window.location.reload(false)
          break;
        default:
          return draft
    }
  });

export default lcReducer;
