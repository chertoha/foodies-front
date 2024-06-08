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

const RecipeCard = ({ recipe, author, onSignIn, onProfile, onToggleFavorite }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    onToggleFavorite(recipe.id);
  };

  const handleAuthorClick = () => {
    if (!author.isAuthenticated) {
      onSignIn();
    } else {
      onProfile(author.id);
    }
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
        <AvatarButton
          author={author}
          onClick={handleAuthorClick}
        />
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
