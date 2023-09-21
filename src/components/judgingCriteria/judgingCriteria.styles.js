import { styled } from "styled-components";

import { breakpointsUp } from "../../globalStyles/breakpoints";
import { Heading2, HighLightText } from "../../globalStyles/text.styles";
// import { SectionWrapper } from "../../globalStyles/global.styles";
import { SvgWrapper } from "../section/section.styles";

// export const Wrapper = styled(SectionWrapper)`
export const Wrapper = styled.div`
  ${Heading2} {
    margin-bottom: 1rem;

    &::before {
      content: url("src/assets/grey-star.png");
      position: absolute;
      top: -250%;
      right: 40%;
      transform: scale(var(--scale-global));
    }

    @media ${breakpointsUp["tablet-portrait-up"]} {
      &::before {
        top: 240%;
        right: 0;
        left: -45%;
      }
    }

    @media ${breakpointsUp["desktop-up"]} {
      &::before {
        left: -65%;
      }
    }
  }

  ${SvgWrapper} {
    margin-top: 4.62rem;

    &::after {
      content: url("src/assets/purple-star.png");
      position: absolute;
      top: -20%;
      left: 40%;
      transform: scale(var(--scale-global));
    }

    @media ${breakpointsUp["tablet-portrait-up"]} {
      align-self: flex-start;

      &::after {
        left: 30%;
      }

      &::before {
        content: url("src/assets/Ellipse.png");
        position: absolute;
        top: -20%;
        left: 12%;
        bottom: 0;
        width: 8.375rem;
        height: 8.375rem;
        z-index: 1;
        transform: scale(0.4);
      }

      svg {
        z-index: 2;
      }
    }

    @media ${breakpointsUp["desktop-up"]} {
      margin-top: 5rem;

      &::after {
        top: -30%;
      }

      &::before {
        top: -8%;
        left: 18%;
        transform: scale(0.7);
      }
    }
  }
`;

export const JudgingCriteriaWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  &::after {
    content: url("src/assets/star.png");
    position: absolute;
    bottom: 0;
    right: 10%;
    transform: scale(var(--scale-global));
  }

  @media ${breakpointsUp["tablet-landscape-up"]} {
    align-items: flex-start;
    &::after {
      right: 120%;
    }
  }
`;
export const ParagraphList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 1.25rem; //1.75rem
  margin-bottom: 2rem;
  width: 80%;

  @media ${breakpointsUp["tablet-portrait-up"]} {
    width: 100%;
  }
`;

export const ParagraphListItem = styled.li`
  font-size: 0.8125rem;
  font-weight: 400;
  line-height: 173.5%;
  text-align: center;

  ${HighLightText} {
    display: inline !important;
    color: ${({ theme }) => theme.colors.pink};
  }

  @media ${breakpointsUp["tablet-portrait-up"]} {
    text-align: left;
  }
`;
