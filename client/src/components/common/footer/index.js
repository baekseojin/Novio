import { styled } from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterText>ⓒ 2024 Novio. All Rights Reserved.</FooterText>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  width: 100vw;
  height: 100px;
  bottom: 0px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 200px;
`;

const FooterText = styled.div`
  color: #c4c4c4;
`;
