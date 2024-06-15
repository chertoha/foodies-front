import {
  useDeleteRecipeMutation,
  useRemoveRecipeFromFavoritesMutation,
} from "../../redux/recipes/recipesApi";

import sprite from "assets/images/icons/sprite.svg";
import {
  UserPageList,
  UserPageListItem,
  UserPageListImage,
  SpaceWrapp,
  UserPageWrappText,
  UserPageListTitle,
  UserPageListText,
  ButtonWrapp,
  LinkButton,
  Button,
  Icon,
} from "./UserPageListItems.styled";
const UserPageListItems = ({ recipes, type, refetchRecipes }) => {
  const [deleteMyRecipe, { isLoading: isDeletingMyRecipe }] = useDeleteRecipeMutation();
  const [deleteMyFavoritesRecipe, { isLoading: isDeletingMyFavorite }] =
    useRemoveRecipeFromFavoritesMutation();

  const handleDelete = async id => {
    try {
      if (type === "myRecipes") {
        await deleteMyRecipe(id).unwrap();
      } else if (type === "myFavorites") {
        await deleteMyFavoritesRecipe(id).unwrap();
      }
      refetchRecipes();
    } catch (error) {
      console.error("Failed to delete the recipe:", error);
    }
  };
  return (
    <UserPageList>
      {recipes.map(({ _id, thumb, title, description }) => (
        <UserPageListItem key={title}>
          <UserPageListImage src={thumb} />
          <SpaceWrapp>
            <UserPageWrappText>
              <UserPageListTitle>{title}</UserPageListTitle>
              <UserPageListText>{description}</UserPageListText>
            </UserPageWrappText>

            <ButtonWrapp>
              <LinkButton to={`/recipe/${_id}`}>
                <Icon>
                  <use href={sprite + "#icon-arrow-up-right"}></use>
                </Icon>
              </LinkButton>
              {type !== "userRecipes" && (
                <Button
                  onClick={() => handleDelete(_id)}
                  disabled={isDeletingMyRecipe || isDeletingMyFavorite}
                >
                  <Icon>
                    <use href={sprite + "#icon-trash"}></use>
                  </Icon>
                </Button>
              )}
            </ButtonWrapp>
          </SpaceWrapp>
        </UserPageListItem>
      ))}
    </UserPageList>
  );
};

export default UserPageListItems;
