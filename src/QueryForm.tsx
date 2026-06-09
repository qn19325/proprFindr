import { useState } from 'react';

import './queryForm.css';

const BEDROOM_OPTIONS = [
  { value: 1, label: 'One' },
  { value: 2, label: 'Two' },
  { value: 3, label: 'Three' },
];

const LOCATION_OPTIONS = [
  { value: 'REGION^93817', label: 'Zone 1, London' },
  { value: 'REGION^93814', label: 'Zone 2, London' },
  { value: 'REGION^93883', label: 'Zone 3, London' },
];

interface QueryFormProps {
  onSearch: (url: string) => void;
}

export default function QueryForm({ onSearch }: QueryFormProps) {
  const [numBedrooms, setNumBedrooms] = useState(0);
  const [location, setLocation] = useState('');
  const selected = LOCATION_OPTIONS.find((loc) => loc.value === location);

  function submitHandler() {
    const params = new URLSearchParams({
      searchLocation: selected?.label,
      useLocationIdentifier: 'true',
      locationIdentifier: selected?.value,
      minBedrooms: numBedrooms.toString(),
      radius: '0.0',
      _includeLetAgreed: 'on',
    });
    onSearch(`/rightmove/property-to-rent/find.html?${params}`);
  }

  return (
    <form className="query-form-container" action={submitHandler}>
      <div>Location:</div>
      {LOCATION_OPTIONS.map(({ value, label }) => {
        return (
          <label key={label}>
            <input
              type="radio"
              value={value}
              name="location"
              onChange={(e) => {
                setLocation(e.target.value);
              }}
              checked={location === value}
            />
            {label}
          </label>
        );
      })}
      <div>Bedrooms</div>
      {BEDROOM_OPTIONS.map(({ value, label }) => {
        return (
          <label key={label}>
            <input
              type="radio"
              value={value}
              name="bedrooms"
              onChange={(e) => {
                setNumBedrooms(Number(e.target.value));
              }}
              checked={numBedrooms === value}
            />
            {label}
          </label>
        );
      })}
      <button className="query-form-submit" type="submit">
        Search
      </button>
    </form>
  );
}
