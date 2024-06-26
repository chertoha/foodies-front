import SubTitle from "components/SubTitle";
import FavoriteButton from "../Buttons/FavoriteButton/FavoriteButton";
import FavoriteWrapper from "../FavoriteWrapper/FavoriteWrapper";
import SectionTitle from "components/SectionTitle";
import {
  RecipePreparationContainer,
  PreparationDescriptionWrapper,
  PreparationTitleWrapper,
  ReadMoreButton,
} from "./RecipePreparation.styled";
import { useState } from "react";

const RecipePreparation = ({ preparation, recipeId }) => {
  const [showFullText, setShowFullText] = useState(false);

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
      <FavoriteWrapper
        recipeId={recipeId}
        Button={FavoriteButton}
      />
    </RecipePreparationContainer>
  );
};

export default RecipePreparation;
