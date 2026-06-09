import { useState } from 'react';

import { useFetch } from './useFetch';

const URL =
  '/rightmove/property-to-rent/find.html?searchLocation=Zone+2%2C+London&useLocationIdentifier=true&locationIdentifier=REGION%5E93814&minBedrooms=2&radius=0.0&_includeLetAgreed=on';

export default function Home() {
  const [count, setCount] = useState(0);
  const { data, error, loading } = useFetch(URL, count);

  function clickHandler() {
    setCount((c) => c + 1);
  }

  return (
    <div>
      <div>ProprFindr</div>
      {data?.map((val) => (
        <div key={val.id}>{val.id}</div>
      ))}
      {error && <div>{error.message}</div>}
      {loading && <div>Loading...</div>}
      <button onClick={clickHandler}>Request</button>
    </div>
  );
}
