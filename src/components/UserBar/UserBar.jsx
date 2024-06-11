import { useState } from "react";
import UserBarMenu from "../UserBarMenu/UserBarMenu";
import UserAvatar from "../UserAvatar/UserAvatar";
import IconsSprite from "../../assets/images/icons/sprite.svg";

import MobileMenu from "components/MobileMenu";
import MobileMenuIcon from "components/MobileMenuIcon/MobileMenuIcon";
import { UserBarWrapper, UserWrapper, UserName, WrappersIcons, Wrapper } from "./UserBar.styled";

const UserBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleUserMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <UserBarWrapper>
      <UserWrapper>
        <Wrapper>
          <UserAvatar
            size={[32, 50, 50]}
            src={"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37aa.png"}
            alt={"avatar"}
          />

          <WrappersIcons onClick={toggleUserMenu}>
            <UserName>Victoria</UserName>
            {showMenu ? (
              <svg
                width="18"
                height="18"
                fill="#fff"
              >
                <use xlinkHref={`${IconsSprite}#icon-chevron-up`} />
              </svg>
            ) : (
              <svg
                width="18"
                height="18"
                fill="#fff"
              >
                <use xlinkHref={`${IconsSprite}#icon-chevron-down`} />
              </svg>
            )}
          </WrappersIcons>
        </Wrapper>

        {showMenu && <UserBarMenu />}
      </UserWrapper>

      <MobileMenuIcon toggleMenu={toggleMobileMenu} />
      <MobileMenu
        open={isMobileMenuOpen}
        toggleMenu={toggleMobileMenu}
      />
    </UserBarWrapper>
  );
};

export default UserBar;
