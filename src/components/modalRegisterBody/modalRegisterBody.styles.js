import styled from "styled-components";

import { SubmitButton } from "../customButton/customButton.styles";
import { blink } from "../heroSection/heroSection.styles";
import { BodyIntroText, SmallMediumText } from "../../globalStyles/text.styles";

import { breakpointsUp } from "../../globalStyles/breakpoints";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;

  ${BodyIntroText} {
    position: relative;

    &::after {
      content: url("./assets/grey-star.png");
      position: absolute;
      top: -170%;
      left: 0%;
      transform: scale(var(--scale-global));
      animation: ${blink} 2s infinite;
      animation-delay: 2s;
    }
  }

  ${BodyIntroText}, ${SmallMediumText} {
    text-align: center;

    img {
      vertical-align: text-top;
    }
  }

  ${SubmitButton} {
    margin-inline: auto;
  }

  @media ${breakpointsUp["tablet-landscape-up"]} {
    img {
      height: 15rem;
      width: 15rem;
      object-fit: cover;
    }
  }
`;
