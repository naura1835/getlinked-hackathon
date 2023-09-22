import styled from "styled-components";
import { breakpointsUp } from "./breakpoints";

export const Heading1 = styled.h1`
  font-size: 2rem;
  font-weight: 700;

  @media ${breakpointsUp["tablet-landscape-up"]} {
    font-size: 3rem;
  }

  @media ${breakpointsUp["desktop-up"]} {
    font-size: 4rem;
  }
`;

export const Heading2 = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.6625rem;

  @media ${breakpointsUp["tablet-landscape-up"]} {
    font-size: 2rem;
    line-height: 3rem;
  }
`;

export const Heading3 = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;

  @media ${breakpointsUp["tablet-landscape-up"]} {
    font-size: 1.5rem;
  }
`;
export const Heading4 = styled.h4`
  font-family: "Montserrat";
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 172.4%;

  @media ${breakpointsUp["tablet-landscape-up"]} {
    font-size: 0.875rem;
  }
`;

export const Logo = styled.h3`
  font-size: 0.9375rem;
  font-weight: 700;
  line-height: normal;

  & > span {
    color: ${(props) => props.theme.colors.phlox};
  }

  @media ${breakpointsUp["tablet-landscape-up"]} {
    font-size: 2.25rem;
  }
`;

export const BodyIntroText = styled.h4`
  font-size: 1rem;
  font-style: italic;
  font-weight: 700;
  line-height: normal;

  @media ${breakpointsUp["tablet-landscape-up"]} {
    font-size: 2rem;
  }

  @media ${breakpointsUp["desktop-up"]} {
    font-size: 2.25rem;
  }
`;

export const MediumText = styled.p`
  font-size: 0.8125rem;
  font-weight: 400;
  line-height: 1.71875rem;
  text-align: center;

  @media ${breakpointsUp["tablet-portrait-up"]} {
    font-size: 0.875rem;
    text-align: left;
  }
`;

export const SmallMediumText = styled.p`
  font-size: 0.75rem;
  font-weight: 400;
  text-align: center;

  @media ${breakpointsUp["tablet-landscape-up"]} {
    font-size: 0.875rem;
    text-align: start;
  }
`;

export const CaptionText = styled.p`
  font-size: 0.75rem;
  font-weight: 400;
  text-align: center;

  @media ${breakpointsUp["tablet-portrait-up"]} {
    font-size: 1rem;
    text-align: start;
  }
`;

export const HighLightText = styled.span`
  color: ${(props) => props.theme.colors.phlox};
`;
