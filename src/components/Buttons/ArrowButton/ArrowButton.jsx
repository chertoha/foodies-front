import SpriteIcon from "../../UIKit/SpriteIcon/SpriteIcon";
import { ButtonArrow } from "./ArrowButton.styled";

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
