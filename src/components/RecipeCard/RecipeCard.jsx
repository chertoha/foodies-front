import {
  CardWrapper,
  Image,
  ActionsContainer,
  Actions,
  TitleCardWrapper,
  Text,
  ImageWrapper,
} from "./RecipeCard.styled";
import AvatarButton from "../Buttons/AvatarButton/AvatarButton";
import ArrowButton from "../Buttons/ArrowButton/ArrowButton";
import SectionTitle from "components/SectionTitle";
import FavoriteWrapper from "../FavoriteWrapper/FavoriteWrapper";
import HeartButton from "components/Buttons/HeartButton";

const RecipeCard = ({ recipe, author, isAuthenticated }) => {
  return (
    <CardWrapper>
      <ImageWrapper>
        <Image
          loading="lazy"
          src={recipe.thumb}
          alt={recipe.title}
        />
      </ImageWrapper>
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
          />
          <ArrowButton to={`/recipe/${recipe.id}`} />
        </Actions>
      </ActionsContainer>
    </CardWrapper>
  );
};

export default RecipeCard;
