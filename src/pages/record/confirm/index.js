import { Link } from "react-router-dom";
import { styled } from "styled-components";
import * as C from "../../../components/index";
import Background from "../../../assets/images/ConfirmBackground.svg";

export default function Confirm() {
  return (
    <Container>
      <C.Header />
      <HeadingText>수정할 내용이 없는지 한 번 더 확인해보세요.</HeadingText>

      <ConfirmBox>
        <TextContainer>
          <Bold>백서진님! 오늘 타인과 대화하며 어떤 일이 있었나요?</Bold>
          <Hr />
          <Regular>
            나는 예술학교에 진학하고 싶지만, 부모님은 안정적인 직업을 위해
            법학과에 진학하기를 원하는 상황이다. 오늘 가족 만찬 시간에 이 문제로
            인해 언성이 높아지는 일이 있었다.
          </Regular>
        </TextContainer>
        <TextContainer>
          <Bold>그 상황에서 느꼈던 감정들을 적어주세요.</Bold>
          <Hr />
          <Regular>
            내 말을 부모님이 잘 들어주지 않아서 짜증났다. 진로에 대한 불확실성
            때문에 불안하다.
          </Regular>
        </TextContainer>
        <TextContainer>
          <Bold>위 상황에서 타인이 어떻게 행동해주길 원하나요?</Bold>
          <Hr />
          <Regular>
            저는 부모님이 내 이야기를 들어주고, 내 생각을 이해하려고
            노력해주기를 바랍니다. 부모님이 바라는 안정적인 직업도 중요하지만,
            내가 진정으로 하고 싶은 일을 하는 것이 얼마나 중요한지 공감해주고,
            응원해주길 원합니다.
          </Regular>
        </TextContainer>
        <TextContainer>
          <Bold>
            적은 내용을 바탕으로 직접 타인에게 어떻게 말할지 적어주세요.
          </Bold>
          <Hr />
          <Regular>
            "부모님, 저도 안정적인 직업을 갖는 것이 중요하다는 것을 알고 있어요.
            하지만 제게는 예술을 공부하고 그것을 통해 제 꿈을 실현하는 것이 정말
            중요해요. 부모님의 걱정과 기대를 이해하지만, 제가 예술학교에 가고
            싶다는 마음을 알아주시고 지지해주시면 좋겠어요. 우리 함께 제가 어떤
            길을 가는 것이 행복할지 이야기해 봤으면 해요."
          </Regular>
        </TextContainer>
        <ButtonContainer>
          <Link to="/record/request">
            <Button>이전</Button>
          </Link>
          <Link to="/record/completion">
            <Button>다음</Button>
          </Link>
        </ButtonContainer>
      </ConfirmBox>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: black;
  background-image: url(${Background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  overflow-x: hidden;

  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const ConfirmBox = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 200px;
  width: 1200px;
  height: 100%;
  gap: 75px;
`;

const HeadingText = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: white;
  margin-top: 600px;
  text-align: center;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Bold = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: white;
  margin-top: 40px;
  text-align: left;
  margin-bottom: 15px;
`;

const Regular = styled.div`
  font-size: 24px;
  font-weight: normal;
  color: white;
  text-align: left;
  margin-top: 20px;
`;

const Hr = styled.hr`
  width: 1180px;
  height: 1px;
  background: #7e7e7d;
  border: none;
`;

const ButtonContainer = styled.div`
  margin-top: 200px;
  gap: 200px;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  width: 200px;
  height: 60px;
  border-radius: 100px;
  border: none;
  margin-bottom: 50px;

  background: linear-gradient(to right, #a799fd, #3423ff);

  color: white;
  font-weight: Bold;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background-color: #6fc5ff;
    box-shadow: 0 0 20px #6fc5ff50;
    transform: scale(1.1);
  }
`;
