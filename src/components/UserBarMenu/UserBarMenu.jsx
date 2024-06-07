import IconsSprite from "../../img/sprite.svg";
import { UserBarMenuWrapper, UserBarMenuLink } from "./UserBarMenu.styled";

const UserBarMenu = () => {
  return (
    <UserBarMenuWrapper>
      <UserBarMenuLink>Profile</UserBarMenuLink>
      <UserBarMenuLink>
        Log out
        <svg
          width="18"
          height="18"
          fill="#fff"
        >
          <use xlinkHref={`${IconsSprite}#icon-arrow-up-right`} />
        </svg>
      </UserBarMenuLink>
    </UserBarMenuWrapper>
  );
};

export default UserBarMenu;
