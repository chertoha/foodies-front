import { ButtonArrow } from "./ArrowButton.styled";
import SpriteIcon from "../../UIKit/SpriteIcon/SpriteIcon";

const ArrowButton = ({ to }) => {
  return (
    <ButtonArrow to={to}>
      <SpriteIcon
        id="icon-arrow-up-right"
        size={[16, 18, 18]}
      />
    </ButtonArrow>
  );
};

export default ArrowButton;
