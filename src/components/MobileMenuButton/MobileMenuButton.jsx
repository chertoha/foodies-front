import Logo from "components/Logo/Logo";
import SpriteIcon from "components/UIKit/SpriteIcon";
import { useWindowSize } from "hooks/useWindowSize";
import { useEffect, useState } from "react";
import { CloseButton, HeadBar, MenuButton, MobileMenu } from "./MobileMenuButton.styled";
import MobileMenuNav from "./MobileMenuNav";

const MobileMenuButton = ({ inverse }) => {
  const { isMobile } = useWindowSize();

  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);

  return (
    <>
      <MenuButton
        type="button"
        $inverse={inverse}
        onClick={open}
      >
        <SpriteIcon
          id="icon-burger"
          size={[28, 28, 28]}
        />
      </MenuButton>

      <MobileMenu $open={isMobile && isOpen}>
        <HeadBar>
          <Logo
            inverse={true}
            onClick={close}
          />

          <CloseButton
            type="button"
            onClick={close}
          >
            <SpriteIcon
              id="icon-close"
              size={[28, 28, 28]}
            />
          </CloseButton>
        </HeadBar>

        <MobileMenuNav onClick={close} />
        {/* <Nav>
          <List>
            <Item>
              <Link
                onClick={close}
                to={ROUTES.HOME}
              >
                Home
              </Link>
            </Item>
            <Item>
              <Link
                onClick={close}
                to={ROUTES.RECIPE_ADD}
              >
                Add recipe
              </Link>
            </Item>
            <Item>
              <Link
                onClick={close}
                to={`user/666a03962990091f7536e7e6`}
              >
                Add recipe
              </Link>
            </Item>
          </List>
        </Nav> */}
      </MobileMenu>
    </>
  );
};

export default MobileMenuButton;
