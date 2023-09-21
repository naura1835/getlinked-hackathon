import styled from "styled-components";

import { HighLightText, SmallMediumText } from "../../globalStyles/text.styles";
import { DescriptionWrapper, SvgWrapper } from "../section/section.styles";
import { SectionWrapper } from "../../globalStyles/global.styles";
import { breakpointsUp } from "../../globalStyles/breakpoints";

export const Wrapper = styled(SectionWrapper)`
  ${SvgWrapper} {
    margin-bottom: 3rem;

    &::before {
      content: url("src/assets/star.png");
      position: absolute;
      bottom: -10%;
      left: 10%;
      transform: scale(var(--scale-global));
    }

    &::after {
      content: url("src/assets/star.png");
      position: absolute;
      bottom: -30%;
      right: 10%;
      transform: scale(var(--scale-global));
    }
  }

  ${DescriptionWrapper} {
    margin-top: 4.5rem;
    position: relative;

    &::before {
      content: url("src/assets/purple-star.png");
      position: absolute;
      top: -25%;
      left: 10%;
      transform: scale(var(--scale-global));
    }

    &::after {
      content: url("src/assets/pink-star.png");
      position: absolute;
      top: 20%;
      right: 20%;
      transform: scale(var(--scale-global));
    }
  }

  @media ${breakpointsUp["tablet-portrait-up"]} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    ${DescriptionWrapper} {
      grid-column: 2/3;
      grid-row: 1/2;
      justify-self: end;
      max-width: 400px;
      width: 100%;

      &::before {
        left: -80%;
      }

      &::after {
        top: 30%;
      }
    }

    ${SvgWrapper} {
      grid-column: 1/2;
      grid-row: 1/3;

      > svg {
        width: 100%;
      }

      &::after {
        bottom: 0%;
        right: 10%;
      }
    }
  }

  @media ${breakpointsUp["desktop-up"]} {
    gap: 0;
    ${SvgWrapper} {
      width: 34.25rem;
      align-self: center;
    }

    ${DescriptionWrapper} {
      justify-self: center;
      margin-left: 10%;

      &::before {
        left: -100%;
      }
    }
  }
`;

export const AwardDiv = styled.div`
  margin-top: 5.19rem;
  margin-inline: auto;
  width: 90%;
  display: flex;
  justify-content: space-evenly;
  position: relative;

  &::before {
    content: url("src/assets/grey-star.png");
    position: absolute;
    bottom: -45%;
    right: 30%;
    transform: scale(var(--scale-global));
  }

  @media ${breakpointsUp["tablet-portrait-up"]} {
    grid-column: 2/3;

    &::before {
      bottom: -25%;
    }

    &::after {
      content: url("src/assets/star.png");
      position: absolute;
      top: -40%;
      right: -10%;
      transform: scale(var(--scale-global));
    }
  }

  @media ${breakpointsUp["tablet-landscape-up"]} {
    gap: 1rem;
    margin-top: 12rem;
  }
  @media ${breakpointsUp["desktop-up"]} {
    margin-top: 13rem;
  }
`;

export const Position = styled.article.attrs((props) => ({
  color: props.color || "#d434fe",
  bg: props.bg || "rgba(212, 52, 254, 0.12)",
  className: props.className,
}))`
  width: 5.62544rem;
  height: 7.85444rem;
  flex-shrink: 0;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.color};
  background-color: ${(props) => props.bg};
  position: relative;

  img {
    width: 4.74981rem;
    height: 4.77631rem;
    object-fit: cover;
    position: absolute;
    top: -30%;
  }

  &.position--first {
    margin-top: 1rem;

    img {
      width: 7.85444rem;
      height: 7.85444rem;
      top: -75%;
    }
  }

  @media ${breakpointsUp["tablet-landscape-up"]} {
    width: 10.25rem;
    height: 12.5rem;

    img {
      width: 11.1875rem;
      height: 11.25rem;
      top: -50%;
    }

    &.position--first {
      img {
        width: 14.1875rem;
        height: 14.25rem;
      }
    }
  }
  @media ${breakpointsUp["desktop-up"]} {
    width: 13.25rem;
    height: 18.5rem;

    img {
      top: -25%;
    }

    &.position--first {
      img {
        width: 18.5rem;
        height: 18.5rem;
        top: -65%;
      }
    }
  }
`;

export const PositionTitle = styled(SmallMediumText)`
  margin-top: 27%;
  text-align: center;

  @media ${breakpointsUp["desktop-up"]} {
    font-size: 1.5rem;
  }
`;
export const PrizeMoney = styled(HighLightText).attrs((props) => ({
  color: props.color,
}))`
  color: ${(props) => props.color};
  margin-top: 0.31rem;

  @media ${breakpointsUp["desktop-up"]} {
    font-size: 2rem;
  }
`;
