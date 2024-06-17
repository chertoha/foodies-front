import SpriteIcon from "../../UIKit/SpriteIcon/SpriteIcon";
import { ButtonHeart } from "./HeartButton.styled";

const HeartButton = ({ isChecked, onClick }) => {
  return (
    <ButtonHeart
      type="button"
      onClick={onClick}
      aria-pressed={isChecked}
      $isFavorite={isChecked}
    >
      <SpriteIcon
        id="icon-heart"
        size={[16, 18, 18]}
      />
    </ButtonHeart>
  );
};

export default HeartButton;
