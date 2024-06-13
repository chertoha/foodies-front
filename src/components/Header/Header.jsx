import Logo from "components/Logo/Logo";

import { useLocation } from "react-router-dom";
import {
  AuthBarWrapper,
  CommonWrapper,
  HeroWrapper,
  LogoWrapper,
  StyledHeader,
} from "./Header.styled";
import Hero from "components/Hero";
import AuthToggler from "components/AuthToggler";
import ProfileBar from "components/ProfileBar";
import { useAuth } from "hooks/useAuth";

const Header = () => {
  const { user } = useAuth();

  const location = useLocation();

  const isHomePage = location.pathname === "/";

  console.log(location);
  return (
    <CommonWrapper>
      <StyledHeader $ishome={isHomePage}>
        <LogoWrapper>
          <Logo inverse={isHomePage} />
        </LogoWrapper>

        {isHomePage && (
          <HeroWrapper>
            <Hero />
          </HeroWrapper>
        )}

        <AuthBarWrapper>{user ? <ProfileBar user={user} /> : <AuthToggler />}</AuthBarWrapper>
      </StyledHeader>
    </CommonWrapper>
  );
};

export default Header;
