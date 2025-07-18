import { createRouter, Router } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen'; // generated by TanStack CLI or manually

export const router = createRouter({ routeTree });

// Optionally make the router available globally for devtools, etc.
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}