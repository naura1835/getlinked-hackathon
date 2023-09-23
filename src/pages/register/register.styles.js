import styled from "styled-components";
import {
  BodyIntroText,
  Heading2,
  Heading3,
  SmallMediumText,
} from "../../globalStyles/text.styles";
import { SvgWrapper } from "../../components/section/section.styles";
import { ContactWrapper } from "../contact/contact.styles";
import { breakpointsUp } from "../../globalStyles/breakpoints";
import { SubmitButton } from "../../components/customButton/customButton.styles";
import {
  CheckboxWrapper,
  CustomInputBar,
} from "../../components/customInputs/customInputs.component";
import { blink } from "../../components/heroSection/heroSection.styles";

export const RegisterHeader = styled(Heading2)`
  color: #d434fe;
  font-size: 0.9375rem;
  font-weight: 700;
  padding: 2.94rem 4.19rem 1.31rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media ${breakpointsUp["tablet-landscape-up"]} {
    flex-direction: row;
    margin-top: 5rem;
    padding: 2rem;
  }
`;

export const SVGWrapper = styled(SvgWrapper)`
  position: relative;

  &::before {
    content: url("./assets/pink-star.png");
    position: absolute;
    bottom: 50%;
    right: 10%;
    transform: scale(var(--scale-lg-global));
    animation: ${blink} 2s infinite;
    animation-delay: 2s;
  }

  &::after {
    content: url("./assets/grey-star.png");
    position: absolute;
    bottom: -70%;
    left: 5%;
    transform: scale(var(--scale-lg-global));
    animation: ${blink} 2s infinite;
    animation-delay: 2s;
  }

  @media ${breakpointsUp["tablet-landscape-up"]} {
    max-width: 700px;

    &::before {
      bottom: 0;
      right: 0;
      top: 0%;
      left: -4%;
    }

    &::after {
      bottom: 20%;
      left: 15%;
    }

    > svg {
      width: 100%;
    }
  }
`;

export const SubTitle = styled.p`
  color: #fff;
  font-family: "Montserrat";
  font-size: 0.75rem;
  font-weight: 400;
`;

export const RegisterForm = styled(ContactWrapper)`
  padding: 4.19rem;
  position: relative;

  &::before {
    content: url("./assets/pink-star.png");
    position: absolute;
    bottom: 35%;
    right: 10%;
    transform: scale(var(--scale-lg-global));
    animation: ${blink} 2s infinite;
    animation-delay: 2s;
  }
  ${Heading2} {
    display: none;
  }

  @media ${breakpointsUp["tablet-landscape-up"]} {
    padding: 2rem;
    justify-items: start;
    display: grid;
    /* flex-wrap: wrap; */
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    &::before {
      right: 0;
      left: -30%;
    }

    ${Heading2} {
      grid-column: 1/3;
      display: block;
      position: relative;

      &::before {
        content: url("./assets/grey-star.png");
        position: absolute;
        top: -60%;
        right: -170%;
        transform: scale(var(--scale-lg-global));
        animation: ${blink} 2s infinite;
        animation-delay: 2s;
      }
    }

    ${Heading3}, ${SubTitle} {
      text-align: start;
      margin: 0;
      grid-column: 1/3;
    }
    ${SubmitButton} {
      grid-column: 1/3;
      width: 100%;
      max-width: unset;
    }
    ${CheckboxWrapper} {
      grid-column: 1/3;
      position: relative;

      > input {
        align-self: center;
      }
    }
    ${CustomInputBar} {
      width: auto;
    }

    ${SubmitButton} {
      &::after {
        content: url("./assets/star.png");
        position: absolute;
        bottom: -10%;
        right: 10%;
        transform: scale(var(--scale-sm-global));
        animation: ${blink} 2s infinite;
        animation-delay: 2s;
      }
    }
  }
`;
export const CategoryGroupSize = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 0.5rem;

  @media ${breakpointsUp["tablet-landscape-up"]} {
    grid-column: 1/3;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    width: 100%;
  }
`;

export const CaptionText = styled.p`
  color: #ff26b9;
  font-family: "Montserrat";
  font-size: 0.5625rem;
  font-style: italic;
  font-weight: 400;

  @media ${breakpointsUp["tablet-landscape-up"]} {
    font-size: 0.75rem;
    grid-column: 1/3;
  }
`;
export const OverlayWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(21, 14, 40, 0.93);
  display: grid;
  place-items: center;
  justify-content: center;
  z-index: 2;
`;

export const SuccessWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  border-radius: 0.3125rem;
  border: 1px solid #d434fe;
  background: rgba(255, 255, 255, 0.01);
  padding: 1rem;
  position: relative;

  &::after {
    content: url("./assets/pink-star.png");
    position: absolute;
    top: -5%;
    right: 0%;
    transform: scale(var(--scale-global));
    animation: ${blink} 2s infinite;
    animation-delay: 2s;
  }
  &::before {
    content: url("./assets/pink-star.png");
    position: absolute;
    bottom: 4%;
    right: 5%;
    transform: scale(var(--scale-global));
    animation: ${blink} 2s infinite;
    animation-delay: 2s;
  }

  ${BodyIntroText} {
    position: relative;

    &::after {
      content: url("./assets/grey-star.png");
      position: absolute;
      top: -170%;
      left: 0%;
      transform: scale(var(--scale-global));
      animation: ${blink} 2s infinite;
      animation-delay: 2s;
    }
  }

  ${BodyIntroText}, ${SmallMediumText} {
    text-align: center;

    img {
      vertical-align: text-top;
    }
  }

  ${SubmitButton} {
    margin-inline: auto;
  }

  @media ${breakpointsUp["tablet-landscape-up"]} {
    height: 30rem;

    img {
      height: 15rem;
      width: 15rem;
      object-fit: cover;
    }
    &::before {
      bottom: 0%;
    }
  }
`;
