import { NavMenuWrapper, NavLinks } from './NavBar.styled';

const NavBar = () => {

  return (
    <>
      <NavMenuWrapper>
        <NavLinks
          color="clearRev"
          size="tiny"
        >
          Home
        </NavLinks>
        <NavLinks
          color="clearRev"
          size="tiny"
        >
          Add recipe
        </NavLinks>
      </NavMenuWrapper>
    </>
  );
};

export default NavBar;
