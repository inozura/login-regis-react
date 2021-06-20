import { LOGINFALSE, LOGINTRUE } from '../typesReducer';

export const loginTrue = (data) => {
  return {
    type: LOGINTRUE,
    payload: data
  };
};

export const loginFalse = (data) => {
  return {
    type: LOGINFALSE,
    payload: data
  };
};