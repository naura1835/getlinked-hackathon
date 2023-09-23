import styled from "styled-components";

import { Heading2 } from "../../globalStyles/text.styles";
import { SvgWrapper } from "../section/section.styles";
import { breakpointsUp } from "../../globalStyles/breakpoints";
import { blink } from "../heroSection/heroSection.styles";

export const Wrapper = styled.div`
  ${Heading2} {
    &::before {
      content: url("./assets/purple-star.png");
      position: absolute;
      top: 20%;
      right: 12%;
      transform: scale(var(--scale-global));
      animation: ${blink} 2s infinite;
      animation-delay: 1s;
    }

    @media ${breakpointsUp["tablet-landscape-up"]} {
      &::before {
        top: 25%;
        right: -5%;
      }
    }

    @media ${breakpointsUp["desktop-up"]} {
      &::before {
        right: 12%;
      }
    }
  }

  ${SvgWrapper} {
    margin-top: 1.74rem;
    margin-bottom: 3.6rem;

    &::before {
      content: url("./assets/arrow.png");
      position: absolute;
      bottom: -13%;
      right: 53%;
      width: 1.216rem;
      height: 1.42613rem;
      transform: rotate(10.92deg) scale(0.5);
    }

    &::after {
      content: url("./assets/purple-star.png");
      position: absolute;
      top: 40%;
      left: 5%;
      transform: scale(var(--scale-global));
      animation: ${blink} 2s infinite;
      animation-delay: 3s;
    }

    @media ${breakpointsUp["tablet-landscape-up"]} {
      &::before {
        bottom: 5%;
        right: 10%;
        transform: rotate(10.92deg) scale(1);
      }
    }
  }
`;
