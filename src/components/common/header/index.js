import { styled } from "styled-components";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Container>
      <StyledLink to="/record">기록 센터</StyledLink>
      <StyledLink to="/training">트레이닝 센터</StyledLink>
      <StyledLink to="/community">커뮤니티 센터</StyledLink>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin-right: 20px;

  color: black;
`;
