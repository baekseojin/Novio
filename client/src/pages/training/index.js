import React from "react";
import { styled } from "styled-components";
import * as C from "../../components/index";
import background from "../../assets/images/TrainingBackground.svg";
import { ReactComponent as Scenario } from "../../assets/images/Scenario.svg";
import { ReactComponent as SelfCheck } from "../../assets/images/SelfCheck.svg";
import { ReactComponent as About } from "../../assets/images/About.svg";
import { Link } from "react-router-dom";

const Training = () => {
  return (
    <Container>
      <C.Header />
      <Landing>
        <ElementContainer>
          <Bold>가상의 상황에 어떻게 대처할 것인지 연습해보세요.</Bold>
          <Link to="scenario/start">
            <Scenario />
          </Link>
        </ElementContainer>
        <ElementContainer>
          <Bold>심리 검사로 본인의 감정을 인지해보세요.</Bold>
          <Link to="selfcheck/start">
            <SelfCheck />
          </Link>
        </ElementContainer>
        <ElementContainer>
          <Bold>비폭력 대화에 대해 더 자세하게 알아보세요.</Bold>
          <Link to="about">
            <About />
          </Link>
        </ElementContainer>
      </Landing>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: black;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  overflow-x: hidden;
`;

const Landing = styled.div`
  color: white;
  display: flex;
  gap: 200px;
  align-items: center;
  flex-direction: column;
  margin-top: 200px;
  margin-bottom: 200px;
`;

const ElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  gap: 50px;
`;

const Bold = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

export default Training;
