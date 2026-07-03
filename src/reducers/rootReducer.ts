import { combineReducers } from 'redux';

import propertiesReducer from './propertiesReducer';

export const rootReducer = combineReducers({
  properties: propertiesReducer,
});
