import styled from "styled-components";
import { Heading2, Heading3 } from "../../globalStyles/text.styles";
import { SvgWrapper } from "../../components/section/section.styles";
import { ContactWrapper } from "../contact/contact.styles";
import { breakpointsUp } from "../../globalStyles/breakpoints";
import { SubmitButton } from "../../components/customButton/customButton.styles";
import { CheckboxWrapper } from "../../components/customInputs/customInputs.component";

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
  @media ${breakpointsUp["tablet-landscape-up"]} {
    max-width: 700px;

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

  ${Heading2} {
    display: none;
  }

  @media ${breakpointsUp["tablet-landscape-up"]} {
    padding: 2rem;
    justify-items: start;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    ${Heading2} {
      grid-column: 1/3;
      display: block;
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

      > input {
        align-self: center;
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
