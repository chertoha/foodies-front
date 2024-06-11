import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";
import AuthBar from "../AuthBar/AuthBar";
import UserBar from "../UserBar/UserBar";

import { HeaderContainer, ContainerBackground, HeaderWrapper } from "./Header.styled";

const Header = () => {
  const location = useLocation();
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    if (location.pathname === "/") {
      setIsHomePage(true);
    } else {
      setIsHomePage(false);
    }
  }, [location.pathname]);

  const isLogIn = true;

  return (
    <HeaderContainer>
      <ContainerBackground>
        <HeaderWrapper>
          <Logo inverse={isHomePage} />
          <NavBar inverse={isHomePage} />
          {isLogIn ? <UserBar inverse={isHomePage} /> : <AuthBar inverse={isHomePage} />}
        </HeaderWrapper>
      </ContainerBackground>
    </HeaderContainer>
  );
};

export default Header;
