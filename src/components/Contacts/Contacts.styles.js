import styled from "styled-components";
import Link from "next/link";

export const ContactSectionMain = styled.section`
  overflow: hidden;
  position: relative;
`;

export const ContactContainer = styled.div`
  max-width: 480px;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 1280px) {
    max-width: 1440px;
    display: flex;
    justify-content: space-between;
    padding: 164px 147px 0 112px;
    align-items: center;
  }

  @media (min-width: 1440px) {
    gap: 240px;
  }
`;

export const ContactSection = styled.div`
  padding: 0 20px;
  max-width: 480px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  font-weight: 400;
`;

export const ContactTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
  color: var(--accent);
  font-size: 36px;
  font-weight: 400;
  margin-bottom: 36px;

  @media (min-width: 768px) {
    font-size: 48px;
  }

  @media (min-width: 1280px) {
    font-size: 100px;
    margin-bottom: 56px;
  }
`;

export const ContactSubTitle = styled.h3`
  display: flex;
  flex-direction: column;
  font-size: 28px;
  font-weight: 400;
  align-items: center;
  line-height: 1;
  letter-spacing: -0.1px;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    font-size: 24px;
  }

  @media (min-width: 1280px) {
    font-size: 40px;
    align-items: flex-start;
    margin-bottom: 32px;
  }
`;

export const ContactContainerInformationMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-bottom: 36px;

  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`;

export const ContactContainerInformation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;

  stroke: var(--main);
  transition: all 500ms ease-in-out;

  &:hover,
  &:focus {
    color: var(--accent);
    stroke: var(--accent);
  }

  &:hover a,
  &:focus a {
    color: var(--accent);
  }
`;

export const ContactContainerData = styled(Link)`
  color: var(--extra-text);
  font-size: 20px;
  font-weight: 400;
  font-family: "Inter";
  letter-spacing: -1px;
  transition: all 500ms ease-in-out;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;
