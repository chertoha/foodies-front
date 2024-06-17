import { ROUTES } from "config/router";
import { Item, Link, List, Nav } from "./MobileMenuButton.styled";

const MobileMenuNav = ({ onClick }) => {
  return (
    <Nav>
      <List>
        <Item>
          <Link
            onClick={onClick}
            to={ROUTES.HOME}
          >
            Home
          </Link>
        </Item>
        <Item>
          <Link
            onClick={onClick}
            to={ROUTES.RECIPE_ADD}
          >
            Add recipe
          </Link>
        </Item>
      </List>
    </Nav>
  );
};

export default MobileMenuNav;
