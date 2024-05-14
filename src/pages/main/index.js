import { styled } from "styled-components";
import * as C from "../../components/index";
import backgroundSVG from "../../assets/MainBackground.svg";

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
  background-color: black;
  background-image: url(${backgroundSVG});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
`;
