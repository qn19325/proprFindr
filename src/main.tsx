import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Home from './Home';

import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

createRoot(rootElement).render(
  <StrictMode>
    <Home />
  </StrictMode>,
);
