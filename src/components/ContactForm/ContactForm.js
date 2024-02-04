import { Formik, useField } from "formik";
import * as Yup from "yup";

import svgBallons1 from "../../assets/ballons1.png";
import svgBallons2 from "../../assets/ballons2.png";

import {
  ContactFormButton,
  ContactFormContainer,
  ContactFormError,
  ContactFormFieldStyled,
  ContactFormLabel,
  ContactFormTextArea,
  StyledImage1,
  StyledImage2,
} from "./ContactForm.styled";
import { useEffect, useState } from "react";

export const ContactForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(/^[a-zA-Z\s]*$/, "Nieprawidłowe Іmię")
      .required("Pole obowiązkowe"),
    email: Yup.string()
      .email("Nieprawidłowy email")
      .required("Pole obowiązkowe"),
    message: Yup.string().max(
      250,
      "Wiadomość nie może zawierać więcej niż 250 znaków"
    ),
  });

  const ContactFormField = (props) => {
    const [field, meta] = useField(props);
    return (
      <ContactFormFieldStyled
        {...field}
        {...props}
        hasError={meta.touched && !!meta.error}
      />
    );
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
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      validationSchema={validationSchema}
      validateOnChange={true}
      onSubmit={(values, { resetForm }) => {
        alert(JSON.stringify(values, null, 2));
        resetForm();
      }}
    >
      {({ isValid }) => (
        <ContactFormContainer>
          <ContactFormLabel htmlFor="name">Imię*</ContactFormLabel>
          <ContactFormField name="name" type="text" placeholder="Imię" />
          <ContactFormError name="name" component="div" />
          <ContactFormLabel htmlFor="email">E-mail*</ContactFormLabel>
          <ContactFormField
            name="email"
            type="email"
            placeholder="mail@gmail.com"
          />
          <ContactFormError name="email" component="div" />
          <ContactFormLabel htmlFor="message">Wiadomość</ContactFormLabel>
          <ContactFormTextArea
            name="message"
            as="textarea"
            placeholder="Twoja wiadomość..."
          />
          <ContactFormError name="message" component="div" />
          <ContactFormButton type="submit" disabled={!isValid}>
            Wyślij
          </ContactFormButton>
          {windowWidth >= 768 && (
            <>
              <StyledImage1 src={svgBallons1} alt="Ballons 1" />
              <StyledImage2 src={svgBallons2} alt="Ballons 2" />
            </>
          )}
        </ContactFormContainer>
      )}
    </Formik>
  );
};
