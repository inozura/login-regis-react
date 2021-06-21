import { LOGINFALSE, LOGINTRUE } from '../typesReducer';

export const loginAction = () => {
  return {
    type: LOGINTRUE,
  };
};

export const loginTrue = (data) => {
  return {
    type: LOGINTRUE,
    payload: data
  };
};

export const logout = (data) => {
  return {
    type: LOGINFALSE
  };
};