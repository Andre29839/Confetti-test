import Image from "next/image";

import styled, { keyframes } from "styled-components";

const float1 = keyframes`
  0% {
    transform: translate(0, 0px);
  }
  50% {
    transform: translate(20px, -17px);
  }
  100% {
    transform: translate(0, 0px);
  }
`;

const float1Rotated = keyframes`
  0% {
    transform: translate(0, 0px) rotate(-30deg);
  }
  50% {
    transform: translate(40px, -15px) rotate(-30deg);
  }
  100% {
    transform: translate(0, 0px) rotate(-30deg);
  }
`;

const float2 = keyframes`
  0% {
    transform: translate(0, 0px);
  }
  50% {
    transform: translate(-20px, -50px);
  }
  100% {
    transform: translate(0, 0px);
  }
`;

const float2Rotated = keyframes`
  0% {
    transform: translate(0, 0px) rotate(-10deg);
  }
  50% {
    transform: translate(40px, -60px) rotate(-10deg);
  }
  100% {
    transform: translate(0, 0px) rotate(-10deg);
  }
`;

export const HeroParentElement = styled.section`
  position: relative;
  overflow: hidden;
`;

export const StyledImage1 = styled(Image)`
  animation: ${float1} 4s ease-in-out infinite;
  position: absolute;
  left: calc(-21.5% + ((100vw - 360px) / 2));
  top: 0px;
  width: 200px;
  height: 200px;
  z-index: -1;
  background: radial-gradient(circle, var(--bg-color) 30%, transparent 70%);

  @media (min-width: 768px) {
    left: calc(-15% + ((100vw - 768px) / 2));
    width: 330px;
    height: 330px;
    top: 45px;
  }

  @media (min-width: 1280px) {
    left: calc(-24% + ((100vw - 768px) / 2));
    width: 550px;
    height: 550px;
    top: -10px;
    transform: rotate(-30deg);
    background: radial-gradient(circle, var(--bg-color) 50%, transparent 70%);

    animation: ${float1Rotated} 4s ease-in-out infinite;
  }
`;

export const StyledImage2 = styled(Image)`
  animation: ${float2} 3s ease-in-out infinite;
  position: absolute;
  right: calc(-16% + ((100vw - 360px) / 2));
  top: 210px;
  width: 220px;
  height: 220px;
  z-index: -1;
  background: radial-gradient(circle, var(--bg-color) 30%, transparent 70%);

  @media (min-width: 768px) {
    right: calc(-8.5% + ((100vw - 768px) / 2));
    top: 270px;
    width: 360px;
    height: 360px;
  }

  @media (min-width: 1280px) {
    right: calc(-24% + ((100vw - 768px) / 2));
    width: 580px;
    height: 580px;
    top: 140px;
    transform: rotate(-10deg);
    background: radial-gradient(circle, var(--bg-color) 50%, transparent 70%);

    animation: ${float2Rotated} 4s ease-in-out infinite;
  }
`;

export const HeroTitle = styled.h1`
  text-transform: uppercase;
  color: var(--accent);
  width: 295px;
  margin: 150px auto 234px;
  font-size: 40px;
  text-align: center;
  font-weight: 400;
  line-height: 0.8;

  @media (min-width: 768px) {
    font-size: 64px;
    width: 471px;
    margin: 173px auto 327px;
  }

  @media (min-width: 1280px) {
    font-size: 88px;
    width: 647px;
    margin: 173px auto 342px;
  }
`;

export const HeroTitleSpan = styled.span`
  color: var(--main);
  font-weight: 400;
`;
