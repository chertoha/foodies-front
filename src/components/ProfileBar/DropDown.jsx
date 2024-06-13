import SpriteIcon from "components/UIKit/SpriteIcon";
import { useEffect, useRef } from "react";
import { Item, List, StyledLink } from "./ProfileBar.styled";
import { Modal } from "components/Modal/Modal";
import LogOut from "components/LogOut";
import { useModalWindow } from "hooks/useModalWindow";

const DropDown = ({ close: closeDropdown }) => {
  const dropdownRef = useRef(null);

  const { isOpen: isModalOpen, open: openModal, close: closeModal } = useModalWindow();

  useEffect(() => {
    const onOutsideDropdownClick = e => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        closeDropdown();
      }
    };

    window.addEventListener("click", onOutsideDropdownClick);

    return () => {
      window.removeEventListener("click", onOutsideDropdownClick);
    };
  }, [closeDropdown]);

  console.log(isModalOpen);
  return (
    <>
      <List ref={dropdownRef}>
        <Item>
          <StyledLink
            onClick={closeDropdown}
            to="/recipe/123"
          >
            Profile
          </StyledLink>
        </Item>

        <Item>
          <StyledLink
            as="button"
            type="button"
            onClick={() => {
              openModal();
              // closeDropdown();
            }}
          >
            Log out
            <SpriteIcon
              id="icon-arrow-up-right"
              size={[18, 18, 18]}
            />
          </StyledLink>
        </Item>
      </List>

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <LogOut onClose={closeModal} />
        </Modal>
      )}
    </>
  );
};

export default DropDown;
