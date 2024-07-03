import React from "react";
import { styled, keyframes } from "styled-components";
import * as C from "../../../../components/index";
import background from "../../../../assets/images/TrainingBackground.svg";
import { Link } from "react-router-dom";

const ScenarioStart = () => {
  return (
    <Container>
      <C.Header />
      <SlideUpBold>
        <FadeInBold>갈등 상황에서 본인만의 답변을 적어보세요!</FadeInBold>
      </SlideUpBold>
      <Link to="/training/scenario/problem">
        <Button>
          <Strong>시작하기</Strong>
          <ContainerStars id="container-stars">
            <Stars id="stars" />
          </ContainerStars>
          <Glow id="glow">
            <Circle className="circle" />
            <Circle className="circle" />
          </Glow>
        </Button>
      </Link>
    </Container>
  );
};

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(0.75);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }
  100% {
    transform: scale(0.75);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
`;

const animStar = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-135rem);
  }
`;

const animStarRotate = keyframes`
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0);
  }
`;

// 스타일 정의
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
  gap: 150px;
`;

const Bold = styled.div`
  font-size: 30px;
  font-weight: bold;

  text-align: center;
  color: white;
  margin-top: 100px;
`;

const SlideUpBold = styled.div`
  font-size: 30px;
  font-weight: bold;

  text-align: center;
  color: white;
  animation: ${slideUp} 1s;
`;

const FadeInBold = styled.div`
  font-size: 30px;
  font-weight: bold;

  text-align: center;
  color: white;
  animation: ${fadeIn} 2s;
  animation-delay: ${(props) => props.delay};
`;

const Button = styled.button`
  width: 500px;
  overflow: hidden;
  font-size: 50px;
  height: 200px;
  background-size: 300% 300%;
  backdrop-filter: blur(1rem);
  border-radius: 5rem;
  transition: 0.5s;
  animation: ${gradient} 5s ease infinite;
  border: double 4px transparent;
  background-image: linear-gradient(#212121, #212121),
    linear-gradient(
      137.48deg,
      #ffdb3b 10%,
      #fe53bb 45%,
      #8f51ea 67%,
      #0044ff 87%
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
  position: relative;

  &:hover #container-stars {
    z-index: 1;
    background-color: #212121;
  }

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  &:active {
    border: double 4px #fe53bb;
    background-origin: border-box;
    background-clip: content-box, border-box;
    animation: none;
  }

  &:active .circle {
    background: #fe53bb;
  }
`;

const ContainerStars = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: 0.5s;
  backdrop-filter: blur(1rem);
  border-radius: 5rem;
`;

const Strong = styled.strong`
  z-index: 2;
  font-size: 50px;
  letter-spacing: 5px;
  color: #ffffff;
  text-shadow: 0 0 4px white;
`;

const Glow = styled.div`
  position: absolute;
  display: flex;
  width: 12rem;
`;

const Circle = styled.div`
  width: 100%;
  height: 30px;
  filter: blur(2rem);
  animation: ${pulse} 4s infinite;
  z-index: -1;

  &:nth-of-type(1) {
    background: rgba(254, 83, 186, 0.636);
  }

  &:nth-of-type(2) {
    background: rgba(142, 81, 234, 0.704);
  }
`;

const Stars = styled.div`
  position: relative;
  background: transparent;
  width: 200rem;
  height: 200rem;

  &::after,
  &::before {
    content: "";
    position: absolute;
    background-image: radial-gradient(#ffffff 1px, transparent 1%);
    background-size: 50px 50px;
  }

  &::after {
    top: -10rem;
    left: -100rem;
    width: 100%;
    height: 100%;
    animation: ${animStarRotate} 90s linear infinite;
  }

  &::before {
    top: 0;
    left: -50%;
    width: 170%;
    height: 500%;
    animation: ${animStar} 60s linear infinite;
    opacity: 0.5;
  }
`;

export default ScenarioStart;
