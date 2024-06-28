import { Link } from "react-router-dom";
import { styled } from "styled-components";
import Background from "../../../assets/images/ConfirmBackground.svg";
import * as C from "../../../components/index";

export default function Completion() {
  return (
    <Container>
      <C.Header />
      <TextContainer>
        <Bold>
          2024.07.04 <br />
          <br /> 기록이 완료되었어요!
        </Bold>
      </TextContainer>
      <ButtonContainer>
        <Link to="/">
          <Button>홈 화면</Button>
        </Link>
        <Link to="/record/calendar">
          <Button>캘린더</Button>
        </Link>
      </ButtonContainer>
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

  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const TextContainer = styled.div``;

const Bold = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: white;
`;

const ButtonContainer = styled.div`
  margin-top: 200px;
  gap: 200px;
  display: flex;
  justify-content: center;
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
