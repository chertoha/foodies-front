import sprite from "assets/images/icons/sprite.svg";
import { Icon } from "./SpriteIcon.styled";

const SpriteIcon = ({ id, size }) => {
  if (!Array.isArray(size) && size.length !== 3)
    throw new Error(
      "Please, set to SpriteIcon 'size' as array with 3 sizes (mobile, tablet, desktop). Example [20,36,40] "
    );
  return (
    <Icon size={size}>
      <use xlinkHref={sprite + `#${id}`}></use>
    </Icon>
  );
};

export default SpriteIcon;
