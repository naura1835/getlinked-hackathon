import styled from "styled-components";

import { blink } from "../heroSection/heroSection.styles";

import { breakpointsUp } from "../../globalStyles/breakpoints";

export const ModalWrapper = styled.div`
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

export const ModalBody = styled.div`
  width: 70%;
  border-radius: 0.3125rem;
  border: 1px solid #d434fe;
  background: rgba(255, 255, 255, 0.01);
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

  @media ${breakpointsUp["tablet-landscape-up"]} {
    height: 30rem;

    &::before {
      bottom: 0%;
    }
  }
`;
