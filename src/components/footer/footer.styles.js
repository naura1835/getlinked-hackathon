import { styled } from "styled-components";
import {
  Heading4,
  HighLightText,
  MediumText,
} from "../../globalStyles/text.styles";
import { breakpointsUp } from "../../globalStyles/breakpoints";
import { blink } from "../heroSection/heroSection.styles";

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
  position: relative;

  &:nth-child(1) {
    &::after {
      content: url("./assets/star.png");
      position: absolute;
      top: 50%;
      left: -17%;
      transform: scale(var(--scale-global));
      animation: ${blink} 2s infinite;
      animation-delay: 2s;
    }
  }

  &:nth-child(2) {
    &::after {
      content: url("./assets/grey-star.png");
      position: absolute;
      top: 40%;
      right: 25%;
      transform: scale(var(--scale-global));
      animation: ${blink} 2s infinite;
      animation-delay: 1s;
    }
  }

  &:nth-child(3) {
    &::after {
      content: url("./assets/star.png");
      position: absolute;
      top: 40%;
      right: 5%;
      transform: scale(var(--scale-sm-global));
      animation: ${blink} 2s infinite;
      animation-delay: 2s;
    }
  }

  &:last-child {
    display: flex;
    justify-content: center;

    &::after {
      content: url("./assets/pink-star.png");
      position: absolute;
      top: 0%;
      left: 10%;
      transform: scale(var(--scale-sm-global));
      animation: ${blink} 2s infinite;
      animation-delay: 2s;
    }
  }

  ${MediumText} {
    text-align: left;
  }
  ${Heading4} {
    color: ${({ theme }) => theme.colors.phlox};
  }

  @media ${breakpointsUp["tablet-landscape-up"]} {
    margin: 0;

    &:nth-child(2) {
      &::after {
        top: 20%;
        right: 5%;
      }
    }

    &:nth-child(3) {
      &::after {
        top: 80%;
        right: -30%;
      }
    }

    &:last-child {
      grid-template-rows: 2/3;
      grid-column: 1/4;
      justify-self: center;

      &::after {
        left: 50%;
      }
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
  display: flex;
  gap: 1rem;

  ${HighLightText} {
    margin-right: 1rem;
  }
  & > svg {
    vertical-align: middle;
  }

  & > img {
    height: 100%;
  }

  @media ${breakpointsUp["tablet-landscape-up"]} {
    margin-bottom: 1rem;
  }
`;
