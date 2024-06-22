import { styled } from "styled-components";
import { Link } from "react-router-dom";
import * as C from "../../../components/index";
import Background from "../../../assets/images/Background.svg";
import RequestTimeline from "../../../assets/images/RequestTimeline";

export default function Request() {
  return (
    <Container>
      <C.Header />
      <RequestContainer>
        <RequestTimeline />
        <Bold>
          적은 내용을 바탕으로 직접 타인에게 어떻게 말할지 적어주세요.{" "}
        </Bold>
        <SemiBold>
          내 삶을 더 풍요롭게 하기 위해서 다른 사람이 해주길 바라는 것을
          표현한다.
          <br />
          막연하고 추상적이거나 모호한 말을 피하고, 우리가 원하지 않는 것보다
          우리가 원하는 것을 말함으로써 긍정적인 행동을 부탁한다.
        </SemiBold>
        <TextBox />

        <ButtonContainer>
          <Link to="/record/need">
            <Button>이전</Button>
          </Link>
          <Link to="/record/confirm">
            <Button>다음</Button>
          </Link>
        </ButtonContainer>
      </RequestContainer>
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

const RequestContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;

  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 60px;
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
