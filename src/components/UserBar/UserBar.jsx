import { useState } from "react";
import UserBarMenu from "../UserBarMenu/UserBarMenu";
import UserAvatar from "../UserAvatar/UserAvatar";
import IconsSprite from "../../img/sprite.svg";

import { UserBarWrapper, UserName, WrappersIcons, Wrapper } from "./UserBar.styled";

const UserBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <UserBarWrapper>
      <Wrapper>
        <UserAvatar
          size={[32, 50, 50]}
          src={"https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37aa.png"}
          alt={"avatar"}
        />

        <WrappersIcons onClick={toggleMenu}>
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
    </UserBarWrapper>
  );
};

export default UserBar;
