import './home.css';
import { useEffect } from 'react';
import { FaSpinner } from 'react-icons/fa';

import { fetchProperties } from './actions/propertiesActions';
import { useAppDispatch, useAppSelector } from './hooks';

export default function Home() {
  const state = useAppSelector((store) => store.properties.state);
  const properties = useAppSelector((store) => store.properties.properties);
  const error = useAppSelector((state) => state.properties.error);
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(fetchProperties());
  }, [dispatch]);

  return (
    <>
      {state !== 'loading' &&
        state !== 'failure' &&
        properties.map((property) => <div key={property.id}>{property.id}</div>)}
      {state === 'loading' && <FaSpinner className="spin" />}
      {state === 'failure' && <div>{error}</div>}
    </>
  );
}
