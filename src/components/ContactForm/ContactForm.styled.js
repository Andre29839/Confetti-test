import styled, { keyframes } from "styled-components";
import { Field, Form, ErrorMessage } from "formik";
import Image from "next/image";

const float1 = keyframes`
  0% {
    transform: translate(0, 0px) rotate(-35deg);
  }
  50% {
    transform: translate(40px, -30px);
  }
  100% {
    transform: translate(0, 0px) rotate(-35deg);
  }
`;

const float1Rotated = keyframes`
  0% {
    transform: translate(0, 0px) rotate(-35deg);
  }
  50% {
    transform: translate(40px, -15px) rotate(-35deg);
  }
  100% {
    transform: translate(0, 0px) rotate(-35deg);
  }
`;

const float2 = keyframes`
  0% {
    transform: translate(0, 0px) rotate(-10deg);
  }
  50% {
    transform: translate(20px, -50px);
  }
  100% {
    transform: translate(0, 0px) rotate(-10deg);
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

export const StyledImage1 = styled(Image)`
  @media (min-width: 768px) {
    animation: ${float1} 4s ease-in-out infinite;
    position: absolute;
    z-index: -1;
    left: calc(-25% - ((100vw - 768px) / 2));
    top: -120px;
    width: 480px;
    height: 480px;
    transform: rotate(-35deg);
  }

  @media (min-width: 1280px) {
    animation: ${float1} 4s ease-in-out infinite;
    left: calc(-31% - ((100vw - 1440px) / 2));
    top: -150px;
    width: 550px;
    height: 550px;
    transform: rotate(-30deg);
  }
`;

export const StyledImage2 = styled(Image)`
  @media (min-width: 768px) {
    animation: ${float2} 3s ease-in-out infinite;
    position: absolute;
    z-index: -1;
    right: calc(-24% - ((100vw - 768px) / 2));
    top: 80px;
    width: 480px;
    height: 480px;
    transform: rotate(-10deg);
  }

  @media (min-width: 1280px) {
    right: calc(-24% - ((100vw - 1440px) / 2));
    top: 150px;
    width: 500px;
    height: 500px;
  }
`;

export const ContactFormContainer = styled(Form)`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 480px;
  background-color: var(--extra-accent);
  padding: 51px 20px;
  margin: 0 auto;

  @media (min-width: 480px) {
    border-radius: 24px;
  }

  @media (min-width: 768px) {
    margin: 0 auto;
    max-width: 608px;
    padding: 56.5px 82.5px;
  }
`;

export const ContactFormLabel = styled.label`
  color: var(--grey-form);
  margin-bottom: 8px;
  margin-left: 24px;
  font-size: 16px;
  font-family: "Inter";
`;

export const ContactFormFieldStyled = styled(Field)`
  border-radius: 9px;
  margin-bottom: 24px;
  border: 1px solid var(--border-form);
  height: 62px;
  padding: 20px 24px;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -1px;
  color: ${(props) => (props.$hasError ? "var(--accent)" : "var(--main)")};
  font-family: "Inter";

  @media (min-width: 768px) {
    width: 443px;
  }

  @media (min-width: 1280px) {
    font-size: 20px;
    margin-bottom: 32px;
  }
`;

export const ContactFormTextArea = styled(ContactFormFieldStyled).attrs({
  as: "textarea",
})`
  height: 128px;
  resize: none;
`;

export const ContactFormError = styled(ErrorMessage)`
  color: var(--accent);
  margin-top: -16px;
  font-size: 14px;
  font-weight: 500;
  font-family: "Inter";
  text-align: end;
  margin-right: 24px;
`;

export const ContactFormButton = styled.button`
  background-color: var(--accent);
  border-radius: 24px;
  border: 1px solid var(--accent);
  color: var(--white);
  font-size: 28px;
  padding: 20px 0;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: -0.1px;

  &:disabled {
    cursor: context-menu;
    background-color: var(--accent-disabled);
    border: 1px solid var(--accent-disabled);
  }

  @media (min-width: 768px) {
    font-size: 40px;
  }
`;
