import auth0 from "auth0-js";
import { auth0Params as params } from "../config/auth0Params";
import { handleAuthentication, removeStorage } from "./auth0.storage";

export const auth = new auth0.WebAuth({
  domain: params.domain,
  clientID: params.clientID,
  redirectUri: params.redirectUri,
  responseType: params.responseType,
  scope: params.scope,
});

export const loginUser = async ({ email, password }) => {
  auth.login(
    {
      email: email,
      password: password,
      realm: params.realm,
      redirectUri: params.redirectUri,
      responseType: params.responseType,
    },
    async function (err, result) {
      if (err) {
        return err;
      }
      await authenticate(result);
    }
  );
};

export const signupUser = async ({ email, password, name }) => {
  auth.signup(
    {
      connection: params.realm,
      email: email,
      password: password,
      user_metadata: {
        name: name,
      },
    },
    async function (err, result) {
      if (err) {
        alert("Error: " + err.message);
      } else {
        alert(
          `${result.userMetadata.name} has been registered successfully, please login now`
        );
        window.location.href = "/";
      }
    }
  );
};

export const logout = () => {
  auth.logout({
    returnTo: params.logoutUrl,
    clientID: params.clientID,
  });
  removeStorage();
};

// here authenticate function does the following:
// 1. calls handleAuthentication function to parse the result and store the tokens in the local storage
// 2. calls setUserProfile function to fetch the user profile from the auth0 api and store it in the local storage

export const authenticate = async (result) => {
  handleAuthentication(result);
  await setUserProfile(result);
};

export const getUser = async (access_token) => {
  const localUser = localStorage.getItem("user");
  if (localUser) {
    return JSON.parse(localUser);
  } else {
    return await getUserFromAuth0(access_token);
  }
};

export const getUserFromAuth0 = async (access_token) => {
  return new Promise((resolve, reject) => {
    auth.client.userInfo(access_token, (err, user) => {
      if (err) {
        reject(err);
      } else {
        localStorage.setItem("user", JSON.stringify(user));
        resolve(user);
      }
    });
  });
};

export const getInitialAuthenticatedUser = async () => {
  const access_token = localStorage.getItem("access_token");
  if (access_token) {
    return isAuthenticated();
  }
  return null;
};

export const isAuthenticated = () => {
  const date = sessionStorage.getItem("expires_at");
  if (date) {
    const expiresAt = JSON.parse(date);
    if (new Date().getTime() > expiresAt) {
      removeSessionStorage();
      return false;
    }
    return true;
  }
  return false;
};

export const removeSessionStorage = () => {
  sessionStorage.removeItem("expires_at");
  sessionStorage.removeItem("access_token");
  sessionStorage.removeItem("id_token");
  sessionStorage.removeItem("scope");
  sessionStorage.removeItem("token_type");
};
