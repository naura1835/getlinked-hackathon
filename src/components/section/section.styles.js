import { styled } from "styled-components";
import {
  Heading2,
  HighLightText,
  MediumText,
} from "../../globalStyles/text.styles";
import { breakpointsUp } from "../../globalStyles/breakpoints";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding-bottom: 4rem;
  box-shadow: ${({ theme }) => theme.boxShadow};

  ${Heading2} {
    text-align: center;
    position: relative;
    margin-top: 1rem;
  }
  ${HighLightText} {
    display: block;
  }

  ${MediumText} {
    width: 80%;
    margin-inline: auto;
  }

  @media ${breakpointsUp["tablet-portrait-up"]} {
    flex-direction: ${(props) => props.direction ?? "row"};
    align-items: center;
    margin-top: 2rem;

    ${Heading2} {
      text-align: left;
      margin-top: 0;
      margin-bottom: 1rem;
    }

    ${MediumText} {
      width: 100%;
      margin-inline: unset;
    }
  }

  @media ${breakpointsUp["desktop-up"]} {
    margin-top: 3.8rem;
    gap: 5rem;
  }
`;

export const SvgWrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;

  svg {
    width: 80%;
    height: auto;
    margin-inline: auto;
  }
`;

export const DescriptionWrapper = styled.div`
  max-width: 33.43rem;
  width: 100%;
`;
