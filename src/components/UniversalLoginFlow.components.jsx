import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

function UniversalLoginFlow() {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  return (
    <Container>
      <Title>Universal Login Flow</Title>

      <FormContainer>
        {isAuthenticated ? (
          <UserInfo>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <Pre>
              <code>{JSON.stringify(user, null, 2)}</code>
            </Pre>
            <LogoutButton
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Logout
            </LogoutButton>
          </UserInfo>
        ) : (
          <LoginButton
            onClick={() =>
              loginWithRedirect({
                screen_hint: "signup",
              })
            }
          >
            Login
          </LoginButton>
        )}
      </FormContainer>
    </Container>
  );
}

export default UniversalLoginFlow;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
`;

const Title = styled.h1`
  padding: 30px;
  font-size: 20px;
  font-weight: 600;
  color: #000;
  text-align: center;
  text-transform: uppercase;
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const LoginButton = styled.button`
  width: 200px;
  display: flex;
  justify-content: center;
  padding: 10px;
  margin: 0px 20px;
  border: none;
  border-radius: 10px;
  outline: none;
  background-color: #000;
  color: #fff;
  cursor: pointer;
`;

const LogoutButton = styled.button`
  width: 200px;
  display: flex;
  justify-content: center;
  padding: 10px;
  margin: 0px 20px;
  border: none;
  border-radius: 10px;
  outline: none;
  background-color: #000;
  color: #fff;
  cursor: pointer;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  h2 {
    margin: 10px 0px;
    font-size: 20px;
    font-weight: 600;
    color: #000;
  }
  p {
    margin: 10px 0px;
    font-size: 15px;
    font-weight: 400;
    color: #000;
  }
`;

const Pre = styled.pre`
  padding: 20px;
  background-color: #000;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 400;
  color: #fff;
  margin: 10px 0px;
`;
