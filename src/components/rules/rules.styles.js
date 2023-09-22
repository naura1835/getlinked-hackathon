import styled from "styled-components";

import { Heading2 } from "../../globalStyles/text.styles";
import { SvgWrapper } from "../section/section.styles";
import { breakpointsUp } from "../../globalStyles/breakpoints";
import { blink } from "../heroSection/heroSection.styles";

export const Wrapper = styled.div`
  ${Heading2} {
    &::before {
      content: url("src/assets/grey-star.png");
      position: absolute;
      top: 20%;
      right: 12%;
      transform: scale(var(--scale-global));
      animation: ${blink} 2s infinite;
      animation-delay: 4s;
    }
  }
  ${SvgWrapper} {
    &::before {
      content: url("src/assets/star.png");
      position: absolute;
      top: 205%;
      left: 20%;
      transform: scale(var(--scale-global));
      animation: ${blink} 2s infinite;
      animation-delay: 2s;
    }
    &::after {
      content: url("src/assets/star.png");
      position: absolute;
      top: 40%;
      left: 10%;
      transform: scale(var(--scale-global));
      animation: ${blink} 2s infinite;
      animation-delay: 2s;
    }
  }

  @media ${breakpointsUp["tablet-portrait-up"]} {
    ${Heading2} {
      &::before {
        top: -49%;
        left: 30%;
        right: 0;
      }
    }
  }

  @media ${breakpointsUp["tablet-landscape-up"]} {
    ${SvgWrapper} {
      &::before {
        content: url("src/assets/Ellipse.png");
        position: absolute;
        top: 5%;
        left: 52%;
        bottom: 0;
        width: 8.375rem;
        height: 8.375rem;
        z-index: 1;
        transform: scale(0.6);
        animation: none;
      }

      svg {
        z-index: 2;
      }
    }
  }

  @media ${breakpointsUp["desktop-up"]} {
    ${SvgWrapper} {
      &::before {
        transform: scale(0.8);
        left: 55%;
        top: 10%;
      }
    }
  }
`;
