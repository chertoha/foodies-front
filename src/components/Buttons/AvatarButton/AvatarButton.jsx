import { ButtonAvatar, ImgAvatar } from "./AvatarButton.styled";
import { Modal } from "../../Modal/Modal";
import SignIn from "../../SignIn/SignIn";
import { useModalWindow } from "../../../hooks/useModalWindow";

const AvatarButton = ({ author, showName = true, to, isAuthenticated }) => {
  const { isOpen, open, close } = useModalWindow();

  if (!author) {
    return null;
  }
  const handleAvatarClick = e => {
    e.preventDefault();
    if (!isAuthenticated) {
      open(true);
    } else {
      window.location.href = to;
    }
  };

  return (
    <>
      <ButtonAvatar
        to={to}
        onClick={handleAvatarClick}
      >
        <ImgAvatar
          src={author.avatar}
          alt={author.name}
        />
        {showName && <span>{author.name}</span>}
      </ButtonAvatar>
      {isOpen && (
        <Modal onClose={close}>
          <SignIn />
        </Modal>
      )}
    </>
  );
};

export default AvatarButton;
