import { styled } from "styled-components";
import * as C from "../../components/index";

export default function Main() {
  return (
    <MainContainer>
      <C.Header />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100vw;
  height: 3070px;
  top: 80px;
  background-color: black;
`;
