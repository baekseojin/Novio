import { styled } from "styled-components";

import * as C from "../../../components/index";
import Background from "../../../assets/Background.svg";

export default function Observation() {
  return (
    <Container>
      <C.Header />
      <ObservationContainer>
        <Bold>백서진님! 오늘 타인과 대화하며 어떤 일이 있었나요?</Bold>
      </ObservationContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const ObservationContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  background-image: url(${Background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  top: 200px;
  display: flex;
  justify-content: center;
`;

const Bold = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: white;
`;
