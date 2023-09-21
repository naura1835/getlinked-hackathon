import styled from "styled-components";

import {
  HighLightText,
  MediumText,
  SmallMediumText,
} from "../../globalStyles/text.styles";
import { breakpointsUp } from "../../globalStyles/breakpoints";

export const Wrapper = styled.section`
  margin-top: 5rem;
  padding: 0 3rem 5.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: ${({ theme }) => theme.boxShadow};

  ${SmallMediumText} {
    font-size: 0.875rem;
    text-align: center;
    margin-top: 1.31rem;
    margin-bottom: 3.5rem;
    position: relative;
    max-width: 21.62rem;
    width: 100%;

    &::after {
      content: url("src/assets/purple-star.png");
      position: absolute;
      bottom: -140%;
      left: -30%;
      transform: scale(var(--scale-global));
    }
  }

  @media ${breakpointsUp["tablet-landscape-up"]} {
    padding-bottom: 6.81rem;

    ${SmallMediumText} {
      margin-bottom: 5.69rem;

      &::after {
        bottom: -150%;
      }
    }
  }

  @media ${breakpointsUp["desktop-up"]} {
    ${SmallMediumText} {
      &::after {
        left: -70%;
      }
    }
  }
`;

export const TimeLineContainer = styled.ol`
  list-style-type: none;
  width: 100%;
  position: relative;

  &::before {
    content: url("src/assets/grey-star.png");
    position: absolute;
    bottom: -9%;
    left: -13%;
    transform: scale(var(--scale-global));
  }

  &::after {
    content: url("src/assets/star.png");
    position: absolute;
    top: 45%;
    right: 13%;
    transform: scale(var(--scale-global));
  }

  @media ${breakpointsUp["tablet-portrait-up"]} {
    &::before {
      bottom: -2%;
    }
    &::after {
      top: 40%;
    }
  }
`;

export const DateText = styled(HighLightText)``;

export const TimeLineItem = styled.li`
  font-size: 0.75rem;
  font-family: "Montserrat";
  position: relative;
  padding-left: 1.15rem;
  min-height: 110px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    width: 0.125rem;
    height: 100%;
    max-height: 6rem;
    background-color: ${({ theme }) => theme.colors.phlox};
  }

  &::after {
    content: attr(data-index);
    position: absolute;
    left: 0;
    bottom: -10%;
    display: grid;
    place-items: center;
    width: 1.2075rem;
    height: 1.2075rem;
    border-radius: 1.65625rem;
    transform: translate(-50%, 20%);
    background: linear-gradient(270deg, #903aff 0%, #d434fe 100%);
  }

  ${MediumText}, ${HighLightText} {
    font-size: 0.75rem;
    text-align: left;
  }

  @media ${breakpointsUp["tablet-portrait-up"]} {
    flex-direction: ${(props) => props.direction};
    gap: 60px;
    padding: 0;

    &::before,
    &::after {
      left: calc(50% - 1px);
    }

    &::after {
      width: 2.3125rem;
      height: 2.3125rem;
    }

    div,
    ${DateText} {
      max-width: 250px;
      width: 100%;
      align-self: flex-end;
    }
  }

  @media ${breakpointsUp["tablet-landscape-up"]} {
    div,
    ${HighLightText}:last-child {
      max-width: 330px;
    }

    div:nth-child(odd),
    ${HighLightText}:nth-last-child(odd) {
      padding-left: 30px;
    }

    div:nth-child(even),
    ${HighLightText}:nth-last-child(even) {
      padding-right: 30px;
    }

    ${MediumText} {
      font-size: 1rem;
    }
    ${DateText}, ${HighLightText} {
      font-size: 1.5rem;
    }
  }

  @media ${breakpointsUp["desktop-up"]} {
    &::before {
      width: 0.25rem;
    }
    &::after {
      width: 3.3125rem;
      height: 3.3125rem;
    }
    div,
    ${HighLightText}:last-child {
      max-width: 430px;
    }
  }
`;
