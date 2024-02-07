import PropTypes from "prop-types";

import {
  AboutCard,
  AboutSubText,
  AboutSubTitle,
} from "@/components/AboutUs/AboutUs.styled";

export const AboutUsCard = ({ title, text, color, index, total }) => (
  <AboutCard key={index} color={color}>
    <AboutSubTitle className={index === total - 1 ? "last" : ""}>
      {title}
    </AboutSubTitle>
    <AboutSubText
      className={index === 0 ? "first" : index === total - 1 ? "last" : ""}
    >
      {text}
    </AboutSubText>
  </AboutCard>
);

AboutUsCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};
