import { styled } from "styled-components";

import { Heading2 } from "../../globalStyles/text.styles";
import { DescriptionWrapper, SvgWrapper } from "../section/section.styles";
import { breakpointsUp } from "../../globalStyles/breakpoints";

export const Wrapper = styled.div`
  ${Heading2} {
    margin-top: 3.75rem;

    &::before {
      content: url("src/assets/purple-star.png");
      position: absolute;
      top: -75%;
      left: 12%;
      transform: scale(var(--scale-global));
    }
  }
  ${SvgWrapper} {
    order: 2;
    margin-top: 5.38rem;

    & + div {
      display: flex;
      flex-direction: column;
      align-items: center;

      & > h2 {
        max-width: 26.6875rem;
        width: 100%;
      }
    }

    &::before {
      content: url("src/assets/star.png");
      position: absolute;
      bottom: -5%;
      right: 23%;
      transform: scale(var(--scale-global));
    }
  }

  @media ${breakpointsUp["tablet-portrait-up"]} {
    ${Heading2} {
      &::before {
        left: 0;
      }
    }

    ${SvgWrapper} {
      align-self: flex-end;
    }
  }

  @media ${breakpointsUp["tablet-landscape-up"]} {
    ${Heading2} {
      &::before {
        left: -10%;
      }
    }
    ${DescriptionWrapper} {
      padding-left: 3rem;
    }
  }

  @media ${breakpointsUp["desktop-up"]} {
    ${Heading2} {
      &::before {
        left: -5%;
      }
    }
  }
`;

export const InnerWrapper = styled.div`
  max-width: 26.6875rem !important;
  width: 100%;
`;

export const FaqWrapper = styled.ol`
  list-style-type: none;
  margin-top: 2.86rem;
`;
export const FaqItem = styled.li`
  width: 100%;
  min-height: 48px;
  height: auto;
  padding: 1rem 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: inset 0rem -0.0625rem ${({ theme }) => theme.colors.phlox};
`;
