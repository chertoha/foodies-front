import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";
import AuthBar from "../AuthBar/AuthBar";
import UserBar from "../UserBar/UserBar";

import { HeaderContainer, ContainerBackground, HeaderWrapper } from "./Header.styled";

const Header = ({ inverse }) => {
  const isLogIn = true;
  return (
    <HeaderContainer>
      <ContainerBackground>
        <HeaderWrapper>
          <Logo inverse={inverse} />
          <NavBar inverse={inverse} />
          {isLogIn ? <UserBar inverse={inverse} /> : <AuthBar inverse={inverse} />}
        </HeaderWrapper>
      </ContainerBackground>
    </HeaderContainer>
  );
};

export default Header;
