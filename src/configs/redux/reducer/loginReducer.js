import { LOGINFALSE, LOGINTRUE } from '../typesReducer';

const INITIAL_STATE = {
  isLogin: false,
  jwtToken: null
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGINTRUE:
      return {
        ...state, 
        isLogin: true,
        jwtToken: action.payload
      };

    case LOGINFALSE:
      return {
        ...state, 
        isLogin: false,
        jwtToken: null
      };

    default: return state;
  }
};

export default reducer;