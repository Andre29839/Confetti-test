import React from "react";

import { ContactForm } from "../ContactForm/ContactForm";
import { EmailIcon, PhoneIcon } from "@/constantes/icons";
import text from "@/text/text.json";

import {
  ContactContainer,
  ContactContainerData,
  ContactContainerInformation,
  ContactContainerInformationMain,
  ContactSection,
  ContactSectionMain,
  ContactSubTitle,
  ContactTitle,
} from "./Contacts.styles";

export const Contacts = () => {
  return (
    <ContactSectionMain id="contacts">
      <ContactContainer>
        <ContactSection>
          <ContactTitle>{text.contactsText.title}</ContactTitle>
          <ContactSubTitle>
            {text.contactsText.subtitle1} <span>{text.contactsText.span} </span>
            {text.contactsText.subtitle2}
          </ContactSubTitle>
          <ContactContainerInformationMain>
            <ContactContainerInformation>
              <PhoneIcon />
              <ContactContainerData
                aria-label="phone number"
                href="tel:+48793351407"
              >
                {text.contactsText.phoneNumber}
              </ContactContainerData>
            </ContactContainerInformation>
            <ContactContainerInformation>
              <EmailIcon />
              <ContactContainerData
                aria-label="Email"
                href="mailto:confettibalony@gmail.com"
              >
                {text.contactsText.email}
              </ContactContainerData>
            </ContactContainerInformation>
          </ContactContainerInformationMain>
        </ContactSection>
        <ContactForm />
      </ContactContainer>
    </ContactSectionMain>
  );
};
