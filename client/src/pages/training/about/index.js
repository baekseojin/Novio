import React from "react";
import background from "../../../assets/images/TrainingBackground.svg";
import * as C from "../../../components/index";
import { styled } from "styled-components";

const About = () => {
  return (
    <Container>
      <C.Header />
      <Content>
        <Section>
          <Title>NVC란?</Title>
          <Text>
            NVC는 Nonviolent Communication의 약자로 비폭력대화로 번역된다.
            때로는 연민의 대화(Compassionate Communication)로 부르기도 한다.
            여기서 말하는 비폭력은 간디가 사용한 것과 같은 뜻으로, 우리 마음
            안에서 폭력이 가라앉고 자연스러운 본성인 연민으로 돌아간 상태를
            가리킨다.
          </Text>
        </Section>

        <Section>
          <Title>NVC의 원리</Title>
          <Text>
            NVC는 우리가 우리 자신을 표현하고, 다른 사람의 말을 듣는 방법을
            재구성하도록 이끌어준다. NVC를 익히면 습관적이고 즉각적인 반응을
            보이는 대신 자신이 무엇을 관찰하고 느끼고 원하는가를 의식하면서 이를
            바탕으로 정직하고 명확하게 자신을 표현할 수 있게 된다.
          </Text>
        </Section>
        <Section>
          <Title>NVC의 4가지 요소</Title>
          <Subsection>
            <Subtitle>관찰(Observation)</Subtitle>
            <Text>
              어떤 상황에서 있는 그대로, 실제로 무엇이 일어나고 있는가를
              관찰한다.
            </Text>
          </Subsection>
          <Subsection>
            <Subtitle>느낌(Feeling)</Subtitle>
            <Text>
              그 행동을 보았을 때 어떻게 느끼는가를 말한다. 아픔, 무서움, 기쁨,
              즐거움, 짜증 등의 느낌을 표현한다.
            </Text>
          </Subsection>
          <Subsection>
            <Subtitle>필요/욕구(Need)</Subtitle>
            <Text>
              자신이 포착한 느낌이 내면의 어떤 욕구와 연결되는지를 말한다. 다른
              사람을 탓하기보다는 자신의 욕구와 희망, 기대, 가치관이나 생각을
              인정함으로써 우리는 자신의 느낌에 대해 책임을 진다.
            </Text>
          </Subsection>
          <Subsection>
            <Subtitle>요청/부탁(Request)</Subtitle>
            <Text>
              내 삶을 더 풍요롭게 하기 위해서 다른 사람이 해주길 바라는 것을
              표현한다. 막연하고 추상적이거나 모호한 말을 피하고, 우리가 원하지
              않는 것보다 우리가 원하는 것을 말함으로써 긍정적인 행동을
              부탁한다.
            </Text>
          </Subsection>
        </Section>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Content = styled.div`
  width: 80%;
  max-width: 1000px;
  color: white;
  border-radius: 15px;
  padding: 20px;
  overflow-y: auto;
  margin-top: 150px;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const Subsection = styled.div`
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Subtitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Text = styled.p`
  font-size: 18px;
  line-height: 1.6;
`;

export default About;
