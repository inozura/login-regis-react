import { LOGINFALSE, LOGINTRUE } from '../typesReducer';

export const loginTrue = () => {
  return {
    type: LOGINTRUE,
  };
};

export const loginFalse = () => {
  return {
    type: LOGINFALSE,
  };
};