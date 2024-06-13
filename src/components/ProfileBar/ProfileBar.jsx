import DropDown from "./DropDown";
import SpriteIcon from "components/UIKit/SpriteIcon";
import { useState } from "react";
import {
  Avatar,
  AvatarWrapper,
  Button,
  IconWrapper,
  InnerWrapper,
  Label,
  Wrapper,
} from "./ProfileBar.styled";
import MobileMenuButton from "components/MobileMenuButton";

const ProfileBar = ({ user, inverse }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = e => {
    e.stopPropagation();
    setIsOpen(p => !p);
  };
  const close = () => setIsOpen(false);

  return (
    <>
      <Wrapper>
        <InnerWrapper>
          <Button
            type="button"
            onClick={toggle}
          >
            <AvatarWrapper>
              <Avatar
                src={user.avatar}
                alt={user.name}
              />
            </AvatarWrapper>

            <Label>{user.name}</Label>
            {/* <Label>NADIIA AD</Label> */}

            <IconWrapper $open={isOpen}>
              <SpriteIcon
                id="icon-chevron-down"
                size={[18, 18, 18]}
              />
            </IconWrapper>
          </Button>

          {isOpen && <DropDown close={close} />}
        </InnerWrapper>

        <MobileMenuButton inverse={inverse} />
      </Wrapper>
    </>
  );
};

export default ProfileBar;
