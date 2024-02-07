import Image from "next/image";

import svgIcon from "@/assets/icon.svg";

import {
  ReviewsCard,
  ReviewsCardContainerName,
  ReviewsName,
  ReviewsText,
} from "./Reviews.styled";

export const renderCard = (reviews) =>
  reviews.map(({ text, name }, index) => (
    <ReviewsCard key={index}>
      <ReviewsText>{text}</ReviewsText>
      <ReviewsCardContainerName>
        <Image
          src={svgIcon}
          alt="Phone icon"
          width={24}
          height={24}
          aria-label="phone icon"
        />
        <ReviewsName>{name}</ReviewsName>
      </ReviewsCardContainerName>
    </ReviewsCard>
  ));
