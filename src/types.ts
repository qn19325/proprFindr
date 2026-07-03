export interface Image {
  caption: string;
  srcUrl: string;
  url: string;
}

export interface PropertyResult {
  id: string;
  available: boolean;
  phone: string;
  bedrooms: number;
  bathrooms: number;
  type: string;
  property_type: string;
  description: string;
  title: string;
  price: string;
  //   address: dict;
  latitude: number;
  longitude: number;
  features: string[];
  images: Image[];
  floorplans: string[];
  nearest_stations: string[];
}
