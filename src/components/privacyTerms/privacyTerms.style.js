import styled from "styled-components";

import { breakpointsUp } from "../../globalStyles/breakpoints";
import {
  Heading2,
  MediumText,
  SmallMediumText,
} from "../../globalStyles/text.styles";
import { DescriptionWrapper, SvgWrapper } from "../section/section.styles";
import { GlassWrapper } from "../../globalStyles/global.styles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${Heading2} {
    position: relative;
    margin-top: 4.4rem;

    &::after {
      content: url("src/assets/grey-star.png");
      position: absolute;
      top: -55%;
      right: 18%;
      transform: scale(var(--scale-global));
    }
  }

  ${SvgWrapper} {
    order: 2;
    margin-top: 3rem;
    position: relative;

    &::before {
      content: "";
      display: block;
      background: url("src/assets/svgs/lock-bg.svg");
      background-size: cover;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      transform: translate(25%, 0);
      width: 15.5625rem;
      height: 19.4375rem;
      z-index: -1;
    }

    &::after {
      content: url("src/assets/purple-star.png");
      position: absolute;
      top: 10%;
      left: 5%;
      transform: scale(var(--scale-lg-global));
    }

    > svg {
      margin-top: 20%;

      > g > #pink-star {
        display: none;
      }
    }
  }

  ${DescriptionWrapper} {
    width: 80%;
    margin-inline: auto;
    position: relative;

    &::before {
      content: url("src/assets/purple-star.png");
      position: absolute;
      top: 25%;
      right: 5%;
      transform: scale(var(--scale-lg-global));
    }

    &::after {
      content: url("src/assets/purple-star.png");
      position: absolute;
      bottom: 20%;
      left: -15%;
      transform: scale(var(--scale-lg-global));
    }

    ${SmallMediumText} {
      line-height: 216.4%;
      font-weight: 400;
    }
  }

  ${SmallMediumText}:nth-child(2) {
    margin-bottom: 1.75rem;
  }

  @media ${breakpointsUp["tablet-portrait-up"]} {
    margin-top: 5rem;

    ${Heading2} {
      &::after {
        top: -45%;
      }
    }

    ${SmallMediumText} {
      text-align: left;
    }

    ${DescriptionWrapper} {
      &::after {
        top: 50%;
        left: 5%;
      }

      &::before {
        content: url("src/assets/grey-star.png");
        position: absolute;
        top: 70%;
        right: -115%;
        transform: scale(var(--scale-lg-global));
      }
    }

    ${SvgWrapper} {
      align-self: flex-start;

      &::after {
        top: 20%;
        left: -10%;
      }

      > svg {
        margin-top: 20%;

        > g > #pink-star {
          display: block;
        }
      }
    }
  }

  @media ${breakpointsUp["tablet-landscape-up"]} {
    ${SvgWrapper} {
      &::before {
        max-width: 25.125rem;
        max-height: 30.5rem;
        width: 100%;
        height: 100%;
      }
    }
  }
  @media ${breakpointsUp["desktop-up"]} {
    margin-top: 10rem;

    ${DescriptionWrapper} {
      max-width: 35.5625rem;
      width: 100%;

      &::after {
        top: 50%;
        left: -8%;
      }
    }

    ${SvgWrapper} {
      align-self: center;

      &::before {
        top: -20%;
        right: 10%;
        max-width: 33.125rem;
        max-height: 40.5rem;
        width: 100%;
        height: 100%;
        transform: translate(0);
      }
    }
  }
`;
export const PolicyWrapper = styled(GlassWrapper)`
  border-radius: 0.3125rem;
  border: 1px solid #d434fe;
  padding: 2.81rem 0.94rem;
  margin-top: 1.88rem;
  position: relative;

  &::after {
    content: url("src/assets/star.png");
    position: absolute;
    bottom: -23%;
    right: 23%;
    transform: scale(var(--scale-global));
  }

  ${SmallMediumText} {
    line-height: 216.4%;
    font-weight: 400;
  }

  @media ${breakpointsUp["tablet-portrait-up"]} {
    margin-top: 4.31rem;

    &::after {
      bottom: 120%;
      right: -90%;
    }
  }
  @media ${breakpointsUp["tablet-landscape-up"]} {
    padding: 3.69rem 4.5rem;
  }
`;
export const Policy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${SmallMediumText} {
    align-self: flex-start;
    text-align: left;
  }
`;
export const Title = styled(MediumText)`
  color: #d434fe;
  text-align: left;
  margin-top: 1.31rem;
  width: 100% !important;

  @media ${breakpointsUp["tablet-landscape-up"]} {
    font-size: 1rem;
  }
`;

export const PolicyList = styled.ul`
  list-style-type: none;
`;

export const PolicyListItem = styled.li`
  margin-bottom: 1.5rem;
  position: relative;
  display: flex;
  gap: 1rem;

  &::before {
    content: url("/src/assets/list.png");
    position: relative;
    width: 1.0625rem;
    height: 1.0625rem;
    margin-top: 0.5rem;
  }
  ${SmallMediumText} {
    display: inline-block;
    text-align: left;
  }
`;
