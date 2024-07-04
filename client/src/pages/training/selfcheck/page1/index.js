import React, { useState } from "react";
import { styled, keyframes } from "styled-components";
import * as C from "../../../../components/index";
import background from "../../../../assets/images/TrainingBackground.svg";
import { Link } from "react-router-dom";

const SelfCheckPage = () => {
  const questions = [
    "1. 예상치 못한 일이 생겨서 기분 나빠진 적이 얼마나 있나요?",
    "2. 중요한 일들을 통제할 수 없다고 느낀 적은 얼마나 있나요?",
    "3. 초조하거나 스트레스가 쌓인다고 느낀 적은 얼마나 있었나요?",
    "4. 짜증나고 성가신 일들을 성공적으로 처리한 적이 얼마나 있었나요?",
    "5. 생활 속에서 일어난 중요한 변화들을 효과적으로 대처한 적이 얼마나 있었나요?",
    "6. 개인적인 문제를 처리하는 능력에 대해 자신감을 느낀 적은 얼마나 있었나요?",
    "7. 자신의 뜻대로 일이 진행된다고 느낀 적은 얼마나 있었나요?",
    "8. 매사를 잘 컨트롤하고 있다고 느낀 적이 얼마나 있었나요?",
    "9. 당신이 통제할 수 없는 범위에서 발생한 일 때문에 화가난 적이 얼마나 있었나요?",
    "10. 어려운 일이 너무 많이 쌓여서 극복할 수 없다고 느낀 적이 얼마나 있었나요?",
  ];

  const choices = [
    "전혀 없음",
    "거의 없음",
    "때때로 있음",
    "자주 있음",
    "매우 자주 있음",
  ];

  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleNext = () => {
    if (selectedChoice === null) return;

    const newAnswers = [...answers, selectedChoice];
    setAnswers(newAnswers);
    setSelectedChoice(null); // 다음 질문으로 넘어갈 때 선택 초기화

    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleChoiceClick = (index) => {
    setSelectedChoice(index);
  };

  const calculateResult = () => {
    const totalScore = answers.reduce((acc, choice) => acc + choice, 0);
    if (totalScore <= 10) {
      return "안정: 스트레스를 잘 관리하고 있는 상태입니다.";
    } else if (totalScore <= 20) {
      return "보통: 스트레스의 영향을 받기 시작했습니다. 현재의 스트레스를 잘 관리하는 것이 중요합니다.";
    } else {
      return "위험: 도움이 필요한 상태입니다. 심리상담사 또는 정신과 전문의의 도움을 요청하시기를 바랍니다.";
    }
  };

  return (
    <Container>
      <C.Header />
      <HeadBold>지난 일주일 동안...</HeadBold>
      <SlideUp>
        <ChoiceContainer>
          <ContainerText>{questions[questionIndex]}</ContainerText>
          <ButtonContainer>
            {choices.map((choice, index) => (
              <ChoiceButton
                key={index}
                onClick={() => handleChoiceClick(index)}
                selected={selectedChoice === index}
              >
                {choice}
              </ChoiceButton>
            ))}
            <NextButton onClick={handleNext}>다음</NextButton>
          </ButtonContainer>
        </ChoiceContainer>
      </SlideUp>
      {showResult && (
        <ResultModal>
          <ModalContent>
            <ResultText>{calculateResult()}</ResultText>
            <Link to="/training">
              <CloseButton onClick={() => setShowResult(false)}>
                닫기
              </CloseButton>
            </Link>
          </ModalContent>
        </ResultModal>
      )}
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
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const slideUp = keyframes`
  from {
    transform: translateY(12%);
  }
  to {
    transform: translateY(0);
  }
`;

const SlideUp = styled.div`
  animation: ${slideUp} 1s;
`;

const ChoiceContainer = styled.div`
  width: 600px;
  height: 530px;
  background-color: white;
  margin-top: 50px;
  padding: 10px;
`;

const HeadBold = styled.div`
  font-size: 30px;
  font-weight: bold;
  text-align: left;
  color: white;
  margin-top: 20px;
`;

const Bold = styled.div`
  font-size: 30px;
  font-weight: bold;
  text-align: left;
  color: white;
  margin-top: 20px;
`;

const ContainerText = styled.div`
  color: black;
  font-size: 22px;
  font-weight: bold;
  margin-top: 30px;
  margin-left: 50px;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 20px;
`;

const ChoiceButton = styled.div`
  width: 400px;
  height: 50px;
  border: 1px solid #6e56cf;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.selected ? "#6e56cf" : "white")};
  color: ${(props) => (props.selected ? "white" : "black")};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.selected ? "#6e56cf" : "#f3f0fd")};
  }
`;

const NextButton = styled.button`
  width: 400px;
  height: 50px;
  background-color: #6e56cf;
  border-radius: 10px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
`;

const ResultModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  width: 500px;
  padding: 20px;
  background: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ResultText = styled.div`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const CloseButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: #6e56cf;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default SelfCheckPage;
