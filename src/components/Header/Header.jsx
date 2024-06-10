import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";
import AuthBar from "../AuthBar/AuthBar";
import UserBar from "../UserBar/UserBar";

import { TopContainer, ContainerBackground, HeaderWrapper } from "./Header.styled";

const Header = () => {
  const isLogIn = true;
  return (
    <TopContainer>
      <ContainerBackground>
        <HeaderWrapper>
          <Logo inverse={false} />
          <NavBar inverse={false} />
          {isLogIn ? <UserBar /> : <AuthBar />}
        </HeaderWrapper>
      </ContainerBackground>
    </TopContainer>
  );
};

export default Header;
