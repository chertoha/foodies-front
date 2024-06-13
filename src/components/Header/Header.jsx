import Logo from "components/Logo/Logo";
import Hero from "components/Hero";
import AuthToggler from "components/AuthToggler";
import ProfileBar from "components/ProfileBar";
import HeaderNav from "components/HeaderNav";

import { useLocation } from "react-router-dom";
import {
  AuthBarWrapper,
  CommonWrapper,
  HeroWrapper,
  LogoWrapper,
  StyledHeader,
} from "./Header.styled";
import { useAuth } from "hooks/useAuth";

const Header = () => {
  const { user } = useAuth();
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <CommonWrapper>
      <StyledHeader $ishome={isHomePage}>
        <LogoWrapper>
          <Logo inverse={isHomePage} />
        </LogoWrapper>

        {user && <HeaderNav inverse={isHomePage} />}

        {isHomePage && (
          <HeroWrapper>
            <Hero />
          </HeroWrapper>
        )}

        <AuthBarWrapper>
          {user ? (
            <ProfileBar
              user={user}
              inverse={isHomePage}
            />
          ) : (
            <AuthToggler />
          )}
        </AuthBarWrapper>
      </StyledHeader>
    </CommonWrapper>
  );
};

export default Header;
