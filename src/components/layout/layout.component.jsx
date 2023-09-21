/* eslint-disable react/prop-types */
import { styled } from "styled-components";
import { breakpointsUp } from "../../globalStyles/breakpoints";

const Layout = ({ children, className }) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

export default Layout;

const Wrapper = styled.div.attrs((props) => ({
  className: props.className,
}))`
  &.layout {
  }
  &.header-herosection {
    background: url("src/assets/Purple-Lens-Flare.png")
      ${({ theme }) => theme.colors.darkPurple};
    background-position: top left;
    background-size: 100% 28.75rem;
    background-repeat: no-repeat;
    background-blend-mode: hard-light;
    z-index: 1;

    @media ${breakpointsUp["desktop-up"]} {
      background-size: 52rem 28.75rem;
    }
  }

  &.intro-rules {
    background: url("src/assets/Purple-Lens-Flare.png")
      ${({ theme }) => theme.colors.darkPurple};
    background-size: 100% 27.1875rem;
    background-repeat: no-repeat;
    background-blend-mode: hard-light;
    background-position: -90px 55%;
    position: relative;
    height: auto;
    width: auto;
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      bottom: 8%;
      right: -69%;
      width: 100%;
      height: 27.875rem;
      background: url("src/assets/Purple-Lens-Flare.png")
        ${({ theme }) => theme.colors.darkPurple};
      background-size: 100% 27.1875rem;
      background-blend-mode: hard-light;
      background-position: 230.6% 104.382%;
    }

    @media ${breakpointsUp["tablet-landscape-up"]} {
      background-position: -90px 80%;

      &::before {
        bottom: -20%;
      }
    }

    @media ${breakpointsUp["desktop-up"]} {
      background-size: 64.8125rem 28.75rem;
      background-position: 10px 80%;
    }
  }
`;
