import { useState } from "react";
import { NavLink } from "react-router-dom";

import { Logo } from "../../globalStyles/text.styles";

import {
  Line,
  MenuIcon,
  MenuList,
  MenuListItem,
  NavBar,
} from "./header.styles";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavBar>
      <Logo style={{ visibility: isOpen ? "hidden" : "visible" }}>
        get
        <span>Linked</span>
      </Logo>
      <MenuList $isOpen={isOpen}>
        <MenuListItem>
          <NavLink to="/">Timeline</NavLink>
        </MenuListItem>
        <MenuListItem>
          <NavLink to="/">Overview</NavLink>
        </MenuListItem>
        <MenuListItem>
          <NavLink to="/">FAQs</NavLink>
        </MenuListItem>
        <MenuListItem>
          <NavLink to="/contact">Contact</NavLink>
        </MenuListItem>
        <MenuListItem>
          <NavLink to="/register">Register</NavLink>
        </MenuListItem>
      </MenuList>
      <MenuIcon
        onClick={() => setIsOpen(!isOpen)}
        className={isOpen && "menu--active"}
      >
        <Line className={isOpen && "active--first-line"} />
        <Line className={isOpen && "active--middle-line"} />
        <Line className={isOpen && "active--last-line"} />
      </MenuIcon>
    </NavBar>
  );
};

export default Header;
