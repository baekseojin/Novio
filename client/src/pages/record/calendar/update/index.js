import React from "react";
import styled from "styled-components";
import * as C from "../../../../components/index";
import Background from "../../../../assets/images/Background.svg";

const Update = () => {
  return (
    <Container>
      <C.Header />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  background-image: url(${Background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow-x: hidden;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export default Update;
