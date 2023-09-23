import styled from "styled-components";

import { breakpointsUp } from "../../globalStyles/breakpoints";

import { CustomInputBar } from "../../components/customInputs/customInputs.component";
import { SubmitButton } from "../../components/customButton/customButton.styles";

import { Heading3, SmallMediumText } from "../../globalStyles/text.styles";
import { blink } from "../../components/heroSection/heroSection.styles";

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
  ${Heading3} {
    position: relative;

    &::before {
      content: url("src/assets/grey-star.png");
      position: absolute;
      top: 50%;
      right: 20%;
      transform: scale(var(--scale-global));
      animation: ${blink} 2s infinite;
      animation-delay: 2s;
    }

    &::after {
      content: url("src/assets/pink-star.png");
      position: absolute;
      top: -100%;
      left: 40%;
      transform: scale(var(--scale-global));
      animation: ${blink} 2s infinite;
      animation-delay: 2s;
    }
  }
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

      &::before {
        top: -180%;
        right: -50%;
      }

      &::after {
        top: -150%;
        left: -120%;
      }
    }
  }

  @media ${breakpointsUp["tablet-landscape-up"]} {
    padding: 4rem 0;
  }

  @media ${breakpointsUp["desktop-up"]} {
    ${Heading3} {
      &::after {
        top: -150%;
        left: -220%;
      }
    }
  }
`;

export const ContactWrapper = styled.form`
  margin-top: 1.88rem;
  display: flex;
  flex-direction: column;
  gap: 1.56rem;
  position: relative;

  &::before {
    content: url("src/assets/pink-star.png");
    position: absolute;
    bottom: 0%;
    left: -5%;
    transform: scale(var(--scale-global));
    animation: ${blink} 2s infinite;
    animation-delay: 2s;
  }

  &::after {
    content: url("src/assets/star.png");
    position: absolute;
    bottom: 25%;
    right: -10%;
    transform: scale(var(--scale-global));
    animation: ${blink} 2s infinite;
    animation-delay: 2s;
  }

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

  @media ${breakpointsUp["tablet-landscape-up"]} {
    width: 100%;
    padding: 0 4rem;

    &::before {
      left: 0%;
    }

    &::after {
      right: -5%;
    }

    ${CustomInputBar} {
      width: 27.3125rem;
      height: 2.9375rem;
    }
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
