import svgBallons1 from "../../assets/ballons1.png";
import svgBallons2 from "../../assets/ballons2.png";

import {
  HeroTitle,
  HeroTitleSpan,
  HeroParentElement,
  StyledImage1,
  StyledImage2,
} from "./Hero.styled";

export const Hero = () => {
  return (
    <HeroParentElement id="hero">
      <HeroTitle>
        Tworzymy unikalne i niepowtarzalne{" "}
        <HeroTitleSpan>dekoracje balonowe</HeroTitleSpan> na imprezy
      </HeroTitle>
      <StyledImage1 src={svgBallons1} alt="Ballons 1" />
      <StyledImage2 src={svgBallons2} alt="Ballons 2" />
    </HeroParentElement>
  );
};
