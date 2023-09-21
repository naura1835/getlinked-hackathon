import styled, { createGlobalStyle } from "styled-components";
import { breakpointsUp } from "./breakpoints";
import { Heading2, HighLightText, MediumText } from "./text.styles";

export const GlobalStyle = createGlobalStyle`

  body{
    background-color: ${(props) => props.theme.colors.darkPurple};
    color: ${(props) => props.theme.colors.white};
    font-family: ${(props) => props.theme.fonts.default};
  }

  h1, h2, h3{
    font-family: ${(props) => props.theme.fonts.heading};
  }

  section{
    padding: 1rem;
    margin: 0 auto;

    @media ${breakpointsUp["tablet-portrait-up"]}{
      padding: 0 2rem;
    }
    @media ${breakpointsUp["tablet-landscape-up"]}{
      padding: 0 3rem;
    }

    @media ${breakpointsUp["desktop-up"]}{
      padding: 0 5rem;
    }
  }

  a {
  text-decoration: none;
}
`;

export const SectionWrapper = styled.section`
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

export const GlassWrapper = styled.div`
  border-radius: 0.75rem;
  background: rgba(255, 255, 255, 0.03);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
