import { useState } from 'react';

import PropertyCard from './PropertyCard';
import { useFetch } from './useFetch';

import './home.css';

const URL =
  '/rightmove/property-to-rent/find.html?searchLocation=Zone+2%2C+London&useLocationIdentifier=true&locationIdentifier=REGION%5E93814&minBedrooms=2&radius=0.0&_includeLetAgreed=on';
const GRID_ITEMS = 15;

export default function Home() {
  const [count, setCount] = useState(0);
  const { data, error, loading } = useFetch(URL, count);

  function clickHandler() {
    setCount((c) => c + 1);
  }

  return (
    <div className="home-container">
      <div>ProprFindr</div>
      <div className="home-data-container">
        {data?.slice(0, GRID_ITEMS).map((val) => {
          return (
            <PropertyCard
              key={val.id}
              id={val.id}
              bedrooms={val.bedrooms}
              bathrooms={val.bathrooms}
              images={val.images}
            />
          );
        })}
        {error && <div>{error.message}</div>}
        {loading && <div>Loading...</div>}
      </div>
      <button onClick={clickHandler}>Request</button>
    </div>
  );
}
