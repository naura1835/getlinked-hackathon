import { styled } from "styled-components";
import { breakpointsUp } from "../../globalStyles/breakpoints";

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1.75rem 3rem 1.31rem; //add .37 as margin to logo
  position: relative;
  max-height: 70px;
  box-shadow: inset 0rem -0.0625rem #ffffff2e;

  @media ${breakpointsUp["tablet-landscape-up"]} {
    max-height: 140px;
    padding-top: 3.94rem;
  }

  @media ${breakpointsUp["desktop-up"]} {
    padding: 3.94rem 7rem 1.31rem;
  }
`;

export const MenuList = styled.ul`
  display: ${(props) => (props.$isOpen ? "flex" : "none")};
  list-style-type: none;
  background-color: ${({ theme }) => theme.colors.darkPurple};
  flex-direction: column;
  position: absolute;
  top: 70px;
  left: 0;
  height: calc(100vh - 70px);
  width: 100%;
  padding: 1.437rem 3rem;
  z-index: 1;

  @media ${breakpointsUp["tablet-landscape-up"]} {
    background-color: transparent;
    position: relative;
    top: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: auto;
    width: 100%;
    max-width: 600px; //716px;
    padding: 0;
  }

  @media ${breakpointsUp["desktop-up"]} {
    max-width: 716px;
  }
`;

export const MenuListItem = styled.li`
  margin-bottom: 2rem;

  &:last-child {
    border-radius: 0.25rem;
    background: ${({ theme }) => theme.colors.linearGradient};
    display: grid;
    place-items: center;
    width: 10.75rem;
    height: 3.3125rem;

    @media ${breakpointsUp["desktop-up"]} {
      margin-left: 3rem;
    }
  }

  > .active--register {
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.linearGradient};
  }

  a {
    color: #fff;
    font-family: "Inter";
    font-size: 1.125rem;
    font-weight: 500;
    letter-spacing: -0.0625rem;
  }

  @media ${breakpointsUp["tablet-landscape-up"]} {
    margin-bottom: 0;
  }
`;

export const MenuIcon = styled.div.attrs((props) => ({
  className: props.className,
}))`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  background-color: ${({ theme }) => theme.colors.darkPurple};
  background-clip: padding-box;
  border-radius: 50%;
  border: 1px solid transparent;
  width: 1.87rem;
  height: 1.87rem;
  padding: 0.2rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -1px;
    padding: 0.2rem;
    border-radius: inherit;
  }

  &.menu--active::before {
    background: linear-gradient(to right, #903aff, #ff26b9);
  }

  @media ${breakpointsUp["tablet-landscape-up"]} {
    display: none;
  }
`;

export const Line = styled.span.attrs((props) => ({
  className: props.className,
}))`
  display: inline-block;
  background-color: #fff;
  height: 2px;
  border-radius: 2px;

  &:nth-child(1),
  &:nth-child(3) {
    width: 0.59rem;
    transition: all 0.1s linear;
  }

  &:nth-child(2) {
    width: 1.1875rem;
    transition: all 0.1s linear;
  }

  &:nth-child(3) {
    align-self: flex-end;
  }

  &.active--first-line {
    width: 1.1875rem;
    transform: rotate(45deg) translate(4px, 1px);
  }
  &.active--middle-line {
    opacity: 0;
  }
  &.active--last-line {
    transform: rotate(-45deg) translate(2px, -4px);
    width: 1.1875rem;
  }
`;
