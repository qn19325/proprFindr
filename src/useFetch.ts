import { useEffect, useState } from 'react';

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

export function useFetch(url: string, requestCount: number) {
  const [data, setData] = useState<PropertyResult[] | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!url || !requestCount) return;

    const controller = new AbortController();

    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const fetched = await fetch(url, { signal: controller.signal });
        const html = await fetched.text();
        const doc = new DOMParser().parseFromString(html, 'text/html');
        const raw = doc.getElementById('__NEXT_DATA__')?.textContent;
        if (!raw) throw new Error('Could not find __NEXT_DATA__');
        const model = JSON.parse(raw) as {
          props: { pageProps: { searchResults: { properties: PropertyResult[] } } };
        };
        setData(model.props.pageProps.searchResults.properties);
        setLoading(false);
      } catch (e) {
        if (e instanceof Error && e.name === 'AbortError') return;
        setError(e instanceof Error ? e : new Error(String(e)));
        setLoading(false);
      }
    }

    void fetchData();
    return () => {
      controller.abort();
    };
  }, [requestCount, url]);

  return { data, error, loading };
}
