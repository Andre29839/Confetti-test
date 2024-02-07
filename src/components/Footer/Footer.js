import Image from "next/image";
import { animateScroll as scroll } from "react-scroll";
import { useCallback } from "react";

import logo from "@/assets/logo.svg";
import text from "@/text/text.json";

import { FooterContainer, FooterText, FooterSection } from "./Footer.styled";

export const Footer = () => {
  const handleTitleClick = useCallback(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <FooterSection>
      <FooterContainer>
        <Image
          onClick={handleTitleClick}
          src={logo}
          alt="Confetti Logo"
          width={104}
          height={32}
          style={{ cursor: "pointer" }}
          aria-label="Logo"
          role="button"
        />
        <FooterText>{text.footerText}</FooterText>
      </FooterContainer>
    </FooterSection>
  );
};
