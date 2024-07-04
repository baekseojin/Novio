import React from "react";
import background from "../../../../assets/images/TrainingBackground.svg";
import { Link } from "react-router-dom";
import * as C from "../../../../components/index";
import { styled } from "styled-components";

const ScenarioProblem = () => {
  return (
    <Container>
      <C.Header />
      <ProblemContainer>
        <Bold>당신이라면 어떻게 말할 것인가?</Bold>
        <SemiBold>
          엄마는 이번 명절에 온 가족이 고향집에 내려가 할머니 할아버지를
          만나자고 제안했다. <br />
          하지만 아들 영호는 이미 친구들과 여행을 가기로 약속했고 예약까지
          해놓았다고 했다. <br />
          엄마는 가족보다 친구를 우선시하는 영호의 태도에 서운함과 분노를 느끼며
          언성을 높였다. <br />
          영호도 자신의 계획을 지키고 싶어 갈등이 커졌다. 당신이 영호라면 어떻게
          엄마를 설득할 것인가?
        </SemiBold>

        <Textbox />

        <ButtonContainer>
          <Link to="/training/scenario/solve">
            <Button>다음</Button>
          </Link>
        </ButtonContainer>
      </ProblemContainer>
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

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 150px;
`;

const ProblemContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

const Bold = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: white;
  margin-top: 40px;
`;

const SemiBold = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: white;
  margin-top: 25px;
`;

const Textbox = styled.textarea`
  width: 1092px;
  height: 350px;
  padding: 8px;
  background-color: white;
  color: #7e7e7d;
  border: 2px solid #aaa;
  border-radius: 4px;
  margin: 8px 0;
  outline: none;
  box-sizing: border-box;
  transition: 0.3s;
  resize: none;

  font-size: 18px;
  color: black;

  margin-top: 50px;
  margin-bottom: 50px;
  font-family: "PretendardVariable", sans-serif;

  &:focus {
    border-color: dodgerblue;
    box-shadow: 0 0 20px 0 dodgerblue;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 200px;
`;

const Button = styled.button`
  width: 200px;
  height: 60px;
  border-radius: 100px;
  border: none;
  margin-bottom: 50px;

  background: linear-gradient(to right, #a799fd, #3423ff);

  color: white;
  font-weight: Bold;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background-color: #6fc5ff;
    box-shadow: 0 0 20px #6fc5ff50;
    transform: scale(1.1);
  }
`;

export default ScenarioProblem;
