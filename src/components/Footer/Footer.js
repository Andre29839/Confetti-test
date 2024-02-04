import Image from "next/image";

import logo from "@/assets/logo.svg";

import { FooterContainer, FooterText } from "./Footer.styled";

export const Footer = () => {
  return (
    <FooterContainer>
      <Image src={logo} alt="Confetti Logo" width={104} height={32} />
      <FooterText>confetti &copy; 2023</FooterText>
    </FooterContainer>
  );
};
