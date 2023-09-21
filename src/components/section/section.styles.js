import { styled } from "styled-components";
import {
  Heading2,
  HighLightText,
  MediumText,
} from "../../globalStyles/text.styles";
import { breakpointsUp } from "../../globalStyles/breakpoints";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding-bottom: 4rem;
  box-shadow: ${({ theme }) => theme.boxShadow};

  ${Heading2} {
    text-align: center;
    position: relative;
    margin-top: 1rem;

    &.big-idea--title {
      &::before {
        content: url("src/assets/purple-star.png");
        position: absolute;
        top: 20%;
        right: 12%;
        transform: scale(var(--scale-global));
      }
    }

    &.rules--title {
      &::before {
        content: url("src/assets/grey-star.png");
        position: absolute;
        top: 20%;
        right: 12%;
        transform: scale(var(--scale-global));
      }
    }

    /* &.people-standing--title {
      margin-bottom: 1rem;

      &::before {
        content: url("src/assets/grey-star.png");
        position: absolute;
        top: -250%;
        right: 40%;
        transform: scale(var(--scale-global));
      }
    } */

    &.faqs--title {
      margin-top: 3.75rem;

      &::before {
        content: url("src/assets/purple-star.png");
        position: absolute;
        top: -75%;
        left: 12%;
        transform: scale(var(--scale-global));
      }
    }
  }
  ${HighLightText} {
    display: block;
  }

  ${MediumText} {
    width: 80%;
    margin-inline: auto;
  }

  @media ${breakpointsUp["tablet-portrait-up"]} {
    flex-direction: ${(props) => props.direction ?? "row"};
    align-items: center;
    margin-top: 2rem;

    ${Heading2} {
      text-align: left;
      margin-top: 0;
      margin-bottom: 1rem;

      &.rules--title {
        &::before {
          top: -49%;
          left: 30%;
          right: 0;
        }
      }

      /* &.people-standing--title {
        &::before {
          top: 240%;
          right: 0;
          left: -45%;
        }
      } */

      &.faqs--title {
        &::before {
          left: 0;
        }
      }
    }

    ${MediumText} {
      width: 100%;
      margin-inline: unset;
    }
  }

  @media ${breakpointsUp["desktop-up"]} {
    margin-top: 3.8rem;
    gap: 5rem;

    ${Heading2} {
      /* &.people-standing--title {
        &::before {
          left: -65%;
        }
      } */

      &.faqs--title {
        &::before {
          left: -5%;
        }
      }
    }
  }
`;

export const SvgWrapper = styled.div.attrs((props) => ({
  className: props.className,
}))`
  width: 100%;
  display: flex;
  position: relative;

  svg {
    width: 80%;
    height: auto;
    margin-inline: auto;
  }

  &.lightbulb {
    margin-bottom: 3.6rem;

    &::before {
      content: url("src/assets/arrow.png");
      position: absolute;
      bottom: -13%;
      right: 53%;
      width: 1.216rem;
      height: 1.42613rem;
      transform: rotate(10.92deg) scale(0.5);
    }

    &::after {
      content: url("src/assets/purple-star.png");
      position: absolute;
      top: 40%;
      left: 5%;
      transform: scale(var(--scale-global));
    }
  }

  &.woman-sitting {
    &::before {
      content: url("src/assets/star.png");
      position: absolute;
      top: 205%;
      left: 20%;
      transform: scale(var(--scale-global));
    }
    &::after {
      content: url("src/assets/star.png");
      position: absolute;
      top: 40%;
      left: 10%;
      transform: scale(var(--scale-global));
    }
  }

  /* &.people-standing {
    margin-top: 4.62rem;

    &::after {
      content: url("src/assets/purple-star.png");
      position: absolute;
      top: -20%;
      left: 40%;
      transform: scale(var(--scale-global));
    }
  } */

  &.faqs {
    order: 2;
    margin-top: 5.38rem;

    & + div {
      display: flex;
      flex-direction: column;
      align-items: center;

      & > h2 {
        max-width: 26.6875rem;
        width: 100%;
      }
    }

    &::before {
      content: url("src/assets/star.png");
      position: absolute;
      bottom: -5%;
      right: 23%;
      transform: scale(var(--scale-global));
    }
  }

  @media ${breakpointsUp["tablet-portrait-up"]} {
    /* &.people-standing {
      align-self: flex-start;

      &::after {
        left: 30%;
      }

      &::before {
        content: url("src/assets/Ellipse.png");
        position: absolute;
        top: -20%;
        left: 12%;
        bottom: 0;
        width: 8.375rem;
        height: 8.375rem;
        z-index: 1;
        transform: scale(0.4);
      }

      svg {
        z-index: 2;
      }
    } */
    &.faqs {
      align-self: flex-end;
    }
  }

  @media ${breakpointsUp["tablet-landscape-up"]} {
    &.lightbulb {
      &::before {
        bottom: 5%;
        right: 10%;
        transform: rotate(10.92deg) scale(1);
      }
    }

    &.woman-sitting {
      &::before {
        content: url("src/assets/Ellipse.png");
        top: 5%;
        left: 52%;
        bottom: 0;
        width: 8.375rem;
        height: 8.375rem;
        z-index: 1;
        transform: scale(0.6);
      }

      svg {
        z-index: 2;
      }
    }
  }
  @media ${breakpointsUp["desktop-up"]} {
    &.woman-sitting {
      &::before {
        transform: scale(0.8);
        left: 55%;
        top: 10%;
      }
    }

    /* &.people-standing {
      margin-top: 5rem;

      &::after {
        top: -30%;
      }

      &::before {
        top: -8%;
        left: 18%;
        transform: scale(0.7);
      }
    } */
  }
`;
export const DescriptionWrapper = styled.div`
  max-width: 33.43rem;
  width: 100%;
`;
