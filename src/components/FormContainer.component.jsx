import React from "react";
import styled from "styled-components";
import LoginForm from "./LoginForm.components";
import RegisterForm from "./RegisterForm.components";
function FormContainer({ title }) {
  return (
    <Container>
      <Title>{title} Login</Title>

      <FormWrapper>
        <LoginForm title={title} />
        <RegisterForm title={title} />
      </FormWrapper>
    </Container>
  );
}

export default FormContainer;

const Container = styled.div`
  position: relative;
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

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
