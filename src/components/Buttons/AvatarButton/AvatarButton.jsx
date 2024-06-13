import { ButtonAvatar, ImgAvatar, InitialsAvatar, InitialsSpan } from "./AvatarButton.styled";
import { Modal } from "../../Modal/Modal";
import SignIn from "../../SignIn/SignIn";
import { useNavigate } from "react-router-dom";
import { useModalWindow } from "../../../hooks/useModalWindow";
import { useAuth } from "../../../hooks/useAuth";

const AvatarButton = ({ author, showName = true, to }) => {
  const navigate = useNavigate();
  const { isOpen, open, close } = useModalWindow();
  const { user } = useAuth();

  if (!author) {
    return null;
  }

  const getInitials = name => {
    const names = name.split(" ");
    const initials = names.map(name => name[0].toUpperCase()).join("");
    return initials.slice(0, 2);
  };

  const getRandomColor = name => {
    const colors = [
      "#4DB6AC",
      "#90A4AE",
      "#BA68C8",
      "#64B5F6",
      "#F06292",
      "#81C784",
      "#E57373",
      "#FFD54F",
      "#FF8A65",
      "#A1887F",
    ];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  const handleAvatarClick = e => {
    e.preventDefault();
    if (!user) {
      open(true);
    } else {
      navigate(to);
    }
  };

  return (
    <>
      <ButtonAvatar onClick={handleAvatarClick}>
        {author.avatar ? (
          <ImgAvatar
            src={author.avatar}
            alt={author.name}
          />
        ) : (
          <InitialsAvatar style={{ backgroundColor: getRandomColor(author.name) }}>
            <InitialsSpan>{getInitials(author.name)}</InitialsSpan>
          </InitialsAvatar>
        )}
        {showName && <>{author.name}</>}
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
