import React from "react";
import { MobileMenuIconWrapper } from "./MobileMenuIcon.styled";
import { ReactComponent as Menu } from "../../assets/images/icons/mobile-menu.svg";
// import IconsSprite from '../../assets/images/icons/sprite.svg';

const MobileMenuIcon = ({ toggleMenu }) => {
  return (
    <MobileMenuIconWrapper
      type="button"
      onClick={toggleMenu}
      aria-label="Mobile menu"
    >
      <Menu />

      {/* <svg width="18" height="18" fill='#000'>
        <use xlinkHref={`${IconsSprite}#icon-mobile-menu`} />
      </svg> */}
    </MobileMenuIconWrapper>
  );
};

export default MobileMenuIcon;
