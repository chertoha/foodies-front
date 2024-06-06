import { ROUTES } from "config/router";
import { LogoLink } from "./Logo.styled";

const Logo = ({ inverse }) => {
  return (
    <LogoLink
      to={ROUTES.HOME}
      inverse={inverse}
    >
      Foodies
    </LogoLink>
  );
};

export default Logo;
