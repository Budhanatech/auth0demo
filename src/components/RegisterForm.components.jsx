import React from "react";
import styled from "styled-components";
import { signupUser } from "../services/auth0.service";

function RegisterForm({ title }) {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    name: "",
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title === "embedded") {
      signupUser(user);
    }
  };

  return (
    <Form
      onSubmit={(e) => {
        onSubmitHandler(e);
      }}
      autoComplete="off"
    >
      <FormTitle>Sign up</FormTitle>
      <FormInput
        placeholder="Name"
        value={user.name}
        onChange={(e) => {
          setUser({ ...user, name: e.target.value });
        }}
      />
      <FormInput
        type={"email"}
        placeholder="Email"
        value={user.email}
        onChange={(e) => {
          setUser({ ...user, email: e.target.value });
        }}
      />
      <FormInput
        type={"password"}
        placeholder="Password"
        value={user.password}
        onChange={(e) => {
          setUser({ ...user, password: e.target.value });
        }}
      />
      <FormButton
        type="submit"
        onClick={(e) => {
          onSubmitHandler(e);
        }}
      >
        Sign up
      </FormButton>
    </Form>
  );
}

export default RegisterForm;

const Form = styled.form`
  width: 400px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%);
  padding: 20px;
  margin: 0 20px;
`;

const FormTitle = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: #000;
  text-align: center;
  text-transform: uppercase;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;
`;

const FormButton = styled.button`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  background-color: #000;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
`;
