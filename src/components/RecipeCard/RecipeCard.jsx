import {
  CardWrapper,
  Image,
  ActionsContainer,
  Actions,
  TitleCardWrapper,
  Text,
} from "./RecipeCard.styled";
import AvatarButton from "../Buttons/AvatarButton/AvatarButton";
import ArrowButton from "../Buttons/ArrowButton/ArrowButton";
import SectionTitle from "components/SectionTitle";
import FavoriteWrapper from "../FavoriteWrapper/FavoriteWrapper";
import HeartButton from "components/Buttons/HeartButton";

const RecipeCard = ({ recipe, author, isAuthenticated, favorites }) => {
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
          isAuthenticated={isAuthenticated}
          to={`/user/${author.id}`}
        />
        <Actions>
          <FavoriteWrapper
            recipeId={recipe.id}
            Button={HeartButton}
            favorites={favorites}
          />
          <ArrowButton to={`/recipe/${recipe.id}`} />
        </Actions>
      </ActionsContainer>
    </CardWrapper>
  );
};

export default RecipeCard;
