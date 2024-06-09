import SubTitle from "components/SubTitle";
import {
  RecipePreparationContainer,
  RecipePreparationButton,
  PreparationDescriptionWrapper,
  PreparationTitleWrapper,
  ReadMoreButton,
} from "./RecipePreparation.styled";
import SectionTitle from "components/SectionTitle";
import { useState } from "react";

const RecipePreparation = ({ preparation, isFavorite, onToggleFavorite }) => {
  const [showFullText, setShowFullText] = useState(false);
  const handleFavoriteClick = () => {
    onToggleFavorite();
  };
  const handleReadMoreClick = () => {
    setShowFullText(!showFullText);
  };

  const paragraphs = preparation.split("\r\n");
  const displayedParagraphs = showFullText ? paragraphs : paragraphs.slice(0, 2);

  return (
    <RecipePreparationContainer>
      <PreparationTitleWrapper>
        <SectionTitle label={"Recipe Preparation"} />
      </PreparationTitleWrapper>
      <PreparationDescriptionWrapper>
        {displayedParagraphs.map((paragraph, index) => (
          <SubTitle
            key={index}
            label={paragraph}
          />
        ))}
        {paragraphs.length > 2 && (
          <ReadMoreButton onClick={handleReadMoreClick}>
            {showFullText ? "Read Less" : "Read More"}
          </ReadMoreButton>
        )}
      </PreparationDescriptionWrapper>
      <RecipePreparationButton onClick={handleFavoriteClick}>
        {isFavorite ? "Remove from favorite" : "Add to favorite"}
      </RecipePreparationButton>
    </RecipePreparationContainer>
  );
};

export default RecipePreparation;
