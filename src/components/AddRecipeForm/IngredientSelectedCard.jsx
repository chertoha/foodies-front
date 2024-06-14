import { BtnClose } from "components/Modal/Modal.styled";
import SpriteIcon from "components/UIKit/SpriteIcon";
// import { useEffect } from "react";

const IngredientCard = ({ ingredient, onDelete }) => {
  const { _id, name, quantity, img } = ingredient;

  return (
    <li
      style={{
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "10px",

        position: "relative",
      }}
    >
      <img
        src={img}
        alt={name}
        style={{ width: "100px", height: "100px", objectFit: "cover", marginBottom: "5px" }}
      />
      <h3>{name}</h3>
      <p>{quantity}</p>
      <BtnClose
        onClick={() => onDelete(_id)}
        type="button"
      >
        <SpriteIcon
          id="icon-close"
          size={[24, 24, 24]}
        />
      </BtnClose>
    </li>
  );
};

export default IngredientCard;
