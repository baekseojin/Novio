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
        {/* <StyledLink to="/community">커뮤니티 센터</StyledLink> */}
      </CenterElement>
      <Mypage>
        <StyledLink to="/mypage"></StyledLink>
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
  position: relative;
  padding: 1.5rem 1rem;
  border-radius: 0.8rem;
  cursor: pointer;
  transition: 0.25s ease-in-out;

  color: white;
  text-decoration: none;

  &::before {
    content: "";
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    height: 0.2rem;
    width: ${({ isLink }) => (isLink ? "80%" : "0")};
    background-color: white;
    border-radius: 999rem;
    transition: 0.3s ease-in-out;
  }

  &:hover {
    &::before {
      width: 80%;
    }
  }
`;

const Mypage = styled(Link)`
  display: flex;
  text-decoration: none;
`;

const Novio = styled.div``;
