import { styled } from "styled-components";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Container>
      <Link to="/record">기록 센터</Link>
      <Link to="/trainning">트레이닝 센터</Link>
      <Link to="/community">커뮤니티 센터</Link>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 80px;
  background-color: #665be1;
`;
