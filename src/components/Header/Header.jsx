import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";
import AuthBar from "../AuthBar/AuthBar";
import UserBar from "../UserBar/UserBar";

import { HeaderContainer, ContainerBackground, HeaderWrapper } from "./Header.styled";

const Header = () => {
  const isLogIn = true;
  return (
    <HeaderContainer>
      <ContainerBackground>
        <HeaderWrapper>
          <Logo inverse={true} />
          <NavBar inverse={true} />
          {isLogIn ? <UserBar /> : <AuthBar />}
        </HeaderWrapper>
      </ContainerBackground>
    </HeaderContainer>
  );
};

export default Header;
