import Slider from "react-slick";
import PropTypes from "prop-types";

import { AboutUsCard } from "@/components/AboutUsCard/AboutUsCard";
import { aboutUs } from "@/constantes/aboutUs";
import { settings } from "@/constantes/sliderSettings";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import text from "@/text/text.json";

import {
  AboutText,
  AboutTitle,
  AboutUsSection,
  CardGrid,
  GlobalStyle,
  AboutUsContainer,
} from "./AboutUs.styled";

export const AboutUs = () => {
  const windowWidth = useWindowWidth();
  return (
    <AboutUsSection id="aboutUs">
      <AboutUsContainer>
        <AboutTitle>{text.aboutUsText.title}</AboutTitle>
        <AboutText>{text.aboutUsText.text}</AboutText>
        <GlobalStyle />
        {windowWidth <= 767.9 && (
          <ul>
            <Slider {...settings}>
              {aboutUs.map(({ title, text, color }, index) => (
                <AboutUsCard
                  key={index}
                  title={title}
                  text={text}
                  color={color}
                  index={index}
                  total={aboutUs.length}
                />
              ))}
            </Slider>
          </ul>
        )}

        {windowWidth >= 768 && windowWidth < 1280 && (
          <ul>
            {aboutUs.map(({ title, text, color }, index) => (
              <AboutUsCard
                key={index}
                title={title}
                text={text}
                color={color}
                index={index}
                total={aboutUs.length}
              />
            ))}
          </ul>
        )}

        {windowWidth >= 1280 && (
          <CardGrid>
            {aboutUs.map(({ title, text, color }, index) => (
              <AboutUsCard
                key={index}
                title={title}
                text={text}
                color={color}
                index={index}
                total={aboutUs.length}
              />
            ))}
          </CardGrid>
        )}
      </AboutUsContainer>
    </AboutUsSection>
  );
};

AboutUsCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};
