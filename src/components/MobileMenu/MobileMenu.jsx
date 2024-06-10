import React from "react";
import Logo from "../Logo/Logo";
import { ROUTES } from "../../config/router";
import IconsSprite from "../../assets/images/icons/sprite.svg";
import {
  MobileNavWrapper,
  NavList,
  NavItem,
  NavLinks,
  ImageWrapper,
  ImageBig,
  ImageSmall,
  BtnClose,
  TopWrapper,
} from "./MobileMenu.styled";

import heroImageSmallMobile from "../../assets/images/hero/hero-image1-mobile.png";
import heroImageSmallMobile2x from "../../assets/images/hero/hero-image1-mobile@2x.png";
import heroImageBigMobile from "../../assets/images/hero/hero-image2-mobile.png";
import heroImageBigMobile2x from "../../assets/images/hero/hero-image2-mobile@2x.png";

const MobileMenu = ({ inverse, open, toggleMenu }) => {
  return (
    <MobileNavWrapper open={open}>
      <TopWrapper>
        <Logo inverse={true} />

        <BtnClose
          type="button"
          onClick={toggleMenu}
          aria-label="Close Mobile menu"
        >
          <svg
            width="28"
            height="28"
            fill="#fff"
          >
            <use xlinkHref={`${IconsSprite}#icon-close`} />
          </svg>
        </BtnClose>
      </TopWrapper>

      <NavList>
        <NavItem>
          <NavLinks
            to={ROUTES.HOME}
            inverse={inverse}
          >
            Home
          </NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks
            to={ROUTES.RECIPE_ADD}
            inverse={inverse}
          >
            Add recipe
          </NavLinks>
        </NavItem>
      </NavList>

      <ImageWrapper>
        <ImageSmall
          srcSet={`
          ${heroImageSmallMobile} 70w,
          ${heroImageSmallMobile2x} 140w,  
           `}
          src={heroImageSmallMobile}
          sizes="(min-width: 1440px) 128px,(min-width: 768px) 128px,(max-width: 767px) 70px"
          alt="mobile recipe"
        />
        <ImageBig
          srcSet={`
          ${heroImageBigMobile} 190w,
          ${heroImageBigMobile2x} 380w,
          `}
          src={heroImageBigMobile}
          sizes="(min-width: 1440px) 302px,(min-width: 768px) 302px,(max-width: 767px) 190px"
          alt="mobile recipe"
        />
      </ImageWrapper>
    </MobileNavWrapper>
  );
};

export default MobileMenu;
