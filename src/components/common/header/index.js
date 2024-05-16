import { styled } from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../../assets/Novio.svg";

export default function Header() {
  return (
    <Container>
      <Link to="">
        <Logo />
      </Link>
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
  width: 100%;
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white;
`;

const CenterElement = styled.div`
  display: flex;
  gap: 100px;
  position: fixed;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Mypage = styled(Link)`
  display: flex;
  text-decoration: none;
  margin-left: 1200px;
`;
