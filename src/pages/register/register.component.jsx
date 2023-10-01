import { useState } from "react";

import { CategoriesContainer } from "../../components/categoriesContainer";

import Header from "../../components/header/header.component";
import Modal from "../../components/modal/modal.component";
import ModalRegisterBody from "../../components/modalRegisterBody/modalRegisterBody.component";
import { CustomSubmitButton } from "../../components/customButton/customButton.components";

import useInput from "../../utils/useInput.hooks";

import ManSitting from "../../assets/svgs/man-sitting.svg?react";
import PeopleWalking from "../../assets/svgs/people-walking.svg?react";

import { ContactForm } from "../contact/contact.styles";
import {
  CaptionText,
  CategoryGroupSize,
  RegisterForm,
  RegisterHeader,
  SVGWrapper,
  SubTitle,
  Wrapper,
} from "./register.styles";
import {
  Heading2,
  Heading3,
  HighLightText,
} from "../../globalStyles/text.styles";
import {
  CustomCheckBox,
  CustomInput,
  CustomSelect,
} from "../../components/customInputs/customInputs.component";
import { submitToApi } from "../../utils/api";

const Register = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { formValue, handleChange } = useInput({
    teamName: "",
    phoneNo: "",
    email: "",
    projectTopic: "",
    category: 1,
    groupSize: "",
    agreement: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    let raw = JSON.stringify({
      email: formValue.email,
      phone_number: formValue.phoneNo,
      team_name: formValue.teamName,
      group_size: Number(formValue.groupSize),
      project_topic: formValue.projectTopic,
      category: Number(formValue.category),
      privacy_policy_accepted: formValue.agreement,
    });

    try {
      const registerResponse = await submitToApi(
        raw,
        "https://backend.getlinked.ai/hackathon/registration"
      );
      console.log(registerResponse);

      setIsOpen(true);
    } catch (err) {
      console.log("Error", err);
    }
  };

  return (
    <>
      {window.innerWidth < 900 ? (
        <RegisterHeader>Register</RegisterHeader>
      ) : (
        <Header />
      )}
      {isOpen && (
        <Modal setIsOpen={setIsOpen}>
          <ModalRegisterBody setIsOpen={setIsOpen} />
        </Modal>
      )}
      <Wrapper>
        <SVGWrapper>
          <ManSitting />
        </SVGWrapper>
        <ContactForm style={{ padding: 0 }}>
          <RegisterForm onSubmit={handleSubmit}>
            <Heading2>
              <HighLightText>Register</HighLightText>
            </Heading2>
            <SubTitle>
              Be part of this movement!
              {window.innerWidth >= 900 && <PeopleWalking />}
            </SubTitle>
            <Heading3>CREATE YOUR ACCOUNT</Heading3>
            <CustomInput
              type="text"
              label="team-name"
              name="teamName"
              value={formValue.teamName}
              labelText="Team's Name"
              placeholder="Enter the name of your group"
              handleChange={handleChange}
            />
            <CustomInput
              type="text"
              label="phone-no"
              name="phoneNo"
              value={formValue.phoneNo}
              labelText="Phone"
              placeholder="Enter your phone number"
              handleChange={handleChange}
            />
            <CustomInput
              type="email"
              label="email"
              name="email"
              value={formValue.email}
              labelText="Email"
              placeholder="Enter your email address"
              handleChange={handleChange}
            />
            <CustomInput
              type="text"
              label="project-topic"
              name="projectTopic"
              value={formValue.projectTopic}
              labelText="Project Topic"
              placeholder="What is your group project topic"
              handleChange={handleChange}
            />
            <CategoryGroupSize>
              <CategoriesContainer>
                <CustomSelect
                  label="category"
                  name="category"
                  labelText="Category"
                  value={formValue.category}
                  placeholder="Select your category"
                  handleChange={handleChange}
                />
              </CategoriesContainer>
              <CustomSelect
                label="group-size"
                name="groupSize"
                value={formValue.groupSize}
                labelText="Group Size"
                placeholder="Select"
                optionsArray={[{ name: "select" }, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
                handleChange={handleChange}
              />
            </CategoryGroupSize>
            <CaptionText>
              Please review your registration details before submitting
            </CaptionText>
            <CustomCheckBox
              className="checkbox"
              name="agreement"
              value={formValue.agreement}
              labelText="I agreed with the event terms and conditions and privacy policy"
              handleChange={handleChange}
            />
            <CustomSubmitButton text="Register" type="submit" />
          </RegisterForm>
        </ContactForm>
      </Wrapper>
    </>
  );
};

export default Register;
