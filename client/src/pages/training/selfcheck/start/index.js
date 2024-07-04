import React from "react";
import { styled, keyframes } from "styled-components";
import * as C from "../../../../components/index";
import background from "../../../../assets/images/TrainingBackground.svg";
import { ReactComponent as Training } from "../../../../assets/images/MainTraining.svg";
import { Link } from "react-router-dom";

const SelfCheckStart = () => {
  return (
    <Container>
      <C.Header />
      <StartContainer>
        <SlideUpBold>자가진단을 통해 본인의 심리를 파악해보세요.</SlideUpBold>

        <Training />

        <Button Link to="/training/selfcheck/page">
          <ButtonText>자가진단 시작하기</ButtonText>
        </Button>
      </StartContainer>
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

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const SlideUpBold = styled.div`
  font-size: 30px;
  font-weight: bold;

  text-align: center;
  color: white;
  animation: ${slideUp} 1s;
`;

const StartContainer = styled.div`
  display: flex;

  align-items: center;
  flex-direction: column;

  margin-top: 150px;
  gap: 70px;
`;

const Bold = styled.div`
  font-size: 30px;
  font-weight: bold;

  text-align: center;
  color: white;
`;

const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 75px;
  background-color: white;
  border: 1px solid #6e56cf;
  border-radius: 10px;
  text-decoration: none;
`;

const ButtonText = styled.div`
  color: #6e56cf;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export default SelfCheckStart;
