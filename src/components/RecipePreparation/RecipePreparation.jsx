import {
  RecipePreparationContainer,
  RecipePreparationDescription,
  RecipePreparationTitle,
  RecipePreparationButton,
} from "./RecipePreparation.styled";

const RecipePreparation = ({ preparation, isFavorite, onToggleFavorite }) => {
  const handleFavoriteClick = () => {
    onToggleFavorite();
  };

  const paragraphs = preparation.split("\r\n");

  return (
    <RecipePreparationContainer>
      <RecipePreparationTitle>Recipe Preparation</RecipePreparationTitle>
      {paragraphs.map((paragraph, index) => (
        <RecipePreparationDescription key={index}>{paragraph}</RecipePreparationDescription>
      ))}
      <RecipePreparationButton onClick={handleFavoriteClick}>
        {isFavorite ? "Remove from favorite" : "Add to favorite"}
      </RecipePreparationButton>
    </RecipePreparationContainer>
  );
};

export default RecipePreparation;
