import React from "react";
import { NavMenuWrapper, NavMenuLink } from "./NavBar.styled";
import { ROUTES } from "config/router";

const NavBar = ({ inverse }) => {
  return (
    <NavMenuWrapper>
      <NavMenuLink
        to={ROUTES.HOME}
        inverse={inverse}
      >
        Home
      </NavMenuLink>
      <NavMenuLink
        to={ROUTES.RECIPE_ADD}
        inverse={inverse}
      >
        Add recipe
      </NavMenuLink>
    </NavMenuWrapper>
  );
};

export default NavBar;
