import React from "react";
import * as C from "../../../../components/index";
import background from "../../../../assets/images/TrainingBackground.svg";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const ScenarioSolve = () => {
  const answers = [
    {
      nickname: "User1",
      age: 22,
      content:
        "엄마, 친구들과의 여행은 오래 전부터 계획해왔고, 예약도 다 해놨어요. 할머니 할아버지를 뵈러 가는 것도 중요하지만 이번 여행은 친구들과의 소중한 추억이 될 것 같아요. 다음번에 꼭 함께 가요.",
    },
    {
      nickname: "User2",
      age: 30,
      content:
        "엄마, 저도 할머니 할아버지를 뵙고 싶지만, 친구들과의 약속을 이미 해버렸어요. 다음 명절에는 꼭 고향집에 갈게요. 이번에는 제가 친구들과의 여행을 다녀오도록 이해해주시면 좋겠어요.",
    },
    {
      nickname: "User3",
      age: 27,
      content:
        "엄마, 제가 친구들과의 여행을 취소하면 친구들에게도 피해가 갈 것 같아요. 할머니 할아버지께 따로 찾아뵙고 시간을 보낼게요. 이번 한 번만 이해해주세요.",
    },
  ];

  return (
    <Container>
      <C.Header />
      <SolveContainer>
        <Bold>다른 사람들의 답변을 확인해보세요.</Bold>
        <AnswersContainer>
          {answers.map((answer, index) => (
            <Answer key={index}>
              <Nickname>
                {answer.nickname}, {answer.age}
              </Nickname>
              <Content>{answer.content}</Content>
            </Answer>
          ))}
        </AnswersContainer>
        <ButtonContainer>
          <Link to="/training">
            <Button>확인</Button>
          </Link>
        </ButtonContainer>
      </SolveContainer>
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
`;

const SolveContainer = styled.div`
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
`;

const AnswersContainer = styled.div`
  width: 80%;
  max-width: 800px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Answer = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  text-align: left;
`;

const Nickname = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const Content = styled.div`
  white-space: pre-wrap;
`;

const ButtonContainer = styled.div`
  margin-top: 60px;
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

export default ScenarioSolve;
