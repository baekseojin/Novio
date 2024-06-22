import { styled } from "styled-components";
import { Link } from "react-router-dom";
import * as C from "../../../components/index";
import Background from "../../../assets/images/Background.svg";
import ObservationTimeline from "../../../assets/images/ObservationTimeline";

export default function Observation() {
  return (
    <Container>
      <C.Header />
      <ObservationContainer>
        <ObservationTimeline />
        <Bold>OOO님! 오늘 타인과 대화하며 어떤 일이 있었나요?</Bold>
        <SemiBold>
          어떤 상황에서 있는 그대로, 실제로 무엇이 일어나고 있는가를 관찰한다.
        </SemiBold>
        <TextBox />
        <Link to="/record/feeling">
          <Button>다음</Button>
        </Link>
      </ObservationContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: black;
  background-image: url(${Background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  overflow-x: hidden;
  overflow-y: hidden;
  box-sizing: border-box;
`;

const ObservationContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 60px;

  display: flex;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Bold = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: white;
  margin-top: 40px;
`;

const SemiBold = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #7e7e7d;
  margin-top: 25px;
`;

const TextBox = styled.textarea`
  width: 1092px;
  height: 350px;
  padding: 10px;

  background-color: white;
  color: #7e7e7d;

  border-radius: 15px;
  margin-top: 50px;
  margin-bottom: 50px;
  resize: none;

  &:focus {
    border: 2px solid #0a7bff;
    outline: none;
  }
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
