import { useEffect } from 'react';

import './home.css';
import { fetchProperties } from './actions/propertiesActions';
import { useAppDispatch } from './hooks';

export default function Home() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(fetchProperties());
  }, [dispatch]);

  return <></>;
}
