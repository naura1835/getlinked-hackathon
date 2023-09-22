import { keyframes, styled } from "styled-components";
import { breakpointsUp } from "../../globalStyles/breakpoints";
import { BodyIntroText, Heading1 } from "../../globalStyles/text.styles";

export const blink = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`;

export const Container = styled.div`
  overflow: hidden;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  row-gap: 2rem;
  padding: 1.875rem 0 0;
  box-shadow: ${({ theme }) => theme.boxShadow};
  visibility: hidden;

  ${BodyIntroText} {
    margin-inline: auto;
    position: relative;
    --scale-x: 0;
    --scale-star: 0;

    &::before {
      content: url("src/assets/grey-star.png");
      position: absolute;
      bottom: -223%;
      right: 5%;
      transform: scale(var(--scale-star));
      animation: ${blink} 2s infinite;
      animation-delay: 3s;
    }

    &::after {
      content: url("src/assets/purple-line.png");
      position: absolute;
      right: 0;
      bottom: -20px;
      transform-origin: right;
      transform: scaleX(var(--scale-x));
    }
  }

  @media ${breakpointsUp["tablet-portrait-up"]} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, auto);
    row-gap: 4rem; //4.75rem
    background: url("src/assets/metrix.png") no-repeat;
    background-size: 80%;
    background-position: right;

    ${BodyIntroText} {
      grid-column: 1/3;
      justify-self: end;
      margin-inline: unset;
      margin-right: 1.875rem;

      &::before {
        bottom: -167%;
        left: 7%;
        transform: scale(var(--scale-star));
      }
    }
  }

  @media ${breakpointsUp["desktop-up"]} {
    padding-left: 5rem;
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 2rem;
  padding: 0 2.5rem 1.875rem;
  position: relative;
  --scale-star-1: 0;
  --scale-star-2: 0;

  &::before {
    content: url("src/assets/star.png");
    position: absolute;
    top: -10%;
    left: 32%;
    /* transform: scale(0.5); */
    transform: scale(var(--scale-star-1));
    animation: ${blink} 2s infinite;
    animation-delay: 2s;
  }

  &::after {
    content: url("src/assets/grey-star.png");
    position: absolute;
    bottom: 40%;
    right: 23%;
    /* transform: scale(0.4); */
    transform: scale(var(--scale-star-2));
    animation: ${blink} 2s infinite;
    animation-delay: 5s;
  }

  ${Heading1}:nth-child(1), ${Heading1}:nth-child(2) {
    position: relative;
  }
  ${Heading1}:nth-child(1) {
    --scale-bulb: 0;
  }

  ${Heading1}:nth-child(1)::before {
    content: url("src/assets/Creative.png");
    transform: scale(var(--scale-bulb));
    position: absolute;
    right: 10%;
    top: -60%;
    width: 1.125rem;
    height: 1.625rem;
  }
  ${Heading1}:nth-child(2) {
    --scale-chain: 0;
    --scale-boom: 0;
    img {
      width: 2.04981rem;
      height: 2.04981rem;
      vertical-align: top;
      transform: scale(var(--scale-chain));
    }
  }

  @media ${breakpointsUp["tablet-portrait-up"]} {
    grid-column: 1/2;
    text-align: start;
    align-items: flex-start;
    padding-right: 0;

    ${Heading1}:nth-child(2) {
      img {
        vertical-align: text-top;
      }
    }

    &::before {
      top: -30%;
      left: 15%;
      /* transform: scale(1); */
      transform: scale(var(--scale-star-1));
    }

    &::after {
      bottom: 25%;
      right: 23%;
      transform: scale(var(--scale-star-2));
    }

    ${Heading1}:nth-child(1)::before {
      top: -50%;
    }
  }

  @media ${breakpointsUp["desktop-up"]} {
    ${Heading1}:nth-child(1)::before {
      transform: scale(var(--scale-bulb));
      width: 3.3125rem;
      height: 4.5625rem;
      right: 4%;
    }

    ${Heading1}:nth-child(2) {
      position: relative;

      img {
        width: 4.8rem;
        height: 4.8rem;
        position: absolute;

        &:last-child {
          right: -9.5rem;
        }
      }
    }
  }
`;

export const Description = styled.p`
  font-family: "Montserrat";
  font-size: 0.8125rem;
  font-weight: 400;
  line-height: 166%; /* 1.34875rem */
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  overflow: hidden;

  @media ${breakpointsUp["desktop-up"]} {
    font-size: 1.25rem;
  }
`;

export const CountDown = styled.p`
  font-family: Unica One;
  font-size: 3rem;
  line-height: 133%; /* 3.99rem */
  margin-top: 0.89rem;

  span {
    font-family: Montserrat;
    font-size: 0.875rem;

    &:not(:last-child) {
      margin-right: 0.8rem;
    }
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  margin-top: 1.05rem;
  position: relative;

  > img {
    width: 100%;
    object-fit: cover;

    &:first-child {
      transform: translateY(20px) scale(0);
      mix-blend-mode: luminosity;
      background-color: lightgray 50%;
      background-blend-mode: luminosity;
    }

    &:last-child {
      position: absolute;
      top: 0;
      left: 0;
      width: 90%;
      height: 90%;
    }
  }

  @media ${breakpointsUp["tablet-portrait-up"]} {
    grid-column: 2/3;
  }
`;
