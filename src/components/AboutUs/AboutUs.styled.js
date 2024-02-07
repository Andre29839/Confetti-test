import styled, { createGlobalStyle } from "styled-components";

export const AboutUsSection = styled.section`
  position: relative;
  overflow: hidden;
`;

export const AboutUsContainer = styled.div`
  padding: 0 20px 80px;
  max-width: 480px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  font-weight: 400;

  & > :nth-child(1) {
    margin-bottom: 16px;
  }

  & > :nth-child(2) {
    margin-bottom: 36px;
  }

  @media (min-width: 768px) {
    max-width: 768px;
    padding: 0 30px 80px;
  }

  @media (min-width: 1280px) {
    max-width: 1440px;
    padding: 0 112px 100px;
  }
`;

export const AboutTitle = styled.h2`
  font-size: 36px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 400;
  line-height: 0.8;

  @media (min-width: 768px) {
    width: 350px;
    margin: 0 auto;
    font-size: 48px;
  }

  @media (min-width: 1280px) {
    width: 400px;
    margin: 0 auto;
    font-size: 56px;
  }
`;

export const AboutText = styled.p`
  text-align: center;
  font-size: 20px;
  color: var(--extra-text);
  font-family: "Inter";
  letter-spacing: -0.1px;

  @media (min-width: 768px) {
    width: 600px;
    margin: 0 auto;
    font-size: 24px;
  }

  @media (min-width: 1280px) {
    width: 650px;
  }
`;

export const CardGrid = styled.ul`
  @media (min-width: 1280px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 12px;
  }
  @media (min-width: 1440px) {
    grid-gap: 24px;
  }
`;

export const AboutCard = styled.li`
  background: ${(props) => props.color};
  color: var(--white);
  padding: 24px;
  border-radius: 24px;
  margin-bottom: 24px;
  height: 253px;
  margin-left: 10px;
  margin-right: 10px;
  outline: none;

  @media (min-width: 768px) {
    padding: 48px;
    height: 287px;
    margin-right: 56px;
    margin-left: 56px;
  }

  @media (min-width: 1280px) {
    height: 293px;
    margin: 0;
  }
`;

export const AboutSubTitle = styled.h3`
  margin-bottom: 55px;
  font-weight: 400;
  font-size: 24px;
  width: 200px;
  text-transform: uppercase;
  line-height: 1;

  &.last {
    width: 180px;
  }

  @media (min-width: 768px) {
    font-size: 40px;
    width: 350px;
    margin-bottom: 40px;

    &.last {
      width: 300px;
    }
  }

  @media (min-width: 1280px) {
    margin-bottom: 15px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 40px;
  }
`;

export const AboutSubText = styled.p`
  font-weight: 500;
  font-family: "Inter";
  font-size: 16px;
  letter-spacing: -0.1px;

  @media (min-width: 768px) {
    font-size: 20px;
    width: 490px;

    &.first {
      width: 350px;
    }

    &.last {
      width: 495px;
    }
  }

  @media (min-width: 1280px) {
    width: 420px;

    &.first {
      width: 350px;
    }

    &.last {
      width: 435px;
    }
  }

  @media (min-width: 1440px) {
    width: 490px;

    &.first {
      width: 350px;
    }

    &.last {
      width: 495px;
    }
  }
`;

export const GlobalStyle = createGlobalStyle`
  .slick-dots {
    bottom: -12px;
  }
`;
