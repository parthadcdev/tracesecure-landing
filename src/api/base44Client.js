import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "68dc91d01bc5a24ad7723bfb", 
  requiresAuth: true // Ensure authentication is required for all operations
});
