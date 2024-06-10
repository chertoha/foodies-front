import IconsSprite from "../../assets/images/icons/sprite.svg";
import { ROUTES } from "../../config/router";
import { UserBarMenuWrapper, UserBarMenuLink } from "./UserBarMenu.styled";

const UserBarMenu = () => {
  return (
    <UserBarMenuWrapper>
      <UserBarMenuLink to={ROUTES.USER}>Profile</UserBarMenuLink>
      <UserBarMenuLink to={ROUTES.HOME}>
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
