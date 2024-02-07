import Slider from "react-slick";

import { useWindowWidth } from "@/hooks/useWindowWidth";
import { reviews } from "@/constantes/reviews";
import text from "@/text/text.json";

import { settings1, settings2 } from "@/constantes/sliderSettings";
import { renderCard } from "./RenderCards";

import {
  GlobalStyle,
  ReviewsSection,
  ReviewsTitle,
  ReviewsContiner,
  ReviewsContainer,
} from "./Reviews.styled";

export const Reviews = () => {
  const windowWidth = useWindowWidth();

  let mobileReviews = [...reviews];
  if (windowWidth <= 767.9) {
    mobileReviews = [reviews[1], reviews[0], ...reviews.slice(2)];
  }

  return (
    <ReviewsSection id="reviews">
      <ReviewsContainer>
        <ReviewsTitle>{text.reviewsText}</ReviewsTitle>
        <GlobalStyle />
        {windowWidth < 1280 ? (
          <ul>
            <Slider {...(windowWidth > 767.9 ? settings2 : settings1)}>
              {renderCard(mobileReviews)}
            </Slider>
          </ul>
        ) : (
          <ReviewsContiner>{renderCard(reviews)}</ReviewsContiner>
        )}
      </ReviewsContainer>
    </ReviewsSection>
  );
};
