// directus.ts

import { getDirectusClient } from '../app/utils/directus';

export function getDirectusClient() {
  const directus = new Directus('https://your-directus-backend-url.com');
  directus.auth.login({
    email: 'your-email@example.com',
    password: 'your-password',
  });

  return directus;
}
