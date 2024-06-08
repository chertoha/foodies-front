import { ButtonAvatar, ImgAvatar } from "./AvatarButton.styled";

const AvatarButton = ({ author, onClick, showName = true }) => {
  if (!author) {
    return null;
  }

  return (
    <ButtonAvatar onClick={onClick}>
      <ImgAvatar
        src={author.avatar}
        alt={author.name}
      />
      {showName && <>{author.name}</>}
    </ButtonAvatar>
  );
};

export default AvatarButton;
