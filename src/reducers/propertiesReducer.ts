import {
  type PropertiesFetchFailureAction,
  type PropertiesFetchRequestAction,
  type PropertiesFetchSuccessAction,
} from '../actions/propertiesActions';

import type { PropertyResult } from '../types';

type State = 'idle' | 'loading' | 'success' | 'failure';

interface ReturnResult {
  state: State;
  properties: PropertyResult[];
  error?: string;
}

const initialState: ReturnResult = {
  state: 'idle',
  properties: [],
};

export default function propertiesReducer(
  state = initialState,
  action:
    | PropertiesFetchRequestAction
    | PropertiesFetchSuccessAction
    | PropertiesFetchFailureAction,
): ReturnResult {
  switch (action.type) {
    case 'properties/fetch/request':
      return {
        ...state,
        state: 'loading',
      };
    case 'properties/fetch/success':
      return {
        state: 'success',
        properties: action.payload,
      };
    case 'properties/fetch/failure':
      return {
        state: 'failure',
        properties: [],
        error: action.payload,
      };
    default:
      return state;
  }
}
