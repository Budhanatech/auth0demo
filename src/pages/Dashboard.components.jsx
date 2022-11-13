import React from "react";
import { auth, getUser, logout } from "../services/auth0.service";
import styled from "styled-components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Dashboard() {
  const [user, setUser] = React.useState(null);

  const navigate = useNavigate();
  const logoutHandler = async () => {
    logout();
    navigate("/");
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    if (!accessToken) {
      navigate("/");
    }
    const fetchUser = async () => {
      const user = await getUser(accessToken);
      setUser(user);
    };
    fetchUser();
  }, []);
  return (
    user && (
      <Container>
        <Profile>
          <ProfileImage src={user.picture} />
          <ProfileName>{user.name}</ProfileName>
          <ProfileEmail>{user.email}</ProfileEmail>
          <ProfileUpdated>{user.updated_at}</ProfileUpdated>
          <Pre>
            <code>{JSON.stringify(user, null, 2)}</code>
          </Pre>
        </Profile>
        <LogoutButton onClick={logoutHandler}>Logout</LogoutButton>
      </Container>
    )
  );
}

export default Dashboard;

const Container = styled.div`
  position: relative;
  height: 100vh;
  background-color: #f5f5f5;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

const ProfileName = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: #000;
  text-align: center;
  text-transform: uppercase;
  padding: 10px 0;
`;

const ProfileEmail = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #000;
  text-align: center;
`;

const ProfileUpdated = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #000;
  text-align: center;
`;

const LogoutButton = styled.button`
  width: 200px;
  display: flex;
  justify-content: center;
  padding: 10px;
  margin: 0px auto;
  border: none;
  border-radius: 10px;
  outline: none;
  background-color: #000;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
`;

const Message = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #000;
  text-align: center;
  text-transform: uppercase;
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
