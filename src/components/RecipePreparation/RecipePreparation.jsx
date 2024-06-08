import SubTitle from "components/SubTitle";
import {
  RecipePreparationContainer,
  RecipePreparationButton,
  PreparationDescriptionWrapper,
  PreparationTitleWrapper,
} from "./RecipePreparation.styled";
import SectionTitle from "components/SectionTitle";

const RecipePreparation = ({ preparation, isFavorite, onToggleFavorite }) => {
  const handleFavoriteClick = () => {
    onToggleFavorite();
  };

  const paragraphs = preparation.split("\r\n");

  return (
    <RecipePreparationContainer>
      <PreparationTitleWrapper>
        <SectionTitle label={"Recipe Preparation"} />
      </PreparationTitleWrapper>
      <PreparationDescriptionWrapper>
        {paragraphs.map((paragraph, index) => (
          <SubTitle
            key={index}
            label={paragraph}
          />
        ))}
      </PreparationDescriptionWrapper>
      <RecipePreparationButton onClick={handleFavoriteClick}>
        {isFavorite ? "Remove from favorite" : "Add to favorite"}
      </RecipePreparationButton>
    </RecipePreparationContainer>
  );
};

export default RecipePreparation;
