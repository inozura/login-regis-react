import { LOGINACTION, LOGINTRUE, LOGOUTACTION } from '../typesReducer';

export const loginTrue = (data) => {
  return {
    type: LOGINTRUE,
  };
};

export const loginAction = (data) => {
  return {
    type: LOGINACTION,
    payload: data
  };
};


export const logout = (data) => {
  return {
    type: LOGOUTACTION
  };
};