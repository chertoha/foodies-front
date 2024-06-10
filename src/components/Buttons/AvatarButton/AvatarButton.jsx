import { ButtonAvatar, ImgAvatar } from "./AvatarButton.styled";

const AvatarButton = ({ author, showName = true, to }) => {
  if (!author) {
    return null;
  }
  return (
    <ButtonAvatar to={to}>
      <ImgAvatar
        src={author.avatar}
        alt={author.name}
      />
      {showName && <>{author.name}</>}
    </ButtonAvatar>
  );
};

export default AvatarButton;
