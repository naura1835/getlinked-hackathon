import { Link } from "react-router-dom";

import Header from "../../components/header/header.component";
import useInput from "../../utils/useInput.hooks";

import LinkedIn from "../../assets/svgs/linkedin.svg?react";
import Instagram from "../../assets/svgs/instagram.svg?react";
import Facebook from "../../assets/svgs/facebook.svg?react";
import X from "../../assets/svgs/x.svg?react";
import BackArrow from "../../assets/svgs/back-arrow.svg?react";

import {
  CustomInput,
  CustomTextarea,
} from "../../components/customInputs/customInputs.component";
import { CustomSubmitButton } from "../../components/customButton/customButton.components";

import {
  CaptionText,
  Heading2,
  Heading3,
  HighLightText,
  SmallMediumText,
} from "../../globalStyles/text.styles";
import {
  BackArrowWrapper,
  ContactForm,
  ContactInfo,
  ContactInfoSection,
  ContactWrapper,
  Socials,
  Wrapper,
} from "./contact.styles";
import { submitToApi } from "../../utils/api";

const NavigateHome = () => {
  return (
    <BackArrowWrapper>
      <Link to="/">
        <BackArrow />
      </Link>
    </BackArrowWrapper>
  );
};

const Contact = () => {
  const { formValue, handleChange, resetFormFields } = useInput({
    teamName: "",
    phoneNo: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    let raw = JSON.stringify({
      email: formValue.email,
      phone_number: formValue.phoneNo,
      first_name: formValue.teamName,
      message: formValue.message,
    });

    try {
      const contactInfo = await submitToApi(
        raw,
        "https://backend.getlinked.ai/hackathon/contact-form"
      );
      console.log(contactInfo);
      resetFormFields();
    } catch (err) {
      console.log("error", err);
    }
  };
  return (
    <>
      {window.innerWidth < 900 ? <NavigateHome /> : <Header />}

      <Wrapper>
        <ContactForm>
          <Heading3>
            Questions or need assistance?
            <br />
            Let us know about it
          </Heading3>
          <SmallMediumText>
            Email us below to any question related to our event
          </SmallMediumText>
          <ContactWrapper onSubmit={handleSubmit}>
            <CustomInput
              name="teamName"
              type="text"
              value={formValue.teamName}
              placeholder="First Name"
              handleChange={handleChange}
            />
            <CustomInput
              name="phoneNo"
              type="text"
              value={formValue.phoneNo}
              placeholder="Phone Number"
              handleChange={handleChange}
            />
            <CustomInput
              name="email"
              type="email"
              value={formValue.email}
              placeholder="Email"
              handleChange={handleChange}
            />
            <CustomTextarea
              name="message"
              value={formValue.message}
              placeholder="Message"
              handleChange={handleChange}
            />
            <CustomSubmitButton text="Submit" type="submit" />
          </ContactWrapper>
        </ContactForm>
        <ContactInfo>
          <ContactInfoSection>
            <Heading2>
              <HighLightText>Get in touch</HighLightText>
            </Heading2>
            <CaptionText>
              Contact
              <br />
              Information
            </CaptionText>
            <CaptionText>
              27,Alara Street
              <br /> Yaba 100012 Lagos State
            </CaptionText>
            <CaptionText>Call Us : 07067981819</CaptionText>
            <CaptionText>
              we are open from Monday-Friday 08:00am - 05:00pm
            </CaptionText>
          </ContactInfoSection>
          <ContactInfoSection>
            <CaptionText>
              <HighLightText>Share on</HighLightText>
            </CaptionText>
            <Socials>
              <Instagram />
              <X />
              <Facebook />
              <LinkedIn />
            </Socials>
          </ContactInfoSection>
        </ContactInfo>
      </Wrapper>
    </>
  );
};

export default Contact;
