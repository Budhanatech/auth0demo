import React from "react";
import styled from "styled-components";
import FormContainer from "./FormContainer.component";
import UniversalLoginFlow from "./UniversalLoginFlow.components";

function SPA() {
  return (
    <Container>
      <Title>Single Page Application</Title>
      <FormContainer title="embedded" />
      <UniversalLoginFlow />
    </Container>
  );
}

export default SPA;

const Container = styled.div`
  position: relative;
  background-color: #f5f5f5;
`;

const Title = styled.h1`
  padding: 20px;
  font-size: 25px;
  text-transform: uppercase;

  font-weight: 600;
  color: #000;
`;
