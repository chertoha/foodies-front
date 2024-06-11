import React from "react";
import { MobileMenuIconWrapper } from "./MobileMenuIcon.styled";
import IconsSprite from "../../assets/images/icons/sprite.svg";

const MobileMenuIcon = ({ inverse, toggleMenu }) => {
  return (
    <MobileMenuIconWrapper
      type="button"
      onClick={toggleMenu}
      aria-label="Mobile menu"
      inverse={inverse}
    >
      <svg
        width="28"
        height="28"
        fill="#000"
      >
        <use xlinkHref={`${IconsSprite}#icon-burger`} />
      </svg>
    </MobileMenuIconWrapper>
  );
};

export default MobileMenuIcon;
