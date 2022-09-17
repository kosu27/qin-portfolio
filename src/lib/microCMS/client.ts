import { createClient } from "microcms-js-sdk"; //ES6

// Initialize Client SDK.
export const microCMSClient = createClient({
  serviceDomain: "qinportfolio", // YOUR_DOMAIN is the XXXX part of XXXX.microcms.io
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
});
