import { ROUTES } from "config/router";
import { LogoLink } from "./Logo.styled";

const Logo = ({ inverse, onClick }) => {
  return (
    <LogoLink
      onClick={onClick}
      to={ROUTES.HOME}
      $inverse={inverse}
    >
      Foodies
    </LogoLink>
  );
};

export default Logo;
