import { combineReducers } from 'redux';

import loginReducer from './reducer/loginReducer';

const rootReducer = combineReducers({
  login: loginReducer,
});

export default rootReducer;