import { styled } from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../../assets/images/Novio.svg";

export default function Header() {
  return (
    <Container>
      <Novio>
        <Link to="/">
          <Logo />
        </Link>
      </Novio>
      <CenterElement>
        <StyledLink to="/record">기록 센터</StyledLink>
        <StyledLink to="/training">트레이닝 센터</StyledLink>
        <StyledLink to="/community">커뮤니티 센터</StyledLink>
      </CenterElement>
      <Mypage>
        <StyledLink to="/mypage">마이페이지</StyledLink>
      </Mypage>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 80px;

  top: 0px;

  display: flex;
  gap: 400px;
  align-items: center;
  justify-content: center;
  position: fixed;

  backdrop-filter: brightness(80%) blur(10px);
`;

const CenterElement = styled.div`
  display: flex;
  gap: 100px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 1rem;
  border-radius: 5px;

  transition: 0.2s ease-in-out;

  &:hover {
    background: #ffffff22;
  }

  &:active {
    transition: 0.1s ease-in-out;
    background: #ffffff44;
  }
`;

const Mypage = styled(Link)`
  display: flex;
  text-decoration: none;
`;

const Novio = styled.div``;
