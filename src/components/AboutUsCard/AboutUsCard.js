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
