import {
  type PropertiesFetchRequestAction,
  type PropertiesFetchSuccessAction,
} from '../actions/propertiesActions';

import type { PropertyResult } from '../types';

const initialState: PropertyResult[] = [];

export default function propertiesReducer(
  state = initialState,
  action: PropertiesFetchRequestAction | PropertiesFetchSuccessAction,
) {
  switch (action.type) {
    case 'properties/fetch/success':
      return action.payload;
    default:
      return state;
  }
}
