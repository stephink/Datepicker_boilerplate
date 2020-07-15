/*
 *
 * Lc actions
 *
 */

import { LOGIN,USER,PASSWORD,LOGOUT } from './constants';

export function usernames(username) {
  return {
    type: USER,
    username
  };
}
export function passwords(password) {
  return {
    type: PASSWORD,
    password
  };
}
export function login() {
  return {
    type: LOGIN,
  };
}
export function logout() {
  return {
    type: LOGOUT,
    
  };
}

