import { ArrowLeft, ArrowRight } from "@/components/Reviews/Reviews.styled";

export const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const settings1 = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const settings2 = {
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  nextArrow: <ArrowRight direction="next" alt="arrow right" />,
  prevArrow: <ArrowLeft direction="prev" alt="arrow left" />,
  slidecount: 1,
};
