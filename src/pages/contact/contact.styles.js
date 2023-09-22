import styled from "styled-components";

import { breakpointsUp } from "../../globalStyles/breakpoints";

import { CustomInputBar } from "../../components/customInputs/customInputs.component";
import { SubmitButton } from "../../components/customButton/customButton.styles";

import { Heading3, SmallMediumText } from "../../globalStyles/text.styles";

export const BackArrowWrapper = styled.div`
  padding: 2.94rem 3.19rem 1.31rem;
`;

export const Wrapper = styled.section`
  padding: 2.5rem 3.06rem;

  ${Heading3} {
    color: ${(props) => props.theme.colors.phlox};
    text-align: start;
  }

  ${SmallMediumText} {
    margin-top: 1.5rem;
    text-align: start;
  }

  @media ${breakpointsUp["tablet-landscape-up"]} {
    display: flex;
    flex-direction: row-reverse;

    ${Heading3} {
      font-size: 1.25rem;
    }

    ${SmallMediumText} {
      display: none;
    }
  }
`;

export const ContactForm = styled.div`
  @media ${breakpointsUp["tablet-landscape-up"]} {
    display: grid;
    place-items: center;
    grid-template-columns: 1fr;
    max-width: 35.5625rem;
    width: 100%;
    border-radius: 0.75rem;
    background: rgba(255, 255, 255, 0.03);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 2rem 0;

    ${Heading3} {
      justify-self: start;
      margin-left: 4rem;
    }
  }

  @media ${breakpointsUp["tablet-landscape-up"]} {
    padding: 4rem 0;
  }
`;

export const ContactWrapper = styled.form`
  margin-top: 1.88rem;
  display: flex;
  flex-direction: column;
  gap: 1.56rem;

  ${CustomInputBar} {
    > input {
      ::placeholder {
        color: #fff !important;
      }
    }
  }

  ${SubmitButton} {
    margin-top: 1.94rem;
    align-self: center;
  }
`;

export const ContactInfo = styled.section`
  margin-top: 2.56rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${breakpointsUp["tablet-landscape-up"]} {
    padding: 0;
    align-items: flex-start;
    max-width: 300px;
  }
  @media ${breakpointsUp["desktop-up"]} {
    max-width: 400px;
  }
`;

export const ContactInfoSection = styled.div`
  &:not(:last-child) {
    display: none;
  }

  @media ${breakpointsUp["tablet-landscape-up"]} {
    &:not(:last-child) {
      display: flex;
      flex-direction: column;
      gap: 1.06rem;
    }

    &:last-child {
      margin-top: 2.19rem;
    }
  }
`;

export const Socials = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-top: 0.48rem;
`;
