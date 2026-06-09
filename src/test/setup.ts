import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

// Unmount React trees after every test so DOM state doesn't leak between them.
afterEach(() => {
  cleanup();
});
