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
    background: url("./assets/Purple-Lens-Flare.png"),
      url("./assets/Purple-Lens-Flare.png"),
      url("./assets/Purple-Lens-Flare.png"),
      url("./assets/Purple-Lens-Flare.png"),
      url("./assets/Purple-Lens-Flare.png"),
      url("./assets/Purple-Lens-Flare.png"),
      url("./assets/Purple-Lens-Flare.png"),
      url("./assets/Purple-Lens-Flare.png"),
      url("./assets/Purple-Lens-Flare.png");
    //15.75rem 27.185rem;
    background-color: #150e28; //-60.527px 650px,
    background-position: -60.527px 8%, 170px 950px, -30px 1500px, 170px 2250px,
      -50px 4900px, 168px 5316px, -80px 5567px, 170px 6000px, -100px 6600px;
    background-size: 100% 27.185rem;
    background-repeat: no-repeat;
    background-blend-mode: hard-light;

    @media ${breakpointsUp["tablet-portrait-up"]} {
      background-size: 68% !important;

      background: url("./assets/Purple-Lens-Flare.png"),
        url("./assets/Purple-Lens-Flare.png"),
        url("./assets/Purple-Lens-Flare.png"),
        url("./assets/Purple-Lens-Flare.png"),
        url("./assets/Purple-Lens-Flare.png"),
        url("./assets/Purple-Lens-Flare.png"),
        url("./assets/Purple-Lens-Flare.png"),
        url("./assets/Purple-Lens-Flare.png"),
        url("./assets/Purple-Lens-Flare.png");

      background-color: #150e28;
      background-position: -54.25px 5%, 1000px 10%, -120px 20%, 700px 25%,
        80px 60%, 1000px 68%, -220px 76%, 900px 79%, -220px 97%;
      background-repeat: no-repeat;
    }
  }
  &.header-herosection {
    background: url("./assets/Purple-Lens-Flare.png")
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
`;
