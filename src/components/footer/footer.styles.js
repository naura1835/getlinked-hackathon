import { styled } from "styled-components";
import {
  Heading4,
  HighLightText,
  MediumText,
} from "../../globalStyles/text.styles";
import { breakpointsUp } from "../../globalStyles/breakpoints";

export const Wrapper = styled.footer`
  background: #100b20;
  font-size: 0.75rem;
  font-weight: 400;

  @media ${breakpointsUp["tablet-landscape-up"]} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    padding: 5.19rem 5.4rem 3.37rem;
  }
`;

export const FooterSection = styled.div`
  margin: 0 5.4rem;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &:last-child {
    display: flex;
    justify-content: center;
  }

  ${MediumText} {
    text-align: left;
  }
  ${Heading4} {
    color: ${({ theme }) => theme.colors.phlox};
  }

  @media ${breakpointsUp["tablet-landscape-up"]} {
    margin: 0;

    &:last-child {
      grid-template-rows: 2/3;
      grid-column: 1/4;
      justify-self: center;
    }
  }
`;
export const FooterLogo = styled.h4`
  font-family: "Clash Display";
  font-size: 1.25rem;
  font-weight: 700;
  line-height: normal;
`;

export const Terms = styled.p`
  font-family: "Montserrat";
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 172.4%;

  & > span {
    display: inline-block;
    margin: 0 1rem;
    width: 0.125rem;
    height: 1.0625rem;
    background: ${({ theme }) => theme.colors.phlox};
  }
`;

export const FooterList = styled.ul`
  list-style-type: none;
`;

export const FooterListItem = styled.li`
  margin-bottom: 0.75rem;
  font-family: "Montserrat";

  ${HighLightText} {
    margin-right: 1rem;
  }
  & > svg {
    margin-right: 1rem;
    vertical-align: middle;
  }
  @media ${breakpointsUp["tablet-landscape-up"]} {
    margin-bottom: 1rem;
  }
`;
