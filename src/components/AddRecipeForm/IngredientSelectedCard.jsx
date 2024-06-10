import { BtnClose } from "components/Modal/Modal.styled";
import SpriteIcon from "components/UIKit/SpriteIcon";
import { useEffect } from "react";

const IngredientCard = ({ ingredient, onDelete }) => {
  useEffect(() => {
    const deleteIngregient = () => {
      onDelete(ingredient.id);
    };
    const { id, name, quantity, image } = ingredient;

    return (
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "5px",
          padding: "10px",
          marginBottom: "10px",
        }}
      >
        <img
          src={image}
          alt={name}
          style={{ width: "100px", height: "100px", objectFit: "cover", marginBottom: "5px" }}
        />
        <h3>{name}</h3>
        <p>Кількість: {quantity}</p>
        <BtnClose
          type="button"
          onClick={deleteIngregient}
        >
          <SpriteIcon
            id="icon-close"
            size={[24, 24, 24]}
          />
        </BtnClose>
      </div>
    );
  });
};

export default IngredientCard;
