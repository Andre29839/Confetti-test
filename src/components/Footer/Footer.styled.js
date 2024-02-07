import styled from "styled-components";

export const FooterSection = styled.footer`
  position: relative;
  overflow: hidden;
`;

export const FooterContainer = styled.div`
  position: relative;
  max-width: 480px;
  padding: 32px 20px;
  margin: 80px auto 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 20px;
    right: 20px;
    border-top: 1px solid var(--accent);
  }

  @media (min-width: 768px) {
    max-width: 768px;
    padding: 24px 30px 28px;
    &::before {
      left: 30px;
      right: 30px;
    }
  }

  @media (min-width: 1280px) {
    max-width: 1440px;
    padding: 24px 112px 36px;
    &::before {
      left: 112px;
      right: 112px;
    }
  }
`;

export const FooterText = styled.p`
  font-size: 16px;
  font-weight: 500;
  font-family: "Inter";
  letter-spacing: -0.1px;
`;
