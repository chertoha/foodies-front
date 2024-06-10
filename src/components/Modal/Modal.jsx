import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Overlay, ModalContainer, BtnClose } from "./Modal.styled";
import SpriteIcon from "components/UIKit/SpriteIcon";

const modalRoot = document.querySelector("#portal");

export const Modal = ({ children, onClose }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalContainer>
        <BtnClose
          type="button"
          onClick={onClose}
        >
          <SpriteIcon
            id="icon-close"
            size={[24, 24, 24]}
          />
        </BtnClose>
        {children}
      </ModalContainer>
    </Overlay>,
    modalRoot
  );
};
