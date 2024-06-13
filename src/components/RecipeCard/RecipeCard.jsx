import { useState } from "react";
import {
  CardWrapper,
  Image,
  ActionsContainer,
  Actions,
  TitleCardWrapper,
  Text,
} from "./RecipeCard.styled";
import AvatarButton from "../Buttons/AvatarButton/AvatarButton";
import HeartButton from "../Buttons/HeartButton/HeartButton";
import ArrowButton from "../Buttons/ArrowButton/ArrowButton";
import SectionTitle from "components/SectionTitle";

const RecipeCard = ({ recipe, author, onToggleFavorite }) => {
  const [isFavorite, setIsFavorite] = useState(recipe.isFavorite);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    onToggleFavorite(recipe.id);
  };

  return (
    <CardWrapper>
      <Image
        src={recipe.thumb}
        alt={recipe.title}
      />
      <TitleCardWrapper>
        <SectionTitle label={recipe.title} />
      </TitleCardWrapper>
      <Text>{recipe.description}</Text>
      <ActionsContainer>
        <AvatarButton author={author} />
        <Actions>
          <HeartButton
            isFavorite={isFavorite}
            onClick={handleFavoriteClick}
          />
          <ArrowButton to={`/recipe/${recipe.id}`} />
        </Actions>
      </ActionsContainer>
    </CardWrapper>
  );
};

export default RecipeCard;
