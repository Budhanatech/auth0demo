import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { auth } from "./services/auth0.service";
import { handleAuthentication } from "./services/auth0.storage";

function PostAuthenticate() {
  const location = useLocation();
  const navigate = useNavigate();

  const processHash = (hash) => {
    auth.parseHash(
      {
        hash,
      },
      function (err, result) {
        if (err) {
          return;
        }
        if (result) {
          handleAuthentication(result);
          localStorage.setItem("user", JSON.stringify(result.idTokenPayload));
          navigate("/dashboard");
        }
      }
    );
  };

  useEffect(() => {
    if (location.hash) {
      processHash(location.hash);
    }
  }, [location]);

  return <div>Loading....</div>;
}

export default PostAuthenticate;
