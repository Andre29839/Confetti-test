import styled, { createGlobalStyle } from "styled-components";
import Image from "next/image";

import arrowLeft from "../../assets/arrow-left.svg";
import arrowRight from "../../assets/arrow-right.svg";

export const GlobalStyle = createGlobalStyle`
  .slick-dots {
    bottom: -12px;
  }
`;

export const ReviewsSection = styled.section`
  padding: 0 20px 80px;
  max-width: 480px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  font-weight: 400;

  @media (min-width: 768px) {
    max-width: 768px;
    padding: 0 30px 184px;
  }

  @media (min-width: 1280px) {
    max-width: 1440px;
    padding: 0 112px 0;
  }
`;

export const ReviewsTitle = styled.h2`
  font-size: 36px;
  font-weight: 400;
  color: var(--accent);
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    font-size: 48px;
  }

  @media (min-width: 1280px) {
    font-size: 100px;
  }
`;

export const ReviewsContiner = styled.div`
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    gap: 26px;
  }
`;

export const ReviewsCard = styled.div`
  background: var(--extra-accent);
  padding: 24px;
  border-radius: 24px;
  height: 224px;
  justify-content: space-between;
  display: flex !important;
  flex-direction: column;
  margin-bottom: 36px;

  @media (min-width: 768px) {
    max-width: 346px;
    height: 220px;
  }

  @media (min-width: 1280px) {
    max-width: 100%;
    height: 300px;
    padding: 36px 24px;
  }

  @media (min-width: 1440px) {
    max-width: 388px;
    height: 277px;
    padding: 36px 24px;
  }
`;

export const ReviewsText = styled.p`
  font-size: 18px;
  font-family: "Inter";
  font-weight: 500;
  letter-spacing: -0.1px;

  @media (min-width: 1280px) {
    font-size: 24px;
    width: 300px;
  }

  @media (min-width: 1440px) {
    font-size: 24px;
    width: 341px;
  }
`;

export const ReviewsCardContainerName = styled.div`
  display: flex;
  gap: 8px;
`;

export const ReviewsName = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-family: "Inter";
  font-weight: 500;
`;

export const ArrowLeft = styled(Image).attrs({
  src: arrowLeft,
})`
  width: 56px;
  height: 56px;
  padding: 11px;
  border-radius: 50%;
  border: 1px solid var(--border-form);
  position: absolute;
  top: 290px;
  left: 285px;
`;

export const ArrowRight = styled(Image).attrs({
  src: arrowRight,
})`
  width: 56px;
  height: 56px;
  padding: 11px;
  border-radius: 50%;
  border: 1px solid var(--border-form);
  top: 290px;
  right: 285px;
`;
