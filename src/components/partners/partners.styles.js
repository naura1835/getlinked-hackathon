import styled from "styled-components";
import { breakpointsUp } from "../../globalStyles/breakpoints";
import { MediumText } from "../../globalStyles/text.styles";
import { blink } from "../heroSection/heroSection.styles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  box-shadow: inset 0rem -0.0625rem #ffffff2e;

  @media ${breakpointsUp["tablet-portrait-up"]} {
    ${MediumText} {
      width: 80%;
      text-align: center;
      position: relative;

      &::before {
        content: url("./assets/pink-star.png");
        position: absolute;
        top: 250%;
        right: 35%;
        transform: scale(var(--scale-global));
        animation: ${blink} 2s infinite;
        animation-delay: 3s;
      }
    }
  }

  @media ${breakpointsUp["tablet-landscape-up"]} {
    ${MediumText} {
      width: 50%;

      &::before {
        right: 40%;
      }
    }
  }
`;

export const PartnerGrid = styled.div`
  margin-top: 2.56rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr;
  place-items: center;
  gap: 1rem;
  border-radius: 0.3125rem;
  border: 1px solid #d434fe;
  background: rgba(255, 255, 255, 0.01);
  padding: 1.5rem;
  position: relative;

  &::before {
    content: url("./assets/purple-star.png");
    position: absolute;
    top: -5%;
    left: 5%;
    transform: scale(var(--scale-global));
    animation: ${blink} 2s infinite;
    animation-delay: 2s;
  }
  &::after {
    content: url("./assets/star.png");
    position: absolute;
    bottom: 0;
    right: 10%;
    transform: scale(var(--scale-global));
    animation: ${blink} 2s infinite;
    animation-delay: 3s;
  }

  @media ${breakpointsUp["tablet-portrait-up"]} {
    padding: 3rem;
    &::before {
      top: -10%;
    }
  }
  @media ${breakpointsUp["tablet-landscape-up"]} {
    height: 100%;
    max-height: 35rem;
    padding: 5rem;
    grid-template-columns: repeat(3, 12rem);
    grid-template-rows: repeat(2, 10rem);
    justify-content: center;

    &::after {
      bottom: 10%;
      right: 42%;
    }
  }
`;

export const Partner = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  &:nth-child(2)::before,
  &:nth-child(3)::before,
  &:nth-child(5)::before,
  &:nth-child(6)::before {
    content: "";
    position: absolute;
    top: 5%;
    left: -10%;
    width: 0.125rem;
    height: 90%;
    background-color: ${({ theme }) => theme.colors.phlox};
  }

  &:nth-child(1)::after,
  &:nth-child(2)::after,
  &:nth-child(3)::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -15%;
    height: 0.125rem;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.phlox};
  }

  @media ${breakpointsUp["tablet-portrait-up"]} {
    padding: 1rem;

    &:nth-child(2)::before,
    &:nth-child(3)::before,
    &:nth-child(5)::before,
    &:nth-child(6)::before {
      top: 0;
      left: -5%;
      transform: translate(-50%, 20%);
      width: 0.125rem;
      height: 80%;
    }
  }

  @media ${breakpointsUp["tablet-landscape-up"]} {
    padding: 1rem 2rem;

    &:nth-child(1)::after,
    &:nth-child(2)::after,
    &:nth-child(3)::after {
      width: 90%;
      transform: translate(5px, 0);
    }
  }
`;
