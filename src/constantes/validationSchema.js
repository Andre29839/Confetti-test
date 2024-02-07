import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string()
    .matches(/^[a-zA-Z\s]*$/, "Nieprawidłowe Іmię")
    .required("Pole obowiązkowe"),
  email: Yup.string()
    .email("Nieprawidłowy email")
    .matches(/^\S*$/, "Email nie może zawierać spacji")
    .required("Pole obowiązkowe"),
  message: Yup.string().max(
    250,
    "Wiadomość nie może zawierać więcej niż 250 znaków"
  ),
});
