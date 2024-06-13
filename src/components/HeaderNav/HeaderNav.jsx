import { ROUTES } from "config/router";
import { Item, Link, List, Nav } from "./HeaderNav.styled";

const HeaderNav = ({ inverse }) => {
  return (
    <Nav>
      <List>
        <Item>
          <Link
            to={ROUTES.HOME}
            $inverse={inverse}
          >
            Home
          </Link>
        </Item>
        <Item>
          <Link
            to={ROUTES.RECIPE_ADD}
            $inverse={inverse}
          >
            Add recipe
          </Link>
        </Item>
      </List>
    </Nav>
  );
};

export default HeaderNav;
