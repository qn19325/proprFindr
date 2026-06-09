import { useState } from 'react';

import PropertyCard from './PropertyCard';
import QueryForm from './QueryForm';
import { useFetch } from './useFetch';

import './home.css';

const GRID_ITEMS = 15;

export default function Home() {
  const [count, setCount] = useState(0);
  const [url, setUrl] = useState('');
  const { data, error, loading } = useFetch(url, count);

  function search(url: string) {
    setUrl(url);
    setCount((c) => c + 1);
  }

  return (
    <div className="home-container">
      <div>ProprFindr</div>
      <QueryForm onSearch={search} />
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
    </div>
  );
}
