import { styled } from "styled-components";
import * as C from "../../components/index";

import MainBackground from "../../assets/MainBackground.svg";
import { ReactComponent as MainRecord } from "../../assets/MainRecord.svg";
import { ReactComponent as MainTraining } from "../../assets/MainTraining.svg";
import { ReactComponent as MainCommunity } from "../../assets/MainCommunity.svg";

export default function Main() {
  return (
    <MainContainer>
      <C.Header />
      <Landing>
        평화로운 대화생활을 선도하는 온라인 플랫폼, Novio
        <ElementContainer>
          <MainRecord />
          대화생활을 기록하며 하루를 성찰하세요.
        </ElementContainer>
        <ElementContainer>
          <MainTraining />
          여러가지 트레이닝 코스를 통해 비폭력 대화 프로세스를 익혀보세요.
        </ElementContainer>
        <ElementContainer>
          <MainCommunity />
          글을 쓰며 본인의 경험을 알리고,
          <br />
          글을 읽으며 타인의 이야기에 공감해보세요.
        </ElementContainer>
      </Landing>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100vw;
  height: 3000px;

  background-color: black;
  background-image: url(${MainBackground});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
`;

const Landing = styled.div`
  color: white;
  display: flex;
  gap: 200px;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;

  font-size: 30px;
  font-weight: bold;
`;

const ElementContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 100px;
`;
