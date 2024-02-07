import { useEffect, useState } from "react";
import { Formik } from "formik";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

import { ContactFormField, ContactFormTextAreas } from "./ContactFormField";
import { validationSchema } from "@/constantes/validationSchema";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import text from "@/text/text.json";
import { handleChange } from "@/constantes/localStorage";

import svgBallons1 from "../../assets/ballons1.png";
import svgBallons2 from "../../assets/ballons2.png";

import {
  ContactFormButton,
  ContactFormContainer,
  ContactFormError,
  ContactFormLabel,
  StyledImage1,
  StyledImage2,
} from "./ContactForm.styled";

export const ContactForm = () => {
  const windowWidth = useWindowWidth();

  const init = {
    name: "",
    email: "",
    message: "",
  };

  const [initialValues, setInitialValues] = useState(init);

  const handleSubmit = (_, { resetForm }) => {
    toast.success("Wiadomość wysłана");
    if (typeof window !== "undefined") {
      localStorage.removeItem("formValues");
    }
    resetForm();
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedValues = localStorage.getItem("formValues");
      if (savedValues) {
        try {
          setInitialValues(JSON.parse(savedValues));
        } catch (e) {
          console.error("Error parsing formValues from localStorage:", e);
        }
      }
    }
  }, []);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnChange={true}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ isValid, setFieldValue }) => (
        <ContactFormContainer>
          <ContactFormLabel htmlFor="name">
            {text.contactFormText.name}
          </ContactFormLabel>
          <ContactFormField
            name="name"
            type="text"
            placeholder="Imię"
            onChange={(e) =>
              handleChange(e, {
                onChange: (e) => setFieldValue("name", e.target.value),
              })
            }
          />
          <ContactFormError name="name" component="div" />
          <ContactFormLabel htmlFor="email">
            {text.contactFormText.email}
          </ContactFormLabel>
          <ContactFormField
            name="email"
            type="email"
            placeholder="mail@gmail.com"
            onChange={(e) =>
              handleChange(e, {
                onChange: (e) => setFieldValue("email", e.target.value),
              })
            }
          />
          <ContactFormError name="email" component="div" />
          <ContactFormLabel htmlFor="message">
            {text.contactFormText.text}
          </ContactFormLabel>
          <ContactFormTextAreas
            name="message"
            as="textarea"
            placeholder="Twoja wiadomość..."
            onChange={(e) =>
              handleChange(e, {
                onChange: (e) => setFieldValue("message", e.target.value),
              })
            }
          />
          <ContactFormError name="message" component="div" />
          <ContactFormButton
            type="submit"
            aria-label="Submit buttom"
            disabled={!isValid}
          >
            {text.contactFormText.send}
          </ContactFormButton>
          {windowWidth >= 768 && (
            <>
              <StyledImage1 src={svgBallons1} alt="Ballons 1" priority />
              <StyledImage2 src={svgBallons2} alt="Ballons 2" priority />
            </>
          )}
        </ContactFormContainer>
      )}
    </Formik>
  );
};

ContactForm.propTypes = {
  initialValues: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    message: PropTypes.string,
  }),
  validationSchema: PropTypes.object,
  validateOnChange: PropTypes.bool,
  onSubmit: PropTypes.func,
};
