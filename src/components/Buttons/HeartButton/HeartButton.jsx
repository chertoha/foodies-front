import { ButtonHeart } from "./HeartButton.styled";
import SpriteIcon from "../../UIKit/SpriteIcon/SpriteIcon";

const HeartButton = ({ isFavorite, onClick }) => {
  return (
    <ButtonHeart
      type="button"
      onClick={onClick}
      aria-pressed={isFavorite}
      isFavorite={isFavorite}
    >
      <SpriteIcon
        id="icon-heart"
        size={[16, 18, 18]}
      />
    </ButtonHeart>
  );
};

export default HeartButton;
