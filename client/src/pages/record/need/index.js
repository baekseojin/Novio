import { Link } from "react-router-dom";
import * as C from "../../../components/index";
import { styled } from "styled-components";
import Background from "../../../assets/images/Background.svg";
import NeedTimeline from "../../../assets/images/NeedTimeline";
import { useRecord } from "../recordContext";

const Need = () => {
  const { record, updateRecord } = useRecord();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateRecord(name, value);
  };

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
        <TextBox name="need" value={record.need} onChange={handleInputChange} />
        <ButtonContainer>
          <Link to="/record/feeling">
            <Button>이전</Button>
          </Link>
          <Link to="/record/request">
            <Button>다음</Button>
          </Link>
        </ButtonContainer>
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
  text-align: center;
`;

const TextBox = styled.textarea`
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

export default Need;
