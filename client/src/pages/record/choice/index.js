import * as C from "../../../components/index";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

import Background from "../../../assets/images/Background.svg";
import { ReactComponent as RecordButton } from "../../../assets/images/RecordButton.svg";
import { ReactComponent as CalenderButton } from "../../../assets/images/CalenderButton.svg";

export default function Choice() {
  return (
    <Container>
      <C.Header />
      <ChoiceContainer>
        <RecordBox Link to="observation">
          <Bold>Record</Bold>
          <br />
          <Regular>오늘 하루 일상을 기록해요.</Regular>
          <ImageContainer>
            <RecordButton />
          </ImageContainer>
        </RecordBox>

        <CalenderBox Link to="calender">
          <Bold>Calender</Bold>
          <br />
          <Regular>매일의 기록을 되돌아봐요.</Regular>
          <ImageContainer>
            <CalenderButton />
          </ImageContainer>
        </CalenderBox>
      </ChoiceContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: black;
  background-image: url(${Background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: hidden;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ChoiceContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 200px;
`;

const RecordBox = styled(Link)`
  width: 500px;
  height: 500px;
  color: white;
  border-radius: 20px;
  background-image: linear-gradient(to bottom right, #193cf6, #0a0e23);
  text-decoration: none;

  display: flex;
  flex-direction: column;
`;

const CalenderBox = styled(Link)`
  width: 500px;
  height: 500px;
  background-color: white;
  color: white;
  border-radius: 20px;
  background-image: linear-gradient(to bottom left, #193cf6, #0a0e23);

  text-decoration: none;
`;

const Bold = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-left: 22px;
  margin-top: 30px;
`;

const Regular = styled.div`
  font-size: 16px;
  font-weight: medium;
  color: #a0aec0;
  margin-left: 22px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
`;
