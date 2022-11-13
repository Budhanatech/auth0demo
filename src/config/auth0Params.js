export const auth0Params = {
  domain: import.meta.env.VITE_DOMAIN,
  clientID: import.meta.env.VITE_CLIENT_ID,
  redirectUri: import.meta.env.VITE_REDIRECT_URI,
  audience: import.meta.env.VITE_AUDIENCE,
  scope: import.meta.env.VITE_SCOPE,
  realm: import.meta.env.VITE_REALM,
  responseType: import.meta.env.VITE_RESPONSE_TYPE,
  logoutUrl: import.meta.env.VITE_LOGOUT_REDIRECT_URI,
  universalClientId: import.meta.env.VITE_UNIVERSAL_CLIENT_ID,
  universalClientSecret: import.meta.env.VITE_UNIVERSAL_CLIENT_SECRET,
};
