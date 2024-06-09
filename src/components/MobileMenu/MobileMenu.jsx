import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../router";
import { MobileNavWrapper, NavList, NavItem } from "./MobileMenu.styled";

const MobileMenu = ({ inverse, isOpen }) => (
  <MobileNavWrapper isOpen={isOpen}>
    <NavList>
      <NavItem>
        <NavLink
          to={ROUTES.HOME}
          inverse={inverse}
        >
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          to={ROUTES.RECIPE_ADD}
          inverse={inverse}
        >
          Add recipe
        </NavLink>
      </NavItem>
    </NavList>
  </MobileNavWrapper>
);

export default MobileMenu;
