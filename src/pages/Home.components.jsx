import React from "react";
import styled from "styled-components";
import SPA from "../components/SPA.components";

function Home() {
  return (
    <Container>
      <SPA />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  position: relative;
  background-color: #f5f5f5;
`;
