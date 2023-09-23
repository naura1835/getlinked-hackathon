import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

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

  const navItems = [
    { id: 1, name: "Timeline", url: "/timeline" },
    { id: 2, name: "Overview", url: "/overview" },
    { id: 3, name: "FAQs", url: "/faq" },
    { id: 4, name: "Contact", url: "/contact" },
  ];

  return (
    <NavBar>
      <Link to="/" style={{ color: "#fff" }}>
        <Logo style={{ visibility: isOpen ? "hidden" : "visible" }}>
          get
          <span>Linked</span>
        </Logo>
      </Link>
      <MenuList $isOpen={isOpen}>
        {navItems.map((item) => (
          <MenuListItem key={item.id}>
            <NavLink
              className={({ isActive }) => (isActive ? "is-active" : "")}
              to={item.url}
            >
              {item.name}
            </NavLink>
          </MenuListItem>
        ))}
        <MenuListItem>
          <NavLink
            className={({ isActive }) =>
              isActive ? "is-active--register" : ""
            }
            to="/register"
          >
            Register
          </NavLink>
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
