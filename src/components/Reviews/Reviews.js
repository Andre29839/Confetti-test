import Slider from "react-slick";
import Image from "next/image";
import { useEffect, useState } from "react";

import { reviews } from "@/constantes/reviews";
import svgIcon from "@/assets/icon.svg";

import {
  GlobalStyle,
  ReviewsCard,
  ReviewsCardContainerName,
  ReviewsName,
  ReviewsSection,
  ReviewsText,
  ReviewsTitle,
  ArrowLeft,
  ArrowRight,
  ReviewsContiner,
} from "./Reviews.styled";

export const Reviews = () => {
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const settings2 = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <ArrowRight direction="next" />,
    prevArrow: <ArrowLeft direction="prev" />,
  };

  return (
    <ReviewsSection id="reviews">
      <ReviewsTitle>Recenzje</ReviewsTitle>
      <GlobalStyle />
      {windowWidth < 1280 ? (
        <Slider {...(windowWidth > 767.9 ? settings2 : settings1)}>
          {reviews.map(({ text, name }, index) => (
            <ReviewsCard key={index}>
              <ReviewsText>{text}</ReviewsText>
              <ReviewsCardContainerName>
                <Image src={svgIcon} alt="Phone icon" width={24} height={24} />
                <ReviewsName>{name}</ReviewsName>
              </ReviewsCardContainerName>
            </ReviewsCard>
          ))}
        </Slider>
      ) : (
        <ReviewsContiner>
          {[reviews[1], reviews[0], ...reviews.slice(2)].map(
            ({ text, name }, index) => (
              <ReviewsCard key={index}>
                <ReviewsText>{text}</ReviewsText>
                <ReviewsCardContainerName>
                  <Image
                    src={svgIcon}
                    alt="Phone icon"
                    width={24}
                    height={24}
                  />
                  <ReviewsName>{name}</ReviewsName>
                </ReviewsCardContainerName>
              </ReviewsCard>
            )
          )}
        </ReviewsContiner>
      )}
    </ReviewsSection>
  );
};
