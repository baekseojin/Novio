import { Link } from "react-router-dom";
import * as C from "../../../components/index";
import { styled } from "styled-components";
import Background from "../../../assets/Background.svg";
import { ReactComponent as NeedTimeline } from "../../../assets/NeedTimeline.svg";

const Need = () => {
  return (
    <Container>
      <C.Header />
      <NeedContainer>
        <NeedTimeline />
        <Bold>위 상황에서 타인이 어떻게 행동해주길 원하나요?</Bold>
        <SemiBold>
          자신이 포착한 느낌이 내면의 어떤 욕구와 연결되는지를 말한다.
          <br /> 다른 사람을 탓하기보다는 자신의 욕구와 희망, 기대, 가치관이나
          생각을 인정함으로써 우리는 자신의 느낌에 대해 책임을 진다.
        </SemiBold>
        <TextBox />
        <Link to="/record/request">
          <Button>다음</Button>
        </Link>
      </NeedContainer>
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
  overflow-y: hidden;
  box-sizing: border-box;
`;

const NeedContainer = styled.div`
  width: 100%;
  height: 100%;

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
  text-align: center;
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

export default Need;
