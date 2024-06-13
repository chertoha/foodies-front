import { useEffect, useRef } from "react";
import { Item, List, StyledLink } from "./ProfileBar.styled";
import SpriteIcon from "components/UIKit/SpriteIcon";

const DropDown = ({ close }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onOutsideDropdownClick = e => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        close();
      }
    };

    window.addEventListener("click", onOutsideDropdownClick);

    return () => {
      window.removeEventListener("click", onOutsideDropdownClick);
    };
  }, [close]);

  return (
    <List ref={dropdownRef}>
      <Item>
        <StyledLink
          onClick={close}
          to="/recipe/123"
        >
          Profile
        </StyledLink>
      </Item>

      <Item>
        <StyledLink
          as="button"
          type="button"
          onClick={close}
        >
          Log out
          <SpriteIcon
            id="icon-arrow-up-right"
            size={[18, 18, 18]}
          />
        </StyledLink>
      </Item>
    </List>
  );
};

export default DropDown;
