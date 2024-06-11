import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useModalWindow } from "hooks/useModalWindow";
import { Modal } from "components/Modal/Modal";
import SignUp from "components/SignUp";
import SignIn from "components/SignIn";
import {
  HeroStyled,
  TitleStyled,
  SubtitleStyled,
  ButtonStyled,
  ImageWriperStyled,
  ImageSmallStyled,
  ImageBigStyled,
} from "./Hero.styled";

import heroImageSmallMobile from "../../assets/images/hero/hero-image1-mobile.png";
import heroImageSmallMobile2x from "../../assets/images/hero/hero-image1-mobile@2x.png";
import heroImageSmallTablet from "../../assets/images/hero/hero-image1-tablet.png";
import heroImageSmallTablet2x from "../../assets/images/hero/hero-image1-tablet@2x.png";
import heroImageBigMobile from "../../assets/images/hero/hero-image2-mobile.png";
import heroImageBigMobile2x from "../../assets/images/hero/hero-image2-mobile@2x.png";
import heroImageBigTablet from "../../assets/images/hero/hero-image2-tablet.png";
import heroImageBigTablet2x from "../../assets/images/hero/hero-image2-tablet@2x.png";

const Hero = () => {
  const navagata = useNavigate();

  const [isLogin, setIslogin] = useState(true);
  const { isOpen, open, close } = useModalWindow();
  const switchToSignIn = () => setIslogin(true);
  const switchToSignUp = () => setIslogin(false);

  const token = "";

  const onClose = () => {
    close();
  };

  const addRecipe = () => {
    if (token) {
      navagata("/recipe/add");
    } else {
      open();
    }
  };

  return (
    <HeroStyled>
      <TitleStyled>Improve Your Culinary Talents</TitleStyled>
      <SubtitleStyled>
        Amazing recipes for beginners in the world of cooking, enveloping you in the aromas and
        tastes of various cuisines.
      </SubtitleStyled>
      <ButtonStyled
        type="button"
        onClick={addRecipe}
      >
        Add recipe
      </ButtonStyled>
      <ImageWriperStyled>
        <ImageSmallStyled
          srcSet={`
          ${heroImageSmallMobile} 70w,
          ${heroImageSmallMobile2x} 140w, 
          ${heroImageSmallTablet} 128w,
          ${heroImageSmallTablet2x} 256w 
           `}
          src={heroImageSmallMobile}
          sizes="(min-width: 1440px) 128px,(min-width: 768px) 128px,(max-width: 767px) 70px"
          alt="hero recipe"
        />
        <ImageBigStyled
          srcSet={`
          ${heroImageBigMobile} 190w,
          ${heroImageBigMobile2x} 380w,
          ${heroImageBigTablet} 302w,
          ${heroImageBigTablet2x} 604w 
          `}
          src={heroImageBigMobile}
          sizes="(min-width: 1440px) 302px,(min-width: 768px) 302px,(max-width: 767px) 190px"
          alt="hero recipe"
        />
      </ImageWriperStyled>
      {isOpen && (
        <Modal onClose={onClose}>
          {isLogin ? (
            <SignIn
              switchForm={switchToSignUp}
              onClose={onClose}
            />
          ) : (
            <SignUp
              switchForm={switchToSignIn}
              onClose={onClose}
            />
          )}
        </Modal>
      )}
    </HeroStyled>
  );
};

export default Hero;
