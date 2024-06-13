import { RecipePreparationButton } from "./FavoriteButton.styled";

const FavoriteButton = ({ isChecked, onClick }) => {
  return (
    <RecipePreparationButton
      type="button"
      onClick={onClick}
      aria-pressed={isChecked}
      $isFavorite={isChecked}
    >
      {isChecked ? "Remove from favorite" : "Add to favorite"}
    </RecipePreparationButton>
  );
};

export default FavoriteButton;
