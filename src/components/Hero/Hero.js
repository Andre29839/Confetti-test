import text from "@/text/text.json";

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
        {text.heroText.title}{" "}
        <HeroTitleSpan>{text.heroText.span}</HeroTitleSpan>{" "}
        {text.heroText.subtitle}
      </HeroTitle>
      <StyledImage1 src={svgBallons1} alt="Ballons 1" priority />
      <StyledImage2 src={svgBallons2} alt="Ballons 2" priority />
    </HeroParentElement>
  );
};
