import { useField } from "formik";

import {
  ContactFormFieldStyled,
  ContactFormTextArea,
} from "./ContactForm.styled";

export const ContactFormField = (props) => {
  const [field, meta] = useField(props);

  return (
    <ContactFormFieldStyled
      {...field}
      {...props}
      $hasError={meta.touched && !!meta.error}
    />
  );
};

export const ContactFormTextAreas = (props) => {
  const [field] = useField(props);

  return <ContactFormTextArea {...field} {...props} />;
};
