import { useEffect, useState } from "react";
import Slider from "react-slick";

import { aboutUs } from "@/constantes/aboutUs";
import { AboutUsCard } from "@/components/AboutUsCard/AboutUsCard";

import {
  AboutText,
  AboutTitle,
  AboutUsSection,
  CardGrid,
  GlobalStyle,
} from "./AboutUs.styled";

export const AboutUs = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <AboutUsSection id="aboutUs">
      <AboutTitle>Kreatywny zespół dekoratorów</AboutTitle>
      <AboutText>
        Młodzi i energiczni, rozwijający działalność w zakresie tworzenia
        dekoracji na imprezy i wydarzenia
      </AboutText>
      <GlobalStyle />
      {windowWidth <= 767.9 && (
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
      )}

      {windowWidth >= 768 &&
        windowWidth < 1280 &&
        aboutUs.map(({ title, text, color }, index) => (
          <AboutUsCard
            key={index}
            title={title}
            text={text}
            color={color}
            index={index}
            total={aboutUs.length}
          />
        ))}
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
    </AboutUsSection>
  );
};
