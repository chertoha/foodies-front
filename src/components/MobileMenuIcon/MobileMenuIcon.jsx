import React from "react";
import IconsSprite from "../../img/sprite.svg";
import { MobileMenuIconWrapper } from "./MobileMenuIcon.styled";

const MobileMenuIcon = ({ toggleMenu }) => {
  return (
    <MobileMenuIconWrapper onClick={toggleMenu}>
      <svg
        width="18"
        height="18"
        fill="#fff"
      >
        <use xlinkHref={`${IconsSprite}#icon-mobile-menu`} />
      </svg>
    </MobileMenuIconWrapper>
  );
};

export default MobileMenuIcon;
