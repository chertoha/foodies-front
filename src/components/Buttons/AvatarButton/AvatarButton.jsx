import { ButtonAvatar, ImgAvatar, InitialsAvatar, InitialsSpan } from "./AvatarButton.styled";
import AuthLinkWrapper from "components/AuthLinkWrapper";

const AvatarButton = ({ author, showName = true, to }) => {
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

  return (
    <AuthLinkWrapper
      to={to}
      avatar={
        <ButtonAvatar>
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
      }
    />
  );
};

export default AvatarButton;

// const Wrapp = () => {
//   return <span style={{}}>A</span>;
// };
