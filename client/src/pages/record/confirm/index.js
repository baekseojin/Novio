import { Link } from "react-router-dom";
import { styled } from "styled-components";
import * as C from "../../../components/index";
import Background from "../../../assets/images/ConfirmBackground.svg";
import { useRecord } from "../recordContext"; // useRecord 훅을 import 합니다.

export default function Confirm() {
  const { record } = useRecord(); // record 상태를 가져옵니다.

  return (
    <Container>
      <C.Header />
      <HeadingText>수정할 내용이 없는지 한 번 더 확인해보세요.</HeadingText>

      <ConfirmBox>
        <TextContainer>
          <Bold>OOO님! 오늘 타인과 대화하며 어떤 일이 있었나요?</Bold>
          <Hr />
          <Regular>{record.observation}</Regular>{" "}
        </TextContainer>
        <TextContainer>
          <Bold>그 상황에서 느꼈던 감정들을 적어주세요.</Bold>
          <Hr />
          <Regular>{record.feeling}</Regular>
        </TextContainer>
        <TextContainer>
          <Bold>위 상황에서 타인이 어떻게 행동해주길 원하나요?</Bold>
          <Hr />
          <Regular>{record.need}</Regular>
        </TextContainer>
        <TextContainer>
          <Bold>
            적은 내용을 바탕으로 직접 타인에게 어떻게 말할지 적어주세요.
          </Bold>
          <Hr />
          <Regular>{record.request}</Regular>
        </TextContainer>
        <ButtonContainer>
          <Link to="/record/request">
            <Button>이전</Button>
          </Link>
          <Link to="/record/completion">
            <Button>다음</Button>
          </Link>
        </ButtonContainer>
      </ConfirmBox>
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

const ConfirmBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 200px;
  width: 1200px;
  height: 100%;
  gap: 75px;
`;

const HeadingText = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: white;
  margin-top: 600px;
  text-align: center;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Bold = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: white;
  margin-top: 40px;
  text-align: left;
  margin-bottom: 15px;
`;

const Regular = styled.div`
  font-size: 24px;
  font-weight: normal;
  color: white;
  text-align: left;
  margin-top: 20px;
`;

const Hr = styled.hr`
  width: 1180px;
  height: 1px;
  background: #7e7e7d;
  border: none;
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
