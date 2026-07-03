import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, createStore } from 'redux';
import { thunk } from 'redux-thunk';

import { rootReducer } from './reducers/rootReducer';

const composedEnhancers = composeWithDevTools(applyMiddleware(thunk));
export const store = createStore(rootReducer, undefined, composedEnhancers);
