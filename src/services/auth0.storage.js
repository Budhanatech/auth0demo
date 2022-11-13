export const handleAuthentication = async (result) => {
  if (result.idToken || result.id_token) {
    setSession(result);
  } else {
    window.location.href = "/";
    window.location.reload();
  }
};

export const setSession = async (authResult) => {
  // Set the time that the access token will expire at
  const expiresAt = authResult.expiresIn
    ? JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime())
    : JSON.stringify(authResult.expires_in * 1000 + new Date().getTime());

  setSessionStorage(authResult, expiresAt);
};

export const setSessionStorage = (authResult, expiresAt) => {
  sessionStorage.setItem(
    "refresh_token",
    authResult.refreshToken ? authResult.refreshToken : authResult.refresh_token
  );
  localStorage.setItem("access_token", authResult.accessToken);
  localStorage.setItem("id_token", authResult.idToken);
  localStorage.setItem("expires_at", expiresAt);
};

// here the user profile is fetched from the local storage
export const removeStorage = () => {
  // Clear access token and ID token from local storage
  localStorage.removeItem("access_token");
  localStorage.removeItem("id_token");
  localStorage.removeItem("expires_at");
  localStorage.removeItem("user");
};

export const getAccessToken = () => {
  const accessToken = localStorage.getItem("access_token");
  if (!accessToken) {
    throw new Error("No access token found");
  }
  return accessToken;
};
