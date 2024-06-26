import { Link } from "react-router-dom";
import * as C from "../../../components/index";
import { styled } from "styled-components";
import Background from "../../../assets/images/Background.svg";
import FeelingTimeline from "../../../assets/images/FeelingTimeline";
import { useRecord } from "../recordContext";

const Feeling = () => {
  const { record, updateRecord } = useRecord(); // record 상태와 updateRecord 함수를 가져옵니다.

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateRecord(name, value);
  };

  return (
    <Container>
      <C.Header />
      <FeelingContainer>
        <FeelingTimeline />
        <Bold>그 상황에서 느꼈던 감정들을 적어주세요.</Bold>
        <SemiBold>
          그 행동을 보았을 때 어떻게 느끼는가를 말한다. 아픔, 무서움, 기쁨,
          즐거움, 짜증 등의 느낌을 표현한다.
        </SemiBold>
        <TextBox
          name="feeling"
          value={record.feeling}
          onChange={handleInputChange}
        />
        <ButtonContainer>
          <Link to="/record/observation">
            <Button>이전</Button>
          </Link>
          <Link to="/record/need">
            <Button>다음</Button>
          </Link>
        </ButtonContainer>
      </FeelingContainer>
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

const FeelingContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 60px;

  display: flex;
  align-items: center;

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

export default Feeling;
