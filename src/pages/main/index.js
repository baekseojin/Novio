import { styled } from "styled-components";
import * as C from "../../components/index";

export default function Main() {
  return (
    <Container>
      <C.Header />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 3070px;
  top: 80px;
  background-color: #8f94fb;
`;
