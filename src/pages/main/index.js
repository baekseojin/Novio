import { styled } from "styled-components";
import * as C from "../../components/index";

import MainBackground from "../../assets/MainBackground.svg";
import { ReactComponent as MainRecord } from "../../assets/MainRecord.svg";
import { ReactComponent as MainTraining } from "../../assets/MainTraining.svg";
import { ReactComponent as MainCommunity } from "../../assets/MainCommunity.svg";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <MainContainer>
      <C.Header />
      <Landing>
        <Bold>평화로운 대화생활을 선도하는 온라인 플랫폼, Novio</Bold>
        <ElementContainer>
          <MainRecord />
          <Bold>대화생활을 기록하며 하루를 성찰하세요.</Bold>
          <SemiBold Link to="record">
            기록 센터 바로가기 {">"}
          </SemiBold>
        </ElementContainer>
        <ElementContainer>
          <MainTraining />
          <Bold>
            여러가지 트레이닝 코스를 통해 비폭력 대화 프로세스를 익혀보세요.
          </Bold>
          <SemiBold Link to="training">
            트레이닝 센터 바로가기 {">"}
          </SemiBold>
        </ElementContainer>
        <ElementContainer>
          <MainCommunity />
          <Bold>
            글을 쓰며 본인의 경험을 알리고,
            <br />
            글을 읽으며 타인의 이야기에 공감해보세요.
          </Bold>
          <SemiBold Link to="community">
            커뮤니티 센터 바로가기 {">"}
          </SemiBold>
        </ElementContainer>
      </Landing>
      <C.Footer />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: black;
  background-image: url(${MainBackground});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  overflow-x: hidden;
`;

const Landing = styled.div`
  color: white;
  display: flex;
  gap: 200px;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
`;

const ElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  gap: 50px;
`;

const Bold = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

const SemiBold = styled(Link)`
  font-size: 16px;
  font-weight: SemiBold;
  color: white;
`;
