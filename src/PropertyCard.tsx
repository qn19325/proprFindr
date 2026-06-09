import PropertyCardImages from './PropertyCardImages';

import type { PropertyResult } from './useFetch';

import './propertyCard.css';

type PropertyCardProps = Pick<PropertyResult, 'id' | 'bedrooms' | 'bathrooms' | 'images'>;

export default function PropertyCard({ id, bedrooms, bathrooms, images }: PropertyCardProps) {
  return (
    <div className="property-card-container">
      <PropertyCardImages images={images} />
      <div>{id}</div>
      <div>Bedrooms - {bedrooms}</div>
      <div>Bathrooms - {bathrooms}</div>
    </div>
  );
}
