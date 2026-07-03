import type { AppDispatch } from '../hooks';
import type { PropertyResult } from '../types';

export interface PropertiesFetchRequestAction {
  type: 'properties/fetch/request';
}

export interface PropertiesFetchSuccessAction {
  type: 'properties/fetch/success';
  payload: PropertyResult[];
}

export interface PropertiesFetchFailureAction {
  type: 'properties/fetch/failure';
  payload: string;
}

export const propertiesFetchRequestAction = (): PropertiesFetchRequestAction => {
  return {
    type: 'properties/fetch/request',
  };
};

export const propertiesFetchSuccessAction = (
  properties: PropertyResult[],
): PropertiesFetchSuccessAction => {
  return {
    type: 'properties/fetch/success',
    payload: properties,
  };
};

export const propertiesFetchFailureAction = (err: string): PropertiesFetchFailureAction => {
  return {
    type: 'properties/fetch/failure',
    payload: err,
  };
};

export const fetchProperties = () => async (dispatch: AppDispatch) => {
  dispatch(propertiesFetchRequestAction());
  try {
    const params = new URLSearchParams({
      searchLocation: 'Zone 1, London',
      useLocationIdentifier: 'true',
      locationIdentifier: 'REGION^93817',
      minBedrooms: '1',
      radius: '0.0',
      _includeLetAgreed: 'on',
    });
    const fetched = await fetch(`/rightmove/property-to-rent/find.html?${params}`);
    const html = await fetched.text();
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const raw = doc.getElementById('__NEXT_DATA__')?.textContent;
    if (!raw) throw new Error('Could not find __NEXT_DATA__');
    const model = JSON.parse(raw) as {
      props: { pageProps: { searchResults: { properties: PropertyResult[] } } };
    };
    dispatch(propertiesFetchSuccessAction(model.props.pageProps.searchResults.properties));
  } catch (err) {
    const errorStr = err instanceof Error ? err.message : String(err);
    console.log(errorStr);
    dispatch(propertiesFetchFailureAction(errorStr));
  }
};
