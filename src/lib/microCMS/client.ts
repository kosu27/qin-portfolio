import { createClient } from "microcms-js-sdk"; //ES6

// Initialize Client SDK.
export const client = createClient({
  serviceDomain: "qinportfolio", // YOUR_DOMAIN is the XXXX part of XXXX.microcms.io
  apiKey: "1b42bfe7ca234128bd9f2aaea250bac7bc4d",
});
