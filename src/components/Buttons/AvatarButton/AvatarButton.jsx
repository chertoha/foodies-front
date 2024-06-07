import { ButtonAvatar, ImgAvatar } from "./AvatarButton.styled";

const AvatarButton = ({ author, onClick }) => {
  if (!author) {
    return null;
  }

  return (
    <ButtonAvatar onClick={onClick}>
      <ImgAvatar
        src={author.avatar}
        alt={author.name}
      />
      <>{author.name}</>
    </ButtonAvatar>
  );
};

export default AvatarButton;
