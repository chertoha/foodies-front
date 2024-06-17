import SpriteIcon from "../../UIKit/SpriteIcon/SpriteIcon";
import { ButtonTrash } from "./TrashButton.styled";

const TrashButton = ({ isFavorite, onClick }) => {
  return (
    <ButtonTrash
      type="button"
      onClick={onClick}
      aria-pressed={isFavorite}
      $isFavorite={isFavorite}
    >
      <SpriteIcon
        id="icon-trash"
        size={[16, 18, 18]}
      />
    </ButtonTrash>
  );
};

export default TrashButton;
