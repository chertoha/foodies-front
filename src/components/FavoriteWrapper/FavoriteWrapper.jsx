import {
  useAddRecipeToFavoritesMutation,
  useGetFavoriteRecipesQuery,
  useRemoveRecipeFromFavoritesMutation,
} from "../../redux/recipes/recipesApi";

const FavoriteWrapper = ({ recipeId, Button, onToggleFavorite }) => {
  const { data } = useGetFavoriteRecipesQuery();
  const [addToFavorite] = useAddRecipeToFavoritesMutation();
  const [removeFromFavorite] = useRemoveRecipeFromFavoritesMutation();

  const isChecked = data?.includes(recipeId);

  const onClick = async () => {
    try {
      if (isChecked) {
        await removeFromFavorite(recipeId);
      } else {
        await addToFavorite(recipeId);
      }
      if (onToggleFavorite) {
        onToggleFavorite(recipeId);
      }
    } catch (error) {
      console.error("Error toggling favorite status:", error);
    }
  };

  return (
    <>
      <Button
        onClick={onClick}
        isChecked={isChecked}
      />
    </>
  );
};

export default FavoriteWrapper;
